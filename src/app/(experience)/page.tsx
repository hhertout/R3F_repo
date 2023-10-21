'use client';

import { lazy, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '@components/global/Loader';
import { OrbitControls } from '@react-three/drei';

const Experience = lazy(() => import('@features/Experience'));

export default function Home(): JSX.Element {
  return (
    <Canvas camera={{ position: [2, 2, 2] }}>
      <Suspense fallback={<Loader />}>
        <color attach={'background'} args={[0, 0, 0]} />
        <ambientLight />
        <Experience />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
