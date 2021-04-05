import "reflect-metadata";
import express from "express";
import cors from "cors";
import config from "@configs/config";
import logger from "@configs/logging";
import routes from "./routes/routes";

import "./database/index";
import { resolveConfig } from "prettier";

const NAMESPACE = "Server";
const app = express();

// Logging resquests
app.use((req, res, next) => {
  // MONTAR NO LOGGING CASO NÃO APAREÇA EM OUTRO LUGAR
  const logBase = `METHOD - [${req.method}],
    URL - [${req.url}], IP - [${req.socket.remoteAddress}]`;

  logger("log", NAMESPACE, logBase);

  res.on("finish", () => {
    logger("log", NAMESPACE, logBase + `, STATUS - [${res.statusCode}]`);
  });
  next();
});
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1", routes);

app.listen(config.server.port, () =>
  logger(
    "log",
    NAMESPACE,
    `Server running on ${config.server.hostname}:${config.server.port}`
  )
);

export default app;
