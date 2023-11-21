'use client';
import React, { StrictMode, Suspense } from 'react';
import { Canvas, Vector3 } from '@react-three/fiber';
import { OrbitControls, StatsGl } from '@react-three/drei';
import Terrain from '@components/Terrain';
import Road from '@components/Road';
import Car from '@components/Car';
import Sun from '@components/Sun';
import Buildings from '@components/Buildings';
import './playground.css';
import ShootingStars from '@components/ShootingStars';

const Page = () => {
  const terrainDepth = 60;
  const cameraPosition: Vector3 = [0, 2, 15];

  return (
    <body>
      <div id="canvas-container">
        <Canvas
          camera={{ position: cameraPosition, fov: 75 }}
          gl={{ alpha: true, antialias: false }}
          dpr={[1, 2]}
        >
          <StatsGl />
          <StrictMode>
            <Suspense fallback={'loading'}>
              <ambientLight intensity={0.2} />
              <pointLight
                color={'#FF00FE'}
                position={[-30, 0, 10]}
                intensity={600}
              />
              <pointLight
                color={'#FF00FE'}
                position={[30, 0, 10]}
                intensity={600}
              />

              <Terrain position={[0, 0, 0]} size={[160, terrainDepth]} />
              <Road position={[-0.05, 0.02, 0]} size={[1.9, terrainDepth]} />
              <Car position={[0.5, 0, 12]} />
              <Sun position={[0, 5, -40]} size={[22, 80]} />

              <Buildings size={180} maxHeight={2} width={80} z={-18} />
              <Buildings size={150} maxHeight={4} width={80} z={-22} />
              <Buildings size={140} maxHeight={7} width={80} z={-26} />
              <ShootingStars
                count={200}
                size={[340, 60, 10]}
                position={[-170, 5, -80]}
                cameraPosition={cameraPosition}
                color={'#F6BA3E'}
              />
              <ShootingStars
                count={10}
                size={[340, 60, 10]}
                position={[-170, 10, -80]}
                cameraPosition={cameraPosition}
                color={'#FF00FE'}
              />
            </Suspense>
            <OrbitControls />
          </StrictMode>
        </Canvas>
      </div>
    </body>
  );
};

export default Page;
