import React, { useMemo, useRef } from 'react';
import fragmentShaders from '@shaders/Terrain/fragmentShaders';
import vertexShaders from '@shaders/Terrain/vertexShaders';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type Props = {
  position: [number, number, number];
  size: [number, number];
};

const Terrain = ({ position, size }: Props) => {
  const { barSize } = useControls({ barSize: 0.95 });
  const { speed } = useControls({ speed: 2.5 });
  const planeRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: new THREE.Vector2(...size) },
      uBarSize: { value: barSize },
      uColor: { value: new THREE.Color('#FF00FF') },
      uSpeed: { value: speed },
    }),
    [size, barSize, speed]
  );

  useFrame(({ clock }) => {
    const material = planeRef?.current?.material as THREE.ShaderMaterial;
    material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh ref={planeRef} position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={size} />
      <shaderMaterial
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={uniforms}
        fragmentShader={fragmentShaders}
        vertexShader={vertexShaders}
      />
    </mesh>
  );
};

export default Terrain;
