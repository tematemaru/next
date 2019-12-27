webpackHotUpdate("static/development/pages/text-slider.js",{

/***/ "./glsl/fragment.glsl":
/*!****************************!*\
  !*** ./glsl/fragment.glsl ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// uniform sampler2D uTexture;\n// uniform sampler2D uTextureNext;\n// uniform float uBlend;\nuniform float uTime;\n// uniform vec2 uvRate1;\n\nvarying vec2 vUv;\n// varying vec2 vUv1;\n\n// float parabola( float x, float k ){\n//   return pow( 4.0*x*(1.0-x), k );\n// }\n\nvoid main() {\n  // vec2 vuv_offset = vUv1;\n  // float mask = step(1. - uBlend, vuv_offset.x);\n  // vec4 curent = texture2D(uTexture, vec2(vuv_offset.x, vuv_offset.y)) * (1. - mask);\n  // vec4 next = texture2D(uTextureNext, vec2(vUv1.x, vUv1.y)) * mask;\n  // vec4 res = curent + next;\n  gl_FragColor = vec4(0., 1., 0., 1.);\n}");

/***/ })

})
//# sourceMappingURL=text-slider.js.de5bbcfddbf73c15ffa3.hot-update.js.map