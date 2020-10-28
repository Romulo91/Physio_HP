module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/leistungen.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.scss */ \"./components/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/rom/coding/Projekte/Physio_HP/components/Header.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nlet lastY = 0;\nconst Header = () => {\n  const {\n    0: open,\n    1: setOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false); // erhalte immer ein Array zurück []\n\n  const headerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  const handleClick = e => {\n    const isOutside = !e.target.closest(\"nav\");\n\n    if (isOutside && open) {\n      setOpen(false);\n    }\n  };\n\n  const handleScroll = e => {\n    const y = window.scrollY;\n    const isColored = headerRef.current.classList.contains(\"colored\");\n\n    if (y >= 100 && lastY < y && !isColored) {\n      console.log(headerRef.current.classList);\n      headerRef.current.classList.add(\"colored\");\n    } else if (y < 100 && lastY > y && isColored) {\n      headerRef.current.classList.remove(\"colored\");\n    }\n\n    lastY = y;\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    // nach dem ersten Rendern\n    document.addEventListener(\"click\", handleClick);\n    document.addEventListener(\"scroll\", handleScroll);\n    return () => {\n      // bevor der Effekt erneut ausgeführt wird\n      document.removeEventListener(\"click\", handleClick);\n      document.removeEventListener(\"scroll\", handleScroll);\n    };\n  }, [open]);\n  return __jsx(\"header\", {\n    ref: headerRef,\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"content\",\n    \"data-open\": open,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, \"Physiotherapie\"), __jsx(\"nav\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"/\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, \" Home\"), __jsx(\"a\", {\n    href: \"/leistungen\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, \" Leistungen \"), __jsx(\"a\", {\n    href: \"/team\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, \" Team \"), __jsx(\"a\", {\n    href: \"/about\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, \" \\xDCber Uns \")), __jsx(\"button\", {\n    onClick: () => setOpen(!open),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(\"i\", {\n    className: \"material-icons\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, \"menu\"))));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qc3g/MGEwOCJdLCJuYW1lcyI6WyJsYXN0WSIsIkhlYWRlciIsIm9wZW4iLCJzZXRPcGVuIiwidXNlU3RhdGUiLCJoZWFkZXJSZWYiLCJ1c2VSZWYiLCJoYW5kbGVDbGljayIsImUiLCJpc091dHNpZGUiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiaGFuZGxlU2Nyb2xsIiwieSIsIndpbmRvdyIsInNjcm9sbFkiLCJpc0NvbG9yZWQiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjb25zb2xlIiwibG9nIiwiYWRkIiwicmVtb3ZlIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlcyIsImhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsS0FBSyxHQUFHLENBQVo7QUFFTyxNQUFNQyxNQUFNLEdBQUcsTUFBTTtBQUMxQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsS0FBRCxDQUFoQyxDQUQwQixDQUNlOztBQUN6QyxRQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4Qjs7QUFFQSxRQUFNQyxXQUFXLEdBQUlDLENBQUQsSUFBTztBQUN6QixVQUFNQyxTQUFTLEdBQUcsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLE9BQVQsQ0FBaUIsS0FBakIsQ0FBbkI7O0FBQ0EsUUFBSUYsU0FBUyxJQUFJUCxJQUFqQixFQUF1QjtBQUNyQkMsYUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FMRDs7QUFPQSxRQUFNUyxZQUFZLEdBQUlKLENBQUQsSUFBTztBQUMxQixVQUFNSyxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBakI7QUFDQSxVQUFNQyxTQUFTLEdBQUdYLFNBQVMsQ0FBQ1ksT0FBVixDQUFrQkMsU0FBbEIsQ0FBNEJDLFFBQTVCLENBQXFDLFNBQXJDLENBQWxCOztBQUNBLFFBQUlOLENBQUMsSUFBSSxHQUFMLElBQVliLEtBQUssR0FBR2EsQ0FBcEIsSUFBeUIsQ0FBQ0csU0FBOUIsRUFBeUM7QUFDdkNJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsU0FBUyxDQUFDWSxPQUFWLENBQWtCQyxTQUE5QjtBQUNBYixlQUFTLENBQUNZLE9BQVYsQ0FBa0JDLFNBQWxCLENBQTRCSSxHQUE1QixDQUFnQyxTQUFoQztBQUNELEtBSEQsTUFHTyxJQUFJVCxDQUFDLEdBQUcsR0FBSixJQUFXYixLQUFLLEdBQUdhLENBQW5CLElBQXdCRyxTQUE1QixFQUF1QztBQUM1Q1gsZUFBUyxDQUFDWSxPQUFWLENBQWtCQyxTQUFsQixDQUE0QkssTUFBNUIsQ0FBbUMsU0FBbkM7QUFDRDs7QUFDRHZCLFNBQUssR0FBR2EsQ0FBUjtBQUNELEdBVkQ7O0FBWUFXLHlEQUFTLENBQUMsTUFBTTtBQUNkO0FBQ0FDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNuQixXQUFuQztBQUNBa0IsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQ2QsWUFBcEM7QUFDQSxXQUFPLE1BQU07QUFDWDtBQUNBYSxjQUFRLENBQUNFLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDcEIsV0FBdEM7QUFDQWtCLGNBQVEsQ0FBQ0UsbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUNmLFlBQXZDO0FBQ0QsS0FKRDtBQUtELEdBVFEsRUFTTixDQUFDVixJQUFELENBVE0sQ0FBVDtBQVdBLFNBQ0U7QUFBUSxPQUFHLEVBQUVHLFNBQWI7QUFBd0IsYUFBUyxFQUFFdUIsMERBQU0sQ0FBQ0MsTUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsaUJBQVczQixJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQUcsUUFBSSxFQUFDLGFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixFQUdFO0FBQUcsUUFBSSxFQUFDLE9BQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLEVBSUU7QUFBRyxRQUFJLEVBQUMsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLENBRkYsRUFRRTtBQUFRLFdBQU8sRUFBRSxNQUFNQyxPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBUkYsQ0FERixDQURGO0FBZ0JELENBbERNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9IZWFkZXIubW9kdWxlLnNjc3NcIjtcblxubGV0IGxhc3RZID0gMDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBlcmhhbHRlIGltbWVyIGVpbiBBcnJheSB6dXLDvGNrIFtdXG4gIGNvbnN0IGhlYWRlclJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgY29uc3QgaXNPdXRzaWRlID0gIWUudGFyZ2V0LmNsb3Nlc3QoXCJuYXZcIik7XG4gICAgaWYgKGlzT3V0c2lkZSAmJiBvcGVuKSB7XG4gICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGUpID0+IHtcbiAgICBjb25zdCB5ID0gd2luZG93LnNjcm9sbFk7XG4gICAgY29uc3QgaXNDb2xvcmVkID0gaGVhZGVyUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29sb3JlZFwiKTtcbiAgICBpZiAoeSA+PSAxMDAgJiYgbGFzdFkgPCB5ICYmICFpc0NvbG9yZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGhlYWRlclJlZi5jdXJyZW50LmNsYXNzTGlzdCk7XG4gICAgICBoZWFkZXJSZWYuY3VycmVudC5jbGFzc0xpc3QuYWRkKFwiY29sb3JlZFwiKTtcbiAgICB9IGVsc2UgaWYgKHkgPCAxMDAgJiYgbGFzdFkgPiB5ICYmIGlzQ29sb3JlZCkge1xuICAgICAgaGVhZGVyUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImNvbG9yZWRcIik7XG4gICAgfVxuICAgIGxhc3RZID0geTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIG5hY2ggZGVtIGVyc3RlbiBSZW5kZXJuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIC8vIGJldm9yIGRlciBFZmZla3QgZXJuZXV0IGF1c2dlZsO8aHJ0IHdpcmRcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW29wZW5dKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgcmVmPXtoZWFkZXJSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLW9wZW49e29wZW59PlxuICAgICAgICA8aDE+UGh5c2lvdGhlcmFwaWU8L2gxPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxhIGhyZWY9XCIvXCI+IEhvbWU8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIi9sZWlzdHVuZ2VuXCI+IExlaXN0dW5nZW4gPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIvdGVhbVwiPiBUZWFtIDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiL2Fib3V0XCI+IMOcYmVyIFVucyA8L2E+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm1lbnU8L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.jsx\n");

/***/ }),

/***/ "./components/Header.module.scss":
/*!***************************************!*\
  !*** ./components/Header.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"Header_header__3Z-q0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5tb2R1bGUuc2Nzcz8wMmI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX18zWi1xMFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.module.scss\n");

/***/ }),

/***/ "./pages/leistungen.js":
/*!*****************************!*\
  !*** ./pages/leistungen.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Leistungen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _leistungen_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leistungen.module.scss */ \"./pages/leistungen.module.scss\");\n/* harmony import */ var _leistungen_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_leistungen_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/rom/coding/Projekte/Physio_HP/pages/leistungen.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Leistungen() {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, \"Leistungen\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/icon?family=Material+Icons\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"Header\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \"Umfassende Unterst\\xFCtzung bei ihren Beschwerden\"), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(\"section\", {\n    className: _leistungen_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceContainerRigth,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, \"Hausbesuche\"), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, \"Hallo wir bieten auch hausbesuche an\")), __jsx(\"img\", {\n    src: \"../Physio.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })), __jsx(\"section\", {\n    className: _leistungen_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceContainerRigth,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"../Physio2.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, \"CMD Kiefergelenktherapie\"), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, \"Hallo wir bieten auch hausbesuche an\"))), __jsx(\"section\", {\n    className: _leistungen_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceContainerRigth,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }, \"Fango Behandlung\"), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, \"Hallo wir bieten auch hausbesuche an\")), __jsx(\"img\", {\n    src: \"../Physio3.jpg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  })));\n}\n{\n  /* \n  <h2>Heißluft</h2>\n  <h2>Manuelle Therapie</h2>\n  <h2>Massagen</h2>\n  <h2>Magränetherapie</h2>\n  <h2>Schlingentisch</h2>\n  <h2>Therapie nach Bobath</h2>\n  <h2>Lymphdrainage</h2> */\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sZWlzdHVuZ2VuLmpzPzZhYTMiXSwibmFtZXMiOlsiTGVpc3R1bmdlbiIsInN0eWxlcyIsInNlcnZpY2VDb250YWluZXJSaWd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFVBQVQsR0FBc0I7QUFDbkMsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUdFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQ0UsUUFBSSxFQUFDLHlEQURQO0FBRUUsT0FBRyxFQUFDLFlBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREYsRUFVRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBWEYsRUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsRUFnQkU7QUFBUyxhQUFTLEVBQUVDLDhEQUFNLENBQUNDLHFCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQUhGLENBREYsRUFNRTtBQUFLLE9BQUcsRUFBQyxlQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQWhCRixFQXlCRTtBQUFTLGFBQVMsRUFBRUQsOERBQU0sQ0FBQ0MscUJBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxnQkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBSEYsQ0FGRixDQXpCRixFQWtDRTtBQUFTLGFBQVMsRUFBRUQsOERBQU0sQ0FBQ0MscUJBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBSEYsQ0FERixFQU1FO0FBQUssT0FBRyxFQUFDLGdCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQWxDRixDQURGO0FBNkNEO0FBRUQ7QUFDRTs7Ozs7Ozs7QUFTRCIsImZpbGUiOiIuL3BhZ2VzL2xlaXN0dW5nZW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xlaXN0dW5nZW4ubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWlzdHVuZ2VuKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkxlaXN0dW5nZW48L3RpdGxlPlxuXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgID48L2xpbms+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8aDE+VW1mYXNzZW5kZSBVbnRlcnN0w7x0enVuZyBiZWkgaWhyZW4gQmVzY2h3ZXJkZW48L2gxPlxuXG4gICAgICA8YnIgLz5cbiAgICAgIDxiciAvPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlQ29udGFpbmVyUmlndGh9PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5IYXVzYmVzdWNoZTwvaDI+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHA+SGFsbG8gd2lyIGJpZXRlbiBhdWNoIGhhdXNiZXN1Y2hlIGFuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyBzcmM9XCIuLi9QaHlzaW8uanBnXCIgLz5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZUNvbnRhaW5lclJpZ3RofT5cbiAgICAgICAgPGltZyBzcmM9XCIuLi9QaHlzaW8yLmpwZ1wiIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyPkNNRCBLaWVmZXJnZWxlbmt0aGVyYXBpZTwvaDI+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHA+SGFsbG8gd2lyIGJpZXRlbiBhdWNoIGhhdXNiZXN1Y2hlIGFuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc2VydmljZUNvbnRhaW5lclJpZ3RofT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+RmFuZ28gQmVoYW5kbHVuZzwvaDI+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHA+SGFsbG8gd2lyIGJpZXRlbiBhdWNoIGhhdXNiZXN1Y2hlIGFuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGltZyBzcmM9XCIuLi9QaHlzaW8zLmpwZ1wiIC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbntcbiAgLyogXG5cbjxoMj5IZWnDn2x1ZnQ8L2gyPlxuPGgyPk1hbnVlbGxlIFRoZXJhcGllPC9oMj5cbjxoMj5NYXNzYWdlbjwvaDI+XG48aDI+TWFncsOkbmV0aGVyYXBpZTwvaDI+XG48aDI+U2NobGluZ2VudGlzY2g8L2gyPlxuPGgyPlRoZXJhcGllIG5hY2ggQm9iYXRoPC9oMj5cbjxoMj5MeW1waGRyYWluYWdlPC9oMj4gKi9cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/leistungen.js\n");

/***/ }),

/***/ "./pages/leistungen.module.scss":
/*!**************************************!*\
  !*** ./pages/leistungen.module.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"serviceContainerRigth\": \"leistungen_serviceContainerRigth__1wvkQ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sZWlzdHVuZ2VuLm1vZHVsZS5zY3NzPzVjZGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9sZWlzdHVuZ2VuLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VydmljZUNvbnRhaW5lclJpZ3RoXCI6IFwibGVpc3R1bmdlbl9zZXJ2aWNlQ29udGFpbmVyUmlndGhfXzF3dmtRXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/leistungen.module.scss\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });