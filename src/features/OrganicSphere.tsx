import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Mesh } from 'three';
import vertexShaders from '@shaders/OrganicSphere/vertexShaders';
import fragmentShaders from '@shaders/OrganicSphere/fragmentShaders';

type OrganicSphereProps = {
  radius: number;
  depth: number;
  position: [number, number, number];
};

const OrganicSphere = ({ radius, depth, position }: OrganicSphereProps) => {
  const OrganicSphereRef = useRef<Mesh>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTimeReducer: { value: 0.15 },
      uNoiseDensity: { value: 3.0 },
      uNoiseStrength: { value: 0.2 },
      uFrequency: { value: 3 },
      uAmplitude: { value: 3.0 },
      uColorOffset: { value: 0.1 },
      uColorMultiplier: { value: 20.0 },
      uSurfaceColor: { value: new THREE.Color('#1bfaff') },
    }),
    []
  );

  useFrame(({ clock }): void => {
    const material = OrganicSphereRef?.current
      ?.material as THREE.ShaderMaterial;
    material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh ref={OrganicSphereRef} position={position}>
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
