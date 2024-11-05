import { memo } from "react";
import { Canvas } from "@react-three/fiber";
import { TwistingNether } from "./TwistingNether";
import { FiberCamera } from "./FiberCamera";

export const GlExperience = memo(() => {
  return (
    <Canvas>
      <FiberCamera />
      <TwistingNether />
    </Canvas>
  );
});
