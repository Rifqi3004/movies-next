webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./components/Layouts/Menu.js":
/*!************************************!*\
  !*** ./components/Layouts/Menu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/nav */ "./redux/actions/nav.js");
/* harmony import */ var _tools_colors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../tools/colors */ "./tools/colors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/macbook/Works/me/tes/movieaja/components/Layouts/Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Menu = function Menu(props) {
  var path = props.router.path;
  var page = props.nav.page;

  var openMenu = function openMenu(nav) {
    props.dispatch(Object(_redux_actions_nav__WEBPACK_IMPORTED_MODULE_5__["openMenu"])(nav));
  };

  var dataMenu = [{
    title: 'Home',
    page: '/',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["HomeOutlined"], {
      style: {
        color: path === '/' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })
  }, {
    title: 'Browse',
    page: '/browse',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["GridOffOutlined"], {
      style: {
        color: path === '/browse' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })
  }, {
    title: 'Category',
    page: '/category',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ShareOutlined"], {
      style: {
        color: path === '/category' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    })
  }, {
    title: 'Trending',
    page: '/trending',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["BarChart"], {
      style: {
        color: path === '/trending' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })
  }, {
    title: 'Profile',
    page: '/profile',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["AccountBoxOutlined"], {
      style: {
        color: path === '/profile' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })
  }];
  var LocalMenu = [{
    title: 'Recently Played',
    page: '/recently',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["DynamicFeedOutlined"], {
      style: {
        color: path === '/recently' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })
  }, {
    title: 'Local Storage',
    page: '/local',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["FileCopyOutlined"], {
      style: {
        color: path === '/local' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })
  }];
  return __jsx("div", {
    className: "jsx-27314977" + " " + "container-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-27314977" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "MOVIE"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    container: true,
    justify: "center",
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, dataMenu.map(function (value) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      key: value.title,
      item: true,
      xs: 12,
      sm: 12,
      lg: 12,
      xl: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      href: value.page,
      color: "inherit",
      onClick: function onClick() {
        return openMenu(value.page);
      },
      underline: "none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-27314977" + " " + "item-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, value.icon, __jsx("p", {
      style: {
        color: path === value.page ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay
      },
      className: "jsx-27314977" + " " + "title-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, value.title))));
  }), __jsx("div", {
    className: "jsx-27314977" + " " + "item-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-27314977" + " " + "span-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "My Movie")), LocalMenu.map(function (value) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      key: value.title,
      item: true,
      xs: 12,
      sm: 12,
      lg: 12,
      xl: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      href: value.page,
      color: "inherit",
      onClick: function onClick() {
        return openMenu(value.page);
      },
      underline: "none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-27314977" + " " + "item-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, value.icon, __jsx("p", {
      style: {
        color: path === value.page ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : "#a1a1a1"
      },
      className: "jsx-27314977" + " " + "title-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, value.title))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "27314977",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Poppins:200,400,700,900&display=swap');.container-menu.jsx-27314977{display:inline-block;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;background:#ffffff;}.logo.jsx-27314977{margin-bottom:40px;font-weight:bold;font-size:20px;font-family:Poppins;display:inline-block;}.menu.jsx-27314977{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;display:inline-block;}.item-menu.jsx-27314977{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:35px;}.title-menu.jsx-27314977{font-size:14px;font-family:Poppins;font-weight:bold;}.icon-menu.jsx-27314977{color:#a1a1a1;text-align:center;font-size:18px;margin-right:15px;}.span-menu.jsx-27314977{color:#a1a1a1;font-size:14px;font-family:Poppins;font-weight:400;margin-top:20px;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0xheW91dHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRmtCLEFBRW9HLEFBRW5FLEFBTUYsQUFPSSxBQUtWLEFBTUUsQUFLRCxBQU1DLGNBTEcsQUFNSCxDQVhNLElBbEJKLEVBTkssUUFvQ0QsR0FOTixHQUxFLENBbEJGLFdBd0JHLEVBTUYsRUE3QkssQ0FrQnhCLGFBTUEsQUFNb0IsTUE3QkssR0FTSCxPQXFCQyxXQTdCdkIsT0FUc0IsQUFZQSxDQTJCdEIsaUJBdENzQixBQVlHLG1CQVh6QixFQVlBLEtBSXNCLDZGQUNGLGlCQUNwQiIsImZpbGUiOiIvVXNlcnMvbWFjYm9vay9Xb3Jrcy9tZS90ZXMvbW92aWVhamEvY29tcG9uZW50cy9MYXlvdXRzL01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0hvbWVPdXRsaW5lZCwgR3JpZE9mZk91dGxpbmVkLCBTaGFyZU91dGxpbmVkLCBCYXJDaGFydCwgQWNjb3VudEJveE91dGxpbmVkLCBcbiAgICBEeW5hbWljRmVlZE91dGxpbmVkLCBGaWxlQ29weU91dGxpbmVkfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXG5pbXBvcnQge0dyaWQsIExpbmt9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtvcGVuTWVudSBhcyBjbGlja01lbnV9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvbmF2J1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi90b29scy9jb2xvcnMnXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGF0aH0gPSBwcm9wcy5yb3V0ZXJcbiAgICBjb25zdCB7cGFnZX0gPSBwcm9wcy5uYXZcbiAgICBjb25zdCBvcGVuTWVudSA9IChuYXYpID0+IHtcbiAgICAgICAgcHJvcHMuZGlzcGF0Y2goY2xpY2tNZW51KG5hdikpXG4gICAgfVxuICAgIGNvbnN0IGRhdGFNZW51ID0gW3tcbiAgICAgICAgICAgIHRpdGxlIDogJ0hvbWUnLFxuICAgICAgICAgICAgcGFnZSA6ICcvJyxcbiAgICAgICAgICAgIGljb24gOiA8SG9tZU91dGxpbmVkIHN0eWxlPXt7Y29sb3I6KHBhdGggPT09ICcvJyk/IGNvbG9ycy5vcmFuZ2VQcmltYXJ5IDogY29sb3JzLnB1cnBsZVByaW1heSwgZm9udFNpemU6MTgsIG1hcmdpblJpZ2h0OjE1fX0vPlxuICAgICAgICB9LHtcbiAgICAgICAgICAgIHRpdGxlIDogJ0Jyb3dzZScsXG4gICAgICAgICAgICBwYWdlIDogJy9icm93c2UnLFxuICAgICAgICAgICAgaWNvbiA6IDxHcmlkT2ZmT3V0bGluZWQgc3R5bGU9e3tjb2xvcjoocGF0aCA9PT0gJy9icm93c2UnKT8gY29sb3JzLm9yYW5nZVByaW1hcnkgOiBjb2xvcnMucHVycGxlUHJpbWF5LGZvbnRTaXplOjE4LCBtYXJnaW5SaWdodDoxNX19Lz5cbiAgICAgICAgfSx7XG4gICAgICAgICAgICB0aXRsZSA6ICdDYXRlZ29yeScsXG4gICAgICAgICAgICBwYWdlIDogJy9jYXRlZ29yeScsXG4gICAgICAgICAgICBpY29uIDogPFNoYXJlT3V0bGluZWQgc3R5bGU9e3tjb2xvcjoocGF0aCA9PT0gJy9jYXRlZ29yeScpPyBjb2xvcnMub3JhbmdlUHJpbWFyeSA6IGNvbG9ycy5wdXJwbGVQcmltYXksIGZvbnRTaXplOjE4LCBtYXJnaW5SaWdodDoxNX19IC8+XG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGl0bGUgOiAnVHJlbmRpbmcnLFxuICAgICAgICAgICAgcGFnZSA6ICcvdHJlbmRpbmcnLFxuICAgICAgICAgICAgaWNvbiA6IDxCYXJDaGFydCBzdHlsZT17e2NvbG9yOihwYXRoID09PSAnL3RyZW5kaW5nJyk/IGNvbG9ycy5vcmFuZ2VQcmltYXJ5IDogY29sb3JzLnB1cnBsZVByaW1heSwgZm9udFNpemU6MTgsIG1hcmdpblJpZ2h0OjE1fX0vPlxuICAgICAgICB9LHtcbiAgICAgICAgICAgIHRpdGxlIDogJ1Byb2ZpbGUnLFxuICAgICAgICAgICAgcGFnZSA6ICcvcHJvZmlsZScsXG4gICAgICAgICAgICBpY29uIDogPEFjY291bnRCb3hPdXRsaW5lZCBzdHlsZT17e2NvbG9yOihwYXRoID09PSAnL3Byb2ZpbGUnKT8gY29sb3JzLm9yYW5nZVByaW1hcnkgOiBjb2xvcnMucHVycGxlUHJpbWF5LCBmb250U2l6ZToxOCwgbWFyZ2luUmlnaHQ6MTV9fS8+XG4gICAgICAgIH1cbiAgICBdXG5cbiAgICBjb25zdCBMb2NhbE1lbnUgPSBbe1xuICAgICAgICB0aXRsZSA6ICdSZWNlbnRseSBQbGF5ZWQnLFxuICAgICAgICBwYWdlIDogJy9yZWNlbnRseScsXG4gICAgICAgIGljb24gOiA8RHluYW1pY0ZlZWRPdXRsaW5lZCBzdHlsZT17e2NvbG9yOihwYXRoID09PSAnL3JlY2VudGx5Jyk/IGNvbG9ycy5vcmFuZ2VQcmltYXJ5IDogY29sb3JzLnB1cnBsZVByaW1heSwgZm9udFNpemU6MTgsIG1hcmdpblJpZ2h0OjE1fX0vPlxuICAgIH0se1xuICAgICAgICB0aXRsZSA6ICdMb2NhbCBTdG9yYWdlJyxcbiAgICAgICAgcGFnZSA6ICcvbG9jYWwnLFxuICAgICAgICBpY29uIDogPEZpbGVDb3B5T3V0bGluZWQgc3R5bGU9e3tjb2xvcjoocGF0aCA9PT0gJy9sb2NhbCcpPyBjb2xvcnMub3JhbmdlUHJpbWFyeSA6IGNvbG9ycy5wdXJwbGVQcmltYXksIGZvbnRTaXplOjE4LCBtYXJnaW5SaWdodDoxNX19Lz5cbiAgICB9XVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbWVudVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgTU9WSUVcbiAgICAgIDwvZGl2PlxuICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBzdHlsZT17e2Rpc3BsYXk6J2lubGluZS1ibG9jayd9fT5cbiAgICAgICAge1xuICAgICAgICAgICAgZGF0YU1lbnUubWFwKCh2YWx1ZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmlkIGtleT17dmFsdWUudGl0bGV9IGl0ZW0geHM9ezEyfSBzbT17MTJ9IGxnPXsxMn0geGw9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dmFsdWUucGFnZX0gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17KCk9Pm9wZW5NZW51KHZhbHVlLnBhZ2UpfSB1bmRlcmxpbmU9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLW1lbnVcIiBzdHlsZT17e2NvbG9yIDogKHBhdGggPT09IHZhbHVlLnBhZ2UpPyBjb2xvcnMub3JhbmdlUHJpbWFyeSA6IGNvbG9ycy5wdXJwbGVQcmltYXl9fT57dmFsdWUudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbWVudVwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3Bhbi1tZW51XCI+TXkgTW92aWU8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgTG9jYWxNZW51Lm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgICAgICAgICA8R3JpZCBrZXk9e3ZhbHVlLnRpdGxlfSBpdGVtIHhzPXsxMn0gc209ezEyfSBsZz17MTJ9IHhsPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3ZhbHVlLnBhZ2V9IGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9eygpPT5vcGVuTWVudSh2YWx1ZS5wYWdlKX0gdW5kZXJsaW5lPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1tZW51XCIgc3R5bGU9e3tjb2xvciA6IChwYXRoID09PSB2YWx1ZS5wYWdlKT8gY29sb3JzLm9yYW5nZVByaW1hcnkgOiBcIiNhMWExYTFcIn19Pnt2YWx1ZS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgPC9HcmlkPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MjAwLDQwMCw3MDAsOTAwJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAuY29udGFpbmVyLW1lbnUge1xuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnUge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuaXRlbS1tZW51IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxlLW1lbnUge1xuICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLmljb24tbWVudSB7XG4gICAgICAgICAgICBjb2xvcjojYTFhMWExO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6MThweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zcGFuLW1lbnUge1xuICAgICAgICAgICAgY29sb3I6ICNhMWExYTE7XG4gICAgICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgICBcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICAgIGF1dGggOiBzdGF0ZS5hdXRoLFxuICAgIG5hdiA6IHN0YXRlLm5hdlxuICB9KVxuICBcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKHdpdGhSb3V0ZXIoTWVudSkpXG4iXX0= */\n/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/Layouts/Menu.js */"));
};

Menu.propTypes = {};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    nav: state.nav
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Menu)));

/***/ })

})
//# sourceMappingURL=profile.js.2fec9b88866dce5559fb.hot-update.js.map