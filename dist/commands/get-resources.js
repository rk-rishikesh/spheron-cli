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
exports.ResourceEnum = exports.ResourceFetcher = void 0;
var spinner_1 = __importDefault(require("../outputs/spinner"));
var spheron_api_1 = __importDefault(require("../services/spheron-api"));
var utils_1 = require("../utils");
var configuration_1 = __importDefault(require("../configuration"));
exports.ResourceFetcher = {
  getOrganization: function getOrganization(id) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var spinner, organization, orgDTO;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            spinner = new spinner_1["default"]();
            _context.prev = 1;
            spinner.spin("Fetching ");
            if (id) {
              _context.next = 9;
              break;
            }
            _context.next = 6;
            return (0, utils_1.readFromJsonFile)("organization", configuration_1["default"].configFilePath);
          case 6:
            id = _context.sent;
            if (id) {
              _context.next = 9;
              break;
            }
            throw new Error("OrganizationId not provided");
          case 9:
            _context.next = 11;
            return spheron_api_1["default"].getOrganization(id);
          case 11:
            organization = _context.sent;
            console.log("Organization details:");
            orgDTO = toOrganizationDTO(organization);
            console.log(JSON.stringify(orgDTO, null, 2));
            spinner.success("");
            _context.next = 22;
            break;
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](1);
            console.log("\u2716\uFE0F  Error while fetching organization details");
            throw _context.t0;
          case 22:
            _context.prev = 22;
            spinner.stop();
            return _context.finish(22);
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 18, 22, 25]]);
    }));
  },
  getUserOrganizations: function getUserOrganizations() {
    var _a;
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var spinner, user, organizations;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            spinner = new spinner_1["default"]();
            _context2.prev = 1;
            spinner.spin("Fetching ");
            _context2.next = 5;
            return spheron_api_1["default"].getProfile();
          case 5:
            user = _context2.sent;
            console.log("User ".concat((_a = user.platformProfile) === null || _a === void 0 ? void 0 : _a.username, " organizations:"));
            organizations = user.organizations.map(function (x) {
              return toOrganizationDTO(x);
            });
            console.log(JSON.stringify(organizations, null, 2));
            spinner.success("");
            _context2.next = 16;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](1);
            console.log("\u2716\uFE0F  Error while fetching user organizations");
            throw _context2.t0;
          case 16:
            _context2.prev = 16;
            spinner.stop();
            return _context2.finish(16);
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 12, 16, 19]]);
    }));
  },
  getOrganizationProjects: function getOrganizationProjects(organizationId, skip, limit, state) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var spinner, projects, projectDtos;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            spinner = new spinner_1["default"]();
            _context3.prev = 1;
            spinner.spin("Fetching ");
            if (organizationId) {
              _context3.next = 9;
              break;
            }
            _context3.next = 6;
            return (0, utils_1.readFromJsonFile)("organization", configuration_1["default"].configFilePath);
          case 6:
            organizationId = _context3.sent;
            if (organizationId) {
              _context3.next = 9;
              break;
            }
            throw new Error("OrganizationId not provided");
          case 9:
            _context3.next = 11;
            return spheron_api_1["default"].getOrganizationProjects(organizationId, skip, limit, state);
          case 11:
            projects = _context3.sent;
            projectDtos = projects.map(function (x) {
              return toProjectDTO(x);
            });
            console.log("Projects:");
            console.log(JSON.stringify(projectDtos, null, 2));
            spinner.success("");
            _context3.next = 22;
            break;
          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](1);
            console.log("\u2716\uFE0F  Error while fetching organization projects");
            throw _context3.t0;
          case 22:
            _context3.prev = 22;
            spinner.stop();
            return _context3.finish(22);
          case 25:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[1, 18, 22, 25]]);
    }));
  },
  getProject: function getProject(projectId) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var spinner, project, projectDto;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            spinner = new spinner_1["default"]();
            _context4.prev = 1;
            spinner.spin("Fetching ");
            _context4.next = 5;
            return spheron_api_1["default"].getProject(projectId);
          case 5:
            project = _context4.sent;
            projectDto = toProjectDTO(project);
            console.log("Project:");
            console.log(JSON.stringify(projectDto, null, 2));
            spinner.success("");
            _context4.next = 16;
            break;
          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](1);
            console.log("\u2716\uFE0F  Error while fetching project details");
            throw _context4.t0;
          case 16:
            _context4.prev = 16;
            spinner.stop();
            return _context4.finish(16);
          case 19:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[1, 12, 16, 19]]);
    }));
  },
  getProjectDeployments: function getProjectDeployments(projectId, skip, limit, status) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var spinner, deployments, deploymentsDtos;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            spinner = new spinner_1["default"]();
            _context5.prev = 1;
            spinner.spin("Fetching ");
            _context5.next = 5;
            return spheron_api_1["default"].getProjectDeployments(projectId, skip, limit, status);
          case 5:
            deployments = _context5.sent;
            console.log("Deployments:");
            deploymentsDtos = deployments.map(function (x) {
              return toDeploymentDTO(x);
            });
            console.log(JSON.stringify(deploymentsDtos, null, 2));
            spinner.success("");
            _context5.next = 16;
            break;
          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](1);
            console.log("\u2716\uFE0F  Error while fetching organization deployments");
            throw _context5.t0;
          case 16:
            _context5.prev = 16;
            spinner.stop();
            return _context5.finish(16);
          case 19:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[1, 12, 16, 19]]);
    }));
  },
  getDeployment: function getDeployment(id) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var spinner, deployment, deploymentDto;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            spinner = new spinner_1["default"]();
            _context6.prev = 1;
            spinner.spin("Fetching ");
            _context6.next = 5;
            return spheron_api_1["default"].getDeployment(id);
          case 5:
            deployment = _context6.sent;
            console.log("Deployment:");
            deploymentDto = toDeploymentDTO(deployment);
            console.log(JSON.stringify(deploymentDto, null, 2));
            spinner.success("");
            _context6.next = 16;
            break;
          case 12:
            _context6.prev = 12;
            _context6.t0 = _context6["catch"](1);
            console.log("\u2716\uFE0F  Error while fetching deployment details");
            throw _context6.t0;
          case 16:
            _context6.prev = 16;
            spinner.stop();
            return _context6.finish(16);
          case 19:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[1, 12, 16, 19]]);
    }));
  },
  getProjectDomains: function getProjectDomains(projectId) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      var spinner, domains, domainsDtos;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            spinner = new spinner_1["default"]();
            _context7.prev = 1;
            spinner.spin("Fetching ");
            _context7.next = 5;
            return spheron_api_1["default"].getProjectDomains(projectId);
          case 5:
            domains = _context7.sent;
            domainsDtos = domains.map(function (x) {
              return toDomainDTO(x);
            });
            console.log("Domains:");
            console.log(JSON.stringify(domainsDtos, null, 2));
            spinner.success("");
            _context7.next = 16;
            break;
          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](1);
            console.log("\u2716\uFE0F  Error while fetching project domains");
            throw _context7.t0;
          case 16:
            _context7.prev = 16;
            spinner.stop();
            return _context7.finish(16);
          case 19:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[1, 12, 16, 19]]);
    }));
  },
  getProjectDeploymentEnvironments: function getProjectDeploymentEnvironments(projectId) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
      var spinner, deploymentEnvironments, deploymentEnvironemntsDtos;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            spinner = new spinner_1["default"]();
            _context8.prev = 1;
            spinner.spin("Fetching ");
            _context8.next = 5;
            return spheron_api_1["default"].getProjectDeploymentEnvironments(projectId);
          case 5:
            deploymentEnvironments = _context8.sent;
            console.log("Deployment environments:");
            deploymentEnvironemntsDtos = deploymentEnvironments.map(function (x) {
              return toDeploymentEnvironmentDTO(x);
            });
            console.log(JSON.stringify(deploymentEnvironemntsDtos, null, 2));
            spinner.success("");
            _context8.next = 16;
            break;
          case 12:
            _context8.prev = 12;
            _context8.t0 = _context8["catch"](1);
            console.log("\u2716\uFE0F  Error while fetching deployment environments");
            throw _context8.t0;
          case 16:
            _context8.prev = 16;
            spinner.stop();
            return _context8.finish(16);
          case 19:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[1, 12, 16, 19]]);
    }));
  }
};
var ResourceEnum;
(function (ResourceEnum) {
  ResourceEnum["PROJECT"] = "project";
  ResourceEnum["PROJECTS"] = "projects";
  ResourceEnum["DEPLOYMENT"] = "deployment";
  ResourceEnum["DEPLOYMENTS"] = "deployments";
  ResourceEnum["ORGANIZATION"] = "organization";
  ResourceEnum["ORGANIZATIONS"] = "organizations";
  ResourceEnum["DOMAINS"] = "domains";
  ResourceEnum["DEPLOYMENT_ENVIRONMENTS"] = "deployment-environments";
})(ResourceEnum = exports.ResourceEnum || (exports.ResourceEnum = {}));
var toOrganizationDTO = function toOrganizationDTO(organization) {
  var _a;
  var org = {
    _id: organization._id,
    appType: organization.appType,
    overdue: organization.overdue,
    profile: organization.profile,
    usersCount: (_a = organization.users) === null || _a === void 0 ? void 0 : _a.length
  };
  return org;
};
var toDeploymentEnvironmentDTO = function toDeploymentEnvironmentDTO(deploymentEnvironemnt) {
  return {
    _id: deploymentEnvironemnt._id,
    name: deploymentEnvironemnt.name,
    protocol: deploymentEnvironemnt.protocol,
    branches: deploymentEnvironemnt.branches
  };
};
var toDomainDTO = function toDomainDTO(domain) {
  return {
    _id: domain._id,
    name: domain.name,
    link: domain.link,
    projectId: domain.projectId,
    type: domain.type
  };
};
var toProjectDTO = function toProjectDTO(project) {
  var deploymentEnvironments = project.deploymentEnvironments.map(function (x) {
    return toDeploymentEnvironmentDTO(x);
  });
  var domains = project.domains.map(function (x) {
    return toDomainDTO(x);
  });
  return {
    _id: project._id,
    name: project.name,
    url: project.url,
    type: project.type,
    state: project.state,
    organization: project.organization,
    deploymentEnvironments: deploymentEnvironments,
    domains: domains,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt
  };
};
var toDeploymentDTO = function toDeploymentDTO(deployment) {
  return {
    _id: deployment._id,
    configuration: deployment.configuration,
    buildDirectory: deployment.buildDirectory,
    project: deployment.project._id,
    status: deployment.status,
    deploymentEnvironmentName: deployment.deploymentEnvironmentName,
    commitId: deployment.commitId,
    branch: deployment.branch,
    protocol: deployment.protocol,
    contentHash: deployment.contentHash,
    sitePreview: deployment.sitePreview,
    createdAt: deployment.createdAt,
    updatedAt: deployment.updatedAt
  };
};