module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CardMovie/index.js":
/*!***************************************!*\
  !*** ./components/CardMovie/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tools_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tools/colors */ "./tools/colors.js");

var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/CardMovie/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






const CardMovie = props => {
  const {
    data
  } = props;
  const imageUrl = "https://image.tmdb.org/t/p/original" + data.poster_path;

  const title = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data.title);

  const fontSizeTitle = () => {
    if (title.length > 50) {
      return 10;
    } else if (title.length > 20) {
      return 12;
    } else if (title.length > 10) {
      return 14;
    } else {
      return 16;
    }
  };

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    spacing: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1316720418" + " " + "img-movie-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("img", {
    src: imageUrl,
    className: "jsx-1316720418" + " " + "img-movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1316720418" + " " + "detail-movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-1316720418" + " " + "genre-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Action, scifi | ", data.release_date), __jsx("p", {
    style: {
      fontSize: fontSizeTitle(),
      width: 190
    },
    className: "jsx-1316720418" + " " + "title-movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, data.title), __jsx("p", {
    className: "jsx-1316720418" + " " + "rating-movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Star"], {
    style: {
      color: _tools_colors__WEBPACK_IMPORTED_MODULE_5__["default"].yellow2,
      fontSize: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), " \xA0", data.vote_average, "/10"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1316720418",
    __self: undefined
  }, ".container-CardMovie.jsx-1316720418{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:Poppins;}.img-movie-div.jsx-1316720418{height:200px;width:125px;border-radius:10px;}.img-movie.jsx-1316720418{height:200px;width:125px;border-radius:10px;}.detail-movie.jsx-1316720418{width :200px;}.genre-date.jsx-1316720418{font-size:10px;font-weight:400;font-family:Poppins;width:200px;margin-bottom :-10px;}.title-movie.jsx-1316720418{font-weight:700;font-family:Poppins;widht:190px;margin-bottom :-10px;}.rating-movie.jsx-1316720418{font-size:10px;font-weight:700;font-family:Poppins;line-height :5px;}.p-movie.jsx-1316720418{-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;widht:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0NhcmRNb3ZpZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ29CLEFBRzhCLEFBS0osQUFPQSxBQU1BLEFBR0UsQUFPQyxBQU1ELEFBTUYsYUFsQ0QsQUFPQSxBQU1kLEVBR2tCLEFBYUEsQ0FOSSxTQXRCRCxBQU9BLE1BU0MsQUFhQSxLQU5SLFFBckJkLEFBTUEsSUFpQkQsR0FSZSxBQWFLLFlBWHBCLEtBWUMsQ0FOQSxBQVVELEtBekM0QixPQXlDM0IsR0FoQkEsb0VBeEIwQixvQkFDMUIiLCJmaWxlIjoiL1VzZXJzL21hY2Jvb2svV29ya3MvbWUvdGVzL21vdmllYWphL2NvbXBvbmVudHMvQ2FyZE1vdmllL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtTZWFyY2hPdXRsaW5lZCwgTm90aWZpY2F0aW9uc30gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xuaW1wb3J0IHtHcmlkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7U3Rhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi90b29scy9jb2xvcnMnXG5cbmNvbnN0IENhcmRNb3ZpZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7ZGF0YX0gPSBwcm9wc1xuICBjb25zdCBpbWFnZVVybCA9IHByb2Nlc3MuZW52Lk1PVklFX0lNQUdFX1VSTCtkYXRhLnBvc3Rlcl9wYXRoXG4gIGNvbnN0IHRpdGxlID0gSlNPTi5zdHJpbmdpZnkoZGF0YS50aXRsZSlcbiAgY29uc3QgZm9udFNpemVUaXRsZSA9ICgpID0+IHtcbiAgICBpZih0aXRsZS5sZW5ndGggPiA1MCl7XG4gICAgICByZXR1cm4gMTBcbiAgICB9ZWxzZSBpZih0aXRsZS5sZW5ndGggPiAyMCl7XG4gICAgICByZXR1cm4gMTJcbiAgICB9ZWxzZSBpZih0aXRsZS5sZW5ndGggPiAxMCl7XG4gICAgICByZXR1cm4gMTRcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiAxNlxuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAgPEdyaWQgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSB4bD17MTJ9IGl0ZW0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbW92aWUtZGl2XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGNsYXNzTmFtZT1cImltZy1tb3ZpZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSB4bD17MTJ9IGl0ZW0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtbW92aWVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdlbnJlLWRhdGVcIj5BY3Rpb24sIHNjaWZpIHwge2RhdGEucmVsZWFzZV9kYXRlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLW1vdmllXCIgc3R5bGU9e3tmb250U2l6ZSA6IGZvbnRTaXplVGl0bGUoKSwgd2lkdGggOiAxOTB9fT57ZGF0YS50aXRsZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyYXRpbmctbW92aWVcIj48U3RhciBzdHlsZT17e2NvbG9yIDogY29sb3JzLnllbGxvdzIsIGZvbnRTaXplIDogMTJ9fSAvPiAmbmJzcDt7ZGF0YS52b3RlX2F2ZXJhZ2V9LzEwPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyLUNhcmRNb3ZpZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWctbW92aWUtZGl2IHtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTI1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltZy1tb3ZpZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGV0YWlsLW1vdmllIHtcbiAgICAgICAgICAgIHdpZHRoIDogMjAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5nZW5yZS1kYXRlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAtMTBweFxuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUtbW92aWUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgd2lkaHQ6IDE5MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IC0xMHB4XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yYXRpbmctbW92aWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQgOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wLW1vdmllIHtcbiAgICAgICAgICAgIGh5cGhlbnM6IGF1dG87XG4gICAgICAgICAgICB3aWRodDoyMDBweFxuICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9HcmlkPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBDYXJkTW92aWVcbiJdfQ== */\n/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/CardMovie/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CardMovie);

/***/ }),

/***/ "./components/Genre/ItemMenuGenre.js":
/*!*******************************************!*\
  !*** ./components/Genre/ItemMenuGenre.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tools_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tools/colors */ "./tools/colors.js");
var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Genre/ItemMenuGenre.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const ItemMenuGenre = ({
  active,
  title
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, active ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Fab"], {
    size: "small",
    variant: "extended",
    style: {
      background: _tools_colors__WEBPACK_IMPORTED_MODULE_5__["default"].yellow1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3068746348", [_tools_colors__WEBPACK_IMPORTED_MODULE_5__["default"].blackPrimary]]]) + " " + "titleBtnGenre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, title || 'Genre')) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Fab"], {
    size: "small",
    variant: "extended",
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3068746348", [_tools_colors__WEBPACK_IMPORTED_MODULE_5__["default"].blackPrimary]]]) + " " + "titleBtnGenre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, title || 'Genre')), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3068746348",
    dynamic: [_tools_colors__WEBPACK_IMPORTED_MODULE_5__["default"].blackPrimary],
    __self: undefined
  }, `@import url('https://fonts.googleapis.com/css?family=Poppins:200,400,700,900&display=swap');.titleBtnGenre.__jsx-style-dynamic-selector{font-family:Poppins;font-size:12px;font-weight:bold;color:${_tools_colors__WEBPACK_IMPORTED_MODULE_5__["default"].blackPrimary};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0dlbnJlL0l0ZW1NZW51R2VucmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0J5QixBQUV3RyxBQUVuRSxvQkFDTCxlQUNFLGlCQUV0QixtQ0FBQyIsImZpbGUiOiIvVXNlcnMvbWFjYm9vay9Xb3Jrcy9tZS90ZXMvbW92aWVhamEvY29tcG9uZW50cy9HZW5yZS9JdGVtTWVudUdlbnJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge0ZhYn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL3Rvb2xzL2NvbG9ycydcblxuY29uc3QgSXRlbU1lbnVHZW5yZSA9ICh7YWN0aXZlLCB0aXRsZX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIChhY3RpdmUpP1xuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgIDxGYWIgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cImV4dGVuZGVkXCIgc3R5bGU9e3sgYmFja2dyb3VuZCA6IGNvbG9ycy55ZWxsb3cxIH19PjxoMSBjbGFzc05hbWU9XCJ0aXRsZUJ0bkdlbnJlXCI+e3RpdGxlIHx8ICdHZW5yZSd9PC9oMT48L0ZhYj5cbiAgICAgICAgICAgICAgICApOlxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgPEZhYiBzaXplPVwic21hbGxcIiB2YXJpYW50PVwiZXh0ZW5kZWRcIiBjb2xvcj1cImluaGVyaXRcIj48aDEgY2xhc3NOYW1lPVwidGl0bGVCdG5HZW5yZVwiPnt0aXRsZSB8fCAnR2VucmUnfTwvaDE+PC9GYWI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoyMDAsNDAwLDcwMCw5MDAmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgICAgICAudGl0bGVCdG5HZW5yZSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGNvbG9yOiR7Y29sb3JzLmJsYWNrUHJpbWFyeX1cbiAgICAgICAgICAgIH1cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuSXRlbU1lbnVHZW5yZS5wcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZlIDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGl0bGUgOiBQcm9wVHlwZXMuc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1NZW51R2VucmVcbiJdfQ== */
/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/Genre/ItemMenuGenre.js */`));
};

ItemMenuGenre.propTypes = {
  active: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ItemMenuGenre);

/***/ }),

/***/ "./components/Genre/ListMovieGenre.js":
/*!********************************************!*\
  !*** ./components/Genre/ListMovieGenre.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_movie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/movie */ "./redux/actions/movie.js");
/* harmony import */ var _CardMovie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CardMovie */ "./components/CardMovie/index.js");
var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Genre/ListMovieGenre.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var data = [1, 2, 3];

class ListMovieGenre extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }

  render() {
    const {
      moviesGenre,
      genre,
      isLoading
    } = this.props.movie;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoading ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["LinearProgress"], {
      style: {
        width: '100%'
      },
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      spacing: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, moviesGenre !== '' && moviesGenre.results.length > 0 && moviesGenre.results.map(value => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      key: value.id,
      xs: 12,
      sm: 12,
      md: 6,
      lg: 3,
      xl: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      color: "inherit",
      underline: "none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(_CardMovie__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }))))));
  }

}

const mapStateToProps = state => ({
  movie: state.movie
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ListMovieGenre));

/***/ }),

/***/ "./components/Genre/MenuGenre.js":
/*!***************************************!*\
  !*** ./components/Genre/MenuGenre.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ItemMenuGenre__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemMenuGenre */ "./components/Genre/ItemMenuGenre.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_movie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/movie */ "./redux/actions/movie.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Genre/MenuGenre.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var data = [1, 2, 3];

class MenuGenre extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }

  async componentDidMount() {
    await this.props.dispatch(Object(_redux_actions_movie__WEBPACK_IMPORTED_MODULE_4__["GetGenre"])());
    this.props.dispatch(Object(_redux_actions_movie__WEBPACK_IMPORTED_MODULE_4__["GetMovieGenre"])(this.props.movie.activeGenre.id, 1));
  }

  render() {
    const {
      activeGenre,
      genre
    } = this.props.movie;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      container: true,
      spacing: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, genre.length > 0 && genre.map(value => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      key: value.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      color: "inherit",
      underline: "none",
      onClick: () => this.props.dispatch(Object(_redux_actions_movie__WEBPACK_IMPORTED_MODULE_4__["GetMovieGenre"])(value.id, 1)),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx(_ItemMenuGenre__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: value.name,
      active: value.name === activeGenre.name ? true : false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }))))));
  }

}

const mapStateToProps = state => ({
  movie: state.movie
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(MenuGenre));

/***/ }),

/***/ "./components/Genre/index.js":
/*!***********************************!*\
  !*** ./components/Genre/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuGenre__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuGenre */ "./components/Genre/MenuGenre.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ListMovieGenre__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListMovieGenre */ "./components/Genre/ListMovieGenre.js");
var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Genre/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Genre = () => {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    spacing: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    lg: 12,
    xl: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_MenuGenre__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    lg: 12,
    xl: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(_ListMovieGenre__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })));
};

const mapStateToProps = state => ({
  movie: state.movie
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Genre));

/***/ }),

/***/ "./components/Layouts/Footer.js":
/*!**************************************!*\
  !*** ./components/Layouts/Footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Layouts/Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Footer() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "footer"));
}

Footer.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layouts/HeaderBody.js":
/*!******************************************!*\
  !*** ./components/Layouts/HeaderBody.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Layouts/HeaderBody.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const HeaderBody = () => {
  return __jsx("div", {
    className: "jsx-1706668461" + " " + "container-headerbody",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["SearchOutlined"], {
    style: {
      fontSize: 25,
      color: '#525252',
      marginRight: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["Notifications"], {
    style: {
      fontSize: 25,
      color: '#525252',
      marginRight: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1706668461",
    __self: undefined
  }, ".container-headerbody.jsx-1706668461{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.icon-header.jsx-1706668461{font-size:25px;font-color:#5a5a5a;}.search.jsx-1706668461{margin-right:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0xheW91dHMvSGVhZGVyQm9keS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRa0IsQUFHMEIsQUFLQyxBQUlHLGVBSEMsR0FJdEIsZ0JBSEEsd0NBTjZCLGlHQUNQLDZGQUN2QiIsImZpbGUiOiIvVXNlcnMvbWFjYm9vay9Xb3Jrcy9tZS90ZXMvbW92aWVhamEvY29tcG9uZW50cy9MYXlvdXRzL0hlYWRlckJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1NlYXJjaE91dGxpbmVkLCBOb3RpZmljYXRpb25zfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXG5cbmNvbnN0IEhlYWRlckJvZHkgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItaGVhZGVyYm9keVwiPlxuICAgICAgPFNlYXJjaE91dGxpbmVkIHN0eWxlPXt7Zm9udFNpemUgOiAyNSwgY29sb3IgOiAnIzUyNTI1MicsIG1hcmdpblJpZ2h0IDogMjB9fS8+XG4gICAgICA8Tm90aWZpY2F0aW9ucyBzdHlsZT17e2ZvbnRTaXplIDogMjUsIGNvbG9yIDogJyM1MjUyNTInLCBtYXJnaW5SaWdodCA6IDIwfX0vPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgIC5jb250YWluZXItaGVhZGVyYm9keSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICB9XG4gICAgICAgIC5pY29uLWhlYWRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6MjVweDtcbiAgICAgICAgICAgIGZvbnQtY29sb3I6IzVhNWE1YTtcbiAgICAgICAgfVxuICAgICAgICAuc2VhcmNoIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDo1MHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckJvZHlcbiJdfQ== */\n/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/Layouts/HeaderBody.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderBody);

/***/ }),

/***/ "./components/Layouts/Menu.js":
/*!************************************!*\
  !*** ./components/Layouts/Menu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/nav */ "./redux/actions/nav.js");
/* harmony import */ var _tools_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tools/colors */ "./tools/colors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Layouts/Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Menu = props => {
  const {
    router
  } = props;
  const path = router.pathname;
  const {
    page
  } = props.nav;

  const openMenu = nav => {
    props.dispatch(Object(_redux_actions_nav__WEBPACK_IMPORTED_MODULE_5__["openMenu"])(nav));
  };

  const dataMenu = [{
    title: 'Home',
    page: '/',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["HomeOutlined"], {
      style: {
        color: path === '/' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    })
  }, {
    title: 'Browse',
    page: '/browse',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["GridOffOutlined"], {
      style: {
        color: path === '/browse' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    })
  }, {
    title: 'Category',
    page: '/category',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ShareOutlined"], {
      style: {
        color: path === '/category' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    })
  }, {
    title: 'Trending',
    page: '/trending',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["BarChart"], {
      style: {
        color: path === '/trending' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    })
  }, {
    title: 'Profile',
    page: '/profile',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["AccountBoxOutlined"], {
      style: {
        color: path === '/profile' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    })
  }];
  const LocalMenu = [{
    title: 'Recently Played',
    page: '/recently',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["DynamicFeedOutlined"], {
      style: {
        color: path === '/recently' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    })
  }, {
    title: 'Local Storage',
    page: '/local',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["FileCopyOutlined"], {
      style: {
        color: path === '/local' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    })
  }];
  return __jsx("div", {
    className: "jsx-27314977" + " " + "container-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-27314977" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "MOVIE"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    justify: "center",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, dataMenu.map(value => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    key: value.title,
    item: true,
    xs: 12,
    sm: 12,
    lg: 12,
    xl: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: value.page,
    color: "inherit",
    onClick: () => openMenu(value.page),
    underline: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-27314977" + " " + "item-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, value.icon, __jsx("p", {
    style: {
      color: path === value.page ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay
    },
    className: "jsx-27314977" + " " + "title-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, value.title))))), __jsx("div", {
    className: "jsx-27314977" + " " + "item-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-27314977" + " " + "span-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "My Movie")), LocalMenu.map(value => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    key: value.title,
    item: true,
    xs: 12,
    sm: 12,
    lg: 12,
    xl: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    href: value.page,
    color: "inherit",
    onClick: () => openMenu(value.page),
    underline: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-27314977" + " " + "item-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, value.icon, __jsx("p", {
    style: {
      color: path === value.page ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : "#a1a1a1"
    },
    className: "jsx-27314977" + " " + "title-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, value.title)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "27314977",
    __self: undefined
  }, "@import url('https://fonts.googleapis.com/css?family=Poppins:200,400,700,900&display=swap');.container-menu.jsx-27314977{display:inline-block;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;background:#ffffff;}.logo.jsx-27314977{margin-bottom:40px;font-weight:bold;font-size:20px;font-family:Poppins;display:inline-block;}.menu.jsx-27314977{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;display:inline-block;}.item-menu.jsx-27314977{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:35px;}.title-menu.jsx-27314977{font-size:14px;font-family:Poppins;font-weight:bold;}.icon-menu.jsx-27314977{color:#a1a1a1;text-align:center;font-size:18px;margin-right:15px;}.span-menu.jsx-27314977{color:#a1a1a1;font-size:14px;font-family:Poppins;font-weight:400;margin-top:20px;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0xheW91dHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRmtCLEFBRW9HLEFBRW5FLEFBTUYsQUFPSSxBQUtWLEFBTUUsQUFLRCxBQU1DLGNBTEcsQUFNSCxDQVhNLElBbEJKLEVBTkssUUFvQ0QsR0FOTixHQUxFLENBbEJGLFdBd0JHLEVBTUYsRUE3QkssQ0FrQnhCLGFBTUEsQUFNb0IsTUE3QkssR0FTSCxPQXFCQyxXQTdCdkIsT0FUc0IsQUFZQSxDQTJCdEIsaUJBdENzQixBQVlHLG1CQVh6QixFQVlBLEtBSXNCLDZGQUNGLGlCQUNwQiIsImZpbGUiOiIvVXNlcnMvbWFjYm9vay9Xb3Jrcy9tZS90ZXMvbW92aWVhamEvY29tcG9uZW50cy9MYXlvdXRzL01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0hvbWVPdXRsaW5lZCwgR3JpZE9mZk91dGxpbmVkLCBTaGFyZU91dGxpbmVkLCBCYXJDaGFydCwgQWNjb3VudEJveE91dGxpbmVkLCBcbiAgICBEeW5hbWljRmVlZE91dGxpbmVkLCBGaWxlQ29weU91dGxpbmVkfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXG5pbXBvcnQge0dyaWQsIExpbmt9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtvcGVuTWVudSBhcyBjbGlja01lbnV9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvbmF2J1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi90b29scy9jb2xvcnMnXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7cm91dGVyfSA9IHByb3BzXG4gICAgY29uc3QgcGF0aCA9IHJvdXRlci5wYXRobmFtZVxuICAgIGNvbnN0IHtwYWdlfSA9IHByb3BzLm5hdlxuICAgIGNvbnN0IG9wZW5NZW51ID0gKG5hdikgPT4ge1xuICAgICAgICBwcm9wcy5kaXNwYXRjaChjbGlja01lbnUobmF2KSlcbiAgICB9XG4gICAgY29uc3QgZGF0YU1lbnUgPSBbe1xuICAgICAgICAgICAgdGl0bGUgOiAnSG9tZScsXG4gICAgICAgICAgICBwYWdlIDogJy8nLFxuICAgICAgICAgICAgaWNvbiA6IDxIb21lT3V0bGluZWQgc3R5bGU9e3tjb2xvcjoocGF0aCA9PT0gJy8nKT8gY29sb3JzLm9yYW5nZVByaW1hcnkgOiBjb2xvcnMucHVycGxlUHJpbWF5LCBmb250U2l6ZToxOCwgbWFyZ2luUmlnaHQ6MTV9fS8+XG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGl0bGUgOiAnQnJvd3NlJyxcbiAgICAgICAgICAgIHBhZ2UgOiAnL2Jyb3dzZScsXG4gICAgICAgICAgICBpY29uIDogPEdyaWRPZmZPdXRsaW5lZCBzdHlsZT17e2NvbG9yOihwYXRoID09PSAnL2Jyb3dzZScpPyBjb2xvcnMub3JhbmdlUHJpbWFyeSA6IGNvbG9ycy5wdXJwbGVQcmltYXksZm9udFNpemU6MTgsIG1hcmdpblJpZ2h0OjE1fX0vPlxuICAgICAgICB9LHtcbiAgICAgICAgICAgIHRpdGxlIDogJ0NhdGVnb3J5JyxcbiAgICAgICAgICAgIHBhZ2UgOiAnL2NhdGVnb3J5JyxcbiAgICAgICAgICAgIGljb24gOiA8U2hhcmVPdXRsaW5lZCBzdHlsZT17e2NvbG9yOihwYXRoID09PSAnL2NhdGVnb3J5Jyk/IGNvbG9ycy5vcmFuZ2VQcmltYXJ5IDogY29sb3JzLnB1cnBsZVByaW1heSwgZm9udFNpemU6MTgsIG1hcmdpblJpZ2h0OjE1fX0gLz5cbiAgICAgICAgfSx7XG4gICAgICAgICAgICB0aXRsZSA6ICdUcmVuZGluZycsXG4gICAgICAgICAgICBwYWdlIDogJy90cmVuZGluZycsXG4gICAgICAgICAgICBpY29uIDogPEJhckNoYXJ0IHN0eWxlPXt7Y29sb3I6KHBhdGggPT09ICcvdHJlbmRpbmcnKT8gY29sb3JzLm9yYW5nZVByaW1hcnkgOiBjb2xvcnMucHVycGxlUHJpbWF5LCBmb250U2l6ZToxOCwgbWFyZ2luUmlnaHQ6MTV9fS8+XG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGl0bGUgOiAnUHJvZmlsZScsXG4gICAgICAgICAgICBwYWdlIDogJy9wcm9maWxlJyxcbiAgICAgICAgICAgIGljb24gOiA8QWNjb3VudEJveE91dGxpbmVkIHN0eWxlPXt7Y29sb3I6KHBhdGggPT09ICcvcHJvZmlsZScpPyBjb2xvcnMub3JhbmdlUHJpbWFyeSA6IGNvbG9ycy5wdXJwbGVQcmltYXksIGZvbnRTaXplOjE4LCBtYXJnaW5SaWdodDoxNX19Lz5cbiAgICAgICAgfVxuICAgIF1cblxuICAgIGNvbnN0IExvY2FsTWVudSA9IFt7XG4gICAgICAgIHRpdGxlIDogJ1JlY2VudGx5IFBsYXllZCcsXG4gICAgICAgIHBhZ2UgOiAnL3JlY2VudGx5JyxcbiAgICAgICAgaWNvbiA6IDxEeW5hbWljRmVlZE91dGxpbmVkIHN0eWxlPXt7Y29sb3I6KHBhdGggPT09ICcvcmVjZW50bHknKT8gY29sb3JzLm9yYW5nZVByaW1hcnkgOiBjb2xvcnMucHVycGxlUHJpbWF5LCBmb250U2l6ZToxOCwgbWFyZ2luUmlnaHQ6MTV9fS8+XG4gICAgfSx7XG4gICAgICAgIHRpdGxlIDogJ0xvY2FsIFN0b3JhZ2UnLFxuICAgICAgICBwYWdlIDogJy9sb2NhbCcsXG4gICAgICAgIGljb24gOiA8RmlsZUNvcHlPdXRsaW5lZCBzdHlsZT17e2NvbG9yOihwYXRoID09PSAnL2xvY2FsJyk/IGNvbG9ycy5vcmFuZ2VQcmltYXJ5IDogY29sb3JzLnB1cnBsZVByaW1heSwgZm9udFNpemU6MTgsIG1hcmdpblJpZ2h0OjE1fX0vPlxuICAgIH1dXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1tZW51XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICBNT1ZJRVxuICAgICAgPC9kaXY+XG4gICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIHN0eWxlPXt7ZGlzcGxheTonaW5saW5lLWJsb2NrJ319PlxuICAgICAgICB7XG4gICAgICAgICAgICBkYXRhTWVudS5tYXAoKHZhbHVlKSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyaWQga2V5PXt2YWx1ZS50aXRsZX0gaXRlbSB4cz17MTJ9IHNtPXsxMn0gbGc9ezEyfSB4bD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt2YWx1ZS5wYWdlfSBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXsoKT0+b3Blbk1lbnUodmFsdWUucGFnZSl9IHVuZGVybGluZT1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLmljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtbWVudVwiIHN0eWxlPXt7Y29sb3IgOiAocGF0aCA9PT0gdmFsdWUucGFnZSk/IGNvbG9ycy5vcmFuZ2VQcmltYXJ5IDogY29sb3JzLnB1cnBsZVByaW1heX19Pnt2YWx1ZS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1tZW51XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcGFuLW1lbnVcIj5NeSBNb3ZpZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBMb2NhbE1lbnUubWFwKCh2YWx1ZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmlkIGtleT17dmFsdWUudGl0bGV9IGl0ZW0geHM9ezEyfSBzbT17MTJ9IGxnPXsxMn0geGw9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dmFsdWUucGFnZX0gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17KCk9Pm9wZW5NZW51KHZhbHVlLnBhZ2UpfSB1bmRlcmxpbmU9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLW1lbnVcIiBzdHlsZT17e2NvbG9yIDogKHBhdGggPT09IHZhbHVlLnBhZ2UpPyBjb2xvcnMub3JhbmdlUHJpbWFyeSA6IFwiI2ExYTFhMVwifX0+e3ZhbHVlLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICA8L0dyaWQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoyMDAsNDAwLDcwMCw5MDAmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgIC5jb250YWluZXItbWVudSB7XG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjQwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAubWVudSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtLW1lbnUge1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MzVweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUtbWVudSB7XG4gICAgICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgfVxuICAgICAgICAuaWNvbi1tZW51IHtcbiAgICAgICAgICAgIGNvbG9yOiNhMWExYTE7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNwYW4tbWVudSB7XG4gICAgICAgICAgICBjb2xvcjogI2ExYTFhMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbk1lbnUucHJvcFR5cGVzID0ge1xuICAgIFxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgYXV0aCA6IHN0YXRlLmF1dGgsXG4gICAgbmF2IDogc3RhdGUubmF2XG4gIH0pXG4gIFxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykod2l0aFJvdXRlcihNZW51KSlcbiJdfQ== */\n/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/Layouts/Menu.js */"));
};

Menu.propTypes = {};

const mapStateToProps = state => ({
  auth: state.auth,
  nav: state.nav
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Menu)));

/***/ }),

/***/ "./components/Layouts/index.js":
/*!*************************************!*\
  !*** ./components/Layouts/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HeaderBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderBody */ "./components/Layouts/HeaderBody.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./components/Layouts/Menu.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./components/Layouts/Footer.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Layouts/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function Layout({
  children
}) {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    style: {
      background: '#F9F9F9'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    lg: 2,
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    lg: 10,
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    container: true,
    style: {
      padding: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    sm: 12,
    md: 12,
    lg: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_HeaderBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    item: true,
    sm: 12,
    md: 12,
    lg: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, children)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2657368455",
    __self: this
  }, ".root-container.jsx-2657368455{background:#F9F9F9;}.container.jsx-2657368455{padding :40px;background :#b1c8ed;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0xheW91dHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJrQixBQUdrQyxBQUdMLGNBQ00sS0FIdEIsZUFJQSIsImZpbGUiOiIvVXNlcnMvbWFjYm9vay9Xb3Jrcy9tZS90ZXMvbW92aWVhamEvY29tcG9uZW50cy9MYXlvdXRzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyQm9keSc7XG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5cbmltcG9ydCB7R3JpZCwgQm94fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcblxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzdHlsZT17e2JhY2tncm91bmQ6JyNGOUY5RjknfX0+XG4gICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgIDxHcmlkIGxnPXsyfSBpdGVtPlxuICAgICAgICAgIDxNZW51IC8+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgbGc9ezEwfSBpdGVtPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17e3BhZGRpbmcgOiAyMH19PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfT5cbiAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfT5cbiAgICAgICAgICAgICAge2NoaWxkcmVuIH1cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIFxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnJvb3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0Y5RjlGOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nIDogNDBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZCA6ICNiMWM4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0OyJdfQ== */\n/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/Layouts/index.js */"));
}

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Slider/index.js":
/*!************************************!*\
  !*** ./components/Slider/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Slider/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Slider extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      param: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        spaceBetween: 30
      }
    };
  }

  render() {
    return __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.param, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Slide 1"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Slide 2"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Slide 3"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Slide 4"), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "Slide 5"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./components/Span/index.js":
/*!**********************************!*\
  !*** ./components/Span/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tools_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../tools/colors */ "./tools/colors.js");
var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Span/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Layout({
  children,
  title
}) {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    style: {
      background: '#F9F9F9',
      marginBottom: 30
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    lg: 12,
    xl: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1227310860", [_tools_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blackPrimary]]]) + " " + "titleSpan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, title || 'Title')), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    item: true,
    xs: 12,
    sm: 12,
    lg: 12,
    xl: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1227310860",
    dynamic: [_tools_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blackPrimary],
    __self: this
  }, `@import url('https://fonts.googleapis.com/css?family=Poppins:200,400,700,900&display=swap');.titleSpan.__jsx-style-dynamic-selector{font-family:Poppins;font-size:16px;font-weight:700;color:${_tools_colors__WEBPACK_IMPORTED_MODULE_4__["default"].blackPrimary};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL1NwYW4vaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJrQixBQUV3RyxBQUVuRSxvQkFDTCxlQUNDLGdCQUVyQixtQ0FBQyIsImZpbGUiOiIvVXNlcnMvbWFjYm9vay9Xb3Jrcy9tZS90ZXMvbW92aWVhamEvY29tcG9uZW50cy9TcGFuL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7R3JpZCwgQ29udGFpbmVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vdG9vbHMvY29sb3JzJ1xuXG5cbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCB0aXRsZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBzdHlsZT17e2JhY2tncm91bmQ6JyNGOUY5RjknLCBtYXJnaW5Cb3R0b20gOiAzMH19PlxuICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IGxnPXsxMn0geGw9ezEyfT5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlU3BhblwiPnt0aXRsZSB8fCAnVGl0bGUnfTwvaDE+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17MTJ9IGxnPXsxMn0geGw9ezEyfT5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIFxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjIwMCw0MDAsNzAwLDkwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgICAgIC50aXRsZVNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiR7Y29sb3JzLmJsYWNrUHJpbWFyeX1cbiAgICAgICAgICAgIH1cblxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbkxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */
/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/Span/index.js */`));
}

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./containers/Home/index.js":
/*!**********************************!*\
  !*** ./containers/Home/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layouts */ "./components/Layouts/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Slider */ "./components/Slider/index.js");
/* harmony import */ var _components_Span__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Span */ "./components/Span/index.js");
/* harmony import */ var _components_Genre__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Genre */ "./components/Genre/index.js");
var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/containers/Home/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(_components_Layouts__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx(_components_Span__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Now Showing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx(_components_Slider__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })), __jsx(_components_Span__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Browse By Genre",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx(_components_Genre__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })));
  }

}

const mapStateToProps = state => ({
  auth: state.auth
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Home));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/Home */ "./containers/Home/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Movie | Beranda"), __jsx("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.2.0/css/swiper.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("link", {
      href: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.2.0/css/swiper.min.css",
      rel: "stylesheet",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }), __jsx("script", {
      src: "https://unpkg.com/react-id-swiper@2.4.0/lib/react-id-swiper.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), __jsx("script", {
      src: "https://unpkg.com/react-id-swiper@2.4.0/lib/react-id-swiper.min.js",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    })), __jsx(_containers_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./redux/actions/movie.js":
/*!********************************!*\
  !*** ./redux/actions/movie.js ***!
  \********************************/
/*! exports provided: GetGenre, PostActiveGenre, GetMovieGenre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGenre", function() { return GetGenre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostActiveGenre", function() { return PostActiveGenre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMovieGenre", function() { return GetMovieGenre; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constan_movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constan/movie */ "./redux/constan/movie.js");
/* harmony import */ var _constan_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constan/api */ "./redux/constan/api.js");



const GetGenre = data => ({
  type: _constan_movie__WEBPACK_IMPORTED_MODULE_1__["GET_GENRE"],
  payload: axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://api.themoviedb.org/3" + _constan_api__WEBPACK_IMPORTED_MODULE_2__["GET_GENRE_API"] + '?api_key=' + "f2313f458f08d820fae16b7ea4c5ad70" + '&language=en-US')
});
const PostActiveGenre = genre => ({
  type: _constan_movie__WEBPACK_IMPORTED_MODULE_1__["POST_ACTIVE_GENRE"],
  payload: genre
});
const GetMovieGenre = (genreId, page = 1) => ({
  type: _constan_movie__WEBPACK_IMPORTED_MODULE_1__["GET_MOVIE_GENRE"],
  payload: axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://api.themoviedb.org/3" + _constan_api__WEBPACK_IMPORTED_MODULE_2__["GET_MOVIE_GENRE_API"] + '?api_key=' + "f2313f458f08d820fae16b7ea4c5ad70" + '&with_genres=' + genreId + '&page=' + page)
});

/***/ }),

/***/ "./redux/actions/nav.js":
/*!******************************!*\
  !*** ./redux/actions/nav.js ***!
  \******************************/
/*! exports provided: openMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openMenu", function() { return openMenu; });
/* harmony import */ var _constan_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constan/home */ "./redux/constan/home.js");

const openMenu = page => ({
  type: _constan_home__WEBPACK_IMPORTED_MODULE_0__["OPEN_MENU"],
  payload: page
});

/***/ }),

/***/ "./redux/constan/api.js":
/*!******************************!*\
  !*** ./redux/constan/api.js ***!
  \******************************/
/*! exports provided: GET_GENRE_API, GET_MOVIE_GENRE_API, MOVIE_IMAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GENRE_API", function() { return GET_GENRE_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_GENRE_API", function() { return GET_MOVIE_GENRE_API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIE_IMAGE", function() { return MOVIE_IMAGE; });
const GET_GENRE_API = '/genre/movie/list';
const GET_MOVIE_GENRE_API = '/discover/movie/';
const MOVIE_IMAGE = 'https://image.tmdb.org/t/p/original/';

/***/ }),

/***/ "./redux/constan/home.js":
/*!*******************************!*\
  !*** ./redux/constan/home.js ***!
  \*******************************/
/*! exports provided: OPEN_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_MENU", function() { return OPEN_MENU; });
const OPEN_MENU = 'OPEN_MENU';

/***/ }),

/***/ "./redux/constan/movie.js":
/*!********************************!*\
  !*** ./redux/constan/movie.js ***!
  \********************************/
/*! exports provided: GET_GENRE, GET_MOVIE_GENRE, GET_MOVIE_SHOW, GET_MOVIE_DETAIL, POST_ACTIVE_GENRE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GENRE", function() { return GET_GENRE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_GENRE", function() { return GET_MOVIE_GENRE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_SHOW", function() { return GET_MOVIE_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_MOVIE_DETAIL", function() { return GET_MOVIE_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_ACTIVE_GENRE", function() { return POST_ACTIVE_GENRE; });
const GET_GENRE = 'GET_GENRE';
const GET_MOVIE_GENRE = 'GET_MOVIE_GENRE';
const GET_MOVIE_SHOW = 'GET_MOVIE_SHOW';
const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
const POST_ACTIVE_GENRE = 'GET_ACTIVE_GENRE';

/***/ }),

/***/ "./tools/colors.js":
/*!*************************!*\
  !*** ./tools/colors.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  blackPrimary: '#5a5a5a',
  purplePrimay: '#a1a1a1',
  orangePrimary: '#e07408',
  yellow1: '#dbb006',
  yellow2: '#ffe502'
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/macbook/Works/me/tes/movieaja/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-id-swiper":
/*!**********************************!*\
  !*** external "react-id-swiper" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map