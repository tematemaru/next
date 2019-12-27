webpackHotUpdate("static/development/pages/text-slider.js",{

/***/ "./glsl/vertex.glsl":
/*!**************************!*\
  !*** ./glsl/vertex.glsl ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec3 vPosition;\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vPosition = position;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}");

/***/ })

})
//# sourceMappingURL=text-slider.js.381601506bc63ec8dec8.hot-update.js.map