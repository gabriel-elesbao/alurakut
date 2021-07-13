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
      lineNumber: 9,
      columnNumber: 8
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_c = ProfileSideBar;
function Home() {
  var gitHubUser = 'gabriel-elesbao';
  var pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho'];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_lib_alurakutCommons__WEBPACK_IMPORTED_MODULE_3__.AlurakutMenu, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
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
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
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
          lineNumber: 35,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "profileRelationsArea",
        style: {
          gridArea: 'profileRelationsArea'
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: "Pessoas da comunidade"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZVNpZGVCYXIiLCJwcm9wcyIsImdpdEh1YlVzZXIiLCJib3JkZXJSYWRpdXMiLCJIb21lIiwicGVzc29hc0Zhdm9yaXRhcyIsImdyaWRBcmVhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQThCO0FBQzVCLHNCQUVFLDhEQUFDLHdEQUFEO0FBQUEsMkJBQ0c7QUFBSyxTQUFHLCtCQUF5QkEsS0FBSyxDQUFDQyxVQUEvQixTQUFSO0FBQTBELFdBQUssRUFBRTtBQUFDQyxvQkFBWSxFQUFDO0FBQWQ7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQU1EOztLQVBRSCxjO0FBVU0sU0FBU0ksSUFBVCxHQUFnQjtBQUM3QixNQUFNRixVQUFVLEdBQUcsaUJBQW5CO0FBQ0EsTUFBTUcsZ0JBQWdCLEdBQUcsQ0FDckIsY0FEcUIsRUFFckIsYUFGcUIsRUFHckIsTUFIcUIsRUFJckIsZUFKcUIsRUFLckIsZUFMcUIsRUFNckIsY0FOcUIsQ0FBekI7QUFTQSxzQkFDRTtBQUFBLDRCQUNBLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBLDhEQUFDLDZEQUFEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBNEIsYUFBSyxFQUFFO0FBQUNDLGtCQUFRLEVBQUM7QUFBVixTQUFuQztBQUFBLCtCQUNJLDhEQUFDLGNBQUQ7QUFBZ0Isb0JBQVUsRUFBRUo7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQTZCLGFBQUssRUFBRTtBQUFDSSxrQkFBUSxFQUFDO0FBQVYsU0FBcEM7QUFBQSwrQkFDRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVdFO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFxQyxhQUFLLEVBQUU7QUFBQ0Esa0JBQVEsRUFBQztBQUFWLFNBQTVDO0FBQUEsK0JBQ0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkE7QUFBQSxrQkFERjtBQXVCRDtNQWxDdUJGLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjk1YjUyNGVjYzNlM2EyZTUyOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYWluR3JpZCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NYWluR3JpZCdcbmltcG9ydCBCb3ggZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQm94J1xuaW1wb3J0IHtBbHVyYWt1dE1lbnV9IGZyb20gJy4uL3NyYy9saWIvYWx1cmFrdXRDb21tb25zJ1xuXG5mdW5jdGlvbiBQcm9maWxlU2lkZUJhcihwcm9wcyl7XG4gIHJldHVybihcbiAgICBcbiAgICA8Qm94PlxuICAgICAgIDxpbWcgc3JjID17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3Byb3BzLmdpdEh1YlVzZXJ9LnBuZ2AgfSBzdHlsZT17e2JvcmRlclJhZGl1czonOHB4J319Lz5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGdpdEh1YlVzZXIgPSAnZ2FicmllbC1lbGVzYmFvJ1xuICBjb25zdCBwZXNzb2FzRmF2b3JpdGFzID0gW1xuICAgICAgJ2p1dW5lZ3JlaXJvcycsXG4gICAgICAnb21hcmlvc291dG8nLFxuICAgICAgJ3BlYXMnLFxuICAgICAgJ3JhZmFiYWxsZXJpbmknLFxuICAgICAgJ21hcmNvYnJ1bm9kZXYnLFxuICAgICAgJ2ZlbGlwZWZpYWxobydcbiAgICBdXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxBbHVyYWt1dE1lbnUvPlxuICAgIDxNYWluR3JpZD4gXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZmlsZUFyZWEnc3R5bGU9e3tncmlkQXJlYToncHJvZmlsZUFyZWEnfX0+XG4gICAgICAgICAgPFByb2ZpbGVTaWRlQmFyIGdpdEh1YlVzZXI9e2dpdEh1YlVzZXJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWxjb21lQXJlYScgc3R5bGU9e3tncmlkQXJlYTond2VsY29tZUFyZWEnfX0+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgQmVtIHZpbmRvXG4gICAgICAgIDwvQm94PlxuICAgICAgPC9kaXY+IFxuICAgICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlUmVsYXRpb25zQXJlYSdzdHlsZT17e2dyaWRBcmVhOidwcm9maWxlUmVsYXRpb25zQXJlYSd9fT5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICBQZXNzb2FzIGRhIGNvbXVuaWRhZGVcbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L2Rpdj4gXG5cbiAgICA8L01haW5HcmlkPlxuICAgPC8+IFxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9