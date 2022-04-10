import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Lights />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[500, 0, 0]} intensity={1} />
      <directionalLight position={[-500, 0, 0]} intensity={1} />
      <directionalLight position={[0, 500, 0]} intensity={1} />
      <directionalLight position={[0, 0, 500]} intensity={1} />
      <directionalLight position={[0, 0, -500]} intensity={1} />
    </>
  );
};

const Model = () => {
  const ref = useRef();
  // useFrame(() => (ref.current.rotation.y += 0.01));

  const gltf = useLoader(GLTFLoader, './lamborghini_gallardo_2010/scene.gltf');
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        scale={1}
        position={[0, -0.3, 0]}
      />
    </>
  );
};
