import { Canvas } from "@react-three/fiber";
import { TwistingNether } from "./TwistingNether";
import { ExperienceCamera } from "./ExperienceCamera";

export const GlExperience = () => {
  console.log("rendering glExp");

  return (
    <Canvas>
      {/* <OrbitControls makeDefault /> */}
      <ExperienceCamera />

      <TwistingNether />
    </Canvas>
  );
};
