import express from "express";
import http from "http";
import { setupWebSocket, broadcast } from "./websocket.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Server is running");
});

app.post("/climate", (req, res) => {
  console.log("Climate data received:", req.body);

  broadcast(
    JSON.stringify({
      type: "climate_update",
      payload: req.body,
    }),
  );

  res.status(200).json({
    success: true,
  });
});

// Keep server reference so we can upgrade http connections to websockets.
const server = http.createServer(app);

setupWebSocket(server);

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
