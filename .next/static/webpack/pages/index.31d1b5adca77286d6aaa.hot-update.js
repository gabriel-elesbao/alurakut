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



function ProfileSideBar(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Box__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "https://github.com/".concat(props.gitHubUser, ".png"),
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
  var gitHubUser = 'gabriel-elesbao';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_MainGrid__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "profileArea",
      style: {
        gridArea: 'profileArea'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileSideBar, {
        gitHubUser: gitHubUser
      }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZVNpZGVCYXIiLCJwcm9wcyIsImdpdEh1YlVzZXIiLCJib3JkZXJSYWRpdXMiLCJIb21lIiwiZ3JpZEFyZWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUE4QjtBQUM1QixzQkFFRSw4REFBQyx3REFBRDtBQUFBLDJCQUNHO0FBQUssU0FBRywrQkFBeUJBLEtBQUssQ0FBQ0MsVUFBL0IsU0FBUjtBQUEwRCxXQUFLLEVBQUU7QUFBQ0Msb0JBQVksRUFBQztBQUFkO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkY7QUFNRDs7S0FQUUgsYztBQVVNLFNBQVNJLElBQVQsR0FBZ0I7QUFDN0IsTUFBTUYsVUFBVSxHQUFHLGlCQUFuQjtBQUdBLHNCQUNFLDhEQUFDLDZEQUFEO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUE0QixXQUFLLEVBQUU7QUFBQ0csZ0JBQVEsRUFBQztBQUFWLE9BQW5DO0FBQUEsNkJBQ0ksOERBQUMsY0FBRDtBQUFnQixrQkFBVSxFQUFFSDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUE2QixXQUFLLEVBQUU7QUFBQ0csZ0JBQVEsRUFBQztBQUFWLE9BQXBDO0FBQUEsNkJBQ0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFXRTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFxQyxXQUFLLEVBQUU7QUFBQ0EsZ0JBQVEsRUFBQztBQUFWLE9BQTVDO0FBQUEsOEJBQ0UsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1QkQ7TUEzQnVCRCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjMxZDFiNWFkY2E3NzI4NmQ2YWFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkdyaWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTWFpbkdyaWQnXG5pbXBvcnQgQm94IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0JveCdcblxuZnVuY3Rpb24gUHJvZmlsZVNpZGVCYXIocHJvcHMpe1xuICByZXR1cm4oXG4gICAgXG4gICAgPEJveD5cbiAgICAgICA8aW1nIHNyYyA9e2BodHRwczovL2dpdGh1Yi5jb20vJHtwcm9wcy5naXRIdWJVc2VyfS5wbmdgIH0gc3R5bGU9e3tib3JkZXJSYWRpdXM6JzhweCd9fS8+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBnaXRIdWJVc2VyID0gJ2dhYnJpZWwtZWxlc2JhbydcbiBcblxuICByZXR1cm4gKFxuICAgIDxNYWluR3JpZD4gXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZmlsZUFyZWEnc3R5bGU9e3tncmlkQXJlYToncHJvZmlsZUFyZWEnfX0+XG4gICAgICAgICAgPFByb2ZpbGVTaWRlQmFyIGdpdEh1YlVzZXI9e2dpdEh1YlVzZXJ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWxjb21lQXJlYScgc3R5bGU9e3tncmlkQXJlYTond2VsY29tZUFyZWEnfX0+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgQmVtIHZpbmRvXG4gICAgICAgIDwvQm94PlxuICAgICAgPC9kaXY+IFxuICAgICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlUmVsYXRpb25zQXJlYSdzdHlsZT17e2dyaWRBcmVhOidwcm9maWxlUmVsYXRpb25zQXJlYSd9fT5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICBQZXNzb2FzIGRhIGNvbXVuaWRhZGVcbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgQ29tdW5pZGFkZXNcbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L2Rpdj4gXG5cbiAgICA8L01haW5HcmlkPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9