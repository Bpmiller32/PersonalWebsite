import { Canvas } from "@react-three/fiber";
import { TwistingNether } from "./TwistingNether";
import { FiberCamera } from "./FiberCamera";
import { memo } from "react";

export const GlExperience = memo(() => {
  return (
    <Canvas>
      {/* <OrbitControls makeDefault /> */}
      <FiberCamera />

      <TwistingNether />
    </Canvas>
  );
});
