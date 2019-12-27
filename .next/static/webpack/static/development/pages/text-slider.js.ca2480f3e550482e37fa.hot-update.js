webpackHotUpdate("static/development/pages/text-slider.js",{

/***/ "./glsl/vertex.glsl":
/*!**************************!*\
  !*** ./glsl/vertex.glsl ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ifdef GL_ES\nprecision mediump float;\n#endif\n\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec3 vPosition;\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vPosition = position;\n  gl_Position =  vec4(position, 1.0);\n}");

/***/ })

})
//# sourceMappingURL=text-slider.js.ca2480f3e550482e37fa.hot-update.js.map