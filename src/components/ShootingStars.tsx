import React, { useMemo, useRef } from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import { Points } from 'three';
import vertexShaders from '@shaders/ShootingStars/vertexShaders';
import fragmentShaders from '@shaders/ShootingStars/fragmentShaders';
import * as THREE from 'three';

type ShootingStarsProps = {
  count: number;
  size: [number, number, number];
  position: Vector3;
  cameraPosition: Vector3;
  color: string;
};

const ShootingStars = ({
  count,
  size,
  position,
  cameraPosition,
  color,
}: ShootingStarsProps) => {
  const pointsRef = useRef<Points>(null);
  const particlesPosition = useMemo(() => {
    const position = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = Math.random() * size[0];
      let y = Math.random() * size[1];
      const z = Math.random() * size[2];
      if (x >= size[0] / 2 - 22 && x <= size[0] / 2 + 22) y += 40;
      position.set([x, y, z], i * 3);
    }
    return position;
  }, [count, size]);
  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0.0 },
      uSize: { value: size },
      uColor: { value: new THREE.Color(color) },
      uCameraPosition: { value: cameraPosition },
    };
  }, [size, cameraPosition, color]);

  useFrame(({ clock }) => {
    const material = pointsRef?.current?.material as THREE.ShaderMaterial;
    material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <points ref={pointsRef} position={position}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        depthWrite={false}
        uniforms={uniforms}
        blending={THREE.AdditiveBlending}
        fragmentShader={fragmentShaders}
        vertexShader={vertexShaders}
      />
    </points>
  );
};

export default ShootingStars;
