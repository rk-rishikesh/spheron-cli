"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progressBar = void 0;
function progressBar(current, total) {
  var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _opts$width = opts.width,
    width = _opts$width === void 0 ? 20 : _opts$width,
    _opts$complete = opts.complete,
    complete = _opts$complete === void 0 ? "=" : _opts$complete,
    _opts$incomplete = opts.incomplete,
    incomplete = _opts$incomplete === void 0 ? "-" : _opts$incomplete;
  if (total <= 0 || current < 0 || current > total) {
    return null;
  }
  var unit = total / width;
  var pos = Math.floor(current / unit);
  return "".concat(complete.repeat(pos)).concat(incomplete.repeat(width - pos));
}
exports.progressBar = progressBar;