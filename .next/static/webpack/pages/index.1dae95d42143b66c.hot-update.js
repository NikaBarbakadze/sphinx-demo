"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Quiz.jsx":
/*!*****************************!*\
  !*** ./components/Quiz.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar QuizBody = function(param) {\n    var question_data = param.question_data, isHidden = param.isHidden, setIsHidden = param.setIsHidden, getNewQuestionHandler = param.getNewQuestionHandler;\n    var handleClick = function() {\n        if (isHidden) {\n            setIsHidden(false);\n        } else {\n            setIsHidden(true);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full h-screen justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-xl p-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-bold text-4xl text-center text-indigo-700 lg:text-5xl\",\n                    children: \"ბლიცები\"\n                }, void 0, false, {\n                    fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-8 rounded-lg shadow-lg w-full mt-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xl font-bold lg:text-2xl\",\n                                children: question_data.text\n                            }, void 0, false, {\n                                fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl font-bold my-4 text-green-600 transition ease-in-out delay-150\",\n                                children: isHidden || question_data.answer\n                            }, void 0, false, {\n                                fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-6 flex justify-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: getNewQuestionHandler,\n                                        className: \"mx-2 float-right bg-blue-500 text-white text-sm font-bold tracking-wide rounded-md px-5 py-2\",\n                                        children: \"შემდეგი\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClick,\n                                        className: \"mx-2 float-right bg-green-500 text-white text-sm font-bold tracking-wide rounded-md px-5 py-2\",\n                                        children: [\n                                            isHidden ? 'მანახე' : 'დამალე',\n                                            \" პასუხი\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, _this));\n};\n_c = QuizBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuizBody);\nvar _c;\n$RefreshReg$(_c, \"QuizBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1aXouanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQzs7QUFFaEMsR0FBSyxDQUFDQyxRQUFRLEdBQUcsUUFBUSxRQUE2RCxDQUFDO1FBQW5FQyxhQUFhLFNBQWJBLGFBQWEsRUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxxQkFBcUIsU0FBckJBLHFCQUFxQjtJQUUzRSxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUN2QixHQUQ0QixDQUFDO1FBQ3RCLEVBQUUsRUFBRUgsUUFBUSxFQUFFLENBQUM7WUFDWEMsV0FBVyxDQUFDLEtBQUs7UUFDckIsQ0FBQyxNQUFLLENBQUM7WUFDSEEsV0FBVyxDQUFDLElBQUk7UUFDcEIsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLDZFQUNERyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFrRDs4RkFDNURELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQXFCOzs0RkFDL0JDLENBQUU7b0JBQUNELFNBQVMsRUFBQyxDQUE0RDs4QkFBQyxDQUUzRTs7Ozs7OzRGQUNDRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBK0M7MEdBQ3pERCxDQUFHOzt3R0FDQ0csQ0FBQztnQ0FBQ0YsU0FBUyxFQUFDLENBQStCOzBDQUN2Q04sYUFBYSxDQUFDUyxJQUFJOzs7Ozs7d0dBRXRCRCxDQUFDO2dDQUFDRixTQUFTLEVBQUMsQ0FBeUU7MENBQ2hGTCxRQUFRLElBQUlELGFBQWEsQ0FBQ1UsTUFBTTs7Ozs7O3dHQUVyQ0wsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQXVCOztnSEFDakNLLENBQU07d0NBQUNDLE9BQU8sRUFBRVQscUJBQXFCO3dDQUFFRyxTQUFTLEVBQUMsQ0FBOEY7a0RBQUMsQ0FFako7Ozs7OztnSEFDQ0ssQ0FBTTt3Q0FBQ0MsT0FBTyxFQUFFUixXQUFXO3dDQUFFRSxTQUFTLEVBQUMsQ0FBK0Y7OzRDQUNsSUwsUUFBUSxHQUFHLENBQVE7NENBQW9DLENBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81QixDQUFDO0tBckNuQkYsUUFBUTtBQXVDVSwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1F1aXouanN4PzAzNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUXVpekJvZHkgPSAoeyBxdWVzdGlvbl9kYXRhLCBpc0hpZGRlbiwgc2V0SXNIaWRkZW4sIGdldE5ld1F1ZXN0aW9uSGFuZGxlciB9KSA9PiB7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+e1xuICAgICAgICBpZiAoaXNIaWRkZW4pIHtcbiAgICAgICAgICAgIHNldElzSGlkZGVuKGZhbHNlKVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBzZXRJc0hpZGRlbih0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBoLXNjcmVlbiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXhsIHAtM1wiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC00eGwgdGV4dC1jZW50ZXIgdGV4dC1pbmRpZ28tNzAwIGxnOnRleHQtNXhsXCI+XG4gICAgICAgICAgICAgICAgICAgIOGDkeGDmuGDmOGDquGDlOGDkeGDmFxuICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTggcm91bmRlZC1sZyBzaGFkb3ctbGcgdy1mdWxsIG10LThcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIGxnOnRleHQtMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3F1ZXN0aW9uX2RhdGEudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBteS00IHRleHQtZ3JlZW4tNjAwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZGVsYXktMTUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBpc0hpZGRlbiB8fCBxdWVzdGlvbl9kYXRhLmFuc3dlciB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0TmV3UXVlc3Rpb25IYW5kbGVyfSBjbGFzc05hbWU9XCJteC0yIGZsb2F0LXJpZ2h0IGJnLWJsdWUtNTAwIHRleHQtd2hpdGUgdGV4dC1zbSBmb250LWJvbGQgdHJhY2tpbmctd2lkZSByb3VuZGVkLW1kIHB4LTUgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDhg6jhg5Thg5vhg5Phg5Thg5Lhg5hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJteC0yIGZsb2F0LXJpZ2h0IGJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1ib2xkIHRyYWNraW5nLXdpZGUgcm91bmRlZC1tZCBweC01IHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzSGlkZGVuID8gJ+GDm+GDkOGDnOGDkOGDruGDlCcgOiAn4YOT4YOQ4YOb4YOQ4YOa4YOUJ30g4YOe4YOQ4YOh4YOj4YOu4YOYIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IFF1aXpCb2R5OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlF1aXpCb2R5IiwicXVlc3Rpb25fZGF0YSIsImlzSGlkZGVuIiwic2V0SXNIaWRkZW4iLCJnZXROZXdRdWVzdGlvbkhhbmRsZXIiLCJoYW5kbGVDbGljayIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsInRleHQiLCJhbnN3ZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Quiz.jsx\n");

/***/ })

});