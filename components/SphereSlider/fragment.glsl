precision mediump float;
precision mediump int;

varying vec2 vTextureCoord;
varying vec4 vColor;
// varying vec2 vUv;

uniform sampler2D uSampler;
// uniform sampler2D uTexture;
uniform float time;
uniform float blend;
uniform float offset;

float length = 10.;

mat2 scale(vec2 _scale){
  return mat2(_scale.x, 0.0, 0.0, _scale.y);
}

mat3 k = mat3(
  -0.3, 0., 1.,
  -0.4, 0., 1.,
  2., 0., 1.
);

float displaceAmount = 0.3;

vec2 mirrored(vec2 v) {
	vec2 m = mod(v,2.);
	return mix(m,2.0 - m, step(1.0 ,m));
}

void main()	{
  // invert blend;
  vec2 vUv = vTextureCoord;
  vUv.y += offset;
  float blend2 = 1. - blend;
  vec4 image1 = texture2D(uSampler, vec2(vUv.x, vUv.y + blend));
  vec4 image2 = texture2D(uSampler, vec2(vUv.x, vUv.y + blend));

  float t1 = ((image2.r * displaceAmount) * offset) * 2.;
  float t2 = ((image1.r * displaceAmount) * offset) * 2.;

  vec4 imageA = texture2D(uSampler, vec2(vUv.x, vUv.y + t1)) * blend2;
  vec4 imageB = texture2D(uSampler, vec2(vUv.x, vUv.y - t2)) * blend;

  vec4 fColor = imageA.bbra * blend + imageA * blend2 + imageB.bbra * blend2 + imageB * blend;

  gl_FragColor = fColor;

  // gl_FragColor = vec4(vTextureCoord, 0., 1.);

}

// void main()	{
//   // invert blend;
//   float blend2 = 1. - blend;
//   vec2 vUv = vTextureCoord;
//   // vUv.y -= blend;
//   vec4 image1 = texture2D(uSampler, mirrored(vec2(vUv.x, vUv.y)));

//   float t1 = ((image1.r * displaceAmount) * blend2) * 2.;
  
//   vec4 imageA = texture2D(uSampler, mirrored(vec2(vUv.x, vUv.y - t1))) * blend2;
//   // vec4 c = vec4(246. / 255., 238. / 255., 227. / 255., 1.);
//   gl_FragColor = imageA.bbra * blend + imageA * blend2;
//   // gl_FragColor = image1;
// }

// precision mediump float;

// varying vec2 vTextureCoord;
// varying vec4 vColor;

// uniform sampler2D uSampler;
// uniform float customUniform;

// void main(void)
// {
//    vec2 uvs = vTextureCoord.xy;

//    vec4 fg = texture2D(uSampler, vTextureCoord);


//    fg.r = uvs.y + customUniform;

//    //fg.r = clamp(fg.r,0.0,0.9);

//    gl_FragColor = fg;

// }