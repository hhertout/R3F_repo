import React from 'react';
import { useThree } from '@react-three/fiber';

const Camera = () => {
  const camera = useThree((state) => state.camera);
  return <></>;
};

export default Camera;
