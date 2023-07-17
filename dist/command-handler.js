"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
exports.commandHandler = void 0;
var configure_1 = require("./commands/configure");
var create_configuration_1 = require("./commands/create-configuration");
var create_organization_1 = require("./commands/create-organization");
var get_resources_1 = require("./commands/get-resources");
var get_instance_1 = require("./commands/get-instance");
var gpt_1 = require("./commands/gpt");
var init_1 = require("./commands/init");
var login_1 = require("./commands/login");
var logout_1 = require("./commands/logout");
var publish_1 = require("./commands/publish");
var upload_1 = require("./commands/upload");
var configuration_1 = __importDefault(require("./configuration"));
var prompts_1 = require("./prompts/prompts");
var spheron_api_1 = __importDefault(require("./services/spheron-api"));
var utils_1 = require("./utils");
function commandHandler(options) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    var _this = this;
    var validOptions, unknownOptions, _validOptions, _unknownOptions, _validOptions2, _unknownOptions2, _validOptions3, _unknownOptions3, _validOptions4, _unknownOptions4, _validOptions5, _unknownOptions5, isWhitelisted;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return (0, utils_1.fileExists)(configuration_1["default"].configFilePath);
        case 2:
          if (_context12.sent) {
            _context12.next = 5;
            break;
          }
          _context12.next = 5;
          return (0, create_configuration_1.createConfiguration)();
        case 5:
          if (options._[0] === "login") {
            validOptions = ["github", "gitlab", "bitbucket"];
            unknownOptions = Object.keys(options).filter(function (option) {
              return option !== "_" && option !== "$0" && !validOptions.includes(option);
            });
            if (unknownOptions.length > 0) {
              console.log("Unrecognized options: ".concat(unknownOptions.join(", ")));
              process.exit(1);
            }
            (function () {
              return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                var _yield, provider;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      if (!options.github) {
                        _context.next = 5;
                        break;
                      }
                      _context.next = 3;
                      return (0, login_1.login)("github");
                    case 3:
                      _context.next = 21;
                      break;
                    case 5:
                      if (!options.gitlab) {
                        _context.next = 10;
                        break;
                      }
                      _context.next = 8;
                      return (0, login_1.login)("gitlab");
                    case 8:
                      _context.next = 21;
                      break;
                    case 10:
                      if (!options.bitbucket) {
                        _context.next = 15;
                        break;
                      }
                      _context.next = 13;
                      return (0, login_1.login)("bitbucket");
                    case 13:
                      _context.next = 21;
                      break;
                    case 15:
                      _context.next = 17;
                      return (0, prompts_1.promptForLogin)();
                    case 17:
                      _yield = _context.sent;
                      provider = _yield.provider;
                      _context.next = 21;
                      return (0, login_1.login)(provider.toLowerCase());
                    case 21:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
            })();
          }
          if (options._[0] === "logout") {
            (function () {
              return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                  while (1) switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return (0, logout_1.logout)();
                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }, _callee2);
              }));
            })();
          }
          if (options._[0] === "upload") {
            _validOptions = ["path", "protocol", "bucket", "organization"];
            _unknownOptions = Object.keys(options).filter(function (option) {
              return option !== "_" && option !== "$0" && !_validOptions.includes(option);
            });
            if (_unknownOptions.length > 0) {
              console.log("Unrecognized options: ".concat(_unknownOptions.join(", ")));
              process.exit(1);
            }
            (function () {
              return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                var path, protocol, organizationId, bucketName, prompt, pathSegments;
                return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(options.path && options.protocol)) {
                        _context3.next = 7;
                        break;
                      }
                      path = options.path;
                      protocol = options.protocol.toLowerCase();
                      organizationId = options.organization;
                      bucketName = options.project;
                      _context3.next = 14;
                      break;
                    case 7:
                      _context3.next = 9;
                      return (0, prompts_1.promptForUploadFile)();
                    case 9:
                      prompt = _context3.sent;
                      path = prompt.path;
                      protocol = prompt.protocol.toLowerCase();
                      organizationId = prompt.organizationId;
                      bucketName = prompt.project;
                    case 14:
                      if (!bucketName) {
                        pathSegments = process.cwd().split("/");
                        bucketName = pathSegments[pathSegments.length - 1];
                        console.log("Generated default bucket name: ".concat(bucketName));
                      }
                      if (organizationId) {
                        _context3.next = 19;
                        break;
                      }
                      _context3.next = 18;
                      return (0, utils_1.readFromJsonFile)("organization", configuration_1["default"].configFilePath);
                    case 18:
                      organizationId = _context3.sent;
                    case 19:
                      if (!path) {
                        path = "./";
                      }
                      _context3.prev = 20;
                      _context3.next = 23;
                      return (0, upload_1.upload)(path, protocol, organizationId, bucketName);
                    case 23:
                      _context3.next = 28;
                      break;
                    case 25:
                      _context3.prev = 25;
                      _context3.t0 = _context3["catch"](20);
                      process.exit(1);
                    case 28:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3, null, [[20, 25]]);
              }));
            })();
          }
          if (options._[0] === "publish") {
            (function () {
              return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                  while (1) switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.prev = 0;
                      if (!options.organization) {
                        _context4.next = 6;
                        break;
                      }
                      _context4.next = 4;
                      return (0, publish_1.publish)(options.organization);
                    case 4:
                      _context4.next = 8;
                      break;
                    case 6:
                      _context4.next = 8;
                      return (0, publish_1.publish)();
                    case 8:
                      _context4.next = 13;
                      break;
                    case 10:
                      _context4.prev = 10;
                      _context4.t0 = _context4["catch"](0);
                      process.exit(1);
                    case 13:
                    case "end":
                      return _context4.stop();
                  }
                }, _callee4, null, [[0, 10]]);
              }));
            })();
          }
          if (options._[0] === "create-organization") {
            _validOptions2 = ["name", "username"];
            _unknownOptions2 = Object.keys(options).filter(function (option) {
              return option !== "_" && option !== "$0" && !_validOptions2.includes(option);
            });
            if (_unknownOptions2.length > 0) {
              console.log("Unrecognized options: ".concat(_unknownOptions2.join(", ")));
              process.exit(1);
            }
            (function () {
              return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                var name, username, prompt;
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      if (!(options.name && options.username)) {
                        _context5.next = 6;
                        break;
                      }
                      name = options.name;
                      username = options.username;
                      _context5.next = 11;
                      break;
                    case 6:
                      _context5.next = 8;
                      return (0, prompts_1.promptForCreateOrganization)();
                    case 8:
                      prompt = _context5.sent;
                      name = prompt.name;
                      username = prompt.username;
                    case 11:
                      if (name) {
                        _context5.next = 13;
                        break;
                      }
                      throw new Error("Please insert a name for organization.");
                    case 13:
                      if (username) {
                        _context5.next = 15;
                        break;
                      }
                      throw new Error("Please insert username for organization.");
                    case 15:
                      _context5.prev = 15;
                      _context5.next = 18;
                      return (0, create_organization_1.createOrganization)(name, username, "app");
                    case 18:
                      _context5.next = 23;
                      break;
                    case 20:
                      _context5.prev = 20;
                      _context5.t0 = _context5["catch"](15);
                      process.exit(1);
                    case 23:
                      _context5.next = 29;
                      break;
                    case 25:
                      _context5.prev = 25;
                      _context5.t1 = _context5["catch"](0);
                      console.log(_context5.t1.message);
                      process.exit(1);
                    case 29:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5, null, [[0, 25], [15, 20]]);
              }));
            })();
          }
          if (options._[0] === "init") {
            _validOptions3 = ["protocol", "project", "path", "framework"];
            _unknownOptions3 = Object.keys(options).filter(function (option) {
              return option !== "_" && option !== "$0" && !_validOptions3.includes(option);
            });
            if (_unknownOptions3.length > 0) {
              console.log("Unrecognized options: ".concat(_unknownOptions3.join(", ")));
              process.exit(1);
            }
            (function () {
              return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                var project, protocol, path, framework, prompt, pathSegments;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;
                      if (!options.protocol) {
                        _context6.next = 8;
                        break;
                      }
                      project = options.project;
                      protocol = options.protocol.toLowerCase();
                      path = options.path;
                      framework = options.framework;
                      _context6.next = 15;
                      break;
                    case 8:
                      _context6.next = 10;
                      return (0, prompts_1.promptForInit)();
                    case 10:
                      prompt = _context6.sent;
                      project = prompt.project;
                      protocol = prompt.protocol.toLowerCase();
                      path = prompt.path;
                      framework = prompt.framework.toLowerCase();
                    case 15:
                      if (!project) {
                        pathSegments = process.cwd().split("/");
                        project = pathSegments[pathSegments.length - 1];
                      }
                      if (!path) {
                        path = "./";
                      }
                      _context6.next = 19;
                      return (0, init_1.init)(project, protocol, path, framework);
                    case 19:
                      _context6.next = 25;
                      break;
                    case 21:
                      _context6.prev = 21;
                      _context6.t0 = _context6["catch"](0);
                      console.log(_context6.t0.message);
                      process.exit(1);
                    case 25:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6, null, [[0, 21]]);
              }));
            })();
          }
          if (options._[0] === "create-dapp") {
            (function () {
              return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                  while (1) switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.prev = 0;
                      if (!options._[1]) {
                        _context7.next = 6;
                        break;
                      }
                      _context7.next = 4;
                      return (0, prompts_1.promptForCreateDapp)(options._[1]);
                    case 4:
                      _context7.next = 8;
                      break;
                    case 6:
                      _context7.next = 8;
                      return (0, prompts_1.promptForCreateDapp)();
                    case 8:
                      _context7.next = 14;
                      break;
                    case 10:
                      _context7.prev = 10;
                      _context7.t0 = _context7["catch"](0);
                      console.log(_context7.t0.message);
                      process.exit(1);
                    case 14:
                    case "end":
                      return _context7.stop();
                  }
                }, _callee7, null, [[0, 10]]);
              }));
            })();
          }
          if (options._[0] === "get") {
            (function () {
              return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                var id, projectId, skip, limit, status, _id, organizationId, _skip, _limit, state, _id2, _projectId, _projectId2;
                return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                  while (1) switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.prev = 0;
                      if (!options.resource) {
                        _context8.next = 55;
                        break;
                      }
                      if (!(options.resource == get_resources_1.ResourceEnum.DEPLOYMENT)) {
                        _context8.next = 8;
                        break;
                      }
                      id = options.id;
                      _context8.next = 6;
                      return get_resources_1.ResourceFetcher.getDeployment(id);
                    case 6:
                      _context8.next = 53;
                      break;
                    case 8:
                      if (!(options.resource == get_resources_1.ResourceEnum.DEPLOYMENTS)) {
                        _context8.next = 17;
                        break;
                      }
                      projectId = options.projectId;
                      skip = options.skip;
                      limit = options.limit;
                      status = options.status;
                      _context8.next = 15;
                      return get_resources_1.ResourceFetcher.getProjectDeployments(projectId, skip, limit, status);
                    case 15:
                      _context8.next = 53;
                      break;
                    case 17:
                      if (!(options.resource == get_resources_1.ResourceEnum.PROJECT)) {
                        _context8.next = 23;
                        break;
                      }
                      _id = options.id;
                      _context8.next = 21;
                      return get_resources_1.ResourceFetcher.getProject(_id);
                    case 21:
                      _context8.next = 53;
                      break;
                    case 23:
                      if (!(options.resource == get_resources_1.ResourceEnum.PROJECTS)) {
                        _context8.next = 32;
                        break;
                      }
                      organizationId = options.organizationId;
                      _skip = options.skip;
                      _limit = options.limit;
                      state = options.state;
                      _context8.next = 30;
                      return get_resources_1.ResourceFetcher.getOrganizationProjects(organizationId, _skip, _limit, state);
                    case 30:
                      _context8.next = 53;
                      break;
                    case 32:
                      if (!(options.resource == get_resources_1.ResourceEnum.ORGANIZATION)) {
                        _context8.next = 38;
                        break;
                      }
                      _id2 = options.id;
                      _context8.next = 36;
                      return get_resources_1.ResourceFetcher.getOrganization(_id2);
                    case 36:
                      _context8.next = 53;
                      break;
                    case 38:
                      if (!(options.resource == get_resources_1.ResourceEnum.ORGANIZATIONS)) {
                        _context8.next = 43;
                        break;
                      }
                      _context8.next = 41;
                      return get_resources_1.ResourceFetcher.getUserOrganizations();
                    case 41:
                      _context8.next = 53;
                      break;
                    case 43:
                      if (!(options.resource == get_resources_1.ResourceEnum.DOMAINS)) {
                        _context8.next = 49;
                        break;
                      }
                      _projectId = options.projectId;
                      _context8.next = 47;
                      return get_resources_1.ResourceFetcher.getProjectDomains(_projectId);
                    case 47:
                      _context8.next = 53;
                      break;
                    case 49:
                      if (!(options.resource == get_resources_1.ResourceEnum.DEPLOYMENT_ENVIRONMENTS)) {
                        _context8.next = 53;
                        break;
                      }
                      _projectId2 = options.projectId;
                      _context8.next = 53;
                      return get_resources_1.ResourceFetcher.getProjectDeploymentEnvironments(_projectId2);
                    case 53:
                      _context8.next = 56;
                      break;
                    case 55:
                      throw new Error("Resource needs to be specified");
                    case 56:
                      _context8.next = 62;
                      break;
                    case 58:
                      _context8.prev = 58;
                      _context8.t0 = _context8["catch"](0);
                      console.log(_context8.t0.message);
                      process.exit(1);
                    case 62:
                    case "end":
                      return _context8.stop();
                  }
                }, _callee8, null, [[0, 58]]);
              }));
            })();
          }
          if (options._[0] === "compute-instance") {
            (function () {
              return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                var id, deploymentid, _deploymentid, _id3;
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      console.log(options);
                      if (!options.instance) {
                        _context9.next = 27;
                        break;
                      }
                      if (!(options.instance == get_instance_1.InstanceEnum.GET)) {
                        _context9.next = 9;
                        break;
                      }
                      id = options._[1];
                      _context9.next = 7;
                      return get_instance_1.InstanceFunctions.getInstance(id);
                    case 7:
                      _context9.next = 25;
                      break;
                    case 9:
                      if (!(options.instance == get_instance_1.InstanceEnum.GETINSTANCEDEPLOYMENT)) {
                        _context9.next = 15;
                        break;
                      }
                      deploymentid = options._[1];
                      _context9.next = 13;
                      return get_instance_1.InstanceFunctions.getInstanceDeployment(deploymentid);
                    case 13:
                      _context9.next = 25;
                      break;
                    case 15:
                      if (!(options.instance == get_instance_1.InstanceEnum.GETINSTANCELOGS)) {
                        _context9.next = 21;
                        break;
                      }
                      _deploymentid = options._[1];
                      _context9.next = 19;
                      return get_instance_1.InstanceFunctions.getInstancelogs(_deploymentid);
                    case 19:
                      _context9.next = 25;
                      break;
                    case 21:
                      if (!(options.instance == get_instance_1.InstanceEnum.GETDOMAINS)) {
                        _context9.next = 25;
                        break;
                      }
                      _id3 = options._[1];
                      _context9.next = 25;
                      return get_instance_1.InstanceFunctions.getDomains(_id3);
                    case 25:
                      _context9.next = 28;
                      break;
                    case 27:
                      throw new Error("Function needs to be specified");
                    case 28:
                      _context9.next = 34;
                      break;
                    case 30:
                      _context9.prev = 30;
                      _context9.t0 = _context9["catch"](0);
                      console.log(_context9.t0.message);
                      process.exit(1);
                    case 34:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9, null, [[0, 30]]);
              }));
            })();
          }
          if (options._[0] === "configure") {
            _validOptions4 = ["organization"];
            _unknownOptions4 = Object.keys(options).filter(function (option) {
              return option !== "_" && option !== "$0" && !_validOptions4.includes(option);
            });
            if (_unknownOptions4.length > 0) {
              console.log("Unrecognized options: ".concat(_unknownOptions4.join(", ")));
              process.exit(1);
            }
            (function () {
              return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
                var organizationId, prompt;
                return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                  while (1) switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.prev = 0;
                      if (!options.organization) {
                        _context10.next = 5;
                        break;
                      }
                      organizationId = options.organization;
                      _context10.next = 9;
                      break;
                    case 5:
                      _context10.next = 7;
                      return (0, prompts_1.promptForConfigure)();
                    case 7:
                      prompt = _context10.sent;
                      organizationId = prompt.organization;
                    case 9:
                      _context10.next = 11;
                      return (0, configure_1.changeDefaultOrganization)(organizationId);
                    case 11:
                      _context10.next = 17;
                      break;
                    case 13:
                      _context10.prev = 13;
                      _context10.t0 = _context10["catch"](0);
                      console.log(_context10.t0.message);
                      process.exit(1);
                    case 17:
                    case "end":
                      return _context10.stop();
                  }
                }, _callee10, null, [[0, 13]]);
              }));
            })();
          }
          if (!(options._[0] === "gpt")) {
            _context12.next = 24;
            break;
          }
          _validOptions5 = ["prompt", "command", "filepath", "language"];
          _unknownOptions5 = Object.keys(options).filter(function (option) {
            return option !== "_" && option !== "$0" && !_validOptions5.includes(option);
          });
          if (_unknownOptions5.length > 0) {
            console.log("Unrecognized options: ".concat(_unknownOptions5.join(", ")));
            process.exit(1);
          }
          _context12.next = 21;
          return spheron_api_1["default"].isWhitelisted();
        case 21:
          isWhitelisted = _context12.sent;
          if (!(isWhitelisted === null || isWhitelisted === void 0 ? void 0 : isWhitelisted.whitelisted) && (isWhitelisted === null || isWhitelisted === void 0 ? void 0 : isWhitelisted.error)) {
            console.log(isWhitelisted === null || isWhitelisted === void 0 ? void 0 : isWhitelisted.message);
            process.exit(1);
          }
          (function () {
            return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var gptPrompt, prompt, _gptPrompt, _prompt, filePath, path, _filePath, _path, _filePath2, _path2, progLanguage, lang, _filePath3, _path3, _progLanguage, _lang, _filePath4, _path4;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.prev = 0;
                    if (options.command) {
                      _context11.next = 17;
                      break;
                    }
                    if (!options.prompt) {
                      _context11.next = 6;
                      break;
                    }
                    gptPrompt = options.prompt;
                    _context11.next = 10;
                    break;
                  case 6:
                    _context11.next = 8;
                    return (0, prompts_1.promptForGPT)();
                  case 8:
                    prompt = _context11.sent;
                    gptPrompt = prompt.gpt;
                  case 10:
                    if (!options.filepath) {
                      _context11.next = 15;
                      break;
                    }
                    _context11.next = 13;
                    return (0, gpt_1.generateCodeBasedOnFile)(gptPrompt, options.filepath);
                  case 13:
                    _context11.next = 17;
                    break;
                  case 15:
                    _context11.next = 17;
                    return (0, gpt_1.generateCode)(gptPrompt);
                  case 17:
                    if (!options.command) {
                      _context11.next = 105;
                      break;
                    }
                    if (!(options.command == gpt_1.CommandEnum.UPDATE)) {
                      _context11.next = 39;
                      break;
                    }
                    if (!options.prompt) {
                      _context11.next = 23;
                      break;
                    }
                    _gptPrompt = options.prompt;
                    _context11.next = 27;
                    break;
                  case 23:
                    _context11.next = 25;
                    return (0, prompts_1.promptForGPT)();
                  case 25:
                    _prompt = _context11.sent;
                    _gptPrompt = _prompt.gpt;
                  case 27:
                    if (!options.filepath) {
                      _context11.next = 31;
                      break;
                    }
                    filePath = options.filepath;
                    _context11.next = 35;
                    break;
                  case 31:
                    _context11.next = 33;
                    return (0, prompts_1.filePathForGPT)();
                  case 33:
                    path = _context11.sent;
                    filePath = path.inputpath;
                  case 35:
                    _context11.next = 37;
                    return (0, gpt_1.updateCode)(_gptPrompt, filePath);
                  case 37:
                    _context11.next = 105;
                    break;
                  case 39:
                    if (!(options.command == gpt_1.CommandEnum.FINDBUGS)) {
                      _context11.next = 52;
                      break;
                    }
                    if (!options.filepath) {
                      _context11.next = 44;
                      break;
                    }
                    _filePath = options.filepath;
                    _context11.next = 48;
                    break;
                  case 44:
                    _context11.next = 46;
                    return (0, prompts_1.filePathForGPT)();
                  case 46:
                    _path = _context11.sent;
                    _filePath = _path.inputpath;
                  case 48:
                    _context11.next = 50;
                    return (0, gpt_1.findBugsInCode)(_filePath);
                  case 50:
                    _context11.next = 105;
                    break;
                  case 52:
                    if (!(options.command == gpt_1.CommandEnum.IMPROVE)) {
                      _context11.next = 65;
                      break;
                    }
                    if (!options.filepath) {
                      _context11.next = 57;
                      break;
                    }
                    _filePath2 = options.filepath;
                    _context11.next = 61;
                    break;
                  case 57:
                    _context11.next = 59;
                    return (0, prompts_1.filePathForGPT)();
                  case 59:
                    _path2 = _context11.sent;
                    _filePath2 = _path2.inputpath;
                  case 61:
                    _context11.next = 63;
                    return (0, gpt_1.improveCode)(_filePath2);
                  case 63:
                    _context11.next = 105;
                    break;
                  case 65:
                    if (!(options.command == gpt_1.CommandEnum.TRANSPILE)) {
                      _context11.next = 86;
                      break;
                    }
                    if (!options.language) {
                      _context11.next = 70;
                      break;
                    }
                    progLanguage = options.language;
                    _context11.next = 74;
                    break;
                  case 70:
                    _context11.next = 72;
                    return (0, prompts_1.languageForGPT)();
                  case 72:
                    lang = _context11.sent;
                    progLanguage = lang.lang;
                  case 74:
                    if (!options.filepath) {
                      _context11.next = 78;
                      break;
                    }
                    _filePath3 = options.filepath;
                    _context11.next = 82;
                    break;
                  case 78:
                    _context11.next = 80;
                    return (0, prompts_1.filePathForGPT)();
                  case 80:
                    _path3 = _context11.sent;
                    _filePath3 = _path3.inputpath;
                  case 82:
                    _context11.next = 84;
                    return (0, gpt_1.transpileCode)(progLanguage, _filePath3);
                  case 84:
                    _context11.next = 105;
                    break;
                  case 86:
                    if (!(options.command == gpt_1.CommandEnum.TEST)) {
                      _context11.next = 105;
                      break;
                    }
                    if (!options.language) {
                      _context11.next = 91;
                      break;
                    }
                    _progLanguage = options.language;
                    _context11.next = 95;
                    break;
                  case 91:
                    _context11.next = 93;
                    return (0, prompts_1.languageForGPTTest)();
                  case 93:
                    _lang = _context11.sent;
                    _progLanguage = _lang.testlang;
                  case 95:
                    if (!options.filepath) {
                      _context11.next = 99;
                      break;
                    }
                    _filePath4 = options.filepath;
                    _context11.next = 103;
                    break;
                  case 99:
                    _context11.next = 101;
                    return (0, prompts_1.filePathForGPT)();
                  case 101:
                    _path4 = _context11.sent;
                    _filePath4 = _path4.inputpath;
                  case 103:
                    _context11.next = 105;
                    return (0, gpt_1.createTestCases)(_progLanguage, _filePath4);
                  case 105:
                    _context11.next = 111;
                    break;
                  case 107:
                    _context11.prev = 107;
                    _context11.t0 = _context11["catch"](0);
                    console.log(_context11.t0.message);
                    process.exit(1);
                  case 111:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, null, [[0, 107]]);
            }));
          })();
        case 24:
          if (!options._[0]) {
            console.log("Please use --help to check all commands available with spheron cli");
          }
        case 25:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
}
exports.commandHandler = commandHandler;