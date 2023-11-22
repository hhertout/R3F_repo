const fragmentShaders = `
uniform float uTime;
uniform vec3 uColor;
uniform float uSize;

varying vec2 vUv;

void main() {    
    float time = uTime * 0.12;
    float stepY = 1.0 - mod(vUv.y * 4.0 - time, 0.3) + vUv.y * 0.18;
    stepY = step(0.85, stepY);
    vec3 color = vec3(uColor * stepY);
    color = vec3(color.r, color.g * (vUv.y * 1.1), color.b);
    float alpha = stepY;
    gl_FragColor = vec4(color, alpha);
}

`;

export default fragmentShaders;
