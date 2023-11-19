const fragmentShaders = `
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;

varying float vDistorsion;
varying vec3 vPosition;

void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
`;

export default fragmentShaders;
