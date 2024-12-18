"use client";
import { Canvas } from "@react-three/fiber";
import Stars from "./Stars";

const Background = () => {
  return (
    <div className="fixed top-0 left-0 -z-10 w-screen h-screen">
      <Canvas camera={{ fov: 35, near: 0.1, far: 100, position: [0, 1, 7] }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          castShadow
          intensity={1.5}
          position={[1, 1, 0]}
        />
        <Stars />
      </Canvas>
    </div>
  );
};

export default Background;
