import React, { useMemo } from 'react';

type Props = {
  position: [number, number, number];
};

const Car = ({ position }: Props) => {
  return (
    <mesh position={[position[0], position[1] + 0.1, position[2]]}>
      <boxGeometry args={[0.3, 0.2, 0.6]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

export default Car;
