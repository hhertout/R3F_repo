import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import vertexShaders from '@shaders/ShootingStars/vertexShaders';
import fragmentShaders from '@shaders/ShootingStars/fragmentShaders';
import * as THREE from 'three';

type ShootingStarsProps = {
  size: number;
};

const ShootingStars = ({ size }: ShootingStarsProps) => {
  const planeRef = useRef<Mesh>(null);
  const uniforms = useMemo(() => {
    return {
      uTime: {
        value: 0.0,
      },
      uSize: {
        value: size,
      },
    };
  }, [size]);

  useFrame(({ clock }) => {
    const material = planeRef?.current?.material as THREE.ShaderMaterial;
    material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh ref={planeRef}>
      <planeGeometry args={[size * 3, size]} />
      <shaderMaterial
        depthWrite={false}
        uniforms={uniforms}
        fragmentShader={fragmentShaders}
        vertexShader={vertexShaders}
      />
    </mesh>
  );
};

export default ShootingStars;
