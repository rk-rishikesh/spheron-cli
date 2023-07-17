"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var wait_1 = __importDefault(require("./wait"));
var chalk = require("chalk");
var Spinner = /*#__PURE__*/_createClass(function Spinner() {
  var _this = this;
  _classCallCheck(this, Spinner);
  this.spin = function (message) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
    var type = arguments.length > 2 ? arguments[2] : undefined;
    if (_this._spinner) {
      _this._spinner.text = message;
    } else {
      _this._spinner = (0, wait_1["default"])({
        text: message,
        spinner: type ? type : "dots"
      }, delay);
    }
  };
  this.stop = function () {
    if (_this._spinner) {
      _this._spinner();
      _this._spinner = null;
    }
  };
  this.success = function (str) {
    console.log("\n".concat(chalk.green("✓")).concat(chalk.cyan(" Success!"), " ").concat(str));
  };
  this._spinner = null;
});
exports["default"] = Spinner;