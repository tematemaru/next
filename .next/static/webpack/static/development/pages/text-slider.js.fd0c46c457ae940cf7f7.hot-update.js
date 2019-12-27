webpackHotUpdate("static/development/pages/text-slider.js",{

/***/ "./glsl/vertex.glsl":
/*!**************************!*\
  !*** ./glsl/vertex.glsl ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ifdef GL_ES\nprecision mediump float;\n#endif\n\nattribute vec3 position;\nvarying vec3 vPosition;\n\nvoid main() {\n  vPosition = position;\n  gl_Position =  vec4(position, 1.0);\n}");

/***/ })

})
//# sourceMappingURL=text-slider.js.fd0c46c457ae940cf7f7.hot-update.js.map