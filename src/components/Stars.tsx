import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { AdditiveBlending, type Points } from "three";

const Stars = () => {
  const starRef = useRef<Points>(null);

  const texture = useTexture("/star.png");

  const count = 1000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = 2 - Math.random() * 20;
    positions[i + 2] = (Math.random() - 0.5) * 10;
    colors[i] = Math.random();
  }

  useFrame((state) => {
    if (starRef.current) {
      starRef.current.rotation.y = state.clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <points ref={starRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          itemSize={3}
          count={count}
          array={positions}
        />
        <bufferAttribute
          attach="attributes-color"
          itemSize={3}
          count={count}
          array={colors}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.1}
        sizeAttenuation
        color={"#ff88cc"}
        transparent
        alphaMap={texture}
        depthWrite={false}
        depthTest={false}
        vertexColors
        blending={AdditiveBlending}
      />
    </points>
  );
};

export default Stars;
