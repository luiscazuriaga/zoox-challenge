"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _UsersController = _interopRequireDefault(require("./controllers/UsersController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v1Router = (0, _express.Router)();
v1Router.use("/user", _UsersController.default);
var _default = v1Router;
exports.default = _default;