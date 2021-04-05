"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Cidades = _interopRequireDefault(require("../models/Cidades"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post("/register", async (req, res) => {
  const user = await _Cidades.default.create(req.body);
  return res.send({
    user
  });
});
router.get("/", (request, response) => {
  return response.json({
    message: "Hello World"
  });
});
var _default = router;
exports.default = _default;