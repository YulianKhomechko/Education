"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/clients/[clientId]",{

/***/ "./pages/clients/[clientId]/index.js":
/*!*******************************************!*\
  !*** ./pages/clients/[clientId]/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ClientDetailsPage = ()=>{\n    _s();\n    const { query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const loadProjectHandler = async (clientId, clientProjectId)=>{\n        await router.push({\n            pathname: \"/clients/[clientId]/[clientProjectId]\",\n            query: {\n                clientId,\n                clientProjectId\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"The Client Details Page. Client id: \",\n                    query.clientId\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Education\\\\Next.js\\\\my-next-app\\\\pages\\\\clients\\\\[clientId]\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: loadProjectHandler,\n                children: \"Load Project A\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Education\\\\Next.js\\\\my-next-app\\\\pages\\\\clients\\\\[clientId]\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Education\\\\Next.js\\\\my-next-app\\\\pages\\\\clients\\\\[clientId]\\\\index.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ClientDetailsPage, \"zTJu99KdDfT/bd/MvQNDdZpgqeA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ClientDetailsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClientDetailsPage);\nvar _c;\n$RefreshReg$(_c, \"ClientDetailsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jbGllbnRzL1tjbGllbnRJZF0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUV4QyxNQUFNQyxvQkFBb0IsSUFBTTs7SUFDOUIsTUFBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR0Ysc0RBQVNBO0lBQzNCLE1BQU1HLFNBQVNILHNEQUFTQTtJQUV4QixNQUFNSSxxQkFBcUIsT0FBT0MsVUFBVUMsa0JBQW9CO1FBQzlELE1BQU1ILE9BQU9JLElBQUksQ0FBQztZQUNoQkMsVUFBVTtZQUNWTixPQUFPO2dCQUFFRztnQkFBVUM7WUFBZ0I7UUFDckM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNDOztvQkFBRztvQkFBcUNSLE1BQU1HLFFBQVE7Ozs7Ozs7MEJBQ3ZELDhEQUFDTTtnQkFBT0MsU0FBU1I7MEJBQW9COzs7Ozs7Ozs7Ozs7QUFHM0M7R0FqQk1IOztRQUNjRCxrREFBU0E7UUFDWkEsa0RBQVNBOzs7S0FGcEJDO0FBbUJOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50cy9bY2xpZW50SWRdL2luZGV4LmpzP2I4NzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5jb25zdCBDbGllbnREZXRhaWxzUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGxvYWRQcm9qZWN0SGFuZGxlciA9IGFzeW5jIChjbGllbnRJZCwgY2xpZW50UHJvamVjdElkKSA9PiB7XG4gICAgYXdhaXQgcm91dGVyLnB1c2goe1xuICAgICAgcGF0aG5hbWU6ICcvY2xpZW50cy9bY2xpZW50SWRdL1tjbGllbnRQcm9qZWN0SWRdJyxcbiAgICAgIHF1ZXJ5OiB7IGNsaWVudElkLCBjbGllbnRQcm9qZWN0SWQgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+VGhlIENsaWVudCBEZXRhaWxzIFBhZ2UuIENsaWVudCBpZDoge3F1ZXJ5LmNsaWVudElkfTwvaDE+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvYWRQcm9qZWN0SGFuZGxlcn0+TG9hZCBQcm9qZWN0IEE8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsaWVudERldGFpbHNQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkNsaWVudERldGFpbHNQYWdlIiwicXVlcnkiLCJyb3V0ZXIiLCJsb2FkUHJvamVjdEhhbmRsZXIiLCJjbGllbnRJZCIsImNsaWVudFByb2plY3RJZCIsInB1c2giLCJwYXRobmFtZSIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/clients/[clientId]/index.js\n"));

/***/ })

});