import { WebSocketServer, WebSocket } from "ws";
import { Server } from "http";

const clients = new Set<WebSocket>();

function toBroadcastMessage(text: string) {
  try {
    JSON.parse(text);
    return text;
  } catch {
    return JSON.stringify({
      type: "message",
      payload: text,
    });
  }
}

export function setupWebSocket(server: Server) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    console.log("Client connected");
    clients.add(ws);

    ws.on("message", (message) => {
      const text = message.toString();
      console.log("Received:", text);
      broadcast(toBroadcastMessage(text));
    });

    ws.on("close", () => {
      console.log("Client disconnected");
      clients.delete(ws);
    });

    ws.send(
      JSON.stringify({
        type: "connected",
        payload: "Connected to WebSocket server",
      }),
    );
  });

  return wss;
}

export function broadcast(message: string) {
  for (const client of clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  }
}
