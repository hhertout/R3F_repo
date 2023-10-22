import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh } from 'three';
import vertexShaders from '@shaders/OrganicSphere/vertexShaders';
import fragmentShaders from '@shaders/OrganicSphere/fragmentShaders';

type OrganicSphereProps = {
  radius: number;
  depth: number;
};

const OrganicSphere = ({ radius, depth }: OrganicSphereProps) => {
  const OrganicSphereRef = useRef<Mesh>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTimeReducer: { value: 0.1 },
      uNoiseDensity: { value: 3.0 },
      uNoiseStrength: { value: 0.2 },
      uFrequency: { value: 3 },
      uAmplitude: { value: 3.0 },
      uColorOffset: { value: 0.1 },
      uColorMultiplier: { value: 20.0 },
      uSurfaceColor: { value: new THREE.Color('#d71d43') },
    }),
    []
  );

  useFrame(({ clock }): void => {
    const material = OrganicSphereRef?.current
      ?.material as THREE.ShaderMaterial;
    material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh ref={OrganicSphereRef}>
      <sphereGeometry args={[radius, depth, depth]} />
      <shaderMaterial
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={uniforms}
        vertexShader={vertexShaders}
        fragmentShader={fragmentShaders}
      />
    </mesh>
  );
};

export default OrganicSphere;
