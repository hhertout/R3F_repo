import { OrbitControls } from '@react-three/drei'

const Experience = (): JSX.Element => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="#FF2345" position={[1, 2, 5]} />
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
      <OrbitControls makeDefault />
    </>
  )
}

export default Experience
