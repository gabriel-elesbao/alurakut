self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_MainGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/MainGrid */ "./src/components/MainGrid/index.js");
/* harmony import */ var _src_components_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Box */ "./src/components/Box/index.js");
/* harmony import */ var _src_lib_alurakutCommons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/lib/alurakutCommons */ "./src/lib/alurakutCommons.js");
/* harmony import */ var _src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/ProfileRelations */ "./src/components/ProfileRelations/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Projetos\\imersao-react-projeto\\alurakut\\alurakut\\pages\\index.js";





function ProfileSideBar(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "https://github.com/".concat(props.gitHubUser, ".png"),
      style: {
        borderRadius: '8px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 8
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_c = ProfileSideBar;
function Home() {
  var _this = this;

  var gitHubUser = 'gabriel-elesbao';
  var pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho'];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_alurakutCommons__WEBPACK_IMPORTED_MODULE_3__.AlurakutMenu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainGrid__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileArea",
        style: {
          gridArea: 'profileArea'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileSideBar, {
          gitHubUser: gitHubUser
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "welcomeArea",
        style: {
          gridArea: 'welcomeArea'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: "Bem vindo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileRelationsArea",
        style: {
          gridArea: 'profileRelationsArea'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_ProfileRelations__WEBPACK_IMPORTED_MODULE_4__.ProfileRelationsBoxWrapper, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Pessoas da comunidade ", pessoasFavoritas.length]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: pessoasFavoritas.map(function (itemAtual) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "/users/".concat(itemAtual),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "https://github.com/".concat(itemAtual, ".png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: itemAtual
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 23
                }, _this)]
              }, itemAtual, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 21
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}
_c2 = Home;

var _c, _c2;

$RefreshReg$(_c, "ProfileSideBar");
$RefreshReg$(_c2, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/components/ProfileRelations/index.js":
/*!**************************************************!*\
  !*** ./src/components/ProfileRelations/index.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileRelationsBoxWrapper": function() { return /* binding */ ProfileRelationsBoxWrapper; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Box */ "./src/components/Box/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var ProfileRelationsBoxWrapper = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(_Box__WEBPACK_IMPORTED_MODULE_0__.default).withConfig({
  displayName: "ProfileRelations__ProfileRelationsBoxWrapper",
  componentId: "sc-1oq1c3b-0"
})(["ul{display:grid;grid-gap:8px;grid-template-columns:1fr 1fr 1fr;max-height:220px;list-style:none;}img{object-fit:cover;background-position:center center;width:100%;height:100%;position:relative;}ul li a{display:inline-block;height:102px;position:relative;overflow:hidden;border-radius:8px;span{color:#FFFFFF;font-size:10px;position:absolute;left:0;bottom:10px;z-index:2;padding:0 4px;overflow:hidden;text-overflow:ellipsis;width:100%;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;}&:after{content:\"\";display:block;position:absolute;top:0;right:0;left:0;bottom:0;z-indeX:1;background-image:linear-gradient(0deg,#00000073,transparent);}}"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVSZWxhdGlvbnMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZVNpZGVCYXIiLCJwcm9wcyIsImdpdEh1YlVzZXIiLCJib3JkZXJSYWRpdXMiLCJIb21lIiwicGVzc29hc0Zhdm9yaXRhcyIsImdyaWRBcmVhIiwibGVuZ3RoIiwibWFwIiwiaXRlbUF0dWFsIiwiUHJvZmlsZVJlbGF0aW9uc0JveFdyYXBwZXIiLCJzdHlsZWQiLCJCb3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBOEI7QUFDNUIsc0JBRUUsOERBQUMsd0RBQUQ7QUFBQSwyQkFDRztBQUFLLFNBQUcsK0JBQXlCQSxLQUFLLENBQUNDLFVBQS9CLFNBQVI7QUFBMEQsV0FBSyxFQUFFO0FBQUNDLG9CQUFZLEVBQUM7QUFBZDtBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGO0FBTUQ7O0tBUFFILGM7QUFVTSxTQUFTSSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1GLFVBQVUsR0FBRyxpQkFBbkI7QUFDQSxNQUFNRyxnQkFBZ0IsR0FBRyxDQUNyQixjQURxQixFQUVyQixhQUZxQixFQUdyQixNQUhxQixFQUlyQixlQUpxQixFQUtyQixlQUxxQixFQU1yQixjQU5xQixDQUF6QjtBQVNBLHNCQUNFO0FBQUEsNEJBQ0EsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUEsOERBQUMsNkRBQUQ7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUE0QixhQUFLLEVBQUU7QUFBQ0Msa0JBQVEsRUFBQztBQUFWLFNBQW5DO0FBQUEsK0JBQ0ksOERBQUMsY0FBRDtBQUFnQixvQkFBVSxFQUFFSjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBNkIsYUFBSyxFQUFFO0FBQUNJLGtCQUFRLEVBQUM7QUFBVixTQUFwQztBQUFBLCtCQUNFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBV0U7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQXFDLGFBQUssRUFBRTtBQUFDQSxrQkFBUSxFQUFDO0FBQVYsU0FBNUM7QUFBQSwrQkFDRSw4REFBQyx3RkFBRDtBQUFBLGtDQUNNO0FBQUkscUJBQVMsRUFBQyxZQUFkO0FBQUEsaURBQzJCRCxnQkFBZ0IsQ0FBQ0UsTUFENUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUROLGVBTU07QUFBQSxzQkFDS0YsZ0JBQWdCLENBQUNHLEdBQWpCLENBQXFCLFVBQUNDLFNBQUQsRUFBYTtBQUNuQyxrQ0FDRTtBQUFHLG9CQUFJLG1CQUFZQSxTQUFaLENBQVA7QUFBQSx3Q0FDRTtBQUFLLHFCQUFHLCtCQUF3QkEsU0FBeEI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQSw0QkFBT0E7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUEsaUJBQXFDQSxTQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBT0MsYUFSQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBO0FBQUEsa0JBREY7QUEwQ0Q7TUFyRHVCTCxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnhCO0FBQ0E7QUFFTyxJQUFNTSwwQkFBMEIsR0FBR0MsMERBQU0sQ0FBQ0MseUNBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwycEJBQWhDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE1YTY3MjI2MzdmM2Q0MjBjNmYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkdyaWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTWFpbkdyaWQnXG5pbXBvcnQgQm94IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0JveCdcbmltcG9ydCB7QWx1cmFrdXRNZW51fSBmcm9tICcuLi9zcmMvbGliL2FsdXJha3V0Q29tbW9ucydcbmltcG9ydCB7IFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyIH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZVJlbGF0aW9ucydcblxuZnVuY3Rpb24gUHJvZmlsZVNpZGVCYXIocHJvcHMpe1xuICByZXR1cm4oXG4gICAgXG4gICAgPEJveD5cbiAgICAgICA8aW1nIHNyYyA9e2BodHRwczovL2dpdGh1Yi5jb20vJHtwcm9wcy5naXRIdWJVc2VyfS5wbmdgIH0gc3R5bGU9e3tib3JkZXJSYWRpdXM6JzhweCd9fS8+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBnaXRIdWJVc2VyID0gJ2dhYnJpZWwtZWxlc2JhbydcbiAgY29uc3QgcGVzc29hc0Zhdm9yaXRhcyA9IFtcbiAgICAgICdqdXVuZWdyZWlyb3MnLFxuICAgICAgJ29tYXJpb3NvdXRvJyxcbiAgICAgICdwZWFzJyxcbiAgICAgICdyYWZhYmFsbGVyaW5pJyxcbiAgICAgICdtYXJjb2JydW5vZGV2JyxcbiAgICAgICdmZWxpcGVmaWFsaG8nXG4gICAgXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8QWx1cmFrdXRNZW51Lz5cbiAgICA8TWFpbkdyaWQ+IFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2ZpbGVBcmVhJ3N0eWxlPXt7Z3JpZEFyZWE6J3Byb2ZpbGVBcmVhJ319PlxuICAgICAgICAgIDxQcm9maWxlU2lkZUJhciBnaXRIdWJVc2VyPXtnaXRIdWJVc2VyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VsY29tZUFyZWEnIHN0eWxlPXt7Z3JpZEFyZWE6J3dlbGNvbWVBcmVhJ319PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIEJlbSB2aW5kb1xuICAgICAgICA8L0JveD5cbiAgICAgIDwvZGl2PiBcbiAgICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZmlsZVJlbGF0aW9uc0FyZWEnc3R5bGU9e3tncmlkQXJlYToncHJvZmlsZVJlbGF0aW9uc0FyZWEnfX0+XG4gICAgICAgIDxQcm9maWxlUmVsYXRpb25zQm94V3JhcHBlcj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nc21hbGxUaXRsZSc+XG4gICAgICAgICAgICAgICAgICBQZXNzb2FzIGRhIGNvbXVuaWRhZGUge3Blc3NvYXNGYXZvcml0YXMubGVuZ3RofVxuICAgICAgICAgICAgICA8L2gyPlxuXG5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge3Blc3NvYXNGYXZvcml0YXMubWFwKChpdGVtQXR1YWwpPT57XG4gICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvdXNlcnMvJHtpdGVtQXR1YWx9YH0ga2V5PXtpdGVtQXR1YWx9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7aXRlbUF0dWFsfS5wbmdgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgKSBcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L1Byb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyPlxuXG4gICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgXG4gICAgICA8L2Rpdj4gXG5cbiAgICA8L01haW5HcmlkPlxuICAgPC8+IFxuICApXG59XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEJveCBmcm9tICcuLi9Cb3gnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVSZWxhdGlvbnNCb3hXcmFwcGVyID0gc3R5bGVkKEJveClgXHJcbiAgdWwge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtZ2FwOiA4cHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyBcclxuICAgIG1heC1oZWlnaHQ6IDIyMHB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICB1bCBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMTAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgei1pbmRlWDogMTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIzAwMDAwMDczLHRyYW5zcGFyZW50KTtcclxuICAgIH1cclxuICB9XHJcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==