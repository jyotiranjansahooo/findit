import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import http from "http";
import { initsocket } from "./config/socket.js";

dotenv.config();

const app = express();
app.use(helmet());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("Server is running on port " + PORT);
});

const startserver = async () => {
  try {
    const server = http.createServer(app);
    initsocket(server);

    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
startserver();
