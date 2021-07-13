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
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Projetos\\imersao-react-projeto\\alurakut\\alurakut\\pages\\index.js";



function ProfileSideBar() {
  var gitHubUser = 'gabriel-elesbao';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "https://github.com/".concat(gitHubUser, ".png"),
      style: {
        borderRadius: '8px'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 8
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

_c = ProfileSideBar;
function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainGrid__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "profileArea",
      style: {
        gridArea: 'profileArea'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileSideBar, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
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
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "profileRelationsArea",
      style: {
        gridArea: 'profileRelationsArea'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {
        children: "Pessoas da comunidade"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {
        children: "Comunidades"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZVNpZGVCYXIiLCJnaXRIdWJVc2VyIiwiYm9yZGVyUmFkaXVzIiwiSG9tZSIsImdyaWRBcmVhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxHQUF5QjtBQUN2QixNQUFNQyxVQUFVLEdBQUcsaUJBQW5CO0FBQ0Esc0JBQ0UsOERBQUMsd0RBQUQ7QUFBQSwyQkFDRztBQUFLLFNBQUcsK0JBQXlCQSxVQUF6QixTQUFSO0FBQW9ELFdBQUssRUFBRTtBQUFDQyxvQkFBWSxFQUFDO0FBQWQ7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztLQVBRRixjO0FBVU0sU0FBU0csSUFBVCxHQUFnQjtBQUk3QixzQkFDRSw4REFBQyw2REFBRDtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBNEIsV0FBSyxFQUFFO0FBQUNDLGdCQUFRLEVBQUM7QUFBVixPQUFuQztBQUFBLDZCQUNJLDhEQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBNkIsV0FBSyxFQUFFO0FBQUNBLGdCQUFRLEVBQUM7QUFBVixPQUFwQztBQUFBLDZCQUNFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBV0U7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBcUMsV0FBSyxFQUFFO0FBQUNBLGdCQUFRLEVBQUM7QUFBVixPQUE1QztBQUFBLDhCQUNFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBdUJEO01BM0J1QkQsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yZGIwYmI0NTIwMTFmNWVmNWEyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1haW5HcmlkIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL01haW5HcmlkJ1xuaW1wb3J0IEJveCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Cb3gnXG5cbmZ1bmN0aW9uIFByb2ZpbGVTaWRlQmFyKCl7XG4gIGNvbnN0IGdpdEh1YlVzZXIgPSAnZ2FicmllbC1lbGVzYmFvJ1xuICByZXR1cm4oXG4gICAgPEJveD5cbiAgICAgICA8aW1nIHNyYyA9e2BodHRwczovL2dpdGh1Yi5jb20vJHtnaXRIdWJVc2VyfS5wbmdgIH0gc3R5bGU9e3tib3JkZXJSYWRpdXM6JzhweCd9fS8+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gXG5cbiAgcmV0dXJuIChcbiAgICA8TWFpbkdyaWQ+IFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2ZpbGVBcmVhJ3N0eWxlPXt7Z3JpZEFyZWE6J3Byb2ZpbGVBcmVhJ319PlxuICAgICAgICAgIDxQcm9maWxlU2lkZUJhciAvPlxuICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VsY29tZUFyZWEnIHN0eWxlPXt7Z3JpZEFyZWE6J3dlbGNvbWVBcmVhJ319PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIEJlbSB2aW5kb1xuICAgICAgICA8L0JveD5cbiAgICAgIDwvZGl2PiBcbiAgICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZmlsZVJlbGF0aW9uc0FyZWEnc3R5bGU9e3tncmlkQXJlYToncHJvZmlsZVJlbGF0aW9uc0FyZWEnfX0+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgUGVzc29hcyBkYSBjb211bmlkYWRlXG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIENvbXVuaWRhZGVzXG4gICAgICAgIDwvQm94PlxuICAgICAgPC9kaXY+IFxuXG4gICAgPC9NYWluR3JpZD5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==