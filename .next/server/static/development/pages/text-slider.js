module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/msi/hello-next/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const linkStyle = {
  marginRight: 15
};

const Header = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/text-slider",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("a", {
  style: linkStyle,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "Slider")));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/SphereSlider/SphereSlider.js":
/*!*************************************************!*\
  !*** ./components/SphereSlider/SphereSlider.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SphereSlider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three-orbitcontrols */ "three-orbitcontrols");
/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(three_orbitcontrols__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TG_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TG.json */ "./components/SphereSlider/TG.json");
var _TG_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./TG.json */ "./components/SphereSlider/TG.json", 1);
/* harmony import */ var _glsl_fragment_glsl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../glsl/fragment.glsl */ "./glsl/fragment.glsl");
/* harmony import */ var _glsl_vertex_glsl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../glsl/vertex.glsl */ "./glsl/vertex.glsl");

var _jsxFileName = "/Users/msi/hello-next/components/SphereSlider/SphereSlider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 // import TRYGalien from './TRYGalien.woff2';

class SphereSlider extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "prepareTextGeometry", text => {
      const group = new three__WEBPACK_IMPORTED_MODULE_2__["Group"]();
      const glyphs = text.split('');

      for (let i = 0; i < glyphs.length; i++) {
        const shapes = this.font.generateShapes(glyphs[i], 100);
        const geometry = new three__WEBPACK_IMPORTED_MODULE_2__["ShapeBufferGeometry"](shapes);
        geometry.computeBoundingBox();
        group.add(new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](geometry, this.material));
      }

      ;
      console.log(group);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "animate", () => {
      this.material.needsUpdate = true;
      requestAnimationFrame(this.animate); // this.cube.rotation.x += 0.01;
      // this.cube.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    });
  }

  componentDidMount() {
    this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
    this.camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({
      alpha: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.position.z = 5;
    this.canvas.appendChild(this.renderer.domElement);
    this.color = 0xff0000;
    this.material = new three__WEBPACK_IMPORTED_MODULE_2__["RawShaderMaterial"]({
      uniforms: {
        uTime: {
          value: 1.0
        }
      },
      vertexShader: _glsl_vertex_glsl__WEBPACK_IMPORTED_MODULE_6__["default"],
      fragmentShader: _glsl_fragment_glsl__WEBPACK_IMPORTED_MODULE_5__["default"],
      side: three__WEBPACK_IMPORTED_MODULE_2__["DoubleSide"],
      transparent: true
    });
    this.controls = new three_orbitcontrols__WEBPACK_IMPORTED_MODULE_3___default.a(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.enableZoom = true;
    this.font = new three__WEBPACK_IMPORTED_MODULE_2__["Font"](_TG_json__WEBPACK_IMPORTED_MODULE_4__);
    const shapes = this.font.generateShapes('ODDA', 100);
    this.geometry = new three__WEBPACK_IMPORTED_MODULE_2__["ShapeBufferGeometry"](shapes);
    this.geometry.computeBoundingBox();
    this.xMid = -0.5 * (this.geometry.boundingBox.max.x - this.geometry.boundingBox.min.x);
    this.yMid = -0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y);
    this.geometry.translate(this.xMid, this.yMid, 0); // make shape ( N.B. edge view not visible )

    console.log(this.geometry);
    this.text = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](this.geometry, this.material);
    this.prepareTextGeometry('ODDA');
    this.text.position.z = 0;
    this.camera.position.z = 200;
    this.scene.add(this.text);
    this.animate();
  }

  render() {
    return __jsx("div", {
      ref: node => {
        this.canvas = node;
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    });
  }

}

/***/ }),

/***/ "./components/SphereSlider/TG.json":
/*!*****************************************!*\
  !*** ./components/SphereSlider/TG.json ***!
  \*****************************************/
/*! exports provided: glyphs, familyName, ascender, descender, underlinePosition, underlineThickness, boundingBox, resolution, original_font_information, cssFontWeight, cssFontStyle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"glyphs\":{\"0\":{\"ha\":678,\"x_min\":50,\"x_max\":626,\"o\":\"m 339 806 q 547 694 467 806 q 626 397 626 582 q 544 103 626 219 q 340 -14 463 -14 q 131 98 213 -14 q 50 394 50 210 q 133 688 50 571 q 339 806 217 806 m 343 19 q 463 119 419 19 q 506 396 506 218 q 461 672 506 574 q 336 769 417 769 q 215 671 258 769 q 171 397 171 572 q 216 118 171 217 q 343 19 261 19 z \"},\"1\":{\"ha\":431,\"x_min\":40,\"x_max\":379,\"o\":\"m 379 19 l 379 0 l 63 0 l 63 19 l 133 33 q 161 47 154 38 q 168 81 168 57 l 168 615 q 158 666 168 651 q 125 681 149 681 q 100 678 113 681 q 51 661 88 675 l 40 683 l 265 808 l 281 800 q 275 754 276 778 q 274 701 274 731 l 274 81 q 281 47 274 57 q 307 33 288 38 l 379 19 z \"},\"2\":{\"ha\":592,\"x_min\":40,\"x_max\":557,\"o\":\"m 557 171 l 521 0 l 40 0 l 40 15 q 333 350 254 235 q 413 560 413 465 q 372 673 413 631 q 263 715 332 715 q 142 671 190 715 q 63 535 93 626 l 44 538 q 129 736 64 667 q 299 806 194 806 q 463 746 403 806 q 524 592 524 686 q 448 392 524 497 q 169 100 372 286 l 169 97 l 433 97 q 494 106 476 97 q 521 139 511 114 l 535 174 l 557 171 z \"},\"3\":{\"ha\":568,\"x_min\":21,\"x_max\":519,\"o\":\"m 519 249 q 423 63 519 139 q 182 -14 326 -14 q 63 7 106 -14 q 21 67 21 28 q 29 98 21 82 q 60 139 38 114 l 67 139 q 144 58 103 83 q 242 33 186 33 q 373 82 325 33 q 421 213 421 131 q 366 339 421 292 q 219 386 311 386 q 177 383 199 386 q 136 372 156 379 l 128 403 q 310 490 253 442 q 368 606 368 538 q 333 687 368 657 q 239 717 299 717 q 128 683 175 717 q 58 586 82 650 l 42 592 q 124 749 61 692 q 279 806 188 806 q 419 760 365 806 q 474 646 474 715 q 435 540 474 585 q 317 464 396 494 l 317 461 q 465 391 410 450 q 519 249 519 332 z \"},\"4\":{\"ha\":631,\"x_min\":21,\"x_max\":607,\"o\":\"m 572 21 l 572 0 l 261 0 l 261 21 l 324 35 q 356 49 349 39 q 364 86 364 60 l 364 214 l 21 214 l 21 265 l 439 806 l 469 806 l 469 276 l 607 276 l 607 214 l 469 214 l 469 86 q 477 49 469 60 q 510 35 485 39 l 572 21 m 364 640 l 79 276 l 364 276 l 364 640 z \"},\"5\":{\"ha\":560,\"x_min\":17,\"x_max\":511,\"o\":\"m 511 254 q 415 63 511 140 q 178 -14 318 -14 q 59 7 101 -14 q 17 67 17 28 q 25 98 17 82 q 56 139 33 114 l 63 139 q 141 58 99 83 q 242 33 183 33 q 367 81 319 33 q 414 207 414 129 q 335 349 414 297 q 94 419 256 401 l 90 425 l 146 792 l 494 792 l 478 694 l 174 694 l 147 518 q 416 431 321 500 q 511 254 511 361 z \"},\"6\":{\"ha\":638,\"x_min\":46,\"x_max\":599,\"o\":\"m 46 304 q 160 629 46 492 q 478 814 275 767 l 483 792 q 249 613 331 735 q 167 324 167 492 q 213 101 167 183 q 338 19 258 19 q 444 74 404 19 q 483 221 483 129 q 441 366 483 314 q 321 418 399 418 q 264 410 292 418 q 213 386 236 401 l 200 403 q 291 462 233 436 q 382 488 349 488 q 538 423 478 488 q 599 258 599 358 q 522 63 599 139 q 325 -14 444 -14 q 123 73 200 -14 q 46 304 46 160 z \"},\"7\":{\"ha\":564,\"x_min\":44,\"x_max\":538,\"o\":\"m 538 775 l 238 0 l 156 0 l 156 15 l 464 692 l 168 692 q 108 682 126 692 q 78 642 90 672 l 64 607 l 44 610 l 71 792 l 538 792 l 538 775 z \"},\"8\":{\"ha\":617,\"x_min\":43,\"x_max\":574,\"o\":\"m 383 442 q 534 327 494 379 q 574 210 574 275 q 499 46 574 106 q 300 -14 424 -14 q 114 41 185 -14 q 43 188 43 96 q 84 304 43 256 q 225 404 125 353 q 113 497 146 451 q 81 603 81 543 q 149 749 81 693 q 326 806 218 806 q 482 758 422 806 q 542 631 542 710 q 504 526 542 571 q 383 442 467 481 m 311 771 q 214 737 251 771 q 176 646 176 703 q 211 556 176 597 q 353 457 246 515 q 424 528 401 488 q 447 624 447 568 q 411 732 447 693 q 311 771 375 771 m 253 389 q 174 309 200 356 q 149 199 149 263 q 192 67 149 115 q 310 19 235 19 q 426 60 381 19 q 472 168 472 101 q 453 242 472 208 q 396 306 435 276 q 347 337 382 317 q 253 389 311 357 z \"},\"9\":{\"ha\":639,\"x_min\":40,\"x_max\":593,\"o\":\"m 593 488 q 478 163 593 300 q 161 -22 364 25 l 156 0 q 390 178 308 57 q 472 468 472 300 q 426 690 472 608 q 301 772 381 772 q 195 717 235 772 q 156 571 156 663 q 198 426 156 478 q 318 374 240 374 q 375 382 347 374 q 426 406 403 390 l 439 389 q 348 330 406 356 q 257 304 290 304 q 101 369 161 304 q 40 533 40 433 q 117 729 40 653 q 314 806 194 806 q 516 719 439 806 q 593 488 593 632 z \"},\"\\u0000\":{\"ha\":0,\"x_min\":0,\"x_max\":0,\"o\":\"\"},\"\\r\":{\"ha\":0,\"x_min\":0,\"x_max\":0,\"o\":\"\"},\" \":{\"ha\":286,\"x_min\":0,\"x_max\":0,\"o\":\"\"},\"!\":{\"ha\":325,\"x_min\":89,\"x_max\":235,\"o\":\"m 226 664 l 175 233 l 149 233 l 97 664 q 93 695 94 681 q 92 719 92 710 q 110 783 92 760 q 161 806 128 806 q 213 783 194 806 q 232 719 232 760 q 231 695 232 710 q 226 664 229 681 m 110 110 q 120 121 110 110 q 161 132 131 132 q 213 110 192 132 q 235 58 235 89 q 213 7 235 28 q 161 -14 192 -14 q 110 7 131 -14 q 89 58 89 28 q 110 110 89 89 z \"},\"\\\"\":{\"ha\":451,\"x_min\":74,\"x_max\":378,\"o\":\"m 142 561 l 124 561 l 81 779 q 88 838 74 815 q 132 861 103 861 q 176 838 161 861 q 183 779 190 815 l 142 561 m 329 561 l 311 561 l 268 779 q 276 838 261 815 q 319 861 290 861 q 363 838 349 861 q 371 779 378 815 l 329 561 z \"},\"#\":{\"ha\":688,\"x_min\":35,\"x_max\":653,\"o\":\"m 206 219 l 164 0 l 124 0 l 165 219 l 35 219 l 42 258 l 174 258 l 226 532 l 96 532 l 103 571 l 233 571 l 276 792 l 317 792 l 274 571 l 479 571 l 522 792 l 563 792 l 519 571 l 653 571 l 646 532 l 513 532 l 460 258 l 592 258 l 585 219 l 451 219 l 410 0 l 369 0 l 411 219 l 206 219 m 267 532 l 214 258 l 419 258 l 472 532 l 267 532 z \"},\"$\":{\"ha\":651,\"x_min\":67,\"x_max\":569,\"o\":\"m 306 -14 l 292 -14 q 185 -1 239 -14 q 79 39 132 13 l 67 219 l 89 219 l 118 146 q 187 53 143 83 q 294 22 231 22 q 422 60 376 22 q 468 169 468 99 q 435 267 468 225 q 296 363 403 308 q 141 474 178 424 q 104 593 104 524 q 160 732 104 674 q 306 803 217 790 l 306 931 l 350 931 l 350 806 q 449 793 403 806 q 533 757 496 781 l 542 610 l 519 610 l 500 660 q 439 742 478 715 q 340 768 400 768 q 238 732 278 768 q 197 640 197 696 q 228 553 197 590 q 364 461 260 515 q 457 408 428 428 q 507 369 486 389 q 554 299 539 338 q 569 215 569 261 q 510 65 569 125 q 350 -10 451 6 l 350 -139 l 306 -139 l 306 -14 z \"},\"%\":{\"ha\":821,\"x_min\":24,\"x_max\":797,\"o\":\"m 295 741 q 318 712 295 741 q 340 594 340 683 q 295 447 340 506 q 181 388 250 388 q 68 447 113 388 q 24 594 24 506 q 68 741 24 683 q 181 799 113 799 q 295 741 250 799 m 107 594 q 126 458 107 504 q 182 411 144 411 q 238 458 218 411 q 257 594 257 506 q 238 728 257 682 q 181 775 218 775 q 126 729 144 775 q 107 594 107 683 m 650 771 l 201 0 l 167 19 l 617 792 l 650 771 m 752 345 q 775 316 752 345 q 797 199 797 288 q 752 51 797 110 q 638 -8 707 -8 q 525 51 569 -8 q 481 199 481 110 q 525 345 481 288 q 638 403 569 403 q 752 345 707 403 m 564 199 q 583 62 564 108 q 639 15 601 15 q 694 63 675 15 q 714 199 714 110 q 694 333 714 286 q 638 379 675 379 q 583 333 601 379 q 564 199 564 288 z \"},\"&\":{\"ha\":932,\"x_min\":47,\"x_max\":935,\"o\":\"m 571 156 q 428 26 499 67 q 278 -14 357 -14 q 112 45 176 -14 q 47 200 47 104 q 97 340 47 276 q 263 465 147 403 q 188 547 211 507 q 164 632 164 586 q 221 757 164 708 q 365 806 278 806 q 499 767 447 806 q 551 668 551 729 q 515 581 551 621 q 394 501 478 542 q 522 391 464 449 q 629 269 581 333 l 750 426 q 757 449 761 442 q 731 461 753 457 l 672 472 l 672 496 l 907 496 l 907 474 l 861 463 q 831 451 842 458 q 799 421 819 444 l 650 242 q 678 200 669 214 q 694 174 688 186 q 758 92 728 115 q 825 68 788 68 q 868 75 846 68 q 926 100 890 82 l 935 89 q 851 10 889 33 q 774 -14 814 -14 q 678 17 719 -14 q 597 114 638 47 q 592 122 594 118 q 585 135 590 126 q 576 147 578 143 q 571 156 574 151 m 349 775 q 280 747 307 775 q 253 672 253 718 q 276 606 254 638 q 372 518 297 574 q 431 583 411 544 q 451 667 451 621 q 423 745 451 715 q 349 775 394 775 m 286 446 q 188 351 218 400 q 157 242 157 301 q 206 115 157 164 q 333 67 254 67 q 448 94 396 67 q 551 185 500 122 q 435 319 500 256 q 296 439 371 383 q 292 442 294 440 q 286 446 289 444 z \"},\"'\":{\"ha\":264,\"x_min\":74,\"x_max\":190,\"o\":\"m 142 561 l 124 561 l 81 779 q 88 838 74 815 q 132 861 103 861 q 176 838 161 861 q 183 779 190 815 l 142 561 z \"},\"(\":{\"ha\":294,\"x_min\":67,\"x_max\":264,\"o\":\"m 155 631 q 135 564 155 631 q 115 351 115 497 q 155 71 115 206 q 264 -146 194 -64 l 242 -169 q 114 63 161 -79 q 67 351 67 204 q 114 640 67 499 q 242 872 161 781 l 264 849 q 155 631 194 765 z \"},\")\":{\"ha\":294,\"x_min\":29,\"x_max\":226,\"o\":\"m 53 -169 l 29 -146 q 138 72 99 -64 q 178 351 178 207 q 138 631 178 496 q 29 849 99 765 l 53 872 q 179 639 132 781 q 226 351 226 497 q 179 63 226 204 q 53 -169 132 -79 z \"},\"*\":{\"ha\":428,\"x_min\":42,\"x_max\":386,\"o\":\"m 249 594 l 256 468 l 233 463 l 197 585 l 89 501 l 72 519 l 172 625 l 42 693 l 50 715 l 181 674 l 172 801 l 194 806 l 232 685 l 340 767 l 356 749 l 253 644 l 386 575 l 379 554 l 249 594 z \"},\"+\":{\"ha\":694,\"x_min\":92,\"x_max\":601,\"o\":\"m 368 311 l 368 68 l 325 68 l 325 311 l 92 311 l 92 353 l 325 353 l 325 596 l 368 596 l 368 353 l 601 353 l 601 311 l 368 311 z \"},\",\":{\"ha\":247,\"x_min\":35,\"x_max\":203,\"o\":\"m 203 40 q 167 -68 203 -12 q 54 -190 132 -124 l 35 -168 q 105 -91 83 -124 q 126 -29 126 -58 q 115 3 126 -8 q 51 35 103 14 q 81 110 63 89 q 131 131 99 131 q 183 106 163 131 q 203 40 203 81 z \"},\"-\":{\"ha\":322,\"x_min\":28,\"x_max\":294,\"o\":\"m 294 314 l 28 314 l 28 375 l 294 375 l 294 314 z \"},\".\":{\"ha\":247,\"x_min\":50,\"x_max\":196,\"o\":\"m 71 110 q 81 121 71 110 q 122 132 92 132 q 174 110 153 132 q 196 58 196 89 q 174 7 196 28 q 122 -14 153 -14 q 71 7 92 -14 q 50 58 50 28 q 71 110 50 89 z \"},\"/\":{\"ha\":292,\"x_min\":-10,\"x_max\":301,\"o\":\"m 301 783 l 25 -6 l -10 7 l 265 797 l 301 783 z \"},\":\":{\"ha\":247,\"x_min\":50,\"x_max\":196,\"o\":\"m 71 110 q 81 121 71 110 q 122 132 92 132 q 174 110 153 132 q 196 58 196 89 q 174 7 196 28 q 122 -14 153 -14 q 71 7 92 -14 q 50 58 50 28 q 71 110 50 89 m 71 487 q 81 498 71 487 q 122 508 92 508 q 174 487 153 508 q 196 435 196 465 q 174 383 196 404 q 122 363 153 363 q 71 383 92 363 q 50 435 50 404 q 71 487 50 465 z \"},\";\":{\"ha\":247,\"x_min\":38,\"x_max\":206,\"o\":\"m 206 40 q 170 -68 206 -12 q 57 -190 135 -124 l 38 -168 q 108 -91 86 -124 q 129 -29 129 -58 q 117 3 129 -8 q 54 35 106 14 q 83 110 65 89 q 133 131 101 131 q 185 106 165 131 q 206 40 206 81 m 75 487 q 85 498 75 487 q 126 508 96 508 q 178 487 157 508 q 200 435 200 465 q 178 383 200 404 q 126 363 157 363 q 75 383 96 363 q 54 435 54 404 q 75 487 54 465 z \"},\"<\":{\"ha\":694,\"x_min\":92,\"x_max\":601,\"o\":\"m 601 136 l 601 89 l 92 310 l 92 350 l 601 571 l 601 525 l 147 331 l 601 136 z \"},\"=\":{\"ha\":694,\"x_min\":92,\"x_max\":601,\"o\":\"m 601 474 l 601 432 l 92 432 l 92 474 l 601 474 m 601 235 l 601 192 l 92 192 l 92 235 l 601 235 z \"},\">\":{\"ha\":694,\"x_min\":92,\"x_max\":601,\"o\":\"m 601 310 l 92 89 l 92 136 l 546 331 l 92 525 l 92 571 l 601 350 l 601 310 z \"},\"?\":{\"ha\":489,\"x_min\":67,\"x_max\":458,\"o\":\"m 200 303 l 194 233 l 167 233 l 149 388 q 152 424 146 414 q 192 444 158 433 q 323 514 283 475 q 363 611 363 553 q 326 714 363 674 q 232 754 289 754 q 181 740 207 754 q 114 688 154 726 l 107 688 q 76 731 86 713 q 67 764 67 749 q 90 795 67 785 q 161 806 113 806 q 372 734 286 806 q 458 560 458 663 q 408 425 458 478 q 238 336 357 372 q 209 324 215 329 q 200 303 203 318 m 128 110 q 138 121 128 110 q 179 132 149 132 q 231 110 210 132 q 253 58 253 89 q 231 7 253 28 q 179 -14 210 -14 q 128 7 149 -14 q 107 58 107 28 q 128 110 107 89 z \"},\"@\":{\"ha\":919,\"x_min\":56,\"x_max\":875,\"o\":\"m 597 86 q 759 176 685 86 q 833 386 833 265 q 763 569 833 504 q 563 633 692 633 q 392 599 475 633 q 242 504 308 565 q 137 359 174 440 q 100 190 100 278 q 188 -38 100 43 q 432 -119 275 -119 q 575 -99 504 -119 q 693 -43 646 -78 l 708 -68 q 582 -130 658 -107 q 428 -153 506 -153 q 158 -63 260 -153 q 56 181 56 26 q 96 369 56 279 q 210 526 136 458 q 375 630 282 593 q 565 667 468 667 q 792 594 708 667 q 875 394 875 521 q 849 259 875 324 q 774 143 824 194 q 658 60 724 90 q 531 31 593 31 q 480 56 493 31 q 485 122 467 81 l 489 133 q 406 59 451 88 q 326 31 361 31 q 258 60 283 31 q 232 139 232 89 q 264 263 232 197 q 351 381 296 328 q 474 462 408 436 q 600 476 539 488 l 610 504 l 706 515 l 575 132 q 573 97 568 107 q 597 86 578 86 m 540 438 q 401 347 471 438 q 332 158 332 257 q 343 108 332 125 q 375 92 354 92 q 460 142 417 92 q 533 279 504 193 l 564 365 q 569 418 575 399 q 540 438 563 438 z \"},\"A\":{\"ha\":828,\"x_min\":19,\"x_max\":808,\"o\":\"m 244 22 l 244 0 l 19 0 l 19 22 l 50 32 q 83 47 74 39 q 99 74 92 56 l 388 800 l 439 800 l 728 74 q 746 45 736 53 q 775 32 756 38 l 808 22 l 808 0 l 510 0 l 510 22 l 582 35 q 609 47 603 39 q 608 69 615 54 l 518 299 l 240 299 l 154 68 q 154 44 147 53 q 182 33 161 36 l 244 22 m 375 660 l 254 336 l 503 336 l 375 660 z \"},\"B\":{\"ha\":750,\"x_min\":57,\"x_max\":692,\"o\":\"m 453 422 q 629 365 567 417 q 692 225 692 313 q 608 61 692 122 q 385 0 525 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 403 792 q 581 742 513 792 q 649 610 649 692 q 597 489 649 539 q 453 422 544 439 m 371 754 l 263 754 l 263 438 l 381 438 q 489 480 451 438 q 526 597 526 522 q 488 715 526 676 q 371 754 449 754 m 565 218 q 519 353 565 307 q 382 400 472 400 l 263 400 l 263 92 q 274 49 263 61 q 310 38 285 38 l 392 38 q 519 85 474 38 q 565 218 565 132 z \"},\"C\":{\"ha\":843,\"x_min\":58,\"x_max\":772,\"o\":\"m 488 -14 q 177 96 296 -14 q 58 386 58 206 q 179 688 58 569 q 488 806 300 806 q 637 785 564 806 q 761 728 710 764 l 761 571 l 740 571 l 715 632 q 630 734 689 700 q 483 768 571 768 q 264 674 343 768 q 185 411 185 579 q 272 130 185 238 q 499 22 360 22 q 631 53 576 22 q 719 144 685 83 l 754 206 l 772 206 l 765 60 q 644 7 722 28 q 488 -14 567 -14 z \"},\"D\":{\"ha\":906,\"x_min\":57,\"x_max\":847,\"o\":\"m 847 399 q 724 108 847 217 q 390 0 601 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 386 792 q 724 685 600 792 q 847 399 847 579 m 721 385 q 633 658 721 564 q 375 753 544 753 l 263 753 l 263 90 q 274 49 263 61 q 310 38 285 38 l 389 38 q 635 128 549 38 q 721 385 721 219 z \"},\"E\":{\"ha\":732,\"x_min\":57,\"x_max\":679,\"o\":\"m 568 526 l 568 275 l 547 275 l 515 351 q 499 376 507 371 q 474 381 492 381 l 263 381 l 263 78 q 277 40 263 49 q 339 32 292 31 l 532 40 q 580 51 564 42 q 608 88 596 60 l 657 189 l 679 189 l 663 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 531 792 q 572 794 554 792 q 610 803 590 797 l 619 800 l 619 613 l 599 613 l 567 699 q 540 740 556 729 q 489 753 525 751 l 263 758 l 263 419 l 474 419 q 500 424 492 419 q 515 449 508 429 l 547 526 l 568 526 z \"},\"F\":{\"ha\":672,\"x_min\":57,\"x_max\":625,\"o\":\"m 383 22 l 383 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 535 792 q 577 794 558 792 q 615 803 596 797 l 625 800 l 625 613 l 603 613 l 572 699 q 544 740 560 729 q 494 753 529 751 l 263 758 l 263 392 l 479 392 q 506 397 497 392 q 521 421 514 401 l 553 499 l 574 499 l 574 233 l 553 233 l 521 324 q 507 347 515 342 q 479 353 499 353 l 263 353 l 263 90 q 270 53 263 63 q 311 36 278 43 l 383 22 z \"},\"G\":{\"ha\":888,\"x_min\":58,\"x_max\":865,\"o\":\"m 503 -14 q 181 96 303 -14 q 58 388 58 206 q 183 688 58 569 q 499 806 308 806 q 657 785 583 806 q 786 728 731 765 l 786 571 l 765 571 l 743 632 q 652 732 718 696 q 493 768 586 768 q 267 673 349 768 q 185 408 185 578 q 274 128 185 233 q 508 22 363 22 q 603 33 558 22 q 679 64 649 44 l 679 240 q 670 281 679 271 q 631 297 661 292 l 561 308 l 561 332 l 865 332 l 865 308 l 835 300 q 798 282 806 293 q 790 240 790 271 l 790 139 q 793 99 790 115 q 801 68 796 83 l 797 60 q 663 6 744 26 q 503 -14 582 -14 z \"},\"H\":{\"ha\":953,\"x_min\":57,\"x_max\":896,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 310 758 q 269 740 278 750 q 261 700 261 729 l 261 431 l 692 431 l 692 700 q 683 740 692 729 q 643 758 675 750 l 597 768 l 597 792 l 896 792 l 896 768 l 851 758 q 811 740 819 750 q 803 700 803 729 l 803 90 q 811 51 803 61 q 851 32 819 40 l 896 22 l 896 0 l 597 0 l 597 22 l 643 32 q 683 51 675 40 q 692 90 692 61 l 692 392 l 261 392 l 261 90 q 269 51 261 61 q 310 32 278 40 l 356 22 z \"},\"I\":{\"ha\":414,\"x_min\":57,\"x_max\":356,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 z \"},\"J\":{\"ha\":414,\"x_min\":21,\"x_max\":356,\"o\":\"m 32 -239 l 21 -215 q 126 -119 101 -160 q 150 -11 150 -78 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 10 q 213 -120 263 -65 q 32 -239 164 -175 z \"},\"K\":{\"ha\":840,\"x_min\":57,\"x_max\":833,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 425 l 586 717 q 599 741 603 731 q 571 757 594 751 l 515 768 l 515 792 l 794 792 l 794 768 l 753 758 q 703 744 721 753 q 665 721 685 736 l 357 463 l 703 86 q 743 53 724 64 q 800 32 763 43 l 833 22 l 833 0 l 488 0 l 488 22 l 547 35 q 576 49 572 40 q 565 75 581 57 l 263 403 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 z \"},\"L\":{\"ha\":693,\"x_min\":57,\"x_max\":668,\"o\":\"m 668 192 l 653 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 78 q 278 39 263 49 q 339 32 293 29 l 524 40 q 572 51 557 42 q 600 88 588 60 l 647 192 l 668 192 z \"},\"M\":{\"ha\":1088,\"x_min\":57,\"x_max\":1029,\"o\":\"m 307 22 l 307 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 257 792 l 544 138 l 821 792 l 1029 792 l 1029 768 l 985 758 q 944 740 953 750 q 936 700 936 729 l 936 90 q 944 51 936 61 q 985 32 953 40 l 1029 22 l 1029 0 l 731 0 l 731 22 l 775 32 q 815 51 807 40 q 824 90 824 61 l 824 675 l 533 -7 l 486 -7 l 200 643 l 200 90 q 209 49 200 60 q 249 32 218 38 l 307 22 z \"},\"N\":{\"ha\":939,\"x_min\":54,\"x_max\":883,\"o\":\"m 304 22 l 304 0 l 54 0 l 54 22 l 99 32 q 139 51 131 40 q 147 90 147 61 l 147 700 q 139 740 147 729 q 99 758 131 750 l 54 768 l 54 792 l 238 792 l 742 174 l 742 700 q 733 742 742 731 q 693 758 724 753 l 635 768 l 635 792 l 883 792 l 883 768 l 839 758 q 799 740 807 750 q 790 700 790 729 l 790 0 l 738 0 l 197 665 l 197 90 q 206 49 197 60 q 246 32 215 38 l 304 22 z \"},\"O\":{\"ha\":956,\"x_min\":58,\"x_max\":897,\"o\":\"m 897 401 q 777 103 897 221 q 481 -14 657 -14 q 178 98 297 -14 q 58 389 58 210 q 178 688 58 569 q 475 806 299 806 q 778 693 658 806 q 897 401 897 581 m 185 419 q 268 132 185 240 q 490 24 351 24 q 697 115 624 24 q 771 371 771 206 q 688 658 771 550 q 465 767 604 767 q 258 675 332 767 q 185 419 185 583 z \"},\"P\":{\"ha\":700,\"x_min\":57,\"x_max\":663,\"o\":\"m 383 22 l 383 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 375 792 q 584 733 506 792 q 663 574 663 674 q 573 397 663 464 q 328 331 483 331 l 310 331 l 310 353 l 329 356 q 488 415 436 365 q 540 558 540 465 q 492 703 540 653 q 351 754 443 754 l 263 754 l 263 90 q 270 53 263 63 q 311 36 278 43 l 383 22 z \"},\"Q\":{\"ha\":967,\"x_min\":58,\"x_max\":1319,\"o\":\"m 1118 -299 q 825 -226 988 -299 q 478 -14 663 -154 q 176 101 294 -11 q 58 389 58 213 q 177 688 58 569 q 469 806 296 806 q 776 693 656 806 q 897 401 897 581 q 826 158 897 263 q 632 11 754 54 q 954 -188 824 -131 q 1210 -246 1085 -246 q 1262 -241 1235 -246 q 1308 -229 1289 -236 l 1319 -251 q 1231 -286 1285 -274 q 1118 -299 1178 -299 m 185 419 q 270 133 185 242 q 496 24 356 24 q 699 115 628 24 q 771 371 771 206 q 685 658 771 549 q 460 767 600 767 q 257 676 329 767 q 185 419 185 585 z \"},\"R\":{\"ha\":800,\"x_min\":57,\"x_max\":803,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 379 792 q 576 735 501 792 q 651 588 651 679 q 600 460 651 514 q 464 388 549 406 l 676 89 q 713 49 699 57 q 764 31 726 40 l 803 22 l 803 0 l 653 0 q 606 6 619 0 q 576 36 592 13 l 389 318 q 354 350 374 342 q 296 358 335 358 l 263 358 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 m 346 754 l 263 754 l 263 396 l 339 396 q 483 441 435 396 q 531 576 531 486 q 483 708 531 661 q 346 754 435 754 z \"},\"S\":{\"ha\":651,\"x_min\":67,\"x_max\":569,\"o\":\"m 569 215 q 491 49 569 111 q 292 -14 413 -14 q 185 -1 239 -14 q 79 39 132 13 l 67 219 l 89 219 l 118 146 q 187 53 143 83 q 294 22 231 22 q 422 60 376 22 q 468 169 468 99 q 435 267 468 225 q 296 363 403 308 q 141 474 178 424 q 104 593 104 524 q 174 745 104 685 q 349 806 244 806 q 449 793 401 806 q 533 757 496 781 l 542 610 l 519 610 l 500 660 q 439 742 478 715 q 340 768 400 768 q 238 732 278 768 q 197 640 197 696 q 228 553 197 590 q 364 461 260 515 q 457 408 428 428 q 507 369 486 389 q 554 299 539 338 q 569 215 569 261 z \"},\"T\":{\"ha\":756,\"x_min\":31,\"x_max\":725,\"o\":\"m 526 22 l 526 0 l 228 0 l 228 22 l 272 32 q 313 51 304 40 q 321 90 321 61 l 321 753 l 160 753 q 109 742 125 753 q 83 700 93 731 l 51 599 l 31 599 l 31 800 l 39 803 q 77 794 58 797 q 119 792 96 792 l 635 792 q 677 794 658 792 q 715 803 696 797 l 725 800 l 725 599 l 703 599 l 672 700 q 647 741 664 729 q 594 753 631 753 l 433 753 l 433 90 q 442 51 433 61 q 482 32 450 40 l 526 22 z \"},\"U\":{\"ha\":910,\"x_min\":57,\"x_max\":854,\"o\":\"m 468 -14 q 234 64 318 -14 q 150 283 150 142 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 283 q 320 99 263 161 q 490 36 378 36 q 656 105 600 36 q 713 307 713 174 l 713 700 q 704 740 713 729 q 664 757 696 750 l 604 768 l 604 792 l 854 792 l 854 768 l 810 758 q 769 740 778 750 q 761 700 761 729 l 761 307 q 687 68 761 150 q 468 -14 613 -14 z \"},\"V\":{\"ha\":803,\"x_min\":4,\"x_max\":799,\"o\":\"m 429 -8 l 374 -8 l 88 718 q 69 747 79 739 q 39 760 58 756 l 4 768 l 4 792 l 306 792 l 306 767 l 233 754 q 206 742 211 750 q 206 719 200 735 l 442 126 l 663 721 q 664 745 669 738 q 636 757 658 753 l 576 767 l 576 792 l 799 792 l 799 768 l 765 758 q 735 745 744 753 q 717 718 725 738 l 429 -8 z \"},\"W\":{\"ha\":1171,\"x_min\":3,\"x_max\":1168,\"o\":\"m 443 -8 l 385 -8 l 83 718 q 65 748 74 740 q 36 760 56 756 l 3 768 l 3 792 l 285 792 l 285 767 l 229 754 q 201 742 207 750 q 201 719 196 735 l 451 107 l 567 385 l 422 718 q 403 747 414 739 q 374 760 393 756 l 342 768 l 342 792 l 614 792 l 614 767 l 564 754 q 537 741 543 749 q 538 717 531 733 l 643 471 l 749 721 q 751 742 756 735 q 721 757 746 749 l 683 767 l 683 792 l 893 792 l 893 768 l 851 758 q 824 747 833 754 q 803 718 814 740 l 665 422 l 800 107 l 1031 719 q 1031 744 1036 736 q 1003 756 1025 751 l 950 767 l 950 792 l 1168 792 l 1168 768 l 1135 758 q 1103 745 1113 753 q 1086 718 1093 738 l 793 -8 l 736 -8 l 590 329 l 443 -8 z \"},\"X\":{\"ha\":788,\"x_min\":4,\"x_max\":785,\"o\":\"m 242 24 l 242 0 l 8 0 l 8 22 l 43 32 q 74 43 64 36 q 99 72 83 50 l 333 390 l 107 717 q 78 747 90 739 q 43 760 67 754 l 4 768 l 4 792 l 329 792 l 329 767 l 263 754 q 234 742 239 750 q 239 718 229 733 l 419 460 l 604 722 q 607 743 614 735 q 576 756 600 751 l 519 767 l 519 792 l 756 792 l 756 768 l 718 758 q 692 748 701 754 q 663 718 682 742 l 440 429 l 688 75 q 716 43 703 53 q 749 31 729 33 l 785 22 l 785 0 l 467 0 l 467 24 l 532 36 q 560 49 556 40 q 556 72 565 57 l 356 360 l 157 68 q 153 47 147 56 q 185 35 160 39 l 242 24 z \"},\"Y\":{\"ha\":754,\"x_min\":3,\"x_max\":751,\"o\":\"m 526 22 l 526 0 l 228 0 l 228 22 l 272 32 q 313 51 304 40 q 321 90 321 61 l 321 333 l 89 718 q 64 750 74 744 q 38 760 54 756 l 3 768 l 3 792 l 315 792 l 315 767 l 243 754 q 215 742 221 750 q 215 719 208 733 l 415 383 l 614 717 q 617 742 624 732 q 588 757 611 751 l 528 768 l 528 792 l 751 792 l 751 768 l 721 760 q 695 749 704 756 q 668 714 686 742 l 432 342 l 432 90 q 440 51 432 61 q 481 32 449 40 l 526 22 z \"},\"Z\":{\"ha\":754,\"x_min\":33,\"x_max\":701,\"o\":\"m 701 192 l 686 0 l 33 0 l 33 19 l 531 753 l 200 753 q 147 741 164 753 q 122 700 131 729 l 90 599 l 69 599 l 69 800 l 79 803 q 117 794 99 797 q 158 792 135 792 l 676 792 l 676 772 l 176 33 l 557 40 q 605 50 589 40 q 633 88 621 60 l 681 192 l 701 192 z \"},\"[\":{\"ha\":274,\"x_min\":93,\"x_max\":242,\"o\":\"m 242 -144 l 240 -169 l 93 -160 l 93 863 l 240 872 l 242 847 l 169 839 q 144 829 151 838 q 138 797 138 821 l 138 -94 q 144 -126 138 -118 q 169 -136 151 -135 l 242 -144 z \"},\"\\\\\":{\"ha\":292,\"x_min\":-10,\"x_max\":301,\"o\":\"m 301 7 l 265 -6 l -10 783 l 25 797 l 301 7 z \"},\"]\":{\"ha\":274,\"x_min\":32,\"x_max\":179,\"o\":\"m 179 -160 l 33 -169 l 32 -144 l 103 -136 q 128 -126 121 -135 q 135 -94 135 -118 l 135 797 q 128 829 135 821 q 103 839 121 838 l 32 847 l 33 872 l 179 863 l 179 -160 z \"},\"^\":{\"ha\":694,\"x_min\":124,\"x_max\":569,\"o\":\"m 365 950 l 569 500 l 525 500 l 347 900 l 168 500 l 124 500 l 328 950 l 365 950 z \"},\"_\":{\"ha\":556,\"x_min\":28,\"x_max\":528,\"o\":\"m 528 -78 l 28 -78 l 28 -42 l 528 -42 l 528 -78 z \"},\"`\":{\"ha\":696,\"x_min\":260,\"x_max\":411,\"o\":\"m 324 808 l 411 579 l 390 569 l 272 790 q 263 811 265 803 q 260 826 260 819 q 267 844 260 838 q 286 851 275 851 q 306 841 297 851 q 324 808 315 831 z \"},\"a\":{\"ha\":503,\"x_min\":29,\"x_max\":500,\"o\":\"m 306 56 q 214 4 254 22 q 147 -14 174 -14 q 63 15 97 -14 q 29 90 29 44 q 56 155 29 129 q 149 204 83 181 l 304 258 l 304 351 q 277 426 304 400 q 201 453 250 453 q 162 448 181 453 q 131 435 143 443 q 111 415 117 425 q 106 385 106 404 q 108 364 106 378 q 117 333 111 350 q 90 322 106 326 q 64 318 74 318 q 39 328 49 318 q 29 356 29 339 q 109 455 29 400 q 257 510 189 510 q 364 476 321 510 q 407 392 407 442 l 407 114 q 417 69 407 83 q 449 56 426 56 q 469 58 458 56 q 493 64 481 60 l 500 47 q 428 3 463 19 q 376 -14 394 -14 q 327 3 344 -14 q 306 56 310 21 m 133 118 q 153 69 133 86 q 211 53 174 53 q 260 59 238 53 q 304 78 282 65 l 304 232 l 207 192 q 148 157 163 172 q 133 118 133 142 z \"},\"b\":{\"ha\":640,\"x_min\":35,\"x_max\":594,\"o\":\"m 594 272 q 513 66 594 146 q 306 -14 432 -14 q 190 2 249 -14 q 93 43 131 18 l 93 815 q 88 844 93 835 q 69 860 83 853 l 35 878 l 35 893 l 193 944 l 203 938 q 197 883 199 910 q 196 818 196 857 l 196 433 q 290 488 240 467 q 374 510 340 510 q 533 444 472 510 q 594 272 594 379 m 196 403 l 196 125 q 231 47 196 76 q 322 18 265 18 q 442 72 399 18 q 486 222 486 126 q 440 382 486 324 q 315 440 394 440 q 251 430 283 440 q 196 403 218 419 z \"},\"c\":{\"ha\":508,\"x_min\":44,\"x_max\":488,\"o\":\"m 285 -14 q 111 56 178 -14 q 44 236 44 125 q 126 434 44 358 q 329 510 208 510 q 430 493 390 510 q 469 453 469 476 q 458 424 469 442 q 429 389 447 407 l 422 389 q 347 458 372 442 q 296 474 322 474 q 192 422 231 474 q 154 283 154 371 q 206 126 154 185 q 344 68 257 68 q 410 77 378 68 q 476 104 443 86 l 488 89 q 388 17 449 49 q 285 -14 328 -14 z \"},\"d\":{\"ha\":640,\"x_min\":44,\"x_max\":619,\"o\":\"m 619 38 l 443 -11 l 443 63 q 349 8 400 31 q 265 -14 297 -14 q 106 52 167 -14 q 44 224 44 118 q 126 430 44 350 q 333 510 207 510 q 386 506 360 510 q 443 492 413 501 l 443 815 q 438 844 443 836 q 418 860 433 853 l 385 878 l 385 893 l 543 944 l 553 938 q 547 883 549 910 q 546 818 546 857 l 546 104 q 551 78 546 86 q 579 65 557 71 l 619 56 l 619 38 m 318 478 q 197 424 240 478 q 153 274 153 369 q 199 115 153 174 q 325 57 246 57 q 388 66 357 57 q 443 92 419 75 l 443 344 q 410 443 443 408 q 318 478 376 478 z \"},\"e\":{\"ha\":529,\"x_min\":44,\"x_max\":496,\"o\":\"m 293 -14 q 113 57 181 -14 q 44 244 44 128 q 117 435 44 361 q 296 510 190 510 q 436 465 383 510 q 493 342 489 421 l 488 328 l 150 328 q 149 314 149 322 l 149 292 q 200 127 149 186 q 344 68 251 68 q 416 77 381 68 q 485 104 451 86 l 496 89 q 399 17 460 47 q 293 -14 338 -14 m 388 382 q 358 451 388 424 q 285 479 329 479 q 201 448 235 479 q 156 358 168 417 l 363 358 q 383 363 378 358 q 388 382 388 368 z \"},\"f\":{\"ha\":399,\"x_min\":26,\"x_max\":481,\"o\":\"m 307 19 l 307 0 l 29 0 l 29 19 l 69 29 q 96 43 89 33 q 103 76 103 53 l 103 432 l 26 432 l 26 453 l 103 493 l 103 551 q 168 846 103 747 q 364 944 233 944 q 444 930 408 944 q 481 894 481 915 q 472 872 481 886 q 446 838 463 857 l 439 838 q 366 890 394 875 q 308 906 338 906 q 231 854 257 906 q 206 700 206 803 l 206 496 l 382 496 l 382 432 l 206 432 l 206 76 q 212 44 206 53 q 239 32 218 35 l 307 19 z \"},\"g\":{\"ha\":576,\"x_min\":35,\"x_max\":569,\"o\":\"m 489 319 q 426 188 489 240 q 275 136 363 136 q 230 140 251 136 q 188 150 208 143 q 144 103 156 119 q 133 69 133 88 q 151 31 133 44 q 201 17 168 17 l 431 17 q 532 -21 496 17 q 568 -122 568 -58 q 472 -310 568 -231 q 244 -389 375 -389 q 94 -342 154 -389 q 35 -224 35 -294 q 54 -176 35 -200 q 156 -74 74 -153 q 78 -40 107 -68 q 50 29 50 -12 q 73 76 50 49 q 158 163 96 103 q 83 226 110 186 q 57 319 57 267 q 122 456 57 401 q 275 510 186 510 q 301 508 288 510 q 331 503 314 507 q 375 492 340 501 q 440 482 410 482 l 569 482 l 569 429 l 450 429 q 479 378 469 406 q 489 319 489 350 m 163 329 q 195 211 163 257 q 279 165 228 165 q 358 203 331 165 q 386 313 386 242 q 355 435 386 390 q 269 481 324 481 q 192 440 221 481 q 163 329 163 399 m 129 -196 q 174 -301 129 -262 q 301 -339 219 -339 q 442 -292 386 -339 q 499 -174 499 -244 q 472 -100 499 -125 q 392 -75 444 -75 l 193 -75 q 143 -136 157 -110 q 129 -196 129 -162 z \"},\"h\":{\"ha\":618,\"x_min\":21,\"x_max\":600,\"o\":\"m 269 19 l 269 0 l 21 0 l 21 19 l 60 29 q 86 43 79 33 q 93 76 93 53 l 93 815 q 88 844 93 836 q 69 860 83 853 l 35 878 l 35 893 l 193 944 l 203 938 q 197 883 199 910 q 196 818 196 857 l 196 435 q 288 488 239 465 q 365 510 338 510 q 484 466 442 510 q 526 342 526 422 l 526 76 q 533 43 526 53 q 560 29 540 33 l 600 19 l 600 0 l 351 0 l 351 19 l 390 29 q 417 43 410 33 q 424 76 424 53 l 424 315 q 397 410 424 379 q 313 440 369 440 q 253 431 283 440 q 196 404 224 422 l 196 76 q 203 43 196 53 q 229 29 210 33 l 269 19 z \"},\"i\":{\"ha\":296,\"x_min\":25,\"x_max\":275,\"o\":\"m 222 746 q 205 703 222 721 q 163 686 188 686 q 121 703 138 686 q 104 746 104 719 q 121 788 104 771 q 163 804 138 804 q 205 787 188 804 q 222 746 222 769 m 275 19 l 275 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 203 458 204 481 q 201 385 201 436 l 201 76 q 208 43 201 53 q 235 29 215 33 l 275 19 z \"},\"j\":{\"ha\":276,\"x_min\":3,\"x_max\":217,\"o\":\"m 217 746 q 200 703 217 719 q 158 686 183 686 q 116 703 132 686 q 100 746 100 719 q 117 788 100 771 q 158 804 133 804 q 200 788 183 804 q 217 746 217 771 m 194 385 l 194 -112 q 151 -202 194 -158 q 14 -293 107 -246 l 3 -274 q 74 -201 56 -237 q 92 -103 92 -165 l 92 382 q 87 410 92 401 q 68 426 82 419 l 33 444 l 33 460 l 192 510 l 201 504 q 196 449 197 475 q 194 385 194 424 z \"},\"k\":{\"ha\":614,\"x_min\":19,\"x_max\":611,\"o\":\"m 269 19 l 269 0 l 19 0 l 19 19 l 60 29 q 86 43 79 33 q 93 76 93 53 l 93 815 q 88 844 93 835 q 69 860 83 853 l 35 878 l 35 893 l 193 944 l 203 938 q 197 883 199 910 q 196 818 196 857 l 196 76 q 203 43 196 53 q 229 29 210 33 l 269 19 m 574 28 l 611 19 l 611 0 l 350 0 l 350 19 l 397 28 q 412 36 410 31 q 407 51 414 42 l 218 272 l 218 281 l 413 442 q 417 455 419 449 q 404 464 415 461 l 338 476 l 338 496 l 589 496 l 589 476 l 522 463 q 497 456 507 460 q 476 443 488 451 l 311 319 l 524 63 q 550 39 539 46 q 574 28 561 32 z \"},\"l\":{\"ha\":292,\"x_min\":21,\"x_max\":269,\"o\":\"m 269 19 l 269 0 l 21 0 l 21 19 l 60 29 q 86 43 79 33 q 93 76 93 53 l 93 815 q 88 844 93 835 q 69 860 83 853 l 35 878 l 35 893 l 193 944 l 203 938 q 197 883 199 910 q 196 818 196 857 l 196 76 q 203 43 196 53 q 229 29 210 33 l 269 19 z \"},\"m\":{\"ha\":915,\"x_min\":25,\"x_max\":896,\"o\":\"m 275 19 l 275 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 202 453 203 463 q 201 435 201 444 q 289 488 242 467 q 364 510 336 510 q 444 490 410 510 q 496 431 479 469 q 587 487 539 464 q 664 510 635 510 q 781 465 739 510 q 822 340 822 421 l 822 76 q 829 43 822 53 q 856 29 836 33 l 896 19 l 896 0 l 647 0 l 647 19 l 686 29 q 713 43 706 33 q 719 76 719 53 l 719 321 q 694 411 719 382 q 615 440 668 440 q 560 431 589 440 q 504 406 532 422 q 510 374 508 390 q 513 340 513 358 l 513 76 q 519 43 513 53 q 546 29 526 33 l 585 19 l 585 0 l 336 0 l 336 19 l 376 29 q 403 43 396 33 q 410 76 410 53 l 410 321 q 386 411 410 382 q 314 440 363 440 q 257 431 286 440 q 201 404 228 421 l 201 76 q 208 43 201 53 q 235 29 215 33 l 275 19 z \"},\"n\":{\"ha\":624,\"x_min\":25,\"x_max\":606,\"o\":\"m 275 19 l 275 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 204 474 206 489 q 201 435 203 458 q 292 488 243 465 q 369 510 342 510 q 489 466 446 510 q 532 342 532 422 l 532 76 q 539 43 532 53 q 565 29 546 33 l 606 19 l 606 0 l 356 0 l 356 19 l 396 29 q 422 43 415 33 q 429 76 429 53 l 429 315 q 402 410 429 379 q 317 440 375 440 q 259 431 289 440 q 201 404 229 422 l 201 76 q 208 43 201 53 q 235 29 215 33 l 275 19 z \"},\"o\":{\"ha\":632,\"x_min\":44,\"x_max\":588,\"o\":\"m 588 251 q 507 63 588 139 q 317 -14 426 -14 q 119 55 193 -14 q 44 244 44 124 q 125 433 44 357 q 317 510 206 510 q 513 440 439 510 q 588 251 588 371 m 158 257 q 202 83 158 147 q 322 18 246 18 q 433 76 393 18 q 472 239 472 135 q 428 413 472 349 q 310 478 385 478 q 198 420 238 478 q 158 257 158 363 z \"},\"p\":{\"ha\":636,\"x_min\":17,\"x_max\":592,\"o\":\"m 592 272 q 510 66 592 146 q 303 -14 429 -14 q 250 -10 276 -14 q 193 4 224 -6 l 193 -299 q 199 -330 193 -321 q 226 -342 206 -339 l 294 -356 l 294 -375 l 17 -375 l 17 -356 l 57 -346 q 84 -331 78 -340 q 90 -299 90 -322 l 90 382 q 85 410 90 401 q 65 428 81 419 l 32 444 l 32 460 l 189 510 l 200 504 q 196 476 197 490 q 193 433 194 461 q 286 488 236 467 q 371 510 336 510 q 531 444 469 510 q 592 272 592 378 m 193 404 l 193 151 q 226 53 193 88 q 318 18 260 18 q 440 72 396 18 q 483 222 483 126 q 438 381 483 322 q 313 440 392 440 q 251 431 283 440 q 193 404 218 421 z \"},\"q\":{\"ha\":632,\"x_min\":44,\"x_max\":619,\"o\":\"m 44 224 q 126 431 44 351 q 336 510 207 510 q 405 503 368 510 q 478 483 442 496 l 529 519 l 546 519 l 546 -299 q 552 -331 546 -322 q 579 -346 558 -340 l 619 -356 l 619 -375 l 342 -375 l 342 -356 l 410 -342 q 437 -330 431 -339 q 443 -299 443 -321 l 443 63 q 349 8 400 31 q 265 -14 297 -14 q 106 52 167 -14 q 44 224 44 118 m 318 478 q 197 424 240 478 q 153 274 153 369 q 199 115 153 174 q 325 57 246 57 q 388 66 357 57 q 443 92 419 75 l 443 344 q 410 442 443 407 q 318 478 376 478 z \"},\"r\":{\"ha\":410,\"x_min\":25,\"x_max\":394,\"o\":\"m 303 19 l 303 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 203 460 204 479 q 201 411 201 440 q 290 483 250 457 q 351 510 329 510 q 382 499 369 510 q 394 472 394 489 q 389 441 394 461 q 372 397 383 421 l 367 396 q 317 409 332 406 q 292 413 301 413 q 244 406 267 413 q 201 383 222 399 l 201 76 q 208 44 201 53 q 235 32 214 35 l 303 19 z \"},\"s\":{\"ha\":449,\"x_min\":42,\"x_max\":401,\"o\":\"m 401 136 q 348 27 401 68 q 215 -14 294 -14 q 134 -5 175 -14 q 58 19 93 4 l 42 161 l 63 161 q 126 54 86 92 q 217 17 165 17 q 283 38 258 17 q 307 99 307 60 q 288 153 307 129 q 201 210 268 176 q 94 287 121 251 q 68 371 68 322 q 117 472 68 435 q 244 510 165 510 q 316 500 279 510 q 379 475 353 490 l 382 361 l 363 361 q 315 451 344 421 q 244 481 285 481 q 184 460 207 481 q 161 407 161 440 q 181 353 161 376 q 267 296 201 329 q 375 220 349 256 q 401 136 401 185 z \"},\"t\":{\"ha\":419,\"x_min\":21,\"x_max\":403,\"o\":\"m 231 -14 q 132 19 168 -14 q 96 111 96 53 l 96 432 l 21 432 l 21 449 l 183 588 l 199 588 l 199 496 l 390 496 l 390 432 l 199 432 l 199 157 q 224 84 199 108 q 300 60 250 60 q 346 65 324 60 q 393 83 368 71 l 403 65 q 313 9 364 32 q 231 -14 263 -14 z \"},\"u\":{\"ha\":608,\"x_min\":25,\"x_max\":590,\"o\":\"m 240 -14 q 128 28 168 -14 q 88 146 88 69 l 88 382 q 82 410 88 401 q 63 428 76 419 l 25 444 l 25 460 l 188 510 l 199 504 q 192 451 194 476 q 190 385 190 425 l 190 168 q 215 83 190 110 q 293 56 240 56 q 351 65 321 56 q 408 92 381 74 l 408 378 q 403 410 408 401 q 385 424 397 418 l 325 444 l 325 460 l 508 510 l 518 504 q 513 449 514 475 q 511 385 511 424 l 511 104 q 517 76 511 85 q 544 65 524 68 l 590 58 l 590 40 l 408 -11 l 408 61 q 317 8 367 31 q 240 -14 268 -14 z \"},\"v\":{\"ha\":572,\"x_min\":7,\"x_max\":564,\"o\":\"m 299 -21 l 269 -21 l 76 440 q 65 460 71 454 q 46 468 58 465 l 7 476 l 7 496 l 267 496 l 267 476 l 206 465 q 191 456 194 463 q 193 439 188 449 l 321 121 l 446 436 q 447 457 450 450 q 433 465 444 464 l 374 476 l 374 496 l 564 496 l 564 476 l 522 465 q 506 456 513 463 q 493 433 500 449 l 299 -21 z \"},\"w\":{\"ha\":843,\"x_min\":11,\"x_max\":832,\"o\":\"m 288 -21 l 257 -21 l 78 438 q 67 458 74 451 q 47 469 60 465 l 11 476 l 11 496 l 250 496 l 250 476 l 206 468 q 191 459 194 465 q 192 443 188 453 l 310 125 l 401 358 l 368 443 q 359 459 364 454 q 342 468 354 464 l 313 476 l 313 496 l 550 496 l 550 476 l 503 467 q 486 457 490 464 q 486 438 482 450 l 604 128 l 717 432 q 717 452 721 444 q 703 463 714 460 l 646 476 l 646 496 l 832 496 l 832 476 l 790 464 q 776 455 782 461 q 763 436 769 449 l 581 -21 l 551 -21 l 422 307 l 288 -21 z \"},\"x\":{\"ha\":571,\"x_min\":13,\"x_max\":558,\"o\":\"m 206 19 l 206 0 l 13 0 l 13 19 l 53 31 q 73 40 65 35 q 89 57 81 46 l 226 243 l 88 435 q 69 456 78 449 q 43 468 60 463 l 13 476 l 13 496 l 274 496 l 274 476 l 226 465 q 210 453 213 461 q 217 431 208 446 l 308 304 l 408 438 q 415 454 417 449 q 403 463 414 460 l 342 476 l 342 496 l 540 496 l 540 476 l 499 464 q 476 454 485 460 q 460 439 468 449 l 329 275 l 483 61 q 503 40 494 47 q 529 28 513 33 l 558 19 l 558 0 l 297 0 l 297 19 l 346 31 q 362 42 360 33 q 354 65 364 51 l 247 213 l 140 58 q 133 42 132 47 q 146 35 135 38 l 206 19 z \"},\"y\":{\"ha\":582,\"x_min\":6,\"x_max\":576,\"o\":\"m 113 -389 q 84 -375 97 -389 q 60 -333 71 -361 q 141 -277 115 -304 q 192 -192 167 -250 l 271 -15 l 75 440 q 63 460 68 456 q 46 468 57 465 l 6 476 l 6 496 l 265 496 l 265 476 l 206 465 q 190 457 193 464 q 190 439 186 450 l 328 113 l 331 113 l 458 429 q 461 451 464 443 q 449 463 458 460 l 393 476 l 393 496 l 576 496 l 576 476 l 533 461 q 519 453 524 458 q 507 431 514 447 l 206 -258 q 153 -363 172 -337 q 113 -389 133 -389 z \"},\"z\":{\"ha\":506,\"x_min\":35,\"x_max\":468,\"o\":\"m 468 151 l 453 0 l 35 0 l 35 15 l 328 465 l 144 465 q 124 462 129 465 q 114 447 118 458 l 72 349 l 54 349 l 58 496 l 454 496 l 454 481 l 161 31 l 363 31 q 381 33 375 31 q 393 49 386 36 l 449 151 l 468 151 z \"},\"{\":{\"ha\":288,\"x_min\":33,\"x_max\":256,\"o\":\"m 256 -142 l 246 -169 l 201 -154 q 117 -102 143 -135 q 92 -18 92 -69 q 96 27 92 1 q 114 108 100 53 q 131 186 126 161 q 135 229 135 211 q 110 308 135 283 q 33 336 86 332 l 33 365 q 110 394 86 369 q 135 474 135 418 q 131 517 135 492 q 114 594 126 542 q 96 676 100 650 q 92 721 92 701 q 117 805 92 772 q 201 857 143 838 l 246 872 l 256 844 l 222 832 q 156 789 172 813 q 139 726 139 765 q 143 675 139 704 q 161 586 147 646 q 176 514 172 536 q 179 475 179 492 q 156 398 179 431 q 90 353 132 365 l 90 350 q 156 303 133 336 q 179 228 179 271 q 176 189 179 211 q 161 117 172 167 q 143 28 147 57 q 139 -24 139 -1 q 156 -88 139 -64 q 222 -129 174 -112 l 256 -142 z \"},\"|\":{\"ha\":278,\"x_min\":119,\"x_max\":157,\"o\":\"m 157 931 l 157 -375 l 119 -375 l 119 931 l 157 931 z \"},\"}\":{\"ha\":288,\"x_min\":32,\"x_max\":254,\"o\":\"m 85 -153 l 40 -169 l 32 -142 l 65 -129 q 126 -87 108 -112 q 143 -21 143 -62 q 140 23 143 -3 q 125 107 136 49 q 112 188 115 164 q 108 228 108 213 q 131 304 108 272 q 196 350 153 336 l 196 353 q 131 398 153 367 q 108 475 108 429 q 112 515 108 490 q 125 594 115 539 q 140 679 136 653 q 143 724 143 706 q 126 789 143 764 q 65 832 110 814 l 32 844 l 40 872 l 85 856 q 167 803 143 835 q 190 722 190 772 q 187 686 190 708 q 174 611 183 664 q 157 524 161 551 q 153 476 153 496 q 177 394 153 418 q 254 367 201 369 l 254 335 q 176 308 200 332 q 153 225 153 285 q 157 178 153 206 q 174 92 161 151 q 187 17 183 39 q 190 -19 190 -6 q 167 -101 190 -69 q 85 -153 143 -132 z \"},\"~\":{\"ha\":694,\"x_min\":78,\"x_max\":615,\"o\":\"m 465 282 q 416 289 442 282 q 340 319 390 296 q 271 347 294 340 q 226 354 247 354 q 167 339 193 354 q 108 285 140 324 l 78 310 q 148 376 111 356 q 231 396 185 396 q 281 389 254 396 q 357 358 307 382 q 424 331 401 338 q 468 325 447 325 q 527 340 501 325 q 585 393 553 356 l 615 367 q 546 302 582 322 q 465 282 510 282 z \"},\" \":{\"ha\":286,\"x_min\":0,\"x_max\":0,\"o\":\"\"},\"¡\":{\"ha\":325,\"x_min\":90,\"x_max\":236,\"o\":\"m 99 -168 l 150 263 l 176 263 l 228 -168 q 232 -199 231 -185 q 233 -224 233 -214 q 215 -287 233 -264 q 164 -310 197 -310 q 112 -287 131 -310 q 93 -224 93 -264 q 94 -199 93 -214 q 99 -168 96 -185 m 215 385 q 205 375 215 385 q 164 364 194 364 q 112 385 133 364 q 90 438 90 407 q 112 489 90 468 q 164 510 133 510 q 215 489 194 510 q 236 438 236 468 q 215 385 236 407 z \"},\"¢\":{\"ha\":508,\"x_min\":44,\"x_max\":488,\"o\":\"m 299 -12 l 299 -139 l 257 -139 l 257 -12 q 103 65 161 -3 q 44 236 44 133 q 102 408 44 338 q 257 501 160 479 l 257 632 l 299 632 l 299 508 q 310 510 304 510 l 329 510 q 430 493 390 510 q 469 453 469 476 q 458 424 469 442 q 429 389 447 407 l 422 389 q 347 458 372 442 q 296 474 322 474 q 192 422 231 474 q 154 283 154 371 q 206 126 154 185 q 344 68 257 68 q 410 77 378 68 q 476 104 443 86 l 488 89 q 397 22 451 51 q 299 -12 342 -8 z \"},\"£\":{\"ha\":675,\"x_min\":18,\"x_max\":639,\"o\":\"m 82 0 q 31 29 43 17 q 18 60 18 42 q 55 112 18 89 q 146 142 92 135 q 203 219 183 175 q 224 315 224 264 q 221 350 224 333 q 213 383 218 367 l 57 383 l 57 419 l 199 419 q 180 458 193 431 q 160 503 167 486 q 146 549 150 526 q 142 593 142 571 q 221 747 142 688 q 429 806 300 806 q 542 785 499 806 q 586 732 586 764 q 575 700 586 718 q 540 661 564 682 l 533 661 q 422 740 467 717 q 338 764 376 764 q 260 733 289 764 q 232 649 232 701 q 240 595 232 622 q 276 517 249 568 q 306 459 297 479 q 319 419 314 439 l 572 419 l 572 383 l 325 383 q 326 375 326 379 l 326 361 q 288 233 326 292 q 181 143 249 175 q 256 137 219 143 q 350 114 293 131 q 416 96 393 100 q 461 92 439 92 q 541 116 508 92 q 611 203 574 140 l 639 193 q 554 33 597 79 q 453 -14 511 -14 q 386 -1 418 -14 q 303 49 354 11 q 239 90 261 81 q 193 100 217 100 q 140 81 163 100 q 82 0 117 61 z \"},\"¤\":{\"ha\":694,\"x_min\":92,\"x_max\":601,\"o\":\"m 201 178 l 124 100 l 93 132 l 169 208 q 129 276 143 238 q 115 356 115 314 q 129 434 115 396 q 168 503 143 472 l 92 579 l 122 610 l 200 532 q 265 568 229 556 q 340 581 301 581 q 418 567 381 581 q 488 526 456 553 l 571 610 l 601 578 l 518 494 q 553 428 540 464 q 565 356 565 393 q 553 283 565 318 q 517 217 540 247 l 601 132 l 569 100 l 485 185 q 417 144 454 158 q 340 131 381 131 q 267 143 303 131 q 201 178 231 156 m 208 489 q 182 463 208 489 q 157 356 157 436 q 208 222 157 275 q 340 168 258 168 q 472 221 422 168 q 522 356 522 274 q 472 489 522 436 q 340 542 422 542 q 208 489 258 542 z \"},\"¥\":{\"ha\":758,\"x_min\":3,\"x_max\":753,\"o\":\"m 633 383 l 125 383 l 125 419 l 301 419 l 97 718 q 72 747 85 739 q 39 760 60 756 l 3 768 l 3 792 l 317 792 l 317 767 l 244 754 q 221 742 226 751 q 224 721 215 733 l 419 431 l 610 717 q 615 742 621 732 q 589 757 610 753 l 529 768 l 529 792 l 753 792 l 753 768 l 722 760 q 691 745 703 754 q 663 714 679 736 l 458 419 l 633 419 l 633 383 m 322 279 l 125 279 l 125 315 l 633 315 l 633 279 l 435 279 l 435 90 q 443 51 435 61 q 483 32 451 40 l 528 22 l 528 0 l 229 0 l 229 22 l 274 32 q 314 51 306 40 q 322 90 322 61 l 322 279 z \"},\"¦\":{\"ha\":278,\"x_min\":119,\"x_max\":157,\"o\":\"m 157 931 l 157 417 l 119 417 l 119 931 l 157 931 m 157 139 l 157 -375 l 119 -375 l 119 139 l 157 139 z \"},\"§\":{\"ha\":506,\"x_min\":42,\"x_max\":463,\"o\":\"m 463 165 q 383 -31 463 43 q 169 -104 304 -104 q 85 -88 118 -104 q 51 -46 51 -72 q 60 -15 51 -32 q 86 21 69 1 l 93 21 q 177 -40 144 -24 q 244 -56 210 -56 q 310 -35 286 -56 q 335 21 335 -14 q 308 99 335 56 q 224 201 282 142 q 82 378 122 303 q 42 542 42 454 q 119 731 42 656 q 314 806 197 806 q 400 790 367 806 q 433 750 433 775 q 424 721 433 736 q 396 688 415 706 l 389 688 q 314 742 344 726 q 250 757 283 757 q 191 736 213 757 q 169 679 169 715 q 190 612 169 647 q 274 508 210 576 q 423 321 383 394 q 463 165 463 247 m 260 265 q 346 159 313 211 q 390 61 379 107 q 381 242 414 156 q 239 439 347 329 q 160 538 193 486 q 117 635 128 589 q 126 457 92 546 q 260 265 160 368 z \"},\"¨\":{\"ha\":696,\"x_min\":181,\"x_max\":513,\"o\":\"m 299 746 q 282 703 299 721 q 240 686 265 686 q 197 703 214 686 q 181 746 181 719 q 198 788 181 771 q 240 804 215 804 q 281 787 264 804 q 299 746 299 769 m 513 746 q 496 703 513 719 q 454 686 479 686 q 412 703 428 686 q 396 746 396 719 q 413 788 396 771 q 454 804 429 804 q 496 788 479 804 q 513 746 513 771 z \"},\"©\":{\"ha\":1050,\"x_min\":36,\"x_max\":1013,\"o\":\"m 874 739 q 943 670 874 739 q 1013 396 1013 601 q 874 53 1013 190 q 525 -85 736 -85 q 173 51 310 -85 q 36 396 36 188 q 173 740 36 604 q 525 876 310 876 q 874 739 736 876 m 86 396 q 210 79 86 206 q 528 -47 333 -47 q 840 79 718 -47 q 963 396 963 206 q 837 712 963 585 q 521 839 711 839 q 207 714 328 839 q 86 396 86 589 m 551 138 q 334 206 415 138 q 253 389 253 274 q 341 581 253 506 q 565 656 429 656 q 667 642 615 656 q 751 606 719 628 l 751 501 l 735 501 l 722 535 q 661 603 704 579 q 558 628 618 628 q 427 572 474 628 q 381 413 381 515 q 427 230 381 293 q 563 167 474 167 q 648 189 611 167 q 715 258 685 211 l 736 290 l 747 290 l 744 185 q 663 151 717 164 q 551 138 608 138 z \"},\"ª\":{\"ha\":340,\"x_min\":29,\"x_max\":339,\"o\":\"m 333 571 l 339 558 q 286 525 311 538 q 249 513 261 513 q 214 524 226 513 q 199 557 201 535 q 142 524 168 536 q 100 513 117 513 q 49 530 68 513 q 29 578 29 547 q 47 620 29 603 q 103 650 64 638 l 197 685 l 197 735 q 180 779 197 763 q 133 796 163 796 q 113 793 122 796 q 97 785 104 790 q 88 774 92 781 q 85 757 85 767 q 86 740 85 750 q 92 717 88 729 q 72 708 82 711 q 53 706 61 706 q 36 713 43 706 q 29 732 29 721 q 83 801 29 764 q 185 839 138 839 q 254 815 224 839 q 285 758 285 792 l 285 596 q 291 572 285 581 q 308 564 297 564 q 320 565 314 564 q 333 571 326 567 m 117 603 q 127 575 117 585 q 158 565 138 565 q 178 567 168 565 q 197 575 188 569 l 197 665 l 158 649 q 126 628 135 639 q 117 603 117 618 m 338 454 l 338 410 l 29 410 l 29 454 l 338 454 z \"},\"«\":{\"ha\":444,\"x_min\":40,\"x_max\":368,\"o\":\"m 93 247 l 201 0 l 174 -15 l 40 238 l 40 257 l 174 510 l 201 494 l 93 247 m 260 247 l 368 0 l 340 -15 l 207 238 l 207 257 l 340 510 l 368 494 l 260 247 z \"},\"¬\":{\"ha\":693,\"x_min\":96,\"x_max\":596,\"o\":\"m 596 472 l 596 206 l 554 206 l 554 431 l 96 431 l 96 472 l 596 472 z \"},\"­\":{\"ha\":0,\"x_min\":0,\"x_max\":0,\"o\":\"\"},\"®\":{\"ha\":832,\"x_min\":35,\"x_max\":797,\"o\":\"m 690 664 q 743 610 690 664 q 797 396 797 557 q 690 127 797 235 q 417 19 582 19 q 142 126 249 19 q 35 396 35 233 q 142 665 35 558 q 417 771 249 771 q 690 664 582 771 m 76 396 q 172 150 76 247 q 419 53 268 53 q 661 151 567 53 q 756 396 756 249 q 658 640 756 542 q 414 739 561 739 q 169 642 263 739 q 76 396 76 546 m 421 233 l 421 214 l 232 214 l 232 233 l 257 238 q 277 246 272 240 q 282 267 282 251 l 282 554 q 278 575 282 569 q 257 583 274 581 l 232 589 l 232 607 l 407 607 q 538 579 489 607 q 586 504 586 551 q 556 441 586 467 q 475 407 525 415 l 588 264 q 608 244 603 247 q 629 238 614 240 l 651 233 l 651 214 l 547 214 q 522 217 531 214 q 504 236 514 221 l 413 365 q 394 381 403 376 q 368 385 385 385 l 365 385 l 365 267 q 370 246 365 251 q 390 238 375 240 l 421 233 m 404 583 l 365 583 l 365 408 l 393 408 q 465 433 440 408 q 490 501 490 457 q 467 561 490 539 q 404 583 443 583 z \"},\"¯\":{\"ha\":696,\"x_min\":172,\"x_max\":521,\"o\":\"m 521 707 l 172 707 l 172 757 l 521 757 l 521 707 z \"},\"°\":{\"ha\":399,\"x_min\":32,\"x_max\":367,\"o\":\"m 318 780 q 342 756 318 780 q 367 663 367 732 q 318 545 367 593 q 199 497 269 497 q 81 545 129 497 q 32 663 32 593 q 81 780 32 732 q 199 828 129 828 q 318 780 269 828 m 122 743 q 107 727 122 743 q 92 663 92 711 q 122 582 92 614 q 199 550 153 550 q 275 582 244 550 q 306 663 306 614 q 275 743 306 711 q 199 775 244 775 q 122 743 153 775 z \"},\"±\":{\"ha\":694,\"x_min\":92,\"x_max\":601,\"o\":\"m 368 447 l 368 219 l 325 219 l 325 447 l 92 447 l 92 489 l 325 489 l 325 726 l 368 726 l 368 489 l 601 489 l 601 447 l 368 447 m 601 40 l 601 0 l 92 0 l 92 40 l 601 40 z \"},\"²\":{\"ha\":310,\"x_min\":18,\"x_max\":294,\"o\":\"m 294 629 l 271 518 l 18 518 l 18 526 q 160 683 118 625 q 201 789 201 740 q 183 842 201 824 q 129 861 164 861 q 71 841 94 861 q 31 779 47 821 l 21 779 q 67 883 32 846 q 154 921 101 921 q 242 891 210 921 q 275 814 275 861 q 236 716 275 768 q 110 589 197 664 l 110 586 l 238 586 q 261 591 254 586 q 274 608 268 596 l 281 631 l 294 629 z \"},\"³\":{\"ha\":299,\"x_min\":11,\"x_max\":279,\"o\":\"m 279 640 q 226 548 279 585 q 92 511 174 511 q 33 522 54 511 q 11 554 11 533 q 17 574 11 563 q 35 596 24 585 l 40 596 q 81 552 58 567 q 129 538 104 538 q 192 560 168 538 q 215 619 215 582 q 188 678 215 656 q 115 701 161 701 q 91 699 104 701 q 67 693 78 697 l 61 710 q 153 755 125 732 q 181 811 181 778 q 163 848 181 833 q 117 863 146 863 q 63 847 85 863 q 29 799 40 831 l 19 801 q 62 889 28 857 q 149 921 96 921 q 224 899 196 921 q 251 840 251 876 q 233 790 251 811 q 171 754 214 769 l 171 753 q 250 716 221 747 q 279 640 279 685 z \"},\"´\":{\"ha\":696,\"x_min\":283,\"x_max\":435,\"o\":\"m 304 569 l 283 579 l 371 808 q 389 842 379 832 q 410 851 399 851 q 428 844 421 851 q 435 826 435 838 q 432 811 435 819 q 422 790 429 803 l 304 569 z \"},\"µ\":{\"ha\":610,\"x_min\":25,\"x_max\":590,\"o\":\"m 240 -14 q 172 -2 201 -14 q 122 33 142 10 l 122 -62 q 149 -217 122 -156 q 233 -326 175 -279 l 235 -333 q 205 -375 221 -361 q 172 -389 189 -389 q 108 -306 131 -389 q 86 -64 86 -222 l 88 265 l 88 382 q 82 410 88 401 q 63 428 76 419 l 25 444 l 25 460 l 188 510 l 199 504 q 192 451 194 476 q 190 385 190 425 l 190 168 q 215 83 190 110 q 293 56 240 56 q 351 65 321 56 q 408 92 381 74 l 408 378 q 403 410 408 401 q 385 424 397 418 l 325 444 l 325 460 l 508 510 l 518 504 q 513 449 514 475 q 511 385 511 424 l 511 104 q 517 76 511 85 q 544 65 524 68 l 590 58 l 590 40 l 408 -11 l 408 61 q 317 8 367 31 q 240 -14 268 -14 z \"},\"¶\":{\"ha\":619,\"x_min\":26,\"x_max\":592,\"o\":\"m 517 18 q 462 -176 517 -110 q 300 -242 407 -242 q 207 -225 247 -242 q 167 -185 167 -208 q 177 -155 167 -172 q 206 -118 188 -137 l 214 -118 q 290 -183 261 -165 q 349 -200 319 -200 q 424 -150 400 -200 q 449 6 449 -100 q 446 79 449 40 q 433 192 443 118 q 427 249 429 231 q 424 285 425 268 l 358 285 q 118 358 210 285 q 26 556 26 432 q 110 728 26 665 q 339 792 193 792 l 592 792 l 592 768 l 547 758 q 512 743 521 753 q 497 706 503 733 q 488 623 492 676 q 485 501 485 569 q 488 394 485 450 q 501 232 492 338 q 514 99 511 143 q 517 18 517 56 z \"},\"·\":{\"ha\":694,\"x_min\":285,\"x_max\":410,\"o\":\"m 392 506 q 401 497 392 506 q 410 461 410 488 q 392 417 410 435 q 347 399 374 399 q 303 417 321 399 q 285 461 285 435 q 303 506 285 488 q 347 525 321 525 q 392 506 374 525 z \"},\"¸\":{\"ha\":694,\"x_min\":238,\"x_max\":457,\"o\":\"m 457 -201 q 411 -279 457 -249 q 299 -310 365 -310 q 253 -301 269 -310 q 238 -276 238 -293 q 242 -260 238 -268 q 264 -235 247 -251 q 306 -268 286 -258 q 351 -278 325 -278 q 394 -262 378 -278 q 411 -224 411 -247 q 379 -168 411 -193 q 285 -126 347 -143 l 285 -117 l 347 0 l 382 0 l 336 -85 q 426 -133 396 -103 q 457 -201 457 -162 z \"},\"¹\":{\"ha\":233,\"x_min\":18,\"x_max\":213,\"o\":\"m 213 532 l 213 518 l 32 518 l 32 532 l 68 539 q 81 547 78 542 q 85 563 85 551 l 85 810 q 78 841 85 832 q 57 850 72 850 q 45 849 51 850 q 25 843 39 847 l 18 856 l 156 925 l 164 921 q 160 896 161 908 q 160 860 160 883 l 160 563 q 163 545 160 550 q 176 539 167 540 l 213 532 z \"},\"º\":{\"ha\":389,\"x_min\":21,\"x_max\":368,\"o\":\"m 194 839 q 319 797 271 839 q 367 681 367 754 q 316 560 367 607 q 192 513 265 513 q 68 555 115 513 q 21 671 21 597 q 72 791 21 743 q 194 839 124 839 m 190 813 q 135 780 154 813 q 117 683 117 747 q 137 575 117 613 q 196 538 157 538 q 251 570 232 538 q 269 667 269 603 q 249 774 269 736 q 190 813 228 813 m 368 454 l 368 410 l 21 410 l 21 454 l 368 454 z \"},\"»\":{\"ha\":444,\"x_min\":76,\"x_max\":403,\"o\":\"m 104 -15 l 76 0 l 183 247 l 76 494 l 104 510 l 236 257 l 236 238 l 104 -15 m 271 -15 l 243 0 l 350 247 l 243 494 l 271 510 l 403 257 l 403 238 l 271 -15 z \"},\"¼\":{\"ha\":631,\"x_min\":18,\"x_max\":611,\"o\":\"m 213 410 l 213 396 l 32 396 l 32 410 l 68 417 q 81 424 78 419 q 85 440 85 429 l 85 688 q 78 719 85 710 q 57 728 72 728 q 45 726 51 728 q 25 721 39 725 l 18 733 l 156 803 l 164 799 q 160 774 161 786 q 160 738 160 761 l 160 440 q 163 423 160 428 q 176 417 167 418 l 213 410 m 536 771 l 88 0 l 53 19 l 503 792 l 536 771 m 593 17 l 593 0 l 419 0 l 419 17 l 444 21 q 465 28 460 22 q 469 50 469 33 l 469 100 l 307 100 l 307 133 l 518 403 l 543 403 l 543 140 l 611 140 l 611 100 l 543 100 l 543 50 q 548 28 543 33 q 568 21 553 22 l 593 17 m 469 300 l 342 140 l 469 140 l 469 300 z \"},\"½\":{\"ha\":658,\"x_min\":18,\"x_max\":642,\"o\":\"m 213 410 l 213 396 l 32 396 l 32 410 l 68 417 q 81 424 78 419 q 85 440 85 429 l 85 688 q 78 719 85 710 q 57 728 72 728 q 45 726 51 728 q 25 721 39 725 l 18 733 l 156 803 l 164 799 q 160 774 161 786 q 160 738 160 761 l 160 440 q 163 423 160 428 q 176 417 167 418 l 213 410 m 536 771 l 88 0 l 53 19 l 503 792 l 536 771 m 642 111 l 618 0 l 365 0 l 365 8 q 507 165 465 107 q 549 271 549 222 q 530 324 549 306 q 476 343 511 343 q 418 323 442 343 q 378 261 394 303 l 368 261 q 414 365 379 328 q 501 403 449 403 q 590 373 557 403 q 622 296 622 343 q 583 198 622 250 q 457 71 544 146 l 457 68 l 585 68 q 608 73 601 68 q 621 90 615 78 l 628 113 l 642 111 z \"},\"¾\":{\"ha\":731,\"x_min\":11,\"x_max\":711,\"o\":\"m 279 518 q 226 426 279 463 q 92 389 174 389 q 33 400 54 389 q 11 432 11 411 q 17 451 11 440 q 35 474 24 463 l 40 474 q 81 430 58 444 q 129 415 104 415 q 192 438 168 415 q 215 497 215 460 q 188 556 215 533 q 115 579 161 579 q 91 577 104 579 q 67 571 78 575 l 61 588 q 153 633 125 610 q 181 689 181 656 q 163 726 181 711 q 117 740 146 740 q 63 724 85 740 q 29 676 40 708 l 19 679 q 62 767 28 735 q 149 799 96 799 q 224 776 196 799 q 251 718 251 754 q 233 668 251 689 q 171 632 214 647 l 171 631 q 250 594 221 625 q 279 518 279 563 m 601 771 l 153 0 l 118 19 l 568 792 l 601 771 m 693 17 l 693 0 l 519 0 l 519 17 l 544 21 q 565 28 560 22 q 569 50 569 33 l 569 100 l 407 100 l 407 133 l 618 403 l 643 403 l 643 140 l 711 140 l 711 100 l 643 100 l 643 50 q 648 28 643 33 q 668 21 653 22 l 693 17 m 569 300 l 442 140 l 569 140 l 569 300 z \"},\"¿\":{\"ha\":489,\"x_min\":31,\"x_max\":422,\"o\":\"m 289 193 l 294 263 l 322 263 l 340 108 q 337 72 343 82 q 297 51 331 63 q 166 -18 206 21 q 126 -115 126 -57 q 163 -218 126 -178 q 257 -258 200 -258 q 308 -244 282 -258 q 375 -192 335 -231 l 382 -192 q 413 -235 403 -217 q 422 -268 422 -253 q 399 -299 422 -289 q 328 -310 376 -310 q 117 -238 203 -310 q 31 -64 31 -167 q 81 71 31 18 q 251 160 132 124 q 280 172 274 167 q 289 193 286 178 m 361 385 q 351 375 361 385 q 310 364 340 364 q 258 385 279 364 q 236 438 236 407 q 258 489 236 468 q 310 510 279 510 q 361 489 340 510 q 382 438 382 468 q 361 385 382 407 z \"},\"À\":{\"ha\":828,\"x_min\":19,\"x_max\":808,\"o\":\"m 244 22 l 244 0 l 19 0 l 19 22 l 50 32 q 83 47 74 39 q 99 74 92 56 l 388 800 l 439 800 l 728 74 q 746 45 736 53 q 775 32 756 38 l 808 22 l 808 0 l 510 0 l 510 22 l 582 35 q 609 47 603 39 q 608 69 615 54 l 518 299 l 240 299 l 154 68 q 154 44 147 53 q 182 33 161 36 l 244 22 m 375 660 l 254 336 l 503 336 l 375 660 m 363 1022 l 417 867 l 394 857 l 314 1003 q 305 1024 307 1017 q 303 1036 303 1031 q 310 1053 303 1047 q 328 1060 317 1060 q 347 1051 339 1060 q 363 1022 356 1042 z \"},\"Á\":{\"ha\":828,\"x_min\":19,\"x_max\":808,\"o\":\"m 244 22 l 244 0 l 19 0 l 19 22 l 50 32 q 83 47 74 39 q 99 74 92 56 l 388 800 l 439 800 l 728 74 q 746 45 736 53 q 775 32 756 38 l 808 22 l 808 0 l 510 0 l 510 22 l 582 35 q 609 47 603 39 q 608 69 615 54 l 518 299 l 240 299 l 154 68 q 154 44 147 53 q 182 33 161 36 l 244 22 m 375 660 l 254 336 l 503 336 l 375 660 m 424 857 l 401 867 l 454 1018 q 472 1050 464 1040 q 492 1060 481 1060 q 510 1053 503 1060 q 517 1036 517 1047 q 514 1023 517 1031 q 504 1000 511 1015 l 424 857 z \"},\"Â\":{\"ha\":828,\"x_min\":19,\"x_max\":808,\"o\":\"m 244 22 l 244 0 l 19 0 l 19 22 l 50 32 q 83 47 74 39 q 99 74 92 56 l 388 800 l 439 800 l 728 74 q 746 45 736 53 q 775 32 756 38 l 808 22 l 808 0 l 510 0 l 510 22 l 582 35 q 609 47 603 39 q 608 69 615 54 l 518 299 l 240 299 l 154 68 q 154 44 147 53 q 182 33 161 36 l 244 22 m 375 660 l 254 336 l 503 336 l 375 660 m 447 1031 l 558 871 l 536 857 l 408 1001 l 407 1001 l 278 857 l 256 871 l 367 1031 q 387 1054 379 1049 q 407 1060 394 1060 q 426 1053 418 1060 q 447 1031 435 1047 z \"},\"Ã\":{\"ha\":828,\"x_min\":19,\"x_max\":808,\"o\":\"m 244 22 l 244 0 l 19 0 l 19 22 l 50 32 q 83 47 74 39 q 99 74 92 56 l 388 800 l 439 800 l 728 74 q 746 45 736 53 q 775 32 756 38 l 808 22 l 808 0 l 510 0 l 510 22 l 582 35 q 609 47 603 39 q 608 69 615 54 l 518 299 l 240 299 l 154 68 q 154 44 147 53 q 182 33 161 36 l 244 22 m 375 660 l 254 336 l 503 336 l 375 660 m 489 908 q 463 913 479 908 q 413 933 447 918 q 360 955 376 950 q 333 960 344 960 q 306 951 317 960 q 288 918 296 942 l 268 869 l 244 879 l 267 940 q 299 1000 283 985 q 343 1015 315 1015 q 368 1010 353 1015 q 418 990 383 1006 q 470 969 454 974 q 496 964 486 964 q 523 972 513 964 q 544 1007 533 981 l 565 1053 l 589 1043 l 565 983 q 531 922 546 936 q 489 908 515 908 z \"},\"Ä\":{\"ha\":828,\"x_min\":19,\"x_max\":808,\"o\":\"m 244 22 l 244 0 l 19 0 l 19 22 l 50 32 q 83 47 74 39 q 99 74 92 56 l 388 800 l 439 800 l 728 74 q 746 45 736 53 q 775 32 756 38 l 808 22 l 808 0 l 510 0 l 510 22 l 582 35 q 609 47 603 39 q 608 69 615 54 l 518 299 l 240 299 l 154 68 q 154 44 147 53 q 182 33 161 36 l 244 22 m 375 660 l 254 336 l 503 336 l 375 660 m 368 963 q 351 920 368 938 q 310 903 335 903 q 267 919 283 903 q 250 963 250 936 q 267 1004 250 988 q 310 1021 285 1021 q 351 1003 333 1021 q 368 963 368 986 m 571 963 q 554 919 571 936 q 513 903 538 903 q 470 919 486 903 q 454 963 454 936 q 471 1004 454 988 q 513 1021 488 1021 q 554 1004 538 1021 q 571 963 571 988 z \"},\"Å\":{\"ha\":828,\"x_min\":19,\"x_max\":808,\"o\":\"m 244 22 l 244 0 l 19 0 l 19 22 l 50 32 q 83 47 74 39 q 99 74 92 56 l 388 800 l 439 800 l 728 74 q 746 45 736 53 q 775 32 756 38 l 808 22 l 808 0 l 510 0 l 510 22 l 582 35 q 609 47 603 39 q 608 69 615 54 l 518 299 l 240 299 l 154 68 q 154 44 147 53 q 182 33 161 36 l 244 22 m 375 660 l 254 336 l 503 336 l 375 660 m 414 1051 q 501 1024 467 1051 q 536 951 536 996 q 501 872 536 903 q 411 842 465 842 q 321 869 356 842 q 286 942 286 897 q 322 1021 286 990 q 414 1051 357 1051 m 415 867 q 468 888 449 867 q 488 946 488 908 q 465 1006 488 982 q 408 1029 443 1029 q 354 1007 375 1029 q 333 947 333 985 q 356 890 333 913 q 415 867 379 867 z \"},\"Æ\":{\"ha\":1108,\"x_min\":3,\"x_max\":1056,\"o\":\"m 229 22 l 229 0 l 3 0 l 3 22 l 33 32 q 63 45 54 38 q 86 74 72 53 l 474 700 q 480 735 488 722 q 440 756 472 747 l 383 768 l 383 792 l 907 792 q 949 794 931 792 q 988 803 968 797 l 996 800 l 996 613 l 975 613 l 943 699 q 917 740 932 729 q 865 753 901 751 l 667 758 l 667 406 l 850 406 q 876 410 868 406 q 892 435 885 415 l 924 513 l 944 513 l 944 261 l 924 261 l 892 338 q 876 362 885 357 q 850 367 868 367 l 667 367 l 667 78 q 681 40 667 49 q 743 33 696 31 l 908 40 q 956 51 940 42 q 986 88 972 60 l 1033 189 l 1056 189 l 1039 0 l 461 0 l 461 22 l 507 32 q 547 51 539 40 q 556 90 556 61 l 556 318 l 293 318 l 143 68 q 139 44 133 53 q 167 33 144 36 l 229 22 m 556 753 l 317 357 l 556 357 l 556 753 z \"},\"Ç\":{\"ha\":843,\"x_min\":58,\"x_max\":772,\"o\":\"m 597 -201 q 551 -279 597 -249 q 439 -310 506 -310 q 394 -301 410 -310 q 378 -276 378 -293 q 383 -260 378 -268 q 404 -235 388 -251 q 446 -268 426 -258 q 492 -278 465 -278 q 535 -262 518 -278 q 551 -224 551 -247 q 519 -168 551 -193 q 425 -126 488 -143 l 425 -117 l 481 -14 q 175 99 292 -11 q 58 386 58 208 q 179 688 58 569 q 488 806 300 806 q 637 785 564 806 q 761 728 710 764 l 761 571 l 740 571 l 715 632 q 630 734 689 700 q 483 768 571 768 q 264 674 343 768 q 185 411 185 579 q 272 130 185 238 q 499 22 360 22 q 631 53 576 22 q 719 144 685 83 l 754 206 l 772 206 l 765 60 q 657 10 725 31 q 515 -14 589 -10 l 476 -85 q 567 -133 536 -103 q 597 -201 597 -162 z \"},\"È\":{\"ha\":732,\"x_min\":57,\"x_max\":679,\"o\":\"m 568 526 l 568 275 l 547 275 l 515 351 q 499 376 507 371 q 474 381 492 381 l 263 381 l 263 78 q 277 40 263 49 q 339 32 292 31 l 532 40 q 580 51 564 42 q 608 88 596 60 l 657 189 l 679 189 l 663 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 531 792 q 572 794 554 792 q 610 803 590 797 l 619 800 l 619 613 l 599 613 l 567 699 q 540 740 556 729 q 489 753 525 751 l 263 758 l 263 419 l 474 419 q 500 424 492 419 q 515 449 508 429 l 547 526 l 568 526 m 338 1022 l 392 867 l 369 857 l 289 1003 q 280 1024 282 1017 q 278 1036 278 1031 q 285 1053 278 1047 q 303 1060 292 1060 q 322 1051 314 1060 q 338 1022 331 1042 z \"},\"É\":{\"ha\":732,\"x_min\":57,\"x_max\":679,\"o\":\"m 568 526 l 568 275 l 547 275 l 515 351 q 499 376 507 371 q 474 381 492 381 l 263 381 l 263 78 q 277 40 263 49 q 339 32 292 31 l 532 40 q 580 51 564 42 q 608 88 596 60 l 657 189 l 679 189 l 663 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 531 792 q 572 794 554 792 q 610 803 590 797 l 619 800 l 619 613 l 599 613 l 567 699 q 540 740 556 729 q 489 753 525 751 l 263 758 l 263 419 l 474 419 q 500 424 492 419 q 515 449 508 429 l 547 526 l 568 526 m 394 857 l 372 867 l 425 1018 q 443 1050 435 1040 q 463 1060 451 1060 q 481 1053 474 1060 q 488 1036 488 1047 q 485 1023 488 1031 q 475 1000 482 1015 l 394 857 z \"},\"Ê\":{\"ha\":732,\"x_min\":57,\"x_max\":679,\"o\":\"m 568 526 l 568 275 l 547 275 l 515 351 q 499 376 507 371 q 474 381 492 381 l 263 381 l 263 78 q 277 40 263 49 q 339 32 292 31 l 532 40 q 580 51 564 42 q 608 88 596 60 l 657 189 l 679 189 l 663 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 531 792 q 572 794 554 792 q 610 803 590 797 l 619 800 l 619 613 l 599 613 l 567 699 q 540 740 556 729 q 489 753 525 751 l 263 758 l 263 419 l 474 419 q 500 424 492 419 q 515 449 508 429 l 547 526 l 568 526 m 421 1031 l 532 871 l 510 857 l 382 1001 l 381 1001 l 251 857 l 229 871 l 340 1031 q 360 1054 353 1049 q 381 1060 368 1060 q 400 1053 392 1060 q 421 1031 408 1047 z \"},\"Ë\":{\"ha\":732,\"x_min\":57,\"x_max\":679,\"o\":\"m 568 526 l 568 275 l 547 275 l 515 351 q 499 376 507 371 q 474 381 492 381 l 263 381 l 263 78 q 277 40 263 49 q 339 32 292 31 l 532 40 q 580 51 564 42 q 608 88 596 60 l 657 189 l 679 189 l 663 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 531 792 q 572 794 554 792 q 610 803 590 797 l 619 800 l 619 613 l 599 613 l 567 699 q 540 740 556 729 q 489 753 525 751 l 263 758 l 263 419 l 474 419 q 500 424 492 419 q 515 449 508 429 l 547 526 l 568 526 m 342 963 q 325 920 342 938 q 283 903 308 903 q 240 919 257 903 q 224 963 224 936 q 241 1004 224 988 q 283 1021 258 1021 q 324 1003 307 1021 q 342 963 342 986 m 544 963 q 528 919 544 936 q 486 903 511 903 q 444 919 460 903 q 428 963 428 936 q 444 1004 428 988 q 486 1021 461 1021 q 528 1004 511 1021 q 544 963 544 988 z \"},\"Ì\":{\"ha\":414,\"x_min\":57,\"x_max\":356,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 m 161 1022 l 215 867 l 193 857 l 113 1003 q 103 1024 106 1017 q 101 1036 101 1031 q 108 1053 101 1047 q 126 1060 115 1060 q 146 1051 138 1060 q 161 1022 154 1042 z \"},\"Í\":{\"ha\":414,\"x_min\":57,\"x_max\":356,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 m 218 857 l 196 867 l 249 1018 q 267 1050 258 1040 q 286 1060 275 1060 q 304 1053 297 1060 q 311 1036 311 1047 q 308 1023 311 1031 q 299 1000 306 1015 l 218 857 z \"},\"Î\":{\"ha\":414,\"x_min\":53,\"x_max\":356,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 m 244 1031 l 356 871 l 333 857 l 206 1001 l 204 1001 l 75 857 l 53 871 l 164 1031 q 184 1054 176 1049 q 204 1060 192 1060 q 224 1053 215 1060 q 244 1031 232 1047 z \"},\"Ï\":{\"ha\":414,\"x_min\":47,\"x_max\":368,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 m 165 963 q 149 920 165 938 q 107 903 132 903 q 64 919 81 903 q 47 963 47 936 q 65 1004 47 988 q 107 1021 82 1021 q 148 1003 131 1021 q 165 963 165 986 m 368 963 q 351 919 368 936 q 310 903 335 903 q 267 919 283 903 q 251 963 251 936 q 268 1004 251 988 q 310 1021 285 1021 q 351 1004 335 1021 q 368 963 368 988 z \"},\"Ð\":{\"ha\":906,\"x_min\":57,\"x_max\":847,\"o\":\"m 150 382 l 57 382 l 57 419 l 150 419 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 386 792 q 724 685 600 792 q 847 399 847 579 q 724 108 847 217 q 390 0 601 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 382 m 721 385 q 633 658 721 564 q 375 753 544 753 l 263 753 l 263 419 l 458 419 l 458 382 l 263 382 l 263 90 q 274 49 263 61 q 310 38 285 38 l 389 38 q 635 128 549 38 q 721 385 721 219 z \"},\"Ñ\":{\"ha\":939,\"x_min\":54,\"x_max\":883,\"o\":\"m 304 22 l 304 0 l 54 0 l 54 22 l 99 32 q 139 51 131 40 q 147 90 147 61 l 147 700 q 139 740 147 729 q 99 758 131 750 l 54 768 l 54 792 l 238 792 l 742 174 l 742 700 q 733 742 742 731 q 693 758 724 753 l 635 768 l 635 792 l 883 792 l 883 768 l 839 758 q 799 740 807 750 q 790 700 790 729 l 790 0 l 738 0 l 197 665 l 197 90 q 206 49 197 60 q 246 32 215 38 l 304 22 m 549 908 q 523 913 539 908 q 472 933 507 918 q 420 955 436 950 q 393 960 404 960 q 366 951 376 960 q 347 918 356 942 l 328 869 l 304 879 l 326 940 q 359 1000 343 985 q 403 1015 375 1015 q 428 1010 413 1015 q 478 990 443 1006 q 530 969 514 974 q 556 964 546 964 q 583 972 572 964 q 604 1007 593 981 l 625 1053 l 649 1043 l 625 983 q 590 922 606 936 q 549 908 575 908 z \"},\"Ò\":{\"ha\":956,\"x_min\":58,\"x_max\":897,\"o\":\"m 897 401 q 777 103 897 221 q 481 -14 657 -14 q 178 98 297 -14 q 58 389 58 210 q 178 688 58 569 q 475 806 299 806 q 778 693 658 806 q 897 401 897 581 m 185 419 q 268 132 185 240 q 490 24 351 24 q 697 115 624 24 q 771 371 771 206 q 688 658 771 550 q 465 767 604 767 q 258 675 332 767 q 185 419 185 583 m 429 1022 l 483 867 l 461 857 l 381 1003 q 372 1024 374 1017 q 369 1036 369 1031 q 376 1053 369 1047 q 394 1060 383 1060 q 414 1051 406 1060 q 429 1022 422 1042 z \"},\"Ó\":{\"ha\":956,\"x_min\":58,\"x_max\":897,\"o\":\"m 897 401 q 777 103 897 221 q 481 -14 657 -14 q 178 98 297 -14 q 58 389 58 210 q 178 688 58 569 q 475 806 299 806 q 778 693 658 806 q 897 401 897 581 m 185 419 q 268 132 185 240 q 490 24 351 24 q 697 115 624 24 q 771 371 771 206 q 688 658 771 550 q 465 767 604 767 q 258 675 332 767 q 185 419 185 583 m 492 857 l 469 867 l 522 1018 q 540 1050 532 1040 q 560 1060 549 1060 q 578 1053 571 1060 q 585 1036 585 1047 q 582 1023 585 1031 q 572 1000 579 1015 l 492 857 z \"},\"Ô\":{\"ha\":956,\"x_min\":58,\"x_max\":897,\"o\":\"m 897 401 q 777 103 897 221 q 481 -14 657 -14 q 178 98 297 -14 q 58 389 58 210 q 178 688 58 569 q 475 806 299 806 q 778 693 658 806 q 897 401 897 581 m 185 419 q 268 132 185 240 q 490 24 351 24 q 697 115 624 24 q 771 371 771 206 q 688 658 771 550 q 465 767 604 767 q 258 675 332 767 q 185 419 185 583 m 515 1031 l 626 871 l 604 857 l 476 1001 l 475 1001 l 346 857 l 324 871 l 435 1031 q 455 1054 447 1049 q 475 1060 463 1060 q 494 1053 486 1060 q 515 1031 503 1047 z \"},\"Õ\":{\"ha\":956,\"x_min\":58,\"x_max\":897,\"o\":\"m 897 401 q 777 103 897 221 q 481 -14 657 -14 q 178 98 297 -14 q 58 389 58 210 q 178 688 58 569 q 475 806 299 806 q 778 693 658 806 q 897 401 897 581 m 185 419 q 268 132 185 240 q 490 24 351 24 q 697 115 624 24 q 771 371 771 206 q 688 658 771 550 q 465 767 604 767 q 258 675 332 767 q 185 419 185 583 m 557 908 q 531 913 547 908 q 481 933 515 918 q 428 955 444 950 q 401 960 413 960 q 374 951 385 960 q 356 918 364 942 l 336 869 l 313 879 l 335 940 q 367 1000 351 985 q 411 1015 383 1015 q 436 1010 421 1015 q 486 990 451 1006 q 538 969 522 974 q 564 964 554 964 q 591 972 581 964 q 613 1007 601 981 l 633 1053 l 657 1043 l 633 983 q 599 922 614 936 q 557 908 583 908 z \"},\"Ö\":{\"ha\":956,\"x_min\":58,\"x_max\":897,\"o\":\"m 897 401 q 777 103 897 221 q 481 -14 657 -14 q 178 98 297 -14 q 58 389 58 210 q 178 688 58 569 q 475 806 299 806 q 778 693 658 806 q 897 401 897 581 m 185 419 q 268 132 185 240 q 490 24 351 24 q 697 115 624 24 q 771 371 771 206 q 688 658 771 550 q 465 767 604 767 q 258 675 332 767 q 185 419 185 583 m 436 963 q 419 920 436 938 q 378 903 403 903 q 335 919 351 903 q 318 963 318 936 q 335 1004 318 988 q 378 1021 353 1021 q 419 1003 401 1021 q 436 963 436 986 m 639 963 q 622 919 639 936 q 581 903 606 903 q 538 919 554 903 q 522 963 522 936 q 539 1004 522 988 q 581 1021 556 1021 q 622 1004 606 1021 q 639 963 639 988 z \"},\"×\":{\"ha\":694,\"x_min\":128,\"x_max\":565,\"o\":\"m 346 303 l 157 114 l 128 143 l 317 333 l 128 522 l 157 551 l 346 363 l 535 551 l 564 521 l 376 333 l 565 143 l 535 114 l 346 303 z \"},\"Ø\":{\"ha\":956,\"x_min\":58,\"x_max\":897,\"o\":\"m 185 92 l 86 0 l 58 31 l 156 121 q 83 242 107 174 q 58 389 58 310 q 178 688 58 569 q 475 806 299 806 q 638 778 561 806 q 771 699 714 750 l 869 792 l 897 760 l 801 669 q 873 547 849 615 q 897 401 897 479 q 777 103 897 221 q 481 -14 657 -14 q 318 13 394 -14 q 185 92 242 40 m 465 767 q 258 675 332 767 q 185 419 185 583 q 197 299 185 356 q 231 193 208 242 l 703 636 q 601 733 661 700 q 465 767 540 767 m 490 24 q 697 115 624 24 q 771 371 771 206 q 759 492 771 435 q 725 597 747 549 l 251 156 q 353 58 292 92 q 490 24 414 24 z \"},\"Ù\":{\"ha\":910,\"x_min\":57,\"x_max\":854,\"o\":\"m 468 -14 q 234 64 318 -14 q 150 283 150 142 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 283 q 320 99 263 161 q 490 36 378 36 q 656 105 600 36 q 713 307 713 174 l 713 700 q 704 740 713 729 q 664 757 696 750 l 604 768 l 604 792 l 854 792 l 854 768 l 810 758 q 769 740 778 750 q 761 700 761 729 l 761 307 q 687 68 761 150 q 468 -14 613 -14 m 440 1022 l 494 867 l 472 857 l 392 1003 q 383 1024 385 1017 q 381 1036 381 1031 q 388 1053 381 1047 q 406 1060 394 1060 q 425 1051 417 1060 q 440 1022 433 1042 z \"},\"Ú\":{\"ha\":910,\"x_min\":57,\"x_max\":854,\"o\":\"m 468 -14 q 234 64 318 -14 q 150 283 150 142 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 283 q 320 99 263 161 q 490 36 378 36 q 656 105 600 36 q 713 307 713 174 l 713 700 q 704 740 713 729 q 664 757 696 750 l 604 768 l 604 792 l 854 792 l 854 768 l 810 758 q 769 740 778 750 q 761 700 761 729 l 761 307 q 687 68 761 150 q 468 -14 613 -14 m 499 857 l 476 867 l 529 1018 q 547 1050 539 1040 q 567 1060 556 1060 q 585 1053 578 1060 q 592 1036 592 1047 q 589 1023 592 1031 q 579 1000 586 1015 l 499 857 z \"},\"Û\":{\"ha\":910,\"x_min\":57,\"x_max\":854,\"o\":\"m 468 -14 q 234 64 318 -14 q 150 283 150 142 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 283 q 320 99 263 161 q 490 36 378 36 q 656 105 600 36 q 713 307 713 174 l 713 700 q 704 740 713 729 q 664 757 696 750 l 604 768 l 604 792 l 854 792 l 854 768 l 810 758 q 769 740 778 750 q 761 700 761 729 l 761 307 q 687 68 761 150 q 468 -14 613 -14 m 524 1031 l 635 871 l 613 857 l 485 1001 l 483 1001 l 354 857 l 332 871 l 443 1031 q 463 1054 456 1049 q 483 1060 471 1060 q 503 1053 494 1060 q 524 1031 511 1047 z \"},\"Ü\":{\"ha\":910,\"x_min\":57,\"x_max\":854,\"o\":\"m 468 -14 q 234 64 318 -14 q 150 283 150 142 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 283 q 320 99 263 161 q 490 36 378 36 q 656 105 600 36 q 713 307 713 174 l 713 700 q 704 740 713 729 q 664 757 696 750 l 604 768 l 604 792 l 854 792 l 854 768 l 810 758 q 769 740 778 750 q 761 700 761 729 l 761 307 q 687 68 761 150 q 468 -14 613 -14 m 444 963 q 428 920 444 938 q 386 903 411 903 q 343 919 360 903 q 326 963 326 936 q 344 1004 326 988 q 386 1021 361 1021 q 427 1003 410 1021 q 444 963 444 986 m 647 963 q 631 919 647 936 q 589 903 614 903 q 547 919 563 903 q 531 963 531 936 q 547 1004 531 988 q 589 1021 564 1021 q 631 1004 614 1021 q 647 963 647 988 z \"},\"Ý\":{\"ha\":754,\"x_min\":3,\"x_max\":751,\"o\":\"m 526 22 l 526 0 l 228 0 l 228 22 l 272 32 q 313 51 304 40 q 321 90 321 61 l 321 333 l 89 718 q 64 750 74 744 q 38 760 54 756 l 3 768 l 3 792 l 315 792 l 315 767 l 243 754 q 215 742 221 750 q 215 719 208 733 l 415 383 l 614 717 q 617 742 624 732 q 588 757 611 751 l 528 768 l 528 792 l 751 792 l 751 768 l 721 760 q 695 749 704 756 q 668 714 686 742 l 432 342 l 432 90 q 440 51 432 61 q 481 32 449 40 l 526 22 m 431 857 l 408 867 l 461 1018 q 479 1050 471 1040 q 499 1060 488 1060 q 517 1053 510 1060 q 524 1036 524 1047 q 521 1023 524 1031 q 511 1000 518 1015 l 431 857 z \"},\"Þ\":{\"ha\":708,\"x_min\":57,\"x_max\":663,\"o\":\"m 328 197 l 310 197 l 310 219 l 329 222 q 488 282 436 232 q 540 425 540 332 q 492 570 540 519 q 351 621 443 621 l 263 621 l 263 90 q 270 53 263 63 q 311 36 278 43 l 383 22 l 383 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 658 l 375 658 q 584 599 506 658 q 663 440 663 540 q 573 264 663 331 q 328 197 483 197 z \"},\"ß\":{\"ha\":700,\"x_min\":26,\"x_max\":661,\"o\":\"m 521 332 q 634 235 607 276 q 661 143 661 194 q 608 28 661 71 q 475 -14 556 -14 q 394 -5 435 -14 q 317 19 353 4 l 300 161 l 321 161 q 385 53 346 90 q 476 17 425 17 q 543 40 519 17 q 567 107 567 64 q 547 167 567 139 q 458 240 526 194 q 343 344 371 300 q 315 443 315 388 q 335 521 315 482 q 404 619 354 560 q 460 703 444 665 q 476 783 476 740 q 442 875 476 840 q 351 910 407 910 q 240 860 275 910 q 206 700 206 810 l 206 0 l 29 0 l 29 19 l 69 29 q 96 43 89 33 q 103 76 103 53 l 103 432 l 26 432 l 26 453 l 103 493 l 103 551 q 171 847 103 749 q 378 944 239 944 q 515 903 461 944 q 568 799 568 861 q 558 749 568 774 q 528 699 549 725 q 486 655 514 682 q 451 619 458 628 q 408 560 422 590 q 394 496 394 531 q 419 418 394 453 q 521 332 443 383 z \"},\"à\":{\"ha\":503,\"x_min\":29,\"x_max\":500,\"o\":\"m 306 56 q 214 4 254 22 q 147 -14 174 -14 q 63 15 97 -14 q 29 90 29 44 q 56 155 29 129 q 149 204 83 181 l 304 258 l 304 351 q 277 426 304 400 q 201 453 250 453 q 162 448 181 453 q 131 435 143 443 q 111 415 117 425 q 106 385 106 404 q 108 364 106 378 q 117 333 111 350 q 90 322 106 326 q 64 318 74 318 q 39 328 49 318 q 29 356 29 339 q 109 455 29 400 q 257 510 189 510 q 364 476 321 510 q 407 392 407 442 l 407 114 q 417 69 407 83 q 449 56 426 56 q 469 58 458 56 q 493 64 481 60 l 500 47 q 428 3 463 19 q 376 -14 394 -14 q 327 3 344 -14 q 306 56 310 21 m 133 118 q 153 69 133 86 q 211 53 174 53 q 260 59 238 53 q 304 78 282 65 l 304 232 l 207 192 q 148 157 163 172 q 133 118 133 142 m 181 808 l 268 579 l 247 569 l 129 790 q 119 811 122 803 q 117 826 117 819 q 124 844 117 838 q 143 851 132 851 q 163 841 154 851 q 181 808 172 831 z \"},\"á\":{\"ha\":503,\"x_min\":29,\"x_max\":500,\"o\":\"m 306 56 q 214 4 254 22 q 147 -14 174 -14 q 63 15 97 -14 q 29 90 29 44 q 56 155 29 129 q 149 204 83 181 l 304 258 l 304 351 q 277 426 304 400 q 201 453 250 453 q 162 448 181 453 q 131 435 143 443 q 111 415 117 425 q 106 385 106 404 q 108 364 106 378 q 117 333 111 350 q 90 322 106 326 q 64 318 74 318 q 39 328 49 318 q 29 356 29 339 q 109 455 29 400 q 257 510 189 510 q 364 476 321 510 q 407 392 407 442 l 407 114 q 417 69 407 83 q 449 56 426 56 q 469 58 458 56 q 493 64 481 60 l 500 47 q 428 3 463 19 q 376 -14 394 -14 q 327 3 344 -14 q 306 56 310 21 m 133 118 q 153 69 133 86 q 211 53 174 53 q 260 59 238 53 q 304 78 282 65 l 304 232 l 207 192 q 148 157 163 172 q 133 118 133 142 m 269 569 l 249 579 l 336 808 q 354 842 344 832 q 375 851 364 851 q 393 844 386 851 q 400 826 400 838 q 397 811 400 819 q 388 790 394 803 l 269 569 z \"},\"â\":{\"ha\":503,\"x_min\":29,\"x_max\":500,\"o\":\"m 306 56 q 214 4 254 22 q 147 -14 174 -14 q 63 15 97 -14 q 29 90 29 44 q 56 155 29 129 q 149 204 83 181 l 304 258 l 304 351 q 277 426 304 400 q 201 453 250 453 q 162 448 181 453 q 131 435 143 443 q 111 415 117 425 q 106 385 106 404 q 108 364 106 378 q 117 333 111 350 q 90 322 106 326 q 64 318 74 318 q 39 328 49 318 q 29 356 29 339 q 109 455 29 400 q 257 510 189 510 q 364 476 321 510 q 407 392 407 442 l 407 114 q 417 69 407 83 q 449 56 426 56 q 469 58 458 56 q 493 64 481 60 l 500 47 q 428 3 463 19 q 376 -14 394 -14 q 327 3 344 -14 q 306 56 310 21 m 133 118 q 153 69 133 86 q 211 53 174 53 q 260 59 238 53 q 304 78 282 65 l 304 232 l 207 192 q 148 157 163 172 q 133 118 133 142 m 294 819 l 417 583 l 394 569 l 257 786 l 254 786 l 117 569 l 94 583 l 217 819 q 235 844 226 838 q 257 851 244 851 q 276 845 268 851 q 294 819 285 839 z \"},\"ã\":{\"ha\":503,\"x_min\":29,\"x_max\":500,\"o\":\"m 306 56 q 214 4 254 22 q 147 -14 174 -14 q 63 15 97 -14 q 29 90 29 44 q 56 155 29 129 q 149 204 83 181 l 304 258 l 304 351 q 277 426 304 400 q 201 453 250 453 q 162 448 181 453 q 131 435 143 443 q 111 415 117 425 q 106 385 106 404 q 108 364 106 378 q 117 333 111 350 q 90 322 106 326 q 64 318 74 318 q 39 328 49 318 q 29 356 29 339 q 109 455 29 400 q 257 510 189 510 q 364 476 321 510 q 407 392 407 442 l 407 114 q 417 69 407 83 q 449 56 426 56 q 469 58 458 56 q 493 64 481 60 l 500 47 q 428 3 463 19 q 376 -14 394 -14 q 327 3 344 -14 q 306 56 310 21 m 133 118 q 153 69 133 86 q 211 53 174 53 q 260 59 238 53 q 304 78 282 65 l 304 232 l 207 192 q 148 157 163 172 q 133 118 133 142 m 349 667 q 319 671 338 667 q 261 689 301 675 q 203 706 221 701 q 174 710 185 710 q 146 701 157 710 q 125 671 135 693 l 99 608 l 75 617 l 107 696 q 140 754 125 740 q 181 768 156 768 q 210 764 192 768 q 268 747 228 760 q 325 729 307 733 q 354 725 343 725 q 381 733 369 725 q 404 767 392 740 l 431 828 l 454 818 l 424 742 q 390 681 406 696 q 349 667 374 667 z \"},\"ä\":{\"ha\":503,\"x_min\":29,\"x_max\":500,\"o\":\"m 306 56 q 214 4 254 22 q 147 -14 174 -14 q 63 15 97 -14 q 29 90 29 44 q 56 155 29 129 q 149 204 83 181 l 304 258 l 304 351 q 277 426 304 400 q 201 453 250 453 q 162 448 181 453 q 131 435 143 443 q 111 415 117 425 q 106 385 106 404 q 108 364 106 378 q 117 333 111 350 q 90 322 106 326 q 64 318 74 318 q 39 328 49 318 q 29 356 29 339 q 109 455 29 400 q 257 510 189 510 q 364 476 321 510 q 407 392 407 442 l 407 114 q 417 69 407 83 q 449 56 426 56 q 469 58 458 56 q 493 64 481 60 l 500 47 q 428 3 463 19 q 376 -14 394 -14 q 327 3 344 -14 q 306 56 310 21 m 133 118 q 153 69 133 86 q 211 53 174 53 q 260 59 238 53 q 304 78 282 65 l 304 232 l 207 192 q 148 157 163 172 q 133 118 133 142 m 211 746 q 194 703 211 721 q 153 686 178 686 q 110 703 126 686 q 93 746 93 719 q 110 788 93 771 q 153 804 128 804 q 194 787 176 804 q 211 746 211 769 m 425 746 q 408 703 425 719 q 367 686 392 686 q 324 703 340 686 q 308 746 308 719 q 325 788 308 771 q 367 804 342 804 q 408 788 392 804 q 425 746 425 771 z \"},\"å\":{\"ha\":503,\"x_min\":29,\"x_max\":500,\"o\":\"m 306 56 q 214 4 254 22 q 147 -14 174 -14 q 63 15 97 -14 q 29 90 29 44 q 56 155 29 129 q 149 204 83 181 l 304 258 l 304 351 q 277 426 304 400 q 201 453 250 453 q 162 448 181 453 q 131 435 143 443 q 111 415 117 425 q 106 385 106 404 q 108 364 106 378 q 117 333 111 350 q 90 322 106 326 q 64 318 74 318 q 39 328 49 318 q 29 356 29 339 q 109 455 29 400 q 257 510 189 510 q 364 476 321 510 q 407 392 407 442 l 407 114 q 417 69 407 83 q 449 56 426 56 q 469 58 458 56 q 493 64 481 60 l 500 47 q 428 3 463 19 q 376 -14 394 -14 q 327 3 344 -14 q 306 56 310 21 m 133 118 q 153 69 133 86 q 211 53 174 53 q 260 59 238 53 q 304 78 282 65 l 304 232 l 207 192 q 148 157 163 172 q 133 118 133 142 m 263 819 q 352 790 317 819 q 388 713 388 760 q 351 630 388 663 q 260 597 315 597 q 167 626 203 597 q 132 703 132 656 q 169 787 132 754 q 263 819 206 819 m 264 621 q 318 644 299 621 q 338 707 338 667 q 315 771 338 746 q 257 796 293 796 q 201 772 222 796 q 181 708 181 747 q 204 646 181 671 q 264 621 228 621 z \"},\"æ\":{\"ha\":788,\"x_min\":29,\"x_max\":754,\"o\":\"m 350 83 q 237 13 292 39 q 147 -14 182 -14 q 63 15 97 -14 q 29 90 29 44 q 56 155 29 129 q 149 204 83 181 l 304 258 l 304 351 q 277 426 304 400 q 201 453 250 453 q 162 448 181 453 q 131 435 143 443 q 111 415 117 425 q 106 385 106 404 q 108 364 106 378 q 117 333 111 350 q 90 322 106 326 q 64 318 74 318 q 39 328 49 318 q 29 356 29 339 q 109 455 29 400 q 257 510 189 510 q 333 490 299 510 q 386 435 368 469 q 462 490 417 469 q 554 510 507 510 q 694 465 642 510 q 751 342 747 421 l 746 328 l 408 328 q 407 314 407 322 l 407 292 q 459 127 407 186 q 603 68 511 68 q 675 77 639 68 q 744 104 711 86 l 754 89 q 658 17 718 47 q 553 -14 597 -14 q 435 11 488 -14 q 350 83 383 36 m 646 382 q 617 451 646 424 q 543 479 588 479 q 459 447 493 479 q 414 358 425 415 l 621 358 q 641 363 636 358 q 646 382 646 368 m 133 118 q 153 69 133 86 q 211 53 174 53 q 276 65 243 53 q 339 101 308 78 q 314 163 322 129 q 304 232 306 196 l 207 192 q 148 157 163 172 q 133 118 133 142 z \"},\"ç\":{\"ha\":507,\"x_min\":44,\"x_max\":486,\"o\":\"m 401 -199 q 356 -279 401 -249 q 243 -310 310 -310 q 198 -301 214 -310 q 182 -275 182 -292 q 188 -258 182 -267 q 208 -235 193 -249 q 248 -267 228 -257 q 293 -278 268 -278 q 338 -262 321 -278 q 356 -224 356 -247 q 347 -194 356 -208 q 313 -157 339 -179 q 275 -118 283 -133 q 267 -86 267 -103 q 287 -51 267 -72 q 349 0 307 -29 q 311 -10 326 -7 q 285 -14 296 -14 q 111 56 178 -14 q 44 236 44 125 q 126 434 44 358 q 329 510 208 510 q 428 493 388 510 q 469 453 469 476 q 458 425 469 443 q 429 389 447 407 l 422 389 q 346 459 369 444 q 297 474 322 474 q 193 422 232 474 q 154 283 154 371 q 206 126 154 185 q 344 68 257 68 q 410 77 378 68 q 475 104 443 86 l 486 89 q 447 49 468 68 q 408 17 426 31 q 332 -47 344 -32 q 319 -72 319 -61 q 325 -89 319 -81 q 350 -114 331 -97 q 391 -158 381 -139 q 401 -199 401 -176 z \"},\"è\":{\"ha\":529,\"x_min\":44,\"x_max\":496,\"o\":\"m 293 -14 q 113 57 181 -14 q 44 244 44 128 q 117 435 44 361 q 296 510 190 510 q 436 465 383 510 q 493 342 489 421 l 488 328 l 150 328 q 149 314 149 322 l 149 292 q 200 127 149 186 q 344 68 251 68 q 416 77 381 68 q 485 104 451 86 l 496 89 q 399 17 460 47 q 293 -14 338 -14 m 388 382 q 358 451 388 424 q 285 479 329 479 q 201 448 235 479 q 156 358 168 417 l 363 358 q 383 363 378 358 q 388 382 388 368 m 236 808 l 324 579 l 303 569 l 185 790 q 175 811 178 803 q 172 826 172 819 q 180 844 172 838 q 199 851 188 851 q 219 841 210 851 q 236 808 228 831 z \"},\"é\":{\"ha\":529,\"x_min\":44,\"x_max\":496,\"o\":\"m 293 -14 q 113 57 181 -14 q 44 244 44 128 q 117 435 44 361 q 296 510 190 510 q 436 465 383 510 q 493 342 489 421 l 488 328 l 150 328 q 149 314 149 322 l 149 292 q 200 127 149 186 q 344 68 251 68 q 416 77 381 68 q 485 104 451 86 l 496 89 q 399 17 460 47 q 293 -14 338 -14 m 388 382 q 358 451 388 424 q 285 479 329 479 q 201 448 235 479 q 156 358 168 417 l 363 358 q 383 363 378 358 q 388 382 388 368 m 325 569 l 304 579 l 392 808 q 410 842 400 832 q 431 851 419 851 q 449 844 442 851 q 456 826 456 838 q 453 811 456 819 q 443 790 450 803 l 325 569 z \"},\"ê\":{\"ha\":529,\"x_min\":44,\"x_max\":496,\"o\":\"m 293 -14 q 113 57 181 -14 q 44 244 44 128 q 117 435 44 361 q 296 510 190 510 q 436 465 383 510 q 493 342 489 421 l 488 328 l 150 328 q 149 314 149 322 l 149 292 q 200 127 149 186 q 344 68 251 68 q 416 77 381 68 q 485 104 451 86 l 496 89 q 399 17 460 47 q 293 -14 338 -14 m 388 382 q 358 451 388 424 q 285 479 329 479 q 201 448 235 479 q 156 358 168 417 l 363 358 q 383 363 378 358 q 388 382 388 368 m 351 819 l 474 583 l 451 569 l 314 786 l 311 786 l 174 569 l 151 583 l 274 819 q 292 844 283 838 q 314 851 301 851 q 333 845 325 851 q 351 819 342 839 z \"},\"ë\":{\"ha\":529,\"x_min\":44,\"x_max\":496,\"o\":\"m 293 -14 q 113 57 181 -14 q 44 244 44 128 q 117 435 44 361 q 296 510 190 510 q 436 465 383 510 q 493 342 489 421 l 488 328 l 150 328 q 149 314 149 322 l 149 292 q 200 127 149 186 q 344 68 251 68 q 416 77 381 68 q 485 104 451 86 l 496 89 q 399 17 460 47 q 293 -14 338 -14 m 388 382 q 358 451 388 424 q 285 479 329 479 q 201 448 235 479 q 156 358 168 417 l 363 358 q 383 363 378 358 q 388 382 388 368 m 250 746 q 233 703 250 721 q 192 686 217 686 q 149 703 165 686 q 132 746 132 719 q 149 788 132 771 q 192 804 167 804 q 233 787 215 804 q 250 746 250 769 m 464 746 q 447 703 464 719 q 406 686 431 686 q 363 703 379 686 q 347 746 347 719 q 364 788 347 771 q 406 804 381 804 q 447 788 431 804 q 464 746 464 771 z \"},\"ì\":{\"ha\":296,\"x_min\":7,\"x_max\":276,\"o\":\"m 276 19 l 276 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 203 458 204 481 q 201 385 201 436 l 201 76 q 208 43 201 53 q 235 29 215 33 l 276 19 m 71 808 l 158 579 l 138 569 l 19 790 q 10 811 13 803 q 7 826 7 819 q 15 844 7 838 q 33 851 22 851 q 53 841 44 851 q 71 808 63 831 z \"},\"í\":{\"ha\":296,\"x_min\":25,\"x_max\":300,\"o\":\"m 276 19 l 276 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 203 458 204 481 q 201 385 201 436 l 201 76 q 208 43 201 53 q 235 29 215 33 l 276 19 m 169 569 l 149 579 l 236 808 q 254 842 244 832 q 275 851 264 851 q 293 844 286 851 q 300 826 300 838 q 297 811 300 819 q 288 790 294 803 l 169 569 z \"},\"î\":{\"ha\":296,\"x_min\":1,\"x_max\":324,\"o\":\"m 276 19 l 276 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 203 458 204 481 q 201 385 201 436 l 201 76 q 208 43 201 53 q 235 29 215 33 l 276 19 m 201 819 l 324 583 l 301 569 l 164 786 l 161 786 l 24 569 l 1 583 l 124 819 q 142 844 133 838 q 164 851 151 851 q 183 845 175 851 q 201 819 192 839 z \"},\"ï\":{\"ha\":296,\"x_min\":-11,\"x_max\":321,\"o\":\"m 276 19 l 276 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 203 458 204 481 q 201 385 201 436 l 201 76 q 208 43 201 53 q 235 29 215 33 l 276 19 m 107 746 q 90 703 107 721 q 49 686 74 686 q 6 703 22 686 q -11 746 -11 719 q 6 788 -11 771 q 49 804 24 804 q 90 787 72 804 q 107 746 107 769 m 321 746 q 304 703 321 719 q 263 686 288 686 q 220 703 236 686 q 204 746 204 719 q 221 788 204 771 q 263 804 238 804 q 304 788 288 804 q 321 746 321 771 z \"},\"ð\":{\"ha\":646,\"x_min\":44,\"x_max\":589,\"o\":\"m 589 342 q 515 81 589 175 q 317 -14 442 -14 q 119 55 193 -14 q 44 244 44 124 q 125 433 44 357 q 317 510 206 510 q 388 500 353 510 q 453 474 424 490 q 401 644 435 567 q 321 785 368 722 l 143 694 l 126 726 l 297 813 q 232 875 267 847 q 157 924 197 903 l 169 944 q 263 900 218 926 q 349 839 308 874 l 529 931 l 546 899 l 378 813 q 533 593 476 719 q 589 342 589 467 m 324 18 q 434 76 394 18 q 474 242 474 135 q 429 413 474 349 q 310 478 385 478 q 199 420 238 478 q 160 257 160 363 q 203 82 160 146 q 324 18 247 18 z \"},\"ñ\":{\"ha\":624,\"x_min\":25,\"x_max\":606,\"o\":\"m 275 19 l 275 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 204 474 206 489 q 201 435 203 458 q 292 488 243 465 q 369 510 342 510 q 489 466 446 510 q 532 342 532 422 l 532 76 q 539 43 532 53 q 565 29 546 33 l 606 19 l 606 0 l 356 0 l 356 19 l 396 29 q 422 43 415 33 q 429 76 429 53 l 429 315 q 402 410 429 379 q 317 440 375 440 q 259 431 289 440 q 201 404 229 422 l 201 76 q 208 43 201 53 q 235 29 215 33 l 275 19 m 407 667 q 378 671 396 667 q 319 689 360 675 q 261 706 279 701 q 232 710 243 710 q 204 701 215 710 q 183 671 193 693 l 157 608 l 133 617 l 165 696 q 199 754 183 740 q 239 768 214 768 q 268 764 250 768 q 326 747 286 760 q 383 729 365 733 q 413 725 401 725 q 439 733 428 725 q 463 767 450 740 l 489 828 l 513 818 l 482 742 q 448 681 464 696 q 407 667 432 667 z \"},\"ò\":{\"ha\":632,\"x_min\":44,\"x_max\":588,\"o\":\"m 588 251 q 507 63 588 139 q 317 -14 426 -14 q 119 55 193 -14 q 44 244 44 124 q 125 433 44 357 q 317 510 206 510 q 513 440 439 510 q 588 251 588 371 m 158 257 q 202 83 158 147 q 322 18 246 18 q 433 76 393 18 q 472 239 472 135 q 428 413 472 349 q 310 478 385 478 q 198 420 238 478 q 158 257 158 363 m 242 808 l 329 579 l 308 569 l 190 790 q 181 811 183 803 q 178 826 178 819 q 185 844 178 838 q 204 851 193 851 q 224 841 215 851 q 242 808 233 831 z \"},\"ó\":{\"ha\":632,\"x_min\":44,\"x_max\":588,\"o\":\"m 588 251 q 507 63 588 139 q 317 -14 426 -14 q 119 55 193 -14 q 44 244 44 124 q 125 433 44 357 q 317 510 206 510 q 513 440 439 510 q 588 251 588 371 m 158 257 q 202 83 158 147 q 322 18 246 18 q 433 76 393 18 q 472 239 472 135 q 428 413 472 349 q 310 478 385 478 q 198 420 238 478 q 158 257 158 363 m 329 569 l 308 579 l 396 808 q 414 842 404 832 q 435 851 424 851 q 453 844 446 851 q 460 826 460 838 q 457 811 460 819 q 447 790 454 803 l 329 569 z \"},\"ô\":{\"ha\":632,\"x_min\":44,\"x_max\":588,\"o\":\"m 588 251 q 507 63 588 139 q 317 -14 426 -14 q 119 55 193 -14 q 44 244 44 124 q 125 433 44 357 q 317 510 206 510 q 513 440 439 510 q 588 251 588 371 m 158 257 q 202 83 158 147 q 322 18 246 18 q 433 76 393 18 q 472 239 472 135 q 428 413 472 349 q 310 478 385 478 q 198 420 238 478 q 158 257 158 363 m 356 819 l 478 583 l 456 569 l 318 786 l 315 786 l 178 569 l 156 583 l 278 819 q 297 844 288 838 q 318 851 306 851 q 338 845 329 851 q 356 819 346 839 z \"},\"õ\":{\"ha\":632,\"x_min\":44,\"x_max\":588,\"o\":\"m 588 251 q 507 63 588 139 q 317 -14 426 -14 q 119 55 193 -14 q 44 244 44 124 q 125 433 44 357 q 317 510 206 510 q 513 440 439 510 q 588 251 588 371 m 158 257 q 202 83 158 147 q 322 18 246 18 q 433 76 393 18 q 472 239 472 135 q 428 413 472 349 q 310 478 385 478 q 198 420 238 478 q 158 257 158 363 m 408 667 q 379 671 397 667 q 321 689 361 675 q 263 706 281 701 q 233 710 244 710 q 206 701 217 710 q 185 671 194 693 l 158 608 l 135 617 l 167 696 q 200 754 185 740 q 240 768 215 768 q 269 764 251 768 q 328 747 288 760 q 385 729 367 733 q 414 725 403 725 q 440 733 429 725 q 464 767 451 740 l 490 828 l 514 818 l 483 742 q 449 681 465 696 q 408 667 433 667 z \"},\"ö\":{\"ha\":632,\"x_min\":44,\"x_max\":588,\"o\":\"m 588 251 q 507 63 588 139 q 317 -14 426 -14 q 119 55 193 -14 q 44 244 44 124 q 125 433 44 357 q 317 510 206 510 q 513 440 439 510 q 588 251 588 371 m 158 257 q 202 83 158 147 q 322 18 246 18 q 433 76 393 18 q 472 239 472 135 q 428 413 472 349 q 310 478 385 478 q 198 420 238 478 q 158 257 158 363 m 272 746 q 256 703 272 721 q 214 686 239 686 q 171 703 188 686 q 154 746 154 719 q 172 788 154 771 q 214 804 189 804 q 255 787 238 804 q 272 746 272 769 m 486 746 q 469 703 486 719 q 428 686 453 686 q 385 703 401 686 q 369 746 369 719 q 386 788 369 771 q 428 804 403 804 q 469 788 453 804 q 486 746 486 771 z \"},\"÷\":{\"ha\":694,\"x_min\":92,\"x_max\":601,\"o\":\"m 378 565 q 384 559 378 565 q 390 535 390 553 q 378 503 390 517 q 347 490 365 490 q 316 503 329 490 q 303 535 303 517 q 316 565 303 553 q 347 578 329 578 q 378 565 365 578 m 601 350 l 601 308 l 92 308 l 92 350 l 601 350 m 390 124 q 378 93 390 106 q 347 81 365 81 q 316 94 329 81 q 303 124 303 107 q 316 156 303 143 q 347 168 329 168 q 378 156 365 168 q 390 124 390 143 z \"},\"ø\":{\"ha\":632,\"x_min\":44,\"x_max\":588,\"o\":\"m 125 50 l 69 0 l 44 26 l 99 76 q 58 151 72 108 q 44 244 44 194 q 125 433 44 357 q 317 510 206 510 q 422 493 372 510 q 507 446 471 476 l 563 496 l 588 469 l 532 419 q 574 345 560 388 q 588 251 588 303 q 507 63 588 139 q 317 -14 426 -14 q 210 3 260 -14 q 125 50 161 19 m 310 478 q 198 420 238 478 q 158 257 158 363 q 162 198 158 226 q 174 143 165 169 l 443 388 q 388 455 422 432 q 310 478 353 478 m 322 18 q 433 76 393 18 q 472 239 472 135 q 468 297 472 269 q 457 351 464 325 l 188 107 q 244 41 210 64 q 322 18 278 18 z \"},\"ù\":{\"ha\":610,\"x_min\":25,\"x_max\":590,\"o\":\"m 240 -14 q 128 28 168 -14 q 88 146 88 69 l 88 382 q 82 410 88 401 q 63 428 76 419 l 25 444 l 25 460 l 188 510 l 199 504 q 192 451 194 476 q 190 385 190 425 l 190 168 q 215 83 190 110 q 293 56 240 56 q 351 65 321 56 q 408 92 381 74 l 408 378 q 403 410 408 401 q 385 424 397 418 l 325 444 l 325 460 l 508 510 l 518 504 q 513 449 514 475 q 511 385 511 424 l 511 104 q 517 76 511 85 q 544 65 524 68 l 590 58 l 590 40 l 408 -11 l 408 61 q 317 8 367 31 q 240 -14 268 -14 m 240 808 l 328 579 l 307 569 l 189 790 q 179 811 182 803 q 176 826 176 819 q 184 844 176 838 q 203 851 192 851 q 223 841 214 851 q 240 808 232 831 z \"},\"ú\":{\"ha\":610,\"x_min\":25,\"x_max\":590,\"o\":\"m 240 -14 q 128 28 168 -14 q 88 146 88 69 l 88 382 q 82 410 88 401 q 63 428 76 419 l 25 444 l 25 460 l 188 510 l 199 504 q 192 451 194 476 q 190 385 190 425 l 190 168 q 215 83 190 110 q 293 56 240 56 q 351 65 321 56 q 408 92 381 74 l 408 378 q 403 410 408 401 q 385 424 397 418 l 325 444 l 325 460 l 508 510 l 518 504 q 513 449 514 475 q 511 385 511 424 l 511 104 q 517 76 511 85 q 544 65 524 68 l 590 58 l 590 40 l 408 -11 l 408 61 q 317 8 367 31 q 240 -14 268 -14 m 328 569 l 307 579 l 394 808 q 413 842 403 832 q 433 851 422 851 q 451 844 444 851 q 458 826 458 838 q 456 811 458 819 q 446 790 453 803 l 328 569 z \"},\"û\":{\"ha\":610,\"x_min\":25,\"x_max\":590,\"o\":\"m 240 -14 q 128 28 168 -14 q 88 146 88 69 l 88 382 q 82 410 88 401 q 63 428 76 419 l 25 444 l 25 460 l 188 510 l 199 504 q 192 451 194 476 q 190 385 190 425 l 190 168 q 215 83 190 110 q 293 56 240 56 q 351 65 321 56 q 408 92 381 74 l 408 378 q 403 410 408 401 q 385 424 397 418 l 325 444 l 325 460 l 508 510 l 518 504 q 513 449 514 475 q 511 385 511 424 l 511 104 q 517 76 511 85 q 544 65 524 68 l 590 58 l 590 40 l 408 -11 l 408 61 q 317 8 367 31 q 240 -14 268 -14 m 354 819 l 476 583 l 454 569 l 317 786 l 314 786 l 176 569 l 154 583 l 276 819 q 295 844 286 838 q 317 851 304 851 q 336 845 328 851 q 354 819 344 839 z \"},\"ü\":{\"ha\":610,\"x_min\":25,\"x_max\":590,\"o\":\"m 240 -14 q 128 28 168 -14 q 88 146 88 69 l 88 382 q 82 410 88 401 q 63 428 76 419 l 25 444 l 25 460 l 188 510 l 199 504 q 192 451 194 476 q 190 385 190 425 l 190 168 q 215 83 190 110 q 293 56 240 56 q 351 65 321 56 q 408 92 381 74 l 408 378 q 403 410 408 401 q 385 424 397 418 l 325 444 l 325 460 l 508 510 l 518 504 q 513 449 514 475 q 511 385 511 424 l 511 104 q 517 76 511 85 q 544 65 524 68 l 590 58 l 590 40 l 408 -11 l 408 61 q 317 8 367 31 q 240 -14 268 -14 m 271 746 q 254 703 271 721 q 213 686 238 686 q 169 703 186 686 q 153 746 153 719 q 170 788 153 771 q 213 804 188 804 q 253 787 236 804 q 271 746 271 769 m 485 746 q 468 703 485 719 q 426 686 451 686 q 384 703 400 686 q 368 746 368 719 q 385 788 368 771 q 426 804 401 804 q 468 788 451 804 q 485 746 485 771 z \"},\"ý\":{\"ha\":582,\"x_min\":6,\"x_max\":576,\"o\":\"m 113 -389 q 84 -375 97 -389 q 60 -333 71 -361 q 141 -277 115 -304 q 192 -192 167 -250 l 271 -15 l 75 440 q 63 460 68 456 q 46 468 57 465 l 6 476 l 6 496 l 265 496 l 265 476 l 206 465 q 190 457 193 464 q 190 439 186 450 l 328 113 l 331 113 l 458 429 q 461 451 464 443 q 449 463 458 460 l 393 476 l 393 496 l 576 496 l 576 476 l 533 461 q 519 453 524 458 q 507 431 514 447 l 206 -258 q 153 -363 172 -337 q 113 -389 133 -389 m 338 569 l 317 579 l 404 808 q 422 842 413 832 q 443 851 432 851 q 461 844 454 851 q 468 826 468 838 q 465 811 468 819 q 456 790 463 803 l 338 569 z \"},\"þ\":{\"ha\":640,\"x_min\":19,\"x_max\":594,\"o\":\"m 594 272 q 513 66 594 146 q 306 -14 432 -14 q 253 -10 279 -14 q 196 4 226 -6 l 196 -299 q 202 -330 196 -321 q 229 -342 208 -339 l 297 -356 l 297 -375 l 19 -375 l 19 -356 l 60 -346 q 87 -331 81 -340 q 93 -299 93 -322 l 93 815 q 88 845 93 836 q 69 861 83 854 l 31 878 l 31 893 l 193 944 l 203 938 q 197 883 199 910 q 196 818 196 857 l 196 433 q 289 488 239 467 q 374 510 339 510 q 533 444 472 510 q 594 272 594 378 m 196 403 l 196 151 q 229 53 196 88 q 322 18 263 18 q 442 72 399 18 q 486 222 486 126 q 440 382 486 324 q 315 440 394 440 q 252 430 285 440 q 196 403 219 419 z \"},\"ÿ\":{\"ha\":582,\"x_min\":6,\"x_max\":576,\"o\":\"m 113 -389 q 84 -375 97 -389 q 60 -333 71 -361 q 141 -277 115 -304 q 192 -192 167 -250 l 271 -15 l 75 440 q 63 460 68 456 q 46 468 57 465 l 6 476 l 6 496 l 265 496 l 265 476 l 206 465 q 190 457 193 464 q 190 439 186 450 l 328 113 l 331 113 l 458 429 q 461 451 464 443 q 449 463 458 460 l 393 476 l 393 496 l 576 496 l 576 476 l 533 461 q 519 453 524 458 q 507 431 514 447 l 206 -258 q 153 -363 172 -337 q 113 -389 133 -389 m 281 746 q 264 703 281 721 q 222 686 247 686 q 179 703 196 686 q 163 746 163 719 q 180 788 163 771 q 222 804 197 804 q 263 787 246 804 q 281 746 281 769 m 494 746 q 478 703 494 719 q 436 686 461 686 q 394 703 410 686 q 378 746 378 719 q 394 788 378 771 q 436 804 411 804 q 478 788 461 804 q 494 746 494 771 z \"},\"Ā\":{\"ha\":828,\"x_min\":19,\"x_max\":808,\"o\":\"m 244 22 l 244 0 l 19 0 l 19 22 l 50 32 q 83 47 74 39 q 99 74 92 56 l 388 800 l 439 800 l 728 74 q 746 45 736 53 q 775 32 756 38 l 808 22 l 808 0 l 510 0 l 510 22 l 582 35 q 609 47 603 39 q 608 69 615 54 l 518 299 l 240 299 l 154 68 q 154 44 147 53 q 182 33 161 36 l 244 22 m 375 660 l 254 336 l 503 336 l 375 660 m 568 940 l 253 940 l 253 990 l 568 990 l 568 940 z \"},\"ā\":{\"ha\":503,\"x_min\":29,\"x_max\":500,\"o\":\"m 306 56 q 214 4 254 22 q 147 -14 174 -14 q 63 15 97 -14 q 29 90 29 44 q 56 155 29 129 q 149 204 83 181 l 304 258 l 304 351 q 277 426 304 400 q 201 453 250 453 q 162 448 181 453 q 131 435 143 443 q 111 415 117 425 q 106 385 106 404 q 108 364 106 378 q 117 333 111 350 q 90 322 106 326 q 64 318 74 318 q 39 328 49 318 q 29 356 29 339 q 109 455 29 400 q 257 510 189 510 q 364 476 321 510 q 407 392 407 442 l 407 114 q 417 69 407 83 q 449 56 426 56 q 469 58 458 56 q 493 64 481 60 l 500 47 q 428 3 463 19 q 376 -14 394 -14 q 327 3 344 -14 q 306 56 310 21 m 133 118 q 153 69 133 86 q 211 53 174 53 q 260 59 238 53 q 304 78 282 65 l 304 232 l 207 192 q 148 157 163 172 q 133 118 133 142 m 432 707 l 83 707 l 83 757 l 432 757 l 432 707 z \"},\"Ă\":{\"ha\":828,\"x_min\":19,\"x_max\":808,\"o\":\"m 244 22 l 244 0 l 19 0 l 19 22 l 50 32 q 83 47 74 39 q 99 74 92 56 l 388 800 l 439 800 l 728 74 q 746 45 736 53 q 775 32 756 38 l 808 22 l 808 0 l 510 0 l 510 22 l 582 35 q 609 47 603 39 q 608 69 615 54 l 518 299 l 240 299 l 154 68 q 154 44 147 53 q 182 33 161 36 l 244 22 m 375 660 l 254 336 l 503 336 l 375 660 m 513 902 q 495 880 513 902 q 411 858 476 858 q 308 902 346 858 q 264 1031 271 946 l 286 1032 q 328 947 299 974 q 411 919 358 919 q 494 946 465 919 q 535 1032 524 972 l 557 1031 q 513 902 550 946 z \"},\"ă\":{\"ha\":503,\"x_min\":29,\"x_max\":500,\"o\":\"m 306 56 q 214 4 254 22 q 147 -14 174 -14 q 63 15 97 -14 q 29 90 29 44 q 56 155 29 129 q 149 204 83 181 l 304 258 l 304 351 q 277 426 304 400 q 201 453 250 453 q 162 448 181 453 q 131 435 143 443 q 111 415 117 425 q 106 385 106 404 q 108 364 106 378 q 117 333 111 350 q 90 322 106 326 q 64 318 74 318 q 39 328 49 318 q 29 356 29 339 q 109 455 29 400 q 257 510 189 510 q 364 476 321 510 q 407 392 407 442 l 407 114 q 417 69 407 83 q 449 56 426 56 q 469 58 458 56 q 493 64 481 60 l 500 47 q 428 3 463 19 q 376 -14 394 -14 q 327 3 344 -14 q 306 56 310 21 m 133 118 q 153 69 133 86 q 211 53 174 53 q 260 59 238 53 q 304 78 282 65 l 304 232 l 207 192 q 148 157 163 172 q 133 118 133 142 m 373 656 q 352 628 373 656 q 260 600 331 600 q 147 655 189 600 q 94 817 104 710 l 118 818 q 163 700 129 738 q 260 663 197 663 q 355 700 321 663 q 400 818 389 738 l 424 817 q 373 656 415 711 z \"},\"Ą\":{\"ha\":828,\"x_min\":19,\"x_max\":808,\"o\":\"m 244 22 l 244 0 l 19 0 l 19 22 l 50 32 q 83 47 74 39 q 99 74 92 56 l 388 800 l 439 800 l 728 74 q 746 45 736 53 q 775 32 756 38 l 808 22 l 808 0 l 726 0 q 660 -97 679 -57 q 640 -176 640 -136 q 661 -237 640 -215 q 719 -260 682 -260 q 760 -253 740 -260 q 797 -232 779 -246 l 807 -244 q 755 -288 788 -269 q 693 -307 722 -307 q 611 -278 643 -307 q 579 -204 579 -250 q 601 -123 579 -165 q 696 0 624 -81 l 510 0 l 510 22 l 582 35 q 609 47 603 39 q 608 69 615 54 l 518 299 l 240 299 l 154 68 q 154 44 147 53 q 182 33 161 36 l 244 22 m 375 660 l 254 336 l 503 336 l 375 660 z \"},\"ą\":{\"ha\":503,\"x_min\":29,\"x_max\":500,\"o\":\"m 306 56 q 214 4 254 22 q 147 -14 174 -14 q 63 15 97 -14 q 29 90 29 44 q 56 155 29 129 q 149 204 83 181 l 304 258 l 304 351 q 277 426 304 400 q 201 453 250 453 q 162 448 181 453 q 131 435 143 443 q 111 415 117 425 q 106 385 106 404 q 108 364 106 378 q 117 333 111 350 q 90 322 106 326 q 64 318 74 318 q 39 328 49 318 q 29 356 29 339 q 109 455 29 400 q 257 510 189 510 q 365 476 322 510 q 407 392 407 443 l 407 114 q 417 69 407 83 q 449 56 426 56 q 469 58 458 56 q 493 64 481 60 l 500 47 q 488 36 494 42 l 467 19 q 452 8 457 13 q 443 1 447 4 q 359 -87 386 -43 q 332 -178 332 -132 q 353 -237 332 -215 q 411 -260 375 -260 q 451 -253 432 -260 q 489 -232 471 -246 l 500 -244 q 448 -288 481 -269 q 385 -307 415 -307 q 303 -279 335 -307 q 272 -207 272 -251 q 300 -118 272 -162 q 397 -10 328 -74 q 387 -13 392 -12 q 376 -14 382 -14 q 327 3 344 -14 q 306 56 310 21 m 133 118 q 153 69 133 86 q 211 53 174 53 q 260 59 238 53 q 304 78 282 65 l 304 232 l 207 192 q 148 157 163 172 q 133 118 133 142 z \"},\"Ć\":{\"ha\":843,\"x_min\":58,\"x_max\":772,\"o\":\"m 488 -14 q 177 96 296 -14 q 58 386 58 206 q 179 688 58 569 q 488 806 300 806 q 637 785 564 806 q 761 728 710 764 l 761 571 l 740 571 l 715 632 q 630 734 689 700 q 483 768 571 768 q 264 674 343 768 q 185 411 185 579 q 272 130 185 238 q 499 22 360 22 q 631 53 576 22 q 719 144 685 83 l 754 206 l 772 206 l 765 60 q 644 7 722 28 q 488 -14 567 -14 m 522 857 l 500 867 l 553 1018 q 571 1050 563 1040 q 590 1060 579 1060 q 608 1053 601 1060 q 615 1036 615 1047 q 613 1023 615 1031 q 603 1000 610 1015 l 522 857 z \"},\"ć\":{\"ha\":508,\"x_min\":44,\"x_max\":488,\"o\":\"m 285 -14 q 111 56 178 -14 q 44 236 44 125 q 126 434 44 358 q 329 510 208 510 q 430 493 390 510 q 469 453 469 476 q 458 424 469 442 q 429 389 447 407 l 422 389 q 347 458 372 442 q 296 474 322 474 q 192 422 231 474 q 154 283 154 371 q 206 126 154 185 q 344 68 257 68 q 410 77 378 68 q 476 104 443 86 l 488 89 q 388 17 449 49 q 285 -14 328 -14 m 319 569 l 299 579 l 386 808 q 404 842 394 832 q 425 851 414 851 q 443 844 436 851 q 450 826 450 838 q 447 811 450 819 q 438 790 444 803 l 319 569 z \"},\"Ĉ\":{\"ha\":843,\"x_min\":58,\"x_max\":772,\"o\":\"m 488 -14 q 177 96 296 -14 q 58 386 58 206 q 179 688 58 569 q 488 806 300 806 q 637 785 564 806 q 761 728 710 764 l 761 571 l 740 571 l 715 632 q 630 734 689 700 q 483 768 571 768 q 264 674 343 768 q 185 411 185 579 q 272 130 185 238 q 499 22 360 22 q 631 53 576 22 q 719 144 685 83 l 754 206 l 772 206 l 765 60 q 644 7 722 28 q 488 -14 567 -14 m 549 1031 l 660 871 l 638 857 l 510 1001 l 508 1001 l 379 857 l 357 871 l 468 1031 q 488 1054 481 1049 q 508 1060 496 1060 q 528 1053 519 1060 q 549 1031 536 1047 z \"},\"ĉ\":{\"ha\":508,\"x_min\":44,\"x_max\":488,\"o\":\"m 285 -14 q 111 56 178 -14 q 44 236 44 125 q 126 434 44 358 q 329 510 208 510 q 430 493 390 510 q 469 453 469 476 q 458 424 469 442 q 429 389 447 407 l 422 389 q 347 458 372 442 q 296 474 322 474 q 192 422 231 474 q 154 283 154 371 q 206 126 154 185 q 344 68 257 68 q 410 77 378 68 q 476 104 443 86 l 488 89 q 388 17 449 49 q 285 -14 328 -14 m 346 819 l 468 583 l 446 569 l 308 786 l 306 786 l 168 569 l 146 583 l 268 819 q 287 844 278 838 q 308 851 296 851 q 328 845 319 851 q 346 819 336 839 z \"},\"Ċ\":{\"ha\":843,\"x_min\":58,\"x_max\":772,\"o\":\"m 488 -14 q 177 96 296 -14 q 58 386 58 206 q 179 688 58 569 q 488 806 300 806 q 637 785 564 806 q 761 728 710 764 l 761 571 l 740 571 l 715 632 q 630 734 689 700 q 483 768 571 768 q 264 674 343 768 q 185 411 185 579 q 272 130 185 238 q 499 22 360 22 q 631 53 576 22 q 719 144 685 83 l 754 206 l 772 206 l 765 60 q 644 7 722 28 q 488 -14 567 -14 m 557 1006 q 566 997 557 1006 q 575 961 575 988 q 557 917 575 935 q 514 899 539 899 q 469 917 488 899 q 451 961 451 935 q 469 1006 451 988 q 514 1024 488 1024 q 557 1006 539 1024 z \"},\"ċ\":{\"ha\":508,\"x_min\":44,\"x_max\":488,\"o\":\"m 285 -14 q 111 56 178 -14 q 44 236 44 125 q 126 434 44 358 q 329 510 208 510 q 430 493 390 510 q 469 453 469 476 q 458 424 469 442 q 429 389 447 407 l 422 389 q 347 458 372 442 q 296 474 322 474 q 192 422 231 474 q 154 283 154 371 q 206 126 154 185 q 344 68 257 68 q 410 77 378 68 q 476 104 443 86 l 488 89 q 388 17 449 49 q 285 -14 328 -14 m 371 746 q 354 703 371 721 q 313 686 338 686 q 269 703 286 686 q 253 746 253 719 q 270 788 253 771 q 313 804 288 804 q 353 787 336 804 q 371 746 371 769 z \"},\"Č\":{\"ha\":843,\"x_min\":58,\"x_max\":772,\"o\":\"m 488 -14 q 177 96 296 -14 q 58 386 58 206 q 179 688 58 569 q 488 806 300 806 q 637 785 564 806 q 761 728 710 764 l 761 571 l 740 571 l 715 632 q 630 734 689 700 q 483 768 571 768 q 264 674 343 768 q 185 411 185 579 q 272 130 185 238 q 499 22 360 22 q 631 53 576 22 q 719 144 685 83 l 754 206 l 772 206 l 765 60 q 644 7 722 28 q 488 -14 567 -14 m 638 1060 l 660 1046 l 550 886 q 530 864 539 869 q 510 858 521 858 q 489 864 497 858 q 469 886 481 869 l 358 1046 l 381 1060 l 508 915 l 510 915 l 638 1060 z \"},\"č\":{\"ha\":508,\"x_min\":44,\"x_max\":488,\"o\":\"m 285 -14 q 111 56 178 -14 q 44 236 44 125 q 126 434 44 358 q 329 510 208 510 q 430 493 390 510 q 469 453 469 476 q 458 424 469 442 q 429 389 447 407 l 422 389 q 347 458 372 442 q 296 474 322 474 q 192 422 231 474 q 154 283 154 371 q 206 126 154 185 q 344 68 257 68 q 410 77 378 68 q 476 104 443 86 l 488 89 q 388 17 449 49 q 285 -14 328 -14 m 268 601 l 149 838 l 171 851 l 306 632 l 308 632 l 443 851 l 465 838 l 346 601 q 328 577 338 585 q 307 569 319 569 q 286 576 294 569 q 268 601 278 582 z \"},\"Ď\":{\"ha\":906,\"x_min\":57,\"x_max\":847,\"o\":\"m 847 399 q 724 108 847 217 q 390 0 601 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 386 792 q 724 685 600 792 q 847 399 847 579 m 721 385 q 633 658 721 564 q 375 753 544 753 l 263 753 l 263 90 q 274 49 263 61 q 310 38 285 38 l 389 38 q 635 128 549 38 q 721 385 721 219 m 526 1060 l 549 1046 l 439 886 q 419 864 428 869 q 399 858 410 858 q 378 864 386 858 q 358 886 369 869 l 247 1046 l 269 1060 l 397 915 l 399 915 l 526 1060 z \"},\"ď\":{\"ha\":715,\"x_min\":44,\"x_max\":708,\"o\":\"m 619 38 l 443 -11 l 443 63 q 349 8 400 31 q 265 -14 297 -14 q 106 52 167 -14 q 44 224 44 118 q 126 430 44 350 q 333 510 207 510 q 386 506 360 510 q 443 492 413 501 l 443 815 q 438 844 443 836 q 418 860 433 853 l 385 878 l 385 893 l 543 944 l 553 938 q 547 883 549 910 q 546 818 546 857 l 546 104 q 551 78 546 86 q 579 65 557 71 l 619 56 l 619 38 m 318 478 q 197 424 240 478 q 153 274 153 369 q 199 115 153 174 q 325 57 246 57 q 388 66 357 57 q 443 92 419 75 l 443 344 q 410 443 443 408 q 318 478 376 478 m 647 668 l 628 671 l 651 903 q 663 941 654 929 q 685 953 671 953 q 702 946 696 953 q 708 928 708 939 q 708 917 708 924 q 703 892 707 911 l 647 668 z \"},\"Đ\":{\"ha\":906,\"x_min\":57,\"x_max\":847,\"o\":\"m 150 382 l 57 382 l 57 419 l 150 419 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 386 792 q 724 685 600 792 q 847 399 847 579 q 724 108 847 217 q 390 0 601 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 382 m 721 385 q 633 658 721 564 q 375 753 544 753 l 263 753 l 263 419 l 458 419 l 458 382 l 263 382 l 263 90 q 274 49 263 61 q 310 38 285 38 l 389 38 q 635 128 549 38 q 721 385 721 219 z \"},\"đ\":{\"ha\":640,\"x_min\":44,\"x_max\":619,\"o\":\"m 619 38 l 443 -11 l 443 63 q 349 8 400 31 q 265 -14 297 -14 q 106 52 167 -14 q 44 224 44 118 q 126 430 44 350 q 333 510 207 510 q 386 506 360 510 q 443 492 413 501 l 443 679 l 299 679 l 299 714 l 443 714 l 443 815 q 438 844 443 836 q 418 860 433 853 l 385 878 l 385 893 l 543 944 l 553 938 q 547 883 549 910 q 546 818 546 857 l 546 714 l 619 714 l 619 679 l 546 679 l 546 104 q 551 78 546 86 q 579 65 557 71 l 619 56 l 619 38 m 318 478 q 197 424 240 478 q 153 274 153 369 q 199 115 153 174 q 325 57 246 57 q 388 66 357 57 q 443 92 419 75 l 443 344 q 410 443 443 408 q 318 478 376 478 z \"},\"Ē\":{\"ha\":732,\"x_min\":57,\"x_max\":679,\"o\":\"m 568 526 l 568 275 l 547 275 l 515 351 q 499 376 507 371 q 474 381 492 381 l 263 381 l 263 78 q 277 40 263 49 q 339 32 292 31 l 532 40 q 580 51 564 42 q 608 88 596 60 l 657 189 l 679 189 l 663 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 531 792 q 572 794 554 792 q 610 803 590 797 l 619 800 l 619 613 l 599 613 l 567 699 q 540 740 556 729 q 489 753 525 751 l 263 758 l 263 419 l 474 419 q 500 424 492 419 q 515 449 508 429 l 547 526 l 568 526 m 542 940 l 226 940 l 226 990 l 542 990 l 542 940 z \"},\"ē\":{\"ha\":529,\"x_min\":44,\"x_max\":496,\"o\":\"m 293 -14 q 113 57 181 -14 q 44 244 44 128 q 117 435 44 361 q 296 510 190 510 q 436 465 383 510 q 493 342 489 421 l 488 328 l 150 328 q 149 314 149 322 l 149 292 q 200 127 149 186 q 344 68 251 68 q 416 77 381 68 q 485 104 451 86 l 496 89 q 399 17 460 47 q 293 -14 338 -14 m 388 382 q 358 451 388 424 q 285 479 329 479 q 201 448 235 479 q 156 358 168 417 l 363 358 q 383 363 378 358 q 388 382 388 368 m 489 707 l 140 707 l 140 757 l 489 757 l 489 707 z \"},\"Ĕ\":{\"ha\":732,\"x_min\":57,\"x_max\":679,\"o\":\"m 568 526 l 568 275 l 547 275 l 515 351 q 499 376 507 371 q 474 381 492 381 l 263 381 l 263 78 q 277 40 263 49 q 339 32 292 31 l 532 40 q 580 51 564 42 q 608 88 596 60 l 657 189 l 679 189 l 663 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 531 792 q 572 794 554 792 q 610 803 590 797 l 619 800 l 619 613 l 599 613 l 567 699 q 540 740 556 729 q 489 753 525 751 l 263 758 l 263 419 l 474 419 q 500 424 492 419 q 515 449 508 429 l 547 526 l 568 526 m 487 902 q 468 880 487 902 q 385 858 450 858 q 282 902 319 858 q 238 1031 244 946 l 260 1032 q 302 947 272 974 q 385 919 332 919 q 468 946 439 919 q 508 1032 497 972 l 531 1031 q 487 902 524 946 z \"},\"ĕ\":{\"ha\":529,\"x_min\":44,\"x_max\":496,\"o\":\"m 293 -14 q 113 57 181 -14 q 44 244 44 128 q 117 435 44 361 q 296 510 190 510 q 436 465 383 510 q 493 342 489 421 l 488 328 l 150 328 q 149 314 149 322 l 149 292 q 200 127 149 186 q 344 68 251 68 q 416 77 381 68 q 485 104 451 86 l 496 89 q 399 17 460 47 q 293 -14 338 -14 m 388 382 q 358 451 388 424 q 285 479 329 479 q 201 448 235 479 q 156 358 168 417 l 363 358 q 383 363 378 358 q 388 382 388 368 m 430 656 q 409 628 430 656 q 317 600 388 600 q 203 655 246 600 q 151 817 161 710 l 175 818 q 220 700 186 738 q 317 663 254 663 q 412 700 378 663 q 457 818 446 738 l 481 817 q 430 656 472 711 z \"},\"Ė\":{\"ha\":732,\"x_min\":57,\"x_max\":679,\"o\":\"m 568 526 l 568 275 l 547 275 l 515 351 q 499 376 507 371 q 474 381 492 381 l 263 381 l 263 78 q 277 40 263 49 q 339 32 292 31 l 532 40 q 580 51 564 42 q 608 88 596 60 l 657 189 l 679 189 l 663 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 531 792 q 572 794 554 792 q 610 803 590 797 l 619 800 l 619 613 l 599 613 l 567 699 q 540 740 556 729 q 489 753 525 751 l 263 758 l 263 419 l 474 419 q 500 424 492 419 q 515 449 508 429 l 547 526 l 568 526 m 429 1006 q 438 997 429 1006 q 447 961 447 988 q 429 917 447 935 q 386 899 411 899 q 342 917 360 899 q 324 961 324 935 q 342 1006 324 988 q 386 1024 360 1024 q 429 1006 411 1024 z \"},\"ė\":{\"ha\":529,\"x_min\":44,\"x_max\":496,\"o\":\"m 293 -14 q 113 57 181 -14 q 44 244 44 128 q 117 435 44 361 q 296 510 190 510 q 436 465 383 510 q 493 342 489 421 l 488 328 l 150 328 q 149 314 149 322 l 149 292 q 200 127 149 186 q 344 68 251 68 q 416 77 381 68 q 485 104 451 86 l 496 89 q 399 17 460 47 q 293 -14 338 -14 m 388 382 q 358 451 388 424 q 285 479 329 479 q 201 448 235 479 q 156 358 168 417 l 363 358 q 383 363 378 358 q 388 382 388 368 m 376 746 q 360 703 376 721 q 318 686 343 686 q 275 703 292 686 q 258 746 258 719 q 276 788 258 771 q 318 804 293 804 q 359 787 342 804 q 376 746 376 769 z \"},\"Ę\":{\"ha\":732,\"x_min\":57,\"x_max\":679,\"o\":\"m 568 526 l 568 275 l 547 275 l 515 351 q 499 376 507 371 q 474 381 492 381 l 263 381 l 263 78 q 277 40 263 49 q 339 32 292 31 l 532 40 q 580 51 564 42 q 608 88 596 60 l 657 189 l 679 189 l 663 0 l 589 0 q 522 -97 542 -57 q 503 -176 503 -136 q 524 -237 503 -215 q 582 -260 544 -260 q 622 -253 603 -260 q 660 -232 642 -246 l 669 -244 q 617 -288 650 -269 q 556 -307 585 -307 q 474 -278 506 -307 q 442 -204 442 -250 q 464 -123 442 -165 q 558 0 486 -81 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 531 792 q 572 794 554 792 q 610 803 590 797 l 619 800 l 619 613 l 599 613 l 567 699 q 540 740 556 729 q 489 753 525 751 l 263 758 l 263 419 l 474 419 q 500 424 492 419 q 515 449 508 429 l 547 526 l 568 526 z \"},\"ę\":{\"ha\":529,\"x_min\":44,\"x_max\":496,\"o\":\"m 374 -307 q 292 -278 324 -307 q 260 -201 260 -249 q 292 -103 260 -156 q 393 15 325 -50 q 341 -6 368 1 q 293 -14 314 -14 q 113 57 181 -14 q 44 244 44 128 q 117 435 44 361 q 296 510 190 510 q 436 465 383 510 q 493 342 489 421 l 488 328 l 150 328 q 149 314 149 322 l 149 292 q 200 127 149 186 q 344 68 251 68 q 416 77 381 68 q 485 104 451 86 l 496 89 q 481 75 489 82 q 461 54 474 68 q 433 28 443 38 l 414 8 q 342 -90 365 -44 q 319 -176 319 -136 q 341 -237 319 -214 q 399 -260 363 -260 q 439 -253 419 -260 q 476 -232 458 -246 l 488 -244 q 435 -288 468 -269 q 374 -307 403 -307 m 388 382 q 358 451 388 424 q 285 479 329 479 q 201 448 235 479 q 156 358 168 417 l 363 358 q 383 363 378 358 q 388 382 388 368 z \"},\"Ě\":{\"ha\":732,\"x_min\":57,\"x_max\":679,\"o\":\"m 568 526 l 568 275 l 547 275 l 515 351 q 499 376 507 371 q 474 381 492 381 l 263 381 l 263 78 q 277 40 263 49 q 339 32 292 31 l 532 40 q 580 51 564 42 q 608 88 596 60 l 657 189 l 679 189 l 663 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 531 792 q 572 794 554 792 q 610 803 590 797 l 619 800 l 619 613 l 599 613 l 567 699 q 540 740 556 729 q 489 753 525 751 l 263 758 l 263 419 l 474 419 q 500 424 492 419 q 515 449 508 429 l 547 526 l 568 526 m 510 1060 l 532 1046 l 422 886 q 402 864 411 869 q 382 858 393 858 q 361 864 369 858 q 342 886 353 869 l 231 1046 l 253 1060 l 381 915 l 382 915 l 510 1060 z \"},\"ě\":{\"ha\":529,\"x_min\":44,\"x_max\":496,\"o\":\"m 293 -14 q 113 57 181 -14 q 44 244 44 128 q 117 435 44 361 q 296 510 190 510 q 436 465 383 510 q 493 342 489 421 l 488 328 l 150 328 q 149 314 149 322 l 149 292 q 200 127 149 186 q 344 68 251 68 q 416 77 381 68 q 485 104 451 86 l 496 89 q 399 17 460 47 q 293 -14 338 -14 m 388 382 q 358 451 388 424 q 285 479 329 479 q 201 448 235 479 q 156 358 168 417 l 363 358 q 383 363 378 358 q 388 382 388 368 m 274 601 l 154 838 l 176 851 l 311 632 l 314 632 l 449 851 l 471 838 l 351 601 q 334 577 343 585 q 313 569 325 569 q 292 576 300 569 q 274 601 283 582 z \"},\"Ĝ\":{\"ha\":888,\"x_min\":58,\"x_max\":865,\"o\":\"m 503 -14 q 181 96 303 -14 q 58 388 58 206 q 183 688 58 569 q 499 806 308 806 q 657 785 583 806 q 786 728 731 765 l 786 571 l 765 571 l 743 632 q 652 732 718 696 q 493 768 586 768 q 267 673 349 768 q 185 408 185 578 q 274 128 185 233 q 508 22 363 22 q 603 33 558 22 q 679 64 649 44 l 679 240 q 670 281 679 271 q 631 297 661 292 l 561 308 l 561 332 l 865 332 l 865 308 l 835 300 q 798 282 806 293 q 790 240 790 271 l 790 139 q 793 99 790 115 q 801 68 796 83 l 797 60 q 663 6 744 26 q 503 -14 582 -14 m 547 1031 l 658 871 l 636 857 l 508 1001 l 507 1001 l 378 857 l 356 871 l 467 1031 q 487 1054 479 1049 q 507 1060 494 1060 q 526 1053 518 1060 q 547 1031 535 1047 z \"},\"ĝ\":{\"ha\":576,\"x_min\":35,\"x_max\":569,\"o\":\"m 489 319 q 426 188 489 240 q 275 136 363 136 q 230 140 251 136 q 188 150 208 143 q 144 103 156 119 q 133 69 133 88 q 151 31 133 44 q 201 17 168 17 l 431 17 q 532 -21 496 17 q 568 -122 568 -58 q 472 -310 568 -231 q 244 -389 375 -389 q 94 -342 154 -389 q 35 -224 35 -294 q 54 -176 35 -200 q 156 -74 74 -153 q 78 -40 107 -68 q 50 29 50 -12 q 73 76 50 49 q 158 163 96 103 q 83 226 110 186 q 57 319 57 267 q 122 456 57 401 q 275 510 186 510 q 301 508 288 510 q 331 503 314 507 q 375 492 340 501 q 440 482 410 482 l 569 482 l 569 429 l 450 429 q 479 378 469 406 q 489 319 489 350 m 163 329 q 195 211 163 257 q 279 165 228 165 q 358 203 331 165 q 386 313 386 242 q 355 435 386 390 q 269 481 324 481 q 192 440 221 481 q 163 329 163 399 m 129 -196 q 174 -301 129 -262 q 301 -339 219 -339 q 442 -292 386 -339 q 499 -174 499 -244 q 472 -100 499 -125 q 392 -75 444 -75 l 193 -75 q 143 -136 157 -110 q 129 -196 129 -162 m 350 819 l 472 583 l 450 569 l 313 786 l 310 786 l 172 569 l 150 583 l 272 819 q 291 844 282 838 q 313 851 300 851 q 332 845 324 851 q 350 819 340 839 z \"},\"Ğ\":{\"ha\":888,\"x_min\":58,\"x_max\":865,\"o\":\"m 503 -14 q 181 96 303 -14 q 58 388 58 206 q 183 688 58 569 q 499 806 308 806 q 657 785 583 806 q 786 728 731 765 l 786 571 l 765 571 l 743 632 q 652 732 718 696 q 493 768 586 768 q 267 673 349 768 q 185 408 185 578 q 274 128 185 233 q 508 22 363 22 q 603 33 558 22 q 679 64 649 44 l 679 240 q 670 281 679 271 q 631 297 661 292 l 561 308 l 561 332 l 865 332 l 865 308 l 835 300 q 798 282 806 293 q 790 240 790 271 l 790 139 q 793 99 790 115 q 801 68 796 83 l 797 60 q 663 6 744 26 q 503 -14 582 -14 m 613 902 q 595 880 613 902 q 511 858 576 858 q 408 902 446 858 q 364 1031 371 946 l 386 1032 q 428 947 399 974 q 511 919 458 919 q 594 946 565 919 q 635 1032 624 972 l 657 1031 q 613 902 650 946 z \"},\"ğ\":{\"ha\":576,\"x_min\":35,\"x_max\":569,\"o\":\"m 489 319 q 426 188 489 240 q 275 136 363 136 q 230 140 251 136 q 188 150 208 143 q 144 103 156 119 q 133 69 133 88 q 151 31 133 44 q 201 17 168 17 l 431 17 q 532 -21 496 17 q 568 -122 568 -58 q 472 -310 568 -231 q 244 -389 375 -389 q 94 -342 154 -389 q 35 -224 35 -294 q 54 -176 35 -200 q 156 -74 74 -153 q 78 -40 107 -68 q 50 29 50 -12 q 73 76 50 49 q 158 163 96 103 q 83 226 110 186 q 57 319 57 267 q 122 456 57 401 q 275 510 186 510 q 301 508 288 510 q 331 503 314 507 q 375 492 340 501 q 440 482 410 482 l 569 482 l 569 429 l 450 429 q 479 378 469 406 q 489 319 489 350 m 163 329 q 195 211 163 257 q 279 165 228 165 q 358 203 331 165 q 386 313 386 242 q 355 435 386 390 q 269 481 324 481 q 192 440 221 481 q 163 329 163 399 m 129 -196 q 174 -301 129 -262 q 301 -339 219 -339 q 442 -292 386 -339 q 499 -174 499 -244 q 472 -100 499 -125 q 392 -75 444 -75 l 193 -75 q 143 -136 157 -110 q 129 -196 129 -162 m 428 656 q 407 628 428 656 q 315 600 386 600 q 202 655 244 600 q 150 817 160 710 l 174 818 q 219 700 185 738 q 315 663 253 663 q 410 700 376 663 q 456 818 444 738 l 479 817 q 428 656 471 711 z \"},\"Ġ\":{\"ha\":888,\"x_min\":58,\"x_max\":865,\"o\":\"m 503 -14 q 181 96 303 -14 q 58 388 58 206 q 183 688 58 569 q 499 806 308 806 q 657 785 583 806 q 786 728 731 765 l 786 571 l 765 571 l 743 632 q 652 732 718 696 q 493 768 586 768 q 267 673 349 768 q 185 408 185 578 q 274 128 185 233 q 508 22 363 22 q 603 33 558 22 q 679 64 649 44 l 679 240 q 670 281 679 271 q 631 297 661 292 l 561 308 l 561 332 l 865 332 l 865 308 l 835 300 q 798 282 806 293 q 790 240 790 271 l 790 139 q 793 99 790 115 q 801 68 796 83 l 797 60 q 663 6 744 26 q 503 -14 582 -14 m 556 1006 q 565 997 556 1006 q 574 961 574 988 q 556 917 574 935 q 513 899 538 899 q 468 917 486 899 q 450 961 450 935 q 468 1006 450 988 q 513 1024 486 1024 q 556 1006 538 1024 z \"},\"ġ\":{\"ha\":576,\"x_min\":35,\"x_max\":569,\"o\":\"m 489 319 q 426 188 489 240 q 275 136 363 136 q 230 140 251 136 q 188 150 208 143 q 144 103 156 119 q 133 69 133 88 q 151 31 133 44 q 201 17 168 17 l 431 17 q 532 -21 496 17 q 568 -122 568 -58 q 472 -310 568 -231 q 244 -389 375 -389 q 94 -342 154 -389 q 35 -224 35 -294 q 54 -176 35 -200 q 156 -74 74 -153 q 78 -40 107 -68 q 50 29 50 -12 q 73 76 50 49 q 158 163 96 103 q 83 226 110 186 q 57 319 57 267 q 122 456 57 401 q 275 510 186 510 q 301 508 288 510 q 331 503 314 507 q 375 492 340 501 q 440 482 410 482 l 569 482 l 569 429 l 450 429 q 479 378 469 406 q 489 319 489 350 m 163 329 q 195 211 163 257 q 279 165 228 165 q 358 203 331 165 q 386 313 386 242 q 355 435 386 390 q 269 481 324 481 q 192 440 221 481 q 163 329 163 399 m 129 -196 q 174 -301 129 -262 q 301 -339 219 -339 q 442 -292 386 -339 q 499 -174 499 -244 q 472 -100 499 -125 q 392 -75 444 -75 l 193 -75 q 143 -136 157 -110 q 129 -196 129 -162 m 375 746 q 358 703 375 721 q 317 686 342 686 q 274 703 290 686 q 257 746 257 719 q 274 788 257 771 q 317 804 292 804 q 358 787 340 804 q 375 746 375 769 z \"},\"Ģ\":{\"ha\":888,\"x_min\":58,\"x_max\":865,\"o\":\"m 503 -14 q 181 96 303 -14 q 58 388 58 206 q 183 688 58 569 q 499 806 308 806 q 657 785 583 806 q 786 728 731 765 l 786 571 l 765 571 l 743 632 q 652 732 718 696 q 493 768 586 768 q 267 673 349 768 q 185 408 185 578 q 274 128 185 233 q 508 22 363 22 q 603 33 558 22 q 679 64 649 44 l 679 240 q 670 281 679 271 q 631 297 661 292 l 561 308 l 561 332 l 865 332 l 865 308 l 835 300 q 798 282 806 293 q 790 240 790 271 l 790 139 q 793 99 790 115 q 801 68 796 83 l 797 60 q 663 6 744 26 q 503 -14 582 -14 m 579 -151 q 541 -248 579 -207 q 431 -308 503 -289 l 424 -285 q 506 -244 478 -268 q 533 -190 533 -221 q 515 -153 533 -168 q 442 -118 497 -137 q 467 -76 453 -87 q 503 -65 481 -65 q 558 -89 538 -65 q 579 -151 579 -112 z \"},\"ģ\":{\"ha\":576,\"x_min\":35,\"x_max\":569,\"o\":\"m 489 319 q 426 188 489 240 q 275 136 363 136 q 230 140 251 136 q 188 150 208 143 q 144 103 156 119 q 133 69 133 88 q 151 31 133 44 q 201 17 168 17 l 431 17 q 532 -21 496 17 q 568 -122 568 -58 q 472 -310 568 -231 q 244 -389 375 -389 q 94 -342 154 -389 q 35 -224 35 -294 q 54 -176 35 -200 q 156 -74 74 -153 q 78 -40 107 -68 q 50 29 50 -12 q 73 76 50 49 q 158 163 96 103 q 83 226 110 186 q 57 319 57 267 q 122 456 57 401 q 275 510 186 510 q 301 508 288 510 q 331 503 314 507 q 375 492 340 501 q 440 482 410 482 l 569 482 l 569 429 l 450 429 q 479 378 469 406 q 489 319 489 350 m 163 329 q 195 211 163 257 q 279 165 228 165 q 358 203 331 165 q 386 313 386 242 q 355 435 386 390 q 269 481 324 481 q 192 440 221 481 q 163 329 163 399 m 129 -196 q 174 -301 129 -262 q 301 -339 219 -339 q 442 -292 386 -339 q 499 -174 499 -244 q 472 -100 499 -125 q 392 -75 444 -75 l 193 -75 q 143 -136 157 -110 q 129 -196 129 -162 m 238 676 q 275 774 238 733 q 385 835 313 814 l 393 811 q 312 770 340 794 q 283 715 283 746 q 300 678 283 693 q 375 644 317 664 q 350 602 364 614 q 314 590 336 590 q 258 614 279 590 q 238 676 238 638 z \"},\"Ĥ\":{\"ha\":954,\"x_min\":57,\"x_max\":896,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 310 758 q 269 740 278 750 q 261 700 261 729 l 261 431 l 692 431 l 692 700 q 683 740 692 729 q 643 758 675 750 l 597 768 l 597 792 l 896 792 l 896 768 l 851 758 q 811 740 819 750 q 803 700 803 729 l 803 90 q 811 51 803 61 q 851 32 819 40 l 896 22 l 896 0 l 597 0 l 597 22 l 643 32 q 683 51 675 40 q 692 90 692 61 l 692 392 l 261 392 l 261 90 q 269 51 261 61 q 310 32 278 40 l 356 22 m 524 1031 l 635 871 l 613 857 l 485 1001 l 483 1001 l 354 857 l 332 871 l 443 1031 q 463 1054 456 1049 q 483 1060 471 1060 q 503 1053 494 1060 q 524 1031 511 1047 z \"},\"ĥ\":{\"ha\":642,\"x_min\":21,\"x_max\":622,\"o\":\"m 292 19 l 292 0 l 43 0 l 43 19 l 82 29 q 108 43 101 33 q 115 76 115 53 l 115 815 q 110 844 115 836 q 92 860 106 853 l 57 878 l 57 893 l 215 944 l 225 938 q 219 883 221 910 q 218 818 218 857 l 218 435 q 310 488 261 465 q 388 510 360 510 q 506 466 464 510 q 549 342 549 422 l 549 76 q 556 43 549 53 q 582 29 563 33 l 622 19 l 622 0 l 374 0 l 374 19 l 413 29 q 439 43 432 33 q 446 76 446 53 l 446 315 q 419 410 446 379 q 335 440 392 440 q 276 431 306 440 q 218 404 246 422 l 218 76 q 225 43 218 53 q 251 29 232 33 l 292 19 m 213 1176 l 324 1017 l 301 1003 l 174 1147 l 172 1147 l 43 1003 l 21 1017 l 132 1176 q 152 1200 144 1194 q 172 1206 160 1206 q 192 1199 183 1206 q 213 1176 200 1193 z \"},\"Ħ\":{\"ha\":954,\"x_min\":57,\"x_max\":896,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 572 l 57 572 l 57 608 l 150 608 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 310 758 q 269 740 278 750 q 261 700 261 729 l 261 608 l 692 608 l 692 700 q 683 740 692 729 q 643 758 675 750 l 597 768 l 597 792 l 896 792 l 896 768 l 851 758 q 811 740 819 750 q 803 700 803 729 l 803 608 l 896 608 l 896 572 l 803 572 l 803 90 q 811 51 803 61 q 851 32 819 40 l 896 22 l 896 0 l 597 0 l 597 22 l 643 32 q 683 51 675 40 q 692 90 692 61 l 692 392 l 261 392 l 261 90 q 269 51 261 61 q 310 32 278 40 l 356 22 m 261 572 l 261 431 l 692 431 l 692 572 l 261 572 z \"},\"ħ\":{\"ha\":618,\"x_min\":21,\"x_max\":600,\"o\":\"m 269 19 l 269 0 l 21 0 l 21 19 l 60 29 q 86 43 79 33 q 93 76 93 53 l 93 679 l 29 679 l 29 714 l 93 714 l 93 815 q 88 844 93 836 q 69 860 83 853 l 35 878 l 35 893 l 193 944 l 203 938 q 197 883 199 910 q 196 818 196 857 l 196 714 l 346 714 l 346 679 l 196 679 l 196 435 q 288 488 239 465 q 365 510 338 510 q 484 466 442 510 q 526 342 526 422 l 526 76 q 533 43 526 53 q 560 29 540 33 l 600 19 l 600 0 l 351 0 l 351 19 l 390 29 q 417 43 410 33 q 424 76 424 53 l 424 315 q 397 410 424 379 q 313 440 369 440 q 253 431 283 440 q 196 404 224 422 l 196 76 q 203 43 196 53 q 229 29 210 33 l 269 19 z \"},\"Ĩ\":{\"ha\":414,\"x_min\":42,\"x_max\":386,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 m 286 908 q 260 913 276 908 q 210 933 244 918 q 158 955 174 950 q 131 960 142 960 q 103 951 114 960 q 85 918 93 942 l 65 869 l 42 879 l 64 940 q 97 1000 81 985 q 140 1015 113 1015 q 165 1010 150 1015 q 215 990 181 1006 q 267 969 251 974 q 293 964 283 964 q 320 972 310 964 q 342 1007 331 981 l 363 1053 l 386 1043 l 363 983 q 328 922 343 936 q 286 908 313 908 z \"},\"ĩ\":{\"ha\":296,\"x_min\":-31,\"x_max\":349,\"o\":\"m 276 19 l 276 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 203 458 204 481 q 201 385 201 436 l 201 76 q 208 43 201 53 q 235 29 215 33 l 276 19 m 243 667 q 214 671 232 667 q 156 689 196 675 q 97 706 115 701 q 68 710 79 710 q 40 701 51 710 q 19 671 29 693 l -7 608 l -31 617 l 1 696 q 35 754 19 740 q 75 768 50 768 q 104 764 86 768 q 163 747 122 760 q 219 729 201 733 q 249 725 238 725 q 275 733 264 725 q 299 767 286 740 l 325 828 l 349 818 l 318 742 q 284 681 300 696 q 243 667 268 667 z \"},\"Ī\":{\"ha\":414,\"x_min\":50,\"x_max\":365,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 m 365 940 l 50 940 l 50 990 l 365 990 l 365 940 z \"},\"ī\":{\"ha\":296,\"x_min\":-21,\"x_max\":328,\"o\":\"m 276 19 l 276 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 203 458 204 481 q 201 385 201 436 l 201 76 q 208 43 201 53 q 235 29 215 33 l 276 19 m 328 707 l -21 707 l -21 757 l 328 757 l 328 707 z \"},\"Ĭ\":{\"ha\":414,\"x_min\":57,\"x_max\":356,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 m 310 902 q 292 880 310 902 q 208 858 274 858 q 106 902 143 858 q 61 1031 68 946 l 83 1032 q 126 947 96 974 q 208 919 156 919 q 292 946 263 919 q 332 1032 321 972 l 354 1031 q 310 902 347 946 z \"},\"ĭ\":{\"ha\":296,\"x_min\":-10,\"x_max\":319,\"o\":\"m 276 19 l 276 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 203 458 204 481 q 201 385 201 436 l 201 76 q 208 43 201 53 q 235 29 215 33 l 276 19 m 269 656 q 248 628 269 656 q 156 600 226 600 q 42 655 85 600 q -10 817 0 710 l 14 818 q 59 700 25 738 q 156 663 93 663 q 251 700 217 663 q 296 818 285 738 l 319 817 q 269 656 311 711 z \"},\"Į\":{\"ha\":414,\"x_min\":57,\"x_max\":356,\"o\":\"m 356 22 l 356 0 l 250 0 q 183 -97 203 -57 q 164 -176 164 -136 q 185 -237 164 -215 q 243 -260 206 -260 q 283 -253 264 -260 q 321 -232 303 -246 l 331 -244 q 278 -288 311 -269 q 217 -307 246 -307 q 135 -278 167 -307 q 103 -204 103 -250 q 125 -123 103 -165 q 219 0 147 -81 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 z \"},\"į\":{\"ha\":296,\"x_min\":25,\"x_max\":286,\"o\":\"m 222 746 q 205 703 222 721 q 163 686 188 686 q 121 703 138 686 q 104 746 104 719 q 121 788 104 771 q 163 804 138 804 q 205 787 188 804 q 222 746 222 769 m 275 19 l 275 0 l 206 0 q 139 -97 158 -57 q 119 -176 119 -136 q 140 -237 119 -215 q 199 -260 161 -260 q 239 -253 219 -260 q 276 -232 258 -246 l 286 -244 q 234 -288 267 -269 q 172 -307 201 -307 q 90 -278 122 -307 q 58 -204 58 -250 q 81 -123 58 -165 q 175 0 103 -81 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 203 458 204 481 q 201 385 201 436 l 201 76 q 208 43 201 53 q 235 29 215 33 l 275 19 z \"},\"İ\":{\"ha\":414,\"x_min\":57,\"x_max\":356,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 m 253 1006 q 262 997 253 1006 q 271 961 271 988 q 253 917 271 935 q 210 899 235 899 q 165 917 183 899 q 147 961 147 935 q 165 1006 147 988 q 210 1024 183 1024 q 253 1006 235 1024 z \"},\"ı\":{\"ha\":296,\"x_min\":25,\"x_max\":276,\"o\":\"m 276 19 l 276 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 203 458 204 481 q 201 385 201 436 l 201 76 q 208 43 201 53 q 235 29 215 33 l 276 19 z \"},\"Ĳ\":{\"ha\":828,\"x_min\":57,\"x_max\":769,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 m 446 -239 l 435 -215 q 540 -119 515 -160 q 564 -11 564 -78 l 564 700 q 556 740 564 729 q 515 758 547 750 l 471 768 l 471 792 l 769 792 l 769 768 l 725 758 q 685 740 693 750 q 676 700 676 729 l 676 10 q 627 -120 676 -65 q 446 -239 578 -175 z \"},\"ĳ\":{\"ha\":572,\"x_min\":25,\"x_max\":513,\"o\":\"m 222 746 q 205 703 222 721 q 163 686 188 686 q 121 703 138 686 q 104 746 104 719 q 121 788 104 771 q 163 804 138 804 q 205 787 188 804 q 222 746 222 769 m 275 19 l 275 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 203 458 204 481 q 201 385 201 436 l 201 76 q 208 43 201 53 q 235 29 215 33 l 275 19 m 513 746 q 496 703 513 719 q 454 686 479 686 q 412 703 428 686 q 396 746 396 719 q 413 788 396 771 q 454 804 429 804 q 496 788 479 804 q 513 746 513 771 m 490 385 l 490 -112 q 447 -202 490 -158 q 310 -293 403 -246 l 299 -274 q 369 -201 351 -237 q 388 -103 388 -165 l 388 382 q 383 410 388 401 q 364 426 378 419 l 329 444 l 329 460 l 488 510 l 497 504 q 492 449 493 475 q 490 385 490 424 z \"},\"Ĵ\":{\"ha\":414,\"x_min\":21,\"x_max\":357,\"o\":\"m 32 -239 l 21 -215 q 126 -119 101 -160 q 150 -11 150 -78 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 10 q 213 -120 263 -65 q 32 -239 164 -175 m 246 1031 l 357 871 l 335 857 l 207 1001 l 206 1001 l 76 857 l 54 871 l 165 1031 q 185 1054 178 1049 q 206 1060 193 1060 q 225 1053 217 1060 q 246 1031 233 1047 z \"},\"ĵ\":{\"ha\":272,\"x_min\":-6,\"x_max\":317,\"o\":\"m 192 385 l 192 -107 q 148 -197 192 -153 q 11 -286 104 -240 l 1 -268 q 72 -194 54 -231 q 90 -97 90 -158 l 90 382 q 85 410 90 400 q 65 426 79 419 l 32 444 l 32 460 l 189 510 l 199 504 q 193 449 194 475 q 192 385 192 424 m 194 819 l 317 583 l 294 569 l 157 786 l 154 786 l 17 569 l -6 583 l 117 819 q 135 844 126 838 q 157 851 144 851 q 176 845 168 851 q 194 819 185 839 z \"},\"Ķ\":{\"ha\":840,\"x_min\":57,\"x_max\":833,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 425 l 586 717 q 599 741 603 731 q 571 757 594 751 l 515 768 l 515 792 l 794 792 l 794 768 l 753 758 q 703 744 721 753 q 665 721 685 736 l 357 463 l 703 86 q 743 53 724 64 q 800 32 763 43 l 833 22 l 833 0 l 488 0 l 488 22 l 547 35 q 576 49 572 40 q 565 75 581 57 l 263 403 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 m 494 -151 q 456 -248 494 -207 q 346 -308 418 -289 l 339 -285 q 421 -244 393 -268 q 449 -190 449 -221 q 431 -153 449 -168 q 357 -118 413 -137 q 382 -76 368 -87 q 418 -65 396 -65 q 474 -89 453 -65 q 494 -151 494 -112 z \"},\"ķ\":{\"ha\":614,\"x_min\":19,\"x_max\":611,\"o\":\"m 269 19 l 269 0 l 19 0 l 19 19 l 60 29 q 86 43 79 33 q 93 76 93 53 l 93 815 q 88 844 93 835 q 69 860 83 853 l 35 878 l 35 893 l 193 944 l 203 938 q 197 883 199 910 q 196 818 196 857 l 196 76 q 203 43 196 53 q 229 29 210 33 l 269 19 m 574 28 l 611 19 l 611 0 l 350 0 l 350 19 l 397 28 q 412 36 410 31 q 407 51 414 42 l 218 272 l 218 281 l 413 442 q 417 455 419 449 q 404 464 415 461 l 338 476 l 338 496 l 589 496 l 589 476 l 522 463 q 497 456 507 460 q 476 443 488 451 l 311 319 l 524 63 q 550 39 539 46 q 574 28 561 32 m 381 -151 q 342 -248 381 -207 q 232 -308 304 -289 l 225 -285 q 307 -244 279 -268 q 335 -190 335 -221 q 317 -153 335 -168 q 243 -118 299 -137 q 268 -76 254 -87 q 304 -65 282 -65 q 360 -89 339 -65 q 381 -151 381 -112 z \"},\"ĸ\":{\"ha\":614,\"x_min\":25,\"x_max\":617,\"o\":\"m 276 19 l 276 0 l 25 0 l 25 19 l 67 29 q 93 43 86 33 q 100 76 100 53 l 100 382 q 94 410 100 401 q 75 426 89 419 l 42 444 l 42 460 l 199 510 l 210 504 q 204 456 206 472 q 203 421 203 440 l 203 76 q 210 43 203 53 q 236 29 217 33 l 276 19 m 617 19 l 617 0 l 356 0 l 356 19 l 403 28 q 419 36 417 31 q 413 51 422 42 l 224 244 l 224 253 l 418 442 q 423 455 425 449 q 411 464 421 461 l 343 476 l 343 496 l 594 496 l 594 476 l 528 463 q 503 456 513 460 q 482 443 493 451 l 313 297 l 531 63 q 557 39 546 46 q 581 28 568 32 l 617 19 z \"},\"Ĺ\":{\"ha\":693,\"x_min\":57,\"x_max\":668,\"o\":\"m 668 192 l 653 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 78 q 278 39 263 49 q 339 32 293 29 l 524 40 q 572 51 557 42 q 600 88 588 60 l 647 192 l 668 192 m 219 857 l 197 867 l 250 1018 q 268 1050 260 1040 q 288 1060 276 1060 q 306 1053 299 1060 q 313 1036 313 1047 q 310 1023 313 1031 q 300 1000 307 1015 l 219 857 z \"},\"ĺ\":{\"ha\":292,\"x_min\":21,\"x_max\":269,\"o\":\"m 269 19 l 269 0 l 21 0 l 21 19 l 60 29 q 86 43 79 33 q 93 76 93 53 l 93 815 q 88 844 93 835 q 69 860 83 853 l 35 878 l 35 893 l 193 944 l 203 938 q 197 883 199 910 q 196 818 196 857 l 196 76 q 203 43 196 53 q 229 29 210 33 l 269 19 m 154 1003 l 132 1013 l 185 1164 q 203 1196 194 1186 q 222 1206 211 1206 q 240 1199 233 1206 q 247 1182 247 1193 q 244 1169 247 1176 q 235 1146 242 1161 l 154 1003 z \"},\"Ļ\":{\"ha\":693,\"x_min\":57,\"x_max\":668,\"o\":\"m 668 192 l 653 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 78 q 278 39 263 49 q 339 32 293 29 l 524 40 q 572 51 557 42 q 600 88 588 60 l 647 192 l 668 192 m 488 -151 q 449 -248 488 -207 q 339 -308 411 -289 l 332 -285 q 414 -244 386 -268 q 442 -190 442 -221 q 424 -153 442 -168 q 350 -118 406 -137 q 375 -76 361 -87 q 411 -65 389 -65 q 467 -89 446 -65 q 488 -151 488 -112 z \"},\"ļ\":{\"ha\":292,\"x_min\":21,\"x_max\":269,\"o\":\"m 269 19 l 269 0 l 21 0 l 21 19 l 60 29 q 86 43 79 33 q 93 76 93 53 l 93 815 q 88 844 93 835 q 69 860 83 853 l 35 878 l 35 893 l 193 944 l 203 938 q 197 883 199 910 q 196 818 196 857 l 196 76 q 203 43 196 53 q 229 29 210 33 l 269 19 m 217 -151 q 178 -248 217 -207 q 68 -308 140 -289 l 61 -285 q 143 -244 115 -268 q 171 -190 171 -221 q 153 -153 171 -168 q 79 -118 135 -137 q 104 -76 90 -87 q 140 -65 118 -65 q 196 -89 175 -65 q 217 -151 217 -112 z \"},\"Ľ\":{\"ha\":693,\"x_min\":57,\"x_max\":668,\"o\":\"m 668 192 l 653 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 78 q 278 39 263 49 q 339 32 293 29 l 524 40 q 572 51 557 42 q 600 88 588 60 l 647 192 l 668 192 m 397 575 l 378 578 l 401 810 q 413 848 404 836 q 435 860 421 860 q 452 853 446 860 q 458 835 458 846 q 458 824 458 831 q 453 799 457 818 l 397 575 z \"},\"ľ\":{\"ha\":361,\"x_min\":21,\"x_max\":357,\"o\":\"m 269 19 l 269 0 l 21 0 l 21 19 l 60 29 q 86 43 79 33 q 93 76 93 53 l 93 815 q 88 844 93 835 q 69 860 83 853 l 35 878 l 35 893 l 193 944 l 203 938 q 197 883 199 910 q 196 818 196 857 l 196 76 q 203 43 196 53 q 229 29 210 33 l 269 19 m 296 668 l 276 671 l 300 903 q 311 941 303 929 q 333 953 319 953 q 351 946 344 953 q 357 928 357 939 q 356 917 357 924 q 351 892 356 911 l 296 668 z \"},\"Ŀ\":{\"ha\":693,\"x_min\":57,\"x_max\":668,\"o\":\"m 668 192 l 653 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 78 q 278 39 263 49 q 339 32 293 29 l 524 40 q 572 51 557 42 q 600 88 588 60 l 647 192 l 668 192 m 593 453 q 602 444 593 453 q 611 408 611 435 q 593 364 611 382 q 549 346 575 346 q 504 364 522 346 q 486 408 486 382 q 504 453 486 435 q 549 472 522 472 q 593 453 575 472 z \"},\"ŀ\":{\"ha\":400,\"x_min\":21,\"x_max\":407,\"o\":\"m 269 19 l 269 0 l 21 0 l 21 19 l 60 29 q 86 43 79 33 q 93 76 93 53 l 93 815 q 88 844 93 835 q 69 860 83 853 l 35 878 l 35 893 l 193 944 l 203 938 q 197 883 199 910 q 196 818 196 857 l 196 76 q 203 43 196 53 q 229 29 210 33 l 269 19 m 389 452 q 398 443 389 452 q 407 407 407 433 q 389 363 407 381 q 344 344 371 344 q 300 363 318 344 q 282 407 282 381 q 300 452 282 433 q 344 471 318 471 q 389 452 371 471 z \"},\"Ł\":{\"ha\":693,\"x_min\":57,\"x_max\":668,\"o\":\"m 150 358 l 72 326 l 57 363 l 150 400 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 447 l 413 508 l 428 472 l 263 404 l 263 78 q 278 39 263 49 q 339 32 293 29 l 524 40 q 572 51 557 42 q 600 88 588 60 l 647 192 l 668 192 l 653 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 358 z \"},\"ł\":{\"ha\":292,\"x_min\":-11,\"x_max\":303,\"o\":\"m 269 19 l 269 0 l 21 0 l 21 19 l 60 29 q 86 43 79 33 q 93 76 93 53 l 93 421 l 4 376 l -11 408 l 93 461 l 93 815 q 88 844 93 835 q 69 860 83 853 l 35 878 l 35 893 l 193 944 l 203 938 q 197 883 199 910 q 196 818 196 857 l 196 513 l 286 558 l 303 528 l 196 474 l 196 76 q 203 43 196 53 q 229 29 210 33 l 269 19 z \"},\"Ń\":{\"ha\":939,\"x_min\":54,\"x_max\":883,\"o\":\"m 304 22 l 304 0 l 54 0 l 54 22 l 99 32 q 139 51 131 40 q 147 90 147 61 l 147 700 q 139 740 147 729 q 99 758 131 750 l 54 768 l 54 792 l 238 792 l 742 174 l 742 700 q 733 742 742 731 q 693 758 724 753 l 635 768 l 635 792 l 883 792 l 883 768 l 839 758 q 799 740 807 750 q 790 700 790 729 l 790 0 l 738 0 l 197 665 l 197 90 q 206 49 197 60 q 246 32 215 38 l 304 22 m 483 857 l 461 867 l 514 1018 q 532 1050 524 1040 q 551 1060 540 1060 q 569 1053 563 1060 q 576 1036 576 1047 q 574 1023 576 1031 q 564 1000 571 1015 l 483 857 z \"},\"ń\":{\"ha\":624,\"x_min\":25,\"x_max\":606,\"o\":\"m 275 19 l 275 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 204 474 206 489 q 201 435 203 458 q 292 488 243 465 q 369 510 342 510 q 489 466 446 510 q 532 342 532 422 l 532 76 q 539 43 532 53 q 565 29 546 33 l 606 19 l 606 0 l 356 0 l 356 19 l 396 29 q 422 43 415 33 q 429 76 429 53 l 429 315 q 402 410 429 379 q 317 440 375 440 q 259 431 289 440 q 201 404 229 422 l 201 76 q 208 43 201 53 q 235 29 215 33 l 275 19 m 329 569 l 308 579 l 396 808 q 414 842 404 832 q 435 851 424 851 q 453 844 446 851 q 460 826 460 838 q 457 811 460 819 q 447 790 454 803 l 329 569 z \"},\"Ņ\":{\"ha\":939,\"x_min\":54,\"x_max\":883,\"o\":\"m 304 22 l 304 0 l 54 0 l 54 22 l 99 32 q 139 51 131 40 q 147 90 147 61 l 147 700 q 139 740 147 729 q 99 758 131 750 l 54 768 l 54 792 l 238 792 l 742 174 l 742 700 q 733 742 742 731 q 693 758 724 753 l 635 768 l 635 792 l 883 792 l 883 768 l 839 758 q 799 740 807 750 q 790 700 790 729 l 790 0 l 738 0 l 197 665 l 197 90 q 206 49 197 60 q 246 32 215 38 l 304 22 m 543 -151 q 505 -248 543 -207 q 394 -308 467 -289 l 388 -285 q 469 -244 442 -268 q 497 -190 497 -221 q 479 -153 497 -168 q 406 -118 461 -137 q 431 -76 417 -87 q 467 -65 444 -65 q 522 -89 501 -65 q 543 -151 543 -112 z \"},\"ņ\":{\"ha\":624,\"x_min\":25,\"x_max\":606,\"o\":\"m 275 19 l 275 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 204 474 206 489 q 201 435 203 458 q 292 488 243 465 q 369 510 342 510 q 489 466 446 510 q 532 342 532 422 l 532 76 q 539 43 532 53 q 565 29 546 33 l 606 19 l 606 0 l 356 0 l 356 19 l 396 29 q 422 43 415 33 q 429 76 429 53 l 429 315 q 402 410 429 379 q 317 440 375 440 q 259 431 289 440 q 201 404 229 422 l 201 76 q 208 43 201 53 q 235 29 215 33 l 275 19 m 388 -151 q 349 -248 388 -207 q 239 -308 311 -289 l 232 -285 q 314 -244 286 -268 q 342 -190 342 -221 q 324 -153 342 -168 q 250 -118 306 -137 q 275 -76 261 -87 q 311 -65 289 -65 q 367 -89 346 -65 q 388 -151 388 -112 z \"},\"Ň\":{\"ha\":939,\"x_min\":54,\"x_max\":883,\"o\":\"m 304 22 l 304 0 l 54 0 l 54 22 l 99 32 q 139 51 131 40 q 147 90 147 61 l 147 700 q 139 740 147 729 q 99 758 131 750 l 54 768 l 54 792 l 238 792 l 742 174 l 742 700 q 733 742 742 731 q 693 758 724 753 l 635 768 l 635 792 l 883 792 l 883 768 l 839 758 q 799 740 807 750 q 790 700 790 729 l 790 0 l 738 0 l 197 665 l 197 90 q 206 49 197 60 q 246 32 215 38 l 304 22 m 596 1060 l 618 1046 l 508 886 q 488 864 497 869 q 468 858 479 858 q 447 864 456 858 q 428 886 439 869 l 317 1046 l 339 1060 l 467 915 l 468 915 l 596 1060 z \"},\"ň\":{\"ha\":624,\"x_min\":25,\"x_max\":606,\"o\":\"m 275 19 l 275 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 204 474 206 489 q 201 435 203 458 q 292 488 243 465 q 369 510 342 510 q 489 466 446 510 q 532 342 532 422 l 532 76 q 539 43 532 53 q 565 29 546 33 l 606 19 l 606 0 l 356 0 l 356 19 l 396 29 q 422 43 415 33 q 429 76 429 53 l 429 315 q 402 410 429 379 q 317 440 375 440 q 259 431 289 440 q 201 404 229 422 l 201 76 q 208 43 201 53 q 235 29 215 33 l 275 19 m 278 601 l 158 838 l 181 851 l 315 632 l 318 632 l 453 851 l 475 838 l 356 601 q 338 577 347 585 q 317 569 329 569 q 296 576 304 569 q 278 601 288 582 z \"},\"ŉ\":{\"ha\":624,\"x_min\":25,\"x_max\":606,\"o\":\"m 193 692 q 155 595 193 636 q 44 535 117 554 l 38 558 q 119 599 92 575 q 147 653 147 622 q 129 690 147 675 q 56 725 111 706 q 81 767 67 756 q 117 778 94 778 q 172 754 151 778 q 193 692 193 731 m 275 19 l 275 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 204 474 206 489 q 201 435 203 458 q 292 488 243 465 q 369 510 342 510 q 489 466 446 510 q 532 342 532 422 l 532 76 q 539 43 532 53 q 565 29 546 33 l 606 19 l 606 0 l 356 0 l 356 19 l 396 29 q 422 43 415 33 q 429 76 429 53 l 429 315 q 402 410 429 379 q 317 440 375 440 q 259 431 289 440 q 201 404 229 422 l 201 76 q 208 43 201 53 q 235 29 215 33 l 275 19 z \"},\"Ŋ\":{\"ha\":942,\"x_min\":54,\"x_max\":883,\"o\":\"m 304 22 l 304 0 l 54 0 l 54 22 l 99 32 q 139 51 131 40 q 147 90 147 61 l 147 700 q 139 740 147 729 q 99 758 131 750 l 54 768 l 54 792 l 238 792 l 742 164 l 742 700 q 733 740 742 729 q 693 757 725 750 l 635 768 l 635 792 l 883 792 l 883 768 l 839 758 q 799 740 807 750 q 790 700 790 729 l 790 0 q 744 -130 790 -76 q 581 -239 699 -183 l 569 -215 q 692 -110 664 -153 q 721 -10 721 -68 l 721 13 l 197 663 l 197 90 q 206 49 197 60 q 246 33 215 39 l 304 22 z \"},\"ŋ\":{\"ha\":613,\"x_min\":25,\"x_max\":532,\"o\":\"m 275 19 l 275 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 204 474 206 489 q 201 435 203 458 q 292 488 243 465 q 369 510 342 510 q 489 466 446 510 q 532 342 532 422 l 532 -112 q 489 -202 532 -158 q 351 -293 446 -246 l 340 -274 q 411 -200 393 -236 q 429 -103 429 -164 l 429 315 q 402 410 429 379 q 317 440 375 440 q 259 431 289 440 q 201 404 229 422 l 201 76 q 208 43 201 53 q 235 29 215 33 l 275 19 z \"},\"Ō\":{\"ha\":956,\"x_min\":58,\"x_max\":897,\"o\":\"m 897 401 q 777 103 897 221 q 481 -14 657 -14 q 178 98 297 -14 q 58 389 58 210 q 178 688 58 569 q 475 806 299 806 q 778 693 658 806 q 897 401 897 581 m 185 419 q 268 132 185 240 q 490 24 351 24 q 697 115 624 24 q 771 371 771 206 q 688 658 771 550 q 465 767 604 767 q 258 675 332 767 q 185 419 185 583 m 636 940 l 321 940 l 321 990 l 636 990 l 636 940 z \"},\"ō\":{\"ha\":632,\"x_min\":44,\"x_max\":588,\"o\":\"m 588 251 q 507 63 588 139 q 317 -14 426 -14 q 119 55 193 -14 q 44 244 44 124 q 125 433 44 357 q 317 510 206 510 q 513 440 439 510 q 588 251 588 371 m 158 257 q 202 83 158 147 q 322 18 246 18 q 433 76 393 18 q 472 239 472 135 q 428 413 472 349 q 310 478 385 478 q 198 420 238 478 q 158 257 158 363 m 494 707 l 146 707 l 146 757 l 494 757 l 494 707 z \"},\"Ŏ\":{\"ha\":956,\"x_min\":58,\"x_max\":897,\"o\":\"m 897 401 q 777 103 897 221 q 481 -14 657 -14 q 178 98 297 -14 q 58 389 58 210 q 178 688 58 569 q 475 806 299 806 q 778 693 658 806 q 897 401 897 581 m 185 419 q 268 132 185 240 q 490 24 351 24 q 697 115 624 24 q 771 371 771 206 q 688 658 771 550 q 465 767 604 767 q 258 675 332 767 q 185 419 185 583 m 581 902 q 563 880 581 902 q 479 858 544 858 q 376 902 414 858 q 332 1031 339 946 l 354 1032 q 397 947 367 974 q 479 919 426 919 q 563 946 533 919 q 603 1032 592 972 l 625 1031 q 581 902 618 946 z \"},\"ŏ\":{\"ha\":632,\"x_min\":44,\"x_max\":588,\"o\":\"m 588 251 q 507 63 588 139 q 317 -14 426 -14 q 119 55 193 -14 q 44 244 44 124 q 125 433 44 357 q 317 510 206 510 q 513 440 439 510 q 588 251 588 371 m 158 257 q 202 83 158 147 q 322 18 246 18 q 433 76 393 18 q 472 239 472 135 q 428 413 472 349 q 310 478 385 478 q 198 420 238 478 q 158 257 158 363 m 434 656 q 413 628 434 656 q 321 600 392 600 q 208 655 250 600 q 156 817 165 710 l 179 818 q 224 700 190 738 q 321 663 258 663 q 416 700 382 663 q 461 818 450 738 l 485 817 q 434 656 476 711 z \"},\"Ő\":{\"ha\":956,\"x_min\":58,\"x_max\":897,\"o\":\"m 897 401 q 777 103 897 221 q 481 -14 657 -14 q 178 98 297 -14 q 58 389 58 210 q 178 688 58 569 q 475 806 299 806 q 778 693 658 806 q 897 401 897 581 m 185 419 q 268 132 185 240 q 490 24 351 24 q 697 115 624 24 q 771 371 771 206 q 688 658 771 550 q 465 767 604 767 q 258 675 332 767 q 185 419 185 583 m 415 857 l 393 867 l 442 1019 q 456 1050 447 1040 q 476 1060 465 1060 q 494 1053 488 1060 q 500 1036 500 1047 q 498 1024 500 1031 q 489 1004 496 1018 l 415 857 m 565 857 l 543 867 l 592 1019 q 606 1050 597 1040 q 626 1060 615 1060 q 644 1053 638 1060 q 650 1036 650 1047 q 648 1024 650 1031 q 639 1004 646 1018 l 565 857 z \"},\"ő\":{\"ha\":632,\"x_min\":44,\"x_max\":588,\"o\":\"m 588 251 q 507 63 588 139 q 317 -14 426 -14 q 119 55 193 -14 q 44 244 44 124 q 125 433 44 357 q 317 510 206 510 q 513 440 439 510 q 588 251 588 371 m 158 257 q 202 83 158 147 q 322 18 246 18 q 433 76 393 18 q 472 239 472 135 q 428 413 472 349 q 310 478 385 478 q 198 420 238 478 q 158 257 158 363 m 254 569 l 232 579 l 296 808 q 310 841 301 831 q 332 851 319 851 q 350 845 343 851 q 357 828 357 839 q 355 817 357 824 q 344 790 353 810 l 254 569 m 413 569 l 390 579 l 454 808 q 469 841 460 831 q 490 851 478 851 q 508 845 501 851 q 515 828 515 839 q 513 817 515 824 q 503 790 511 810 l 413 569 z \"},\"Œ\":{\"ha\":1199,\"x_min\":58,\"x_max\":1146,\"o\":\"m 492 -14 q 181 98 303 -14 q 58 389 58 210 q 178 689 58 572 q 481 806 297 806 q 544 802 514 806 q 601 792 575 799 l 997 792 q 1040 794 1021 792 q 1078 803 1058 797 l 1088 800 l 1088 613 l 1065 613 l 1035 699 q 1007 740 1022 729 q 957 753 992 751 l 694 758 q 846 622 790 711 q 907 419 901 533 l 942 419 q 967 424 960 419 q 983 449 975 429 l 1014 526 l 1036 526 l 1036 275 l 1014 275 l 983 351 q 967 376 975 371 q 942 381 958 381 l 907 381 q 843 169 901 261 q 685 28 785 76 l 707 28 l 1000 40 q 1048 51 1032 42 q 1076 88 1064 60 l 1125 189 l 1146 189 l 1131 0 l 607 0 q 552 -10 581 -7 q 492 -14 524 -14 m 185 419 q 270 133 185 242 q 497 24 356 24 l 518 24 l 518 765 q 489 767 501 767 q 465 768 476 768 q 258 677 331 768 q 185 419 185 586 m 631 733 l 631 419 l 796 419 q 745 608 789 526 q 631 733 701 690 m 631 381 l 631 78 q 631 63 631 69 q 635 51 632 57 q 756 172 714 89 q 797 376 797 256 l 797 381 l 631 381 z \"},\"œ\":{\"ha\":964,\"x_min\":44,\"x_max\":931,\"o\":\"m 521 90 q 430 15 485 43 q 317 -14 375 -14 q 119 55 193 -14 q 44 244 44 124 q 125 433 44 357 q 317 510 206 510 q 446 483 389 510 q 536 407 503 457 q 619 483 568 456 q 729 510 669 510 q 871 465 818 510 q 928 342 924 421 l 922 328 l 585 328 q 583 314 583 322 l 583 292 q 635 127 583 186 q 778 68 686 68 q 850 77 814 68 q 919 104 886 86 l 931 89 q 833 17 893 47 q 728 -14 772 -14 q 606 13 660 -14 q 521 90 553 40 m 822 382 q 793 451 822 424 q 719 479 764 479 q 636 448 669 479 q 590 358 603 417 l 797 358 q 817 363 811 358 q 822 382 822 368 m 158 257 q 202 83 158 147 q 322 18 246 18 q 433 76 393 18 q 472 239 472 135 q 428 413 472 349 q 310 478 385 478 q 198 420 238 478 q 158 257 158 363 z \"},\"Ŕ\":{\"ha\":800,\"x_min\":57,\"x_max\":803,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 379 792 q 576 735 501 792 q 651 588 651 679 q 600 460 651 514 q 464 388 549 406 l 676 89 q 713 49 699 57 q 764 31 726 40 l 803 22 l 803 0 l 653 0 q 606 6 619 0 q 576 36 592 13 l 389 318 q 354 350 374 342 q 296 358 335 358 l 263 358 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 m 346 754 l 263 754 l 263 396 l 339 396 q 483 441 435 396 q 531 576 531 486 q 483 708 531 661 q 346 754 435 754 m 375 857 l 353 867 l 406 1018 q 424 1050 415 1040 q 443 1060 432 1060 q 461 1053 454 1060 q 468 1036 468 1047 q 465 1023 468 1031 q 456 1000 463 1015 l 375 857 z \"},\"ŕ\":{\"ha\":410,\"x_min\":25,\"x_max\":396,\"o\":\"m 303 19 l 303 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 203 460 204 479 q 201 411 201 440 q 290 483 250 457 q 351 510 329 510 q 382 499 369 510 q 394 472 394 489 q 389 441 394 461 q 372 397 383 421 l 367 396 q 317 409 332 406 q 292 413 301 413 q 244 406 267 413 q 201 383 222 399 l 201 76 q 208 44 201 53 q 235 32 214 35 l 303 19 m 265 569 l 244 579 l 332 808 q 350 842 340 832 q 371 851 360 851 q 389 844 382 851 q 396 826 396 838 q 393 811 396 819 q 383 790 390 803 l 265 569 z \"},\"Ŗ\":{\"ha\":800,\"x_min\":57,\"x_max\":803,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 379 792 q 576 735 501 792 q 651 588 651 679 q 600 460 651 514 q 464 388 549 406 l 676 89 q 713 49 699 57 q 764 31 726 40 l 803 22 l 803 0 l 653 0 q 606 6 619 0 q 576 36 592 13 l 389 318 q 354 350 374 342 q 296 358 335 358 l 263 358 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 m 346 754 l 263 754 l 263 396 l 339 396 q 483 441 435 396 q 531 576 531 486 q 483 708 531 661 q 346 754 435 754 m 529 -151 q 491 -248 529 -207 q 381 -308 453 -289 l 374 -285 q 456 -244 428 -268 q 483 -190 483 -221 q 465 -153 483 -168 q 392 -118 447 -137 q 417 -76 403 -87 q 453 -65 431 -65 q 508 -89 488 -65 q 529 -151 529 -112 z \"},\"ŗ\":{\"ha\":410,\"x_min\":25,\"x_max\":394,\"o\":\"m 303 19 l 303 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 203 460 204 479 q 201 411 201 440 q 290 483 250 457 q 351 510 329 510 q 382 499 369 510 q 394 472 394 489 q 389 441 394 461 q 372 397 383 421 l 367 396 q 317 409 332 406 q 292 413 301 413 q 244 406 267 413 q 201 383 222 399 l 201 76 q 208 44 201 53 q 235 32 214 35 l 303 19 m 228 -151 q 190 -248 228 -207 q 79 -308 151 -289 l 72 -285 q 154 -244 126 -268 q 182 -190 182 -221 q 164 -153 182 -168 q 90 -118 146 -137 q 115 -76 101 -87 q 151 -65 129 -65 q 207 -89 186 -65 q 228 -151 228 -112 z \"},\"Ř\":{\"ha\":800,\"x_min\":57,\"x_max\":803,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 379 792 q 576 735 501 792 q 651 588 651 679 q 600 460 651 514 q 464 388 549 406 l 676 89 q 713 49 699 57 q 764 31 726 40 l 803 22 l 803 0 l 653 0 q 606 6 619 0 q 576 36 592 13 l 389 318 q 354 350 374 342 q 296 358 335 358 l 263 358 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 m 346 754 l 263 754 l 263 396 l 339 396 q 483 441 435 396 q 531 576 531 486 q 483 708 531 661 q 346 754 435 754 m 490 1060 l 513 1046 l 403 886 q 383 864 392 869 q 363 858 374 858 q 342 864 350 858 q 322 886 333 869 l 211 1046 l 233 1060 l 361 915 l 363 915 l 490 1060 z \"},\"ř\":{\"ha\":410,\"x_min\":25,\"x_max\":410,\"o\":\"m 303 19 l 303 0 l 25 0 l 25 19 l 65 29 q 92 43 85 33 q 99 76 99 53 l 99 382 q 94 410 99 401 q 75 426 89 419 l 40 444 l 40 460 l 197 510 l 208 504 q 203 460 204 479 q 201 411 201 440 q 290 483 250 457 q 351 510 329 510 q 382 499 369 510 q 394 472 394 489 q 389 441 394 461 q 372 397 383 421 l 367 396 q 317 409 332 406 q 292 413 301 413 q 244 406 267 413 q 201 383 222 399 l 201 76 q 208 44 201 53 q 235 32 214 35 l 303 19 m 213 601 l 93 838 l 115 851 l 250 632 l 253 632 l 388 851 l 410 838 l 290 601 q 273 577 282 585 q 251 569 264 569 q 231 576 239 569 q 213 601 222 582 z \"},\"Ś\":{\"ha\":651,\"x_min\":67,\"x_max\":569,\"o\":\"m 569 215 q 491 49 569 111 q 292 -14 413 -14 q 185 -1 239 -14 q 79 39 132 13 l 67 219 l 89 219 l 118 146 q 187 53 143 83 q 294 22 231 22 q 422 60 376 22 q 468 169 468 99 q 435 267 468 225 q 296 363 403 308 q 141 474 178 424 q 104 593 104 524 q 174 745 104 685 q 349 806 244 806 q 449 793 401 806 q 533 757 496 781 l 542 610 l 519 610 l 500 660 q 439 742 478 715 q 340 768 400 768 q 238 732 278 768 q 197 640 197 696 q 228 553 197 590 q 364 461 260 515 q 457 408 428 428 q 507 369 486 389 q 554 299 539 338 q 569 215 569 261 m 356 857 l 333 867 l 386 1018 q 404 1050 396 1040 q 424 1060 413 1060 q 442 1053 435 1060 q 449 1036 449 1047 q 446 1023 449 1031 q 436 1000 443 1015 l 356 857 z \"},\"ś\":{\"ha\":449,\"x_min\":42,\"x_max\":401,\"o\":\"m 401 136 q 348 27 401 68 q 215 -14 294 -14 q 134 -5 175 -14 q 58 19 93 4 l 42 161 l 63 161 q 126 54 86 92 q 217 17 165 17 q 283 38 258 17 q 307 99 307 60 q 288 153 307 129 q 201 210 268 176 q 94 287 121 251 q 68 371 68 322 q 117 472 68 435 q 244 510 165 510 q 316 500 279 510 q 379 475 353 490 l 382 361 l 363 361 q 315 451 344 421 q 244 481 285 481 q 184 460 207 481 q 161 407 161 440 q 181 353 161 376 q 267 296 201 329 q 375 220 349 256 q 401 136 401 185 m 267 569 l 246 579 l 333 808 q 351 842 342 832 q 372 851 361 851 q 390 844 383 851 q 397 826 397 838 q 394 811 397 819 q 385 790 392 803 l 267 569 z \"},\"Ŝ\":{\"ha\":651,\"x_min\":67,\"x_max\":569,\"o\":\"m 569 215 q 491 49 569 111 q 292 -14 413 -14 q 185 -1 239 -14 q 79 39 132 13 l 67 219 l 89 219 l 118 146 q 187 53 143 83 q 294 22 231 22 q 422 60 376 22 q 468 169 468 99 q 435 267 468 225 q 296 363 403 308 q 141 474 178 424 q 104 593 104 524 q 174 745 104 685 q 349 806 244 806 q 449 793 401 806 q 533 757 496 781 l 542 610 l 519 610 l 500 660 q 439 742 478 715 q 340 768 400 768 q 238 732 278 768 q 197 640 197 696 q 228 553 197 590 q 364 461 260 515 q 457 408 428 428 q 507 369 486 389 q 554 299 539 338 q 569 215 569 261 m 382 1031 l 493 871 l 471 857 l 343 1001 l 342 1001 l 213 857 l 190 871 l 301 1031 q 322 1054 314 1049 q 342 1060 329 1060 q 361 1053 353 1060 q 382 1031 369 1047 z \"},\"ŝ\":{\"ha\":449,\"x_min\":42,\"x_max\":415,\"o\":\"m 401 136 q 348 27 401 68 q 215 -14 294 -14 q 134 -5 175 -14 q 58 19 93 4 l 42 161 l 63 161 q 126 54 86 92 q 217 17 165 17 q 283 38 258 17 q 307 99 307 60 q 288 153 307 129 q 201 210 268 176 q 94 287 121 251 q 68 371 68 322 q 117 472 68 435 q 244 510 165 510 q 316 500 279 510 q 379 475 353 490 l 382 361 l 363 361 q 315 451 344 421 q 244 481 285 481 q 184 460 207 481 q 161 407 161 440 q 181 353 161 376 q 267 296 201 329 q 375 220 349 256 q 401 136 401 185 m 293 819 l 415 583 l 393 569 l 256 786 l 253 786 l 115 569 l 93 583 l 215 819 q 234 844 225 838 q 256 851 243 851 q 275 845 267 851 q 293 819 283 839 z \"},\"Ş\":{\"ha\":651,\"x_min\":67,\"x_max\":569,\"o\":\"m 304 -14 l 292 -14 q 185 -1 239 -14 q 79 39 132 13 l 67 219 l 89 219 l 118 146 q 187 53 143 83 q 294 22 231 22 q 422 60 376 22 q 468 169 468 99 q 435 267 468 225 q 296 363 403 308 q 141 474 178 424 q 104 593 104 524 q 174 745 104 685 q 349 806 244 806 q 449 793 401 806 q 533 757 496 781 l 542 610 l 519 610 l 500 660 q 439 742 478 715 q 340 768 400 768 q 238 732 278 768 q 197 640 197 696 q 228 553 197 590 q 364 461 260 515 q 457 408 428 428 q 507 369 486 389 q 554 299 539 338 q 569 215 569 261 q 508 63 569 122 q 340 -11 446 3 l 300 -85 q 390 -133 360 -103 q 421 -201 421 -162 q 375 -279 421 -249 q 263 -310 329 -310 q 217 -301 233 -310 q 201 -276 201 -293 q 206 -260 201 -268 q 228 -235 211 -251 q 269 -268 250 -258 q 315 -278 289 -278 q 358 -262 342 -278 q 375 -224 375 -247 q 343 -168 375 -193 q 249 -126 311 -143 l 249 -117 l 304 -14 z \"},\"ş\":{\"ha\":449,\"x_min\":42,\"x_max\":401,\"o\":\"m 331 -199 q 285 -279 331 -249 q 174 -310 240 -310 q 128 -301 144 -310 q 113 -275 113 -292 q 119 -256 113 -265 q 139 -235 125 -246 q 178 -267 158 -257 q 224 -278 197 -278 q 269 -262 251 -278 q 286 -224 286 -247 q 277 -192 286 -207 q 239 -153 268 -176 q 203 -116 211 -131 q 194 -86 194 -101 q 213 -53 194 -72 q 268 -8 231 -35 q 242 -12 256 -11 q 215 -14 229 -14 q 134 -5 175 -14 q 58 19 93 4 l 42 161 l 63 161 q 126 54 86 92 q 217 17 165 17 q 283 38 258 17 q 307 99 307 60 q 288 153 307 129 q 201 210 268 176 q 94 287 121 251 q 68 371 68 322 q 117 472 68 435 q 244 510 165 510 q 316 500 279 510 q 379 475 353 490 l 382 361 l 363 361 q 315 451 344 421 q 244 481 285 481 q 184 460 207 481 q 161 407 161 440 q 181 353 161 376 q 267 296 201 329 q 375 220 349 256 q 401 136 401 185 q 386 71 401 100 q 338 14 371 42 q 311 -7 328 6 q 288 -25 294 -19 q 258 -52 267 -42 q 250 -72 250 -62 q 256 -89 250 -81 q 281 -114 261 -97 q 321 -158 311 -139 q 331 -199 331 -176 z \"},\"Š\":{\"ha\":651,\"x_min\":67,\"x_max\":569,\"o\":\"m 569 215 q 491 49 569 111 q 292 -14 413 -14 q 185 -1 239 -14 q 79 39 132 13 l 67 219 l 89 219 l 118 146 q 187 53 143 83 q 294 22 231 22 q 422 60 376 22 q 468 169 468 99 q 435 267 468 225 q 296 363 403 308 q 141 474 178 424 q 104 593 104 524 q 174 745 104 685 q 349 806 244 806 q 449 793 401 806 q 533 757 496 781 l 542 610 l 519 610 l 500 660 q 439 742 478 715 q 340 768 400 768 q 238 732 278 768 q 197 640 197 696 q 228 553 197 590 q 364 461 260 515 q 457 408 428 428 q 507 369 486 389 q 554 299 539 338 q 569 215 569 261 m 471 1060 l 493 1046 l 383 886 q 363 864 372 869 q 343 858 354 858 q 322 864 331 858 q 303 886 314 869 l 192 1046 l 214 1060 l 342 915 l 343 915 l 471 1060 z \"},\"š\":{\"ha\":449,\"x_min\":42,\"x_max\":413,\"o\":\"m 401 136 q 348 27 401 68 q 215 -14 294 -14 q 134 -5 175 -14 q 58 19 93 4 l 42 161 l 63 161 q 126 54 86 92 q 217 17 165 17 q 283 38 258 17 q 307 99 307 60 q 288 153 307 129 q 201 210 268 176 q 94 287 121 251 q 68 371 68 322 q 117 472 68 435 q 244 510 165 510 q 316 500 279 510 q 379 475 353 490 l 382 361 l 363 361 q 315 451 344 421 q 244 481 285 481 q 184 460 207 481 q 161 407 161 440 q 181 353 161 376 q 267 296 201 329 q 375 220 349 256 q 401 136 401 185 m 215 601 l 96 838 l 118 851 l 253 632 l 256 632 l 390 851 l 413 838 l 293 601 q 276 577 285 585 q 254 569 267 569 q 233 576 242 569 q 215 601 225 582 z \"},\"Ţ\":{\"ha\":756,\"x_min\":31,\"x_max\":725,\"o\":\"m 526 22 l 526 0 l 228 0 l 228 22 l 272 32 q 313 51 304 40 q 321 90 321 61 l 321 753 l 160 753 q 109 742 125 753 q 83 700 93 731 l 51 599 l 31 599 l 31 800 l 39 803 q 77 794 58 797 q 119 792 96 792 l 635 792 q 677 794 658 792 q 715 803 696 797 l 725 800 l 725 599 l 703 599 l 672 700 q 647 741 664 729 q 594 753 631 753 l 433 753 l 433 90 q 442 51 433 61 q 482 32 450 40 l 526 22 m 450 -151 q 412 -248 450 -207 q 301 -308 374 -289 l 294 -285 q 376 -244 349 -268 q 404 -190 404 -221 q 386 -153 404 -168 q 313 -118 368 -137 q 338 -76 324 -87 q 374 -65 351 -65 q 429 -89 408 -65 q 450 -151 450 -112 z \"},\"ţ\":{\"ha\":419,\"x_min\":21,\"x_max\":403,\"o\":\"m 231 -14 q 132 19 168 -14 q 96 111 96 53 l 96 432 l 21 432 l 21 449 l 183 588 l 199 588 l 199 496 l 390 496 l 390 432 l 199 432 l 199 157 q 224 84 199 108 q 300 60 250 60 q 346 65 324 60 q 393 83 368 71 l 403 65 q 313 9 364 32 q 231 -14 263 -14 m 306 -151 q 267 -248 306 -207 q 157 -308 229 -289 l 150 -285 q 232 -244 204 -268 q 260 -190 260 -221 q 242 -153 260 -168 q 168 -118 224 -137 q 193 -76 179 -87 q 229 -65 207 -65 q 285 -89 264 -65 q 306 -151 306 -112 z \"},\"Ť\":{\"ha\":756,\"x_min\":31,\"x_max\":725,\"o\":\"m 526 22 l 526 0 l 228 0 l 228 22 l 272 32 q 313 51 304 40 q 321 90 321 61 l 321 753 l 160 753 q 109 742 125 753 q 83 700 93 731 l 51 599 l 31 599 l 31 800 l 39 803 q 77 794 58 797 q 119 792 96 792 l 635 792 q 677 794 658 792 q 715 803 696 797 l 725 800 l 725 599 l 703 599 l 672 700 q 647 741 664 729 q 594 753 631 753 l 433 753 l 433 90 q 442 51 433 61 q 482 32 450 40 l 526 22 m 503 1060 l 525 1046 l 415 886 q 395 864 404 869 q 375 858 386 858 q 354 864 363 858 q 335 886 346 869 l 224 1046 l 246 1060 l 374 915 l 375 915 l 503 1060 z \"},\"ť\":{\"ha\":419,\"x_min\":21,\"x_max\":403,\"o\":\"m 231 -14 q 132 19 168 -14 q 96 111 96 53 l 96 432 l 21 432 l 21 449 l 183 588 l 199 588 l 199 496 l 390 496 l 390 432 l 199 432 l 199 157 q 224 84 199 108 q 300 60 250 60 q 346 65 324 60 q 393 83 368 71 l 403 65 q 313 9 364 32 q 231 -14 263 -14 m 311 567 l 292 569 l 315 801 q 326 840 318 828 q 349 851 335 851 q 366 844 360 851 q 372 826 372 838 q 372 816 372 822 q 367 790 371 810 l 311 567 z \"},\"Ŧ\":{\"ha\":756,\"x_min\":31,\"x_max\":725,\"o\":\"m 321 379 l 139 379 l 139 417 l 321 417 l 321 753 l 160 753 q 109 742 125 753 q 83 700 93 731 l 51 599 l 31 599 l 31 800 l 39 803 q 77 794 58 797 q 119 792 96 792 l 635 792 q 677 794 658 792 q 715 803 696 797 l 725 800 l 725 599 l 703 599 l 672 700 q 647 741 664 729 q 594 753 631 753 l 433 753 l 433 417 l 615 417 l 615 379 l 433 379 l 433 90 q 442 51 433 61 q 482 32 450 40 l 526 22 l 526 0 l 228 0 l 228 22 l 272 32 q 313 51 304 40 q 321 90 321 61 l 321 379 z \"},\"ŧ\":{\"ha\":419,\"x_min\":21,\"x_max\":403,\"o\":\"m 231 -14 q 132 19 168 -14 q 96 111 96 53 l 96 246 l 38 246 l 38 281 l 96 281 l 96 432 l 21 432 l 21 449 l 183 588 l 199 588 l 199 496 l 390 496 l 390 432 l 199 432 l 199 281 l 374 281 l 374 246 l 199 246 l 199 157 q 224 84 199 108 q 300 60 250 60 q 346 65 324 60 q 393 83 368 71 l 403 65 q 313 9 364 32 q 231 -14 263 -14 z \"},\"Ũ\":{\"ha\":910,\"x_min\":57,\"x_max\":854,\"o\":\"m 468 -14 q 234 64 318 -14 q 150 283 150 142 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 283 q 320 99 263 161 q 490 36 378 36 q 656 105 600 36 q 713 307 713 174 l 713 700 q 704 740 713 729 q 664 757 696 750 l 604 768 l 604 792 l 854 792 l 854 768 l 810 758 q 769 740 778 750 q 761 700 761 729 l 761 307 q 687 68 761 150 q 468 -14 613 -14 m 565 908 q 540 913 556 908 q 489 933 524 918 q 437 955 453 950 q 410 960 421 960 q 383 951 393 960 q 364 918 372 942 l 344 869 l 321 879 l 343 940 q 376 1000 360 985 q 419 1015 392 1015 q 444 1010 429 1015 q 494 990 460 1006 q 547 969 531 974 q 572 964 563 964 q 599 972 589 964 q 621 1007 610 981 l 642 1053 l 665 1043 l 642 983 q 607 922 622 936 q 565 908 592 908 z \"},\"ũ\":{\"ha\":610,\"x_min\":25,\"x_max\":590,\"o\":\"m 240 -14 q 128 28 168 -14 q 88 146 88 69 l 88 382 q 82 410 88 401 q 63 428 76 419 l 25 444 l 25 460 l 188 510 l 199 504 q 192 451 194 476 q 190 385 190 425 l 190 168 q 215 83 190 110 q 293 56 240 56 q 351 65 321 56 q 408 92 381 74 l 408 378 q 403 410 408 401 q 385 424 397 418 l 325 444 l 325 460 l 508 510 l 518 504 q 513 449 514 475 q 511 385 511 424 l 511 104 q 517 76 511 85 q 544 65 524 68 l 590 58 l 590 40 l 408 -11 l 408 61 q 317 8 367 31 q 240 -14 268 -14 m 408 667 q 379 671 397 667 q 321 689 361 675 q 263 706 281 701 q 233 710 244 710 q 206 701 217 710 q 185 671 194 693 l 158 608 l 135 617 l 167 696 q 200 754 185 740 q 240 768 215 768 q 269 764 251 768 q 328 747 288 760 q 385 729 367 733 q 414 725 403 725 q 440 733 429 725 q 464 767 451 740 l 490 828 l 514 818 l 483 742 q 449 681 465 696 q 408 667 433 667 z \"},\"Ū\":{\"ha\":910,\"x_min\":57,\"x_max\":854,\"o\":\"m 468 -14 q 234 64 318 -14 q 150 283 150 142 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 283 q 320 99 263 161 q 490 36 378 36 q 656 105 600 36 q 713 307 713 174 l 713 700 q 704 740 713 729 q 664 757 696 750 l 604 768 l 604 792 l 854 792 l 854 768 l 810 758 q 769 740 778 750 q 761 700 761 729 l 761 307 q 687 68 761 150 q 468 -14 613 -14 m 644 940 l 329 940 l 329 990 l 644 990 l 644 940 z \"},\"ū\":{\"ha\":610,\"x_min\":25,\"x_max\":590,\"o\":\"m 240 -14 q 128 28 168 -14 q 88 146 88 69 l 88 382 q 82 410 88 401 q 63 428 76 419 l 25 444 l 25 460 l 188 510 l 199 504 q 192 451 194 476 q 190 385 190 425 l 190 168 q 215 83 190 110 q 293 56 240 56 q 351 65 321 56 q 408 92 381 74 l 408 378 q 403 410 408 401 q 385 424 397 418 l 325 444 l 325 460 l 508 510 l 518 504 q 513 449 514 475 q 511 385 511 424 l 511 104 q 517 76 511 85 q 544 65 524 68 l 590 58 l 590 40 l 408 -11 l 408 61 q 317 8 367 31 q 240 -14 268 -14 m 493 707 l 144 707 l 144 757 l 493 757 l 493 707 z \"},\"Ŭ\":{\"ha\":910,\"x_min\":57,\"x_max\":854,\"o\":\"m 468 -14 q 234 64 318 -14 q 150 283 150 142 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 283 q 320 99 263 161 q 490 36 378 36 q 656 105 600 36 q 713 307 713 174 l 713 700 q 704 740 713 729 q 664 757 696 750 l 604 768 l 604 792 l 854 792 l 854 768 l 810 758 q 769 740 778 750 q 761 700 761 729 l 761 307 q 687 68 761 150 q 468 -14 613 -14 m 590 902 q 571 880 590 902 q 488 858 553 858 q 385 902 422 858 q 340 1031 347 946 l 363 1032 q 405 947 375 974 q 488 919 435 919 q 571 946 542 919 q 611 1032 600 972 l 633 1031 q 590 902 626 946 z \"},\"ŭ\":{\"ha\":610,\"x_min\":25,\"x_max\":590,\"o\":\"m 240 -14 q 128 28 168 -14 q 88 146 88 69 l 88 382 q 82 410 88 401 q 63 428 76 419 l 25 444 l 25 460 l 188 510 l 199 504 q 192 451 194 476 q 190 385 190 425 l 190 168 q 215 83 190 110 q 293 56 240 56 q 351 65 321 56 q 408 92 381 74 l 408 378 q 403 410 408 401 q 385 424 397 418 l 325 444 l 325 460 l 508 510 l 518 504 q 513 449 514 475 q 511 385 511 424 l 511 104 q 517 76 511 85 q 544 65 524 68 l 590 58 l 590 40 l 408 -11 l 408 61 q 317 8 367 31 q 240 -14 268 -14 m 433 656 q 411 628 433 656 q 319 600 390 600 q 206 655 249 600 q 154 817 164 710 l 178 818 q 223 700 189 738 q 319 663 257 663 q 415 700 381 663 q 460 818 449 738 l 483 817 q 433 656 475 711 z \"},\"Ů\":{\"ha\":910,\"x_min\":57,\"x_max\":854,\"o\":\"m 468 -14 q 234 64 318 -14 q 150 283 150 142 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 283 q 320 99 263 161 q 490 36 378 36 q 656 105 600 36 q 713 307 713 174 l 713 700 q 704 740 713 729 q 664 757 696 750 l 604 768 l 604 792 l 854 792 l 854 768 l 810 758 q 769 740 778 750 q 761 700 761 729 l 761 307 q 687 68 761 150 q 468 -14 613 -14 m 490 1051 q 578 1024 543 1051 q 613 951 613 996 q 577 872 613 903 q 488 842 542 842 q 397 869 432 842 q 363 942 363 897 q 398 1021 363 990 q 490 1051 433 1051 m 492 867 q 544 888 525 867 q 564 946 564 908 q 542 1006 564 982 q 485 1029 519 1029 q 431 1007 451 1029 q 410 947 410 985 q 433 890 410 913 q 492 867 456 867 z \"},\"ů\":{\"ha\":610,\"x_min\":25,\"x_max\":590,\"o\":\"m 240 -14 q 128 28 168 -14 q 88 146 88 69 l 88 382 q 82 410 88 401 q 63 428 76 419 l 25 444 l 25 460 l 188 510 l 199 504 q 192 451 194 476 q 190 385 190 425 l 190 168 q 215 83 190 110 q 293 56 240 56 q 351 65 321 56 q 408 92 381 74 l 408 378 q 403 410 408 401 q 385 424 397 418 l 325 444 l 325 460 l 508 510 l 518 504 q 513 449 514 475 q 511 385 511 424 l 511 104 q 517 76 511 85 q 544 65 524 68 l 590 58 l 590 40 l 408 -11 l 408 61 q 317 8 367 31 q 240 -14 268 -14 m 322 819 q 412 790 376 819 q 447 713 447 760 q 411 630 447 663 q 319 597 375 597 q 227 626 263 597 q 192 703 192 656 q 228 787 192 754 q 322 819 265 819 m 324 621 q 378 644 358 621 q 397 707 397 667 q 375 771 397 746 q 317 796 353 796 q 261 772 282 796 q 240 708 240 747 q 264 646 240 671 q 324 621 288 621 z \"},\"Ű\":{\"ha\":910,\"x_min\":57,\"x_max\":854,\"o\":\"m 468 -14 q 234 64 318 -14 q 150 283 150 142 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 283 q 320 99 263 161 q 490 36 378 36 q 656 105 600 36 q 713 307 713 174 l 713 700 q 704 740 713 729 q 664 757 696 750 l 604 768 l 604 792 l 854 792 l 854 768 l 810 758 q 769 740 778 750 q 761 700 761 729 l 761 307 q 687 68 761 150 q 468 -14 613 -14 m 435 857 l 413 867 l 461 1019 q 476 1050 467 1040 q 496 1060 485 1060 q 513 1053 507 1060 q 519 1036 519 1047 q 517 1024 519 1031 q 508 1004 515 1018 l 435 857 m 585 857 l 563 867 l 611 1019 q 626 1050 617 1040 q 646 1060 635 1060 q 663 1053 657 1060 q 669 1036 669 1047 q 667 1024 669 1031 q 658 1004 665 1018 l 585 857 z \"},\"ű\":{\"ha\":610,\"x_min\":25,\"x_max\":590,\"o\":\"m 240 -14 q 128 28 168 -14 q 88 146 88 69 l 88 382 q 82 410 88 401 q 63 428 76 419 l 25 444 l 25 460 l 188 510 l 199 504 q 192 451 194 476 q 190 385 190 425 l 190 168 q 215 83 190 110 q 293 56 240 56 q 351 65 321 56 q 408 92 381 74 l 408 378 q 403 410 408 401 q 385 424 397 418 l 325 444 l 325 460 l 508 510 l 518 504 q 513 449 514 475 q 511 385 511 424 l 511 104 q 517 76 511 85 q 544 65 524 68 l 590 58 l 590 40 l 408 -11 l 408 61 q 317 8 367 31 q 240 -14 268 -14 m 258 569 l 236 579 l 300 808 q 315 841 306 831 q 336 851 324 851 q 354 845 347 851 q 361 828 361 839 q 359 817 361 824 q 349 790 357 810 l 258 569 m 417 569 l 394 579 l 458 808 q 473 841 464 831 q 494 851 482 851 q 513 845 506 851 q 519 828 519 839 q 517 817 519 824 q 507 790 515 810 l 417 569 z \"},\"Ų\":{\"ha\":910,\"x_min\":57,\"x_max\":854,\"o\":\"m 469 -307 q 388 -278 419 -307 q 356 -204 356 -250 q 378 -122 356 -165 q 461 -14 401 -79 q 232 66 314 -11 q 150 283 150 143 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 283 q 320 99 263 161 q 490 36 378 36 q 656 105 600 36 q 713 307 713 174 l 713 700 q 704 740 713 729 q 664 757 696 750 l 604 768 l 604 792 l 854 792 l 854 768 l 810 758 q 769 740 778 750 q 761 700 761 729 l 761 307 q 693 75 761 157 q 492 -14 625 -7 q 434 -101 451 -64 q 417 -176 417 -137 q 438 -237 417 -215 q 496 -260 458 -260 q 536 -253 517 -260 q 574 -232 556 -246 l 583 -244 q 531 -288 564 -269 q 469 -307 499 -307 z \"},\"ų\":{\"ha\":610,\"x_min\":25,\"x_max\":590,\"o\":\"m 242 -14 q 128 26 168 -14 q 88 139 88 65 l 88 382 q 82 410 88 401 q 63 428 76 419 l 25 444 l 25 460 l 188 510 l 199 504 q 192 451 194 476 q 190 385 190 425 l 190 167 q 215 84 190 111 q 288 57 239 57 q 347 66 315 57 q 408 93 378 75 l 408 378 q 403 410 408 401 q 385 424 397 418 l 325 444 l 325 460 l 508 510 l 518 504 q 513 449 514 475 q 511 385 511 424 l 511 104 q 517 76 511 85 q 544 65 524 68 l 590 58 l 590 40 l 556 31 q 410 -51 463 4 q 357 -175 357 -106 q 378 -237 357 -214 q 436 -260 399 -260 q 476 -253 457 -260 q 514 -232 496 -246 l 524 -244 q 472 -288 504 -269 q 410 -307 439 -307 q 327 -278 358 -307 q 296 -200 296 -249 q 325 -108 296 -157 q 408 -11 354 -60 l 408 64 q 317 9 367 32 q 242 -14 268 -14 z \"},\"Ŵ\":{\"ha\":1171,\"x_min\":3,\"x_max\":1168,\"o\":\"m 443 -8 l 385 -8 l 83 718 q 65 748 74 740 q 36 760 56 756 l 3 768 l 3 792 l 285 792 l 285 767 l 229 754 q 201 742 207 750 q 201 719 196 735 l 451 107 l 567 385 l 422 718 q 403 747 414 739 q 374 760 393 756 l 342 768 l 342 792 l 614 792 l 614 767 l 564 754 q 537 741 543 749 q 538 717 531 733 l 643 471 l 749 721 q 751 742 756 735 q 721 757 746 749 l 683 767 l 683 792 l 893 792 l 893 768 l 851 758 q 824 747 833 754 q 803 718 814 740 l 665 422 l 800 107 l 1031 719 q 1031 744 1036 736 q 1003 756 1025 751 l 950 767 l 950 792 l 1168 792 l 1168 768 l 1135 758 q 1103 745 1113 753 q 1086 718 1093 738 l 793 -8 l 736 -8 l 590 329 l 443 -8 m 689 1031 l 800 871 l 778 857 l 650 1001 l 649 1001 l 519 857 l 497 871 l 608 1031 q 628 1054 621 1049 q 649 1060 636 1060 q 668 1053 660 1060 q 689 1031 676 1047 z \"},\"ŵ\":{\"ha\":843,\"x_min\":11,\"x_max\":832,\"o\":\"m 288 -21 l 257 -21 l 78 438 q 67 458 74 451 q 47 469 60 465 l 11 476 l 11 496 l 250 496 l 250 476 l 206 468 q 191 459 194 465 q 192 443 188 453 l 310 125 l 401 358 l 368 443 q 359 459 364 454 q 342 468 354 464 l 313 476 l 313 496 l 550 496 l 550 476 l 503 467 q 486 457 490 464 q 486 438 482 450 l 604 128 l 717 432 q 717 452 721 444 q 703 463 714 460 l 646 476 l 646 496 l 832 496 l 832 476 l 790 464 q 776 455 782 461 q 763 436 769 449 l 581 -21 l 551 -21 l 422 307 l 288 -21 m 476 819 l 599 583 l 576 569 l 439 786 l 436 786 l 299 569 l 276 583 l 399 819 q 417 844 408 838 q 439 851 426 851 q 458 845 450 851 q 476 819 467 839 z \"},\"Ŷ\":{\"ha\":754,\"x_min\":3,\"x_max\":751,\"o\":\"m 526 22 l 526 0 l 228 0 l 228 22 l 272 32 q 313 51 304 40 q 321 90 321 61 l 321 333 l 89 718 q 64 750 74 744 q 38 760 54 756 l 3 768 l 3 792 l 315 792 l 315 767 l 243 754 q 215 742 221 750 q 215 719 208 733 l 415 383 l 614 717 q 617 742 624 732 q 588 757 611 751 l 528 768 l 528 792 l 751 792 l 751 768 l 721 760 q 695 749 704 756 q 668 714 686 742 l 432 342 l 432 90 q 440 51 432 61 q 481 32 449 40 l 526 22 m 457 1031 l 568 871 l 546 857 l 418 1001 l 417 1001 l 288 857 l 265 871 l 376 1031 q 397 1054 389 1049 q 417 1060 404 1060 q 436 1053 428 1060 q 457 1031 444 1047 z \"},\"ŷ\":{\"ha\":582,\"x_min\":6,\"x_max\":576,\"o\":\"m 113 -389 q 84 -375 97 -389 q 60 -333 71 -361 q 141 -277 115 -304 q 192 -192 167 -250 l 271 -15 l 75 440 q 63 460 68 456 q 46 468 57 465 l 6 476 l 6 496 l 265 496 l 265 476 l 206 465 q 190 457 193 464 q 190 439 186 450 l 328 113 l 331 113 l 458 429 q 461 451 464 443 q 449 463 458 460 l 393 476 l 393 496 l 576 496 l 576 476 l 533 461 q 519 453 524 458 q 507 431 514 447 l 206 -258 q 153 -363 172 -337 q 113 -389 133 -389 m 364 819 l 486 583 l 464 569 l 326 786 l 324 786 l 186 569 l 164 583 l 286 819 q 305 844 296 838 q 326 851 314 851 q 346 845 338 851 q 364 819 354 839 z \"},\"Ÿ\":{\"ha\":754,\"x_min\":3,\"x_max\":751,\"o\":\"m 526 22 l 526 0 l 228 0 l 228 22 l 272 32 q 313 51 304 40 q 321 90 321 61 l 321 333 l 89 718 q 64 750 74 744 q 38 760 54 756 l 3 768 l 3 792 l 315 792 l 315 767 l 243 754 q 215 742 221 750 q 215 719 208 733 l 415 383 l 614 717 q 617 742 624 732 q 588 757 611 751 l 528 768 l 528 792 l 751 792 l 751 768 l 721 760 q 695 749 704 756 q 668 714 686 742 l 432 342 l 432 90 q 440 51 432 61 q 481 32 449 40 l 526 22 m 378 963 q 361 920 378 938 q 319 903 344 903 q 276 919 293 903 q 260 963 260 936 q 277 1004 260 988 q 319 1021 294 1021 q 360 1003 343 1021 q 378 963 378 986 m 581 963 q 564 919 581 936 q 522 903 547 903 q 480 919 496 903 q 464 963 464 936 q 481 1004 464 988 q 522 1021 497 1021 q 564 1004 547 1021 q 581 963 581 988 z \"},\"Ź\":{\"ha\":754,\"x_min\":33,\"x_max\":701,\"o\":\"m 701 192 l 686 0 l 33 0 l 33 19 l 531 753 l 200 753 q 147 741 164 753 q 122 700 131 729 l 90 599 l 69 599 l 69 800 l 79 803 q 117 794 99 797 q 158 792 135 792 l 676 792 l 676 772 l 176 33 l 557 40 q 605 50 589 40 q 633 88 621 60 l 681 192 l 701 192 m 397 857 l 375 867 l 428 1018 q 446 1050 438 1040 q 465 1060 454 1060 q 483 1053 476 1060 q 490 1036 490 1047 q 488 1023 490 1031 q 478 1000 485 1015 l 397 857 z \"},\"ź\":{\"ha\":506,\"x_min\":35,\"x_max\":468,\"o\":\"m 468 151 l 453 0 l 35 0 l 35 15 l 328 465 l 144 465 q 124 462 129 465 q 114 447 118 458 l 72 349 l 54 349 l 58 496 l 454 496 l 454 481 l 161 31 l 363 31 q 381 33 375 31 q 393 49 386 36 l 449 151 l 468 151 m 279 569 l 258 579 l 346 808 q 364 842 354 832 q 385 851 374 851 q 403 844 396 851 q 410 826 410 838 q 407 811 410 819 q 397 790 404 803 l 279 569 z \"},\"Ż\":{\"ha\":754,\"x_min\":33,\"x_max\":701,\"o\":\"m 701 192 l 686 0 l 33 0 l 33 19 l 531 753 l 200 753 q 147 741 164 753 q 122 700 131 729 l 90 599 l 69 599 l 69 800 l 79 803 q 117 794 99 797 q 158 792 135 792 l 676 792 l 676 772 l 176 33 l 557 40 q 605 50 589 40 q 633 88 621 60 l 681 192 l 701 192 m 432 1006 q 441 997 432 1006 q 450 961 450 988 q 432 917 450 935 q 389 899 414 899 q 344 917 363 899 q 326 961 326 935 q 344 1006 326 988 q 389 1024 363 1024 q 432 1006 414 1024 z \"},\"ż\":{\"ha\":506,\"x_min\":35,\"x_max\":468,\"o\":\"m 468 151 l 453 0 l 35 0 l 35 15 l 328 465 l 144 465 q 124 462 129 465 q 114 447 118 458 l 72 349 l 54 349 l 58 496 l 454 496 l 454 481 l 161 31 l 363 31 q 381 33 375 31 q 393 49 386 36 l 449 151 l 468 151 m 329 746 q 313 703 329 721 q 271 686 296 686 q 228 703 244 686 q 211 746 211 719 q 228 788 211 771 q 271 804 246 804 q 312 787 294 804 q 329 746 329 769 z \"},\"Ž\":{\"ha\":754,\"x_min\":33,\"x_max\":701,\"o\":\"m 701 192 l 686 0 l 33 0 l 33 19 l 531 753 l 200 753 q 147 741 164 753 q 122 700 131 729 l 90 599 l 69 599 l 69 800 l 79 803 q 117 794 99 797 q 158 792 135 792 l 676 792 l 676 772 l 176 33 l 557 40 q 605 50 589 40 q 633 88 621 60 l 681 192 l 701 192 m 513 1060 l 535 1046 l 425 886 q 405 864 414 869 q 385 858 396 858 q 364 864 372 858 q 344 886 356 869 l 233 1046 l 256 1060 l 383 915 l 385 915 l 513 1060 z \"},\"ž\":{\"ha\":506,\"x_min\":35,\"x_max\":468,\"o\":\"m 468 151 l 453 0 l 35 0 l 35 15 l 328 465 l 144 465 q 124 462 129 465 q 114 447 118 458 l 72 349 l 54 349 l 58 496 l 454 496 l 454 481 l 161 31 l 363 31 q 381 33 375 31 q 393 49 386 36 l 449 151 l 468 151 m 226 601 l 107 838 l 129 851 l 264 632 l 267 632 l 401 851 l 424 838 l 304 601 q 287 577 296 585 q 265 569 278 569 q 244 576 253 569 q 226 601 236 582 z \"},\"Ƒ\":{\"ha\":672,\"x_min\":21,\"x_max\":625,\"o\":\"m 263 353 l 263 10 q 213 -120 263 -65 q 32 -239 164 -175 l 21 -215 q 126 -119 101 -160 q 150 -11 150 -78 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 535 792 q 577 794 558 792 q 615 803 596 797 l 625 800 l 625 613 l 603 613 l 572 699 q 544 740 560 729 q 494 753 529 751 l 263 758 l 263 392 l 479 392 q 506 397 497 392 q 521 421 514 401 l 553 499 l 574 499 l 574 233 l 553 233 l 521 324 q 507 347 515 342 q 479 353 499 353 l 263 353 z \"},\"ƒ\":{\"ha\":586,\"x_min\":-19,\"x_max\":676,\"o\":\"m 121 -389 q 23 -372 65 -389 q -19 -331 -19 -356 q -10 -308 -19 -322 q 25 -261 -1 -293 l 35 -261 q 116 -328 85 -308 q 175 -347 147 -347 q 236 -299 217 -347 q 256 -153 256 -251 l 256 375 l 128 375 l 128 415 l 256 415 q 328 706 257 607 q 536 806 400 806 q 634 789 592 806 q 676 747 676 772 q 667 724 676 739 q 632 678 658 710 l 622 678 q 541 744 572 725 q 482 764 510 764 q 421 716 440 764 q 401 569 401 668 l 401 415 l 585 415 l 585 375 l 401 375 l 401 4 q 329 -289 401 -189 q 121 -389 257 -389 z \"},\"Ș\":{\"ha\":651,\"x_min\":67,\"x_max\":569,\"o\":\"m 569 215 q 491 49 569 111 q 292 -14 413 -14 q 185 -1 239 -14 q 79 39 132 13 l 67 219 l 89 219 l 118 146 q 187 53 143 83 q 294 22 231 22 q 422 60 376 22 q 468 169 468 99 q 435 267 468 225 q 296 363 403 308 q 141 474 178 424 q 104 593 104 524 q 174 745 104 685 q 349 806 244 806 q 449 793 401 806 q 533 757 496 781 l 542 610 l 519 610 l 500 660 q 439 742 478 715 q 340 768 400 768 q 238 732 278 768 q 197 640 197 696 q 228 553 197 590 q 364 461 260 515 q 457 408 428 428 q 507 369 486 389 q 554 299 539 338 q 569 215 569 261 m 392 -151 q 353 -248 392 -207 q 243 -308 315 -289 l 236 -285 q 318 -244 290 -268 q 346 -190 346 -221 q 328 -153 346 -168 q 254 -118 310 -137 q 279 -76 265 -87 q 315 -65 293 -65 q 371 -89 350 -65 q 392 -151 392 -112 z \"},\"ș\":{\"ha\":449,\"x_min\":42,\"x_max\":401,\"o\":\"m 401 136 q 348 27 401 68 q 215 -14 294 -14 q 134 -5 175 -14 q 58 19 93 4 l 42 161 l 63 161 q 126 54 86 92 q 217 17 165 17 q 283 38 258 17 q 307 99 307 60 q 288 153 307 129 q 201 210 268 176 q 94 287 121 251 q 68 371 68 322 q 117 472 68 435 q 244 510 165 510 q 316 500 279 510 q 379 475 353 490 l 382 361 l 363 361 q 315 451 344 421 q 244 481 285 481 q 184 460 207 481 q 161 407 161 440 q 181 353 161 376 q 267 296 201 329 q 375 220 349 256 q 401 136 401 185 m 300 -151 q 262 -248 300 -207 q 151 -308 224 -289 l 144 -285 q 226 -244 199 -268 q 254 -190 254 -221 q 236 -153 254 -168 q 163 -118 218 -137 q 188 -76 174 -87 q 224 -65 201 -65 q 279 -89 258 -65 q 300 -151 300 -112 z \"},\"Ț\":{\"ha\":756,\"x_min\":31,\"x_max\":725,\"o\":\"m 526 22 l 526 0 l 228 0 l 228 22 l 272 32 q 313 51 304 40 q 321 90 321 61 l 321 753 l 160 753 q 109 742 125 753 q 83 700 93 731 l 51 599 l 31 599 l 31 800 l 39 803 q 77 794 58 797 q 119 792 96 792 l 635 792 q 677 794 658 792 q 715 803 696 797 l 725 800 l 725 599 l 703 599 l 672 700 q 647 741 664 729 q 594 753 631 753 l 433 753 l 433 90 q 442 51 433 61 q 482 32 450 40 l 526 22 m 450 -151 q 412 -248 450 -207 q 301 -308 374 -289 l 294 -285 q 376 -244 349 -268 q 404 -190 404 -221 q 386 -153 404 -168 q 313 -118 368 -137 q 338 -76 324 -87 q 374 -65 351 -65 q 429 -89 408 -65 q 450 -151 450 -112 z \"},\"ț\":{\"ha\":419,\"x_min\":21,\"x_max\":403,\"o\":\"m 231 -14 q 132 19 168 -14 q 96 111 96 53 l 96 432 l 21 432 l 21 449 l 183 588 l 199 588 l 199 496 l 390 496 l 390 432 l 199 432 l 199 157 q 224 84 199 108 q 300 60 250 60 q 346 65 324 60 q 393 83 368 71 l 403 65 q 313 9 364 32 q 231 -14 263 -14 m 306 -151 q 267 -248 306 -207 q 157 -308 229 -289 l 150 -285 q 232 -244 204 -268 q 260 -190 260 -221 q 242 -153 260 -168 q 168 -118 224 -137 q 193 -76 179 -87 q 229 -65 207 -65 q 285 -89 264 -65 q 306 -151 306 -112 z \"},\"ȷ\":{\"ha\":272,\"x_min\":1,\"x_max\":199,\"o\":\"m 192 385 l 192 -107 q 148 -197 192 -153 q 11 -286 104 -240 l 1 -268 q 72 -194 54 -231 q 90 -97 90 -158 l 90 382 q 85 410 90 400 q 65 426 79 419 l 32 444 l 32 460 l 189 510 l 199 504 q 193 449 194 475 q 192 385 192 424 z \"},\"ˆ\":{\"ha\":696,\"x_min\":208,\"x_max\":531,\"o\":\"m 408 819 l 531 583 l 508 569 l 371 786 l 368 786 l 231 569 l 208 583 l 331 819 q 349 844 340 838 q 371 851 358 851 q 390 845 382 851 q 408 819 399 839 z \"},\"ˇ\":{\"ha\":696,\"x_min\":211,\"x_max\":528,\"o\":\"m 331 601 l 211 838 l 233 851 l 368 632 l 371 632 l 506 851 l 528 838 l 408 601 q 391 577 400 585 q 369 569 382 569 q 349 576 357 569 q 331 601 340 582 z \"},\"˘\":{\"ha\":696,\"x_min\":182,\"x_max\":511,\"o\":\"m 460 656 q 439 628 460 656 q 347 600 418 600 q 234 655 276 600 q 182 817 192 710 l 206 818 q 251 700 217 738 q 347 663 285 663 q 442 700 408 663 q 488 818 476 738 l 511 817 q 460 656 503 711 z \"},\"˙\":{\"ha\":696,\"x_min\":288,\"x_max\":406,\"o\":\"m 406 746 q 389 703 406 721 q 347 686 372 686 q 304 703 321 686 q 288 746 288 719 q 305 788 288 771 q 347 804 322 804 q 388 787 371 804 q 406 746 406 769 z \"},\"˚\":{\"ha\":696,\"x_min\":219,\"x_max\":475,\"o\":\"m 350 819 q 440 790 404 819 q 475 713 475 760 q 439 630 475 663 q 347 597 403 597 q 255 626 290 597 q 219 703 219 656 q 256 787 219 754 q 350 819 293 819 m 351 621 q 406 644 386 621 q 425 707 425 667 q 403 771 425 746 q 344 796 381 796 q 289 772 310 796 q 268 708 268 747 q 292 646 268 671 q 351 621 315 621 z \"},\"˛\":{\"ha\":694,\"x_min\":294,\"x_max\":522,\"o\":\"m 408 -307 q 326 -278 358 -307 q 294 -204 294 -250 q 318 -122 294 -165 q 417 6 342 -79 l 444 3 q 375 -96 394 -56 q 356 -176 356 -136 q 376 -237 356 -215 q 435 -260 397 -260 q 475 -253 456 -260 q 513 -232 494 -246 l 522 -244 q 470 -288 503 -269 q 408 -307 438 -307 z \"},\"˜\":{\"ha\":696,\"x_min\":160,\"x_max\":539,\"o\":\"m 433 667 q 404 671 422 667 q 346 689 386 675 q 288 706 306 701 q 258 710 269 710 q 231 701 242 710 q 210 671 219 693 l 183 608 l 160 617 l 192 696 q 225 754 210 740 q 265 768 240 768 q 294 764 276 768 q 353 747 313 760 q 410 729 392 733 q 439 725 428 725 q 465 733 454 725 q 489 767 476 740 l 515 828 l 539 818 l 508 742 q 474 681 490 696 q 433 667 458 667 z \"},\"˝\":{\"ha\":696,\"x_min\":206,\"x_max\":489,\"o\":\"m 228 569 l 206 579 l 269 808 q 284 841 275 831 q 306 851 293 851 q 324 845 317 851 q 331 828 331 839 q 328 817 331 824 q 318 790 326 810 l 228 569 m 386 569 l 364 579 l 428 808 q 442 841 433 831 q 464 851 451 851 q 482 845 475 851 q 489 828 489 839 q 487 817 489 824 q 476 790 485 810 l 386 569 z \"},\"Δ\":{\"ha\":769,\"x_min\":21,\"x_max\":707,\"o\":\"m 707 25 l 707 0 l 21 0 l 21 25 q 35 45 29 35 q 49 74 42 56 l 338 800 l 388 800 l 678 74 q 693 42 688 51 q 707 25 699 32 m 129 38 l 533 38 q 559 46 553 38 q 558 69 565 54 l 325 660 l 104 68 q 103 44 97 51 q 129 38 110 38 z \"},\"Ω\":{\"ha\":1029,\"x_min\":6,\"x_max\":940,\"o\":\"m 940 171 l 906 0 l 528 0 l 528 15 q 698 230 649 133 q 747 443 747 326 q 669 678 747 589 q 461 768 592 768 q 267 690 336 768 q 197 472 197 611 q 244 243 197 342 q 418 15 292 144 l 418 0 l 40 0 l 6 171 l 28 174 l 42 139 q 68 106 51 114 q 129 97 85 97 l 311 97 l 311 101 q 128 285 183 200 q 72 464 72 371 q 185 710 72 615 q 471 806 299 806 q 761 716 649 806 q 874 482 874 626 q 815 285 874 379 q 636 101 756 190 l 636 97 l 817 97 q 877 106 860 97 q 904 139 894 114 l 918 174 l 940 171 z \"},\"π\":{\"ha\":642,\"x_min\":0,\"x_max\":611,\"o\":\"m 240 192 q 206 44 240 101 q 118 -14 171 -14 q 63 10 85 -14 q 26 83 40 33 l 31 88 q 162 112 125 82 q 199 224 199 142 q 197 311 199 265 q 193 396 196 357 l 76 396 q 53 390 61 396 q 44 372 44 383 q 57 344 44 358 q 101 308 69 331 l 101 304 q 72 276 86 285 q 43 267 58 267 q 12 283 24 267 q 0 326 0 299 q 49 442 0 388 q 161 496 97 496 l 533 496 q 561 504 550 496 q 594 549 572 513 l 608 546 l 597 396 l 438 396 q 428 293 432 344 q 425 199 425 242 q 446 115 425 142 q 510 88 467 88 q 550 97 532 88 q 592 135 568 107 l 611 125 q 558 17 586 49 q 492 -14 531 -14 q 408 35 436 -14 q 381 181 381 85 q 385 272 381 218 q 401 396 390 325 l 229 396 q 238 291 235 347 q 240 192 240 235 z \"},\"Ẁ\":{\"ha\":1171,\"x_min\":3,\"x_max\":1168,\"o\":\"m 443 -8 l 385 -8 l 83 718 q 65 748 74 740 q 36 760 56 756 l 3 768 l 3 792 l 285 792 l 285 767 l 229 754 q 201 742 207 750 q 201 719 196 735 l 451 107 l 567 385 l 422 718 q 403 747 414 739 q 374 760 393 756 l 342 768 l 342 792 l 614 792 l 614 767 l 564 754 q 537 741 543 749 q 538 717 531 733 l 643 471 l 749 721 q 751 742 756 735 q 721 757 746 749 l 683 767 l 683 792 l 893 792 l 893 768 l 851 758 q 824 747 833 754 q 803 718 814 740 l 665 422 l 800 107 l 1031 719 q 1031 744 1036 736 q 1003 756 1025 751 l 950 767 l 950 792 l 1168 792 l 1168 768 l 1135 758 q 1103 745 1113 753 q 1086 718 1093 738 l 793 -8 l 736 -8 l 590 329 l 443 -8 m 604 1022 l 658 867 l 636 857 l 556 1003 q 547 1024 549 1017 q 544 1036 544 1031 q 551 1053 544 1047 q 569 1060 558 1060 q 589 1051 581 1060 q 604 1022 597 1042 z \"},\"ẁ\":{\"ha\":843,\"x_min\":11,\"x_max\":832,\"o\":\"m 288 -21 l 257 -21 l 78 438 q 67 458 74 451 q 47 469 60 465 l 11 476 l 11 496 l 250 496 l 250 476 l 206 468 q 191 459 194 465 q 192 443 188 453 l 310 125 l 401 358 l 368 443 q 359 459 364 454 q 342 468 354 464 l 313 476 l 313 496 l 550 496 l 550 476 l 503 467 q 486 457 490 464 q 486 438 482 450 l 604 128 l 717 432 q 717 452 721 444 q 703 463 714 460 l 646 476 l 646 496 l 832 496 l 832 476 l 790 464 q 776 455 782 461 q 763 436 769 449 l 581 -21 l 551 -21 l 422 307 l 288 -21 m 363 808 l 450 579 l 429 569 l 311 790 q 301 811 304 803 q 299 826 299 819 q 306 844 299 838 q 325 851 314 851 q 345 841 336 851 q 363 808 354 831 z \"},\"Ẃ\":{\"ha\":1171,\"x_min\":3,\"x_max\":1168,\"o\":\"m 443 -8 l 385 -8 l 83 718 q 65 748 74 740 q 36 760 56 756 l 3 768 l 3 792 l 285 792 l 285 767 l 229 754 q 201 742 207 750 q 201 719 196 735 l 451 107 l 567 385 l 422 718 q 403 747 414 739 q 374 760 393 756 l 342 768 l 342 792 l 614 792 l 614 767 l 564 754 q 537 741 543 749 q 538 717 531 733 l 643 471 l 749 721 q 751 742 756 735 q 721 757 746 749 l 683 767 l 683 792 l 893 792 l 893 768 l 851 758 q 824 747 833 754 q 803 718 814 740 l 665 422 l 800 107 l 1031 719 q 1031 744 1036 736 q 1003 756 1025 751 l 950 767 l 950 792 l 1168 792 l 1168 768 l 1135 758 q 1103 745 1113 753 q 1086 718 1093 738 l 793 -8 l 736 -8 l 590 329 l 443 -8 m 663 857 l 640 867 l 693 1018 q 711 1050 703 1040 q 731 1060 719 1060 q 749 1053 742 1060 q 756 1036 756 1047 q 753 1023 756 1031 q 743 1000 750 1015 l 663 857 z \"},\"ẃ\":{\"ha\":843,\"x_min\":11,\"x_max\":832,\"o\":\"m 288 -21 l 257 -21 l 78 438 q 67 458 74 451 q 47 469 60 465 l 11 476 l 11 496 l 250 496 l 250 476 l 206 468 q 191 459 194 465 q 192 443 188 453 l 310 125 l 401 358 l 368 443 q 359 459 364 454 q 342 468 354 464 l 313 476 l 313 496 l 550 496 l 550 476 l 503 467 q 486 457 490 464 q 486 438 482 450 l 604 128 l 717 432 q 717 452 721 444 q 703 463 714 460 l 646 476 l 646 496 l 832 496 l 832 476 l 790 464 q 776 455 782 461 q 763 436 769 449 l 581 -21 l 551 -21 l 422 307 l 288 -21 m 451 569 l 431 579 l 518 808 q 536 842 526 832 q 557 851 546 851 q 575 844 568 851 q 582 826 582 838 q 579 811 582 819 q 569 790 576 803 l 451 569 z \"},\"Ẅ\":{\"ha\":1171,\"x_min\":3,\"x_max\":1168,\"o\":\"m 443 -8 l 385 -8 l 83 718 q 65 748 74 740 q 36 760 56 756 l 3 768 l 3 792 l 285 792 l 285 767 l 229 754 q 201 742 207 750 q 201 719 196 735 l 451 107 l 567 385 l 422 718 q 403 747 414 739 q 374 760 393 756 l 342 768 l 342 792 l 614 792 l 614 767 l 564 754 q 537 741 543 749 q 538 717 531 733 l 643 471 l 749 721 q 751 742 756 735 q 721 757 746 749 l 683 767 l 683 792 l 893 792 l 893 768 l 851 758 q 824 747 833 754 q 803 718 814 740 l 665 422 l 800 107 l 1031 719 q 1031 744 1036 736 q 1003 756 1025 751 l 950 767 l 950 792 l 1168 792 l 1168 768 l 1135 758 q 1103 745 1113 753 q 1086 718 1093 738 l 793 -8 l 736 -8 l 590 329 l 443 -8 m 610 963 q 593 920 610 938 q 551 903 576 903 q 508 919 525 903 q 492 963 492 936 q 509 1004 492 988 q 551 1021 526 1021 q 592 1003 575 1021 q 610 963 610 986 m 813 963 q 796 919 813 936 q 754 903 779 903 q 712 919 728 903 q 696 963 696 936 q 713 1004 696 988 q 754 1021 729 1021 q 796 1004 779 1021 q 813 963 813 988 z \"},\"ẅ\":{\"ha\":843,\"x_min\":11,\"x_max\":832,\"o\":\"m 288 -21 l 257 -21 l 78 438 q 67 458 74 451 q 47 469 60 465 l 11 476 l 11 496 l 250 496 l 250 476 l 206 468 q 191 459 194 465 q 192 443 188 453 l 310 125 l 401 358 l 368 443 q 359 459 364 454 q 342 468 354 464 l 313 476 l 313 496 l 550 496 l 550 476 l 503 467 q 486 457 490 464 q 486 438 482 450 l 604 128 l 717 432 q 717 452 721 444 q 703 463 714 460 l 646 476 l 646 496 l 832 496 l 832 476 l 790 464 q 776 455 782 461 q 763 436 769 449 l 581 -21 l 551 -21 l 422 307 l 288 -21 m 393 746 q 376 703 393 721 q 335 686 360 686 q 292 703 308 686 q 275 746 275 719 q 292 788 275 771 q 335 804 310 804 q 376 787 358 804 q 393 746 393 769 m 607 746 q 590 703 607 719 q 549 686 574 686 q 506 703 522 686 q 490 746 490 719 q 507 788 490 771 q 549 804 524 804 q 590 788 574 804 q 607 746 607 771 z \"},\"ẞ\":{\"ha\":874,\"x_min\":56,\"x_max\":826,\"o\":\"m 261 500 l 261 0 l 56 0 l 56 22 l 100 32 q 140 51 132 40 q 149 90 149 61 l 149 476 q 233 719 149 632 q 475 806 318 806 q 562 795 517 806 q 647 765 607 785 q 695 743 679 750 q 725 732 711 736 l 729 724 l 482 453 l 514 453 q 741 391 656 453 q 826 228 826 329 q 749 53 826 121 q 557 -14 671 -14 q 456 -2 506 -14 q 350 35 406 10 l 338 215 l 360 215 l 389 142 q 456 52 414 82 q 560 22 499 22 q 672 73 632 22 q 711 217 711 124 q 656 363 711 310 q 506 415 601 415 l 421 415 l 421 439 l 622 682 q 563 745 604 722 q 467 768 521 768 q 310 705 358 768 q 261 500 261 642 z \"},\"Ỳ\":{\"ha\":754,\"x_min\":3,\"x_max\":751,\"o\":\"m 526 22 l 526 0 l 228 0 l 228 22 l 272 32 q 313 51 304 40 q 321 90 321 61 l 321 333 l 89 718 q 64 750 74 744 q 38 760 54 756 l 3 768 l 3 792 l 315 792 l 315 767 l 243 754 q 215 742 221 750 q 215 719 208 733 l 415 383 l 614 717 q 617 742 624 732 q 588 757 611 751 l 528 768 l 528 792 l 751 792 l 751 768 l 721 760 q 695 749 704 756 q 668 714 686 742 l 432 342 l 432 90 q 440 51 432 61 q 481 32 449 40 l 526 22 m 374 1022 l 428 867 l 406 857 l 325 1003 q 316 1024 318 1017 q 314 1036 314 1031 q 321 1053 314 1047 q 339 1060 328 1060 q 358 1051 350 1060 q 374 1022 367 1042 z \"},\"ỳ\":{\"ha\":582,\"x_min\":6,\"x_max\":576,\"o\":\"m 113 -389 q 84 -375 97 -389 q 60 -333 71 -361 q 141 -277 115 -304 q 192 -192 167 -250 l 271 -15 l 75 440 q 63 460 68 456 q 46 468 57 465 l 6 476 l 6 496 l 265 496 l 265 476 l 206 465 q 190 457 193 464 q 190 439 186 450 l 328 113 l 331 113 l 458 429 q 461 451 464 443 q 449 463 458 460 l 393 476 l 393 496 l 576 496 l 576 476 l 533 461 q 519 453 524 458 q 507 431 514 447 l 206 -258 q 153 -363 172 -337 q 113 -389 133 -389 m 250 808 l 338 579 l 317 569 l 199 790 q 189 811 192 803 q 186 826 186 819 q 194 844 186 838 q 213 851 201 851 q 233 841 224 851 q 250 808 242 831 z \"},\"–\":{\"ha\":556,\"x_min\":28,\"x_max\":528,\"o\":\"m 528 325 l 28 325 l 28 361 l 528 361 l 528 325 z \"},\"—\":{\"ha\":1111,\"x_min\":28,\"x_max\":1083,\"o\":\"m 1083 325 l 28 325 l 28 361 l 1083 361 l 1083 325 z \"},\"‘\":{\"ha\":272,\"x_min\":50,\"x_max\":210,\"o\":\"m 50 679 q 86 784 50 740 q 200 861 122 828 l 210 836 q 136 788 157 810 q 115 738 115 765 q 130 698 115 713 q 203 665 144 683 q 175 597 193 618 q 126 575 157 575 q 71 603 92 575 q 50 679 50 631 z \"},\"’\":{\"ha\":272,\"x_min\":39,\"x_max\":200,\"o\":\"m 200 757 q 165 651 200 694 q 50 575 129 608 l 39 600 q 113 648 92 626 q 133 699 133 669 q 119 739 133 725 q 46 771 104 753 q 75 840 57 818 q 122 861 93 861 q 179 834 158 861 q 200 757 200 807 z \"},\"‚\":{\"ha\":272,\"x_min\":39,\"x_max\":200,\"o\":\"m 200 31 q 164 -74 200 -31 q 50 -150 128 -117 l 39 -125 q 113 -77 92 -99 q 133 -26 133 -56 q 119 13 133 -1 q 46 44 104 26 q 75 113 57 92 q 122 135 93 135 q 179 108 158 135 q 200 31 200 81 z \"},\"“\":{\"ha\":483,\"x_min\":50,\"x_max\":421,\"o\":\"m 50 679 q 86 784 50 740 q 200 861 122 828 l 210 836 q 136 788 157 810 q 115 738 115 765 q 130 698 115 713 q 203 665 144 683 q 175 597 193 618 q 126 575 157 575 q 71 603 92 575 q 50 679 50 631 m 261 679 q 297 784 261 740 q 411 861 333 828 l 421 836 q 347 788 368 810 q 326 738 326 765 q 341 698 326 713 q 414 665 356 683 q 386 597 404 618 q 338 575 368 575 q 282 603 303 575 q 261 679 261 631 z \"},\"”\":{\"ha\":483,\"x_min\":39,\"x_max\":411,\"o\":\"m 200 757 q 165 651 200 694 q 50 575 129 608 l 39 600 q 113 648 92 626 q 133 699 133 669 q 119 739 133 725 q 46 771 104 753 q 75 840 57 818 q 122 861 93 861 q 179 834 158 861 q 200 757 200 807 m 411 757 q 376 651 411 694 q 261 575 340 608 l 250 600 q 324 648 303 626 q 344 699 344 669 q 330 739 344 725 q 257 771 315 753 q 286 840 268 818 q 333 861 304 861 q 390 834 369 861 q 411 757 411 807 z \"},\"„\":{\"ha\":483,\"x_min\":39,\"x_max\":411,\"o\":\"m 200 31 q 164 -74 200 -31 q 50 -150 128 -117 l 39 -125 q 113 -77 92 -99 q 133 -26 133 -56 q 119 13 133 -1 q 46 44 104 26 q 75 113 57 92 q 122 135 93 135 q 179 108 158 135 q 200 31 200 81 m 411 31 q 375 -74 411 -31 q 261 -150 339 -117 l 250 -125 q 324 -77 303 -99 q 344 -26 344 -56 q 330 13 344 -1 q 257 44 315 26 q 286 113 268 92 q 333 135 304 135 q 390 108 369 135 q 411 31 411 81 z \"},\"†\":{\"ha\":556,\"x_min\":17,\"x_max\":539,\"o\":\"m 288 619 l 268 619 q 255 700 267 656 q 225 792 243 744 l 228 810 l 271 869 l 286 869 l 329 810 l 332 792 q 301 702 313 747 q 288 619 289 657 m 308 575 l 308 594 q 381 606 342 596 q 461 636 419 617 l 479 633 l 539 592 l 539 578 l 479 536 l 461 533 q 383 563 422 553 q 308 575 344 574 m 249 594 l 249 575 q 173 563 213 574 q 94 533 133 553 l 76 536 l 17 578 l 17 592 l 76 633 l 94 636 q 175 606 136 617 q 249 594 214 596 m 267 551 l 289 551 q 304 283 289 415 q 349 44 319 150 l 344 25 l 289 -39 l 268 -39 l 213 25 l 207 44 q 251 283 236 150 q 267 551 267 415 z \"},\"‡\":{\"ha\":556,\"x_min\":17,\"x_max\":539,\"o\":\"m 288 664 l 268 664 q 252 724 263 693 q 225 792 242 756 l 228 810 l 271 869 l 286 869 l 329 810 l 332 792 q 303 726 314 757 q 288 664 293 694 m 539 622 l 479 581 l 461 578 q 383 608 422 597 q 308 619 344 618 l 308 639 q 381 651 342 640 q 461 681 419 661 l 479 678 l 539 636 l 539 622 m 249 639 l 249 619 q 173 608 213 618 q 94 578 133 597 l 76 581 l 17 622 l 17 636 l 76 678 l 94 681 q 175 651 136 661 q 249 639 214 640 m 289 235 l 267 235 q 250 320 263 275 q 221 404 238 365 l 221 425 q 251 511 239 467 q 267 596 263 556 l 289 596 q 305 511 293 556 q 335 425 317 467 l 335 404 q 305 318 317 363 q 289 235 293 274 m 539 193 l 479 151 l 461 149 q 381 178 419 168 q 308 190 342 189 l 308 210 q 383 222 344 211 q 461 251 422 232 l 479 249 l 539 208 l 539 193 m 249 210 l 249 190 q 175 178 214 189 q 94 149 136 168 l 76 151 l 17 193 l 17 208 l 76 249 l 94 251 q 173 222 133 232 q 249 210 213 211 m 329 19 l 286 -39 l 271 -39 l 228 19 l 225 38 q 252 105 242 74 q 268 167 263 136 l 288 167 q 303 105 293 136 q 332 38 314 74 l 329 19 z \"},\"•\":{\"ha\":397,\"x_min\":51,\"x_max\":344,\"o\":\"m 303 449 q 324 428 303 449 q 344 343 344 407 q 303 237 344 279 q 197 194 263 194 q 92 236 132 194 q 51 343 51 278 q 92 449 51 407 q 197 490 133 490 q 303 449 263 490 z \"},\"…\":{\"ha\":836,\"x_min\":50,\"x_max\":785,\"o\":\"m 71 110 q 81 121 71 110 q 122 132 92 132 q 174 110 153 132 q 196 58 196 89 q 174 7 196 28 q 122 -14 153 -14 q 71 7 92 -14 q 50 58 50 28 q 71 110 50 89 m 365 110 q 376 121 365 110 q 417 132 386 132 q 469 110 447 132 q 490 58 490 89 q 469 7 490 28 q 417 -14 447 -14 q 365 7 386 -14 q 344 58 344 28 q 365 110 344 89 m 660 110 q 670 121 660 110 q 711 132 681 132 q 763 110 742 132 q 785 58 785 89 q 763 7 785 28 q 711 -14 742 -14 q 660 7 681 -14 q 639 58 639 28 q 660 110 639 89 z \"},\"‰\":{\"ha\":1210,\"x_min\":24,\"x_max\":1186,\"o\":\"m 295 741 q 318 712 295 741 q 340 594 340 683 q 295 447 340 506 q 181 388 250 388 q 68 447 113 388 q 24 594 24 506 q 68 741 24 683 q 181 799 113 799 q 295 741 250 799 m 107 594 q 126 458 107 504 q 182 411 144 411 q 238 458 218 411 q 257 594 257 506 q 238 728 257 682 q 181 775 218 775 q 126 729 144 775 q 107 594 107 683 m 650 771 l 201 0 l 167 19 l 617 792 l 650 771 m 752 345 q 775 316 752 345 q 797 199 797 288 q 752 51 797 110 q 638 -8 707 -8 q 525 51 569 -8 q 481 199 481 110 q 525 345 481 288 q 638 403 569 403 q 752 345 707 403 m 564 199 q 583 62 564 108 q 639 15 601 15 q 694 63 675 15 q 714 199 714 110 q 694 333 714 286 q 638 379 675 379 q 583 333 601 379 q 564 199 564 288 m 1141 345 q 1164 316 1141 345 q 1186 199 1186 288 q 1141 51 1186 110 q 1026 -8 1096 -8 q 914 51 958 -8 q 869 199 869 110 q 914 345 869 288 q 1026 403 958 403 q 1141 345 1096 403 m 953 199 q 972 62 953 108 q 1028 15 990 15 q 1083 63 1064 15 q 1103 199 1103 110 q 1083 333 1103 286 q 1026 379 1064 379 q 972 333 990 379 q 953 199 953 288 z \"},\"‹\":{\"ha\":278,\"x_min\":40,\"x_max\":201,\"o\":\"m 93 247 l 201 0 l 174 -15 l 40 238 l 40 257 l 174 510 l 201 494 l 93 247 z \"},\"›\":{\"ha\":278,\"x_min\":76,\"x_max\":236,\"o\":\"m 104 -15 l 76 0 l 183 247 l 76 494 l 104 510 l 236 257 l 236 238 l 104 -15 z \"},\"⁄\":{\"ha\":122,\"x_min\":-181,\"x_max\":303,\"o\":\"m 303 771 l -146 0 l -181 19 l 269 792 l 303 771 z \"},\"⁰\":{\"ha\":364,\"x_min\":24,\"x_max\":340,\"o\":\"m 295 863 q 318 834 295 863 q 340 717 340 806 q 295 569 340 628 q 181 510 250 510 q 68 569 113 510 q 24 717 24 628 q 68 863 24 806 q 181 921 113 921 q 295 863 250 921 m 107 717 q 126 580 107 626 q 182 533 144 533 q 238 581 218 533 q 257 717 257 628 q 238 851 257 804 q 181 897 218 897 q 126 851 144 897 q 107 717 107 806 z \"},\"⁴\":{\"ha\":342,\"x_min\":18,\"x_max\":322,\"o\":\"m 304 535 l 304 518 l 131 518 l 131 535 l 156 539 q 176 546 171 540 q 181 568 181 551 l 181 618 l 18 618 l 18 651 l 229 921 l 254 921 l 254 658 l 322 658 l 322 618 l 254 618 l 254 568 q 259 546 254 551 q 279 539 264 540 l 304 535 m 181 818 l 53 658 l 181 658 l 181 818 z \"},\"⁵\":{\"ha\":288,\"x_min\":10,\"x_max\":267,\"o\":\"m 267 647 q 218 549 267 586 q 89 511 169 511 q 31 522 51 511 q 10 554 10 533 q 16 574 10 563 q 33 596 22 585 l 39 596 q 81 551 58 565 q 132 538 103 538 q 184 558 165 538 q 203 613 203 578 q 164 678 203 653 q 49 710 125 703 l 46 713 l 81 914 l 263 914 l 253 843 l 93 843 l 83 778 q 218 735 169 769 q 267 647 267 700 z \"},\"⁶\":{\"ha\":326,\"x_min\":21,\"x_max\":311,\"o\":\"m 21 665 q 85 826 21 758 q 261 921 150 894 l 264 908 q 147 815 188 876 q 106 668 106 753 q 122 568 106 601 q 172 535 139 535 q 217 559 200 535 q 233 624 233 583 q 215 690 233 664 q 165 715 196 715 q 146 713 156 715 q 128 706 136 711 l 121 714 q 164 743 138 731 q 208 756 190 756 q 283 725 254 756 q 311 647 311 694 q 271 549 311 588 q 168 511 231 511 q 60 551 100 511 q 21 665 21 592 z \"},\"⁷\":{\"ha\":300,\"x_min\":26,\"x_max\":286,\"o\":\"m 286 904 l 128 518 l 81 518 l 81 526 l 236 843 l 79 843 q 56 838 63 843 q 44 818 50 833 l 38 796 l 26 799 l 36 914 l 286 914 l 286 904 z \"},\"⁸\":{\"ha\":317,\"x_min\":18,\"x_max\":299,\"o\":\"m 208 743 q 278 689 258 715 q 299 628 299 663 q 258 542 299 574 q 151 511 218 511 q 53 538 89 511 q 18 614 18 565 q 38 673 18 647 q 100 715 58 699 q 53 758 68 735 q 39 813 39 782 q 75 891 39 861 q 171 921 111 921 q 251 897 221 921 q 281 832 281 874 q 262 779 281 803 q 208 743 243 756 m 163 896 q 118 883 135 896 q 101 846 101 869 q 118 801 101 821 q 190 753 135 782 q 215 785 207 765 q 224 829 224 804 q 208 878 224 861 q 163 896 192 896 m 117 707 q 92 671 100 692 q 83 624 83 650 q 104 559 83 583 q 160 535 125 535 q 212 552 192 535 q 232 597 232 569 q 222 635 232 618 q 190 667 213 651 q 151 690 178 676 q 117 707 124 703 z \"},\"⁹\":{\"ha\":329,\"x_min\":18,\"x_max\":307,\"o\":\"m 307 767 q 243 606 307 674 q 68 511 179 538 l 64 522 q 183 616 142 554 q 224 763 224 678 q 207 863 224 829 q 157 896 190 896 q 113 872 129 896 q 96 808 96 849 q 114 740 96 765 q 164 715 132 715 q 183 717 174 715 q 201 725 193 719 l 208 717 q 164 687 190 699 q 119 675 138 675 q 47 706 75 675 q 18 783 18 736 q 58 883 18 844 q 161 921 99 921 q 268 880 229 921 q 307 767 307 839 z \"},\"₀\":{\"ha\":364,\"x_min\":24,\"x_max\":340,\"o\":\"m 295 223 q 318 194 295 223 q 340 76 340 165 q 295 -72 340 -12 q 181 -131 250 -131 q 68 -72 113 -131 q 24 76 24 -12 q 68 223 24 165 q 181 281 113 281 q 295 223 250 281 m 107 76 q 126 -60 107 -14 q 182 -107 144 -107 q 238 -60 218 -107 q 257 76 257 -12 q 238 210 257 164 q 181 257 218 257 q 126 211 144 257 q 107 76 107 165 z \"},\"₁\":{\"ha\":233,\"x_min\":18,\"x_max\":213,\"o\":\"m 213 -108 l 213 -122 l 32 -122 l 32 -108 l 68 -101 q 81 -94 78 -99 q 85 -78 85 -89 l 85 169 q 78 201 85 192 q 57 210 72 210 q 45 208 51 210 q 25 203 39 207 l 18 215 l 156 285 l 164 281 q 160 256 161 268 q 160 219 160 243 l 160 -78 q 163 -95 160 -90 q 176 -101 167 -100 l 213 -108 z \"},\"₂\":{\"ha\":310,\"x_min\":18,\"x_max\":294,\"o\":\"m 294 -11 l 271 -122 l 18 -122 l 18 -114 q 160 42 118 -15 q 201 149 201 100 q 183 202 201 183 q 129 221 164 221 q 71 201 94 221 q 31 139 47 181 l 21 139 q 67 243 32 206 q 154 281 101 281 q 242 251 210 281 q 275 174 275 221 q 236 76 275 128 q 110 -51 197 24 l 110 -54 l 238 -54 q 261 -49 254 -54 q 274 -32 268 -44 l 281 -10 l 294 -11 z \"},\"₃\":{\"ha\":299,\"x_min\":11,\"x_max\":279,\"o\":\"m 279 0 q 226 -92 279 -56 q 92 -129 174 -129 q 33 -118 54 -129 q 11 -86 11 -107 q 17 -67 11 -78 q 35 -44 24 -56 l 40 -44 q 81 -88 58 -74 q 129 -103 104 -103 q 192 -81 168 -103 q 215 -21 215 -58 q 188 38 215 15 q 115 61 161 61 q 91 59 104 61 q 67 53 78 57 l 61 69 q 153 115 125 92 q 181 171 181 138 q 163 208 181 193 q 117 222 146 222 q 63 206 85 222 q 29 158 40 190 l 19 161 q 62 249 28 217 q 149 281 96 281 q 224 258 196 281 q 251 200 251 236 q 233 150 251 171 q 171 114 214 129 l 171 113 q 250 76 221 107 q 279 0 279 44 z \"},\"₄\":{\"ha\":342,\"x_min\":18,\"x_max\":322,\"o\":\"m 304 -106 l 304 -122 l 131 -122 l 131 -106 l 156 -101 q 176 -94 171 -100 q 181 -72 181 -89 l 181 -22 l 18 -22 l 18 11 l 229 281 l 254 281 l 254 18 l 322 18 l 322 -22 l 254 -22 l 254 -72 q 259 -94 254 -89 q 279 -101 264 -100 l 304 -106 m 181 178 l 53 18 l 181 18 l 181 178 z \"},\"₅\":{\"ha\":288,\"x_min\":10,\"x_max\":267,\"o\":\"m 267 7 q 218 -92 267 -54 q 89 -129 169 -129 q 31 -118 51 -129 q 10 -86 10 -107 q 16 -67 10 -78 q 33 -44 22 -56 l 39 -44 q 81 -89 58 -75 q 132 -103 103 -103 q 184 -83 165 -103 q 203 -28 203 -62 q 164 38 203 13 q 49 69 125 63 l 46 72 l 81 274 l 263 274 l 253 203 l 93 203 l 83 138 q 218 94 169 129 q 267 7 267 60 z \"},\"₆\":{\"ha\":326,\"x_min\":21,\"x_max\":311,\"o\":\"m 21 25 q 85 186 21 118 q 261 281 150 254 l 264 268 q 147 174 188 236 q 106 28 106 113 q 122 -72 106 -39 q 172 -106 139 -106 q 217 -81 200 -106 q 233 -17 233 -57 q 215 49 233 24 q 165 75 196 75 q 146 73 156 75 q 128 65 136 71 l 121 74 q 164 103 138 90 q 208 115 190 115 q 283 85 254 115 q 311 7 311 54 q 271 -91 311 -53 q 168 -129 231 -129 q 60 -89 100 -129 q 21 25 21 -49 z \"},\"₇\":{\"ha\":300,\"x_min\":26,\"x_max\":286,\"o\":\"m 286 264 l 128 -122 l 81 -122 l 81 -114 l 236 203 l 79 203 q 56 198 63 203 q 44 178 50 193 l 38 156 l 26 158 l 36 274 l 286 274 l 286 264 z \"},\"₈\":{\"ha\":317,\"x_min\":18,\"x_max\":299,\"o\":\"m 208 103 q 278 49 258 75 q 299 -12 299 22 q 258 -98 299 -67 q 151 -129 218 -129 q 53 -102 89 -129 q 18 -26 18 -75 q 38 33 18 7 q 100 75 58 58 q 53 118 68 94 q 39 172 39 142 q 75 251 39 221 q 171 281 111 281 q 251 257 221 281 q 281 192 281 233 q 262 139 281 163 q 208 103 243 115 m 163 256 q 118 242 135 256 q 101 206 101 229 q 118 161 101 181 q 190 113 135 142 q 215 144 207 125 q 224 189 224 164 q 208 238 224 221 q 163 256 192 256 m 117 67 q 92 31 100 51 q 83 -17 83 10 q 104 -81 83 -57 q 160 -106 125 -106 q 212 -88 192 -106 q 232 -43 232 -71 q 222 -6 232 -22 q 190 26 213 11 q 151 49 178 36 q 117 67 124 63 z \"},\"₉\":{\"ha\":329,\"x_min\":18,\"x_max\":307,\"o\":\"m 307 126 q 243 -35 307 33 q 68 -129 179 -103 l 64 -118 q 183 -24 142 -86 q 224 122 224 38 q 207 222 224 189 q 157 256 190 256 q 113 232 129 256 q 96 168 96 208 q 114 100 96 125 q 164 75 132 75 q 183 77 174 75 q 201 85 193 79 l 208 76 q 164 47 190 58 q 119 35 138 35 q 47 65 75 35 q 18 143 18 96 q 58 242 18 204 q 161 281 99 281 q 268 240 229 281 q 307 126 307 199 z \"},\"₡\":{\"ha\":785,\"x_min\":58,\"x_max\":714,\"o\":\"m 514 901 l 176 -82 l 131 -68 l 182 82 q 90 212 122 135 q 58 378 58 289 q 165 678 58 558 q 432 806 271 797 l 469 915 l 514 901 m 338 0 l 297 -115 l 251 -101 l 593 886 l 638 872 l 606 779 q 656 757 632 769 q 703 728 681 744 l 703 571 l 682 571 l 657 632 q 629 685 646 663 q 588 725 613 708 l 353 47 q 403 28 376 35 q 456 22 431 22 q 575 52 525 22 q 661 144 625 82 l 696 206 l 714 206 l 707 60 q 593 7 665 28 q 450 -14 521 -14 q 395 -10 424 -14 q 338 0 367 -7 m 185 403 q 194 297 185 349 q 222 199 204 244 l 418 767 q 247 658 310 754 q 185 403 185 561 z \"},\"₩\":{\"ha\":1171,\"x_min\":3,\"x_max\":1168,\"o\":\"m 1117 490 l 1117 453 l 50 453 l 50 490 l 178 490 l 83 718 q 65 748 74 740 q 36 760 56 756 l 3 768 l 3 792 l 285 792 l 285 767 l 229 754 q 200 742 206 750 q 201 719 194 735 l 294 490 l 521 490 l 422 718 q 403 747 414 739 q 374 760 393 756 l 342 768 l 342 792 l 614 792 l 614 767 l 564 754 q 537 741 543 749 q 538 717 531 733 l 636 489 l 650 489 l 749 721 q 751 742 756 735 q 721 757 746 749 l 683 767 l 683 792 l 893 792 l 893 768 l 851 758 q 824 747 833 754 q 803 718 814 740 l 696 490 l 943 490 l 1031 719 q 1031 744 1036 736 q 1003 756 1025 751 l 950 767 l 950 792 l 1168 792 l 1168 768 l 1135 758 q 1103 745 1113 753 q 1086 718 1093 738 l 994 490 l 1117 490 m 935 342 l 793 -8 l 736 -8 l 592 321 l 586 321 l 443 -8 l 385 -8 l 240 342 l 50 342 l 50 379 l 1117 379 l 1117 342 l 935 342 m 356 342 l 450 108 l 549 342 l 356 342 m 699 342 l 800 106 l 889 342 l 699 342 z \"},\"₪\":{\"ha\":850,\"x_min\":28,\"x_max\":822,\"o\":\"m 278 0 l 278 458 l 356 458 l 356 61 l 511 61 q 665 108 618 61 q 711 261 711 154 l 711 653 l 822 653 l 822 261 q 750 65 822 129 q 533 0 678 0 l 278 0 m 571 389 l 571 193 l 494 193 l 494 389 q 450 542 494 494 q 306 590 406 590 l 138 590 l 138 0 l 28 0 l 28 653 l 317 653 q 508 588 444 653 q 571 389 571 524 z \"},\"₫\":{\"ha\":640,\"x_min\":44,\"x_max\":619,\"o\":\"m 619 38 l 443 -11 l 443 63 q 349 8 400 31 q 265 -14 297 -14 q 106 52 167 -14 q 44 224 44 118 q 126 430 44 350 q 333 510 207 510 q 386 506 360 510 q 443 492 413 501 l 443 679 l 297 679 l 297 715 l 443 715 l 443 815 q 438 844 443 836 q 418 860 433 853 l 385 878 l 385 893 l 543 944 l 553 938 q 547 883 549 910 q 546 818 546 857 l 546 715 l 619 715 l 619 679 l 546 679 l 546 104 q 551 78 546 86 q 579 65 557 71 l 619 56 l 619 38 m 318 478 q 197 424 240 478 q 153 274 153 369 q 199 115 153 174 q 325 57 246 57 q 388 66 357 57 q 443 92 419 75 l 443 344 q 410 443 443 408 q 318 478 376 478 m 619 -167 l 44 -167 l 44 -129 l 619 -129 l 619 -167 z \"},\"€\":{\"ha\":831,\"x_min\":18,\"x_max\":763,\"o\":\"m 528 472 l 528 436 l 18 436 l 18 472 l 114 472 q 242 715 138 624 q 499 806 347 806 q 633 786 569 806 q 750 728 697 767 l 750 571 l 729 571 l 706 632 q 625 733 679 699 q 494 768 571 768 q 319 688 389 768 q 235 472 249 608 l 528 472 m 497 -14 q 233 79 339 -14 q 110 329 126 172 l 18 329 l 18 367 l 528 367 l 528 329 l 236 329 q 327 106 253 190 q 504 22 401 22 q 624 52 574 22 q 708 144 674 82 l 743 206 l 763 206 l 756 60 q 641 7 714 28 q 497 -14 568 -14 z \"},\"₭\":{\"ha\":840,\"x_min\":57,\"x_max\":833,\"o\":\"m 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 422 l 57 422 l 57 458 l 150 458 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 356 792 l 356 768 l 311 758 q 271 740 279 750 q 263 700 263 729 l 263 425 l 586 717 q 599 741 603 731 q 571 757 594 751 l 515 768 l 515 792 l 794 792 l 794 768 l 753 758 q 703 744 721 753 q 665 721 685 736 l 357 463 l 361 458 l 744 458 l 744 422 l 394 422 l 703 86 q 743 53 724 64 q 800 32 763 43 l 833 22 l 833 0 l 488 0 l 488 22 l 547 35 q 576 49 572 40 q 565 75 581 57 l 263 403 l 263 90 q 271 51 263 61 q 311 32 279 40 l 356 22 z \"},\"₮\":{\"ha\":756,\"x_min\":31,\"x_max\":725,\"o\":\"m 667 558 l 106 329 l 89 365 l 321 460 l 321 753 l 160 753 q 109 742 125 753 q 83 700 93 731 l 51 599 l 31 599 l 31 800 l 39 803 q 77 794 58 797 q 119 792 96 792 l 635 792 q 677 794 658 792 q 715 803 696 797 l 725 800 l 725 599 l 703 599 l 672 700 q 647 741 664 729 q 594 753 631 753 l 433 753 l 433 506 l 650 594 l 667 558 m 321 288 l 106 200 l 89 236 l 650 465 l 667 429 l 433 333 l 433 90 q 442 51 433 61 q 482 32 450 40 l 526 22 l 526 0 l 228 0 l 228 22 l 272 32 q 313 51 304 40 q 321 90 321 61 l 321 288 z \"},\"₱\":{\"ha\":775,\"x_min\":57,\"x_max\":750,\"o\":\"m 750 592 l 57 592 l 57 629 l 150 629 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 375 792 q 560 748 485 792 q 656 629 635 704 l 750 629 l 750 592 m 351 754 l 263 754 l 263 629 l 532 629 q 470 723 515 692 q 351 754 425 754 m 383 22 l 383 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 485 l 57 485 l 57 522 l 750 522 l 750 485 l 643 485 q 529 371 611 411 q 328 331 447 331 l 310 331 l 310 353 l 329 356 q 462 395 411 363 q 531 485 513 428 l 263 485 l 263 90 q 272 49 263 60 q 311 35 281 39 l 383 22 z \"},\"₴\":{\"ha\":683,\"x_min\":63,\"x_max\":618,\"o\":\"m 618 433 l 63 433 l 63 471 l 333 471 q 449 553 418 515 q 481 640 481 592 q 441 732 481 696 q 339 768 401 768 q 239 742 278 768 q 179 660 200 715 l 158 610 l 136 610 l 146 757 q 230 793 182 781 q 331 806 278 806 q 505 745 435 806 q 575 593 575 685 q 565 526 575 557 q 533 471 554 496 l 618 471 l 618 433 m 136 322 l 63 322 l 63 360 l 618 360 l 618 322 l 308 322 q 233 252 256 289 q 210 169 210 215 q 256 60 210 99 q 385 22 301 22 q 492 53 449 22 q 560 146 535 83 l 589 219 l 611 219 l 600 39 q 493 -1 546 13 q 388 -14 440 -14 q 188 49 267 -14 q 108 215 108 111 q 115 272 108 244 q 136 322 122 299 z \"},\"₵\":{\"ha\":785,\"x_min\":58,\"x_max\":714,\"o\":\"m 465 -14 l 465 -139 l 421 -139 l 421 -12 q 159 107 260 -3 q 58 386 58 217 q 159 678 58 563 q 421 804 260 793 l 421 931 l 465 931 l 465 806 q 591 784 531 804 q 703 728 651 764 l 703 571 l 682 571 l 657 632 q 578 733 632 697 q 447 768 524 768 q 256 670 328 768 q 183 411 183 572 q 263 131 183 240 q 457 22 342 22 q 576 52 526 22 q 661 144 626 82 l 696 206 l 714 206 l 707 60 q 599 8 667 29 q 465 -14 532 -12 z \"},\"₸\":{\"ha\":756,\"x_min\":31,\"x_max\":725,\"o\":\"m 725 792 l 725 754 l 31 754 l 31 792 l 725 792 m 526 22 l 526 0 l 228 0 l 228 22 l 272 32 q 313 51 304 40 q 321 90 321 61 l 321 643 l 160 643 q 109 632 125 643 q 83 590 93 621 l 51 489 l 31 489 l 31 689 l 39 692 q 77 683 58 686 q 119 681 96 681 l 635 681 q 677 683 658 681 q 715 692 696 686 l 725 689 l 725 489 l 703 489 l 672 590 q 647 631 664 619 q 594 643 629 643 l 433 643 l 433 90 q 442 51 433 61 q 482 32 450 40 l 526 22 z \"},\"₹\":{\"ha\":617,\"x_min\":24,\"x_max\":601,\"o\":\"m 585 22 l 585 0 l 435 0 q 388 6 401 0 q 358 36 374 13 l 182 301 q 148 333 167 325 q 90 342 129 342 l 24 342 l 24 379 l 133 379 q 282 420 231 379 q 342 544 333 461 l 24 544 l 24 582 l 343 582 q 293 709 340 664 q 160 754 246 754 l 24 754 l 24 792 l 601 792 l 601 754 l 311 754 q 424 695 383 739 q 465 588 465 651 l 465 582 l 597 582 l 597 544 l 461 544 q 392 433 446 479 q 258 371 338 386 l 458 89 q 494 49 481 57 q 546 31 508 40 l 585 22 z \"},\"₺\":{\"ha\":676,\"x_min\":36,\"x_max\":656,\"o\":\"m 519 672 l 536 636 l 53 432 l 36 468 l 174 526 l 174 792 l 275 792 l 275 569 l 519 672 m 656 242 q 576 65 656 131 q 354 0 496 0 l 174 0 l 174 354 l 53 303 l 36 339 l 519 543 l 536 507 l 275 397 l 275 65 l 415 65 q 559 99 508 65 q 610 192 610 132 q 601 226 610 208 q 550 288 592 243 l 550 294 q 585 321 571 313 q 610 329 599 329 q 643 306 631 329 q 656 242 656 282 z \"},\"₼\":{\"ha\":764,\"x_min\":33,\"x_max\":731,\"o\":\"m 128 0 l 33 0 l 33 168 q 110 519 33 397 q 340 657 186 642 l 340 806 l 424 806 l 424 657 q 653 519 576 642 q 731 168 731 397 l 731 0 l 636 0 l 636 207 q 584 501 636 400 q 424 618 532 603 l 424 174 l 340 142 l 340 618 q 180 501 232 603 q 128 207 128 400 l 128 0 z \"},\"₽\":{\"ha\":708,\"x_min\":57,\"x_max\":663,\"o\":\"m 663 574 q 578 394 663 458 q 340 329 494 329 l 57 329 l 57 365 l 150 365 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 375 792 q 584 733 506 792 q 663 574 663 674 m 351 754 l 263 754 l 263 365 l 347 365 q 491 415 442 365 q 540 558 540 465 q 492 703 540 653 q 351 754 443 754 m 383 22 l 383 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 222 l 57 222 l 57 260 l 528 260 l 528 222 l 263 222 l 263 90 q 270 53 263 63 q 311 36 278 43 l 383 22 z \"},\"ℓ\":{\"ha\":540,\"x_min\":22,\"x_max\":497,\"o\":\"m 286 -14 q 164 31 207 -14 q 121 160 121 75 l 121 228 q 110 223 115 225 q 92 215 104 221 q 56 200 68 206 q 32 190 43 194 l 22 218 q 43 227 32 222 q 75 240 54 232 q 104 254 94 250 q 121 261 114 258 l 121 421 q 180 707 121 608 q 347 806 239 806 q 451 758 411 806 q 492 633 492 711 q 428 438 492 526 q 242 286 364 349 q 233 281 239 285 q 222 276 226 278 l 222 185 q 250 90 222 121 q 338 60 278 60 q 408 71 374 60 q 486 108 442 82 l 497 93 q 386 16 444 46 q 286 -14 328 -14 m 319 772 q 247 721 271 772 q 222 569 222 669 l 222 310 l 226 313 q 349 432 308 356 q 389 621 389 508 q 372 733 389 694 q 319 772 354 772 z \"},\"№\":{\"ha\":1375,\"x_min\":54,\"x_max\":1272,\"o\":\"m 304 22 l 304 0 l 54 0 l 54 22 l 99 32 q 139 51 131 40 q 147 90 147 61 l 147 700 q 139 740 147 729 q 99 758 131 750 l 54 768 l 54 792 l 238 792 l 742 174 l 742 604 q 803 856 742 768 q 978 944 865 944 q 1059 930 1024 944 q 1094 894 1094 915 q 1085 872 1094 886 q 1060 838 1076 857 l 1054 838 q 973 892 996 882 q 924 901 950 901 q 827 833 864 901 q 790 643 790 764 l 790 0 l 738 0 l 197 665 l 197 90 q 206 49 197 60 q 246 33 215 39 l 304 22 m 1099 764 q 1223 722 1175 764 q 1271 606 1271 679 q 1220 485 1271 532 q 1096 438 1169 438 q 972 480 1019 438 q 925 596 925 522 q 976 716 925 668 q 1099 764 1028 764 m 1094 738 q 1040 705 1058 738 q 1021 608 1021 672 q 1041 500 1021 538 q 1100 463 1061 463 q 1155 495 1136 463 q 1174 592 1174 528 q 1153 699 1174 661 q 1094 738 1132 738 m 1272 379 l 1272 335 l 925 335 l 925 379 l 1272 379 z \"},\"™\":{\"ha\":1107,\"x_min\":31,\"x_max\":1076,\"o\":\"m 344 382 l 344 363 l 136 363 l 136 382 l 165 386 q 187 395 182 389 q 192 418 192 401 l 192 763 l 108 763 q 78 755 86 763 q 63 726 69 747 l 47 679 l 31 679 l 31 797 l 38 800 q 58 794 46 796 q 85 792 69 792 l 396 792 q 424 794 413 792 q 444 800 436 796 l 453 797 l 453 679 l 433 679 l 419 726 q 404 755 413 747 q 374 763 396 763 l 289 763 l 289 418 q 294 395 289 401 q 314 386 299 389 l 344 382 m 660 382 l 660 363 l 506 363 l 506 382 l 535 386 q 556 396 551 390 q 561 418 561 401 l 561 735 q 556 757 561 751 q 535 765 551 763 l 506 771 l 506 792 l 663 792 l 790 474 l 917 792 l 1076 792 l 1076 771 l 1047 765 q 1026 757 1031 763 q 1021 735 1021 751 l 1021 418 q 1026 396 1021 401 q 1047 386 1031 390 l 1076 382 l 1076 363 l 869 363 l 869 382 l 899 386 q 920 395 915 389 q 925 418 925 401 l 925 719 l 782 358 l 735 358 l 596 701 l 596 418 q 601 394 596 400 q 622 386 607 388 l 660 382 z \"},\"Ω\":{\"ha\":947,\"x_min\":6,\"x_max\":940,\"o\":\"m 940 171 l 906 0 l 528 0 l 528 15 q 698 230 649 133 q 747 443 747 326 q 669 678 747 589 q 461 768 592 768 q 267 690 336 768 q 197 472 197 611 q 244 243 197 342 q 418 15 292 144 l 418 0 l 40 0 l 6 171 l 28 174 l 42 139 q 68 106 51 114 q 129 97 85 97 l 311 97 l 311 101 q 128 285 183 200 q 72 464 72 371 q 185 710 72 615 q 471 806 299 806 q 761 716 649 806 q 874 482 874 626 q 815 285 874 379 q 636 101 756 190 l 636 97 l 817 97 q 877 106 860 97 q 904 139 894 114 l 918 174 l 940 171 z \"},\"℮\":{\"ha\":967,\"x_min\":58,\"x_max\":908,\"o\":\"m 908 367 l 908 357 l 219 357 q 215 356 217 357 q 214 353 214 354 l 214 144 q 216 131 214 138 q 224 119 218 125 q 343 38 275 67 q 485 8 411 8 q 635 41 564 8 q 758 133 706 74 l 819 133 q 671 24 760 64 q 483 -15 582 -15 q 183 97 307 -15 q 58 367 58 208 q 183 639 58 526 q 483 751 307 751 q 784 639 660 751 q 908 367 908 526 m 753 383 l 753 593 q 750 608 753 601 q 742 619 747 614 q 624 700 690 672 q 485 728 558 728 q 343 699 411 728 q 225 615 275 669 q 217 604 219 611 q 214 589 214 597 l 214 383 q 216 380 214 382 q 219 378 218 378 l 749 378 q 751 379 750 378 q 753 383 753 381 z \"},\"⅓\":{\"ha\":656,\"x_min\":18,\"x_max\":635,\"o\":\"m 213 410 l 213 396 l 32 396 l 32 410 l 68 417 q 81 424 78 419 q 85 440 85 429 l 85 688 q 78 719 85 710 q 57 728 72 728 q 45 726 51 728 q 25 721 39 725 l 18 733 l 156 803 l 164 799 q 160 774 161 786 q 160 738 160 761 l 160 440 q 163 423 160 428 q 176 417 167 418 l 213 410 m 536 771 l 88 0 l 53 19 l 503 792 l 536 771 m 635 122 q 582 30 635 67 q 447 -7 529 -7 q 388 4 410 -7 q 367 36 367 15 q 373 56 367 44 q 390 78 379 67 l 396 78 q 437 34 414 49 q 485 19 460 19 q 547 42 524 19 q 571 101 571 64 q 544 160 571 138 q 471 183 517 183 q 447 181 460 183 q 422 175 433 179 l 417 192 q 508 237 481 214 q 536 293 536 260 q 519 330 536 315 q 472 344 501 344 q 418 328 440 344 q 385 281 396 313 l 375 283 q 417 371 383 339 q 504 403 451 403 q 579 381 551 403 q 607 322 607 358 q 588 272 607 293 q 526 236 569 251 l 526 235 q 606 198 576 229 q 635 122 635 167 z \"},\"⅔\":{\"ha\":732,\"x_min\":18,\"x_max\":713,\"o\":\"m 294 507 l 271 396 l 18 396 l 18 404 q 160 560 118 503 q 201 667 201 618 q 183 720 201 701 q 129 739 164 739 q 71 719 94 739 q 31 657 47 699 l 21 657 q 67 761 32 724 q 154 799 101 799 q 242 769 210 799 q 275 692 275 739 q 236 594 275 646 q 110 467 197 542 l 110 464 l 238 464 q 261 469 254 464 q 274 486 268 474 l 281 508 l 294 507 m 613 771 l 164 0 l 129 19 l 579 792 l 613 771 m 713 122 q 660 30 713 67 q 525 -7 607 -7 q 466 4 488 -7 q 444 36 444 15 q 451 56 444 44 q 468 78 457 67 l 474 78 q 515 34 492 49 q 563 19 538 19 q 625 42 601 19 q 649 101 649 64 q 622 160 649 138 q 549 183 594 183 q 524 181 538 183 q 500 175 511 179 l 494 192 q 586 237 558 214 q 614 293 614 260 q 597 330 614 315 q 550 344 579 344 q 496 328 518 344 q 463 281 474 313 l 453 283 q 495 371 461 339 q 582 403 529 403 q 657 381 629 403 q 685 322 685 358 q 666 272 685 293 q 604 236 647 251 l 604 235 q 683 198 654 229 q 713 122 713 167 z \"},\"⅛\":{\"ha\":672,\"x_min\":18,\"x_max\":654,\"o\":\"m 213 410 l 213 396 l 32 396 l 32 410 l 68 417 q 81 424 78 419 q 85 440 85 429 l 85 688 q 78 719 85 710 q 57 728 72 728 q 45 726 51 728 q 25 721 39 725 l 18 733 l 156 803 l 164 799 q 160 774 161 786 q 160 738 160 761 l 160 440 q 163 423 160 428 q 176 417 167 418 l 213 410 m 536 771 l 88 0 l 53 19 l 503 792 l 536 771 m 564 225 q 634 171 614 197 q 654 110 654 144 q 614 24 654 56 q 507 -7 574 -7 q 409 20 444 -7 q 374 96 374 47 q 394 155 374 129 q 456 197 414 181 q 409 240 424 217 q 394 294 394 264 q 431 373 394 343 q 526 403 467 403 q 606 379 576 403 q 636 314 636 356 q 617 261 636 285 q 564 225 599 238 m 518 378 q 474 365 490 378 q 457 328 457 351 q 474 283 457 303 q 546 235 490 264 q 571 267 563 247 q 579 311 579 286 q 563 360 579 343 q 518 378 547 378 m 472 189 q 447 153 456 174 q 439 106 439 132 q 460 41 439 65 q 515 17 481 17 q 567 34 547 17 q 588 79 588 51 q 578 117 588 100 q 546 149 568 133 q 506 172 533 158 q 472 189 479 185 z \"},\"⅜\":{\"ha\":739,\"x_min\":11,\"x_max\":721,\"o\":\"m 279 518 q 226 426 279 463 q 92 389 174 389 q 33 400 54 389 q 11 432 11 411 q 17 451 11 440 q 35 474 24 463 l 40 474 q 81 430 58 444 q 129 415 104 415 q 192 438 168 415 q 215 497 215 460 q 188 556 215 533 q 115 579 161 579 q 91 577 104 579 q 67 571 78 575 l 61 588 q 153 633 125 610 q 181 689 181 656 q 163 726 181 711 q 117 740 146 740 q 63 724 85 740 q 29 676 40 708 l 19 679 q 62 767 28 735 q 149 799 96 799 q 224 776 196 799 q 251 718 251 754 q 233 668 251 689 q 171 632 214 647 l 171 631 q 250 594 221 625 q 279 518 279 563 m 601 771 l 153 0 l 118 19 l 568 792 l 601 771 m 631 225 q 701 171 681 197 q 721 110 721 144 q 681 24 721 56 q 574 -7 640 -7 q 476 20 511 -7 q 440 96 440 47 q 460 155 440 129 q 522 197 481 181 q 476 240 490 217 q 461 294 461 264 q 497 373 461 343 q 593 403 533 403 q 673 379 643 403 q 703 314 703 356 q 684 261 703 285 q 631 225 665 238 m 585 378 q 540 365 557 378 q 524 328 524 351 q 540 283 524 303 q 613 235 557 264 q 638 267 629 247 q 646 311 646 286 q 630 360 646 343 q 585 378 614 378 m 539 189 q 514 153 522 174 q 506 106 506 132 q 526 41 506 65 q 582 17 547 17 q 634 34 614 17 q 654 79 654 51 q 644 117 654 100 q 613 149 635 133 q 573 172 600 158 q 539 189 546 185 z \"},\"⅝\":{\"ha\":728,\"x_min\":10,\"x_max\":710,\"o\":\"m 267 525 q 218 426 267 464 q 89 389 169 389 q 31 400 51 389 q 10 432 10 411 q 16 451 10 440 q 33 474 22 463 l 39 474 q 81 429 58 443 q 132 415 103 415 q 184 435 165 415 q 203 490 203 456 q 164 556 203 531 q 49 588 125 581 l 46 590 l 81 792 l 263 792 l 253 721 l 93 721 l 83 656 q 218 613 169 647 q 267 525 267 578 m 590 771 l 142 0 l 107 19 l 557 792 l 590 771 m 619 225 q 690 171 669 197 q 710 110 710 144 q 669 24 710 56 q 563 -7 629 -7 q 465 20 500 -7 q 429 96 429 47 q 449 155 429 129 q 511 197 469 181 q 465 240 479 217 q 450 294 450 264 q 486 373 450 343 q 582 403 522 403 q 662 379 632 403 q 692 314 692 356 q 673 261 692 285 q 619 225 654 238 m 574 378 q 529 365 546 378 q 513 328 513 351 q 529 283 513 303 q 601 235 546 264 q 626 267 618 247 q 635 311 635 286 q 619 360 635 343 q 574 378 603 378 m 528 189 q 503 153 511 174 q 494 106 494 132 q 515 41 494 65 q 571 17 536 17 q 623 34 603 17 q 643 79 643 51 q 633 117 643 100 q 601 149 624 133 q 562 172 589 158 q 528 189 535 185 z \"},\"⅞\":{\"ha\":740,\"x_min\":26,\"x_max\":722,\"o\":\"m 286 782 l 128 396 l 81 396 l 81 404 l 236 721 l 79 721 q 56 716 63 721 q 44 696 50 711 l 38 674 l 26 676 l 36 792 l 286 792 l 286 782 m 603 771 l 154 0 l 119 19 l 569 792 l 603 771 m 632 225 q 702 171 682 197 q 722 110 722 144 q 682 24 722 56 q 575 -7 642 -7 q 477 20 513 -7 q 442 96 442 47 q 462 155 442 129 q 524 197 482 181 q 477 240 492 217 q 463 294 463 264 q 499 373 463 343 q 594 403 535 403 q 674 379 644 403 q 704 314 704 356 q 685 261 704 285 q 632 225 667 238 m 586 378 q 542 365 558 378 q 525 328 525 351 q 542 283 525 303 q 614 235 558 264 q 639 267 631 247 q 647 311 647 286 q 631 360 647 343 q 586 378 615 378 m 540 189 q 515 153 524 174 q 507 106 507 132 q 528 41 507 65 q 583 17 549 17 q 635 34 615 17 q 656 79 656 51 q 646 117 656 100 q 614 149 636 133 q 574 172 601 158 q 540 189 547 185 z \"},\"←\":{\"ha\":924,\"x_min\":25,\"x_max\":899,\"o\":\"m 25 400 l 25 418 q 188 492 107 442 q 317 601 269 543 l 333 592 q 320 543 325 568 q 315 493 315 518 q 333 444 315 461 q 382 426 350 426 q 606 440 490 426 q 814 479 722 454 l 833 475 l 899 418 l 899 400 l 833 343 l 814 339 q 606 378 722 364 q 382 392 490 392 q 333 374 350 392 q 315 325 315 357 q 320 275 315 300 q 333 226 325 250 l 317 217 q 188 326 269 275 q 25 400 107 376 z \"},\"↑\":{\"ha\":436,\"x_min\":25,\"x_max\":410,\"o\":\"m 210 846 l 226 846 q 299 685 249 767 q 410 554 350 604 l 401 538 q 351 551 375 547 q 301 556 326 556 q 252 539 269 556 q 235 490 235 522 q 249 266 235 382 q 288 57 263 150 l 283 39 l 226 -25 l 208 -25 l 153 39 l 149 57 q 188 266 174 150 q 201 490 201 382 q 184 539 201 522 q 133 556 167 556 q 85 551 110 556 q 35 538 61 547 l 25 554 q 136 684 85 603 q 210 846 188 765 z \"},\"→\":{\"ha\":924,\"x_min\":25,\"x_max\":899,\"o\":\"m 899 418 l 899 400 q 735 326 817 376 q 607 217 654 275 l 590 226 q 603 275 599 250 q 608 325 608 300 q 591 374 608 357 q 542 392 574 392 q 317 378 433 392 q 110 339 201 364 l 90 343 l 25 400 l 25 418 l 90 475 l 110 479 q 317 440 201 454 q 542 426 433 426 q 591 444 574 426 q 608 493 608 461 q 603 543 608 518 q 590 592 599 568 l 607 601 q 735 492 654 543 q 899 418 817 442 z \"},\"↓\":{\"ha\":436,\"x_min\":25,\"x_max\":410,\"o\":\"m 226 -25 l 210 -25 q 135 135 186 54 q 25 265 85 217 l 35 282 q 85 268 61 272 q 133 264 110 264 q 184 281 167 264 q 201 331 201 299 q 188 555 201 439 q 149 763 174 671 l 153 781 l 208 846 l 226 846 l 283 781 l 288 763 q 249 555 263 671 q 235 331 235 439 q 252 281 235 299 q 301 264 269 264 q 351 268 326 264 q 401 282 375 272 l 410 265 q 300 135 351 217 q 226 -25 249 54 z \"},\"↔\":{\"ha\":1090,\"x_min\":25,\"x_max\":1065,\"o\":\"m 1065 418 l 1065 401 q 918 328 993 379 q 796 219 843 278 l 778 229 q 791 278 786 254 q 796 326 796 303 q 780 376 796 358 q 736 394 764 394 q 636 374 703 394 q 556 350 569 354 l 535 350 q 454 374 521 354 q 354 394 388 394 q 310 376 326 394 q 294 326 294 358 q 299 278 294 303 q 313 229 304 254 l 294 219 q 174 328 249 278 q 25 401 99 379 l 25 418 q 174 491 99 440 q 294 600 249 542 l 313 590 q 299 542 304 567 q 294 494 294 518 q 310 444 294 463 q 354 426 326 426 q 395 431 372 426 q 468 451 418 436 q 510 463 496 460 l 535 469 l 556 469 l 581 463 q 622 451 594 460 q 695 431 672 436 q 736 426 718 426 q 780 444 764 426 q 796 494 796 463 q 791 542 796 518 q 778 590 786 567 l 796 600 q 918 491 843 542 q 1065 418 993 440 z \"},\"↕\":{\"ha\":432,\"x_min\":25,\"x_max\":406,\"o\":\"m 224 -122 l 207 -122 q 135 24 185 -50 q 25 146 85 99 l 35 164 q 84 151 60 156 q 132 146 108 146 q 182 162 164 146 q 200 206 200 178 q 180 306 200 239 q 156 386 160 372 l 156 407 q 180 488 160 421 q 200 588 200 554 q 182 631 200 615 q 132 647 164 647 q 84 642 108 647 q 35 629 60 638 l 25 647 q 134 768 83 693 q 207 917 185 843 l 224 917 q 297 768 246 843 q 406 647 347 693 l 396 629 q 348 642 372 638 q 300 647 324 647 q 250 631 268 647 q 232 588 232 615 q 237 547 232 569 q 257 474 242 524 q 268 432 265 446 l 275 407 l 275 386 l 268 361 q 257 319 265 347 q 237 247 242 269 q 232 206 232 224 q 250 162 232 178 q 300 146 268 146 q 348 151 324 146 q 396 164 372 156 l 406 146 q 296 24 346 99 q 224 -122 246 -50 z \"},\"↖\":{\"ha\":682,\"x_min\":25,\"x_max\":654,\"o\":\"m 25 710 l 38 722 q 204 659 111 681 q 374 646 297 638 l 379 626 q 299 573 325 599 q 274 522 274 547 q 279 498 274 510 q 296 475 285 486 q 456 334 358 411 q 639 207 554 257 l 649 192 l 654 106 l 643 93 l 556 99 l 540 108 q 417 285 492 190 q 272 451 343 379 q 249 468 260 463 q 225 474 238 474 q 172 447 199 474 q 119 369 144 421 l 101 374 q 88 543 110 450 q 25 710 67 636 z \"},\"↗\":{\"ha\":682,\"x_min\":28,\"x_max\":656,\"o\":\"m 644 722 l 656 710 q 594 543 615 636 q 581 374 572 450 l 561 369 q 510 447 536 421 q 457 474 483 474 q 433 468 444 474 q 410 451 421 463 q 265 287 340 382 q 142 108 190 192 l 126 99 l 39 93 l 28 106 l 33 192 l 43 207 q 223 332 126 256 q 386 475 319 408 q 403 498 397 486 q 408 522 408 510 q 383 573 408 547 q 303 626 357 599 l 308 646 q 478 659 385 638 q 644 722 571 681 z \"},\"↘\":{\"ha\":682,\"x_min\":28,\"x_max\":656,\"o\":\"m 656 104 l 644 90 q 479 153 572 131 q 308 168 386 175 l 303 186 q 382 240 356 214 q 408 292 408 265 q 403 315 408 304 q 386 338 397 326 q 224 481 321 404 q 43 606 126 557 l 33 622 l 28 708 l 39 721 l 126 715 l 142 706 q 265 527 190 622 q 410 361 339 432 q 433 344 421 350 q 457 339 444 339 q 510 366 483 339 q 561 444 538 393 l 581 439 q 594 269 572 363 q 656 104 615 176 z \"},\"↙\":{\"ha\":682,\"x_min\":25,\"x_max\":654,\"o\":\"m 38 90 l 25 104 q 88 269 67 176 q 101 439 110 361 l 119 444 q 172 366 144 393 q 225 339 199 339 q 249 344 238 339 q 272 361 260 350 q 417 528 343 433 q 540 706 492 624 l 556 715 l 643 721 l 654 708 l 649 622 l 639 606 q 455 478 553 556 q 296 338 357 401 q 279 315 285 326 q 274 292 274 304 q 300 240 274 265 q 379 186 326 214 l 374 168 q 203 153 296 175 q 38 90 110 131 z \"},\"∂\":{\"ha\":638,\"x_min\":39,\"x_max\":592,\"o\":\"m 592 304 q 477 629 592 492 q 160 814 363 767 l 154 792 q 389 613 307 735 q 471 324 471 492 q 425 101 471 183 q 300 19 379 19 q 194 74 233 19 q 154 221 154 129 q 197 366 154 314 q 317 418 239 418 q 374 410 346 418 q 425 386 401 401 l 438 403 q 347 462 404 436 q 256 488 289 488 q 99 423 160 488 q 39 258 39 358 q 116 63 39 139 q 313 -14 193 -14 q 515 73 438 -14 q 592 304 592 160 z \"},\"∆\":{\"ha\":728,\"x_min\":21,\"x_max\":707,\"o\":\"m 707 25 l 707 0 l 21 0 l 21 25 q 35 45 29 35 q 49 74 42 56 l 338 800 l 388 800 l 678 74 q 693 42 688 51 q 707 25 699 32 m 129 38 l 533 38 q 559 46 553 38 q 558 69 565 54 l 325 660 l 104 68 q 103 44 97 51 q 129 38 110 38 z \"},\"∏\":{\"ha\":953,\"x_min\":57,\"x_max\":896,\"o\":\"m 896 22 l 896 0 l 597 0 l 597 22 l 643 32 q 683 51 675 40 q 692 90 692 61 l 692 753 l 261 753 l 261 90 q 269 51 261 61 q 310 32 278 40 l 356 22 l 356 0 l 57 0 l 57 22 l 101 32 q 142 51 133 40 q 150 90 150 61 l 150 700 q 142 740 150 729 q 101 758 133 750 l 57 768 l 57 792 l 896 792 l 896 768 l 851 758 q 811 740 819 750 q 803 700 803 729 l 803 90 q 811 51 803 61 q 851 32 819 40 l 896 22 z \"},\"∑\":{\"ha\":760,\"x_min\":47,\"x_max\":688,\"o\":\"m 688 214 l 669 0 l 47 0 l 47 18 l 299 353 l 61 772 l 61 792 l 539 792 q 581 794 563 792 q 619 803 600 797 l 629 800 l 629 599 l 607 599 l 576 700 q 551 741 568 729 q 499 753 535 753 l 200 753 l 394 410 l 156 93 l 560 97 q 608 106 593 97 q 635 143 622 115 l 665 214 l 688 214 z \"},\"−\":{\"ha\":694,\"x_min\":92,\"x_max\":601,\"o\":\"m 601 353 l 601 311 l 92 311 l 92 353 l 601 353 z \"},\"∕\":{\"ha\":267,\"x_min\":-108,\"x_max\":375,\"o\":\"m 375 771 l -74 0 l -108 19 l 342 792 l 375 771 z \"},\"√\":{\"ha\":833,\"x_min\":83,\"x_max\":807,\"o\":\"m 807 993 l 444 0 l 399 0 l 218 450 l 83 450 l 83 492 l 278 492 l 436 94 l 764 993 l 807 993 z \"},\"∞\":{\"ha\":979,\"x_min\":29,\"x_max\":949,\"o\":\"m 483 303 q 372 145 428 190 q 244 100 317 100 q 88 163 146 100 q 29 338 29 226 q 89 510 29 446 q 244 575 149 575 q 381 528 324 575 q 493 369 439 482 q 602 528 546 481 q 732 575 658 575 q 889 511 829 575 q 949 339 949 447 q 889 165 949 229 q 732 100 829 100 q 594 146 651 100 q 483 303 538 192 m 246 536 q 117 483 165 536 q 69 338 69 431 q 117 192 69 244 q 246 139 165 139 q 360 181 310 139 q 467 338 410 224 q 364 492 414 449 q 246 536 314 536 m 908 339 q 860 483 908 429 q 731 536 811 536 q 617 494 667 536 q 508 335 567 451 q 614 182 564 225 q 731 139 664 139 q 860 192 813 139 q 908 339 908 246 z \"},\"∫\":{\"ha\":363,\"x_min\":-144,\"x_max\":507,\"o\":\"m -28 -389 q -109 -374 -74 -389 q -144 -339 -144 -360 q -135 -316 -144 -331 q -110 -282 -126 -301 l -104 -282 q -31 -335 -60 -319 q 26 -350 -1 -350 q 103 -299 78 -350 q 129 -144 129 -247 l 129 551 q 194 846 129 747 q 390 944 260 944 q 472 930 436 944 q 507 894 507 915 q 498 872 507 886 q 472 838 489 857 l 467 838 q 393 890 422 875 q 335 906 364 906 q 258 854 283 906 q 232 700 232 803 l 232 4 q 167 -290 232 -192 q -28 -389 103 -389 z \"},\"≈\":{\"ha\":694,\"x_min\":78,\"x_max\":615,\"o\":\"m 465 404 q 416 411 442 404 q 340 442 390 418 q 271 469 294 463 q 226 476 247 476 q 167 461 193 476 q 108 407 140 446 l 78 432 q 148 498 111 478 q 231 518 185 518 q 281 511 254 518 q 357 481 307 504 q 424 453 401 460 q 468 447 447 447 q 527 463 501 447 q 585 515 553 478 l 615 489 q 546 424 582 444 q 465 404 510 404 m 465 172 q 416 179 442 172 q 340 210 390 186 q 271 238 294 231 q 226 244 247 244 q 167 229 193 244 q 108 175 140 214 l 78 200 q 148 266 111 246 q 231 286 185 286 q 281 279 254 286 q 357 249 307 272 q 424 222 401 228 q 468 215 447 215 q 527 231 501 215 q 585 283 553 246 l 615 257 q 546 192 582 213 q 465 172 510 172 z \"},\"≠\":{\"ha\":694,\"x_min\":92,\"x_max\":601,\"o\":\"m 288 192 l 185 1 l 151 19 l 244 192 l 92 192 l 92 235 l 268 235 l 374 432 l 92 432 l 92 474 l 397 474 l 499 663 l 532 644 l 440 474 l 601 474 l 601 432 l 417 432 l 311 235 l 601 235 l 601 192 l 288 192 z \"},\"≤\":{\"ha\":694,\"x_min\":92,\"x_max\":601,\"o\":\"m 601 274 l 601 231 l 92 447 l 92 490 l 601 708 l 601 665 l 142 469 l 601 274 m 601 40 l 601 0 l 92 0 l 92 40 l 601 40 z \"},\"≥\":{\"ha\":694,\"x_min\":92,\"x_max\":601,\"o\":\"m 601 490 l 601 447 l 92 231 l 92 274 l 553 469 l 92 665 l 92 708 l 601 490 m 601 40 l 601 0 l 92 0 l 92 40 l 601 40 z \"},\"◊\":{\"ha\":693,\"x_min\":44,\"x_max\":647,\"o\":\"m 647 472 l 364 0 l 328 0 l 44 472 l 328 944 l 364 944 l 647 472 m 346 893 l 94 472 l 346 50 l 597 472 l 346 893 z \"},\"\":{\"ha\":694,\"x_min\":329,\"x_max\":485,\"o\":\"m 485 -151 q 447 -248 485 -207 q 336 -308 408 -289 l 329 -285 q 411 -244 383 -268 q 439 -190 439 -221 q 421 -153 439 -168 q 347 -118 403 -137 q 372 -76 358 -87 q 408 -65 386 -65 q 464 -89 443 -65 q 485 -151 485 -112 z \"},\"ﬀ\":{\"ha\":747,\"x_min\":26,\"x_max\":829,\"o\":\"m 279 19 l 279 0 l 29 0 l 29 19 l 69 29 q 96 43 89 33 q 103 76 103 53 l 103 432 l 26 432 l 26 453 l 103 493 l 103 525 q 174 825 103 724 q 381 926 244 926 q 469 915 426 926 q 546 883 511 904 q 619 929 578 914 q 713 944 661 944 q 793 930 757 944 q 829 894 829 915 q 820 872 829 886 q 794 838 811 857 l 788 838 q 715 890 743 875 q 657 906 686 906 q 580 854 606 906 q 554 700 554 803 l 554 496 l 731 496 l 731 432 l 554 432 l 554 76 q 560 44 554 53 q 588 32 567 35 l 656 19 l 656 0 l 378 0 l 378 19 l 418 29 q 444 43 438 33 q 451 76 451 53 l 451 432 l 206 432 l 206 76 q 213 43 206 53 q 239 29 219 33 l 279 19 m 331 888 q 240 831 274 888 q 206 674 206 774 l 206 496 l 451 496 l 451 551 q 462 694 451 632 q 493 803 472 757 q 406 869 442 850 q 331 888 369 888 z \"},\"ﬁ\":{\"ha\":647,\"x_min\":26,\"x_max\":628,\"o\":\"m 279 19 l 279 0 l 29 0 l 29 19 l 69 29 q 96 43 89 33 q 103 76 103 53 l 103 432 l 26 432 l 26 453 l 103 493 l 103 543 q 175 843 103 742 q 386 944 247 944 q 503 922 451 944 q 554 869 554 900 q 543 839 554 857 q 504 789 532 821 l 496 789 q 390 882 425 858 q 325 906 356 906 q 238 850 271 906 q 206 692 206 794 l 206 496 l 433 496 q 490 499 461 496 q 550 510 519 503 l 561 504 q 556 458 557 481 q 554 385 554 436 l 554 76 q 561 43 554 53 q 588 29 568 33 l 628 19 l 628 0 l 378 0 l 378 19 l 418 29 q 444 43 438 33 q 451 76 451 53 l 451 386 q 440 422 451 411 q 403 432 429 432 l 206 432 l 206 76 q 213 43 206 53 q 239 29 219 33 l 279 19 z \"},\"ﬂ\":{\"ha\":649,\"x_min\":26,\"x_max\":628,\"o\":\"m 279 19 l 279 0 l 29 0 l 29 19 l 69 29 q 96 43 89 33 q 103 76 103 53 l 103 432 l 26 432 l 26 453 l 103 493 l 103 543 q 174 843 103 742 q 381 944 244 944 q 438 940 410 944 q 496 926 465 936 l 550 944 l 561 938 q 556 893 557 915 q 554 818 554 871 l 554 76 q 561 43 554 53 q 588 29 568 33 l 628 19 l 628 0 l 378 0 l 378 19 l 418 29 q 444 43 438 33 q 451 76 451 53 l 451 432 l 206 432 l 206 76 q 213 43 206 53 q 239 29 219 33 l 279 19 m 333 906 q 240 849 274 906 q 206 692 206 793 l 206 496 l 451 496 l 451 838 q 384 894 407 882 q 333 906 361 906 z \"},\"ﬃ\":{\"ha\":996,\"x_min\":26,\"x_max\":976,\"o\":\"m 279 19 l 279 0 l 29 0 l 29 19 l 69 29 q 96 43 89 33 q 103 76 103 53 l 103 432 l 26 432 l 26 453 l 103 493 l 103 525 q 174 825 103 724 q 381 926 244 926 q 474 914 429 926 q 554 878 518 901 q 633 928 589 911 q 735 944 678 944 q 851 922 800 944 q 903 869 903 900 q 892 839 903 857 q 853 789 881 821 l 844 789 q 739 882 774 858 q 674 906 704 906 q 586 850 618 906 q 554 692 554 794 l 554 496 l 782 496 q 839 499 810 496 q 899 510 868 503 l 908 504 q 903 449 904 475 q 901 385 901 424 l 901 76 q 908 43 901 53 q 935 29 915 33 l 976 19 l 976 0 l 726 0 l 726 19 l 767 29 q 793 43 786 33 q 800 76 800 53 l 800 386 q 789 422 800 411 q 751 432 778 432 l 554 432 l 554 76 q 561 43 554 53 q 588 29 568 33 l 628 19 l 628 0 l 378 0 l 378 19 l 418 29 q 444 43 438 33 q 451 76 451 53 l 451 432 l 206 432 l 206 76 q 213 43 206 53 q 239 29 219 33 l 279 19 m 331 888 q 240 831 274 888 q 206 674 206 774 l 206 496 l 451 496 l 451 543 q 463 685 451 622 q 497 799 474 749 q 409 867 446 847 q 331 888 372 888 z \"},\"ﬄ\":{\"ha\":997,\"x_min\":26,\"x_max\":976,\"o\":\"m 279 19 l 279 0 l 29 0 l 29 19 l 69 29 q 96 43 89 33 q 103 76 103 53 l 103 432 l 26 432 l 26 453 l 103 493 l 103 525 q 174 825 103 724 q 381 926 244 926 q 473 914 428 926 q 553 879 518 901 q 631 928 588 911 q 729 944 675 944 q 786 940 758 944 q 843 926 814 936 l 899 944 l 908 938 q 903 883 904 910 q 901 818 901 857 l 901 76 q 908 43 901 53 q 935 29 915 33 l 976 19 l 976 0 l 726 0 l 726 19 l 767 29 q 793 43 786 33 q 800 76 800 53 l 800 432 l 554 432 l 554 76 q 561 43 554 53 q 588 29 568 33 l 628 19 l 628 0 l 378 0 l 378 19 l 418 29 q 444 43 438 33 q 451 76 451 53 l 451 432 l 206 432 l 206 76 q 213 43 206 53 q 239 29 219 33 l 279 19 m 681 906 q 588 849 622 906 q 554 692 554 793 l 554 496 l 800 496 l 800 838 q 731 894 753 883 q 681 906 708 906 m 331 888 q 240 831 274 888 q 206 674 206 774 l 206 496 l 451 496 l 451 543 q 463 685 451 621 q 497 800 475 750 q 409 868 446 849 q 331 888 372 888 z \"},\"ﬆ\":{\"ha\":868,\"x_min\":42,\"x_max\":851,\"o\":\"m 401 136 q 348 27 401 68 q 215 -14 294 -14 q 134 -5 175 -14 q 58 19 93 4 l 42 161 l 63 161 q 126 54 86 92 q 217 17 165 17 q 283 38 258 17 q 307 99 307 60 q 288 153 307 129 q 201 210 268 176 q 94 287 121 251 q 68 371 68 322 q 116 472 68 433 q 242 510 164 510 q 178 594 200 547 q 156 694 156 642 q 225 867 156 803 q 404 931 294 931 q 581 861 514 931 q 647 675 647 792 l 647 496 l 839 496 l 839 432 l 647 432 l 647 157 q 673 84 647 108 q 750 60 699 60 q 795 65 774 60 q 843 83 817 71 l 851 65 q 763 9 814 32 q 681 -14 713 -14 q 582 19 618 -14 q 546 111 546 53 l 546 432 l 474 432 l 474 449 q 578 533 543 478 q 613 668 613 589 q 556 838 613 776 q 400 900 499 900 q 247 845 304 900 q 189 694 189 790 q 216 590 189 639 q 296 504 243 542 q 340 492 318 500 q 379 475 361 485 l 382 361 l 363 361 q 315 451 344 421 q 244 481 285 481 q 184 460 207 481 q 161 407 161 440 q 181 353 161 376 q 267 296 201 329 q 375 220 349 256 q 401 136 401 185 z \"}},\"familyName\":\"TRY Galien\",\"ascender\":1206,\"descender\":-389,\"underlinePosition\":-194,\"underlineThickness\":29,\"boundingBox\":{\"yMin\":-389,\"xMin\":-181,\"yMax\":1206,\"xMax\":1319},\"resolution\":1000,\"original_font_information\":{\"format\":0,\"copyright\":\"Copyright 2019 Black Foundry\",\"fontFamily\":\"TRY Galien\",\"fontSubfamily\":\"Regular\",\"uniqueID\":\"TRYGalien-Regular:BlackFoundry:1.0\",\"fullName\":\"TRY Galien\",\"version\":\"Version 1.0\",\"postScriptName\":\"TRYGalien-Regular\",\"trademark\":\"Galien is a trademark of Black Foundry\",\"manufacturer\":\"BlackFoundry\",\"designer\":\"BlackFoundry\",\"description\":\"Copyright 2019 BlackFoundry\",\"manufacturerURL\":\"www.black-foundry.com\",\"designerURL\":\"www.black-foundry.com\",\"licence\":\"Trial version for non-commercial use only\",\"licenceURL\":\"https://black-foundry.com/licensing/\",\"unknown1\":\"Arrows\"},\"cssFontWeight\":\"normal\",\"cssFontStyle\":\"normal\"}");

/***/ }),

/***/ "./components/SphereSlider/index.js":
/*!******************************************!*\
  !*** ./components/SphereSlider/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SphereSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SphereSlider */ "./components/SphereSlider/SphereSlider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SphereSlider__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./glsl/fragment.glsl":
/*!****************************!*\
  !*** ./glsl/fragment.glsl ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float uTime;\nvarying vec3 vPosition;\n\nvarying vec2 vUv;\n\nvoid main() {\n  // gl_FragColor = vec4(0., 1., 0., 1.);\n  // vec4 text = textture2D(uTextureNext, vUv);\n  gl_FragColor = vec4(0., 1., 0., 1.);\n}");

/***/ }),

/***/ "./glsl/vertex.glsl":
/*!**************************!*\
  !*** ./glsl/vertex.glsl ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec3 vPosition;\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vPosition = position;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign(_Object$assign({}, data), {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign(_Object$assign({}, routeInfo), {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/text-slider.js":
/*!******************************!*\
  !*** ./pages/text-slider.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_SphereSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SphereSlider */ "./components/SphereSlider/index.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/msi/hello-next/pages/text-slider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const TextSlider = () => __jsx("div", {
  className: _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.root,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_components_SphereSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (TextSlider);

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "root___2uBBt"
};

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/text-slider.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/msi/hello-next/pages/text-slider.js */"./pages/text-slider.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three");

/***/ }),

/***/ "three-orbitcontrols":
/*!**************************************!*\
  !*** external "three-orbitcontrols" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("three-orbitcontrols");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=text-slider.js.map