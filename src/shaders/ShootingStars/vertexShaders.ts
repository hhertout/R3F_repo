const vertexShaders = `
uniform float uTime;
uniform float uSize;
uniform vec3 uCameraPosition;

varying vec2 vUv;

void main() {
  float relativePositionX = position.x + (uSize / 2.0);
  float distanceFactor = 1.0 / distance(vec3(relativePositionX, position.y, position.z), uCameraPosition); 
  float newPosition = position.z + position.z * 6.0 * uTime;
  newPosition = mod(newPosition, 100.0);
  
  gl_PointSize += 5.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, newPosition, 1.0);
  vUv = uv;
}

`;

export default vertexShaders;
