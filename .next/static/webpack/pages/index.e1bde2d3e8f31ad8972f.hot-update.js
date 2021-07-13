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
          children: ["Pessoas da comunidade", pessoasFavoritas.map(function (itemAtual) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              children: itemAtual
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 20
            }, _this);
          })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUHJvZmlsZVNpZGVCYXIiLCJwcm9wcyIsImdpdEh1YlVzZXIiLCJib3JkZXJSYWRpdXMiLCJIb21lIiwicGVzc29hc0Zhdm9yaXRhcyIsImdyaWRBcmVhIiwibWFwIiwiaXRlbUF0dWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQThCO0FBQzVCLHNCQUVFLDhEQUFDLHdEQUFEO0FBQUEsMkJBQ0c7QUFBSyxTQUFHLCtCQUF5QkEsS0FBSyxDQUFDQyxVQUEvQixTQUFSO0FBQTBELFdBQUssRUFBRTtBQUFDQyxvQkFBWSxFQUFDO0FBQWQ7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQU1EOztLQVBRSCxjO0FBVU0sU0FBU0ksSUFBVCxHQUFnQjtBQUFBOztBQUM3QixNQUFNRixVQUFVLEdBQUcsaUJBQW5CO0FBQ0EsTUFBTUcsZ0JBQWdCLEdBQUcsQ0FDckIsY0FEcUIsRUFFckIsYUFGcUIsRUFHckIsTUFIcUIsRUFJckIsZUFKcUIsRUFLckIsZUFMcUIsRUFNckIsY0FOcUIsQ0FBekI7QUFTQSxzQkFDRTtBQUFBLDRCQUNBLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBLDhEQUFDLDZEQUFEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBNEIsYUFBSyxFQUFFO0FBQUNDLGtCQUFRLEVBQUM7QUFBVixTQUFuQztBQUFBLCtCQUNJLDhEQUFDLGNBQUQ7QUFBZ0Isb0JBQVUsRUFBRUo7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQTZCLGFBQUssRUFBRTtBQUFDSSxrQkFBUSxFQUFDO0FBQVYsU0FBcEM7QUFBQSwrQkFDRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQVdFO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFxQyxhQUFLLEVBQUU7QUFBQ0Esa0JBQVEsRUFBQztBQUFWLFNBQTVDO0FBQUEsK0JBQ0UsOERBQUMsd0RBQUQ7QUFBQSw4Q0FFR0QsZ0JBQWdCLENBQUNFLEdBQWpCLENBQXFCLFVBQUNDLFNBQUQsRUFBYTtBQUNqQyxnQ0FBTztBQUFBLHdCQUFLQTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFDRCxXQUZBLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBO0FBQUEsa0JBREY7QUEwQkQ7TUFyQ3VCSixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxYmRlMmQzZThmMzFhZDg5NzJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWFpbkdyaWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTWFpbkdyaWQnXG5pbXBvcnQgQm94IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0JveCdcbmltcG9ydCB7QWx1cmFrdXRNZW51fSBmcm9tICcuLi9zcmMvbGliL2FsdXJha3V0Q29tbW9ucydcblxuZnVuY3Rpb24gUHJvZmlsZVNpZGVCYXIocHJvcHMpe1xuICByZXR1cm4oXG4gICAgXG4gICAgPEJveD5cbiAgICAgICA8aW1nIHNyYyA9e2BodHRwczovL2dpdGh1Yi5jb20vJHtwcm9wcy5naXRIdWJVc2VyfS5wbmdgIH0gc3R5bGU9e3tib3JkZXJSYWRpdXM6JzhweCd9fS8+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBnaXRIdWJVc2VyID0gJ2dhYnJpZWwtZWxlc2JhbydcbiAgY29uc3QgcGVzc29hc0Zhdm9yaXRhcyA9IFtcbiAgICAgICdqdXVuZWdyZWlyb3MnLFxuICAgICAgJ29tYXJpb3NvdXRvJyxcbiAgICAgICdwZWFzJyxcbiAgICAgICdyYWZhYmFsbGVyaW5pJyxcbiAgICAgICdtYXJjb2JydW5vZGV2JyxcbiAgICAgICdmZWxpcGVmaWFsaG8nXG4gICAgXVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8QWx1cmFrdXRNZW51Lz5cbiAgICA8TWFpbkdyaWQ+IFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2ZpbGVBcmVhJ3N0eWxlPXt7Z3JpZEFyZWE6J3Byb2ZpbGVBcmVhJ319PlxuICAgICAgICAgIDxQcm9maWxlU2lkZUJhciBnaXRIdWJVc2VyPXtnaXRIdWJVc2VyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VsY29tZUFyZWEnIHN0eWxlPXt7Z3JpZEFyZWE6J3dlbGNvbWVBcmVhJ319PlxuICAgICAgICA8Qm94PlxuICAgICAgICAgIEJlbSB2aW5kb1xuICAgICAgICA8L0JveD5cbiAgICAgIDwvZGl2PiBcbiAgICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZmlsZVJlbGF0aW9uc0FyZWEnc3R5bGU9e3tncmlkQXJlYToncHJvZmlsZVJlbGF0aW9uc0FyZWEnfX0+XG4gICAgICAgIDxCb3g+XG4gICAgICAgICAgUGVzc29hcyBkYSBjb211bmlkYWRlXG4gICAgICAgICAge3Blc3NvYXNGYXZvcml0YXMubWFwKChpdGVtQXR1YWwpPT57XG4gICAgICAgICAgICByZXR1cm4gPGxpPntpdGVtQXR1YWx9PC9saT5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L2Rpdj4gXG5cbiAgICA8L01haW5HcmlkPlxuICAgPC8+IFxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9