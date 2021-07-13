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
  var _this = this;

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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "smallTitle",
            children: ["Pessoas da comunidade", pessoasFavoritas.lenght]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: pessoasFavoritas.map(function (itemAtual) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "/users/".concat(itemAtual),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "https://github.com/".concat(itemAtual, ".png")
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: itemAtual
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 19
                }, _this)]
              }, itemAtual, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZVNpZGVCYXIiLCJwcm9wcyIsImdpdEh1YlVzZXIiLCJib3JkZXJSYWRpdXMiLCJIb21lIiwicGVzc29hc0Zhdm9yaXRhcyIsImdyaWRBcmVhIiwibGVuZ2h0IiwibWFwIiwiaXRlbUF0dWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQThCO0FBQzVCLHNCQUVFLDhEQUFDLHdEQUFEO0FBQUEsMkJBQ0c7QUFBSyxTQUFHLCtCQUF5QkEsS0FBSyxDQUFDQyxVQUEvQixTQUFSO0FBQTBELFdBQUssRUFBRTtBQUFDQyxvQkFBWSxFQUFDO0FBQWQ7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQU1EOztLQVBRSCxjO0FBVU0sU0FBU0ksSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNRixVQUFVLEdBQUcsaUJBQW5CO0FBQ0EsTUFBTUcsZ0JBQWdCLEdBQUcsQ0FDckIsY0FEcUIsRUFFckIsYUFGcUIsRUFHckIsTUFIcUIsRUFJckIsZUFKcUIsRUFLckIsZUFMcUIsRUFNckIsY0FOcUIsQ0FBekI7QUFTQSxzQkFDRTtBQUFBLDRCQUNBLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBLDhEQUFDLDZEQUFEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBNEIsYUFBSyxFQUFFO0FBQUNDLGtCQUFRLEVBQUM7QUFBVixTQUFuQztBQUFBLCtCQUNJLDhEQUFDLGNBQUQ7QUFBZ0Isb0JBQVUsRUFBRUo7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQTZCLGFBQUssRUFBRTtBQUFDSSxrQkFBUSxFQUFDO0FBQVYsU0FBcEM7QUFBQSwrQkFDRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVdFO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFxQyxhQUFLLEVBQUU7QUFBQ0Esa0JBQVEsRUFBQztBQUFWLFNBQTVDO0FBQUEsK0JBQ0UsOERBQUMsd0RBQUQ7QUFBQSxrQ0FFRTtBQUFJLHFCQUFTLEVBQUMsWUFBZDtBQUFBLGdEQUUwQkQsZ0JBQWdCLENBQUNFLE1BRjNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixlQVFFO0FBQUEsc0JBQ0dGLGdCQUFnQixDQUFDRyxHQUFqQixDQUFxQixVQUFDQyxTQUFELEVBQWE7QUFDakMsa0NBQ0U7QUFBRyxvQkFBSSxtQkFBWUEsU0FBWixDQUFQO0FBQUEsd0NBQ0U7QUFBSyxxQkFBRywrQkFBd0JBLFNBQXhCO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUEsNEJBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBLGlCQUFxQ0EsU0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQU9ELGFBUkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQTtBQUFBLGtCQURGO0FBeUNEO01BcER1QkwsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kY2E2ODZkYWIwZGU5N2Q4MjM1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1haW5HcmlkIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL01haW5HcmlkJ1xuaW1wb3J0IEJveCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Cb3gnXG5pbXBvcnQge0FsdXJha3V0TWVudX0gZnJvbSAnLi4vc3JjL2xpYi9hbHVyYWt1dENvbW1vbnMnXG5cbmZ1bmN0aW9uIFByb2ZpbGVTaWRlQmFyKHByb3BzKXtcbiAgcmV0dXJuKFxuICAgIFxuICAgIDxCb3g+XG4gICAgICAgPGltZyBzcmMgPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7cHJvcHMuZ2l0SHViVXNlcn0ucG5nYCB9IHN0eWxlPXt7Ym9yZGVyUmFkaXVzOic4cHgnfX0vPlxuICAgIDwvQm94PlxuICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgZ2l0SHViVXNlciA9ICdnYWJyaWVsLWVsZXNiYW8nXG4gIGNvbnN0IHBlc3NvYXNGYXZvcml0YXMgPSBbXG4gICAgICAnanV1bmVncmVpcm9zJyxcbiAgICAgICdvbWFyaW9zb3V0bycsXG4gICAgICAncGVhcycsXG4gICAgICAncmFmYWJhbGxlcmluaScsXG4gICAgICAnbWFyY29icnVub2RldicsXG4gICAgICAnZmVsaXBlZmlhbGhvJ1xuICAgIF1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPEFsdXJha3V0TWVudS8+XG4gICAgPE1haW5HcmlkPiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlQXJlYSdzdHlsZT17e2dyaWRBcmVhOidwcm9maWxlQXJlYSd9fT5cbiAgICAgICAgICA8UHJvZmlsZVNpZGVCYXIgZ2l0SHViVXNlcj17Z2l0SHViVXNlcn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3dlbGNvbWVBcmVhJyBzdHlsZT17e2dyaWRBcmVhOid3ZWxjb21lQXJlYSd9fT5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICBCZW0gdmluZG9cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L2Rpdj4gXG4gICAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2ZpbGVSZWxhdGlvbnNBcmVhJ3N0eWxlPXt7Z3JpZEFyZWE6J3Byb2ZpbGVSZWxhdGlvbnNBcmVhJ319PlxuICAgICAgICA8Qm94PlxuXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nc21hbGxUaXRsZSc+XG5cbiAgICAgICAgICAgICAgUGVzc29hcyBkYSBjb211bmlkYWRle3Blc3NvYXNGYXZvcml0YXMubGVuZ2h0fVxuICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgIFxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtwZXNzb2FzRmF2b3JpdGFzLm1hcCgoaXRlbUF0dWFsKT0+e1xuICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YC91c2Vycy8ke2l0ZW1BdHVhbH1gfSBrZXk9e2l0ZW1BdHVhbH0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke2l0ZW1BdHVhbH0ucG5nYH0gLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtQXR1YWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgKSBcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgXG4gICAgICAgIDwvQm94PlxuICAgICAgPC9kaXY+IFxuXG4gICAgPC9NYWluR3JpZD5cbiAgIDwvPiBcbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==