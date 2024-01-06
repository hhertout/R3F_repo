import React, { useMemo, useRef } from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import vertexShaders from '@shaders/OrganicPlane/vertexShader';
import fragmentShaders from '@shaders/OrganicPlane/fragmentShader';
import { Color, Mesh } from 'three';
import * as THREE from 'three';

type Props = {
  position: Vector3;
  height: number;
  width: number;
};

const OrganicPlane = ({ position, height, width }: Props) => {
  const planeRef = useRef<Mesh>(null!);
  const uniforms = useMemo(() => {
    return {
      uTime: { value: 0 },
      uColor: { value: new Color('#FF00FE') },
    };
  }, []);

  useFrame(({ clock }) => {
    const material = planeRef?.current?.material as THREE.ShaderMaterial;
    material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <mesh ref={planeRef} position={position} rotation={[-Math.PI / 1.8, 0, 0]}>
      <planeGeometry args={[height, width, height * 2, width * 2]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShaders}
        fragmentShader={fragmentShaders}
        wireframe
      />
    </mesh>
  );
};

export default OrganicPlane;
