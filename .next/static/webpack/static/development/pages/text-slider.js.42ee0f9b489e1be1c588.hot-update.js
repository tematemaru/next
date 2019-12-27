webpackHotUpdate("static/development/pages/text-slider.js",{

/***/ "./glsl/fragment.glsl":
/*!****************************!*\
  !*** ./glsl/fragment.glsl ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform float uTime;\nvarying vec3 vPosition;\n\nvarying vec2 vUv;\n\nvoid main() {\n  // gl_FragColor = vec4(0., 1., 0., 1.);\n  // vec4 text = textture2D(uTextureNext, vUv);\n  gl_FragColor = vec4(vUv, 0., 1.);\n}");

/***/ })

})
//# sourceMappingURL=text-slider.js.42ee0f9b489e1be1c588.hot-update.js.map