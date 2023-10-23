const fragmentShaders = `
uniform float uTime;
uniform float uSize;

varying vec2 vUv;

void main() {
    vec3 blueColor = vec3(0.0, 0.0, 1.0);
    vec3 purpleColor = vec3(0.5, 0.0, 0.5);
    
    
    float value = mod(vUv.x * 12.0, 1.0);
    value = step(0.95, value);
    vec3 color = vec3(value);

    gl_FragColor = vec4(color, 1.0);
}

`;

export default fragmentShaders;
