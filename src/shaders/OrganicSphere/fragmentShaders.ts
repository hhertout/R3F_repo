const fragmentShaders = `
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;

varying float vDistorsion;
varying vec3 vPosition;

void main() {
    float alpha = vDistorsion * 50.0;
    float r = vDistorsion * uSurfaceColor.x * uColorMultiplier + uColorOffset;
    float g = vDistorsion * uSurfaceColor.y * uColorMultiplier + uColorOffset;
    float b = vDistorsion * uSurfaceColor.z * uColorMultiplier + uColorOffset;
    gl_FragColor = vec4(r, g, b, alpha);
}
`;

export default fragmentShaders;
