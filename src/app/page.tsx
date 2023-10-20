'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { StrictMode } from 'react'

export default function Home() {
  return (
    <div id="canvas-container" style={{ height: '100vh', width: '100vw' }}>
      <StrictMode>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="#FF2345" position={[1, 2, 5]} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
          </mesh>
          <OrbitControls makeDefault />
        </Canvas>
      </StrictMode>
    </div>
  )
}
