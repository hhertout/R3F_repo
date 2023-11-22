import React, { useMemo, useRef } from 'react';
import fragmentShaders from '@shaders/Terrain/fragmentShaders';
import vertexShaders from '@shaders/Terrain/vertexShaders';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type Props = {
  position: [number, number, number];
  size: [number, number];
};

const Terrain = ({ position, size }: Props) => {
  const planeRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: new THREE.Vector2(...size) },
      uBarSize: { value: 0.98 },
      uColor: { value: new THREE.Color('#FF00FE') },
      uSpeed: { value: 2 },
    }),
    [size]
  );

  useFrame(({ clock }) => {
    const material = planeRef?.current?.material as THREE.ShaderMaterial;
    material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh ref={planeRef} position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[...size, 70, 70]} />
      <shaderMaterial
        uniforms={uniforms}
        fragmentShader={fragmentShaders}
        vertexShader={vertexShaders}
      />
    </mesh>
  );
};

export default Terrain;
