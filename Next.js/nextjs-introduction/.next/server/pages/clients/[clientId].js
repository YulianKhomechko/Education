"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/clients/[clientId]";
exports.ids = ["pages/clients/[clientId]"];
exports.modules = {

/***/ "./pages/clients/[clientId]/index.js":
/*!*******************************************!*\
  !*** ./pages/clients/[clientId]/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ClientDetailsPage = ()=>{\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const loadProjectHandler = async (clientId, clientProjectId)=>{\n        await router.push({\n            pathname: \"/clients/[clientId]/projects/[clientProjectId]\",\n            query: {\n                clientId,\n                clientProjectId\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"The Client Details Page. Client id: \",\n                    query.clientId\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Education\\\\Next.js\\\\my-next-app\\\\pages\\\\clients\\\\[clientId]\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>loadProjectHandler(query.clientId, \"projectA\"),\n                children: \"Load Project A\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Education\\\\Next.js\\\\my-next-app\\\\pages\\\\clients\\\\[clientId]\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Education\\\\Next.js\\\\my-next-app\\\\pages\\\\clients\\\\[clientId]\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientDetailsPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jbGllbnRzL1tjbGllbnRJZF0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1DLG9CQUFvQixJQUFNO0lBQzlCLE1BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdGLHNEQUFTQTtJQUMzQixNQUFNRyxTQUFTSCxzREFBU0E7SUFFeEIsTUFBTUkscUJBQXFCLE9BQU9DLFVBQVVDLGtCQUFvQjtRQUM5RCxNQUFNSCxPQUFPSSxJQUFJLENBQUM7WUFDaEJDLFVBQVU7WUFDVk4sT0FBTztnQkFBRUc7Z0JBQVVDO1lBQWdCO1FBQ3JDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDQzs7b0JBQUc7b0JBQXFDUixNQUFNRyxRQUFROzs7Ozs7OzBCQUN2RCw4REFBQ007Z0JBQU9DLFNBQVMsSUFBTVIsbUJBQW1CRixNQUFNRyxRQUFRLEVBQUU7MEJBQWE7Ozs7Ozs7Ozs7OztBQUc3RTtBQUVBLGlFQUFlSixpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWFwcC8uL3BhZ2VzL2NsaWVudHMvW2NsaWVudElkXS9pbmRleC5qcz9iODcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgQ2xpZW50RGV0YWlsc1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBsb2FkUHJvamVjdEhhbmRsZXIgPSBhc3luYyAoY2xpZW50SWQsIGNsaWVudFByb2plY3RJZCkgPT4ge1xuICAgIGF3YWl0IHJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiAnL2NsaWVudHMvW2NsaWVudElkXS9wcm9qZWN0cy9bY2xpZW50UHJvamVjdElkXScsXG4gICAgICBxdWVyeTogeyBjbGllbnRJZCwgY2xpZW50UHJvamVjdElkIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlRoZSBDbGllbnQgRGV0YWlscyBQYWdlLiBDbGllbnQgaWQ6IHtxdWVyeS5jbGllbnRJZH08L2gxPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBsb2FkUHJvamVjdEhhbmRsZXIocXVlcnkuY2xpZW50SWQsICdwcm9qZWN0QScpfT5Mb2FkIFByb2plY3QgQTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50RGV0YWlsc1BhZ2U7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiQ2xpZW50RGV0YWlsc1BhZ2UiLCJxdWVyeSIsInJvdXRlciIsImxvYWRQcm9qZWN0SGFuZGxlciIsImNsaWVudElkIiwiY2xpZW50UHJvamVjdElkIiwicHVzaCIsInBhdGhuYW1lIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/clients/[clientId]/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/clients/[clientId]/index.js"));
module.exports = __webpack_exports__;

})();