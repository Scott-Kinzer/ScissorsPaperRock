/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/buttons.js":
/*!***********************!*\
  !*** ./js/buttons.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buttonsLogic\": () => (/* binding */ buttonsLogic)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./js/logic.js\");\n/* harmony import */ var _reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset */ \"./js/reset.js\");\n\n\nlet buttonsLogic = () => {\n  const SCISSOR = document.querySelector('.scissor');\n  const ROCK = document.querySelector('.rock');\n  const PAPER = document.querySelector('.paper');\n  const RESET = document.querySelector('.reset');\n  let tableCheck = [];\n  let userOne = {\n    win: 0,\n    attempt: 0,\n    beat: 0\n  };\n  let userTwo = {\n    win: 0,\n    attempt: 1,\n    beat: 0\n  };\n  RESET.addEventListener('click', () => {\n    (0,_reset__WEBPACK_IMPORTED_MODULE_1__.reset)(userOne, userTwo);\n    console.log(\"lla\");\n    tableCheck = [];\n    console.log(userOne);\n    console.log(userTwo);\n  });\n\n  function checkWinner() {\n    if (userOne.beat === 2) {\n      let result = document.querySelector('.result');\n      result.textContent = \"USER ONE WON\";\n      userOne = {\n        win: 0,\n        attempt: 0,\n        beat: 0\n      };\n      userTwo = {\n        win: 0,\n        attempt: 1,\n        beat: 0\n      };\n    } else if (userTwo.beat === 2) {\n      let result = document.querySelector('.result');\n      result.textContent = \"USER TWO WON\";\n      console.log(\"USER TWO IS A WINNER\");\n      userOne = {\n        win: 0,\n        attempt: 0,\n        beat: 0\n      };\n      userTwo = {\n        win: 0,\n        attempt: 1,\n        beat: 0\n      };\n    }\n  }\n\n  SCISSOR.addEventListener('click', () => {\n    if (userOne.attempt % 2 === 0) {\n      tableCheck.push(\"SCISSORS_1\");\n\n      if (!(0,_logic__WEBPACK_IMPORTED_MODULE_0__.logicGame)(tableCheck, userOne, userTwo)) {\n        tableCheck = [];\n        userOne.attempt = 0;\n        userTwo.attempt = 1;\n      }\n\n      userOne.attempt += 1;\n      console.log(userOne, userTwo);\n    } else {\n      tableCheck.push(\"SCISSORS_2\");\n\n      if (!(0,_logic__WEBPACK_IMPORTED_MODULE_0__.logicGame)(tableCheck, userOne, userTwo)) {\n        tableCheck = [];\n        userOne.attempt = 0;\n        userTwo.attempt = 1;\n      }\n\n      console.log(userOne, userTwo);\n    }\n\n    checkWinner();\n  });\n  ROCK.addEventListener('click', () => {\n    if (userOne.attempt % 2 === 0) {\n      tableCheck.push(\"ROCK_1\");\n\n      if (!(0,_logic__WEBPACK_IMPORTED_MODULE_0__.logicGame)(tableCheck, userOne, userTwo)) {\n        tableCheck = [];\n        userOne.attempt = 0;\n        userTwo.attempt = 1;\n      }\n\n      userOne.attempt += 1;\n      console.log(userOne, userTwo);\n    } else {\n      tableCheck.push(\"ROCK_2\");\n\n      if (!(0,_logic__WEBPACK_IMPORTED_MODULE_0__.logicGame)(tableCheck, userOne, userTwo)) {\n        tableCheck = [];\n        userOne.attempt = 0;\n        userTwo.attempt = 1;\n      }\n\n      console.log(userOne, userTwo);\n    }\n\n    checkWinner();\n  });\n  PAPER.addEventListener('click', () => {\n    if (userOne.attempt % 2 === 0) {\n      tableCheck.push(\"PAPER_1\");\n\n      if (!(0,_logic__WEBPACK_IMPORTED_MODULE_0__.logicGame)(tableCheck, userOne, userTwo)) {\n        tableCheck = [];\n        userOne.attempt = 0;\n        userTwo.attempt = 1;\n      }\n\n      userOne.attempt += 1;\n      console.log(userOne, userTwo);\n    } else {\n      tableCheck.push(\"PAPER_2\");\n\n      if (!(0,_logic__WEBPACK_IMPORTED_MODULE_0__.logicGame)(tableCheck, userOne, userTwo)) {\n        tableCheck = [];\n        userOne.attempt = 0;\n        userTwo.attempt = 1;\n      }\n\n      console.log(userOne, userTwo);\n    }\n\n    checkWinner();\n  });\n};\n\n//# sourceURL=webpack://homework/./js/buttons.js?");

/***/ }),

/***/ "./js/logic.js":
/*!*********************!*\
  !*** ./js/logic.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logicGame\": () => (/* binding */ logicGame)\n/* harmony export */ });\nfunction logicGame(tableCheck, userOne, userTwo) {\n  let result = document.querySelector('.result');\n\n  if (tableCheck.length === 2) {\n    if (tableCheck.includes(\"SCISSORS_1\") && tableCheck.includes(\"PAPER_2\")) {\n      console.log(\"SCISSORS_1 WON\");\n      userOne.beat += 1;\n      result.textContent = `YOU WON , ROUND ${userOne.beat + userTwo.beat} PAPER VS SCISSORS`;\n    } else if (tableCheck.includes(\"PAPER_1\") && tableCheck.includes(\"ROCK_2\")) {\n      userOne.beat += 1;\n      console.log(\"PAPER_1 WON\");\n      result.textContent = `YOU WON, ROUND ${userOne.beat + userTwo.beat}PAPER VS ROCK`;\n    } else if (tableCheck.includes(\"ROCK_1\") && tableCheck.includes(\"SCISSORS_2\")) {\n      userTwo.beat += 1;\n      console.log(\"SCISSORS_2 WON\");\n      result.textContent = `YOU LOST, ROUND ${userOne.beat + userTwo.beat} ROCK VS SCISSORS`;\n    } else if (tableCheck.includes(\"SCISSORS_2\") && tableCheck.includes(\"PAPER_1\")) {\n      userOne.beat += 1;\n      console.log(\"PAPER_1 WON\");\n      result.textContent = `YOU WON,  ROUND ${userOne.beat + userTwo.beat} PAPER VS SCISSORS`;\n    } else if (tableCheck.includes(\"PAPER_2\") && tableCheck.includes(\"ROCK_1\")) {\n      userTwo.beat += 1;\n      console.log(\"PAPER_2 WON\");\n      result.textContent = ` YOU LOST, ROUND ${userOne.beat + userTwo.beat} PAPER VS ROCK`;\n    } else if (tableCheck.includes(\"ROCK_2\") && tableCheck.includes(\"SCISSORS_1\")) {\n      userTwo.beat += 1;\n      console.log(\"ROCK_2 WON\");\n      result.textContent = `YOU LOST, ROUND ${userOne.beat + userTwo.beat} ROCK VS SCISSORS`;\n    }\n\n    return false;\n  }\n\n  return true;\n}\n\n//# sourceURL=webpack://homework/./js/logic.js?");

/***/ }),

/***/ "./js/reset.js":
/*!*********************!*\
  !*** ./js/reset.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reset\": () => (/* binding */ reset)\n/* harmony export */ });\nfunction reset(obj1, obj2) {\n  let result = document.querySelector('.result');\n  result.textContent = \"\";\n  obj1.win = 0;\n  obj1.attempt = 0;\n  obj1.beat = 0;\n  obj2.win = 0;\n  obj2.attempt = 1;\n  obj2.beat = 0;\n}\n\n//# sourceURL=webpack://homework/./js/reset.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./js/buttons.js\");\n\n(0,_buttons__WEBPACK_IMPORTED_MODULE_0__.buttonsLogic)();\n\n//# sourceURL=webpack://homework/./js/script.js?");

/***/ }),

/***/ "./scss/buttons.scss":
/*!***************************!*\
  !*** ./scss/buttons.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://homework/./scss/buttons.scss?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://homework/./scss/style.scss?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./js/script.js");
/******/ 	__webpack_require__("./scss/style.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./scss/buttons.scss");
/******/ 	
/******/ })()
;