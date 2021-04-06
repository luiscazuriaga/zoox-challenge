import "reflect-metadata";
import express from "express";
import cors from "cors";

import config from "@configs/config";
import logger from "@middlewares/logging";
import routes from "@routes/routes";
import setup from "@configs/swaggerConfig";
import "./database/index";

const NAMESPACE = "Server";
const app = express();

// Logs
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

// Routes
app.use("/api/v1", routes);

// Swagger
setup(app);

//Server
app.listen(config.server.port, () =>
  logger(
    "log",
    NAMESPACE,
    `Server running on ${config.server.hostname}:${config.server.port}`
  )
);

export default app;
