webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/Auth/Login.js":
/*!**********************************!*\
  !*** ./components/Auth/Login.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _redux_actions_movie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/movie */ "./redux/actions/movie.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _tools_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../tools/colors */ "./tools/colors.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");

var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Auth/Login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var Login = function Login() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3652086114", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3652086114", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "card-login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3652086114", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3652086114", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "head-login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Login ke ", process.env.APP_NAME)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3652086114", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Formik"], {
    initialValues: {
      username: '',
      password: ''
    },
    validate: function validate(values) {
      var errors = {};
      return errors;
    },
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      console.log(values);
      setTimeout(function () {
        alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, function (_ref2) {
    var isSubmitting = _ref2.isSubmitting;
    return __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3652086114", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3652086114", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "div-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
      name: "username",
      style: {},
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"], {
      name: "username",
      component: "div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3652086114", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "div-field",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
      type: "password",
      name: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx(formik__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"], {
      name: "password",
      component: "div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "contained",
      style: {
        width: 200
      },
      color: "primary",
      disabled: isSubmitting,
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Login")));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3652086114",
    dynamic: [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary],
    __self: this
  }, ".login.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.card-login.__jsx-style-dynamic-selector{width:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#ffffff;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);-webkit-transition:0.3s;transition:0.3s;position:abosulute;top:50%;left:50%;height:500px;}.card-login.__jsx-style-dynamic-selector:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);}.head-login.__jsx-style-dynamic-selector{font-family:Poppins;font-size:16px;font-color:".concat(_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary, ";text-align:center;font-weight:400;}.form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.div-field.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0F1dGgvTG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUQyQixBQUdxQyxBQUlBLEFBWTRCLEFBSXBCLEFBT1AsQUFLQSxZQTNCQSxRQWdCRSxlQUN5QixLQUw1QyxrQ0FoQjJCLEFBMkJELEFBS0EsQ0FWSixXQWpCSSxPQWtCTixnQkFDcEIsMkNBSTJCLEFBS0osWUEzQkEsT0E0QnZCLEVBakNBLFVBTTJDLHVDQUN2Qiw2QkFxQnBCLFdBcEJ1QixtQkFDWCxRQUNDLFNBQ0csYUFDaEIiLCJmaWxlIjoiL1VzZXJzL21hY2Jvb2svV29ya3MvbWUvdGVzL21vdmllYWphL2NvbXBvbmVudHMvQXV0aC9Mb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge0dyaWQsIENhcmQsIENhcmRIZWFkZXIsIENhcmRDb250ZW50ICxCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHtHZXRHZW5yZSwgUG9zdEFjdGl2ZUdlbnJlLCBHZXRNb3ZpZUdlbnJlfSBmcm9tICcuLi8uLi9yZWR1eC9hY3Rpb25zL21vdmllJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi90b29scy9jb2xvcnMnO1xuaW1wb3J0IHtGb3JtaWssIEZvcm0sIEZpZWxkLCBFcnJvck1lc3NhZ2V9IGZyb20gJ2Zvcm1paydcblxuY29uc3QgTG9naW4gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1sb2dpblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZC1sb2dpblwiPkxvZ2luIGtlIHtwcm9jZXNzLmVudi5BUFBfTkFNRX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtaWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHVzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e3ZhbHVlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJ1c2VybmFtZVwiIHN0eWxlPXt7ICB9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cInVzZXJuYW1lXCIgY29tcG9uZW50PVwiZGl2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdi1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZSBuYW1lPVwicGFzc3dvcmRcIiBjb21wb25lbnQ9XCJkaXZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0eWxlPXt7d2lkdGggOiAyMDB9fSBjb2xvcj1cInByaW1hcnlcIiBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfSB0eXBlPVwic3VibWl0XCI+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWlrPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAubG9naW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtbG9naW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYm9zdWx1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo1MDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1sb2dpbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmhlYWQtbG9naW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWNvbG9yOiAke2NvbG9ycy5ibGFja1ByaW1hcnl9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kaXYtZmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgYXV0aCA6IHN0YXRlLmF1dGhcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMb2dpbilcbiJdfQ== */\n/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/Auth/Login.js */")));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Login));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=profile.js.2abfd7d278daec4ea431.hot-update.js.map