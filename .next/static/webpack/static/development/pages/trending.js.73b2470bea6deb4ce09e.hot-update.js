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
  console.log(genre);
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
  }, ".container-CardMovie.jsx-1316720418{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-family:Poppins;}.img-movie-div.jsx-1316720418{height:200px;width:125px;border-radius:10px;}.img-movie.jsx-1316720418{height:200px;width:125px;border-radius:10px;}.detail-movie.jsx-1316720418{width :200px;}.genre-date.jsx-1316720418{font-size:10px;font-weight:400;font-family:Poppins;width:200px;margin-bottom :-10px;}.title-movie.jsx-1316720418{font-weight:700;font-family:Poppins;widht:190px;margin-bottom :-10px;}.rating-movie.jsx-1316720418{font-size:10px;font-weight:700;font-family:Poppins;line-height :5px;}.p-movie.jsx-1316720418{-webkit-hyphens:auto;-moz-hyphens:auto;-ms-hyphens:auto;hyphens:auto;widht:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0NhcmRNb3ZpZS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRG9CLEFBRzhCLEFBS0osQUFPQSxBQU1BLEFBR0UsQUFPQyxBQU1ELEFBTUYsYUFsQ0QsQUFPQSxBQU1kLEVBR2tCLEFBYUEsQ0FOSSxTQXRCRCxBQU9BLE1BU0MsQUFhQSxLQU5SLFFBckJkLEFBTUEsSUFpQkQsR0FSZSxBQWFLLFlBWHBCLEtBWUMsQ0FOQSxBQVVELEtBekM0QixPQXlDM0IsR0FoQkEsb0VBeEIwQixvQkFDMUIiLCJmaWxlIjoiL1VzZXJzL21hY2Jvb2svV29ya3MvbWUvdGVzL21vdmllYWphL2NvbXBvbmVudHMvQ2FyZE1vdmllL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtTZWFyY2hPdXRsaW5lZCwgTm90aWZpY2F0aW9uc30gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xuaW1wb3J0IHtHcmlkfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7U3Rhcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi90b29scy9jb2xvcnMnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5jb25zdCBDYXJkTW92aWUgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge2RhdGEsIG1vdmllfSA9IHByb3BzXG4gIHZhciBzZWxlY3RHZW5yZSA9IFtdO1xuICBjb25zdCBnZW5yZSA9IGRhdGEuZ2VucmVfaWRzO1xuICBjb25zb2xlLmxvZyhnZW5yZSlcbiAgbW92aWUuZ2VucmUubWFwKChnbnIpID0+IHtcbiAgICBnZW5yZS5tYXAoKGducjIpID0+IHtcbiAgICAgIGlmKGducjIgPT09IGduci5pZCl7XG4gICAgICAgIHNlbGVjdEdlbnJlLnB1c2goZ25yLm5hbWUpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbiAgdmFyIGdlbnJlcyA9ICcnXG4gIGlmKHNlbGVjdEdlbnJlLmxlbmd0aCA+IDApe1xuICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHNlbGVjdEdlbnJlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoaSAhPT0gc2VsZWN0R2VucmUgLSAxKXtcbiAgICAgICAgICBnZW5yZXMgKz0gc2VsZWN0R2VucmVbaV0rJywnXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgIGdlbnJlcyArPSBzZWxlY3RHZW5yZVtpXVxuICAgICAgICB9XG4gICAgICAgIGlmKHNlbGVjdEdlbnJlLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICBjb25zdCBpbWFnZVVybCA9IHByb2Nlc3MuZW52Lk1PVklFX0lNQUdFX1VSTCtkYXRhLnBvc3Rlcl9wYXRoXG4gIGNvbnN0IHRpdGxlID0gSlNPTi5zdHJpbmdpZnkoZGF0YS50aXRsZSlcbiAgY29uc3QgZm9udFNpemVUaXRsZSA9ICgpID0+IHtcbiAgICBpZih0aXRsZS5sZW5ndGggPiA1MCl7XG4gICAgICByZXR1cm4gMTBcbiAgICB9ZWxzZSBpZih0aXRsZS5sZW5ndGggPiAyMCl7XG4gICAgICByZXR1cm4gMTJcbiAgICB9ZWxzZSBpZih0aXRsZS5sZW5ndGggPiAxMCl7XG4gICAgICByZXR1cm4gMTRcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiAxNlxuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cbiAgICAgICAgPEdyaWQgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSB4bD17MTJ9IGl0ZW0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWctbW92aWUtZGl2XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1hZ2VVcmx9IGNsYXNzTmFtZT1cImltZy1tb3ZpZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSB4bD17MTJ9IGl0ZW0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWwtbW92aWVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdlbnJlLWRhdGVcIj57Z2VucmVzLmxlbmd0aCA+IDAgJiYgZ2VucmVzfSB8IHtkYXRhLnJlbGVhc2VfZGF0ZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1tb3ZpZVwiIHN0eWxlPXt7Zm9udFNpemUgOiBmb250U2l6ZVRpdGxlKCksIHdpZHRoIDogMTkwfX0+e2RhdGEudGl0bGV9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmF0aW5nLW1vdmllXCI+PFN0YXIgc3R5bGU9e3tjb2xvciA6IGNvbG9ycy55ZWxsb3cyLCBmb250U2l6ZSA6IDEyfX0gLz4gJm5ic3A7e2RhdGEudm90ZV9hdmVyYWdlfS8xMDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lci1DYXJkTW92aWUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1nLW1vdmllLWRpdiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbWctbW92aWUge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMjVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRldGFpbC1tb3ZpZSB7XG4gICAgICAgICAgICB3aWR0aCA6IDIwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZ2VucmUtZGF0ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tIDogLTEwcHhcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlLW1vdmllIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgIHdpZGh0OiAxOTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiAtMTBweFxuICAgICAgICAgIH1cbiAgICAgICAgICAucmF0aW5nLW1vdmllIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0IDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucC1tb3ZpZSB7XG4gICAgICAgICAgICBoeXBoZW5zOiBhdXRvO1xuICAgICAgICAgICAgd2lkaHQ6MjAwcHhcbiAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvR3JpZD5cbiAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIG1vdmllIDogc3RhdGUubW92aWVcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDYXJkTW92aWUpXG4iXX0= */\n/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/CardMovie/index.js */"));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    movie: state.movie
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(CardMovie));

/***/ })

})
//# sourceMappingURL=trending.js.73b2470bea6deb4ce09e.hot-update.js.map