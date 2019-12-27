webpackHotUpdate("static/development/pages/text-slider.js",{

/***/ "./glsl/fragment.glsl":
/*!****************************!*\
  !*** ./glsl/fragment.glsl ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float uTime;\nvarying vec3 vPosition;\n\nvarying vec2 vUv;\n\nvoid main() {\n  // gl_FragColor = vec4(0., 1., 0., 1.);\n  gl_FragColor = vec4(vPosition, 1.);\n}");

/***/ })

})
//# sourceMappingURL=text-slider.js.8d1d4ee5fa849b4e0047.hot-update.js.map