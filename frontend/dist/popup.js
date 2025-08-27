/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup/index.tsx":
/*!*****************************!*\
  !*** ./src/popup/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup */ "./src/popup/popup.tsx");




function init() {
    const appContainer = document.createElement('div');
    document.body.appendChild(appContainer);
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(appContainer);
    console.log(appContainer);
    root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popup__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}
init();


/***/ }),

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function Popup() {
    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const handleAnalyze = () => __awaiter(this, void 0, void 0, function* () {
        if (!url)
            return;
        setLoading(true);
        // 🔹 Replace with real backend call later
        setTimeout(() => {
            setResult({
                product: {
                    name: "Samsung Galaxy S24",
                    image: "https://via.placeholder.com/120",
                    price: "₹69,999",
                },
                reviews: {
                    rating: 4.2,
                    pros: ["Excellent camera", "Smooth performance"],
                    cons: ["Battery drains fast", "Bit expensive"],
                    verdict: "Worth Buying ✅",
                },
                price: {
                    current: 69999,
                    average: 72999,
                    lowest: 65999,
                    advice: "Current price close to all-time low. Buy Now ✅",
                },
                festive: {
                    upcoming: "Diwali Sale in 20 days",
                    note: "Phones usually drop 8-12% during Diwali sales. Waiting could save ~₹5,000.",
                },
            });
            setLoading(false);
        }, 1200);
    });
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-[350px] p-4 bg-white text-gray-800 font-sans" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", { className: "text-lg font-bold mb-3 text-center" }, "\uD83D\uDECD\uFE0F Smart Shopping Assistant"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex gap-2 mb-3" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "text", placeholder: "Paste product URL...", className: "flex-1 border p-2 rounded-lg text-sm focus:ring focus:ring-blue-400", value: url, onChange: (e) => setUrl(e.target.value) }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: handleAnalyze, disabled: !url || loading, className: `px-3 py-2 rounded-lg text-sm text-white
            ${!url || loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}` }, loading ? "Analyzing..." : "Analyze")),
        result && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "space-y-4" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex items-center gap-3 border p-2 rounded-lg shadow-sm" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: result.product.image, alt: result.product.name, className: "w-16 h-16 rounded-lg" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "font-semibold text-sm" }, result.product.name),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-blue-600 font-bold" }, result.product.price))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "border p-3 rounded-lg shadow-sm" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-semibold mb-1" },
                    "\u2B50 Reviews (",
                    result.reviews.rating,
                    "/5)"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "text-sm list-disc pl-5 text-green-600" }, result.reviews.pros.map((pro, i) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: i }, pro)))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", { className: "text-sm list-disc pl-5 text-red-600 mt-1" }, result.reviews.cons.map((con, i) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", { key: i }, con)))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "mt-2 font-semibold" }, result.reviews.verdict)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "border p-3 rounded-lg shadow-sm" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-semibold mb-1" }, "\uD83D\uDCC9 Price Analysis"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm" },
                    "Current: \u20B9",
                    result.price.current),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm" },
                    "Average: \u20B9",
                    result.price.average),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm" },
                    "Lowest: \u20B9",
                    result.price.lowest),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "mt-1 font-semibold text-blue-600" }, result.price.advice)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "border p-3 rounded-lg shadow-sm bg-yellow-50" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "font-semibold mb-1" }, "\uD83C\uDF89 Festive Sale Insight"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm" }, result.festive.upcoming),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-sm" }, result.festive.note))))));
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreactjs_chrome"] = self["webpackChunkreactjs_chrome"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e","src_assets_tailwind_css"], () => (__webpack_require__("./src/popup/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map