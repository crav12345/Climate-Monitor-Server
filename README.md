# Climate Monitor Server

Backend server for a real-time climate monitoring system powered by an ESP32.

This server ingests environmental data (temperature, humidity, etc.) from an embedded device and broadcasts updates to connected web clients in real time.

---

## System Overview

This project is part of a distributed system:

- **ESP32 Firmware** → collects climate data and sends it to this server
- **Server (this repo)** → receives data and broadcasts updates  
- **[ChrisRavosa.com](https://www.chrisravosa.com/)** → displays live climate data  

### Related Repositories

- **[ESP32-Climate-Monitor](https://github.com/crav12345/ESP32-Climate-Monitor)**
- **[ChrisRavosa.com](https://github.com/crav12345/ChrisRavosa.com)**
