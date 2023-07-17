"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = void 0 && (void 0).__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTestCases = exports.transpileCode = exports.improveCode = exports.findBugsInCode = exports.updateCode = exports.generateCodeBasedOnFile = exports.generateCode = exports.FixBugEnum = exports.CommandEnum = void 0;
var fs = __importStar(require("fs"));
var spinner_1 = __importDefault(require("../outputs/spinner"));
var spheron_api_1 = __importDefault(require("../services/spheron-api"));
var utils_1 = require("../utils");
var prompts_1 = require("../prompts/prompts");
var REGEX = /@fname\s*\n{1,2}(.*?)\s*\n{1,2}@code-start\s*\n([\s\S]*?)@code-end/g;
var CommandEnum;
(function (CommandEnum) {
  CommandEnum["UPDATE"] = "update";
  CommandEnum["FINDBUGS"] = "findbugs";
  CommandEnum["IMPROVE"] = "improve";
  CommandEnum["TRANSPILE"] = "transpile";
  CommandEnum["TEST"] = "ctc";
})(CommandEnum = exports.CommandEnum || (exports.CommandEnum = {}));
var FixBugEnum;
(function (FixBugEnum) {
  FixBugEnum["YES"] = "Yes";
  FixBugEnum["NO"] = "No";
})(FixBugEnum = exports.FixBugEnum || (exports.FixBugEnum = {}));
function generateCode(prompt) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var spinner, spinnerMessage, startTime, formattedPrompt, gptResponse, matches, generatedFiles, endTime, elapsedTime;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          spinner = new spinner_1["default"]();
          spinnerMessage = "Generating code...";
          startTime = Date.now();
          _context.prev = 3;
          formattedPrompt = prompt[0].toUpperCase() + prompt.slice(1);
          _context.next = 7;
          return spheron_api_1["default"].generateCode(spinner, spinnerMessage, "Generate", formattedPrompt);
        case 7:
          gptResponse = _context.sent;
          if (gptResponse === null || gptResponse === void 0 ? void 0 : gptResponse.response) {
            _context.next = 10;
            break;
          }
          throw {
            message: "You need to login first using 'spheron login'."
          };
        case 10:
          matches = _toConsumableArray(gptResponse.response.matchAll(REGEX));
          generatedFiles = [];
          if (matches[0]) {
            _context.next = 15;
            break;
          }
          (0, utils_1.createLog)("./error.log", "Unexpected Response. Please try again!");
          throw new Error("Unexpected Response. Please try again!");
        case 15:
          matches.forEach(function (match) {
            var filename = match[1].trim();
            var code = match[2].replace(/```/g, " ").trim();
            generatedFiles.push({
              filename: filename,
              code: code
            });
          });
          generatedFiles.forEach(function (file) {
            fs.writeFileSync((0, utils_1.generateFilePath)(file.filename), file.code);
          });
          if (generatedFiles[0]) {
            _context.next = 20;
            break;
          }
          (0, utils_1.createLog)("./error.log", "Unexpected Response. Please try again!");
          throw new Error("Unexpected Response. Please try again!");
        case 20:
          endTime = Date.now();
          elapsedTime = Math.round((endTime - startTime) / 1000);
          spinner.success("Successfully generated the following files: ".concat((0, utils_1.generateFilesString)(generatedFiles), " in ").concat(elapsedTime, "s! \uD83C\uDF89"));
          _context.next = 29;
          break;
        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](3);
          console.log("\u2716\uFE0F  Error: ".concat(_context.t0.message));
          (0, utils_1.createLog)("./error.log", _context.t0.message);
        case 29:
          _context.prev = 29;
          spinner.stop();
          return _context.finish(29);
        case 32:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 25, 29, 32]]);
  }));
}
exports.generateCode = generateCode;
function generateCodeBasedOnFile(prompt, filepath) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var spinner, spinnerMessage, startTime, fileText, formattedPrompt, gptResponse, matches, generatedFiles, endTime, elapsedTime;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          spinner = new spinner_1["default"]();
          spinnerMessage = "Generating files...";
          startTime = Date.now();
          _context2.prev = 3;
          fileText = fs.readFileSync(filepath, "utf8");
          formattedPrompt = prompt[0].toUpperCase() + prompt.slice(1);
          _context2.next = 8;
          return spheron_api_1["default"].generateCode(spinner, spinnerMessage, "Based", formattedPrompt, fileText);
        case 8:
          gptResponse = _context2.sent;
          if (gptResponse.response) {
            _context2.next = 11;
            break;
          }
          throw {
            message: "You need to login first using 'spheron login'."
          };
        case 11:
          matches = _toConsumableArray(gptResponse.response.matchAll(REGEX));
          generatedFiles = [];
          if (matches[0]) {
            _context2.next = 16;
            break;
          }
          (0, utils_1.createLog)("./error.log", "Unexpected Response. Please try again!");
          throw new Error("Unexpected Response. Please try again!");
        case 16:
          matches.forEach(function (match) {
            var filename = match[1].trim();
            var code = match[2].replace(/```/g, " ").trim();
            generatedFiles.push({
              filename: filename,
              code: code
            });
          });
          generatedFiles.forEach(function (file) {
            fs.writeFileSync((0, utils_1.generateFilePath)(file.filename), file.code);
          });
          if (generatedFiles[0]) {
            _context2.next = 21;
            break;
          }
          (0, utils_1.createLog)("./error.log", "Unexpected Response. Please try again!");
          throw new Error("Unexpected Response. Please try again!");
        case 21:
          endTime = Date.now();
          elapsedTime = Math.round((endTime - startTime) / 1000);
          spinner.success("Successfully generated the following files: ".concat((0, utils_1.generateFilesString)(generatedFiles), " in ").concat(elapsedTime, "s! \uD83C\uDF89"));
          _context2.next = 30;
          break;
        case 26:
          _context2.prev = 26;
          _context2.t0 = _context2["catch"](3);
          console.log("\u2716\uFE0F  Error: ".concat(_context2.t0.message));
          (0, utils_1.createLog)("./error.log", _context2.t0.message);
        case 30:
          _context2.prev = 30;
          spinner.stop();
          return _context2.finish(30);
        case 33:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 26, 30, 33]]);
  }));
}
exports.generateCodeBasedOnFile = generateCodeBasedOnFile;
function updateCode(prompt, filepath) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var spinner, spinnerMessage, startTime, fileText, formattedPrompt, gptResponse, matches, generatedFiles, endTime, elapsedTime;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          spinner = new spinner_1["default"]();
          spinnerMessage = "Updating code...";
          startTime = Date.now();
          _context3.prev = 3;
          fileText = fs.readFileSync(filepath, "utf8");
          formattedPrompt = prompt[0].toUpperCase() + prompt.slice(1);
          _context3.next = 8;
          return spheron_api_1["default"].generateCode(spinner, spinnerMessage, "Update", formattedPrompt, fileText);
        case 8:
          gptResponse = _context3.sent;
          if (gptResponse.response) {
            _context3.next = 11;
            break;
          }
          throw {
            message: "You need to login first using 'spheron login'."
          };
        case 11:
          matches = _toConsumableArray(gptResponse.response.matchAll(REGEX));
          generatedFiles = [];
          if (matches[0]) {
            _context3.next = 16;
            break;
          }
          (0, utils_1.createLog)("./error.log", "Unexpected Response. Please try again!");
          throw new Error("Unexpected Response. Please try again!");
        case 16:
          matches.forEach(function (match) {
            var filename = match[1].trim();
            var code = match[2].replace(/```/g, " ").trim();
            generatedFiles.push({
              filename: filename,
              code: code
            });
          });
          generatedFiles.forEach(function (file) {
            fs.writeFileSync(filepath, file.code);
          });
          if (generatedFiles[0]) {
            _context3.next = 21;
            break;
          }
          (0, utils_1.createLog)("./error.log", "Unexpected Response. Please try again!");
          throw new Error("Unexpected Response. Please try again!");
        case 21:
          endTime = Date.now();
          elapsedTime = Math.round((endTime - startTime) / 1000);
          spinner.success("File: ".concat(filepath, " updated successfully in ").concat(elapsedTime, "s!"));
          _context3.next = 30;
          break;
        case 26:
          _context3.prev = 26;
          _context3.t0 = _context3["catch"](3);
          console.log("\u2716\uFE0F  Error: ".concat(_context3.t0.message));
          (0, utils_1.createLog)("./error.log", _context3.t0.message);
        case 30:
          _context3.prev = 30;
          spinner.stop();
          return _context3.finish(30);
        case 33:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[3, 26, 30, 33]]);
  }));
}
exports.updateCode = updateCode;
function findBugsInCode(filepath) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var spinner, spinnerMessage, fileText, gptResponse, fixBug, spinnerFixMessage, startTime, _gptResponse, matches, generatedFiles, endTime, elapsedTime;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          spinner = new spinner_1["default"]();
          spinnerMessage = "Searching for bugs in your code \uD83D\uDC1B ...";
          _context4.prev = 2;
          fileText = fs.readFileSync(filepath, "utf8");
          _context4.next = 6;
          return spheron_api_1["default"].generateCode(spinner, spinnerMessage, "Find", fileText);
        case 6:
          gptResponse = _context4.sent;
          if (gptResponse.response) {
            _context4.next = 9;
            break;
          }
          throw {
            message: "You need to login first using 'spheron login'."
          };
        case 9:
          (0, utils_1.createLog)("./bugs.log", gptResponse.response);
          spinner.success("Bugs search completed! Check bugs.log for more info.");
          spinner.stop();
          _context4.next = 14;
          return (0, prompts_1.fixBugForGPT)();
        case 14:
          fixBug = _context4.sent;
          if (!(fixBug.fix === FixBugEnum.YES)) {
            _context4.next = 36;
            break;
          }
          spinnerFixMessage = "Fixing bugs in your code ⚔️  ...";
          startTime = Date.now();
          _context4.next = 20;
          return spheron_api_1["default"].generateCode(spinner, spinnerFixMessage, "Fix", fileText);
        case 20:
          _gptResponse = _context4.sent;
          if (_gptResponse === null || _gptResponse === void 0 ? void 0 : _gptResponse.response) {
            _context4.next = 23;
            break;
          }
          throw {
            message: "You need to login first using 'spheron login'."
          };
        case 23:
          matches = _toConsumableArray(_gptResponse.response.matchAll(REGEX));
          generatedFiles = [];
          if (matches[0]) {
            _context4.next = 28;
            break;
          }
          (0, utils_1.createLog)("./error.log", "Unexpected Response. Please try again!");
          throw new Error("Unexpected Response. Please try again!");
        case 28:
          matches.forEach(function (match) {
            var filename = match[1].trim();
            var code = match[2].replace(/```/g, " ").trim();
            generatedFiles.push({
              filename: filename,
              code: code
            });
          });
          generatedFiles.forEach(function (file) {
            fs.writeFileSync(filepath, file.code);
          });
          if (generatedFiles[0]) {
            _context4.next = 33;
            break;
          }
          (0, utils_1.createLog)("./error.log", "Unexpected Response. Please try again!");
          throw new Error("Unexpected Response. Please try again!");
        case 33:
          endTime = Date.now();
          elapsedTime = Math.round((endTime - startTime) / 1000);
          spinner.success("Fixed all the bugs in ".concat(filepath, " in ").concat(elapsedTime, "s!"));
        case 36:
          _context4.next = 42;
          break;
        case 38:
          _context4.prev = 38;
          _context4.t0 = _context4["catch"](2);
          console.log("\u2716\uFE0F  Error: ".concat(_context4.t0.message));
          (0, utils_1.createLog)("./error.log", _context4.t0.message);
        case 42:
          _context4.prev = 42;
          spinner.stop();
          return _context4.finish(42);
        case 45:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 38, 42, 45]]);
  }));
}
exports.findBugsInCode = findBugsInCode;
function improveCode(filepath) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var spinner, spinnerMessage, startTime, fileText, gptResponse, matches, generatedFiles, endTime, elapsedTime;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          spinner = new spinner_1["default"]();
          spinnerMessage = "Improving the performance of your code 🛠️  ...";
          startTime = Date.now();
          _context5.prev = 3;
          fileText = fs.readFileSync(filepath, "utf8");
          _context5.next = 7;
          return spheron_api_1["default"].generateCode(spinner, spinnerMessage, "Improve", fileText);
        case 7:
          gptResponse = _context5.sent;
          if (gptResponse.response) {
            _context5.next = 10;
            break;
          }
          throw {
            message: "You need to login first using 'spheron login'."
          };
        case 10:
          matches = _toConsumableArray(gptResponse.response.matchAll(REGEX));
          generatedFiles = [];
          if (matches[0]) {
            _context5.next = 15;
            break;
          }
          (0, utils_1.createLog)("./error.log", "Unexpected Response. Please try again!");
          throw new Error("Unexpected Response. Please try again!");
        case 15:
          matches.forEach(function (match) {
            var filename = match[1].trim();
            var code = match[2].replace(/```/g, " ").trim();
            generatedFiles.push({
              filename: filename,
              code: code
            });
          });
          generatedFiles.forEach(function (file) {
            fs.writeFileSync(filepath, file.code);
          });
          if (generatedFiles[0]) {
            _context5.next = 20;
            break;
          }
          (0, utils_1.createLog)("./error.log", "Unexpected Response. Please try again!");
          throw new Error("Unexpected Response. Please try again!");
        case 20:
          endTime = Date.now();
          elapsedTime = Math.round((endTime - startTime) / 1000);
          spinner.success("Successfully optimized ".concat(filepath, " for improved performance in ").concat(elapsedTime, "s! \uD83D\uDE80"));
          _context5.next = 29;
          break;
        case 25:
          _context5.prev = 25;
          _context5.t0 = _context5["catch"](3);
          console.log("\u2716\uFE0F  Error: ".concat(_context5.t0.message));
          (0, utils_1.createLog)("./error.log", _context5.t0.message);
        case 29:
          _context5.prev = 29;
          spinner.stop();
          return _context5.finish(29);
        case 32:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[3, 25, 29, 32]]);
  }));
}
exports.improveCode = improveCode;
function transpileCode(lang, filepath) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var spinner, spinnerMessage, startTime, fileText, gptResponse, matches, generatedFiles, endTime, elapsedTime;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          spinner = new spinner_1["default"]();
          spinnerMessage = "Transpiling your code ⚙️  ...";
          startTime = Date.now();
          _context6.prev = 3;
          fileText = fs.readFileSync(filepath, "utf8");
          _context6.next = 7;
          return spheron_api_1["default"].generateCode(spinner, spinnerMessage, "Transpile", fileText, "", lang);
        case 7:
          gptResponse = _context6.sent;
          if (gptResponse.response) {
            _context6.next = 10;
            break;
          }
          throw {
            message: "You need to login first using 'spheron login'."
          };
        case 10:
          matches = _toConsumableArray(gptResponse.response.matchAll(REGEX));
          generatedFiles = [];
          if (matches[0]) {
            _context6.next = 15;
            break;
          }
          (0, utils_1.createLog)("./error.log", "Unexpected Response. Please try again!");
          throw new Error("Unexpected Response. Please try again!");
        case 15:
          matches.forEach(function (match) {
            var filename = match[1].trim();
            var code = match[2].replace(/```/g, " ").trim();
            generatedFiles.push({
              filename: filename,
              code: code
            });
          });
          generatedFiles.forEach(function (file) {
            fs.writeFileSync((0, utils_1.generateFilePath)(file.filename), file.code);
          });
          if (generatedFiles[0]) {
            _context6.next = 20;
            break;
          }
          (0, utils_1.createLog)("./error.log", "Unexpected Response. Please try again!");
          throw new Error("Unexpected Response. Please try again!");
        case 20:
          endTime = Date.now();
          elapsedTime = Math.round((endTime - startTime) / 1000);
          spinner.success("Successfully transpiled to ".concat(lang, ": ").concat((0, utils_1.generateFilesString)(generatedFiles), " in ").concat(elapsedTime, "s! \uD83D\uDD25"));
          _context6.next = 29;
          break;
        case 25:
          _context6.prev = 25;
          _context6.t0 = _context6["catch"](3);
          console.log("\u2716\uFE0F  Error: ".concat(_context6.t0.message));
          (0, utils_1.createLog)("./error.log", _context6.t0.message);
        case 29:
          _context6.prev = 29;
          spinner.stop();
          return _context6.finish(29);
        case 32:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[3, 25, 29, 32]]);
  }));
}
exports.transpileCode = transpileCode;
function createTestCases(lang, filepath) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    var spinner, spinnerMessage, startTime, fileText, gptResponse, matches, generatedFiles, endTime, elapsedTime;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          spinner = new spinner_1["default"]();
          spinnerMessage = "Generating test cases for your code 🧪  ...";
          startTime = Date.now();
          _context7.prev = 3;
          fileText = fs.readFileSync(filepath, "utf8");
          _context7.next = 7;
          return spheron_api_1["default"].generateCode(spinner, spinnerMessage, "Test", fileText, "", lang);
        case 7:
          gptResponse = _context7.sent;
          if (gptResponse === null || gptResponse === void 0 ? void 0 : gptResponse.response) {
            _context7.next = 10;
            break;
          }
          throw {
            message: "You need to login first using 'spheron login'."
          };
        case 10:
          matches = _toConsumableArray(gptResponse.response.matchAll(REGEX));
          generatedFiles = [];
          if (matches[0]) {
            _context7.next = 15;
            break;
          }
          (0, utils_1.createLog)("./error.log", "Unexpected Response. Please try again!");
          throw new Error("Unexpected Response. Please try again!");
        case 15:
          matches.forEach(function (match) {
            var filename = match[1].trim();
            var code = match[2].replace(/```/g, " ").trim();
            generatedFiles.push({
              filename: filename,
              code: code
            });
          });
          generatedFiles.forEach(function (file) {
            fs.writeFileSync((0, utils_1.generateTestCaseFileName)(filepath, file.filename), file.code);
          });
          if (generatedFiles[0]) {
            _context7.next = 20;
            break;
          }
          (0, utils_1.createLog)("./error.log", "Unexpected Response. Please try again!");
          throw new Error("Unexpected Response. Please try again!");
        case 20:
          endTime = Date.now();
          elapsedTime = Math.round((endTime - startTime) / 1000);
          spinner.success("Successfully created test cases: ".concat((0, utils_1.generateTestCasesFilesString)(filepath, generatedFiles), " in ").concat(elapsedTime, "s! \u2705"));
          _context7.next = 29;
          break;
        case 25:
          _context7.prev = 25;
          _context7.t0 = _context7["catch"](3);
          console.log("\u2716\uFE0F  Error: ".concat(_context7.t0.message));
          (0, utils_1.createLog)("./error.log", _context7.t0.message);
        case 29:
          _context7.prev = 29;
          spinner.stop();
          return _context7.finish(29);
        case 32:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[3, 25, 29, 32]]);
  }));
}
exports.createTestCases = createTestCases;