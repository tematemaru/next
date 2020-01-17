webpackHotUpdate("static/development/pages/text-slider.js",{

/***/ "./components/SphereSlider/fragment.glsl":
/*!***********************************************!*\
  !*** ./components/SphereSlider/fragment.glsl ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("precision mediump float;\nprecision mediump int;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n// varying vec2 vUv;\n\nuniform sampler2D uSampler;\n// uniform sampler2D uTexture;\nuniform float time;\nuniform float blend;\nuniform float offset;\n\nfloat length = 10.;\n\nmat2 scale(vec2 _scale){\n  return mat2(_scale.x, 0.0, 0.0, _scale.y);\n}\n\nmat3 k = mat3(\n  -0.3, 0., 1.,\n  -0.4, 0., 1.,\n  2., 0., 1.\n);\n\nfloat displaceAmount = 0.3;\n\nvec2 mirrored(vec2 v) {\n\tvec2 m = mod(v,2.);\n\treturn mix(m,2.0 - m, step(1.0 ,m));\n}\n\nvoid main()\t{\n  // invert blend;\n  vec2 vUv = vTextureCoord;\n  float blend2 = 1.-blend;\n  vec4 image1 = texture2D(uSampler, vec2(vUv.x, vUv.y + blend));\n  vec4 image2 = texture2D(uSampler, vec2(vUv.x, vUv.y + blend));\n\n  float t1 = ((image2.r*displaceAmount)*blend)*2.;\n  float t2 = ((image1.r*displaceAmount)*blend2)*2.;\n\n  vec4 imageA = texture2D(uSampler, vec2(vUv.x, vUv.y + t1))*blend2;\n  vec4 imageB = texture2D(uSampler, vec2(vUv.x, vUv.y - t2))*blend;\n\n  vec4 fColor = imageA.bbra * blend + imageA * blend2 + imageB.bbra * blend2 + imageB * blend;\n\n  gl_FragColor = fColor;\n\n  //gl_FragColor = image3;\n\n}\n\n// void main()\t{\n//   // invert blend;\n//   float blend2 = 1. - blend;\n//   vec2 vUv = vTextureCoord;\n//   // vUv.y -= blend;\n//   vec4 image1 = texture2D(uSampler, mirrored(vec2(vUv.x, vUv.y)));\n\n//   float t1 = ((image1.r * displaceAmount) * blend2) * 2.;\n  \n//   vec4 imageA = texture2D(uSampler, mirrored(vec2(vUv.x, vUv.y - t1))) * blend2;\n//   // vec4 c = vec4(246. / 255., 238. / 255., 227. / 255., 1.);\n//   gl_FragColor = imageA.bbra * blend + imageA * blend2;\n//   // gl_FragColor = image1;\n// }\n\n// precision mediump float;\n\n// varying vec2 vTextureCoord;\n// varying vec4 vColor;\n\n// uniform sampler2D uSampler;\n// uniform float customUniform;\n\n// void main(void)\n// {\n//    vec2 uvs = vTextureCoord.xy;\n\n//    vec4 fg = texture2D(uSampler, vTextureCoord);\n\n\n//    fg.r = uvs.y + customUniform;\n\n//    //fg.r = clamp(fg.r,0.0,0.9);\n\n//    gl_FragColor = fg;\n\n// }");

/***/ })

})
//# sourceMappingURL=text-slider.js.062689ccbfde465081a8.hot-update.js.map