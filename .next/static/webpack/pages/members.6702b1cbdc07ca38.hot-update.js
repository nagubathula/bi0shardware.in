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

/***/ "./src/data/alumni.ts":
/*!****************************!*\
  !*** ./src/data/alumni.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\nvar alumni = [\n    {\n        \"campus\": \"Amritapuri\",\n        \"firstname\": \"Ashwin\",\n        \"lastname\": \"Nambiar\",\n        \"category\": \"Cryptography\",\n        \"team\": \"Hardware\",\n        \"batch\": 2022,\n        \"affiliation\": \"VMware\",\n        \"email\": \"\",\n        img: \"/images/team/ashwinnambiar.png\"\n    },\n    {\n        \"campus\": \"Amritapuri\",\n        \"firstname\": \"Season\",\n        \"lastname\": \"Cherian\",\n        \"category\": \"Cryptography\",\n        \"team\": \"Hardware\",\n        \"batch\": 2022,\n        \"affiliation\": \"VMware\",\n        \"email\": \"\",\n        img: \"/images/team/season.png\"\n    },\n    {\n        \"campus\": \"Amritapuri\",\n        \"firstname\": \"Hariprasad\",\n        \"lastname\": \"\",\n        \"category\": \"Cryptography\",\n        \"team\": \"Hardware Security\",\n        \"batch\": 2022,\n        \"affiliation\": \"VMware\",\n        \"email\": \"\"\n    },\n    {\n        \"campus\": \"Amritapuri\",\n        \"firstname\": \"Hari\",\n        \"lastname\": \"\",\n        \"category\": \"Embedded Devlopment\",\n        \"team\": \"Hardware\",\n        \"batch\": 2022,\n        \"affiliation\": \"VMware\",\n        \"email\": \"\"\n    },\n    {\n        \"campus\": \"Amritapuri\",\n        \"firstname\": \"Karthik\",\n        \"lastname\": \"Lade\",\n        \"category\": \"Automotive\",\n        \"team\": \"Hardware\",\n        \"batch\": 2022,\n        \"affiliation\": \"VMware\",\n        \"email\": \"\"\n    },\n    {\n        \"campus\": \"Amritapuri\",\n        \"firstname\": \"Aathira\",\n        \"lastname\": \"Dinesan\",\n        \"category\": \"AI/ML\",\n        \"team\": \"Hardware\",\n        \"batch\": 2022,\n        \"affiliation\": \"VMware\",\n        \"email\": \"\"\n    },\n    {\n        \"campus\": \"Amritapuri\",\n        \"firstname\": \"Arya\",\n        \"lastname\": \"Surendran\",\n        \"category\": \"Embedded Devlopment\",\n        \"team\": \"Hardware\",\n        \"batch\": 2022,\n        \"affiliation\": \"VMware\",\n        \"email\": \"\"\n    },\n    {\n        \"campus\": \"Amritapuri\",\n        \"firstname\": \"Amitha\",\n        \"lastname\": \"Deep\",\n        \"category\": \"Embedded Devlopment\",\n        \"team\": \"Hardware\",\n        \"batch\": 2022,\n        \"affiliation\": \"VMware\",\n        \"email\": \"\"\n    },\n    {\n        \"campus\": \"Amritapuri\",\n        \"firstname\": \"Keerthana\",\n        \"lastname\": \"K M\",\n        \"category\": \"Sutomotive\",\n        \"team\": \"Hardware\",\n        \"batch\": 2022,\n        \"affiliation\": \"VMware\",\n        \"email\": \"\"\n    }, \n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (alumni);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhbHVtbmkgPSBbXG4gICAge1xuICAgICAgICBcImNhbXB1c1wiOiBcIkFtcml0YXB1cmlcIixcbiAgICAgICAgXCJmaXJzdG5hbWVcIjogXCJBc2h3aW5cIixcbiAgICAgICAgXCJsYXN0bmFtZVwiOiBcIk5hbWJpYXJcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIkNyeXB0b2dyYXBoeVwiLFxuICAgICAgICBcInRlYW1cIjogXCJIYXJkd2FyZVwiLFxuICAgICAgICBcImJhdGNoXCI6IDIwMjIsXG4gICAgICAgIFwiYWZmaWxpYXRpb25cIjogXCJWTXdhcmVcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcIlwiLFxuICAgICAgICBpbWc6Jy9pbWFnZXMvdGVhbS9hc2h3aW5uYW1iaWFyLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjYW1wdXNcIjogXCJBbXJpdGFwdXJpXCIsXG4gICAgICAgIFwiZmlyc3RuYW1lXCI6IFwiU2Vhc29uXCIsXG4gICAgICAgIFwibGFzdG5hbWVcIjogXCJDaGVyaWFuXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJDcnlwdG9ncmFwaHlcIixcbiAgICAgICAgXCJ0ZWFtXCI6IFwiSGFyZHdhcmVcIixcbiAgICAgICAgXCJiYXRjaFwiOiAyMDIyLFxuICAgICAgICBcImFmZmlsaWF0aW9uXCI6IFwiVk13YXJlXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJcIixcbiAgICAgICAgaW1nOicvaW1hZ2VzL3RlYW0vc2Vhc29uLnBuZydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJjYW1wdXNcIjogXCJBbXJpdGFwdXJpXCIsXG4gICAgICAgIFwiZmlyc3RuYW1lXCI6IFwiSGFyaXByYXNhZFwiLFxuICAgICAgICBcImxhc3RuYW1lXCI6IFwiXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJDcnlwdG9ncmFwaHlcIixcbiAgICAgICAgXCJ0ZWFtXCI6IFwiSGFyZHdhcmUgU2VjdXJpdHlcIixcbiAgICAgICAgXCJiYXRjaFwiOiAyMDIyLFxuICAgICAgICBcImFmZmlsaWF0aW9uXCI6IFwiVk13YXJlXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJcIixcbiAgICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY2FtcHVzXCI6IFwiQW1yaXRhcHVyaVwiLFxuICAgICAgICBcImZpcnN0bmFtZVwiOiBcIkhhcmlcIixcbiAgICAgICAgXCJsYXN0bmFtZVwiOiBcIlwiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiRW1iZWRkZWQgRGV2bG9wbWVudFwiLFxuICAgICAgICBcInRlYW1cIjogXCJIYXJkd2FyZVwiLFxuICAgICAgICBcImJhdGNoXCI6IDIwMjIsXG4gICAgICAgIFwiYWZmaWxpYXRpb25cIjogXCJWTXdhcmVcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY2FtcHVzXCI6IFwiQW1yaXRhcHVyaVwiLFxuICAgICAgICBcImZpcnN0bmFtZVwiOiBcIkthcnRoaWtcIixcbiAgICAgICAgXCJsYXN0bmFtZVwiOiBcIkxhZGVcIixcbiAgICAgICAgXCJjYXRlZ29yeVwiOiBcIkF1dG9tb3RpdmVcIixcbiAgICAgICAgXCJ0ZWFtXCI6IFwiSGFyZHdhcmVcIixcbiAgICAgICAgXCJiYXRjaFwiOiAyMDIyLFxuICAgICAgICBcImFmZmlsaWF0aW9uXCI6IFwiVk13YXJlXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcImNhbXB1c1wiOiBcIkFtcml0YXB1cmlcIixcbiAgICAgICAgXCJmaXJzdG5hbWVcIjogXCJBYXRoaXJhXCIsXG4gICAgICAgIFwibGFzdG5hbWVcIjogXCJEaW5lc2FuXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJBSS9NTFwiLFxuICAgICAgICBcInRlYW1cIjogXCJIYXJkd2FyZVwiLFxuICAgICAgICBcImJhdGNoXCI6IDIwMjIsXG4gICAgICAgIFwiYWZmaWxpYXRpb25cIjogXCJWTXdhcmVcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY2FtcHVzXCI6IFwiQW1yaXRhcHVyaVwiLFxuICAgICAgICBcImZpcnN0bmFtZVwiOiBcIkFyeWFcIixcbiAgICAgICAgXCJsYXN0bmFtZVwiOiBcIlN1cmVuZHJhblwiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiRW1iZWRkZWQgRGV2bG9wbWVudFwiLFxuICAgICAgICBcInRlYW1cIjogXCJIYXJkd2FyZVwiLFxuICAgICAgICBcImJhdGNoXCI6IDIwMjIsXG4gICAgICAgIFwiYWZmaWxpYXRpb25cIjogXCJWTXdhcmVcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY2FtcHVzXCI6IFwiQW1yaXRhcHVyaVwiLFxuICAgICAgICBcImZpcnN0bmFtZVwiOiBcIkFtaXRoYVwiLFxuICAgICAgICBcImxhc3RuYW1lXCI6IFwiRGVlcFwiLFxuICAgICAgICBcImNhdGVnb3J5XCI6IFwiRW1iZWRkZWQgRGV2bG9wbWVudFwiLFxuICAgICAgICBcInRlYW1cIjogXCJIYXJkd2FyZVwiLFxuICAgICAgICBcImJhdGNoXCI6IDIwMjIsXG4gICAgICAgIFwiYWZmaWxpYXRpb25cIjogXCJWTXdhcmVcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcIlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwiY2FtcHVzXCI6IFwiQW1yaXRhcHVyaVwiLFxuICAgICAgICBcImZpcnN0bmFtZVwiOiBcIktlZXJ0aGFuYVwiLFxuICAgICAgICBcImxhc3RuYW1lXCI6IFwiSyBNXCIsXG4gICAgICAgIFwiY2F0ZWdvcnlcIjogXCJTdXRvbW90aXZlXCIsXG4gICAgICAgIFwidGVhbVwiOiBcIkhhcmR3YXJlXCIsXG4gICAgICAgIFwiYmF0Y2hcIjogMjAyMixcbiAgICAgICAgXCJhZmZpbGlhdGlvblwiOiBcIlZNd2FyZVwiLFxuICAgICAgICBcImVtYWlsXCI6IFwiXCJcbiAgICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBhbHVtbmk7XG4iXSwibmFtZXMiOlsiYWx1bW5pIiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/data/alumni.ts\n"));

/***/ })

});