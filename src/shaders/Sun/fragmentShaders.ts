const fragmentShaders = `
uniform float uTime;
uniform vec3 uColor;
uniform float uSize;

varying vec2 vUv;

void main() {
    // top sun
    float fTop = step(0.5, vUv.y);  
    
    // bot sun
    float fBot = 1.0 - step(0.5, vUv.y);
    float multiplier = uSize * vUv.y;
    float gradBot = mod(vUv.y * multiplier, 1.10) * fBot;
    float splitBot = step(0.3, gradBot) + vUv.y * uTime;
    
    vec3 color = vec3(uColor * (splitBot + fTop));
    color = vec3(color.r, color.g * (vUv.y * 1.9), color.b);
    float alpha = splitBot + fTop;
    gl_FragColor = vec4(color, alpha);
}

`;

export default fragmentShaders;
