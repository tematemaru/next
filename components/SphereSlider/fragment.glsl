#ifdef GL_ES
precision mediump float;
#endif

uniform float uTime;
varying vec3 vPosition;

varying vec2 vUv;

void main() {
  // gl_FragColor = vec4(0., 1., 0., 1.);
  // vec4 text = textture2D(uTextureNext, vUv);
  gl_FragColor = vec4(0., 1., 0., 1.);
}