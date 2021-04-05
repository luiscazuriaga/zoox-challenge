"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongo = _interopRequireDefault(require("../configs/mongo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mongoUserPass = _mongo.default.username ? `${_mongo.default.username}:${_mongo.default.password}@` : "";
const mongoURL = `mongodb://${mongoUserPass}${_mongo.default.host}:${_mongo.default.port}/${_mongo.default.database}`;
const mongo2 = `mongodb://${_mongo.default.host}:${_mongo.default.port}/${_mongo.default.database}`;

_mongoose.default.connect(mongo2, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});