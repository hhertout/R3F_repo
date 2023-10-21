import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = (): JSX.Element => {
  const { progress } = useProgress();
  return (
    <>
      <color attach={'background'} args={[0, 0, 0]} />
      <Html center>Chargement : {progress} %</Html>
    </>
  );
};

export default Loader;
