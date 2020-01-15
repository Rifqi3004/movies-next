webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: initStore, makeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares */ "./redux/middlewares.js");



var initStore = function initStore(reducers, initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers, initialState, _middlewares__WEBPACK_IMPORTED_MODULE_2__["default"]);
};
var makeStore = function makeStore(initialState, _ref) {
  var isServer = _ref.isServer,
      req = _ref.req,
      debug = _ref.debug,
      storeKey = _ref.storeKey;

  if (isServer) {
    initialState = initialState || {
      fromServer: 'foo'
    };
    return initStore(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], initialState);
  } else {
    // we need it only on client side
    var _require = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js"),
        persistStore = _require.persistStore,
        persistReducer = _require.persistReducer;

    var storage = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js")["default"];

    var persistConfig = {
      key: 'nextjs',
      whitelist: ['auth', 'movie'],
      storage: storage
    };
    var persistedReducer = persistReducer(persistConfig, _reducers__WEBPACK_IMPORTED_MODULE_1__["default"]);
    var store = initStore(persistedReducer, initialState);
    store.__persistor = persistStore(store); // Nasty hack

    return store;
  }
};

/***/ })

})
//# sourceMappingURL=_app.js.e54a5f3fb5b6a354cbcc.hot-update.js.map