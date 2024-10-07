import { motion } from "framer-motion";
import { SectionHeader } from "../global/SectionHeader";
import { HeaderBlock } from "./HeaderBlock";
import { MousePositionProvider } from "../utils/MouseContext";
import { DescriptionBlock } from "./DescriptionBlock";
import { ImagesBlock } from "./ImagesBlock";
import { LocationBlock } from "./LocationBlock";
import { HobbiesBlock } from "./HobbiesBlock";

export const AboutSection = () => {
  return (
    <MousePositionProvider>
      <section className="min-h-screen rounded-t-3xl relative -top-6 bg-projectBackground px-4 py-12 text-projectBright cursor-default">
        <SectionHeader title="About" titlePlacement="left" />
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
        >
          <HeaderBlock />
          <ImagesBlock />
          <DescriptionBlock />
          <LocationBlock />
          <HobbiesBlock />
        </motion.div>
      </section>
    </MousePositionProvider>
  );
};
