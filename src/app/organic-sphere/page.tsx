'use client';

import React, { StrictMode } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import OrganicSphere from '@features/OrganicSphere';
import './organic-sphere.css';

const Page = () => {
  return (
    <body>
      <div id="canvas-container">
        <Canvas gl={{ alpha: true }}>
          <StrictMode>
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
