webpackHotUpdate("static/development/pages/trending.js",{

/***/ "./components/Movies/ListTrendingMovies.js":
/*!*************************************************!*\
  !*** ./components/Movies/ListTrendingMovies.js ***!
  \*************************************************/
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
/* harmony import */ var _CardMovie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CardMovie */ "./components/CardMovie/index.js");





var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Movies/ListTrendingMovies.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var ListTrendingMovie =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ListTrendingMovie, _React$Component);

  function ListTrendingMovie(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ListTrendingMovie);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ListTrendingMovie).call(this, props));
    _this.state = {
      genres: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ListTrendingMovie, [{
    key: "render",
    value: function render() {
      var _this$props$movie = this.props.movie,
          trendingMovies = _this$props$movie.trendingMovies,
          isLoading = _this$props$movie.isLoading;
      console.log(trendingMovies.results.length);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, isLoading ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["LinearProgress"], {
        style: {
          width: '100%'
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        container: true,
        spacing: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    }
  }]);

  return ListTrendingMovie;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    movie: state.movie
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(ListTrendingMovie));

/***/ })

})
//# sourceMappingURL=trending.js.db788632c0bcf9abc663.hot-update.js.map