webpackHotUpdate_N_E("pages/index",{

/***/ "./components/MapContainer.jsx":
/*!*************************************!*\
  !*** ./components/MapContainer.jsx ***!
  \*************************************/
/*! exports provided: MapContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapContainer\", function() { return MapContainer; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! google-maps-react */ \"./node_modules/google-maps-react/dist/index.js\");\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/rom/coding/Projekte/Physio_HP/components/MapContainer.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar MapContainer = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MapContainer, _Component);\n\n  var _super = _createSuper(MapContainer);\n\n  function MapContainer() {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MapContainer);\n\n    return _super.apply(this, arguments);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MapContainer, [{\n    key: \"render\",\n    value: function render() {\n      var style = {\n        width: \"100vw\"\n      };\n      return __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_5__[\"Map\"], {\n        google: this.props.google,\n        zoom: 15,\n        initialCenter: {\n          lat: 52.4866,\n          lng: 13.39698\n        },\n        style: style,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 7\n        }\n      }, __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_5__[\"Marker\"], {\n        onClick: this.onMarkerClick,\n        name: \"Current location\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 9\n        }\n      }), __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_5__[\"InfoWindow\"], {\n        onClose: this.onInfoWindowClose,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return MapContainer;\n}(react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_5__[\"GoogleApiWrapper\"])({\n  apiKey: \"\"\n})(MapContainer));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBDb250YWluZXIuanN4PzY2NzMiXSwibmFtZXMiOlsiTWFwQ29udGFpbmVyIiwic3R5bGUiLCJ3aWR0aCIsInByb3BzIiwiZ29vZ2xlIiwibGF0IiwibG5nIiwib25NYXJrZXJDbGljayIsIm9uSW5mb1dpbmRvd0Nsb3NlIiwiQ29tcG9uZW50IiwiR29vZ2xlQXBpV3JhcHBlciIsImFwaUtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsWUFBYjtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsNkJBQ1c7QUFDUCxVQUFNQyxLQUFLLEdBQUc7QUFDWkMsYUFBSyxFQUFFO0FBREssT0FBZDtBQUdBLGFBQ0UsTUFBQyxxREFBRDtBQUNFLGNBQU0sRUFBRSxLQUFLQyxLQUFMLENBQVdDLE1BRHJCO0FBRUUsWUFBSSxFQUFFLEVBRlI7QUFHRSxxQkFBYSxFQUFFO0FBQ2JDLGFBQUcsRUFBRSxPQURRO0FBRWJDLGFBQUcsRUFBRTtBQUZRLFNBSGpCO0FBT0UsYUFBSyxFQUFFTCxLQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FTRSxNQUFDLHdEQUFEO0FBQVEsZUFBTyxFQUFFLEtBQUtNLGFBQXRCO0FBQXFDLFlBQUksRUFBRSxrQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVRGLEVBV0UsTUFBQyw0REFBRDtBQUFZLGVBQU8sRUFBRSxLQUFLQyxpQkFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVhGLENBREY7QUFtQkQ7QUF4Qkg7O0FBQUE7QUFBQSxFQUFrQ0MsK0NBQWxDO0FBMkJlQyx5SUFBZ0IsQ0FBQztBQUM5QkMsUUFBTSxFQUFFO0FBRHNCLENBQUQsQ0FBaEIsQ0FFWlgsWUFGWSxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYXBDb250YWluZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwLCBJbmZvV2luZG93LCBNYXJrZXIsIEdvb2dsZUFwaVdyYXBwZXIgfSBmcm9tIFwiZ29vZ2xlLW1hcHMtcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIE1hcENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPE1hcFxuICAgICAgICBnb29nbGU9e3RoaXMucHJvcHMuZ29vZ2xlfVxuICAgICAgICB6b29tPXsxNX1cbiAgICAgICAgaW5pdGlhbENlbnRlcj17e1xuICAgICAgICAgIGxhdDogNTIuNDg2NixcbiAgICAgICAgICBsbmc6IDEzLjM5Njk4LFxuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICA+XG4gICAgICAgIDxNYXJrZXIgb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfSBuYW1lPXtcIkN1cnJlbnQgbG9jYXRpb25cIn0gLz5cblxuICAgICAgICA8SW5mb1dpbmRvdyBvbkNsb3NlPXt0aGlzLm9uSW5mb1dpbmRvd0Nsb3NlfT5cbiAgICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgIDxoMT57dGhpcy5zdGF0ZS5zZWxlY3RlZFBsYWNlLm5hbWV9PC9oMT5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDwvSW5mb1dpbmRvdz5cbiAgICAgIDwvTWFwPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlQXBpV3JhcHBlcih7XG4gIGFwaUtleTogXCJcIixcbn0pKE1hcENvbnRhaW5lcik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MapContainer.jsx\n");

/***/ })

})