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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ addPerson; }\n/* harmony export */ });\n/* harmony import */ var _Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/diegoherreragre/CursorProjects/portafolio-dhg/client/pages/addperson.jsx\",\n  _s = $RefreshSig$();\n\n\n\n\nfunction addPerson() {\n  _s();\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState({\n      name: \"\",\n      lastname: \"\",\n      age: \"\",\n      phone: \"\",\n      email: \"\"\n    }),\n    _React$useState2 = (0,_Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n    person = _React$useState2[0],\n    setPerson = _React$useState2[1];\n  function addedPerson() {\n    return _addedPerson.apply(this, arguments);\n  }\n  function _addedPerson() {\n    _addedPerson = (0,_Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {\n      return _Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n        while (1) switch (_context2.prev = _context2.next) {\n          case 0:\n            person = {\n              name: e.target.name.value,\n              lastname: e.target.lastname.value,\n              age: e.target.age.value,\n              phone: e.target.phone.value,\n              email: e.target.email.value\n            };\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }, _callee2);\n    }));\n    return _addedPerson.apply(this, arguments);\n  }\n  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect( /*#__PURE__*/(0,_Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    return _Users_diegoherreragre_CursorProjects_portafolio_dhg_client_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return addedPerson();\n        case 2:\n          fetch(\"localhost:8080/recieve\", {\n            method: \"POST\",\n            headers: {\n              \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(setPerson)\n          });\n          console.table(person);\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n      children: \"Add Person\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"text\",\n      placeholder: \"Name\",\n      name: \"name\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"text\",\n      placeholder: \"LastName\",\n      name: \"lastname\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"number\",\n      placeholder: \"Age\",\n      name: \"age\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"number\",\n      placeholder: \"Phone\",\n      name: \"phone\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n      type: \"email\",\n      placeholder: \"Email\",\n      name: \"email\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      children: \"Add Person\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_s(addPerson, \"+ZdmfHtpDXFdDarWfb05mfZMqHM=\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTtNQUFDQyxXQUFXLEVBQUMsVUFBVTtNQUFDNUMsSUFBSSxFQUFDO0lBQVU7TUFBQXVDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFFLENBQUMsZUFDNURqRCw2REFBQTtNQUFPa0QsSUFBSSxFQUFDLFFBQVE7TUFBQ0MsV0FBVyxFQUFDLEtBQUs7TUFBQzVDLElBQUksRUFBQztJQUFLO01BQUF1QyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FBRSxDQUFDLGVBQ3BEakQsNkRBQUE7TUFBT2tELElBQUksRUFBQyxRQUFRO01BQUNDLFdBQVcsRUFBQyxPQUFPO01BQUM1QyxJQUFJLEVBQUM7SUFBTztNQUFBdUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQUUsQ0FBQyxlQUN4RGpELDZEQUFBO01BQU9rRCxJQUFJLEVBQUMsT0FBTztNQUFDQyxXQUFXLEVBQUMsT0FBTztNQUFDNUMsSUFBSSxFQUFDO0lBQU87TUFBQXVDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUFFLENBQUMsZUFDdkRqRCw2REFBQTtNQUFRa0QsSUFBSSxFQUFDLFFBQVE7TUFBQUwsUUFBQSxFQUFDO0lBQVU7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLE9BQVEsQ0FBQztFQUFBLGVBQ3pDLENBQUM7QUFFUDtBQUFDN0MsRUFBQSxDQXpDdUJELFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkcGVyc29uLmpzeD9kNWQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkUGVyc29uKCkge1xuICBsZXQgW3BlcnNvbiwgc2V0UGVyc29uXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGxhc3RuYW1lOiBcIlwiLFxuICAgIGFnZTogXCJcIixcbiAgICBwaG9uZTogXCJcIixcbiAgICBlbWFpbDogXCJcIixcbiAgfSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkZWRQZXJzb24oKSB7XG4gICAgcGVyc29uID0ge1xuICAgICAgbmFtZTogZS50YXJnZXQubmFtZS52YWx1ZSxcbiAgICAgIGxhc3RuYW1lOiBlLnRhcmdldC5sYXN0bmFtZS52YWx1ZSxcbiAgICAgIGFnZTogZS50YXJnZXQuYWdlLnZhbHVlLFxuICAgICAgcGhvbmU6IGUudGFyZ2V0LnBob25lLnZhbHVlLFxuICAgICAgZW1haWw6IGUudGFyZ2V0LmVtYWlsLnZhbHVlLFxuICAgIH07XG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGFkZGVkUGVyc29uKCk7XG4gICAgZmV0Y2goXCJsb2NhbGhvc3Q6ODA4MC9yZWNpZXZlXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHNldFBlcnNvbiksXG4gICAgfSk7XG4gICAgY29uc29sZS50YWJsZShwZXJzb24pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5BZGQgUGVyc29uPC9oMT5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTGFzdE5hbWVcIiBuYW1lPVwibGFzdG5hbWVcIiAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIkFnZVwiIG5hbWU9XCJhZ2VcIiAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIlBob25lXCIgbmFtZT1cInBob25lXCIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgbmFtZT1cImVtYWlsXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBQZXJzb248L2J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImpzeERFViIsIl9qc3hERVYiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsImFkZFBlcnNvbiIsIl9zIiwiX1JlYWN0JHVzZVN0YXRlIiwidXNlU3RhdGUiLCJuYW1lIiwibGFzdG5hbWUiLCJhZ2UiLCJwaG9uZSIsImVtYWlsIiwiX1JlYWN0JHVzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicGVyc29uIiwic2V0UGVyc29uIiwiYWRkZWRQZXJzb24iLCJfYWRkZWRQZXJzb24iLCJhcHBseSIsImFyZ3VtZW50cyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlMiIsIndyYXAiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJwcmV2IiwibmV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0b3AiLCJ1c2VFZmZlY3QiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsInRhYmxlIiwiY2hpbGRyZW4iLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJ0eXBlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/addperson.jsx\n"));

/***/ })

});