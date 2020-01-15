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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/CardMovie/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var CardMovie = function CardMovie(props) {
  var data = props.data,
      movie = props.movie;
  var selectGenre = [];
  var genre = data.genre_ids;
  movie.genre.map(function (gnr) {
    genre.map(function (gnr2) {
      if (gnr2 === gnr.id) {
        selectGenre.push(gnr.name);
      }
    });
  });
  var genres = '';

  if (selectGenre.length > 0) {
    for (var i = 0; i < selectGenre.length; i++) {
      if (i !== selectGenre - 1) {
        genres += selectGenre[i] + ',';
      } else {
        genres += selectGenre[i];
      }

      if (selectGenre.length === 1) {
        break;
      }
    }
  }

  console.log(genres);
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
      lineNumber: 47
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
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1316720418" + " " + "img-movie-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("img", {
    src: imageUrl,
    className: "jsx-1316720418" + " " + "img-movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
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
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1316720418" + " " + "detail-movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-1316720418" + " " + "genre-date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, genres.length > 0 && genres, " | ", data.release_date), __jsx("p", {
    style: {
      fontSize: fontSizeTitle(),
      width: 190
    },
    className: "jsx-1316720418" + " " + "title-movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, data.title), __jsx("p", {
    className: "jsx-1316720418" + " " + "rating-movie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Star"], {
    style: {
      color: _tools_colors__WEBPACK_IMPORTED_MODULE_5__["default"].yellow2,
      fontSize: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), " \xA0", data.vote_average, "/10"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1316720418",
    __self: this
  }, ".container-CardMovie.jsx-1316720418{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:Poppins;}.img-movie-div.jsx-1316720418{height:200px;width:125px;border-radius:10px;}.img-movie.jsx-1316720418{height:200px;width:125px;border-radius:10px;}.detail-movie.jsx-1316720418{width :200px;}.genre-date.jsx-1316720418{font-size:10px;font-weight:400;font-family:Poppins;width:200px;margin-bottom :-10px;}.title-movie.jsx-1316720418{font-weight:700;font-family:Poppins;widht:190px;margin-bottom :-10px;}.rating-movie.jsx-1316720418{font-size:10px;font-weight:700;font-family:Poppins;line-height :5px;}.p-movie.jsx-1316720418{-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;widht:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0NhcmRNb3ZpZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRG9CLEFBRzhCLEFBS0osQUFPQSxBQU1BLEFBR0UsQUFPQyxBQU1ELEFBTUYsYUFsQ0QsQUFPQSxBQU1kLEVBR2tCLEFBYUEsQ0FOSSxTQXRCRCxBQU9BLE1BU0MsQUFhQSxLQU5SLFFBckJkLEFBTUEsSUFpQkQsR0FSZSxBQWFLLFlBWHBCLEtBWUMsQ0FOQSxBQVVELEtBekM0QixPQXlDM0IsR0FoQkEsb0VBeEIwQixvQkFDMUIiLCJmaWxlIjoiL1VzZXJzL21hY2Jvb2svV29ya3MvbWUvdGVzL21vdmllYWphL2NvbXBvbmVudHMvQ2FyZE1vdmllL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtTZWFyY2hPdXRsaW5lZCwgTm90aWZpY2F0aW9uc30gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xuaW1wb3J0IHtHcmlkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7U3Rhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi90b29scy9jb2xvcnMnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBDYXJkTW92aWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2RhdGEsIG1vdmllfSA9IHByb3BzXG4gIHZhciBzZWxlY3RHZW5yZSA9IFtdO1xuICBjb25zdCBnZW5yZSA9IGRhdGEuZ2VucmVfaWRzO1xuICBtb3ZpZS5nZW5yZS5tYXAoKGducikgPT4ge1xuICAgIGdlbnJlLm1hcCgoZ25yMikgPT4ge1xuICAgICAgaWYoZ25yMiA9PT0gZ25yLmlkKXtcbiAgICAgICAgc2VsZWN0R2VucmUucHVzaChnbnIubmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuICB2YXIgZ2VucmVzID0gJydcbiAgaWYoc2VsZWN0R2VucmUubGVuZ3RoID4gMCl7XG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc2VsZWN0R2VucmUubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihpICE9PSBzZWxlY3RHZW5yZSAtIDEpe1xuICAgICAgICAgIGdlbnJlcyArPSBzZWxlY3RHZW5yZVtpXSsnLCdcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgZ2VucmVzICs9IHNlbGVjdEdlbnJlW2ldXG4gICAgICAgIH1cbiAgICAgICAgaWYoc2VsZWN0R2VucmUubGVuZ3RoID09PSAxKXtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGdlbnJlcylcbiAgY29uc3QgaW1hZ2VVcmwgPSBwcm9jZXNzLmVudi5NT1ZJRV9JTUFHRV9VUkwrZGF0YS5wb3N0ZXJfcGF0aFxuICBjb25zdCB0aXRsZSA9IEpTT04uc3RyaW5naWZ5KGRhdGEudGl0bGUpXG4gIGNvbnN0IGZvbnRTaXplVGl0bGUgPSAoKSA9PiB7XG4gICAgaWYodGl0bGUubGVuZ3RoID4gNTApe1xuICAgICAgcmV0dXJuIDEwXG4gICAgfWVsc2UgaWYodGl0bGUubGVuZ3RoID4gMjApe1xuICAgICAgcmV0dXJuIDEyXG4gICAgfWVsc2UgaWYodGl0bGUubGVuZ3RoID4gMTApe1xuICAgICAgcmV0dXJuIDE0XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gMTZcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgIDxHcmlkIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0geGw9ezEyfSBpdGVtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLW1vdmllLWRpdlwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlVXJsfSBjbGFzc05hbWU9XCJpbWctbW92aWVcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0geGw9ezEyfSBpdGVtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsLW1vdmllXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJnZW5yZS1kYXRlXCI+e2dlbnJlcy5sZW5ndGggPiAwICYmIGdlbnJlc30gfCB7ZGF0YS5yZWxlYXNlX2RhdGV9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtbW92aWVcIiBzdHlsZT17e2ZvbnRTaXplIDogZm9udFNpemVUaXRsZSgpLCB3aWR0aCA6IDE5MH19PntkYXRhLnRpdGxlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJhdGluZy1tb3ZpZVwiPjxTdGFyIHN0eWxlPXt7Y29sb3IgOiBjb2xvcnMueWVsbG93MiwgZm9udFNpemUgOiAxMn19IC8+ICZuYnNwO3tkYXRhLnZvdGVfYXZlcmFnZX0vMTA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb250YWluZXItQ2FyZE1vdmllIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZy1tb3ZpZS1kaXYge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMjVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW1nLW1vdmllIHtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTI1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kZXRhaWwtbW92aWUge1xuICAgICAgICAgICAgd2lkdGggOiAyMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdlbnJlLWRhdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IC0xMHB4XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZS1tb3ZpZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICB3aWRodDogMTkwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogLTEwcHhcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJhdGluZy1tb3ZpZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICBsaW5lLWhlaWdodCA6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnAtbW92aWUge1xuICAgICAgICAgICAgaHlwaGVuczogYXV0bztcbiAgICAgICAgICAgIHdpZGh0OjIwMHB4XG4gICAgICAgICAgfVxuXG5cblxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0dyaWQ+XG4gIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBtb3ZpZSA6IHN0YXRlLm1vdmllXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoQ2FyZE1vdmllKVxuIl19 */\n/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/CardMovie/index.js */"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    movie: state.movie
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(CardMovie));

/***/ })

})
//# sourceMappingURL=trending.js.79a5ecaa9f21caeb5814.hot-update.js.map