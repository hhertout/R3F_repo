const vertexShaders = `
 vec4 modelPosition = vec4(position, 0.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
`;

export default vertexShaders;
