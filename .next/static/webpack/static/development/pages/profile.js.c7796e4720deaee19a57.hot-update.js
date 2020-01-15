webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/Auth/Login.js":
/*!**********************************!*\
  !*** ./components/Auth/Login.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _redux_actions_movie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/movie */ "./redux/actions/movie.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tools_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tools/colors */ "./tools/colors.js");
var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Auth/Login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    cardLogin: {
      width: 400,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  };
});

var Login = function Login() {
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    classes: classes.cardLogin,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardHeader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1082784551", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "head-login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Masuk ke ", process.env.APP_NAME)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1082784551",
    dynamic: [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary],
    __self: this
  }, ".head-login.__jsx-style-dynamic-selector{font-family:Poppins;font-size:16px;font-color:".concat(_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary, ";text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0F1dGgvTG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0J3QixBQUd5QyxvQkFDTCxlQUN5Qix3Q0FDdEIsa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0F1dGgvTG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtHcmlkLCBDYXJkLCBDYXJkSGVhZGVyLCBDYXJkQ29udGVudCAsQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7R2V0R2VucmUsIFBvc3RBY3RpdmVHZW5yZSwgR2V0TW92aWVHZW5yZX0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9tb3ZpZSdcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vdG9vbHMvY29sb3JzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICAgIGNhcmRMb2dpbiA6IHtcbiAgICAgICAgd2lkdGggOiA0MDAsXG4gICAgICAgIHBvc2l0aW9uIDogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgIHRyYW5zZm9ybSA6ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXG4gICAgfVxufSkpO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Q2FyZCBjbGFzc2VzPXtjbGFzc2VzLmNhcmRMb2dpbn0+XG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkLWxvZ2luXCI+TWFzdWsga2Uge3Byb2Nlc3MuZW52LkFQUF9OQU1FfTwvaDQ+XG4gICAgICAgICAgICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaGVhZC1sb2dpbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtY29sb3I6ICR7Y29sb3JzLmJsYWNrUHJpbWFyeX07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIGF1dGggOiBzdGF0ZS5hdXRoXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTG9naW4pXG4iXX0= */\n/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/Auth/Login.js */")));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Login));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=profile.js.c7796e4720deaee19a57.hot-update.js.map