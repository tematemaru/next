webpackHotUpdate("static/development/pages/text-slider.js",{

/***/ "./glsl/vertex.glsl":
/*!**************************!*\
  !*** ./glsl/vertex.glsl ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("attribute vec3 position;\nvarying vec2 vUv;\nuniform vec2 u_size;\nuniform vec2 u_resolution;\nvoid main() {\n  vUv = (position.xy+1.0)*0.3;\n  gl_Position =  vec4(position, 1.0);\n}");

/***/ })

})
//# sourceMappingURL=text-slider.js.d32b987719d9b87072a7.hot-update.js.map