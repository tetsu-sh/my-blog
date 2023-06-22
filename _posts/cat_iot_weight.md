---
title: "猫のIOT体重計作りその１"
excerpt: "making cat iot scaler"
date: "2023-05-19T12:00:00.000Z"
---

## 目的
- 太っている猫と痩せちゃう猫がいるので定点体重観測を自動化したい。
- トイレの量も管理したい。
- 猫のIOT体重計を作り、それをトイレの下に配置する


## 仕組み
- ロードセルを板に貼り付けその板の上にトイレを乗せる。
- ロードセルとマイコンをつなぎ、体重変化があったら、データを送信する。
- 送信先は自宅内PCであり、ローカルネットワーク通信する
  - 安上がりなため
- PCでローカルのサーバーとDBを立ち上げ、マイコンから送られてきた体重を記録する


##　思い出
- ロードセルは最初やすい体重計を分解して、 combinatorでつな剛としたが配線がうまくいかず。ロードセルキットを使用した
- マイコンはM5stackでWifiモジュール付き
- サーバーはこちら
  - https://github.com/tetsu-sh/weight_server
  - ほんとにしょぼいデータをPOSTするだけ。あとそれをGETする
  - Rust
- マイコンファームウェアは以下のコードをarudinoIDEでなんとか,
  - .inoというc言語っぽいやつ
  -　cはよくわからないが、サンプルを組み合わせて作った
- 所定体重以上をマイコンは検出したら、サーバーに送信
  - どれくらいから送信するかが難しい。
- 体重をゼロにするHTTPAPIも一つ。スマホからPOSTできる
- 定期的に体重をゼロにしないと尿、便の重さを送信し続けるので、定期的にゼロにする
- なんとかデータを送る最低限までした。

## やりたいこと
- データを見る画面
  - データの変化とかも見れたら良いし、どの子がしたかもみたい
  - 幸い体重だけで個体を識別できる状況
- トイレの量を記録したい





```c


#include <M5Atom.h>
#include <WiFi.h>
#include <ArduinoJson.h>
#include "HX711.h"
#include <stdio.h>
#include <time.h>

#define LOADCELL_DOUT_PIN 32
#define LOADCELL_SCK_PIN  26

const char* ssid = "hoge";
const char* password = "hoge";

HX711 scale;

void post(float weight) {
  DynamicJsonDocument doc(JSON_OBJECT_SIZE(2));
  struct tm timeInfo;
  const char* ntpServer = "ntp.jst.mfeed.ad.jp";
	const long gmtOffset_sec = 9 * 3600;
	const int daylightOffset_sec = 0;

	configTime(gmtOffset_sec, daylightOffset_sec, ntpServer);
  if(!getLocalTime(&timeInfo)){
    Serial.println("Failed to obtain time");
    return;
  }
  char timeStringBuff[50]; //50 chars should be enough
  strftime(timeStringBuff, sizeof(timeStringBuff), "%A, %B %d %Y %H:%M:%S", &timeInfo);
  Serial.println(timeStringBuff);
  String asString(timeStringBuff);
  doc["timestamp"] = timeStringBuff;
  doc["weight"] = weight;
  String json;
  serializeJson(doc, json);
  Serial.println(json);
  HTTPClient http;
  http.begin("http://localhost:8000/weight");
  http.addHeader("Content-Type", "application/json");
  http.POST(body);
  Serial.println(http.getString());
  http.end();
}


void setup() {
    M5.begin(true, false, true);
    Serial.println("Calibration sensor....");
    M5.dis.fillpix(0xff0000);
    scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);
    // The scale value is the adc value corresponding to 1g
    scale.set_scale(29.71);  // set scale 57500/1935
    scale.tare();             // auto set offset
    Serial.println(scale.get_units(10));
    M5.dis.fillpix(0x00ff00);
    Serial.println("Connect the Weight Unit to PortA(G26,32)");
    Serial.println("Click Btn A for Tare deduction");
    Serial.println("Click Btn B Switch to Calibration mode");
    WiFi.begin(ssid, password);
    int wifiReconnectCount = 0;
    while (WiFi.status() != WL_CONNECTED) {
      if (wifiReconnectCount >= 300) { ESP.restart(); }
      wifiReconnectCount++;
      Serial.println(wifiReconnectCount);
      delay(100);
    }
}

void loop() {
    

    Serial.println(scale.get_units(10));
    float weight = scale.get_units(10)/1000.0;
    if (weight >= 0) {
        Serial.printf("Weight: %.2fkg \r\n", weight);
        post(weight);
        Serial.println("POST");
    } else {
        Serial.println("Weight: 0.00kg");
    }
    M5.update();
    if (M5.Btn.wasPressed()) {
        M5.dis.setBrightness(100);
        M5.dis.fillpix(0x0000ff);
        scale.tare();
        delay(500);
        M5.dis.fillpix(0x00ff00);
    }
    M5.dis.setBrightness(map(int(weight), 0, 5, 0, 100));
    FastLED.show();
}
```