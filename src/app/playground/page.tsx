'use client';

import React, { StrictMode } from 'react';
import { Canvas } from '@react-three/fiber';
import ShootingStars from '@components/experience/ShootingStars';
import { OrbitControls } from '@react-three/drei';

const Page = () => {
  return (
    <body>
      <div id="canvas-container" style={{ height: '100vh', width: '100vw' }}>
        <Canvas>
          <StrictMode>
            <color attach={'background'} args={[0, 0, 0]} />
            <ambientLight />
            <ShootingStars size={5} />
            <OrbitControls />
          </StrictMode>
        </Canvas>
      </div>
    </body>
  );
};

export default Page;
