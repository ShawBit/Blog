import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useEffect } from "react";

const DesktopModel = () => {
  const model = useGLTF("/Desktop.glb");

  useEffect(() => {
    useGLTF.preload("/Desktop.glb");
  }, []);

  useEffect(() => {
    if (model) {
      gsap.to(model.scene.position, {
        x: 2,
        y: -0.25,
        z: -4,
        duration: 3,
      });
      gsap.to(model.scene.rotation, { y: Math.PI * 2 * 2.35, duration: 4 });
    }
  }, [model]);

  return (
    <primitive
      object={model.scene}
      scale={0.5}
      castShadow
      receiveShadow
      position={[5, 0, 0]}
    />
  );
};

export default DesktopModel;
