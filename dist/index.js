"use strict";

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = function __commonJS(cb, mod) {
  return function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
      exports: {}
    }).exports, mod), mod.exports;
  };
};
var __export = function __export(target, all) {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = function __copyProps(to, from, except, desc) {
  if (from && _typeof(from) === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)),
      _step;
    try {
      var _loop = function _loop() {
        var key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: function get() {
            return from[key];
          },
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = function __toESM(mod, isNodeMode, target) {
  return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target, mod);
};
var __toCommonJS = function __toCommonJS(mod) {
  return __copyProps(__defProp({}, "__esModule", {
    value: true
  }), mod);
};

// node_modules/class-logger/dist/src/constants.js
var require_constants = __commonJS({
  "node_modules/class-logger/dist/src/constants.js": function node_modulesClassLoggerDistSrcConstantsJs(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CLASS_LOGGER_METADATA_KEY = Symbol();
  }
});

// node_modules/fast-safe-stringify/index.js
var require_fast_safe_stringify = __commonJS({
  "node_modules/fast-safe-stringify/index.js": function node_modulesFastSafeStringifyIndexJs(exports, module2) {
    module2.exports = stringify;
    stringify["default"] = stringify;
    stringify.stable = deterministicStringify;
    stringify.stableStringify = deterministicStringify;
    var LIMIT_REPLACE_NODE = "[...]";
    var CIRCULAR_REPLACE_NODE = "[Circular]";
    var arr = [];
    var replacerStack = [];
    function defaultOptions() {
      return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
      };
    }
    function stringify(obj, replacer, spacer, options) {
      if (typeof options === "undefined") {
        options = defaultOptions();
      }
      decirc(obj, "", 0, [], void 0, 0, options);
      var res;
      try {
        if (replacerStack.length === 0) {
          res = JSON.stringify(obj, replacer, spacer);
        } else {
          res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
        }
      } catch (_) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
      } finally {
        while (arr.length !== 0) {
          var part = arr.pop();
          if (part.length === 4) {
            Object.defineProperty(part[0], part[1], part[3]);
          } else {
            part[0][part[1]] = part[2];
          }
        }
      }
      return res;
    }
    function setReplace(replace, val, k, parent) {
      var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
      if (propertyDescriptor.get !== void 0) {
        if (propertyDescriptor.configurable) {
          Object.defineProperty(parent, k, {
            value: replace
          });
          arr.push([parent, k, val, propertyDescriptor]);
        } else {
          replacerStack.push([val, k, replace]);
        }
      } else {
        parent[k] = replace;
        arr.push([parent, k, val]);
      }
    }
    function decirc(val, k, edgeIndex, stack, parent, depth, options) {
      depth += 1;
      var i;
      if (_typeof(val) === "object" && val !== null) {
        for (i = 0; i < stack.length; i++) {
          if (stack[i] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
            return;
          }
        }
        if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k, parent);
          return;
        }
        if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k, parent);
          return;
        }
        stack.push(val);
        if (Array.isArray(val)) {
          for (i = 0; i < val.length; i++) {
            decirc(val[i], i, i, stack, val, depth, options);
          }
        } else {
          var keys = Object.keys(val);
          for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            decirc(val[key], key, i, stack, val, depth, options);
          }
        }
        stack.pop();
      }
    }
    function compareFunction(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    }
    function deterministicStringify(obj, replacer, spacer, options) {
      if (typeof options === "undefined") {
        options = defaultOptions();
      }
      var tmp = deterministicDecirc(obj, "", 0, [], void 0, 0, options) || obj;
      var res;
      try {
        if (replacerStack.length === 0) {
          res = JSON.stringify(tmp, replacer, spacer);
        } else {
          res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
        }
      } catch (_) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
      } finally {
        while (arr.length !== 0) {
          var part = arr.pop();
          if (part.length === 4) {
            Object.defineProperty(part[0], part[1], part[3]);
          } else {
            part[0][part[1]] = part[2];
          }
        }
      }
      return res;
    }
    function deterministicDecirc(val, k, edgeIndex, stack, parent, depth, options) {
      depth += 1;
      var i;
      if (_typeof(val) === "object" && val !== null) {
        for (i = 0; i < stack.length; i++) {
          if (stack[i] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
            return;
          }
        }
        try {
          if (typeof val.toJSON === "function") {
            return;
          }
        } catch (_) {
          return;
        }
        if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k, parent);
          return;
        }
        if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
          setReplace(LIMIT_REPLACE_NODE, val, k, parent);
          return;
        }
        stack.push(val);
        if (Array.isArray(val)) {
          for (i = 0; i < val.length; i++) {
            deterministicDecirc(val[i], i, i, stack, val, depth, options);
          }
        } else {
          var tmp = {};
          var keys = Object.keys(val).sort(compareFunction);
          for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            deterministicDecirc(val[key], key, i, stack, val, depth, options);
            tmp[key] = val[key];
          }
          if (typeof parent !== "undefined") {
            arr.push([parent, k, val]);
            parent[k] = tmp;
          } else {
            return tmp;
          }
        }
        stack.pop();
      }
    }
    function replaceGetterValues(replacer) {
      replacer = typeof replacer !== "undefined" ? replacer : function (k, v) {
        return v;
      };
      return function (key, val) {
        if (replacerStack.length > 0) {
          for (var i = 0; i < replacerStack.length; i++) {
            var part = replacerStack[i];
            if (part[1] === key && part[0] === val) {
              val = part[2];
              replacerStack.splice(i, 1);
              break;
            }
          }
        }
        return replacer.call(this, key, val);
      };
    }
  }
});

// node_modules/class-logger/dist/src/formatter.service.js
var require_formatter_service = __commonJS({
  "node_modules/class-logger/dist/src/formatter.service.js": function node_modulesClassLoggerDistSrcFormatterServiceJs(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var fast_safe_stringify_12 = require_fast_safe_stringify();
    var ClassLoggerFormatterService2 = /*#__PURE__*/function () {
      function ClassLoggerFormatterService2() {
        _classCallCheck(this, ClassLoggerFormatterService2);
        this.placeholderNotAvailable = "N/A";
        this.placeholderUndefined = "undefined";
      }
      _createClass(ClassLoggerFormatterService2, [{
        key: "start",
        value: function start(data) {
          var message = this.base(data);
          if (this.includeComplex(data.include.args, "start")) {
            message += this.args(data);
          }
          if (this.includeComplex(data.include.classInstance, "start")) {
            message += this.classInstance(data);
          }
          message += this["final"]();
          return message;
        }
      }, {
        key: "end",
        value: function end(data) {
          var message = this.base(data);
          message += this.operation(data);
          if (this.includeComplex(data.include.args, "end")) {
            message += this.args(data);
          }
          if (this.includeComplex(data.include.classInstance, "end")) {
            message += this.classInstance(data);
          }
          if (data.include.result) {
            message += this.result(data);
          }
          message += this["final"]();
          return message;
        }
      }, {
        key: "base",
        value: function base(_ref) {
          var className = _ref.className,
            propertyName = _ref.propertyName;
          return "".concat(className, ".").concat(propertyName.toString());
        }
      }, {
        key: "operation",
        value: function operation(_ref2) {
          var error2 = _ref2.error;
          return error2 ? " -> error" : " -> done";
        }
      }, {
        key: "args",
        value: function args(_ref3) {
          var _args = _ref3.args;
          return ". Args: ".concat(this.valueToString(_args));
        }
      }, {
        key: "classInstance",
        value: function classInstance(_ref4) {
          var _classInstance = _ref4.classInstance;
          return ". Class instance: ".concat(this.complexObjectToString(_classInstance));
        }
      }, {
        key: "result",
        value: function result(_ref5) {
          var _result = _ref5.result;
          return ". Res: ".concat(this.valueToString(_result));
        }
      }, {
        key: "final",
        value: function final() {
          return ".";
        }
      }, {
        key: "complexObjectToString",
        value: function complexObjectToString(obj) {
          var _this = this;
          if (_typeof(obj) !== "object") {
            return this.placeholderNotAvailable;
          }
          if (obj === null) {
            return fast_safe_stringify_12["default"](obj);
          }
          var classInstanceFiltered = {};
          var keys = Object.keys(obj);
          if (obj instanceof Map || obj instanceof Set) {
            keys = _toConsumableArray(obj.keys());
          }
          keys.forEach(function (key) {
            var value = obj[key];
            if (typeof value === "function") {
              return;
            }
            classInstanceFiltered[key] = _typeof(value) === "object" && !_this.isPlainObjectOrArray(value) ? _this.complexObjectToString(value) : value;
          });
          return "".concat(obj.constructor.name, " ").concat(fast_safe_stringify_12["default"](classInstanceFiltered));
        }
      }, {
        key: "valueToString",
        value: function valueToString(val) {
          if (val === void 0) {
            return this.placeholderUndefined;
          }
          if (_typeof(val) !== "object") {
            return val.toString();
          }
          if (val instanceof Error) {
            return this.errorToString(val);
          }
          if (!this.isPlainObjectOrArray(val)) {
            return this.complexObjectToString(val);
          }
          if (Array.isArray(val)) {
            var arrayWithStringifiedElements = val.map(this.valueToString.bind(this));
            return "[".concat(arrayWithStringifiedElements.join(", "), "]");
          }
          return fast_safe_stringify_12["default"](val);
        }
      }, {
        key: "includeComplex",
        value: function includeComplex(_includeComplex, type) {
          if (typeof _includeComplex === "boolean") {
            return _includeComplex;
          }
          return _includeComplex[type];
        }
      }, {
        key: "isPlainObjectOrArray",
        value: function isPlainObjectOrArray(obj) {
          if (!obj) {
            return false;
          }
          var proto = Object.getPrototypeOf(obj);
          return proto === Object.prototype || proto === Array.prototype;
        }
      }, {
        key: "errorToString",
        value: function errorToString(error2) {
          var data = {
            code: error2.code,
            message: error2.message,
            name: error2.name,
            stack: error2.stack
          };
          return "".concat(error2.constructor.name, " ").concat(fast_safe_stringify_12["default"](data));
        }
      }]);
      return ClassLoggerFormatterService2;
    }();
    exports.ClassLoggerFormatterService = ClassLoggerFormatterService2;
  }
});

// node_modules/class-logger/dist/src/config.service.js
var require_config_service = __commonJS({
  "node_modules/class-logger/dist/src/config.service.js": function node_modulesClassLoggerDistSrcConfigServiceJs(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var formatter_service_1 = require_formatter_service();
    var ConfigService = /*#__PURE__*/function () {
      function ConfigService() {
        _classCallCheck(this, ConfigService);
      }
      _createClass(ConfigService, null, [{
        key: "configsMerge",
        value: function configsMerge(config) {
          for (var _len = arguments.length, configsPartial = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            configsPartial[_key - 1] = arguments[_key];
          }
          return configsPartial.reduce(function (configRes, configPartial) {
            return Object.assign(Object.assign(Object.assign({}, configRes), configPartial), {
              include: Object.assign(Object.assign({}, configRes.include), configPartial.include)
            });
          }, config);
        }
      }, {
        key: "setConfig",
        value: function setConfig(config) {
          this.config = this.configsMerge(this.config, config);
        }
      }]);
      return ConfigService;
    }();
    exports.ConfigService = ConfigService;
    ConfigService.config = {
      formatter: new formatter_service_1.ClassLoggerFormatterService(),
      include: {
        args: true,
        classInstance: false,
        construct: true,
        result: true
      },
      log: function log(message) {
        return console.log(message);
      },
      logError: function logError(message) {
        return console.error(message);
      }
    };
  }
});

// node_modules/class-logger/dist/src/class-wrapper.service.js
var require_class_wrapper_service = __commonJS({
  "node_modules/class-logger/dist/src/class-wrapper.service.js": function node_modulesClassLoggerDistSrcClassWrapperServiceJs(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var config_service_1 = require_config_service();
    var constants_1 = require_constants();
    var ClassWrapperService = /*#__PURE__*/function () {
      function ClassWrapperService() {
        var _this2 = this;
        _classCallCheck(this, ClassWrapperService);
        this.proxyTrapConstruct = function (target, args, newTarget) {
          var config = _this2.classGetConfigMerged(target.prototype);
          if (config.include.construct) {
            var messageStart = config.formatter.start({
              args: args,
              className: target.name,
              include: config.include,
              propertyName: "construct"
            });
            config.log(messageStart);
          }
          var instance = Reflect.construct(target, args, newTarget);
          var instanceWrapped = _this2.wrapClassInstance(instance);
          return instanceWrapped;
        };
        this.makeProxyTrapGet = function (className) {
          return function (target, property, receiver) {
            var prop = Reflect.get(target, property, receiver);
            if (typeof prop !== "function") {
              return prop;
            }
            var configProp = Reflect.getMetadata(constants_1.CLASS_LOGGER_METADATA_KEY, target, property);
            if (!configProp) {
              return prop;
            }
            var configClass = _this2.classGetConfigMerged(target);
            var configFinal = config_service_1.ConfigService.configsMerge(configClass, configProp);
            var propWrapped = _this2.wrapFunction(configFinal, prop, className, property, target);
            return propWrapped;
          };
        };
      }
      _createClass(ClassWrapperService, [{
        key: "wrap",
        value: function wrap(targetWrap) {
          var get = this.makeProxyTrapGet(targetWrap.name);
          var proxied = new Proxy(targetWrap, {
            construct: this.proxyTrapConstruct,
            get: get
          });
          Reflect.getMetadataKeys(targetWrap).forEach(function (metadataKey) {
            Reflect.defineMetadata(metadataKey, Reflect.getMetadata(metadataKey, targetWrap), proxied);
          });
          return proxied;
        }
      }, {
        key: "wrapClassInstance",
        value: function wrapClassInstance(instance) {
          var get = this.makeProxyTrapGet(instance.constructor.name);
          return new Proxy(instance, {
            get: get
          });
        }
      }, {
        key: "wrapFunction",
        value: function wrapFunction(config, fn, className, propertyName, classInstance) {
          var classWrapper = this;
          var res = function res() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            var messageStart = config.formatter.start({
              args: args,
              classInstance: classInstance,
              className: className,
              include: config.include,
              propertyName: propertyName
            });
            config.log(messageStart);
            var logEnd = function logEnd(result, error2) {
              var messageEnd = config.formatter.end({
                args: args,
                classInstance: classInstance,
                className: className,
                error: !!error2,
                include: config.include,
                propertyName: propertyName,
                result: result
              });
              var logFn = config.log;
              if (error2) {
                logFn = config.logError;
              }
              logFn(messageEnd);
            };
            try {
              var fnRes = fn.apply(this, args);
              if (classWrapper.isPromise(fnRes)) {
                fnRes = fnRes.then(function (result) {
                  logEnd(result);
                  return result;
                })["catch"](function (error2) {
                  logEnd(error2, true);
                  throw error2;
                });
                return fnRes;
              }
              logEnd(fnRes);
              return fnRes;
            } catch (error2) {
              logEnd(error2, true);
              throw error2;
            }
          };
          Object.keys(fn).forEach(function (prop) {
            res[prop] = fn[prop];
          });
          return res;
        }
      }, {
        key: "isPromise",
        value: function isPromise(val) {
          return !!val && _typeof(val) === "object" && typeof val.then === "function" && typeof val["catch"] === "function";
        }
      }, {
        key: "classGetConfigMerged",
        value: function classGetConfigMerged(target) {
          var configClassMeta = Reflect.getMetadata(constants_1.CLASS_LOGGER_METADATA_KEY, target);
          var configRes = config_service_1.ConfigService.configsMerge(config_service_1.ConfigService.config, configClassMeta);
          return configRes;
        }
      }]);
      return ClassWrapperService;
    }();
    exports.ClassWrapperService = ClassWrapperService;
  }
});

// node_modules/class-logger/dist/src/log-class.decorator.js
var require_log_class_decorator = __commonJS({
  "node_modules/class-logger/dist/src/log-class.decorator.js": function node_modulesClassLoggerDistSrcLogClassDecoratorJs(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var class_wrapper_service_1 = require_class_wrapper_service();
    var constants_1 = require_constants();
    var classWrapper = new class_wrapper_service_1.ClassWrapperService();
    exports.LogClass = function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return function (target) {
        Reflect.defineMetadata(constants_1.CLASS_LOGGER_METADATA_KEY, config, target.prototype);
        Reflect.defineMetadata(constants_1.CLASS_LOGGER_METADATA_KEY, config, target);
        return classWrapper.wrap(target);
      };
    };
  }
});

// node_modules/class-logger/dist/src/log.decorator.js
var require_log_decorator = __commonJS({
  "node_modules/class-logger/dist/src/log.decorator.js": function node_modulesClassLoggerDistSrcLogDecoratorJs(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var constants_1 = require_constants();
    exports.Log = function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return function (target, propertyKey) {
        Reflect.defineMetadata(constants_1.CLASS_LOGGER_METADATA_KEY, config, target, propertyKey);
      };
    };
  }
});

// node_modules/class-logger/dist/index.js
var require_dist = __commonJS({
  "node_modules/class-logger/dist/index.js": function node_modulesClassLoggerDistIndexJs(exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var constants_1 = require_constants();
    exports.CLASS_LOGGER_METADATA_KEY = constants_1.CLASS_LOGGER_METADATA_KEY;
    var config_service_1 = require_config_service();
    var formatter_service_1 = require_formatter_service();
    exports.ClassLoggerFormatterService = formatter_service_1.ClassLoggerFormatterService;
    var log_class_decorator_1 = require_log_class_decorator();
    exports.LogClass = log_class_decorator_1.LogClass;
    var log_decorator_1 = require_log_decorator();
    exports.Log = log_decorator_1.Log;
    exports.setConfig = config_service_1.ConfigService.setConfig.bind(config_service_1.ConfigService);
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Log: function Log() {
    return import_class_logger2.Log;
  },
  LogClass: function LogClass() {
    return import_class_logger2.LogClass;
  },
  configure: function configure() {
    return _configure;
  },
  debug: function debug() {
    return _debug;
  },
  error: function error() {
    return _error;
  },
  info: function info() {
    return _info;
  },
  objectWithoutProperties: function objectWithoutProperties() {
    return _objectWithoutProperties;
  },
  trace: function trace() {
    return _trace;
  },
  warn: function warn() {
    return _warn;
  }
});
module.exports = __toCommonJS(src_exports);

// node_modules/reflect-metadata/Reflect.js
var Reflect2;
(function (Reflect3) {
  (function (factory) {
    var root = (typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" ? global : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" ? self : _typeof(this) === "object" ? this : Function("return this;")();
    var exporter = makeExporter(Reflect3);
    if (typeof root.Reflect === "undefined") {
      root.Reflect = Reflect3;
    } else {
      exporter = makeExporter(root.Reflect, exporter);
    }
    factory(exporter);
    function makeExporter(target, previous) {
      return function (key, value) {
        if (typeof target[key] !== "function") {
          Object.defineProperty(target, key, {
            configurable: true,
            writable: true,
            value: value
          });
        }
        if (previous) previous(key, value);
      };
    }
  })(function (exporter) {
    var hasOwn = Object.prototype.hasOwnProperty;
    var supportsSymbol = typeof Symbol === "function";
    var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
    var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
    var supportsCreate = typeof Object.create === "function";
    var supportsProto = {
      __proto__: []
    } instanceof Array;
    var downLevel = !supportsCreate && !supportsProto;
    var HashMap = {
      create: supportsCreate ? function () {
        return MakeDictionary( /* @__PURE__ */Object.create(null));
      } : supportsProto ? function () {
        return MakeDictionary({
          __proto__: null
        });
      } : function () {
        return MakeDictionary({});
      },
      has: downLevel ? function (map, key) {
        return hasOwn.call(map, key);
      } : function (map, key) {
        return key in map;
      },
      get: downLevel ? function (map, key) {
        return hasOwn.call(map, key) ? map[key] : void 0;
      } : function (map, key) {
        return map[key];
      }
    };
    var functionPrototype = Object.getPrototypeOf(Function);
    var usePolyfill = (typeof process === "undefined" ? "undefined" : _typeof(process)) === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
    var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
    var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    var Metadata = new _WeakMap();
    function decorate(decorators, target, propertyKey, attributes) {
      if (!IsUndefined(propertyKey)) {
        if (!IsArray(decorators)) throw new TypeError();
        if (!IsObject(target)) throw new TypeError();
        if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes)) throw new TypeError();
        if (IsNull(attributes)) attributes = void 0;
        propertyKey = ToPropertyKey(propertyKey);
        return DecorateProperty(decorators, target, propertyKey, attributes);
      } else {
        if (!IsArray(decorators)) throw new TypeError();
        if (!IsConstructor(target)) throw new TypeError();
        return DecorateConstructor(decorators, target);
      }
    }
    exporter("decorate", decorate);
    function metadata(metadataKey, metadataValue) {
      function decorator(target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey)) throw new TypeError();
        OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }
      return decorator;
    }
    exporter("metadata", metadata);
    function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
    }
    exporter("defineMetadata", defineMetadata);
    function hasMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryHasMetadata(metadataKey, target, propertyKey);
    }
    exporter("hasMetadata", hasMetadata);
    function hasOwnMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
    }
    exporter("hasOwnMetadata", hasOwnMetadata);
    function getMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryGetMetadata(metadataKey, target, propertyKey);
    }
    exporter("getMetadata", getMetadata);
    function getOwnMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
    }
    exporter("getOwnMetadata", getOwnMetadata);
    function getMetadataKeys(target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryMetadataKeys(target, propertyKey);
    }
    exporter("getMetadataKeys", getMetadataKeys);
    function getOwnMetadataKeys(target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryOwnMetadataKeys(target, propertyKey);
    }
    exporter("getOwnMetadataKeys", getOwnMetadataKeys);
    function deleteMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target)) throw new TypeError();
      if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
      var metadataMap = GetOrCreateMetadataMap(target, propertyKey, false);
      if (IsUndefined(metadataMap)) return false;
      if (!metadataMap["delete"](metadataKey)) return false;
      if (metadataMap.size > 0) return true;
      var targetMetadata = Metadata.get(target);
      targetMetadata["delete"](propertyKey);
      if (targetMetadata.size > 0) return true;
      Metadata["delete"](target);
      return true;
    }
    exporter("deleteMetadata", deleteMetadata);
    function DecorateConstructor(decorators, target) {
      for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        var decorated = decorator(target);
        if (!IsUndefined(decorated) && !IsNull(decorated)) {
          if (!IsConstructor(decorated)) throw new TypeError();
          target = decorated;
        }
      }
      return target;
    }
    function DecorateProperty(decorators, target, propertyKey, descriptor) {
      for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        var decorated = decorator(target, propertyKey, descriptor);
        if (!IsUndefined(decorated) && !IsNull(decorated)) {
          if (!IsObject(decorated)) throw new TypeError();
          descriptor = decorated;
        }
      }
      return descriptor;
    }
    function GetOrCreateMetadataMap(O, P, Create) {
      var targetMetadata = Metadata.get(O);
      if (IsUndefined(targetMetadata)) {
        if (!Create) return void 0;
        targetMetadata = new _Map();
        Metadata.set(O, targetMetadata);
      }
      var metadataMap = targetMetadata.get(P);
      if (IsUndefined(metadataMap)) {
        if (!Create) return void 0;
        metadataMap = new _Map();
        targetMetadata.set(P, metadataMap);
      }
      return metadataMap;
    }
    function OrdinaryHasMetadata(MetadataKey, O, P) {
      var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn2) return true;
      var parent = OrdinaryGetPrototypeOf(O);
      if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
      return false;
    }
    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
      var metadataMap = GetOrCreateMetadataMap(O, P, false);
      if (IsUndefined(metadataMap)) return false;
      return ToBoolean(metadataMap.has(MetadataKey));
    }
    function OrdinaryGetMetadata(MetadataKey, O, P) {
      var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn2) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
      var parent = OrdinaryGetPrototypeOf(O);
      if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
      return void 0;
    }
    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
      var metadataMap = GetOrCreateMetadataMap(O, P, false);
      if (IsUndefined(metadataMap)) return void 0;
      return metadataMap.get(MetadataKey);
    }
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
      var metadataMap = GetOrCreateMetadataMap(O, P, true);
      metadataMap.set(MetadataKey, MetadataValue);
    }
    function OrdinaryMetadataKeys(O, P) {
      var ownKeys = OrdinaryOwnMetadataKeys(O, P);
      var parent = OrdinaryGetPrototypeOf(O);
      if (parent === null) return ownKeys;
      var parentKeys = OrdinaryMetadataKeys(parent, P);
      if (parentKeys.length <= 0) return ownKeys;
      if (ownKeys.length <= 0) return parentKeys;
      var set = new _Set();
      var keys = [];
      for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
        var key = ownKeys_1[_i];
        var hasKey = set.has(key);
        if (!hasKey) {
          set.add(key);
          keys.push(key);
        }
      }
      for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
        var key = parentKeys_1[_a];
        var hasKey = set.has(key);
        if (!hasKey) {
          set.add(key);
          keys.push(key);
        }
      }
      return keys;
    }
    function OrdinaryOwnMetadataKeys(O, P) {
      var keys = [];
      var metadataMap = GetOrCreateMetadataMap(O, P, false);
      if (IsUndefined(metadataMap)) return keys;
      var keysObj = metadataMap.keys();
      var iterator = GetIterator(keysObj);
      var k = 0;
      while (true) {
        var next = IteratorStep(iterator);
        if (!next) {
          keys.length = k;
          return keys;
        }
        var nextValue = IteratorValue(next);
        try {
          keys[k] = nextValue;
        } catch (e) {
          try {
            IteratorClose(iterator);
          } finally {
            throw e;
          }
        }
        k++;
      }
    }
    function Type(x) {
      if (x === null) return 1;
      switch (_typeof(x)) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return x === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function IsUndefined(x) {
      return x === void 0;
    }
    function IsNull(x) {
      return x === null;
    }
    function IsSymbol(x) {
      return _typeof(x) === "symbol";
    }
    function IsObject(x) {
      return _typeof(x) === "object" ? x !== null : typeof x === "function";
    }
    function ToPrimitive(input, PreferredType) {
      switch (Type(input)) {
        case 0:
          return input;
        case 1:
          return input;
        case 2:
          return input;
        case 3:
          return input;
        case 4:
          return input;
        case 5:
          return input;
      }
      var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
      var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
      if (exoticToPrim !== void 0) {
        var result = exoticToPrim.call(input, hint);
        if (IsObject(result)) throw new TypeError();
        return result;
      }
      return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
    }
    function OrdinaryToPrimitive(O, hint) {
      if (hint === "string") {
        var toString_1 = O.toString;
        if (IsCallable(toString_1)) {
          var result = toString_1.call(O);
          if (!IsObject(result)) return result;
        }
        var valueOf = O.valueOf;
        if (IsCallable(valueOf)) {
          var result = valueOf.call(O);
          if (!IsObject(result)) return result;
        }
      } else {
        var valueOf = O.valueOf;
        if (IsCallable(valueOf)) {
          var result = valueOf.call(O);
          if (!IsObject(result)) return result;
        }
        var toString_2 = O.toString;
        if (IsCallable(toString_2)) {
          var result = toString_2.call(O);
          if (!IsObject(result)) return result;
        }
      }
      throw new TypeError();
    }
    function ToBoolean(argument) {
      return !!argument;
    }
    function ToString(argument) {
      return "" + argument;
    }
    function ToPropertyKey(argument) {
      var key = ToPrimitive(argument, 3);
      if (IsSymbol(key)) return key;
      return ToString(key);
    }
    function IsArray(argument) {
      return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
    }
    function IsCallable(argument) {
      return typeof argument === "function";
    }
    function IsConstructor(argument) {
      return typeof argument === "function";
    }
    function IsPropertyKey(argument) {
      switch (Type(argument)) {
        case 3:
          return true;
        case 4:
          return true;
        default:
          return false;
      }
    }
    function GetMethod(V, P) {
      var func = V[P];
      if (func === void 0 || func === null) return void 0;
      if (!IsCallable(func)) throw new TypeError();
      return func;
    }
    function GetIterator(obj) {
      var method = GetMethod(obj, iteratorSymbol);
      if (!IsCallable(method)) throw new TypeError();
      var iterator = method.call(obj);
      if (!IsObject(iterator)) throw new TypeError();
      return iterator;
    }
    function IteratorValue(iterResult) {
      return iterResult.value;
    }
    function IteratorStep(iterator) {
      var result = iterator.next();
      return result.done ? false : result;
    }
    function IteratorClose(iterator) {
      var f = iterator["return"];
      if (f) f.call(iterator);
    }
    function OrdinaryGetPrototypeOf(O) {
      var proto = Object.getPrototypeOf(O);
      if (typeof O !== "function" || O === functionPrototype) return proto;
      if (proto !== functionPrototype) return proto;
      var prototype = O.prototype;
      var prototypeProto = prototype && Object.getPrototypeOf(prototype);
      if (prototypeProto == null || prototypeProto === Object.prototype) return proto;
      var constructor = prototypeProto.constructor;
      if (typeof constructor !== "function") return proto;
      if (constructor === O) return proto;
      return constructor;
    }
    function CreateMapPolyfill() {
      var cacheSentinel = {};
      var arraySentinel = [];
      var MapIterator = function () {
        function MapIterator2(keys, values, selector) {
          this._index = 0;
          this._keys = keys;
          this._values = values;
          this._selector = selector;
        }
        MapIterator2.prototype["@@iterator"] = function () {
          return this;
        };
        MapIterator2.prototype[iteratorSymbol] = function () {
          return this;
        };
        MapIterator2.prototype.next = function () {
          var index = this._index;
          if (index >= 0 && index < this._keys.length) {
            var result = this._selector(this._keys[index], this._values[index]);
            if (index + 1 >= this._keys.length) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            } else {
              this._index++;
            }
            return {
              value: result,
              done: false
            };
          }
          return {
            value: void 0,
            done: true
          };
        };
        MapIterator2.prototype["throw"] = function (error2) {
          if (this._index >= 0) {
            this._index = -1;
            this._keys = arraySentinel;
            this._values = arraySentinel;
          }
          throw error2;
        };
        MapIterator2.prototype["return"] = function (value) {
          if (this._index >= 0) {
            this._index = -1;
            this._keys = arraySentinel;
            this._values = arraySentinel;
          }
          return {
            value: value,
            done: true
          };
        };
        return MapIterator2;
      }();
      return function () {
        function Map2() {
          this._keys = [];
          this._values = [];
          this._cacheKey = cacheSentinel;
          this._cacheIndex = -2;
        }
        Object.defineProperty(Map2.prototype, "size", {
          get: function get() {
            return this._keys.length;
          },
          enumerable: true,
          configurable: true
        });
        Map2.prototype.has = function (key) {
          return this._find(key, false) >= 0;
        };
        Map2.prototype.get = function (key) {
          var index = this._find(key, false);
          return index >= 0 ? this._values[index] : void 0;
        };
        Map2.prototype.set = function (key, value) {
          var index = this._find(key, true);
          this._values[index] = value;
          return this;
        };
        Map2.prototype["delete"] = function (key) {
          var index = this._find(key, false);
          if (index >= 0) {
            var size = this._keys.length;
            for (var i = index + 1; i < size; i++) {
              this._keys[i - 1] = this._keys[i];
              this._values[i - 1] = this._values[i];
            }
            this._keys.length--;
            this._values.length--;
            if (key === this._cacheKey) {
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            }
            return true;
          }
          return false;
        };
        Map2.prototype.clear = function () {
          this._keys.length = 0;
          this._values.length = 0;
          this._cacheKey = cacheSentinel;
          this._cacheIndex = -2;
        };
        Map2.prototype.keys = function () {
          return new MapIterator(this._keys, this._values, getKey);
        };
        Map2.prototype.values = function () {
          return new MapIterator(this._keys, this._values, getValue);
        };
        Map2.prototype.entries = function () {
          return new MapIterator(this._keys, this._values, getEntry);
        };
        Map2.prototype["@@iterator"] = function () {
          return this.entries();
        };
        Map2.prototype[iteratorSymbol] = function () {
          return this.entries();
        };
        Map2.prototype._find = function (key, insert) {
          if (this._cacheKey !== key) {
            this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
          }
          if (this._cacheIndex < 0 && insert) {
            this._cacheIndex = this._keys.length;
            this._keys.push(key);
            this._values.push(void 0);
          }
          return this._cacheIndex;
        };
        return Map2;
      }();
      function getKey(key, _) {
        return key;
      }
      function getValue(_, value) {
        return value;
      }
      function getEntry(key, value) {
        return [key, value];
      }
    }
    function CreateSetPolyfill() {
      return function () {
        function Set2() {
          this._map = new _Map();
        }
        Object.defineProperty(Set2.prototype, "size", {
          get: function get() {
            return this._map.size;
          },
          enumerable: true,
          configurable: true
        });
        Set2.prototype.has = function (value) {
          return this._map.has(value);
        };
        Set2.prototype.add = function (value) {
          return this._map.set(value, value), this;
        };
        Set2.prototype["delete"] = function (value) {
          return this._map["delete"](value);
        };
        Set2.prototype.clear = function () {
          this._map.clear();
        };
        Set2.prototype.keys = function () {
          return this._map.keys();
        };
        Set2.prototype.values = function () {
          return this._map.values();
        };
        Set2.prototype.entries = function () {
          return this._map.entries();
        };
        Set2.prototype["@@iterator"] = function () {
          return this.keys();
        };
        Set2.prototype[iteratorSymbol] = function () {
          return this.keys();
        };
        return Set2;
      }();
    }
    function CreateWeakMapPolyfill() {
      var UUID_SIZE = 16;
      var keys = HashMap.create();
      var rootKey = CreateUniqueKey();
      return function () {
        function WeakMap2() {
          this._key = CreateUniqueKey();
        }
        WeakMap2.prototype.has = function (target) {
          var table = GetOrCreateWeakMapTable(target, false);
          return table !== void 0 ? HashMap.has(table, this._key) : false;
        };
        WeakMap2.prototype.get = function (target) {
          var table = GetOrCreateWeakMapTable(target, false);
          return table !== void 0 ? HashMap.get(table, this._key) : void 0;
        };
        WeakMap2.prototype.set = function (target, value) {
          var table = GetOrCreateWeakMapTable(target, true);
          table[this._key] = value;
          return this;
        };
        WeakMap2.prototype["delete"] = function (target) {
          var table = GetOrCreateWeakMapTable(target, false);
          return table !== void 0 ? delete table[this._key] : false;
        };
        WeakMap2.prototype.clear = function () {
          this._key = CreateUniqueKey();
        };
        return WeakMap2;
      }();
      function CreateUniqueKey() {
        var key;
        do key = "@@WeakMap@@" + CreateUUID(); while (HashMap.has(keys, key));
        keys[key] = true;
        return key;
      }
      function GetOrCreateWeakMapTable(target, create) {
        if (!hasOwn.call(target, rootKey)) {
          if (!create) return void 0;
          Object.defineProperty(target, rootKey, {
            value: HashMap.create()
          });
        }
        return target[rootKey];
      }
      function FillRandomBytes(buffer, size) {
        for (var i = 0; i < size; ++i) buffer[i] = Math.random() * 255 | 0;
        return buffer;
      }
      function GenRandomBytes(size) {
        if (typeof Uint8Array === "function") {
          if (typeof crypto !== "undefined") return crypto.getRandomValues(new Uint8Array(size));
          if (typeof msCrypto !== "undefined") return msCrypto.getRandomValues(new Uint8Array(size));
          return FillRandomBytes(new Uint8Array(size), size);
        }
        return FillRandomBytes(new Array(size), size);
      }
      function CreateUUID() {
        var data = GenRandomBytes(UUID_SIZE);
        data[6] = data[6] & 79 | 64;
        data[8] = data[8] & 191 | 128;
        var result = "";
        for (var offset = 0; offset < UUID_SIZE; ++offset) {
          var _byte = data[offset];
          if (offset === 4 || offset === 6 || offset === 8) result += "-";
          if (_byte < 16) result += "0";
          result += _byte.toString(16).toLowerCase();
        }
        return result;
      }
    }
    function MakeDictionary(obj) {
      obj.__ = void 0;
      delete obj.__;
      return obj;
    }
  });
})(Reflect2 || (Reflect2 = {}));

// src/index.ts
var import_class_logger = __toESM(require_dist(), 1);
var import_fast_safe_stringify = __toESM(require_fast_safe_stringify(), 1);
var import_class_logger2 = __toESM(require_dist(), 1);
var traceEnabled = true;
var debugEnabled = true;
var filters = void 0;
var _configure = function _configure(args) {
  (0, import_class_logger.setConfig)({
    formatter: new ClassLoggerTimestampFormatterService(),
    include: {
      args: false,
      result: false
    }
  });
  if ((args === null || args === void 0 ? void 0 : args.traceEnabled) !== void 0) {
    traceEnabled = args === null || args === void 0 ? void 0 : args.traceEnabled;
  }
  if ((args === null || args === void 0 ? void 0 : args.debugEnabled) !== void 0) {
    debugEnabled = args === null || args === void 0 ? void 0 : args.debugEnabled;
  }
  if ((args === null || args === void 0 ? void 0 : args.filters) !== void 0) {
    filters = args === null || args === void 0 ? void 0 : args.filters;
  }
};
var ClassLoggerTimestampFormatterService = /*#__PURE__*/function (_import_class_logger$) {
  _inherits(ClassLoggerTimestampFormatterService, _import_class_logger$);
  var _super = _createSuper(ClassLoggerTimestampFormatterService);
  function ClassLoggerTimestampFormatterService() {
    _classCallCheck(this, ClassLoggerTimestampFormatterService);
    return _super.apply(this, arguments);
  }
  _createClass(ClassLoggerTimestampFormatterService, [{
    key: "base",
    value: function base(data) {
      var baseSuper = _get(_getPrototypeOf(ClassLoggerTimestampFormatterService.prototype), "base", this).call(this, data);
      var timestamp = Date.now();
      var baseWithTimestamp = "".concat(timestamp, ":").concat(baseSuper);
      return baseWithTimestamp;
    }
  }, {
    key: "complexObjectToString",
    value: function complexObjectToString(obj) {
      var _this3 = this;
      if (_typeof(obj) !== "object") {
        return this.placeholderNotAvailable;
      }
      if (obj === null) {
        return (0, import_fast_safe_stringify["default"])(obj);
      }
      var classInstanceFiltered = {};
      var keys = Object.keys(obj);
      if (obj instanceof Map || obj instanceof Set) {
        keys = _toConsumableArray(obj.keys());
      }
      keys.forEach(function (key) {
        var value = obj[key];
        if (typeof value === "function") {
          return;
        }
        classInstanceFiltered[key] = _typeof(value) === "object" && !_this3.isPlainObjectOrArray(value) ? _this3.complexObjectToString(value) : value;
      });
      return "".concat(obj.constructor.name, " ").concat((0, import_fast_safe_stringify["default"])(classInstanceFiltered));
    }
  }]);
  return ClassLoggerTimestampFormatterService;
}(import_class_logger.ClassLoggerFormatterService);
var _trace = function _trace() {
  if (!traceEnabled) {
    return;
  }
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }
  try {
    var message = mapArgsToString(args);
    if (!filters || filters && filters.length === 0 || filters && filters.length === 0 || filters && filters.find(function (filter) {
      return message.includes(filter);
    })) {
      console.debug("TRACE ".concat(message));
    }
  } catch (error2) {
    console.debug.apply(args);
  }
};
var mapArgsToString = function mapArgsToString(args) {
  return args.map(function (_) {
    if (_ instanceof Error) {
      return "".concat(_.message, " ").concat(_.stack);
    }
    if (_ instanceof Object) {
      return JSON.stringify(_);
    }
    return _.toString();
  }).join(" ");
};
var _debug = function _debug() {
  if (!debugEnabled) {
    return;
  }
  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }
  try {
    var message = mapArgsToString(args);
    if (!filters || filters && filters.length === 0 || filters && filters.find(function (filter) {
      return message.includes(filter);
    })) {
      console.debug("DEBUG ".concat(message));
    }
  } catch (error2) {
    console.debug.apply(args);
  }
};
var _info = function _info() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }
  try {
    var message = mapArgsToString(args);
    if (!filters || filters && filters.length === 0 || filters && filters.find(function (filter) {
      return message.includes(filter);
    })) {
      console.log("INFO ".concat(message));
    }
  } catch (error2) {
    console.log.apply(args);
  }
};
var _warn = function _warn() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }
  try {
    var message = mapArgsToString(args);
    if (!filters || filters && filters.length === 0 || filters && filters.find(function (filter) {
      return message.includes(filter);
    })) {
      console.warn("WARN ".concat(message));
    }
  } catch (error2) {
    console.warn.apply(args);
  }
};
var _error = function _error() {
  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }
  try {
    var message = mapArgsToString(args);
    if (!filters || filters && filters.length === 0 || filters && filters.find(function (filter) {
      return message.includes(filter);
    })) {
      console.error("ERROR ".concat(message));
    }
  } catch (error2) {
    console.error.apply(args);
  }
};
var _objectWithoutProperties = function _objectWithoutProperties(obj, keys) {
  var target = {};
  var clonedObj = JSON.parse(JSON.stringify(obj));
  for (var i in clonedObj) {
    if (keys.indexOf(i) >= 0) {
      continue;
    }
    if (!Object.prototype.hasOwnProperty.call(clonedObj, i)) {
      continue;
    }
    target[i] = clonedObj[i];
  }
  return target;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Log: Log,
  LogClass: LogClass,
  configure: _configure,
  debug: _debug,
  error: _error,
  info: _info,
  objectWithoutProperties: _objectWithoutProperties,
  trace: _trace,
  warn: _warn
});