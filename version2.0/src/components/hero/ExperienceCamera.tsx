import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

export const ExperienceCamera = () => {
  console.log("rendering ExperienceCamera");

  const camera = useThree((state) => state.camera);
  const renderSize = useThree((state) => state.size);

  console.log("rendersize: ", renderSize);

  useEffect(() => {
    const target = new THREE.Vector3(-2, 0, 0);

    // Set initial camera position
    camera.position.set(-3, 4, 6);
    // camera.rotation.set(-0.6, 0, 0);
    camera.lookAt(target);

    // Function to handle key presses
    const handleKeyDown = (event: KeyboardEvent) => {
      const step = 0.5; // Step size for camera movement
      const rotationStep = 0.1; // Step size for camera rotation

      if (event.key === "a") {
        // Move camera to the left
        camera.position.x -= step;
      } else if (event.key === "d") {
        // Move camera to the right
        camera.position.x += step;
      } else if (event.key === "w") {
        camera.position.y -= step;
      } else if (event.key === "s") {
        camera.position.y += step;
      }

      console.log("camera position: ", camera.position);
      console.log("camera rotation: ", camera.rotation);
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [camera]);

  return null;
};
