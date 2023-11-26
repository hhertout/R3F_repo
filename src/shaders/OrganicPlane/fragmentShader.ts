const fragmentShaders = `
uniform float uTime;
uniform vec3 uColor;

varying vec2 vUv;
varying float vPosition;

void main() {
    float strength = vPosition + 1.5;
    vec3 color = vec3(uColor.r + vPosition * 0.3, uColor.g, uColor.b * vPosition * 2.0);
    gl_FragColor = vec4(color * strength, 0.015);
}

`;

export default fragmentShaders;
