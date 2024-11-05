import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

export const FiberCamera = () => {
  const camera = useThree((state) => state.camera);
  const target = new THREE.Vector3(-2, 0, 0);

  const heightSpeed = 0.05;
  const amplitude = 2.5;

  camera.position.set(-3, 2.5, 6);
  camera.lookAt(target);

  useFrame((state) => {
    if (!camera) {
      return;
    }

    const time = state.clock.getElapsedTime();

    camera.position.y = amplitude * Math.cos(time * heightSpeed);
    camera.lookAt(target);
  });

  return null;
};
