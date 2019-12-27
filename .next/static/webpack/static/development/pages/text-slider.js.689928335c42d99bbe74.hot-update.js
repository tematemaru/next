webpackHotUpdate("static/development/pages/text-slider.js",{

/***/ "./glsl/vertex.glsl":
/*!**************************!*\
  !*** ./glsl/vertex.glsl ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("// uniform vec2 uOffset;\n// uniform vec2 uvRate1;\n// uniform float uScale;\n// uniform float uBlend;\n\n// varying vec2 vUv;\n// varying vec2 vUv1;\n\n// float parabola( float x, float k ){\n//     return pow( 3.920*x*(1.0-x), k );\n// }\n\nvoid main() {\n  vUv = uv;\n  // vec2 _uv = uv - 0.5;\n  // vUv1 = _uv;\n  // vUv1 *= uvRate1.xy * mix(1., 0.9, parabola(uBlend, 3.));\n\n  // vUv1 /= uvRate1.y / uvRate1.x;\n  // vUv1 += 0.5;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}");

/***/ })

})
//# sourceMappingURL=text-slider.js.689928335c42d99bbe74.hot-update.js.map