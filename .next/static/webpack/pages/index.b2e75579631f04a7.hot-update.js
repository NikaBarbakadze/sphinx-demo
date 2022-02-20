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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar QuizBody = function(param) {\n    var question_data = param.question_data, isHidden = param.isHidden, setIsHidden = param.setIsHidden, getNewQuestionHandler = param.getNewQuestionHandler;\n    var handleClick = function() {\n        if (isHidden) {\n            setIsHidden(false);\n        } else {\n            setIsHidden(true);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full h-screen justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-xl p-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-bold text-4xl text-center text-indigo-700 lg:text-5xl\",\n                    children: \"ბლიცები\"\n                }, void 0, false, {\n                    fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white p-8 rounded-lg shadow-lg w-full mt-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xl font-bold lg:text-2xl\",\n                                children: question_data.text\n                            }, void 0, false, {\n                                fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl font-bold my-4 text-green-500 transition ease-in-out delay-150\",\n                                children: isHidden || question_data.answer\n                            }, void 0, false, {\n                                fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 25\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-6 flex justify-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleClick,\n                                        className: \"mx-2 float-right bg-green-500 text-white text-sm font-bold tracking-wide rounded-md px-5 py-2\",\n                                        children: [\n                                            isHidden ? 'მანახე' : 'დამალე',\n                                            \" პასუხი\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 29\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: getNewQuestionHandler,\n                                        className: \"mx-2 float-right bg-blue-500 text-white text-sm font-bold tracking-wide rounded-md px-5 py-2\",\n                                        children: \"შემდეგი\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                                        lineNumber: 31,\n                                        columnNumber: 29\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/nikolozbarbakadze/Desktop/Server/sphinx-demo/components/Quiz.jsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, _this));\n};\n_c = QuizBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuizBody);\nvar _c;\n$RefreshReg$(_c, \"QuizBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1aXouanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQzs7QUFFaEMsR0FBSyxDQUFDQyxRQUFRLEdBQUcsUUFBUSxRQUE2RCxDQUFDO1FBQW5FQyxhQUFhLFNBQWJBLGFBQWEsRUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxxQkFBcUIsU0FBckJBLHFCQUFxQjtJQUUzRSxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUN2QixHQUQ0QixDQUFDO1FBQ3RCLEVBQUUsRUFBRUgsUUFBUSxFQUFFLENBQUM7WUFDWEMsV0FBVyxDQUFDLEtBQUs7UUFDckIsQ0FBQyxNQUFLLENBQUM7WUFDSEEsV0FBVyxDQUFDLElBQUk7UUFDcEIsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLDZFQUNERyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFrRDs4RkFDNURELENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQXFCOzs0RkFDL0JDLENBQUU7b0JBQUNELFNBQVMsRUFBQyxDQUE0RDs4QkFBQyxDQUUzRTs7Ozs7OzRGQUNDRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBK0M7MEdBQ3pERCxDQUFHOzt3R0FDQ0csQ0FBQztnQ0FBQ0YsU0FBUyxFQUFDLENBQStCOzBDQUN2Q04sYUFBYSxDQUFDUyxJQUFJOzs7Ozs7d0dBRXRCRCxDQUFDO2dDQUFDRixTQUFTLEVBQUMsQ0FBeUU7MENBQ2hGTCxRQUFRLElBQUlELGFBQWEsQ0FBQ1UsTUFBTTs7Ozs7O3dHQUVyQ0wsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQXVCOztnSEFDakNLLENBQU07d0NBQUNDLE9BQU8sRUFBRVIsV0FBVzt3Q0FBRUUsU0FBUyxFQUFDLENBQStGOzs0Q0FDbElMLFFBQVEsR0FBRyxDQUFROzRDQUFvQyxDQUNwQzs7Ozs7OztnSEFDdkJVLENBQU07d0NBQUNDLE9BQU8sRUFBRVQscUJBQXFCO3dDQUFFRyxTQUFTLEVBQUMsQ0FBOEY7a0RBQUMsQ0FFako7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUIsQ0FBQztLQXJDS1AsUUFBUTtBQXVDZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUXVpei5qc3g/MDM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBRdWl6Qm9keSA9ICh7IHF1ZXN0aW9uX2RhdGEsIGlzSGlkZGVuLCBzZXRJc0hpZGRlbiwgZ2V0TmV3UXVlc3Rpb25IYW5kbGVyIH0pID0+IHtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT57XG4gICAgICAgIGlmIChpc0hpZGRlbikge1xuICAgICAgICAgICAgc2V0SXNIaWRkZW4oZmFsc2UpXG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHNldElzSGlkZGVuKHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGgtc2NyZWVuIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXcteGwgcC0zXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTR4bCB0ZXh0LWNlbnRlciB0ZXh0LWluZGlnby03MDAgbGc6dGV4dC01eGxcIj5cbiAgICAgICAgICAgICAgICAgICAg4YOR4YOa4YOY4YOq4YOU4YOR4YOYXG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkLWxnIHNoYWRvdy1sZyB3LWZ1bGwgbXQtOFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbGc6dGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cXVlc3Rpb25fZGF0YS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIG15LTQgdGV4dC1ncmVlbi01MDAgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkZWxheS0xNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlzSGlkZGVuIHx8IHF1ZXN0aW9uX2RhdGEuYW5zd2VyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gY2xhc3NOYW1lPVwibXgtMiBmbG9hdC1yaWdodCBiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSB0ZXh0LXNtIGZvbnQtYm9sZCB0cmFja2luZy13aWRlIHJvdW5kZWQtbWQgcHgtNSBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0hpZGRlbiA/ICfhg5vhg5Dhg5zhg5Dhg67hg5QnIDogJ+GDk+GDkOGDm+GDkOGDmuGDlCd9IOGDnuGDkOGDoeGDo+GDruGDmCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldE5ld1F1ZXN0aW9uSGFuZGxlcn0gY2xhc3NOYW1lPVwibXgtMiBmbG9hdC1yaWdodCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1ib2xkIHRyYWNraW5nLXdpZGUgcm91bmRlZC1tZCBweC01IHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4YOo4YOU4YOb4YOT4YOU4YOS4YOYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIFxuZXhwb3J0IGRlZmF1bHQgUXVpekJvZHk7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiUXVpekJvZHkiLCJxdWVzdGlvbl9kYXRhIiwiaXNIaWRkZW4iLCJzZXRJc0hpZGRlbiIsImdldE5ld1F1ZXN0aW9uSGFuZGxlciIsImhhbmRsZUNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwidGV4dCIsImFuc3dlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Quiz.jsx\n");

/***/ })

});