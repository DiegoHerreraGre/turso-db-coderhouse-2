"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/addperson",{

/***/ "./pages/addperson.jsx":
/*!*****************************!*\
  !*** ./pages/addperson.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ addPerson; }\n/* harmony export */ });\n/* harmony import */ var _Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/diegoherreragre/CursorProjects/portafolio-dhg/client/pages/addperson.jsx\",\n  _s2 = $RefreshSig$();\n\n\n\n\nfunction addPerson() {\n  _s2();\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState({\n      name: \"\",\n      lastname: \"\",\n      age: \"\",\n      phone: \"\",\n      email: \"\"\n    }),\n    _React$useState2 = (0,_Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n    person = _React$useState2[0],\n    setPerson = _React$useState2[1];\n  function addedPerson(_x) {\n    return _addedPerson.apply(this, arguments);\n  }\n  function _addedPerson() {\n    var _s = $RefreshSig$();\n    _addedPerson = _s((0,_Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_s( /*#__PURE__*/_Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(e) {\n      return _Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) switch (_context2.prev = _context2.next) {\n          case 0:\n            _s();\n            person = {\n              name: e.target.name.value,\n              lastname: e.target.lastname.value,\n              age: e.target.age.value,\n              phone: e.target.phone.value,\n              email: e.target.email.value\n            };\n            console.table(person);\n            react__WEBPACK_IMPORTED_MODULE_3___default().useEffect( /*#__PURE__*/(0,_Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n              return _Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n                while (1) switch (_context.prev = _context.next) {\n                  case 0:\n                    _context.next = 2;\n                    return addedPerson();\n                  case 2:\n                    fetch(\"localhost:8080/recieve\", {\n                      method: \"POST\",\n                      headers: {\n                        \"Content-Type\": \"application/json\"\n                      },\n                      body: JSON.stringify(setPerson)\n                    });\n                    console.table(setPerson);\n                  case 4:\n                  case \"end\":\n                    return _context.stop();\n                }\n              }, _callee);\n            })), []);\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }, _callee2);\n    }), \"OD7bBpZva5O2jO+Puf00hKivP7c=\")), \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n    return _addedPerson.apply(this, arguments);\n  }\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n      children: \"Add Person\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"text\",\n      placeholder: \"Name\",\n      name: \"name\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"text\",\n      placeholder: \"LastName\",\n      name: \"lastname\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"number\",\n      placeholder: \"Age\",\n      name: \"age\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"number\",\n      placeholder: \"Phone\",\n      name: \"phone\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"email\",\n      placeholder: \"Email\",\n      name: \"email\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"Add Person\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_s2(addPerson, \"0i3XU4rcDLr6Er1rXTVHHHJTyLI=\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsV0FBVyxFQUFDLE1BQU07TUFBQy9DLElBQUksRUFBQztJQUFNO01BQUEwQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBRSxDQUFDLGVBQ3BEcEQsNkRBQUE7TUFBT3FELElBQUksRUFBQyxNQUFNO01BQUNDLFdBQVcsRUFBQyxVQUFVO01BQUMvQyxJQUFJLEVBQUM7SUFBVTtNQUFBMEMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQUUsQ0FBQyxlQUM1RHBELDZEQUFBO01BQU9xRCxJQUFJLEVBQUMsUUFBUTtNQUFDQyxXQUFXLEVBQUMsS0FBSztNQUFDL0MsSUFBSSxFQUFDO0lBQUs7TUFBQTBDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFFLENBQUMsZUFDcERwRCw2REFBQTtNQUFPcUQsSUFBSSxFQUFDLFFBQVE7TUFBQ0MsV0FBVyxFQUFDLE9BQU87TUFBQy9DLElBQUksRUFBQztJQUFPO01BQUEwQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBRSxDQUFDLGVBQ3hEcEQsNkRBQUE7TUFBT3FELElBQUksRUFBQyxPQUFPO01BQUNDLFdBQVcsRUFBQyxPQUFPO01BQUMvQyxJQUFJLEVBQUM7SUFBTztNQUFBMEMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQUUsQ0FBQyxlQUN2RHBELDZEQUFBO01BQVFxRCxJQUFJLEVBQUMsUUFBUTtNQUFBTCxRQUFBLEVBQUM7SUFBVTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBUSxDQUFDO0VBQUEsZUFDekMsQ0FBQztBQUVQO0FBQUNoRCxHQUFBLENBMUN1QkQsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZGRwZXJzb24uanN4P2Q1ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRQZXJzb24oKSB7XG4gIGxldCBbcGVyc29uLCBzZXRQZXJzb25dID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgbGFzdG5hbWU6IFwiXCIsXG4gICAgYWdlOiBcIlwiLFxuICAgIHBob25lOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICB9KTtcblxuICBhc3luYyBmdW5jdGlvbiBhZGRlZFBlcnNvbihlKSB7XG4gICAgcGVyc29uID0ge1xuICAgICAgbmFtZTogZS50YXJnZXQubmFtZS52YWx1ZSxcbiAgICAgIGxhc3RuYW1lOiBlLnRhcmdldC5sYXN0bmFtZS52YWx1ZSxcbiAgICAgIGFnZTogZS50YXJnZXQuYWdlLnZhbHVlLFxuICAgICAgcGhvbmU6IGUudGFyZ2V0LnBob25lLnZhbHVlLFxuICAgICAgZW1haWw6IGUudGFyZ2V0LmVtYWlsLnZhbHVlLFxuICAgIH07XG4gICAgY29uc29sZS50YWJsZShwZXJzb24pO1xuICAgIFJlYWN0LnVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBhZGRlZFBlcnNvbigpO1xuICAgICAgZmV0Y2goXCJsb2NhbGhvc3Q6ODA4MC9yZWNpZXZlXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShzZXRQZXJzb24pLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLnRhYmxlKHNldFBlcnNvbik7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPkFkZCBQZXJzb248L2gxPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJMYXN0TmFtZVwiIG5hbWU9XCJsYXN0bmFtZVwiIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiQWdlXCIgbmFtZT1cImFnZVwiIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiUGhvbmVcIiBuYW1lPVwicGhvbmVcIiAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIFBlcnNvbjwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwianN4REVWIiwiX2pzeERFViIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiYWRkUGVyc29uIiwiX3MyIiwiX1JlYWN0JHVzZVN0YXRlIiwidXNlU3RhdGUiLCJuYW1lIiwibGFzdG5hbWUiLCJhZ2UiLCJwaG9uZSIsImVtYWlsIiwiX1JlYWN0JHVzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicGVyc29uIiwic2V0UGVyc29uIiwiYWRkZWRQZXJzb24iLCJfeCIsIl9hZGRlZFBlcnNvbiIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3MiLCIkUmVmcmVzaFNpZyQiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZTIiLCJlIiwid3JhcCIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInByZXYiLCJuZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwidGFibGUiLCJ1c2VFZmZlY3QiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RvcCIsImNoaWxkcmVuIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwidHlwZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/addperson.jsx\n"));

/***/ })

});