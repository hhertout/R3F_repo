import React from 'react';
import * as THREE from 'three';
import fragmentShaders from '@shaders/Sun/fragmentShaders';
import vertexShaders from '@shaders/Sun/vertexShaders';

type Props = {
  position: [number, number, number];
  size: [number, number];
};
const Sun = ({ position, size }: Props) => {
  const uniforms = {
    uSize: { value: size[0] },
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#F6BA3E') },
  };
  return (
    <>
      <pointLight
        color={'#F6BA3E'}
        position={[0, 4, -25]}
        intensity={1000}
        castShadow
      />
      <mesh position={position}>
        <circleGeometry args={[...size]} />
        <shaderMaterial
          depthWrite={false}
          blending={THREE.NormalBlending}
          uniforms={uniforms}
          fragmentShader={fragmentShaders}
          vertexShader={vertexShaders}
        />
      </mesh>
    </>
  );
};

export default Sun;
