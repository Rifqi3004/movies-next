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
  var page = props.nav.page;

  var openMenu = function openMenu(nav) {
    props.dispatch(Object(_redux_actions_nav__WEBPACK_IMPORTED_MODULE_5__["openMenu"])(nav));
  };

  var dataMenu = [{
    title: 'Home',
    page: '/',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["HomeOutlined"], {
      style: {
        color: page == '/' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })
  }, {
    title: 'Browse',
    page: '/browse',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["GridOffOutlined"], {
      style: {
        color: page === '/browse' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })
  }, {
    title: 'Category',
    page: '/category',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["ShareOutlined"], {
      style: {
        color: page === '/category' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })
  }, {
    title: 'Trending',
    page: '/trending',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["BarChart"], {
      style: {
        color: page === '/trending' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })
  }, {
    title: 'Profile',
    page: '/profile',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["AccountBoxOutlined"], {
      style: {
        color: page === '/profile' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })
  }];
  var LocalMenu = [{
    title: 'Recently Played',
    page: '/recently',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["DynamicFeedOutlined"], {
      style: {
        color: page === '/recently' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })
  }, {
    title: 'Local Storage',
    page: '/local',
    icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_2__["FileCopyOutlined"], {
      style: {
        color: page === '/local' ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay,
        fontSize: 18,
        marginRight: 15
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })
  }];
  return __jsx("div", {
    className: "jsx-27314977" + " " + "container-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-27314977" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
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
      lineNumber: 54
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
        lineNumber: 57
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
        lineNumber: 58
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-27314977" + " " + "item-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, value.icon, __jsx("p", {
      style: {
        color: page === value.page ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].purplePrimay
      },
      className: "jsx-27314977" + " " + "title-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, value.title))));
  }), __jsx("div", {
    className: "jsx-27314977" + " " + "item-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-27314977" + " " + "span-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
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
        lineNumber: 72
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
        lineNumber: 73
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-27314977" + " " + "item-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, value.icon, __jsx("p", {
      style: {
        color: page === value.page ? _tools_colors__WEBPACK_IMPORTED_MODULE_6__["default"].orangePrimary : "#a1a1a1"
      },
      className: "jsx-27314977" + " " + "title-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, value.title))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "27314977",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Poppins:200,400,700,900&display=swap');.container-menu.jsx-27314977{display:inline-block;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center;background:#ffffff;}.logo.jsx-27314977{margin-bottom:40px;font-weight:bold;font-size:20px;font-family:Poppins;display:inline-block;}.menu.jsx-27314977{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;display:inline-block;}.item-menu.jsx-27314977{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:35px;}.title-menu.jsx-27314977{font-size:14px;font-family:Poppins;font-weight:bold;}.icon-menu.jsx-27314977{color:#a1a1a1;text-align:center;font-size:18px;margin-right:15px;}.span-menu.jsx-27314977{color:#a1a1a1;font-size:14px;font-family:Poppins;font-weight:400;margin-top:20px;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNib29rL1dvcmtzL21lL3Rlcy9tb3ZpZWFqYS9jb21wb25lbnRzL0xheW91dHMvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRmtCLEFBRW9HLEFBRW5FLEFBTUYsQUFPSSxBQUtWLEFBTUUsQUFLRCxBQU1DLGNBTEcsQUFNSCxDQVhNLElBbEJKLEVBTkssUUFvQ0QsR0FOTixHQUxFLENBbEJGLFdBd0JHLEVBTUYsRUE3QkssQ0FrQnhCLGFBTUEsQUFNb0IsTUE3QkssR0FTSCxPQXFCQyxXQTdCdkIsT0FUc0IsQUFZQSxDQTJCdEIsaUJBdENzQixBQVlHLG1CQVh6QixFQVlBLEtBSXNCLDZGQUNGLGlCQUNwQiIsImZpbGUiOiIvVXNlcnMvbWFjYm9vay9Xb3Jrcy9tZS90ZXMvbW92aWVhamEvY29tcG9uZW50cy9MYXlvdXRzL01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0hvbWVPdXRsaW5lZCwgR3JpZE9mZk91dGxpbmVkLCBTaGFyZU91dGxpbmVkLCBCYXJDaGFydCwgQWNjb3VudEJveE91dGxpbmVkLCBcbiAgICBEeW5hbWljRmVlZE91dGxpbmVkLCBGaWxlQ29weU91dGxpbmVkfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXG5pbXBvcnQge0dyaWQsIExpbmt9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtvcGVuTWVudSBhcyBjbGlja01lbnV9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvbmF2J1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuLi8uLi90b29scy9jb2xvcnMnXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5cbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFnZX0gPSBwcm9wcy5uYXZcbiAgICBjb25zdCBvcGVuTWVudSA9IChuYXYpID0+IHtcbiAgICAgICAgcHJvcHMuZGlzcGF0Y2goY2xpY2tNZW51KG5hdikpXG4gICAgfVxuICAgIGNvbnN0IGRhdGFNZW51ID0gW3tcbiAgICAgICAgICAgIHRpdGxlIDogJ0hvbWUnLFxuICAgICAgICAgICAgcGFnZSA6ICcvJyxcbiAgICAgICAgICAgIGljb24gOiA8SG9tZU91dGxpbmVkIHN0eWxlPXt7Y29sb3I6KHBhZ2UgPT0gJy8nKT8gY29sb3JzLm9yYW5nZVByaW1hcnkgOiBjb2xvcnMucHVycGxlUHJpbWF5LCBmb250U2l6ZToxOCwgbWFyZ2luUmlnaHQ6MTV9fS8+XG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGl0bGUgOiAnQnJvd3NlJyxcbiAgICAgICAgICAgIHBhZ2UgOiAnL2Jyb3dzZScsXG4gICAgICAgICAgICBpY29uIDogPEdyaWRPZmZPdXRsaW5lZCBzdHlsZT17e2NvbG9yOihwYWdlID09PSAnL2Jyb3dzZScpPyBjb2xvcnMub3JhbmdlUHJpbWFyeSA6IGNvbG9ycy5wdXJwbGVQcmltYXksZm9udFNpemU6MTgsIG1hcmdpblJpZ2h0OjE1fX0vPlxuICAgICAgICB9LHtcbiAgICAgICAgICAgIHRpdGxlIDogJ0NhdGVnb3J5JyxcbiAgICAgICAgICAgIHBhZ2UgOiAnL2NhdGVnb3J5JyxcbiAgICAgICAgICAgIGljb24gOiA8U2hhcmVPdXRsaW5lZCBzdHlsZT17e2NvbG9yOihwYWdlID09PSAnL2NhdGVnb3J5Jyk/IGNvbG9ycy5vcmFuZ2VQcmltYXJ5IDogY29sb3JzLnB1cnBsZVByaW1heSwgZm9udFNpemU6MTgsIG1hcmdpblJpZ2h0OjE1fX0gLz5cbiAgICAgICAgfSx7XG4gICAgICAgICAgICB0aXRsZSA6ICdUcmVuZGluZycsXG4gICAgICAgICAgICBwYWdlIDogJy90cmVuZGluZycsXG4gICAgICAgICAgICBpY29uIDogPEJhckNoYXJ0IHN0eWxlPXt7Y29sb3I6KHBhZ2UgPT09ICcvdHJlbmRpbmcnKT8gY29sb3JzLm9yYW5nZVByaW1hcnkgOiBjb2xvcnMucHVycGxlUHJpbWF5LCBmb250U2l6ZToxOCwgbWFyZ2luUmlnaHQ6MTV9fS8+XG4gICAgICAgIH0se1xuICAgICAgICAgICAgdGl0bGUgOiAnUHJvZmlsZScsXG4gICAgICAgICAgICBwYWdlIDogJy9wcm9maWxlJyxcbiAgICAgICAgICAgIGljb24gOiA8QWNjb3VudEJveE91dGxpbmVkIHN0eWxlPXt7Y29sb3I6KHBhZ2UgPT09ICcvcHJvZmlsZScpPyBjb2xvcnMub3JhbmdlUHJpbWFyeSA6IGNvbG9ycy5wdXJwbGVQcmltYXksIGZvbnRTaXplOjE4LCBtYXJnaW5SaWdodDoxNX19Lz5cbiAgICAgICAgfVxuICAgIF1cblxuICAgIGNvbnN0IExvY2FsTWVudSA9IFt7XG4gICAgICAgIHRpdGxlIDogJ1JlY2VudGx5IFBsYXllZCcsXG4gICAgICAgIHBhZ2UgOiAnL3JlY2VudGx5JyxcbiAgICAgICAgaWNvbiA6IDxEeW5hbWljRmVlZE91dGxpbmVkIHN0eWxlPXt7Y29sb3I6KHBhZ2UgPT09ICcvcmVjZW50bHknKT8gY29sb3JzLm9yYW5nZVByaW1hcnkgOiBjb2xvcnMucHVycGxlUHJpbWF5LCBmb250U2l6ZToxOCwgbWFyZ2luUmlnaHQ6MTV9fS8+XG4gICAgfSx7XG4gICAgICAgIHRpdGxlIDogJ0xvY2FsIFN0b3JhZ2UnLFxuICAgICAgICBwYWdlIDogJy9sb2NhbCcsXG4gICAgICAgIGljb24gOiA8RmlsZUNvcHlPdXRsaW5lZCBzdHlsZT17e2NvbG9yOihwYWdlID09PSAnL2xvY2FsJyk/IGNvbG9ycy5vcmFuZ2VQcmltYXJ5IDogY29sb3JzLnB1cnBsZVByaW1heSwgZm9udFNpemU6MTgsIG1hcmdpblJpZ2h0OjE1fX0vPlxuICAgIH1dXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1tZW51XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICBNT1ZJRVxuICAgICAgPC9kaXY+XG4gICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiIHN0eWxlPXt7ZGlzcGxheTonaW5saW5lLWJsb2NrJ319PlxuICAgICAgICB7XG4gICAgICAgICAgICBkYXRhTWVudS5tYXAoKHZhbHVlKSA9PiAoXG4gICAgICAgICAgICAgICAgPEdyaWQga2V5PXt2YWx1ZS50aXRsZX0gaXRlbSB4cz17MTJ9IHNtPXsxMn0gbGc9ezEyfSB4bD17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt2YWx1ZS5wYWdlfSBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXsoKT0+b3Blbk1lbnUodmFsdWUucGFnZSl9IHVuZGVybGluZT1cIm5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLmljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGUtbWVudVwiIHN0eWxlPXt7Y29sb3IgOiAocGFnZSA9PT0gdmFsdWUucGFnZSk/IGNvbG9ycy5vcmFuZ2VQcmltYXJ5IDogY29sb3JzLnB1cnBsZVByaW1heX19Pnt2YWx1ZS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1tZW51XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzcGFuLW1lbnVcIj5NeSBNb3ZpZTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBMb2NhbE1lbnUubWFwKCh2YWx1ZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxHcmlkIGtleT17dmFsdWUudGl0bGV9IGl0ZW0geHM9ezEyfSBzbT17MTJ9IGxnPXsxMn0geGw9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dmFsdWUucGFnZX0gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17KCk9Pm9wZW5NZW51KHZhbHVlLnBhZ2UpfSB1bmRlcmxpbmU9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlLW1lbnVcIiBzdHlsZT17e2NvbG9yIDogKHBhZ2UgPT09IHZhbHVlLnBhZ2UpPyBjb2xvcnMub3JhbmdlUHJpbWFyeSA6IFwiI2ExYTFhMVwifX0+e3ZhbHVlLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICA8L0dyaWQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczoyMDAsNDAwLDcwMCw5MDAmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgIC5jb250YWluZXItbWVudSB7XG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjQwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucztcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgICAubWVudSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtLW1lbnUge1xuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MzVweDtcbiAgICAgICAgfVxuICAgICAgICAudGl0bGUtbWVudSB7XG4gICAgICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgfVxuICAgICAgICAuaWNvbi1tZW51IHtcbiAgICAgICAgICAgIGNvbG9yOiNhMWExYTE7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNwYW4tbWVudSB7XG4gICAgICAgICAgICBjb2xvcjogI2ExYTFhMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XG4gICAgICAgICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbk1lbnUucHJvcFR5cGVzID0ge1xuICAgIFxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gICAgYXV0aCA6IHN0YXRlLmF1dGgsXG4gICAgbmF2IDogc3RhdGUubmF2XG4gIH0pXG4gIFxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykod2l0aFJvdXRlcihNZW51KSlcbiJdfQ== */\n/*@ sourceURL=/Users/macbook/Works/me/tes/movieaja/components/Layouts/Menu.js */"));
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
//# sourceMappingURL=profile.js.75462b62a21efc6963aa.hot-update.js.map