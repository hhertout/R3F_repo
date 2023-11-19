'use client';
import React, { StrictMode, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Cloud, OrbitControls, StatsGl } from '@react-three/drei';
import Terrain from '@components/Terrain';
import Road from '@components/Road';
import Car from '@components/Car';
import Sun from '@components/Sun';
import { useControls } from 'leva';
import Buildings from '@components/Buildings';

const Page = () => {
  const terrainDepth = 60;
  const config = {
    segments: 30,
    volume: 50,
    seed: 100,
    opacity: 0.3,
    fade: 360,
    growth: 1,
    speed: 0.3,
  };

  return (
    <body>
      <div id="canvas-container">
        <Canvas
          camera={{ position: [0, 2, 15], fov: 75 }}
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
              <Sun position={[0, 13, -40]} size={[15, 60]} />
              <Buildings size={140} maxHeight={1} width={50} z={-20} />
              <Buildings size={140} maxHeight={3} width={50} z={-22} />
              <Buildings size={120} maxHeight={5} width={50} z={-25} />
              <Cloud
                {...config}
                bounds={[40, 0, 0]}
                color="#FF00FE"
                seed={1}
                position={[-25, 0, -5]}
              />
              <Cloud
                {...config}
                bounds={[40, 0, 0]}
                color="#FF00FE"
                seed={1}
                position={[25, 0, -5]}
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
