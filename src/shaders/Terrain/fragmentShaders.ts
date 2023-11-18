const fragmentShaders = `

uniform vec2 uSize;
uniform float uBarSize;
uniform vec3 uColor;
uniform float uTime;
uniform float uSpeed;

varying vec2 vUv;

void main() {
    float time = uTime * uSpeed;
    float multiplier = (uSize.x * uSize.y) / 8.0;
    float strengthX = mod(vUv.x * multiplier, 1.0);
    float strengthY = mod(vUv.y * multiplier + time, 1.0);
    
    strengthX = step(uBarSize, strengthX);
    strengthY = step(uBarSize, strengthY);
    float strength = strengthX + strengthY;
    
    vec3 color = vec3(strength * uColor + 0.15);
    gl_FragColor = vec4(color, 1.0);
}
`;

export default fragmentShaders;
