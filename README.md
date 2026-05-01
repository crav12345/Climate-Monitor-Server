# Climate Monitor Server

Backend server for a real-time climate monitoring system powered by an ESP32.

This server ingests environmental data (temperature, humidity, etc.) from an embedded device and broadcasts updates to connected web clients in real time.

---

## System Overview

This project is part of a distributed system:

- **Firmware (ESP32)** → collects climate data and sends it to this server  
- **Server (this repo)** → receives data and broadcasts updates  
- **Frontend (website)** → displays live climate data  

### Related Repositories

- Firmware: https://github.com/crav12345/ESP32-Climate-Monitor
- Website: https://github.com/crav12345/ChrisRavosa.com
