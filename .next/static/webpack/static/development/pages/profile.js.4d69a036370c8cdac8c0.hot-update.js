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

var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Auth/Login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var Login = function Login() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3634037680", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3634037680", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "card-login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3634037680", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("h4", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3634037680", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "head-login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Login ke ", process.env.APP_NAME)), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3634037680", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]) + " " + "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(Formik, {
    initialValues: {
      email: '',
      password: ''
    },
    validate: function validate(values) {
      var errors = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors;
    },
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      console.log(value);
      setTimeout(function () {
        alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, function (_ref2) {
    var isSubmitting = _ref2.isSubmitting;
    return __jsx(Form, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(Field, {
      type: "text",
      name: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx(ErrorMessage, {
      name: "username",
      component: "div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx(Field, {
      type: "password",
      name: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx(ErrorMessage, {
      name: "password",
      component: "div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }), __jsx("button", {
      type: "submit",
      disabled: isSubmitting,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3634037680", [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Login"));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3634037680",
    dynamic: [_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary],
    __self: this
  }, ".login.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.card-login.__jsx-style-dynamic-selector{width:500px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#ffffff;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);-webkit-transition:0.3s;transition:0.3s;position:abosulute;top:50%;left:50%;}.card-login.__jsx-style-dynamic-selector:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);}.head-login.__jsx-style-dynamic-selector{font-family:Poppins;font-size:16px;font-color:".concat(_tools_colors__WEBPACK_IMPORTED_MODULE_7__["default"].blackPrimary, ";text-align:center;font-weight:400;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0F1dGgvTG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0QyQixBQUdxQyxBQUlBLEFBVzRCLEFBSXBCLFlBZFAsUUFlRSxlQUN5QixLQUw1QyxrQ0FmMkIsQ0FxQkwsV0FoQkksT0FpQk4sZ0JBQ3BCLHVEQWpCdUIsU0FMdkIsVUFNMkMsdUNBQ3ZCLHdDQUNHLG1CQUNYLFFBQ0MsU0FDYiIsImZpbGUiOiIvVXNlcnMvbWFjYm9vay9Xb3Jrcy9tZS90ZXMvbW92aWVhamEvY29tcG9uZW50cy9BdXRoL0xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7R3JpZCwgQ2FyZCwgQ2FyZEhlYWRlciwgQ2FyZENvbnRlbnQgLEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQge0dldEdlbnJlLCBQb3N0QWN0aXZlR2VucmUsIEdldE1vdmllR2VucmV9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvbW92aWUnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uLy4uL3Rvb2xzL2NvbG9ycyc7XG5cbmNvbnN0IExvZ2luID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWQtbG9naW5cIj5Mb2dpbiBrZSB7cHJvY2Vzcy5lbnYuQVBQX05BTUV9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtaWtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGU9e3ZhbHVlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9ycyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlcy5lbWFpbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZW1haWwgPSAnUmVxdWlyZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhL15bQS1aMC05Ll8lKy1dK0BbQS1aMC05Li1dK1xcLltBLVpdezIsfSQvaS50ZXN0KHZhbHVlcy5lbWFpbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5lbWFpbCA9ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KHZhbHVlcywgeyBzZXRTdWJtaXR0aW5nIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeSh2YWx1ZXMsIG51bGwsIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGlzU3VibWl0dGluZyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJ1c2VybmFtZVwiIGNvbXBvbmVudD1cImRpdlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlIG5hbWU9XCJwYXNzd29yZFwiIGNvbXBvbmVudD1cImRpdlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtaWs+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5sb2dpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FyZC1sb2dpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFib3N1bHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5jYXJkLWxvZ2luOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuaGVhZC1sb2dpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtY29sb3I6ICR7Y29sb3JzLmJsYWNrUHJpbWFyeX07XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG59XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgYXV0aCA6IHN0YXRlLmF1dGhcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMb2dpbilcbiJdfQ== */\n/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/Auth/Login.js */")));
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
//# sourceMappingURL=profile.js.4d69a036370c8cdac8c0.hot-update.js.map