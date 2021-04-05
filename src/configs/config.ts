import dotenv from "dotenv";

dotenv.config();

const SERVER = {
  hostname: process.env.SERVER_HOSTNAME || "0.0.0.0",
  port: process.env.SERVER_PORT || 8000,
};

const config = {
  server: SERVER,
};

export default config;
