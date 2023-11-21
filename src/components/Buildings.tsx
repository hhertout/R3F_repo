import React, { useMemo } from 'react';
import { Vector3 } from '@react-three/fiber';

type Props = {
  size: number;
  maxHeight: number;
  z: number;
  width: number;
};

const Buildings = ({ z, size, maxHeight, width }: Props) => {
  const buildings = useMemo(() => {
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
          <mesh position={randomPosition} key={i} receiveShadow>
            <boxGeometry args={[1.4, randomHeight]} />
            <meshStandardMaterial color={'black'} />
          </mesh>
        ),
      });
    }
    return buildingArray;
  }, [z, size, maxHeight, width]);
  return <>{buildings.map((b: any) => b.element)}</>;
};

export default Buildings;
