import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { GalaxyMesh } from "./GalaxyMesh";

export const GlExperience = () => {
  return (
    <Canvas>
      <OrbitControls makeDefault />

      <Suspense
        fallback={
          <mesh position-x={2} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
        }
      >
        <GalaxyMesh />
      </Suspense>
    </Canvas>
  );
};
