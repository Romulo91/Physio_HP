webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Header.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/Header.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".Header_header__3Z-q0 {\\n  background-color: white;\\n  position: sticky;\\n  top: 0;\\n  transition: background-color 0.3s ease;\\n}\\n.Header_header__3Z-q0.Header_colored__2-vRf {\\n  background-color: gold;\\n}\\n.Header_header__3Z-q0 > div {\\n  display: -moz-box;\\n  display: flex;\\n  -moz-box-align: center;\\n       align-items: center;\\n  padding: 0.5rem;\\n  position: relative;\\n  height: 80px;\\n}\\n.Header_header__3Z-q0 > div > h1 {\\n  -moz-box-flex: 1;\\n       flex-grow: 1;\\n  color: black;\\n}\\n.Header_header__3Z-q0 > div > nav {\\n  display: -moz-box;\\n  display: flex;\\n  grid-gap: 1rem;\\n  gap: 1rem;\\n}\\n.Header_header__3Z-q0 > div > nav > a {\\n  font-weight: 600;\\n  font-size: 20px;\\n  letter-spacing: 1px;\\n  margin-right: 10px;\\n  color: #c79400;\\n}\\n.Header_header__3Z-q0 > div > button {\\n  display: none;\\n}\\n@media screen and (max-width: 576px) {\\n  .Header_header__3Z-q0 > div > button {\\n    display: inline;\\n  }\\n  .Header_header__3Z-q0 > div > nav {\\n    display: none;\\n  }\\n  .Header_header__3Z-q0 > div[data-open=true] > nav {\\n    display: -moz-box;\\n    display: flex;\\n    position: absolute;\\n    right: 0;\\n    top: 60px;\\n    -moz-box-orient: vertical;\\n    -moz-box-direction: normal;\\n         flex-direction: column;\\n    text-align: right;\\n    height: calc(100vh - 60px);\\n    padding: 1rem;\\n    padding-left: 3rem;\\n    box-shadow: 0 50px 30px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\\n    background-color: #ffffff;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/rom/coding/Projekte/Physio_HP/components/Header.module.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,uBAAA;EAEA,gBAAA;EACA,MAAA;EACA,sCAAA;AAHF;AAIE;EACE,sBAAA;AAFJ;AAIE;EACE,iBAAA;EAAA,aAAA;EACA,sBAAA;OAAA,mBAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;AAFJ;AAII;EACE,gBAAA;OAAA,YAAA;EACA,YAAA;AAFN;AAII;EACE,iBAAA;EAAA,aAAA;EACA,cAAA;EAAA,SAAA;AAFN;AAGM;EACE,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,cA/BG;AA8BX;AAKI;EACE,aAAA;AAHN;AAKI;EACE;IACE,eAAA;EAHN;EAKI;IACE,aAAA;EAHN;EAMM;IACE,iBAAA;IAAA,aAAA;IACA,kBAAA;IACA,QAAA;IACA,SAAA;IACA,yBAAA;IAAA,0BAAA;SAAA,sBAAA;IACA,iBAAA;IACA,0BAAA;IACA,aAAA;IACA,kBAAA;IACA,0EAAA;IAEA,yBAzDC;EAoDT;AACF\",\"file\":\"Header.module.scss\",\"sourcesContent\":[\"$gold-clr: #c79400;\\n$blck-clr: #ffffff;\\n\\n.header {\\n  background-color: white;\\n  // box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\\n  position: sticky;\\n  top: 0;\\n  transition: background-color 0.3s ease;\\n  &.colored {\\n    background-color: gold;\\n  }\\n  > div {\\n    display: flex;\\n    align-items: center;\\n    padding: 0.5rem;\\n    position: relative;\\n    height: 80px;\\n\\n    > h1 {\\n      flex-grow: 1;\\n      color: black;\\n    }\\n    > nav {\\n      display: flex;\\n      gap: 1rem;\\n      > a {\\n        font-weight: 600;\\n        font-size: 20px;\\n        letter-spacing: 1px;\\n        margin-right: 10px;\\n        color: $gold-clr;\\n      }\\n    }\\n\\n    > button {\\n      display: none;\\n    }\\n    @media screen and (max-width: 576px) {\\n      > button {\\n        display: inline;\\n      }\\n      > nav {\\n        display: none;\\n      }\\n      &[data-open=\\\"true\\\"] {\\n        > nav {\\n          display: flex;\\n          position: absolute;\\n          right: 0;\\n          top: 60px;\\n          flex-direction: column;\\n          text-align: right;\\n          height: calc(100vh - 60px);\\n          padding: 1rem;\\n          padding-left: 3rem;\\n          box-shadow: 0 50px 30px rgba(0, 0, 0, 0.19),\\n            0 6px 6px rgba(0, 0, 0, 0.23);\\n          background-color: $blck-clr;\\n        }\\n      }\\n    }\\n  }\\n}\\n\"]}]);\n// Exports\nexports.locals = {\n\t\"header\": \"Header_header__3Z-q0\",\n\t\"colored\": \"Header_colored__2-vRf\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIubW9kdWxlLnNjc3M/ZTA4YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDBCQUEwQiw0QkFBNEIscUJBQXFCLFdBQVcsMkNBQTJDLEdBQUcsK0NBQStDLDJCQUEyQixHQUFHLCtCQUErQixzQkFBc0Isa0JBQWtCLDJCQUEyQiw2QkFBNkIsb0JBQW9CLHVCQUF1QixpQkFBaUIsR0FBRyxvQ0FBb0MscUJBQXFCLHNCQUFzQixpQkFBaUIsR0FBRyxxQ0FBcUMsc0JBQXNCLGtCQUFrQixtQkFBbUIsY0FBYyxHQUFHLHlDQUF5QyxxQkFBcUIsb0JBQW9CLHdCQUF3Qix1QkFBdUIsbUJBQW1CLEdBQUcsd0NBQXdDLGtCQUFrQixHQUFHLHdDQUF3QywwQ0FBMEMsc0JBQXNCLEtBQUssdUNBQXVDLG9CQUFvQixLQUFLLHVEQUF1RCx3QkFBd0Isb0JBQW9CLHlCQUF5QixlQUFlLGdCQUFnQixnQ0FBZ0MsaUNBQWlDLGtDQUFrQyx3QkFBd0IsaUNBQWlDLG9CQUFvQix5QkFBeUIsaUZBQWlGLGdDQUFnQyxLQUFLLEdBQUcsT0FBTyx5SEFBeUgsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksTUFBTSx3RUFBd0UscUJBQXFCLGFBQWEsNEJBQTRCLGtGQUFrRixxQkFBcUIsV0FBVywyQ0FBMkMsZUFBZSw2QkFBNkIsS0FBSyxXQUFXLG9CQUFvQiwwQkFBMEIsc0JBQXNCLHlCQUF5QixtQkFBbUIsY0FBYyxxQkFBcUIscUJBQXFCLE9BQU8sYUFBYSxzQkFBc0Isa0JBQWtCLGFBQWEsMkJBQTJCLDBCQUEwQiw4QkFBOEIsNkJBQTZCLDJCQUEyQixTQUFTLE9BQU8sa0JBQWtCLHNCQUFzQixPQUFPLDRDQUE0QyxrQkFBa0IsMEJBQTBCLFNBQVMsZUFBZSx3QkFBd0IsU0FBUywrQkFBK0IsaUJBQWlCLDBCQUEwQiwrQkFBK0IscUJBQXFCLHNCQUFzQixtQ0FBbUMsOEJBQThCLHVDQUF1QywwQkFBMEIsK0JBQStCLG9HQUFvRyx3Q0FBd0MsV0FBVyxTQUFTLE9BQU8sS0FBSyxHQUFHLEtBQUs7QUFDcmdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vY29tcG9uZW50cy9IZWFkZXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuSGVhZGVyX2hlYWRlcl9fM1otcTAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcbi5IZWFkZXJfaGVhZGVyX18zWi1xMC5IZWFkZXJfY29sb3JlZF9fMi12UmYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcXG59XFxuLkhlYWRlcl9oZWFkZXJfXzNaLXEwID4gZGl2IHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDgwcHg7XFxufVxcbi5IZWFkZXJfaGVhZGVyX18zWi1xMCA+IGRpdiA+IGgxIHtcXG4gIC1tb3otYm94LWZsZXg6IDE7XFxuICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLkhlYWRlcl9oZWFkZXJfXzNaLXEwID4gZGl2ID4gbmF2IHtcXG4gIGRpc3BsYXk6IC1tb3otYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG4uSGVhZGVyX2hlYWRlcl9fM1otcTAgPiBkaXYgPiBuYXYgPiBhIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgY29sb3I6ICNjNzk0MDA7XFxufVxcbi5IZWFkZXJfaGVhZGVyX18zWi1xMCA+IGRpdiA+IGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgLkhlYWRlcl9oZWFkZXJfXzNaLXEwID4gZGl2ID4gYnV0dG9uIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgfVxcbiAgLkhlYWRlcl9oZWFkZXJfXzNaLXEwID4gZGl2ID4gbmF2IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5IZWFkZXJfaGVhZGVyX18zWi1xMCA+IGRpdltkYXRhLW9wZW49dHJ1ZV0gPiBuYXYge1xcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiA2MHB4O1xcbiAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gICAgYm94LXNoYWRvdzogMCA1MHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9yb20vY29kaW5nL1Byb2pla3RlL1BoeXNpb19IUC9jb21wb25lbnRzL0hlYWRlci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLHVCQUFBO0VBRUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0Esc0NBQUE7QUFIRjtBQUlFO0VBQ0Usc0JBQUE7QUFGSjtBQUlFO0VBQ0UsaUJBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7T0FBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFGSjtBQUlJO0VBQ0UsZ0JBQUE7T0FBQSxZQUFBO0VBQ0EsWUFBQTtBQUZOO0FBSUk7RUFDRSxpQkFBQTtFQUFBLGFBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQUZOO0FBR007RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0EvQkc7QUE4Qlg7QUFLSTtFQUNFLGFBQUE7QUFITjtBQUtJO0VBQ0U7SUFDRSxlQUFBO0VBSE47RUFLSTtJQUNFLGFBQUE7RUFITjtFQU1NO0lBQ0UsaUJBQUE7SUFBQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLHlCQUFBO0lBQUEsMEJBQUE7U0FBQSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSwwRUFBQTtJQUVBLHlCQXpEQztFQW9EVDtBQUNGXCIsXCJmaWxlXCI6XCJIZWFkZXIubW9kdWxlLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGdvbGQtY2xyOiAjYzc5NDAwO1xcbiRibGNrLWNscjogI2ZmZmZmZjtcXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLy8gYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxuICAmLmNvbG9yZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xcbiAgfVxcbiAgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcblxcbiAgICA+IGgxIHtcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICB9XFxuICAgID4gbmF2IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGdhcDogMXJlbTtcXG4gICAgICA+IGEge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgICAgICBjb2xvcjogJGdvbGQtY2xyO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICA+IGJ1dHRvbiB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgICAgID4gYnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICB9XFxuICAgICAgPiBuYXYge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICB9XFxuICAgICAgJltkYXRhLW9wZW49XFxcInRydWVcXFwiXSB7XFxuICAgICAgICA+IG5hdiB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICAgIHRvcDogNjBweDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksXFxuICAgICAgICAgICAgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGNrLWNscjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fM1otcTBcIixcblx0XCJjb2xvcmVkXCI6IFwiSGVhZGVyX2NvbG9yZWRfXzItdlJmXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/Header.module.scss\n");

/***/ })

})