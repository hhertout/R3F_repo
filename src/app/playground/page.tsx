'use client';
import React, { StrictMode } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, StatsGl } from '@react-three/drei';
import Terrain from '@components/Terrain';
import Road from '@components/Road';
import Car from '@components/Car';

const Page = () => {
  return (
    <body>
      <div id="canvas-container">
        <Canvas
          camera={{ position: [0, 3, 10], fov: 75 }}
          gl={{ alpha: true, antialias: true }}
        >
          <StatsGl />
          <StrictMode>
            <ambientLight />
            <Terrain position={[0, 0, 3]} size={[23, 10]} />
            <Road position={[0, 0, 3]} size={[1, 10]} />
            <Car position={[0, 0, 7]} />
            <OrbitControls />
          </StrictMode>
        </Canvas>
      </div>
    </body>
  );
};

export default Page;
