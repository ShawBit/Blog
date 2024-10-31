import { useGLTF } from "@react-three/drei";
import type {
  EventHandlers,
  InstanceProps,
  MathProps,
  ReactProps,
} from "@react-three/fiber";
import type {
  Mutable,
  Overwrite,
} from "@react-three/fiber/dist/declarations/src/core/utils";
import gsap from "gsap";
import { useEffect, useRef, type JSX } from "react";
import type { Group, Object3DEventMap } from "three";

const DesktopModel = (
  props: JSX.IntrinsicAttributes &
    Mutable<
      Overwrite<
        Partial<
          Overwrite<
            Group<Object3DEventMap>,
            MathProps<Group<Object3DEventMap>> &
              ReactProps<Group<Object3DEventMap>> &
              Partial<EventHandlers>
          >
        >,
        Omit<InstanceProps<Group<Object3DEventMap>, typeof Group>, "object">
      >
    >,
) => {
  const groupRef = useRef<Group>(null);
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
    <group
      ref={groupRef}
      {...props}
      dispose={null}
    >
      <primitive
        object={model.scene}
        scale={0.5}
        castShadow
        receiveShadow
        position={[5, 0, 0]}
      />
    </group>
  );
};

export default DesktopModel;
