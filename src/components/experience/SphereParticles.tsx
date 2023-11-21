import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import vertexShaders from '@shaders/SphereParticles/vertexShaders';
import fragmentShaders from '@shaders/SphereParticles/fragmentShaders';
import * as THREE from 'three';
import { Points } from 'three';

type SphereParticlesProps = {
  count: number;
  radius: number;
};

const SphereParticles = ({ count, radius }: SphereParticlesProps) => {
  const points = useRef<Points>(null!);

  const particlesPosition: Float32Array = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const distance: number = Math.sqrt(Math.random()) * radius;
      const theta: number = THREE.MathUtils.randFloatSpread(360);
      const phi: number = THREE.MathUtils.randFloatSpread(360);
      let x: number = distance * Math.sin(theta) * Math.cos(phi);
      let y: number = distance * Math.sin(theta) * Math.sin(phi);
      let z: number = distance * Math.cos(theta);
      positions.set([x, y, z], i * 3);
    }
    return positions;
  }, [count, radius]);

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      uRadius: {
        value: radius,
      },
    }),
    [radius]
  );

  useFrame(({ clock }): void => {
    const material = points?.current?.material as THREE.ShaderMaterial;
    material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        fragmentShader={fragmentShaders}
        vertexShader={vertexShaders}
        uniforms={uniforms}
      />
    </points>
  );
};

export default SphereParticles;
