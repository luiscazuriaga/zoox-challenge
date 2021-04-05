"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const getTimeStamp = () => {
  return new Date().toISOString();
};

const logger = (type, namespace, message, object) => {
  console[type](`[${getTimeStamp()}] [${type.toUpperCase()}] [${namespace}] ${message}`, object || "");
};

var _default = logger;
exports.default = _default;