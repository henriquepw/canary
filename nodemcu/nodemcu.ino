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

// Importando as bibliotecas necessarias
#include "ESP8266WiFi.h"
#include "DHT.h"

//rede Wifi
const char* ssid = "Nome da sua rede wifi";
const char* password = "senha da sua rede wifi";

// Definindo o sensor DHT11
#define DHTPIN 2
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE, 15);

void setup() {
  Serial.begin(9600);
  dht.begin();

  // Conectando na rede wifi
  /*WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }*/
}

void loop() {
  int humidity = dht.readHumidity();

  //Verificando se houve falha na leitura
  if(humidity == 2147483647){
    Serial.println("Falha na leitura");
    delay(10);
    return;
  }
 
  int temp = dht.readTemperature();

  // Calculando o indice de calor
  int tempf = dht.readTemperature(true);
  float ic = dht.computeHeatIndex(tempf, humidity);
  float icC = dht.convertFtoC(ic);
 
  Serial.print("Umidade          : "); Serial.println(humidity);
  Serial.print("Temperatura em C : "); Serial.println(temp);
  Serial.print("Indice de calor  : "); Serial.println(icC);
 
  // Repetindo a cada 6 segundos
  delay(6000);
}
