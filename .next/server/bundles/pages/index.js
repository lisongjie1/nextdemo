module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./assets/hello.scss
var hello = __webpack_require__(7);
var hello_default = /*#__PURE__*/__webpack_require__.n(hello);

// CONCATENATED MODULE: ./components/hello.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var hello__default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "hello"
      }, "hello next!", external__react__default.a.createElement("div", {
        className: "red"
      }, "hhhhh"));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// CONCATENATED MODULE: ./components/hi.js
function hi__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { hi__typeof = function _typeof(obj) { return typeof obj; }; } else { hi__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return hi__typeof(obj); }

function hi__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function hi__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function hi__createClass(Constructor, protoProps, staticProps) { if (protoProps) hi__defineProperties(Constructor.prototype, protoProps); if (staticProps) hi__defineProperties(Constructor, staticProps); return Constructor; }

function hi__possibleConstructorReturn(self, call) { if (call && (hi__typeof(call) === "object" || typeof call === "function")) { return call; } return hi__assertThisInitialized(self); }

function hi__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function hi__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var hi__default =
/*#__PURE__*/
function (_Component) {
  hi__inherits(_default, _Component);

  function _default() {
    hi__classCallCheck(this, _default);

    return hi__possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  hi__createClass(_default, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("div", {
        className: "hello"
      }, "hihiihih", external__react__default.a.createElement("div", {
        className: "red"
      }, "hhhhh"));
    }
  }]);

  return _default;
}(external__react_["Component"]);


// CONCATENATED MODULE: ./pages/index.js
function pages__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages__typeof = function _typeof(obj) { return typeof obj; }; } else { pages__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages__typeof(obj); }

function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages__createClass(Constructor, protoProps, staticProps) { if (protoProps) pages__defineProperties(Constructor.prototype, protoProps); if (staticProps) pages__defineProperties(Constructor, staticProps); return Constructor; }

function pages__possibleConstructorReturn(self, call) { if (call && (pages__typeof(call) === "object" || typeof call === "function")) { return call; } return pages__assertThisInitialized(self); }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function pages__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var components = {
  hello: hello__default,
  hi: hi__default
};

var pages_Index =
/*#__PURE__*/
function (_Component) {
  pages__inherits(Index, _Component);

  function Index(props) {
    var _this;

    pages__classCallCheck(this, Index);

    _this = pages__possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.handlViewChange = _this.handlViewChange.bind(pages__assertThisInitialized(_this));
    _this.state = {
      view: 'hello'
    };
    return _this;
  }

  pages__createClass(Index, [{
    key: "handlViewChange",
    value: function handlViewChange(v) {
      this.setState({
        view: v
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var Comp = components[this.state.view];
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(Comp, null), external__react__default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.handlViewChange('hi');
        }
      }, "to Hi"), external__react__default.a.createElement("img", {
        src: "../static/favicon.ico",
        alt: ""
      }));
    }
  }]);

  return Index;
}(external__react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);