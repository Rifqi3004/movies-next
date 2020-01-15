webpackHotUpdate("static/development/pages/index.js",{

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
  console.log(path);
  var page = props.nav.page;

  var openMenu = function openMenu(nav) {
    props.dispatch(Object(_redux_actions_nav__WEBPACK_IMPORTED_MODULE_5__["openMenu"])(nav));
  };

  var dataMenu = [{
    title: 'Home',
    page: '/',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["HomeOutlined"], {
      style: {
        color: path == '/' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
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
        lineNumber: 25
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
        lineNumber: 29
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
        lineNumber: 33
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
        lineNumber: 37
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
        lineNumber: 44
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
        lineNumber: 48
      },
      __self: this
    })
  }];
  return __jsx("div", {
    className: "jsx-27314977" + " " + "container-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-27314977" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
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
      lineNumber: 56
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
        lineNumber: 59
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
        lineNumber: 60
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-27314977" + " " + "item-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, value.icon, __jsx("p", {
      style: {
        color: path === value.page ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay
      },
      className: "jsx-27314977" + " " + "title-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, value.title))));
  }), __jsx("div", {
    className: "jsx-27314977" + " " + "item-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-27314977" + " " + "span-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
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
        lineNumber: 74
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
        lineNumber: 75
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-27314977" + " " + "item-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, value.icon, __jsx("p", {
      style: {
        color: path === value.page ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : "#a1a1a1"
      },
      className: "jsx-27314977" + " " + "title-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, value.title))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "27314977",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Poppins:200,400,700,900&display=swap');.container-menu.jsx-27314977{display:inline-block;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;background:#ffffff;}.logo.jsx-27314977{margin-bottom:40px;font-weight:bold;font-size:20px;font-family:Poppins;display:inline-block;}.menu.jsx-27314977{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;display:inline-block;}.item-menu.jsx-27314977{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:35px;}.title-menu.jsx-27314977{font-size:14px;font-family:Poppins;font-weight:bold;}.icon-menu.jsx-27314977{color:#a1a1a1;text-align:center;font-size:18px;margin-right:15px;}.span-menu.jsx-27314977{color:#a1a1a1;font-size:14px;font-family:Poppins;font-weight:400;margin-top:20px;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0xheW91dHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRmtCLEFBRW9HLEFBRW5FLEFBTUYsQUFPSSxBQUtWLEFBTUUsQUFLRCxBQU1DLGNBTEcsQUFNSCxDQVhNLElBbEJKLEVBTkssUUFvQ0QsR0FOTixHQUxFLENBbEJGLFdBd0JHLEVBTUYsRUE3QkssQ0FrQnhCLGFBTUEsQUFNb0IsTUE3QkssR0FTSCxPQXFCQyxXQTdCdkIsT0FUc0IsQUFZQSxDQTJCdEIsaUJBdENzQixBQVlHLG1CQVh6QixFQVlBLEtBSXNCLDZGQUNGLGlCQUNwQiIsImZpbGUiOiIvVXNlcnMvbWFjYm9vay9Xb3Jrcy9tZS90ZXMvbW92aWVhamEvY29tcG9uZW50cy9MYXlvdXRzL01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0hvbWVPdXRsaW5lZCwgR3JpZE9mZk91dGxpbmVkLCBTaGFyZU91dGxpbmVkLCBCYXJDaGFydCwgQWNjb3VudEJveE91dGxpbmVkLCBcbiAgICBEeW5hbWljRmVlZE91dGxpbmVkLCBGaWxlQ29weU91dGxpbmVkfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXG5pbXBvcnQge0dyaWQsIExpbmt9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtvcGVuTWVudSBhcyBjbGlja01lbnV9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvbmF2J1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi90b29scy9jb2xvcnMnXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGF0aH0gPSBwcm9wcy5yb3V0ZXJcbiAgICBjb25zb2xlLmxvZyhwYXRoKVxuICAgIGNvbnN0IHtwYWdlfSA9IHByb3BzLm5hdlxuICAgIGNvbnN0IG9wZW5NZW51ID0gKG5hdikgPT4ge1xuICAgICAgICBwcm9wcy5kaXNwYXRjaChjbGlja01lbnUobmF2KSlcbiAgICB9XG4gICAgY29uc3QgZGF0YU1lbnUgPSBbe1xuICAgICAgICAgICAgdGl0bGUgOiAnSG9tZScsXG4gICAgICAgICAgICBwYWdlIDogJy8nLFxuICAgICAgICAgICAgaWNvbiA6IDxIb21lT3V0bGluZWQgc3R5bGU9e3tjb2xvcjoocGF0aCA9PSAnLycpPyBjb2xvcnMub3JhbmdlUHJpbWFyeSA6IGNvbG9ycy5wdXJwbGVQcmltYXksIGZvbnRTaXplOjE4LCBtYXJnaW5SaWdodDoxNX19Lz5cbiAgICAgICAgfSx7XG4gICAgICAgICAgICB0aXRsZSA6ICdCcm93c2UnLFxuICAgICAgICAgICAgcGFnZSA6ICcvYnJvd3NlJyxcbiAgICAgICAgICAgIGljb24gOiA8R3JpZE9mZk91dGxpbmVkIHN0eWxlPXt7Y29sb3I6KHBhdGggPT09ICcvYnJvd3NlJyk/IGNvbG9ycy5vcmFuZ2VQcmltYXJ5IDogY29sb3JzLnB1cnBsZVByaW1heSxmb250U2l6ZToxOCwgbWFyZ2luUmlnaHQ6MTV9fS8+XG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGl0bGUgOiAnQ2F0ZWdvcnknLFxuICAgICAgICAgICAgcGFnZSA6ICcvY2F0ZWdvcnknLFxuICAgICAgICAgICAgaWNvbiA6IDxTaGFyZU91dGxpbmVkIHN0eWxlPXt7Y29sb3I6KHBhdGggPT09ICcvY2F0ZWdvcnknKT8gY29sb3JzLm9yYW5nZVByaW1hcnkgOiBjb2xvcnMucHVycGxlUHJpbWF5LCBmb250U2l6ZToxOCwgbWFyZ2luUmlnaHQ6MTV9fSAvPlxuICAgICAgICB9LHtcbiAgICAgICAgICAgIHRpdGxlIDogJ1RyZW5kaW5nJyxcbiAgICAgICAgICAgIHBhZ2UgOiAnL3RyZW5kaW5nJyxcbiAgICAgICAgICAgIGljb24gOiA8QmFyQ2hhcnQgc3R5bGU9e3tjb2xvcjoocGF0aCA9PT0gJy90cmVuZGluZycpPyBjb2xvcnMub3JhbmdlUHJpbWFyeSA6IGNvbG9ycy5wdXJwbGVQcmltYXksIGZvbnRTaXplOjE4LCBtYXJnaW5SaWdodDoxNX19Lz5cbiAgICAgICAgfSx7XG4gICAgICAgICAgICB0aXRsZSA6ICdQcm9maWxlJyxcbiAgICAgICAgICAgIHBhZ2UgOiAnL3Byb2ZpbGUnLFxuICAgICAgICAgICAgaWNvbiA6IDxBY2NvdW50Qm94T3V0bGluZWQgc3R5bGU9e3tjb2xvcjoocGF0aCA9PT0gJy9wcm9maWxlJyk/IGNvbG9ycy5vcmFuZ2VQcmltYXJ5IDogY29sb3JzLnB1cnBsZVByaW1heSwgZm9udFNpemU6MTgsIG1hcmdpblJpZ2h0OjE1fX0vPlxuICAgICAgICB9XG4gICAgXVxuXG4gICAgY29uc3QgTG9jYWxNZW51ID0gW3tcbiAgICAgICAgdGl0bGUgOiAnUmVjZW50bHkgUGxheWVkJyxcbiAgICAgICAgcGFnZSA6ICcvcmVjZW50bHknLFxuICAgICAgICBpY29uIDogPER5bmFtaWNGZWVkT3V0bGluZWQgc3R5bGU9e3tjb2xvcjoocGF0aCA9PT0gJy9yZWNlbnRseScpPyBjb2xvcnMub3JhbmdlUHJpbWFyeSA6IGNvbG9ycy5wdXJwbGVQcmltYXksIGZvbnRTaXplOjE4LCBtYXJnaW5SaWdodDoxNX19Lz5cbiAgICB9LHtcbiAgICAgICAgdGl0bGUgOiAnTG9jYWwgU3RvcmFnZScsXG4gICAgICAgIHBhZ2UgOiAnL2xvY2FsJyxcbiAgICAgICAgaWNvbiA6IDxGaWxlQ29weU91dGxpbmVkIHN0eWxlPXt7Y29sb3I6KHBhdGggPT09ICcvbG9jYWwnKT8gY29sb3JzLm9yYW5nZVByaW1hcnkgOiBjb2xvcnMucHVycGxlUHJpbWF5LCBmb250U2l6ZToxOCwgbWFyZ2luUmlnaHQ6MTV9fS8+XG4gICAgfV1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLW1lbnVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgIE1PVklFXG4gICAgICA8L2Rpdj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgc3R5bGU9e3tkaXNwbGF5OidpbmxpbmUtYmxvY2snfX0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGRhdGFNZW51Lm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgICAgICAgICA8R3JpZCBrZXk9e3ZhbHVlLnRpdGxlfSBpdGVtIHhzPXsxMn0gc209ezEyfSBsZz17MTJ9IHhsPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3ZhbHVlLnBhZ2V9IGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9eygpPT5vcGVuTWVudSh2YWx1ZS5wYWdlKX0gdW5kZXJsaW5lPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZS1tZW51XCIgc3R5bGU9e3tjb2xvciA6IChwYXRoID09PSB2YWx1ZS5wYWdlKT8gY29sb3JzLm9yYW5nZVByaW1hcnkgOiBjb2xvcnMucHVycGxlUHJpbWF5fX0+e3ZhbHVlLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLW1lbnVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNwYW4tbWVudVwiPk15IE1vdmllPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIExvY2FsTWVudS5tYXAoKHZhbHVlKSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyaWQga2V5PXt2YWx1ZS50aXRsZX0gaXRlbSB4cz17MTJ9IHNtPXsxMn0gbGc9ezEyfSB4bD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt2YWx1ZS5wYWdlfSBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXsoKT0+b3Blbk1lbnUodmFsdWUucGFnZSl9IHVuZGVybGluZT1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLmljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtbWVudVwiIHN0eWxlPXt7Y29sb3IgOiAocGF0aCA9PT0gdmFsdWUucGFnZSk/IGNvbG9ycy5vcmFuZ2VQcmltYXJ5IDogXCIjYTFhMWExXCJ9fT57dmFsdWUudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIH1cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjIwMCw0MDAsNzAwLDkwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgLmNvbnRhaW5lci1tZW51IHtcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206NDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6MjBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5tZW51IHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW0tbWVudSB7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDozNXB4O1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZS1tZW51IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5pY29uLW1lbnUge1xuICAgICAgICAgICAgY29sb3I6I2ExYTFhMTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOjE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MTVweDtcbiAgICAgICAgfVxuICAgICAgICAuc3Bhbi1tZW51IHtcbiAgICAgICAgICAgIGNvbG9yOiAjYTFhMWExO1xuICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTWVudS5wcm9wVHlwZXMgPSB7XG4gICAgXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgICBhdXRoIDogc3RhdGUuYXV0aCxcbiAgICBuYXYgOiBzdGF0ZS5uYXZcbiAgfSlcbiAgXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSh3aXRoUm91dGVyKE1lbnUpKVxuIl19 */\n/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/Layouts/Menu.js */"));
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
//# sourceMappingURL=index.js.4bcec77e06b65dcd9797.hot-update.js.map