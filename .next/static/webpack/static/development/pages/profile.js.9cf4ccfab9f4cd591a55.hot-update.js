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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2374236455", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2374236455", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "card-login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2374236455", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2374236455", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "head-login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Login ke ", process.env.APP_NAME)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2374236455", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "",
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2374236455", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2374236455", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "div-field",
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2374236455", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "div-field",
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
    id: "2374236455",
    dynamic: [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary],
    __self: this
  }, ".login.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.card-login.__jsx-style-dynamic-selector{width:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#ffffff;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);-webkit-transition:0.3s;transition:0.3s;position:abosulute;top:50%;left:50%;}.card-login.__jsx-style-dynamic-selector:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);}.head-login.__jsx-style-dynamic-selector{font-family:Poppins;font-size:16px;font-color:".concat(_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary, ";text-align:center;font-weight:400;}.form.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.div-field.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0F1dGgvTG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUQyQixBQUdxQyxBQUlBLEFBVzRCLEFBSXBCLEFBT1AsQUFLQSxZQTFCQSxRQWVFLGVBQ3lCLEtBTDVDLGtDQWYyQixBQTBCRCxBQUtBLENBVkosV0FoQkksT0FpQk4sZ0JBQ3BCLDJDQUtELEFBSXdCLFlBMUJBLE9BMkJ2QixFQWhDQSxVQU0yQyx1Q0FDdkIsNkJBb0JwQixXQW5CdUIsbUJBQ1gsUUFDQyxTQUNiIiwiZmlsZSI6Ii9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0F1dGgvTG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtHcmlkLCBDYXJkLCBDYXJkSGVhZGVyLCBDYXJkQ29udGVudCAsQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7R2V0R2VucmUsIFBvc3RBY3RpdmVHZW5yZSwgR2V0TW92aWVHZW5yZX0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9tb3ZpZSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi4vLi4vdG9vbHMvY29sb3JzJztcbmltcG9ydCB7Rm9ybWlrLCBGb3JtLCBGaWVsZCwgRXJyb3JNZXNzYWdlfSBmcm9tICdmb3JtaWsnXG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWQtbG9naW5cIj5Mb2dpbiBrZSB7cHJvY2Vzcy5lbnYuQVBQX05BTUV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyB1c2VybmFtZTogJycsIHBhc3N3b3JkOiAnJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlPXt2YWx1ZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodmFsdWVzLCBudWxsLCAyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoeyBpc1N1Ym1pdHRpbmcgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2LWZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwidXNlcm5hbWVcIiBzdHlsZT17eyAgfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJ1c2VybmFtZVwiIGNvbXBvbmVudD1cImRpdlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgbmFtZT1cInBhc3N3b3JkXCIgY29tcG9uZW50PVwiZGl2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzdHlsZT17e3dpZHRoIDogMjAwfX0gY29sb3I9XCJwcmltYXJ5XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1paz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLmxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJvc3VsdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcmQtbG9naW46aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkLWxvZ2luIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1jb2xvcjogJHtjb2xvcnMuYmxhY2tQcmltYXJ5fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmZvcm0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5kaXYtZmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgYXV0aCA6IHN0YXRlLmF1dGhcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMb2dpbilcbiJdfQ== */\n/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/Auth/Login.js */")));
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
//# sourceMappingURL=profile.js.9cf4ccfab9f4cd591a55.hot-update.js.map