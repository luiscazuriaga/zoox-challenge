"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _config = _interopRequireDefault(require("./configs/config"));

var _logging = _interopRequireDefault(require("./configs/logging"));

var _routes = _interopRequireDefault(require("./routes"));

require("./database/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NAMESPACE = "Server";
const app = (0, _express.default)(); // Logging resquests

app.use((req, res, next) => {
  // MONTAR NO LOGGING CASO NÃO APAREÇA EM OUTRO LUGAR
  const logBase = `METHOD - [${req.method}],
    URL - [${req.url}], IP - [${req.socket.remoteAddress}]`;
  (0, _logging.default)("log", NAMESPACE, logBase);
  res.on("finish", () => {
    (0, _logging.default)("log", NAMESPACE, logBase + `, STATUS - [${res.statusCode}]`);
  });
  next();
});
app.use((0, _cors.default)());
app.use(_express.default.json());
app.listen(_config.default.server.port, () => (0, _logging.default)("log", "Server", `Server running on ${_config.default.server.hostname}:${_config.default.server.port}`));
app.use(_routes.default);
var _default = app;
exports.default = _default;