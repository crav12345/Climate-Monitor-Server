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

- **[crav12345/ESP32-Climate-Monitor](https://github.com/crav12345/ESP32-Climate-Monitor)**
- **[crav12345/ChrisRavosa.com](https://github.com/crav12345/ChrisRavosa.com)**

## GitHub Deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that deploys the server to **Google Cloud Run** whenever code is pushed or merged to the `main` branch.

Set these **GitHub repository variables** before using it:

- `GCP_PROJECT_ID`: your Google Cloud project ID
- `GCP_REGION`: the Cloud Run region, for example `us-east1`
- `CLOUD_RUN_SERVICE`: the Cloud Run service name to deploy to

Set these **GitHub repository secrets** for GitHub-to-Google authentication:

- `GCP_SA_KEY`: the JSON key for the Google Cloud service account used by the workflow

The service account should have permissions for Cloud Run deployment and Cloud Build, typically including:

- `Cloud Run Admin`
- `Cloud Build Editor`
- `Service Account User`
- `Artifact Registry Writer`

The workflow builds the app with `npm run build`, authenticates to Google Cloud using the service account JSON key, and deploys the repository source directly to Cloud Run.
