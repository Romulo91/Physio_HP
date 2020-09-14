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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.jsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ \"./pages/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/rom/coding/Projekte/Physio_HP/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Home() {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, \"Dreigold\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/icon?family=Material+Icons\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"Header\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }), __jsx(\"section\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.banner,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }), __jsx(\"section\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.waves,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  })), __jsx(\"section\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.intro,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, \"Willkommen in unserer Praxis\"), __jsx(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, \"Unsere im ..... 2020 er\\xF6ffnete physiotherapeutische Praxis liegt im Herzen von Berlin Kreuzberg, am Bergmankiez. In der n\\xE4he der U-7 Geisenauerstr oder dem Bus 248 J\\xFCterboger Str. erreichen Sie uns Fu\\xDFl\\xE4ufig.\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"In unserer modernen Physiotherapie betreuen wir Sie auf \\xFCber ????qm Therapie- und Trainingsfl\\xE4chen. Sie als als Mensch und Patient stehen bei uns im Mittelpukt, den Ihre Gesundheit und Ihr Wohlbefinden ist unsere Priorit\\xE4t.\")))), __jsx(\"section\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.leistungen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, \"Unsere Leistungen im \\xDCberblick.\")), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, \"Unser Expertenteam, welches sich ganz auf die Bed\\xFCrfnisse seiner Patienten einstellt. Hat sich auf die Hausbesuche speziallisiert, da wir verstehen, dass es unter gewissen umst\\xE4nden schwer ist das Haus zu verlassen.\")), __jsx(\"div\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contLeistungen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, \" \", __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, \"CMD Kiefergelenktherapie\")), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, \"Fango Behandlung\")), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, \"Hausbesuche\")), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, \"Hei\\xDFluft\")), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, \"Lymphdrainage\")), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, \"Manuelle Therapie\")), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, \"Massagen\")), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, \"Magr\\xE4netherapie\")), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, \"Schlingentisch\")), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }, __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, \"Therapie nach Bobath\")))), __jsx(\"section\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    style: {\n      width: \"100%\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, __jsx(\"iframe\", {\n    width: \"100%\",\n    height: \"600\",\n    frameborder: \"0\",\n    scrolling: \"no\",\n    marginHeight: \"0\",\n    marginWidth: \"0\",\n    src: \"https://maps.google.com/maps?width=100%25&height=600&hl=en&q=j%C3%BCterboger%20stra%C3%9Fe%206a,%2010965+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }))), __jsx(\"footer\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contact,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 11\n    }\n  }, \"Hast Du Fragen ? Kontaktiere uns!\")), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: \"mailto:romulo.galiao@googlemail.com\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  }, __jsx(\"i\", {\n    className: \"material-icons\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }, \"email\"))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 9\n    }\n  }, __jsx(\"i\", {\n    className: \"material-icons\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 11\n    }\n  }, \"call\"), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 11\n    }\n  }, \"030/ 34391835\"))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJzdHlsZXMiLCJiYW5uZXIiLCJ3YXZlcyIsImludHJvIiwibGVpc3R1bmdlbiIsImNvbnRMZWlzdHVuZ2VuIiwid2lkdGgiLCJjb250YWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUNFLFFBQUksRUFBQyx5REFEUDtBQUVFLE9BQUcsRUFBQyxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLEVBVUUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFXRTtBQUFTLGFBQVMsRUFBRUMseURBQU0sQ0FBQ0MsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBYUU7QUFBUyxhQUFTLEVBQUVELHlEQUFNLENBQUNFLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FiRixFQWdCRTtBQUFTLGFBQVMsRUFBRUYseURBQU0sQ0FBQ0csS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QU1FLGVBQVcsRUFBQyxHQU5kO0FBT0UsT0FBRyxFQUFDLHNLQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBeEZGLEVBc0dFO0FBQVEsYUFBUyxFQUFFTix5REFBTSxDQUFDTyxPQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUNBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxxQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsZ0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsQ0FKRixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFHLGFBQVMsRUFBQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLENBVkYsQ0F0R0YsQ0FERjtBQTBIRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5EcmVpZ29sZDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgID48L2xpbms+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmJhbm5lcn0+PC9zZWN0aW9uPlxuICAgICAgey8qIFdpbGxrb21tZW4gaW4gdW5zZXJlciBQcmF4aXMgKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy53YXZlc30+XG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb30+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5XaWxsa29tbWVuIGluIHVuc2VyZXIgUHJheGlzPC9oMj5cbiAgICAgICAgICAgIDxocj48L2hyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVW5zZXJlIGltIC4uLi4uIDIwMjAgZXLDtmZmbmV0ZSBwaHlzaW90aGVyYXBldXRpc2NoZSBQcmF4aXMgbGllZ3RcbiAgICAgICAgICAgICAgaW0gSGVyemVuIHZvbiBCZXJsaW4gS3JldXpiZXJnLCBhbSBCZXJnbWFua2llei4gSW4gZGVyIG7DpGhlIGRlclxuICAgICAgICAgICAgICBVLTcgR2Vpc2VuYXVlcnN0ciBvZGVyIGRlbSBCdXMgMjQ4IErDvHRlcmJvZ2VyIFN0ci4gZXJyZWljaGVuIFNpZVxuICAgICAgICAgICAgICB1bnMgRnXDn2zDpHVmaWcuXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJbiB1bnNlcmVyIG1vZGVybmVuIFBoeXNpb3RoZXJhcGllIGJldHJldWVuIHdpciBTaWUgYXVmIMO8YmVyXG4gICAgICAgICAgICAgID8/Pz9xbSBUaGVyYXBpZS0gdW5kIFRyYWluaW5nc2Zsw6RjaGVuLiBTaWUgYWxzIGFscyBNZW5zY2ggdW5kXG4gICAgICAgICAgICAgIFBhdGllbnQgc3RlaGVuIGJlaSB1bnMgaW0gTWl0dGVscHVrdCwgZGVuIElocmUgR2VzdW5kaGVpdCB1bmQgSWhyXG4gICAgICAgICAgICAgIFdvaGxiZWZpbmRlbiBpc3QgdW5zZXJlIFByaW9yaXTDpHQuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5sZWlzdHVuZ2VufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+VW5zZXJlIExlaXN0dW5nZW4gaW0gw5xiZXJibGljay48L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFVuc2VyIEV4cGVydGVudGVhbSwgd2VsY2hlcyBzaWNoIGdhbnogYXVmIGRpZSBCZWTDvHJmbmlzc2Ugc2VpbmVyXG4gICAgICAgICAgICBQYXRpZW50ZW4gZWluc3RlbGx0LiBIYXQgc2ljaCBhdWYgZGllIEhhdXNiZXN1Y2hlIHNwZXppYWxsaXNpZXJ0LCBkYVxuICAgICAgICAgICAgd2lyIHZlcnN0ZWhlbiwgZGFzcyBlcyB1bnRlciBnZXdpc3NlbiB1bXN0w6RuZGVuIHNjaHdlciBpc3QgZGFzIEhhdXNcbiAgICAgICAgICAgIHp1IHZlcmxhc3Nlbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRMZWlzdHVuZ2VufT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgPGg0PkNNRCBLaWVmZXJnZWxlbmt0aGVyYXBpZTwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5GYW5nbyBCZWhhbmRsdW5nPC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PkhhdXNiZXN1Y2hlPC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0PkhlacOfbHVmdDwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoND5MeW1waGRyYWluYWdlPC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0Pk1hbnVlbGxlIFRoZXJhcGllPC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0Pk1hc3NhZ2VuPC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg0Pk1hZ3LDpG5ldGhlcmFwaWU8L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+U2NobGluZ2VudGlzY2g8L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+VGhlcmFwaWUgbmFjaCBCb2JhdGg8L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIG1hcCBsb2NhdGlvbiAgKi99XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XG4gICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjYwMFwiXG4gICAgICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxuICAgICAgICAgICAgc2Nyb2xsaW5nPVwibm9cIlxuICAgICAgICAgICAgbWFyZ2luSGVpZ2h0PVwiMFwiXG4gICAgICAgICAgICBtYXJnaW5XaWR0aD1cIjBcIlxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9tYXBzLmdvb2dsZS5jb20vbWFwcz93aWR0aD0xMDAlMjUmYW1wO2hlaWdodD02MDAmYW1wO2hsPWVuJmFtcDtxPWolQzMlQkN0ZXJib2dlciUyMHN0cmElQzMlOUZlJTIwNmEsJTIwMTA5NjUrKE15JTIwQnVzaW5lc3MlMjBOYW1lKSZhbXA7dD0mYW1wO3o9MTQmYW1wO2llPVVURjgmYW1wO2l3bG9jPUImYW1wO291dHB1dD1lbWJlZFwiXG4gICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+SGFzdCBEdSBGcmFnZW4gPyBLb250YWt0aWVyZSB1bnMhPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpyb211bG8uZ2FsaWFvQGdvb2dsZW1haWwuY29tXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmVtYWlsPC9pPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7LyogPGEgaHJlZj1cInRsOjQ5LTAzMC0zNDMtOTE4MzVcIj4gKi99XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5jYWxsPC9pPlxuICAgICAgICAgIDxoMz4wMzAvIDM0MzkxODM1PC9oMz5cbiAgICAgICAgICB7LyogPC9hPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./pages/index.module.scss":
/*!*********************************!*\
  !*** ./pages/index.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"banner\": \"index_banner__14p0R\",\n\t\"intro\": \"index_intro__eAwt7\",\n\t\"map\": \"index_map__2hQF5\",\n\t\"leistungen\": \"index_leistungen__1omge\",\n\t\"contLeistungen\": \"index_contLeistungen__3gsDW\",\n\t\"contact\": \"index_contact__3dBvI\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5tb2R1bGUuc2Nzcz9hMGRmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFubmVyXCI6IFwiaW5kZXhfYmFubmVyX18xNHAwUlwiLFxuXHRcImludHJvXCI6IFwiaW5kZXhfaW50cm9fX2VBd3Q3XCIsXG5cdFwibWFwXCI6IFwiaW5kZXhfbWFwX18yaFFGNVwiLFxuXHRcImxlaXN0dW5nZW5cIjogXCJpbmRleF9sZWlzdHVuZ2VuX18xb21nZVwiLFxuXHRcImNvbnRMZWlzdHVuZ2VuXCI6IFwiaW5kZXhfY29udExlaXN0dW5nZW5fXzNnc0RXXCIsXG5cdFwiY29udGFjdFwiOiBcImluZGV4X2NvbnRhY3RfXzNkQnZJXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.module.scss\n");

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