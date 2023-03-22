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
exports.id = "pages/last-sales";
exports.ids = ["pages/last-sales"];
exports.modules = {

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// import { useEffect, useState } from 'react';\n\n\nfunction LastSalesPage() {\n    // const [sales, setSales] = useState([]);\n    // const [isLoading, setIsLoading] = useState(false);\n    const url = \"https://nextjs-course-fe8aa-default-rtdb.europe-west1.firebasedatabase.app/sales.json\";\n    const { data: sales , error , isLoading  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, (...args)=>fetch(...args).then((res)=>res.json()).then((sales)=>{\n            const transformedSales = [];\n            for(const key in sales){\n                transformedSales.push({\n                    id: key,\n                    username: sales[key].username,\n                    volume: sales[key].volume\n                });\n            }\n            return transformedSales;\n        }));\n    // useEffect(() => {\n    //   setIsLoading(true);\n    //\n    //   fetch('https://nextjs-course-fe8aa-default-rtdb.europe-west1.firebasedatabase.app/sales.json')\n    //     .then((res) => res.json())\n    //     .then((sales) => {\n    //       const transformedSales = [];\n    //\n    //       for (const key in sales) {\n    //         transformedSales.push({ id: key, username: sales[key].username, volume: sales[key].volume });\n    //       }\n    //\n    //       setSales(transformedSales);\n    //       setIsLoading(false);\n    //     });\n    // }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Education\\\\Next.js\\\\pre-rendering-data-fetching\\\\pages\\\\last-sales.js\",\n            lineNumber: 46,\n            columnNumber: 12\n        }, this);\n    }\n    if (!sales) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No data...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Education\\\\Next.js\\\\pre-rendering-data-fetching\\\\pages\\\\last-sales.js\",\n            lineNumber: 50,\n            columnNumber: 12\n        }, this);\n    }\n    console.log(sales);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: sales.map((sale)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    sale.username,\n                    \" - \",\n                    sale.volume,\n                    \"$\"\n                ]\n            }, sale.id, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Education\\\\Next.js\\\\pre-rendering-data-fetching\\\\pages\\\\last-sales.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Education\\\\Next.js\\\\pre-rendering-data-fetching\\\\pages\\\\last-sales.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastSalesPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBK0M7O0FBQ3RCO0FBRXpCLFNBQVNDLGdCQUFnQjtJQUN2QiwwQ0FBMEM7SUFDMUMscURBQXFEO0lBRXJELE1BQU1DLE1BQU07SUFFWixNQUFNLEVBQ0pDLE1BQU1DLE1BQUssRUFDWEMsTUFBSyxFQUNMQyxVQUFTLEVBQ1YsR0FBR04sK0NBQU1BLENBQUNFLEtBQUssQ0FBQyxHQUFHSyxPQUNsQkMsU0FBU0QsTUFDTkUsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDTCxRQUFVO1lBQ2YsTUFBTVEsbUJBQW1CLEVBQUU7WUFFM0IsSUFBSyxNQUFNQyxPQUFPVCxNQUFPO2dCQUN2QlEsaUJBQWlCRSxJQUFJLENBQUM7b0JBQUVDLElBQUlGO29CQUFLRyxVQUFVWixLQUFLLENBQUNTLElBQUksQ0FBQ0csUUFBUTtvQkFBRUMsUUFBUWIsS0FBSyxDQUFDUyxJQUFJLENBQUNJLE1BQU07Z0JBQUM7WUFDNUY7WUFFQSxPQUFPTDtRQUNUO0lBR0osb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixFQUFFO0lBQ0YsbUdBQW1HO0lBQ25HLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLEVBQUU7SUFDRixtQ0FBbUM7SUFDbkMsd0dBQXdHO0lBQ3hHLFVBQVU7SUFDVixFQUFFO0lBQ0Ysb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsVUFBVTtJQUVWLElBQUlOLFdBQVc7UUFDYixxQkFBTyw4REFBQ1k7c0JBQUU7Ozs7OztJQUNaLENBQUM7SUFFRCxJQUFJLENBQUNkLE9BQU87UUFDVixxQkFBTyw4REFBQ2M7c0JBQUU7Ozs7OztJQUNaLENBQUM7SUFFREMsUUFBUUMsR0FBRyxDQUFDaEI7SUFFWixxQkFDRSw4REFBQ2lCO2tCQUNFakIsTUFBTWtCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0M7O29CQUNFRCxLQUFLUCxRQUFRO29CQUFDO29CQUFJTyxLQUFLTixNQUFNO29CQUFDOztlQUR4Qk0sS0FBS1IsRUFBRTs7Ozs7Ozs7OztBQU14QjtBQUVBLGlFQUFlZCxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJlLXJlbmRlcmluZy1kYXRhLWZldGNoaW5nLy4vcGFnZXMvbGFzdC1zYWxlcy5qcz8yOTE5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmZ1bmN0aW9uIExhc3RTYWxlc1BhZ2UoKSB7XG4gIC8vIGNvbnN0IFtzYWxlcywgc2V0U2FsZXNdID0gdXNlU3RhdGUoW10pO1xuICAvLyBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHVybCA9ICdodHRwczovL25leHRqcy1jb3Vyc2UtZmU4YWEtZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9zYWxlcy5qc29uJztcblxuICBjb25zdCB7XG4gICAgZGF0YTogc2FsZXMsXG4gICAgZXJyb3IsXG4gICAgaXNMb2FkaW5nLFxuICB9ID0gdXNlU1dSKHVybCwgKC4uLmFyZ3MpID0+XG4gICAgZmV0Y2goLi4uYXJncylcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoc2FsZXMpID0+IHtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNhbGVzKSB7XG4gICAgICAgICAgdHJhbnNmb3JtZWRTYWxlcy5wdXNoKHsgaWQ6IGtleSwgdXNlcm5hbWU6IHNhbGVzW2tleV0udXNlcm5hbWUsIHZvbHVtZTogc2FsZXNba2V5XS52b2x1bWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtZWRTYWxlcztcbiAgICAgIH0pXG4gICk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gIC8vXG4gIC8vICAgZmV0Y2goJ2h0dHBzOi8vbmV4dGpzLWNvdXJzZS1mZThhYS1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL3NhbGVzLmpzb24nKVxuICAvLyAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgLy8gICAgIC50aGVuKChzYWxlcykgPT4ge1xuICAvLyAgICAgICBjb25zdCB0cmFuc2Zvcm1lZFNhbGVzID0gW107XG4gIC8vXG4gIC8vICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNhbGVzKSB7XG4gIC8vICAgICAgICAgdHJhbnNmb3JtZWRTYWxlcy5wdXNoKHsgaWQ6IGtleSwgdXNlcm5hbWU6IHNhbGVzW2tleV0udXNlcm5hbWUsIHZvbHVtZTogc2FsZXNba2V5XS52b2x1bWUgfSk7XG4gIC8vICAgICAgIH1cbiAgLy9cbiAgLy8gICAgICAgc2V0U2FsZXModHJhbnNmb3JtZWRTYWxlcyk7XG4gIC8vICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIC8vICAgICB9KTtcbiAgLy8gfSwgW10pO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICBpZiAoIXNhbGVzKSB7XG4gICAgcmV0dXJuIDxwPk5vIGRhdGEuLi48L3A+O1xuICB9XG5cbiAgY29uc29sZS5sb2coc2FsZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3NhbGVzLm1hcCgoc2FsZSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtzYWxlLmlkfT5cbiAgICAgICAgICB7c2FsZS51c2VybmFtZX0gLSB7c2FsZS52b2x1bWV9JFxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFzdFNhbGVzUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJMYXN0U2FsZXNQYWdlIiwidXJsIiwiZGF0YSIsInNhbGVzIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInRyYW5zZm9ybWVkU2FsZXMiLCJrZXkiLCJwdXNoIiwiaWQiLCJ1c2VybmFtZSIsInZvbHVtZSIsInAiLCJjb25zb2xlIiwibG9nIiwidWwiLCJtYXAiLCJzYWxlIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/last-sales.js"));
module.exports = __webpack_exports__;

})();