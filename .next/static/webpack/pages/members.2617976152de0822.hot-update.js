"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/members",{

/***/ "./src/team/card.tsx":
/*!***************************!*\
  !*** ./src/team/card.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar MemberCard = function(param) {\n    var firstname = param.firstname, lastname = param.lastname, _username = param.username, username = _username === void 0 ? null : _username, _category = param.category, category = _category === void 0 ? null : _category, _affiliation = param.affiliation, affiliation = _affiliation === void 0 ? null : _affiliation, _linkedin = param.linkedin, linkedin = _linkedin === void 0 ? null : _linkedin, _twitter = param.twitter, twitter = _twitter === void 0 ? null : _twitter, _email = param.email, email = _email === void 0 ? null : _email, img = param.img;\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid flex-wrap w-100 sm:w-1/2 lg:w-1/3 mb:3 p-3 items-center justify-items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \" w-100 rounded-xl\",\n                alt: \"Person Image\",\n                src: img,\n                width: 256,\n                height: 256\n            }, void 0, false, {\n                fileName: \"/home/sid128/Documents/Github/bi0shardware.in/src/team/card.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-1 opacity-90 uppercase text-center \".concat(!((username === null || username === void 0 ? void 0 : username.length) > 0) ? \"text-xl\" : null),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"font-semibold \",\n                        children: firstname\n                    }, void 0, false, {\n                        fileName: \"/home/sid128/Documents/Github/bi0shardware.in/src/team/card.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, _this),\n                    \" \",\n                    lastname\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sid128/Documents/Github/bi0shardware.in/src/team/card.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, _this),\n            category && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-sm opacity-80 text-center\",\n                children: category\n            }, void 0, false, {\n                fileName: \"/home/sid128/Documents/Github/bi0shardware.in/src/team/card.tsx\",\n                lineNumber: 15,\n                columnNumber: 22\n            }, _this),\n            affiliation && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-sm opacity-80 text-center\",\n                children: affiliation\n            }, void 0, false, {\n                fileName: \"/home/sid128/Documents/Github/bi0shardware.in/src/team/card.tsx\",\n                lineNumber: 16,\n                columnNumber: 25\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sid128/Documents/Github/bi0shardware.in/src/team/card.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_c = MemberCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MemberCard);\nvar _c;\n$RefreshReg$(_c, \"MemberCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVhbS9jYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQytCO0FBQ0w7QUFHMUIsSUFBTUUsVUFBVSxHQUFHO1FBQUdDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxRQUFRLFNBQVJBLFFBQVEsb0JBQUVDLFFBQVEsRUFBUkEsUUFBUSwwQkFBRyxJQUFJLGdDQUFFQyxRQUFRLEVBQVJBLFFBQVEsMEJBQUcsSUFBSSxtQ0FBRUMsV0FBVyxFQUFYQSxXQUFXLDZCQUFHLElBQUksbUNBQUVDLFFBQVEsRUFBUkEsUUFBUSwwQkFBRyxJQUFJLCtCQUFFQyxPQUFPLEVBQVBBLE9BQU8seUJBQUcsSUFBSSw0QkFBRUMsS0FBSyxFQUFMQSxLQUFLLHVCQUFHLElBQUksV0FBRUMsR0FBRyxTQUFIQSxHQUFHO2tCQUUvSSxxRUFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsbUZBQW1GOzswQkFDOUYsOERBQUNiLG1EQUFLO2dCQUFDYSxTQUFTLEVBQUMsbUJBQW1CO2dCQUFDQyxHQUFHLEVBQUMsY0FBYztnQkFBQ0MsR0FBRyxFQUFFSixHQUFHO2dCQUFFSyxLQUFLLEVBQUUsR0FBRztnQkFBRUMsTUFBTSxFQUFFLEdBQUc7Ozs7O3FCQUFHOzBCQUU1Riw4REFBQ0wsS0FBRztnQkFBQ0MsU0FBUyxFQUFFLHdDQUF1QyxDQUE2QyxPQUEzQyxDQUFFUixDQUFBQSxDQUFBQSxRQUFRLGFBQVJBLFFBQVEsV0FBUSxHQUFoQkEsS0FBQUEsQ0FBZ0IsR0FBaEJBLFFBQVEsQ0FBRWEsTUFBTSxJQUFHLENBQUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFFOztrQ0FDakcsOERBQUNDLE1BQUk7d0JBQUNOLFNBQVMsRUFBQyxnQkFBZ0I7a0NBQUVWLFNBQVM7Ozs7OzZCQUFRO29CQUNsRCxHQUFHO29CQUFFQyxRQUFROzs7Ozs7cUJBQ1o7WUFDTEUsUUFBUSxrQkFBSSw4REFBQ00sS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGdDQUFnQzswQkFBRVAsUUFBUTs7Ozs7cUJBQU87WUFDNUVDLFdBQVcsa0JBQUksOERBQUNLLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxnQ0FBZ0M7MEJBQUVOLFdBQVc7Ozs7O3FCQUFPOzs7Ozs7YUF3QmpGO0NBQ1Q7QUFuQ0tMLEtBQUFBLFVBQVU7QUFxQ2hCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RlYW0vY2FyZC50c3g/YjhlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENsYXNzTmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcblxuY29uc3QgTWVtYmVyQ2FyZCA9ICh7IGZpcnN0bmFtZSwgbGFzdG5hbWUsIHVzZXJuYW1lID0gbnVsbCwgY2F0ZWdvcnkgPSBudWxsLCBhZmZpbGlhdGlvbiA9IG51bGwsIGxpbmtlZGluID0gbnVsbCwgdHdpdHRlciA9IG51bGwsIGVtYWlsID0gbnVsbCwgaW1nIH0pID0+IChcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBmbGV4LXdyYXAgdy0xMDAgc206dy0xLzIgbGc6dy0xLzMgbWI6MyBwLTMgaXRlbXMtY2VudGVyIGp1c3RpZnktaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCIgdy0xMDAgcm91bmRlZC14bFwiIGFsdD1cIlBlcnNvbiBJbWFnZVwiIHNyYz17aW1nfSB3aWR0aD17MjU2fSBoZWlnaHQ9ezI1Nn0vPlxuICAgICAgICB7Lyoge3VzZXJuYW1lICYmIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1jZW50ZXIgXCI+e3VzZXJuYW1lfTwvZGl2Pn0gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWItMSBvcGFjaXR5LTkwIHVwcGVyY2FzZSB0ZXh0LWNlbnRlciAkeyEodXNlcm5hbWU/Lmxlbmd0aCA+IDApID8gJ3RleHQteGwnIDogbnVsbH1gfT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgXCI+e2ZpcnN0bmFtZX08L3NwYW4+XG4gICAgICAgICAgICB7JyAnfXtsYXN0bmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtjYXRlZ29yeSAmJiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gb3BhY2l0eS04MCB0ZXh0LWNlbnRlclwiPntjYXRlZ29yeX08L2Rpdj59XG4gICAgICAgIHthZmZpbGlhdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gb3BhY2l0eS04MCB0ZXh0LWNlbnRlclwiPnthZmZpbGlhdGlvbn08L2Rpdj59XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG9wYWNpdHktNzUgbXQtM1wiPlxuICAgICAgICAgICAge3R3aXR0ZXIgJiYgKFxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2BodHRwczovL3d3dy50d2l0dGVyLmNvbS8ke3R3aXR0ZXJ9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJUd2l0dGVyIFByb2ZpbGVcIiBzcmM9XCIvaWNvbnMvdHdpdHRlci5zdmdcIiB3aWR0aD17MjJ9IGhlaWdodD17MjJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2xpbmtlZGluICYmIChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luLyR7bGlua2VkaW59YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm1yLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJMaW5rZWRJbiBQcm9maWxlXCIgc3JjPVwiL2ljb25zL2xpbmtlZGluLnN2Z1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7ZW1haWwgJiYgKFxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2BtYWlsdG86JHtlbWFpbH1gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiRW1haWwgQWRkcmVzc1wiIHNyYz1cIi9pY29ucy9tYWlsLnN2Z1wiIHdpZHRoPXsyNH0gaGVpZ2h0PXsyNH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE1lbWJlckNhcmQ7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIk1lbWJlckNhcmQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsInVzZXJuYW1lIiwiY2F0ZWdvcnkiLCJhZmZpbGlhdGlvbiIsImxpbmtlZGluIiwidHdpdHRlciIsImVtYWlsIiwiaW1nIiwiZGl2IiwiY2xhc3NOYW1lIiwiYWx0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJsZW5ndGgiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/team/card.tsx\n"));

/***/ })

});