const vertexShaders = `
uniform float uTime;

varying vec2 vUv;

void main() {
  vec4 modelPosition = modelViewMatrix * vec4(position, 1.0);
    
  gl_Position = projectionMatrix * modelPosition;
  vUv = uv;
}
`;

export default vertexShaders;
