'use client';
import React, { StrictMode, Suspense, useState } from 'react';
import { Canvas, Vector3 } from '@react-three/fiber';
import { Html, OrbitControls, StatsGl } from '@react-three/drei';
import Terrain from '@components/Terrain';
import Road from '@components/Road';
import Car from '@components/Car';
import Sun from '@components/Sun';
import Buildings from '@components/Buildings';
import './playground.css';
import ShootingStars from '@components/ShootingStars';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

const terrainDepth = 60;

const Page = () => {
  const [cameraPosition, setCameraPosition] = useState<Vector3>([0, 2, 15]);

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
            <Suspense
              fallback={
                <Html color={'white'} scale={10}>
                  Loading
                </Html>
              }
            >
              <ambientLight intensity={0.4} />

              <Terrain position={[0, 0, 0]} size={[160, terrainDepth]} />
              <Road position={[-0.05, 0.02, 0]} size={[1.9, terrainDepth]} />
              <Car position={[0.5, 0, 12]} />
              <Sun position={[0, 5, -40]} size={[22, 80]} />

              <Buildings size={100} maxHeight={2} width={70} z={-18} />
              <Buildings size={100} maxHeight={4} width={70} z={-22} />
              <Buildings size={120} maxHeight={7} width={70} z={-26} />
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

            <EffectComposer>
              <Bloom luminanceThreshold={0.4} intensity={1.4} mipmapBlur />
            </EffectComposer>
            <OrbitControls />
          </StrictMode>
        </Canvas>
      </div>
    </body>
  );
};

export default Page;
