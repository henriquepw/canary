
#include "ESP8266HTTPUpdateServer.h"
#include "ESP8266WebServer.h"
#include "ESP8266WiFi.h"
#include "math.h"
#include "DHT.h"

/* 
 * Equivalencia das saidas Digitais entre NodeMCU e ESP8266
 * D0 = 16
 * D1 = 5
 * D2 = 4
 * D3 = 0
 * D4 = 2
 * D5 = 14
 * D6 = 12
 * D7 = 13
 * D8 = 15
 * D9 = 3
 * D10 = 1
 */

// Pino do DHT11
#define DHTPIN 2
#define DHTTYPE DHT11

// Pinos do MQ-135
#define MQ_PIN_DIG 12
#define MQ_PIN_ANG A0

// Variaveis de calibração
#define CALIBRATION_SAMPLING_TIME 100
#define NUMBER_OF_CALIBRATION_SAMPLE 1000

#define VOLT_STEP 0.004883     // Voltagem na leitura da porta analogica 5/1023
#define RL_MQ135 10000         // Valor da resistência de carga para o sensor MQ135
#define R_STANDARD_MQ135 27338 // Valor de R0 para o sensor MQ135 padrão

// Gases
#define CO 1
#define CO2 2
#define NH4 0

float constants[3][2] = {
    0.88422, 0.43706, // nh4
    0.77915, 0.28884, // co
    0.79349, 0.38306  // co2
};

float R0 = R_STANDARD_MQ135;

DHT dht(DHTPIN, DHTTYPE, 15);

//rede Wifi
const char *ssid = "";
const char *password = "";

ESP8266WebServer server(80);
ESP8266HTTPUpdateServer upServer;

IPAddress ip(192, 168, 0, 180);
IPAddress gateway(192, 168, 0, 1);
IPAddress subnet(255, 255, 255, 0);

String page = "";

int temperature = 0;
int humidity = 0;
float icC = 0;

float ppm_co = 0;
float ppm_co2 = 0;
float ppm_nh4 = 0;

void initPage(){
  page += "<!DOCTYPE html> <html> <head>";
  page += "<meta charset=\"utf-8\" />";
  page += "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">";
  page += "<title>NodeMCU</title>";
  page += "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">";
  page += "</head> <body>";
}

void handleRoot(){
  String buff = page;
  buff += "<table border=\"1px\">";
  buff += "<tr> <td> Umidade </td>";
  buff += "<td> " + String(humidity) + " </td>";
  buff += "</tr>";
  buff += "<tr> <td> Temperatura </td>";
  buff += "<td> " + String(temperature) + " ºC </td>";
  buff += "</tr>";
  buff += "<tr> <td> Indice de calor </td>";
  buff += "<td> " + String(icC) + " ºC </td>";
  buff += "</tr>";
  buff += "<tr> <td> CO </td>";
  buff += "<td> " + String(ppm_co) + " PPM </td>";
  buff += "</tr>";
  buff += "<tr> <td> CO2 </td>";
  buff += "<td> " + String(ppm_co2) + " PPM </td>";
  buff += "</tr>";
  buff += "<tr> <td> NH4 </td>";
  buff += "<td> " + String(ppm_nh4) + " PPM </td>";

  buff += "</tr> </table> </body> </html>";

  server.send(200, "text/html", buff);
}

void setup(){
  Serial.begin(9600);
  dht.begin();

  // Conectando na rede wifi
  Serial.println("Conectando a rede wifi...");

  WiFi.config(ip, gateway, subnet);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED)
    delay(500);

  Serial.println("Conectado");

  initPage();

  upServer.setup(&server);
  server.on("/", handleRoot);
  server.begin();
}

void loop(){
  server.handleClient();
  humidity = dht.readHumidity();

  //Verificando se houve falha na leitura
  if (humidity == 2147483647){
    Serial.println("Falha na leitura");
    delay(10);
    return;
  }

  temperature = dht.readTemperature();

  // Calculando o indice de calor
  int tempf = dht.readTemperature(true);
  float ic = dht.computeHeatIndex(tempf, humidity);
  icC = dht.convertFtoC(ic);

  Serial.print("Umidade          : ");
  Serial.println(humidity);

  Serial.print("Temperatura em C : ");
  Serial.println(temperature);

  Serial.print("Indice de calor  : ");
  Serial.println(icC);

  Serial.print("Leitura: ");
  Serial.println(analogRead(MQ_PIN_ANG));

  ppm_co = get_gas(CO);
  ppm_co2 = get_gas(CO2);
  ppm_nh4 = get_gas(NH4);

  Serial.print(" PPM de CO: ");
  Serial.println(ppm_co);

  Serial.print(" PPM de CO2: ");
  Serial.println(ppm_co2);

  Serial.print(" PPM de NH4: ");
  Serial.println(ppm_nh4);
  
  delay(10000);
}

float get_gas(int gas){
  float const1 = constants[gas][0];
  float const2 = constants[gas][1];

  int reading = analogRead(MQ_PIN_ANG);

  float RS = RL_MQ135 * ((5 / (VOLT_STEP * reading)) - 1);
  float ratio = Ajust_ratio((RS / R0));
  float PPM = pow(10, ((-log10(ratio) + const1) / const2));

  return PPM;
}

/*
 * Ajusta o valor da razão r0/rs de acordo com a temperatura e umidade
 * de acordo com as tabelas fornecidas no datasheet
 */
float Ajust_ratio(int r){
  float ajusted_ratio = 0;

  // Valor de correcao da razao a 33% de umidade
  float max_value_ratio = 0;

  // Valor de correcao da razao a 85% de umidade
  float min_value_ratio = 0;

  if (humidity > 85 || humidity < 33 || temperature < 0 || temperature > 50)
    return NAN;

  delay(1000);

  // Curva para 33% de umidade
  max_value_ratio = -0.000005 * pow(temperature, 3) + 0.000653 * pow(temperature, 2) - 0.028508 * temperature + 1.366829;

  // Curva para 85% de umidade
  min_value_ratio = -0.0000046 * pow(temperature, 3) + 0.000573 * pow(temperature, 2) - 0.025026 * temperature + 1.2384997;

  // Interpolacao entre os valores maximos e minimos e a umidade
  ajusted_ratio = r * (max_value_ratio + (min_value_ratio - max_value_ratio) * (humidity - 33) / 52);

  return ajusted_ratio;
}

/* Calcula o valor de R0. 
 * Assume-se que o sensor está sendo calibrado em um ambiente com ar limpo
 */
float Calibration(){
  float R0_calibrated = 0;
  float sensor_resistence_clean_air = 0;
  int analog_read = 0;

  for (int i = 0; i < NUMBER_OF_CALIBRATION_SAMPLE; i++){
    analog_read = analogRead(MQ_PIN_ANG);
    sensor_resistence_clean_air += RL_MQ135 * ((5 / (0.004883 * analog_read)) - 1);
    delay(CALIBRATION_SAMPLING_TIME);

    Serial.print((i * 100 / NUMBER_OF_CALIBRATION_SAMPLE));
    Serial.println("% - calibrado");
  }

  // 3.67 é o padrão para ar limpo
  R0_calibrated = sensor_resistence_clean_air /
                  (Ajust_ratio(3.67) *
                   NUMBER_OF_CALIBRATION_SAMPLE);

  return R0_calibrated;
}
