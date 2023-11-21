import React, { useRef } from 'react';
import * as THREE from 'three';
import fragmentShaders from '@shaders/Sun/fragmentShaders';
import vertexShaders from '@shaders/Sun/vertexShaders';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

type Props = {
  position: [number, number, number];
  size: [number, number];
};
const Sun = ({ position, size }: Props) => {
  const sunRef = useRef<Mesh>(null);
  const uniforms = {
    uSize: { value: size[0] },
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#F6BA3E') },
  };

  useFrame(({ clock }) => {
    const material = sunRef?.current?.material as THREE.ShaderMaterial;
    material.uniforms.uTime.value = clock.elapsedTime;
  });
  return (
    <>
      <pointLight
        color={'#F6BA3E'}
        position={[0, 4, -25]}
        intensity={1000}
        castShadow
      />
      <mesh position={position} ref={sunRef}>
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
