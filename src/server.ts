import express from "express";
import http from "http";
import { setupWebSocket } from "./websocket.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server is running");
});

// Keep server reference so we can upgrade http connections to websockets.
const server = http.createServer(app);

setupWebSocket(server);

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
