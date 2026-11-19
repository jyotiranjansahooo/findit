import { Server } from "socket.io";
import http from "http";

let io;

export const initsocket = (httpServer) => {
  io = new Server(httpServer, {
    cors: {
      origin: "localhost://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
  io.on("connection", (socket) => {
    console.log("connected", socket.id);
    socket.on("disconnecte", () => {
      console.log("disconnected", socket.id);
    });
  });
  return io;
};
export { io };
