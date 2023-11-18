import React, { useRef } from 'react';
import { Mesh, RepeatWrapping } from 'three';
import { useTexture } from '@react-three/drei';

type Props = {
  size: [number, number];
  position: [number, number, number];
};

const Road = ({ size, position }: Props) => {
  const RoadRef = useRef<Mesh>(null);
  const [map] = useTexture(['texture/road.png']);
  map.wrapS = map.wrapT = RepeatWrapping;
  map.repeat.set(4, 15);
  return (
    <mesh ref={RoadRef} position={position} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={size} />
      <meshStandardMaterial map={map} displacementScale={0.2} roughness={0.2} />
    </mesh>
  );
};

export default Road;
