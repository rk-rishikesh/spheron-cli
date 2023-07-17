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
exports.FrameworkOptions = exports.init = void 0;
var path_1 = __importDefault(require("path"));
var utils_1 = require("../utils");
var configuration_1 = __importDefault(require("../configuration"));
var create_configuration_1 = require("./create-configuration");
var spinner_1 = __importDefault(require("../outputs/spinner"));
function init(name, protocol, projectPath, framework, silient) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var spinner, pathSegments, frameworkConfig, spheronConfiguration, projects;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          spinner = new spinner_1["default"]();
          _context.prev = 1;
          spinner.spin("Spheron initialization...");
          _context.next = 5;
          return (0, utils_1.fileExists)("./spheron.json");
        case 5:
          if (!_context.sent) {
            _context.next = 7;
            break;
          }
          throw new Error("Spheron file already exists");
        case 7:
          _context.next = 9;
          return (0, utils_1.fileExists)(configuration_1["default"].configFilePath);
        case 9:
          _context.t0 = !_context.sent;
          if (_context.t0) {
            _context.next = 14;
            break;
          }
          _context.next = 13;
          return (0, utils_1.fileExists)(configuration_1["default"].projectTrackingFilePath);
        case 13:
          _context.t0 = !_context.sent;
        case 14:
          if (!_context.t0) {
            _context.next = 17;
            break;
          }
          _context.next = 17;
          return (0, create_configuration_1.createConfiguration)();
        case 17:
          pathSegments = process.cwd().split("/");
          frameworkConfig = mapFrameworkConfig(framework);
          spheronConfiguration = {
            name: name ? name : pathSegments[pathSegments.length - 1],
            protocol: protocol,
            rootPath: projectPath ? projectPath : "./",
            framework: {
              name: framework,
              configuration: frameworkConfig
            }
          };
          _context.next = 22;
          return (0, utils_1.writeToJsonFile)("configuration", spheronConfiguration, path_1["default"].join(process.cwd(), "./spheron.json"));
        case 22:
          _context.next = 24;
          return (0, utils_1.readFromJsonFile)("projects", configuration_1["default"].projectTrackingFilePath);
        case 24:
          projects = _context.sent;
          projects.push({
            name: name ? name : pathSegments[pathSegments.length - 1],
            path: projectPath ? path_1["default"].join(process.cwd(), projectPath) : path_1["default"].join(process.cwd(), "./"),
            protocol: protocol,
            framework: {
              name: framework,
              configuration: frameworkConfig
            }
          });
          _context.next = 28;
          return (0, utils_1.writeToJsonFile)("projects", projects, configuration_1["default"].projectTrackingFilePath);
        case 28:
          if (!silient) {
            spinner.success("Spheron initialized");
          }
          _context.next = 34;
          break;
        case 31:
          _context.prev = 31;
          _context.t1 = _context["catch"](1);
          console.log("\u2716\uFE0F  Error: ".concat(_context.t1.message));
        case 34:
          _context.prev = 34;
          spinner.stop();
          return _context.finish(34);
        case 37:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 31, 34, 37]]);
  }));
}
exports.init = init;
function mapFrameworkConfig(framework) {
  switch (framework) {
    case FrameworkOptions.Static:
      return {
        installCommand: "",
        buildCommand: "",
        publishDirectory: ""
      };
    case FrameworkOptions.React:
    case FrameworkOptions.IonicReact:
    case FrameworkOptions.Preact:
    case FrameworkOptions.Docusaurus:
      return {
        installCommand: "yarn install",
        buildCommand: "yarn build",
        publishDirectory: "build"
      };
    case FrameworkOptions.Vue:
    case FrameworkOptions.Sanity:
    case FrameworkOptions.Vite:
    case FrameworkOptions.Scully:
      return {
        installCommand: "yarn install",
        buildCommand: "yarn build",
        publishDirectory: "dist"
      };
    case FrameworkOptions.Angular:
    case FrameworkOptions.IonicAngular:
      return {
        installCommand: "yarn install",
        buildCommand: "yarn build",
        publishDirectory: "dist/app"
      };
    case FrameworkOptions.Next:
      return {
        installCommand: "yarn install",
        buildCommand: "next build && next export",
        publishDirectory: "out"
      };
    case FrameworkOptions.Nuxt2:
      return {
        installCommand: "yarn install",
        buildCommand: "yarn generate",
        publishDirectory: "dist"
      };
    case FrameworkOptions.Hugo:
      return {
        installCommand: "",
        buildCommand: "hugo -D --gc",
        publishDirectory: "public"
      };
    case FrameworkOptions.Eleventy:
      return {
        installCommand: "yarn install",
        buildCommand: "yarn build",
        publishDirectory: "_site"
      };
    case FrameworkOptions.Svelte:
    case FrameworkOptions.Gatsby:
      return {
        installCommand: "yarn install",
        buildCommand: "yarn build",
        publishDirectory: "public"
      };
    case FrameworkOptions.Stencil:
      return {
        installCommand: "yarn install",
        buildCommand: "yarn build",
        publishDirectory: "www"
      };
    case FrameworkOptions.Brunch:
      return {
        installCommand: "yarn install",
        buildCommand: "yarn build",
        publishDirectory: "public"
      };
    default:
      return {
        installCommand: "",
        buildCommand: "",
        publishDirectory: ""
      };
  }
}
var FrameworkOptions;
(function (FrameworkOptions) {
  FrameworkOptions["Static"] = "static";
  FrameworkOptions["React"] = "react";
  FrameworkOptions["Vue"] = "vue";
  FrameworkOptions["Angular"] = "angular";
  FrameworkOptions["Next"] = "next";
  FrameworkOptions["Preact"] = "preact";
  FrameworkOptions["Nuxt2"] = "nuxt2";
  FrameworkOptions["Docusaurus"] = "docusaurus";
  FrameworkOptions["Hugo"] = "hugo";
  FrameworkOptions["Eleventy"] = "eleventy";
  FrameworkOptions["Svelte"] = "svelte";
  FrameworkOptions["Gatsby"] = "gatsby";
  FrameworkOptions["Sanity"] = "sanity";
  FrameworkOptions["IonicReact"] = "ionicreact";
  FrameworkOptions["Vite"] = "vite";
  FrameworkOptions["Scully"] = "scully";
  FrameworkOptions["Stencil"] = "stencil";
  FrameworkOptions["Brunch"] = "brunch";
  FrameworkOptions["IonicAngular"] = "ionicangular";
})(FrameworkOptions = exports.FrameworkOptions || (exports.FrameworkOptions = {}));