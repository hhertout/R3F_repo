const vertexShaders = `
uniform float uTime;

varying vec2 vUv;
varying float vPosition;

void main() {
  float speed = uTime * 0.8;
  float elevationFactorX = 0.2;
  float elevationFactorY = 0.1;
  float newPosition = sin(position.x + speed) * elevationFactorX;
  newPosition += sin(position.y + speed) * elevationFactorY;
  vPosition = newPosition;
    
  vec4 modelPosition = modelViewMatrix * vec4(vec3(position.x, position.y, newPosition), 1.0);
  gl_Position = projectionMatrix * modelPosition;
  vUv = uv;
}
`;

export default vertexShaders;
