const fragmentShaders = `

uniform vec2 uSize;
uniform float uBarSize;
uniform vec3 uColor;
uniform float uTime;
uniform float uSpeed;

varying vec2 vUv;

void main() {
    float time = uTime * uSpeed;
    float strengthX = mod(vUv.x * 0.3 * uSize.x, 1.0);
    float strengthY = mod(vUv.y * 0.3 * uSize.x + time, 1.0);
    
    strengthX = step(uBarSize, strengthX);
    strengthY = step(uBarSize, strengthY);
    float strength = strengthX + strengthY;
    
    vec3 color = vec3(strength * uColor);
    gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShaders;
