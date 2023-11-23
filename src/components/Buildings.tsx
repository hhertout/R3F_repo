import React, { useMemo } from 'react';
import { Vector3 } from '@react-three/fiber';
import * as THREE from 'three';

type Props = {
  size: number;
  maxHeight: number;
  z: number;
  width: number;
};

const material = new THREE.MeshStandardMaterial({ color: 'black' });

const Buildings = ({ z, size, maxHeight, width }: Props) => {
  const elements = useMemo(() => {
    const buildingArray: Array<{ element: any }> = [];
    for (let i = 0; i < size; i++) {
      const randomHeight: number = Math.random() * maxHeight + 2;
      let posX = Math.random() * width * 2 - width;
      const randomPosition: Vector3 = [
        posX,
        randomHeight - randomHeight / 2 - 1,
        Math.random() * 3 + z,
      ];
      buildingArray.push({
        element: (
          <mesh position={randomPosition} key={i} material={material}>
            <boxGeometry args={[1.8, randomHeight]} />
          </mesh>
        ),
      });
    }
    return { buildings: buildingArray };
  }, [z, size, maxHeight, width]);

  return <>{elements.buildings.map((b) => b.element)}</>;
};

export default Buildings;
