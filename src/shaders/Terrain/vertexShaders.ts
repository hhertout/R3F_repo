const vertexShaders = `
#define PI 3.14159265359

uniform float uTime;
uniform vec2 uSize;

varying vec2 vUv;

float bellCurveHeight(float x) {
    return 0.5 * (1.0 + cos(x * PI));
}

void main() {
    float posZ = position.z + bellCurveHeight(position.x * 0.05) - 1.0;
    vec4 modelPosition = modelViewMatrix * vec4(position.x, position.y, posZ, 1.0);

    gl_Position = projectionMatrix * modelPosition;
    vUv = uv;
}
`;

export default vertexShaders;
