webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Genre/ListMovieGenre.js":
/*!********************************************!*\
  !*** ./components/Genre/ListMovieGenre.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _redux_actions_movie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/movie */ "./redux/actions/movie.js");
/* harmony import */ var _CardMovie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CardMovie */ "./components/CardMovie/index.js");





var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Genre/ListMovieGenre.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






var data = [1, 2, 3];

var ListMovieGenre =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ListMovieGenre, _React$Component);

  function ListMovieGenre(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ListMovieGenre);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ListMovieGenre).call(this, props));
    _this.state = {
      genres: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ListMovieGenre, [{
    key: "render",
    value: function render() {
      var _this$props$movie = this.props.movie,
          moviesGenre = _this$props$movie.moviesGenre,
          genre = _this$props$movie.genre,
          isLoading = _this$props$movie.isLoading;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, isLoading ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["LinearProgress"], {
        style: {
          width: '100%'
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        container: true,
        spacing: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, moviesGenre !== '' && moviesGenre.results.length > 0 && moviesGenre.results.map(function (value) {
        return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
          item: true,
          key: value.id,
          xs: 12,
          sm: 12,
          md: 6,
          lg: 2,
          xl: 2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Link"], {
          color: "inherit",
          underline: "none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, __jsx(_CardMovie__WEBPACK_IMPORTED_MODULE_9__["default"], {
          data: value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        })));
      })));
    }
  }]);

  return ListMovieGenre;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    movie: state.movie
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(ListMovieGenre));

/***/ })

})
//# sourceMappingURL=index.js.7f32ba488833a4bdc755.hot-update.js.map