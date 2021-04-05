"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const SERVER = {
  hostname: process.env.SERVER_HOSTNAME || "0.0.0.0",
  port: process.env.SERVER_PORT || 8000
};
const config = {
  server: SERVER
};
var _default = config;
exports.default = _default;