webpackHotUpdate("static/development/pages/text-slider.js",{

/***/ "./components/SphereSlider/SphereSlider.js":
/*!*************************************************!*\
  !*** ./components/SphereSlider/SphereSlider.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SphereSlider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! three-orbitcontrols */ "./node_modules/three-orbitcontrols/OrbitControls.js");
/* harmony import */ var three_orbitcontrols__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(three_orbitcontrols__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _TG_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TG.json */ "./components/SphereSlider/TG.json");
var _TG_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./TG.json */ "./components/SphereSlider/TG.json", 1);
/* harmony import */ var _glsl_fragment_glsl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../glsl/fragment.glsl */ "./glsl/fragment.glsl");
/* harmony import */ var _glsl_vertex_glsl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../glsl/vertex.glsl */ "./glsl/vertex.glsl");







var _jsxFileName = "/Users/msi/hello-next/components/SphereSlider/SphereSlider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;




 // import TRYGalien from './TRYGalien.woff2';

var SphereSlider =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SphereSlider, _React$PureComponent);

  function SphereSlider() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SphereSlider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SphereSlider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "prepareTextTexture", function () {
      var canvas = document.createElement('canvas');
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      var ctx = canvas.getContext('2d');
      ctx.font = '170px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('ODDA', canvas.width / 2, canvas.height / 2);
      return canvas;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "animate", function () {
      requestAnimationFrame(_this.animate); // this.cube.rotation.x += 0.01;
      // this.cube.rotation.y += 0.01;

      _this.renderer.render(_this.scene, _this.camera);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SphereSlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.texture = new three__WEBPACK_IMPORTED_MODULE_8__["Texture"](this.prepareTextTexture()); // console.log(TRYGalien);
      // console.log(require(textFragment, textVertex));
      // this.texture.magFilter = THREE.NearestFilter;
      // this.texture.minFilter = THREE.NearestFilter;
      // this.texture.minFilter = THREE.LinearMipMapLinearFilter;

      this.texture.minFilter = three__WEBPACK_IMPORTED_MODULE_8__["LinearFilter"]; // this.texture.anisotropy  = 1;

      this.texture.needsUpdate = true;
      this.scene = new three__WEBPACK_IMPORTED_MODULE_8__["Scene"]();
      this.camera = new three__WEBPACK_IMPORTED_MODULE_8__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.renderer = new three__WEBPACK_IMPORTED_MODULE_8__["WebGLRenderer"]();
      this.renderer.setSize(window.innerWidth, window.innerHeight); // this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
      // this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      // this.cube = new THREE.Mesh( this.geometry, this.material );
      // this.scene.add(this.cube);

      this.camera.position.z = 5;
      this.canvas.appendChild(this.renderer.domElement);
      this.color = 0xff0000;
      this.material = new three__WEBPACK_IMPORTED_MODULE_8__["RawShaderMaterial"]({
        uniforms: {
          time: {
            value: 1.0
          }
        },
        vertexShader: _glsl_vertex_glsl__WEBPACK_IMPORTED_MODULE_12__["default"],
        fragmentShader: _glsl_fragment_glsl__WEBPACK_IMPORTED_MODULE_11__["default"]
      });
      this.matDark = new three__WEBPACK_IMPORTED_MODULE_8__["LineBasicMaterial"]({
        color: this.color,
        side: three__WEBPACK_IMPORTED_MODULE_8__["DoubleSide"]
      });
      this.matLite = new three__WEBPACK_IMPORTED_MODULE_8__["MeshBasicMaterial"]({
        color: this.color,
        transparent: true,
        opacity: 0.4,
        side: three__WEBPACK_IMPORTED_MODULE_8__["DoubleSide"]
      });
      this.controls = new three_orbitcontrols__WEBPACK_IMPORTED_MODULE_9___default.a(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.25;
      this.controls.enableZoom = true;
      this.font = new three__WEBPACK_IMPORTED_MODULE_8__["Font"](_TG_json__WEBPACK_IMPORTED_MODULE_10__);
      var shapes = this.font.generateShapes('ODDA', 100);
      this.geometry = new three__WEBPACK_IMPORTED_MODULE_8__["ShapeBufferGeometry"](shapes);
      this.geometry.computeBoundingBox();
      this.xMid = -0.5 * (this.geometry.boundingBox.max.x - this.geometry.boundingBox.min.x);
      this.yMid = -0.5 * (this.geometry.boundingBox.max.y - this.geometry.boundingBox.min.y);
      this.geometry.translate(this.xMid, this.yMid, 0); // make shape ( N.B. edge view not visible )

      this.text = new three__WEBPACK_IMPORTED_MODULE_8__["Mesh"](this.geometry, this.material);
      this.text.position.z = -200;
      this.scene.add(this.text);
      this.animate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        ref: function ref(node) {
          _this2.canvas = node;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      });
    }
  }]);

  return SphereSlider;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=text-slider.js.6e4dd3b23620575c64de.hot-update.js.map