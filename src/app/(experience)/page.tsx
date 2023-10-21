'use client'

import { lazy, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

const Experience = lazy(() => import('@/components/experience/Experience'))

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <Experience />
      </Canvas>
    </Suspense>
  )
}
