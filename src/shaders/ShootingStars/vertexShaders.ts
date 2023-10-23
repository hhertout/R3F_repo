const vertexShaders = `
uniform float uTime;
uniform float uSize;

varying vec2 vUv;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

  vUv = uv;
}

`;

export default vertexShaders;
