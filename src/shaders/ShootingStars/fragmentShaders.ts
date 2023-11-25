const fragmentShaders = `
uniform float uTime;
uniform float uSize;
uniform vec3 uColor;

varying vec2 vUv;

void main() {
  vec3 color = uColor;
  float strength = distance(gl_PointCoord, vec2(0.5));
  strength = 1.0 - strength;
  strength = pow(strength, 3.0);

  color = mix(vec3(0.0), color, strength);
  gl_FragColor = vec4(color, strength);
}

`;

export default fragmentShaders;
