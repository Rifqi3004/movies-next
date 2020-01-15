webpackHotUpdate("static/development/pages/trending.js",{

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _tools_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../tools/colors */ "./tools/colors.js");

var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/CardMovie/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var CardMovie = function CardMovie(props) {
  var data = props.data;
  console.log(data);
  var imageUrl = "https://image.tmdb.org/t/p/original" + data.poster_path;

  var title = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data.title);

  var fontSizeTitle = function fontSizeTitle() {
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
      lineNumber: 24
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1316720418" + " " + "img-movie-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("img", {
    src: imageUrl,
    className: "jsx-1316720418" + " " + "img-movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1316720418" + " " + "detail-movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1316720418" + " " + "genre-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Action, scifi | ", data.release_date), __jsx("p", {
    style: {
      fontSize: fontSizeTitle(),
      width: 190
    },
    className: "jsx-1316720418" + " " + "title-movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, data.title), __jsx("p", {
    className: "jsx-1316720418" + " " + "rating-movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Star"], {
    style: {
      color: _tools_colors__WEBPACK_IMPORTED_MODULE_5__["default"].yellow2,
      fontSize: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), " \xA0", data.vote_average, "/10"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1316720418",
    __self: this
  }, ".container-CardMovie.jsx-1316720418{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:Poppins;}.img-movie-div.jsx-1316720418{height:200px;width:125px;border-radius:10px;}.img-movie.jsx-1316720418{height:200px;width:125px;border-radius:10px;}.detail-movie.jsx-1316720418{width :200px;}.genre-date.jsx-1316720418{font-size:10px;font-weight:400;font-family:Poppins;width:200px;margin-bottom :-10px;}.title-movie.jsx-1316720418{font-weight:700;font-family:Poppins;widht:190px;margin-bottom :-10px;}.rating-movie.jsx-1316720418{font-size:10px;font-weight:700;font-family:Poppins;line-height :5px;}.p-movie.jsx-1316720418{-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;widht:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0NhcmRNb3ZpZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ29CLEFBRzhCLEFBS0osQUFPQSxBQU1BLEFBR0UsQUFPQyxBQU1ELEFBTUYsYUFsQ0QsQUFPQSxBQU1kLEVBR2tCLEFBYUEsQ0FOSSxTQXRCRCxBQU9BLE1BU0MsQUFhQSxLQU5SLFFBckJkLEFBTUEsSUFpQkQsR0FSZSxBQWFLLFlBWHBCLEtBWUMsQ0FOQSxBQVVELEtBekM0QixPQXlDM0IsR0FoQkEsb0VBeEIwQixvQkFDMUIiLCJmaWxlIjoiL1VzZXJzL21hY2Jvb2svV29ya3MvbWUvdGVzL21vdmllYWphL2NvbXBvbmVudHMvQ2FyZE1vdmllL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtTZWFyY2hPdXRsaW5lZCwgTm90aWZpY2F0aW9uc30gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xuaW1wb3J0IHtHcmlkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7U3Rhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi90b29scy9jb2xvcnMnXG5cbmNvbnN0IENhcmRNb3ZpZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7ZGF0YX0gPSBwcm9wc1xuICBjb25zb2xlLmxvZyhkYXRhKVxuICBjb25zdCBpbWFnZVVybCA9IHByb2Nlc3MuZW52Lk1PVklFX0lNQUdFX1VSTCtkYXRhLnBvc3Rlcl9wYXRoXG4gIGNvbnN0IHRpdGxlID0gSlNPTi5zdHJpbmdpZnkoZGF0YS50aXRsZSlcbiAgY29uc3QgZm9udFNpemVUaXRsZSA9ICgpID0+IHtcbiAgICBpZih0aXRsZS5sZW5ndGggPiA1MCl7XG4gICAgICByZXR1cm4gMTBcbiAgICB9ZWxzZSBpZih0aXRsZS5sZW5ndGggPiAyMCl7XG4gICAgICByZXR1cm4gMTJcbiAgICB9ZWxzZSBpZih0aXRsZS5sZW5ndGggPiAxMCl7XG4gICAgICByZXR1cm4gMTRcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiAxNlxuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAgPEdyaWQgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSB4bD17MTJ9IGl0ZW0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbW92aWUtZGl2XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGNsYXNzTmFtZT1cImltZy1tb3ZpZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSB4bD17MTJ9IGl0ZW0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtbW92aWVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdlbnJlLWRhdGVcIj5BY3Rpb24sIHNjaWZpIHwge2RhdGEucmVsZWFzZV9kYXRlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLW1vdmllXCIgc3R5bGU9e3tmb250U2l6ZSA6IGZvbnRTaXplVGl0bGUoKSwgd2lkdGggOiAxOTB9fT57ZGF0YS50aXRsZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyYXRpbmctbW92aWVcIj48U3RhciBzdHlsZT17e2NvbG9yIDogY29sb3JzLnllbGxvdzIsIGZvbnRTaXplIDogMTJ9fSAvPiAmbmJzcDt7ZGF0YS52b3RlX2F2ZXJhZ2V9LzEwPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyLUNhcmRNb3ZpZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWctbW92aWUtZGl2IHtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTI1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltZy1tb3ZpZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGV0YWlsLW1vdmllIHtcbiAgICAgICAgICAgIHdpZHRoIDogMjAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5nZW5yZS1kYXRlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAtMTBweFxuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUtbW92aWUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgd2lkaHQ6IDE5MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IC0xMHB4XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yYXRpbmctbW92aWUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQgOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wLW1vdmllIHtcbiAgICAgICAgICAgIGh5cGhlbnM6IGF1dG87XG4gICAgICAgICAgICB3aWRodDoyMDBweFxuICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9HcmlkPlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBDYXJkTW92aWVcbiJdfQ== */\n/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/CardMovie/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (CardMovie);

/***/ })

})
//# sourceMappingURL=trending.js.8f8e4d9a17ae31287ea6.hot-update.js.map