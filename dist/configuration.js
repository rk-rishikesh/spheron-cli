"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var path_1 = __importDefault(require("path"));
var configuration = {
  spheronServerAddress: "https://api-v2.spheron.network",
  spheronFrontendAddress: "https://app.spheron.network",
  version: "1.0.15",
  configFilePath: path_1["default"].join(process.env.HOME ? process.env.HOME : "/home/ubuntu", ".spheron/config.json"),
  projectTrackingFilePath: path_1["default"].join(process.env.HOME ? process.env.HOME : "/home/ubuntu", ".spheron/project-tracking.json"),
  homePath: process.env.HOME || ""
};
exports["default"] = configuration;