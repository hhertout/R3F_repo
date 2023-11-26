'use client';
import React, { StrictMode, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, StatsGl } from '@react-three/drei';
import Terrain from '@components/Terrain';
import Road from '@components/Road';
import Car from '@components/Car';
import Sun from '@components/Sun';
import Buildings from '@components/Buildings';
import './playground.css';
import ShootingStars from '@components/ShootingStars';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { easing } from 'maath';
import OrganicPlane from '@components/OrganicPlane';
import Loader from '@components/global/Loader';

export type Mode = 'home' | 'view';

const terrainDepth = 60;
const Page = () => {
  const [mode, setMode] = useState<Mode>('view');
  const [toggleEffect, setToggleEffect] = useState(false);
  return (
    <body>
      <div id="canvas-container">
        <Canvas
          camera={{ position: [0, 0, 0], fov: 75 }}
          gl={{ alpha: true, antialias: false }}
          dpr={[1, 2]}
        >
          <StatsGl />
          <StrictMode>
            <Suspense fallback={<Loader />}>
              <Scene mode={mode} setMode={setMode} />
              {toggleEffect && <Effects />}
            </Suspense>
          </StrictMode>

          <OrbitControls />
        </Canvas>

        <div className={'nav-btn'}>
          <button
            onClick={() => setToggleEffect((toggleEffect) => !toggleEffect)}
          >
            PPE {toggleEffect ? '(on)' : '(off)'}
          </button>
          <button onClick={() => setMode('home')} className={'btn-reset'}>
            Home
          </button>
          <button onClick={() => setMode('view')} className={'btn'}>
            View 1
          </button>
        </div>
      </div>
    </body>
  );
};

type SceneProps = {
  mode: Mode;
  setMode: React.Dispatch<React.SetStateAction<Mode>>;
};

function Scene({ mode }: SceneProps) {
  useFrame((state, delta) => {
    state.viewport.width = 21;
    switch (mode) {
      case 'home': {
        easing.damp3(
          state.camera.position,
          [
            (state.pointer.x * state.viewport.width) / 24,
            2 + (state.pointer.y * state.viewport.width) / 24,
            15,
          ],
          0.5,
          delta
        );
        break;
      }
      case 'view': {
        easing.damp3(state.camera.position, [0, 0.5, 10], 0.5);
        state.camera.lookAt((1.5 * state.viewport.width) / 15, 0, 12);
      }
    }
  });
  return (
    <>
      <ambientLight intensity={0.4} />
      <Car position={[0.5, 0, 12]} />
      {mode === 'home' ? (
        <>
          <Road position={[-0.05, 0.02, 0]} size={[1.9, terrainDepth]} />
          <Terrain position={[0, 0, 0]} size={[160, terrainDepth]} />
          <Sun position={[0, 5, -40]} size={[22, 80]} />
          <Buildings size={250} maxHeight={2} width={80} z={-26} />
          <Buildings size={120} maxHeight={6} width={80} z={-30} />
          <ShootingStars
            count={200}
            size={[340, 60, 10]}
            position={[-170, 5, -80]}
            cameraPosition={[0, 0, 0]}
            color={'#F6BA3E'}
          />
          <CameraRig />
        </>
      ) : null}
      {mode === 'view' ? (
        <>
          <OrganicPlane position={[0, -0.5, 18]} height={18} width={18} />
        </>
      ) : null}
    </>
  );
}

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        (state.pointer.x * state.viewport.width) / 25,
        2 + state.pointer.y / 2.5,
        15,
      ],
      0.5,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
  return <></>;
}

function Effects() {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0.2} intensity={0.5} mipmapBlur />
    </EffectComposer>
  );
}

export default Page;
