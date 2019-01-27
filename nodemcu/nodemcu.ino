#include "ESP8266HTTPUpdateServer.h"
#include "ESP8266WebServer.h"
#include "ESP8266WiFi.h"
#include "WiFiClient.h"
#include "EEPROM.h"
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

IPAddress local_IP(192,168,4,22);
IPAddress local_gateway(192,168,4,9);
IPAddress local_subnet(255,255,255,0);

const char* local_ssid = "canary";
const char* local_password = "12345678";

int condition = 0;
int id = -1;
String network_wifi = "doriedson";
String password_wifi = "";

int temperature = 0;
int humidity = 0;
float icC = 0;

float ppm_co = 0;
float ppm_co2 = 0;
float ppm_nh4 = 0;

String page = "";

ESP8266WebServer server (80);
ESP8266HTTPUpdateServer upServer;

WiFiClient client;
IPAddress service(192,168,0,198);

String EEPROMReadString(int init){
  String value = "";
  int len = EEPROM.read(init);
  
  for(int i = 0; i < len; i++) 
    value += (char) EEPROM.read(i+init+1);
    
  return value;
}

void EEPROMWriteString(int limit, int init, String value){
  int len = value.length() > limit ? limit : value.length();
  
  EEPROM.write(init, len);

  for(int i = 0; i < len; i++)
    EEPROM.write(i+init+1, value[i]);
}

void initPage(){
  page += "<!DOCTYPE html> <html> <head>";
  page += "<meta charset=\"utf-8\" />";
  page += "<title>Canary Beta</title>";
  page += "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">";
  page += "</head> <body>";
}

void handleRootGet(){
  String buff = page;
  
  buff += "<form action=\"/form\" method=\"GET\">";
  buff += "<table> <tr>";

  buff += "<td>ID:</td>";
  buff += "<td>" + String(id) + "</td>";
  buff += "</tr> <tr>";

  buff += "<td>Rede WiFi:</td>";
  buff += "<td>" + String(network_wifi) + "</td>";
  buff += "</tr> </table>";

  buff += "<button>Atualizar Dados</button>";

  buff += "</form> </body> </html>";

  server.send(200, "text/html", buff);
}

void handleRootPost(){
  if (server.hasArg("id") && server.hasArg("net") && server.hasArg("password")) {
    EEPROM.begin(100);

    EEPROM.write(0, 1); // condition
    EEPROM.write(1, server.arg("id").toInt()); // id
    
    EEPROMWriteString(32, 2, server.arg("net"));
    EEPROMWriteString(32, 36, server.arg("password"));

    id = EEPROM.read(1);
    Serial.println(id);
  
    network_wifi = EEPROMReadString(2);
    Serial.println(network_wifi);

    password_wifi = EEPROMReadString(36);
    Serial.println(password_wifi);

    connectWiFi();
    
    EEPROM.end();
  }

  handleRootGet();
}

void handleForm(){
  String buff = page;
  
  buff += "<form action=\"/\" method=\"POST\">";
  buff += "<table> <tr>";

  buff += "<td>ID:</td>";
  buff += "<td><input type=\"number\" name=\"id\" /></td>";
  buff += "</tr> <tr>";

  buff += "<td>Rede WiFi:</td>";
  buff += "<td><input type=\"text\" name=\"net\" /></td>";
  buff += "</tr> <tr>";

  buff += "<td>Senha:</td>";
  buff += "<td><input type=\"password\" name=\"password\" /></td>";
  buff += "</tr> </table>";

  buff += "<button>Enviar</button>";

  buff += "</form> </body> </html>";

  server.send(200, "text/html", buff);
}

void handleStatus(){
  String buff = "<!DOCTYPE html> <html> <head>";
  
  buff += "<meta charset=\"utf-8\" />";
  buff += "<title>Canary Beta</title>";
  buff += "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">";
  buff += "<meta http-equiv=\"refresh\" content=\"5\">";
  buff += "</head> <body>";
  
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
  Serial.println();
  
  EEPROM.begin(100);
  
  condition = EEPROM.read(0);
  Serial.println(condition);
  
  id = EEPROM.read(1);
  Serial.println(id);

  network_wifi = EEPROMReadString(2);
  Serial.println(network_wifi);

  password_wifi = EEPROMReadString(36);
  Serial.println(password_wifi);

  EEPROM.end();

  Serial.print("Configurando Rede... ");
  Serial.println(WiFi.softAPConfig(local_IP, local_gateway, local_subnet) ? "Ready" : "Failed!");

  Serial.print("Iniciando Rede WiFi... ");
  Serial.println(WiFi.softAP(local_ssid, local_password) ? "Ready" : "Failed!");

  Serial.print("IP address = ");
  Serial.println(WiFi.softAPIP());
  
  initPage();

  upServer.setup(&server);
  server.on("/", HTTP_GET, handleRootGet);
  server.on("/", HTTP_POST, handleRootPost);
  server.on("/form", handleForm);
  server.on("/status", handleStatus);

  server.begin();

  if(condition){
    connectWiFi();
  }
}

void connectWiFi(){
  dht.begin();

  // Conectando na rede wifi
  Serial.print("Conectando a rede wifi...");
  
  const char *ssid = "doriedson ultranet";
  const char *password = "78623517";
  
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED){
    delay(500);
    Serial.print(".");
  }

  Serial.print(" Conectado, Ip: ");
  Serial.println(WiFi.localIP());
}

void loop(){
  server.handleClient();
  if(condition) readings();
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

  delay(500);

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

String get_json(){
  String json = "{";

  json += "\"temperature\": " + String(temperature) + ", ";
  json += "\"humidity\": " + String(humidity) + ", ";
  json += "\"co\": " + String(ppm_co) + ", ";
  json += "\"co2\": " + String(ppm_co2) + ", ";
  json += "\"nh4\": " + String(ppm_nh4);

  json += "}";

  return json;
}

void post(String json){
  if (client.connect(service, 3000)){
    Serial.print("Connected - ");
    Serial.println(json);

    String link = "PUT /canaries/" + String(id) + "HTTP/1.1");
    client.println(link);
    client.println("Host: 192.168.0.198");
    client.println("User-Agent: NodeMCU");
    client.println("Content-Type: application/json");
    client.println("Connection: Close");
    client.print("Content-Length: ");
    client.println(json.length());
    client.println();
    client.println(json);
    client.stop();

    Serial.println("Client has closed");
  } else {
    Serial.println("Connection failed");
  }
}

void readings(){
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

  ppm_co = get_gas(CO);
  ppm_co2 = get_gas(CO2);
  ppm_nh4 = get_gas(NH4);

  Serial.print("Umidade          : ");
  Serial.println(humidity);

  Serial.print("Temperatura em C : ");
  Serial.println(temperature);

  Serial.print("Indice de calor  : ");
  Serial.println(icC);

  Serial.print("Leitura: ");
  Serial.println(analogRead(MQ_PIN_ANG));

  Serial.print(" PPM de CO: ");
  Serial.println(ppm_co);

  Serial.print(" PPM de CO2: ");
  Serial.println(ppm_co2);

  Serial.print(" PPM de NH4: ");
  Serial.println(ppm_nh4);

  post(get_json());
  
  delay(1000);
}
