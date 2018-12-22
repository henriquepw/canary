
#include "ESP8266HTTPUpdateServer.h"
#include "ESP8266WebServer.h"
#include "ESP8266WiFi.h"
#include "DHT.h"

/*
  Equivalencia das saidas Digitais entre NodeMCU e ESP8266
  D0 = 16
  D1 = 5
  D2 = 4
  D3 = 0
  D4 = 2
  D5 = 14
  D6 = 12
  D7 = 13
  D8 = 15
  D9 = 3
  D10 = 1
*/

// Definindo o sensor DHT11
#define DHTPIN 2
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE, 15);

//rede Wifi
const char* ssid = "";
const char* password = "";

ESP8266WebServer server(80);
ESP8266HTTPUpdateServer upServer;

IPAddress ip(192, 168, 0, 180);
IPAddress gateway(192, 168, 0, 1);
IPAddress subnet(255, 255, 255, 0);

String page = "";

int temp = 0;
int humidity = 0;
float icC = 0;

void initPage() {
  page += "<!DOCTYPE html> <html> <head>";
  page += "<meta charset=\"utf-8\" />";
  page += "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">";
  page += "<title>NodeMCU</title>";
  page += "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">";
  page += "</head> <body>";  
}

void handleRoot() {
  String buff = page;
  buff +=  "<table border=\"1px\">";
  buff += "<tr> <td> Umidade </td>";
  buff += "<td> " + String(humidity) + " </td>";
  buff += "</tr>";
  buff += "<tr> <td> Temperatura </td>";
  buff += "<td> " + String(temp) + " ºC </td>";
  buff += "</tr>";
  buff += "<tr> <td> Indice de calor </td>";
  buff += "<td> " + String(icC) + " ºC </td>";
  buff += "</tr> </table> </body> </html>";

  server.send(200, "text/html", buff);
}

void setup() {
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

void loop() {
  server.handleClient();
  humidity = dht.readHumidity();

  //Verificando se houve falha na leitura
  if(humidity == 2147483647){
    Serial.println("Falha na leitura");
    delay(10);
    return;
  }
 
  temp = dht.readTemperature();

  // Calculando o indice de calor
  int tempf = dht.readTemperature(true);
  float ic = dht.computeHeatIndex(tempf, humidity);
  icC = dht.convertFtoC(ic);

  Serial.print("Umidade          : "); Serial.println(humidity);
  Serial.print("Temperatura em C : "); Serial.println(temp);
  Serial.print("Indice de calor  : "); Serial.println(icC);
 
  // Repetindo a cada 6 segundos
  delay(10000);
}
