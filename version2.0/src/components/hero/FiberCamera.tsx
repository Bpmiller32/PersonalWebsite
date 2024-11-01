import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

export const FiberCamera = () => {
  const camera = useThree((state) => state.camera);
  const target = new THREE.Vector3(-2, 0, 0);

  const heightSpeed = 0.05;
  const amplitude = 4; // Adjust height of the wave

  // const rotationSpeed = 0.001; // Adjust speed of the wave
  // const radius = 7.2;
  // const initialAngle = Math.atan2(
  //   camera.position.z - target.z,
  //   camera.position.x - target.x
  // ); // Calculate initial angle

  camera.position.set(-3, 4, 6);
  camera.lookAt(target);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (!camera) {
      return;
    }

    // // Calculate the current angle based on elapsed time and speed
    // const currentAngle = initialAngle + time * rotationSpeed;

    // // Update camera position using sine and cosine
    // camera.position.x = target.x + radius * Math.sin(currentAngle);
    // camera.position.z = target.z + radius * Math.cos(currentAngle);

    camera.position.y = amplitude * Math.cos(time * heightSpeed);

    camera.lookAt(target);
  });

  return null;
};
