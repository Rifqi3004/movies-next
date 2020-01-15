webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./containers/Profile/index.js":
/*!*************************************!*\
  !*** ./containers/Profile/index.js ***!
  \*************************************/
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
/* harmony import */ var _components_Layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Layouts */ "./components/Layouts/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Slider */ "./components/Slider/index.js");
/* harmony import */ var _components_Span__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Span */ "./components/Span/index.js");
/* harmony import */ var _components_Genre__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Genre */ "./components/Genre/index.js");
/* harmony import */ var _components_Auth_Login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Auth/Login */ "./components/Auth/Login.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");





var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/containers/Profile/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;









var Profile =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Profile, _Component);

  function Profile(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Profile);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Profile).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Profile, [{
    key: "render",
    value: function render() {
      var _this$props$auth = this.props.auth,
          token = _this$props$auth.token,
          isAuth = _this$props$auth.isAuth,
          profile = _this$props$auth.profile;
      return __jsx(_components_Layouts__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(_components_Span__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, isAuth ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Your Login")) : __jsx(_components_Auth_Login__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(Profile));

/***/ })

})
//# sourceMappingURL=profile.js.f01b075ea8b6f8961731.hot-update.js.map