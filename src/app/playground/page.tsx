'use client';

import React, { StrictMode } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import OrganicSphere from '@components/experience/OrganicSphere';

const Page = () => {
  return (
    <body>
      <div id="canvas-container">
        <Canvas>
          <StrictMode>
            <color attach={'background'} args={[0, 0, 0]} />
            <ambientLight />
            <OrganicSphere radius={2} depth={120} position={[-3, 0.2, 0]} />
            <Html center>
              <h1 style={{ color: 'white', width: '100%' }}>
                Organic&#160;Sphere
              </h1>
            </Html>
            <OrbitControls />
          </StrictMode>
        </Canvas>
      </div>
    </body>
  );
};

export default Page;
