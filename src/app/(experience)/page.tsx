'use client'

import { lazy, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '@components/global/Loader'

const Experience = lazy(() => import('@components/experience/Experience'))

export default function Home(): JSX.Element {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas>
        <Experience />
      </Canvas>
    </Suspense>
  )
}
