import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { TwistingNether } from "./TwistingNether";

export const GlExperience = () => {
  console.log("rendering glExp");

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
      ></Suspense>
      <TwistingNether />
    </Canvas>
  );
};
