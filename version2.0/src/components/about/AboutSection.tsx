import { motion } from "framer-motion";
import { SectionHeader } from "../utils/SectionHeader";
import { HeaderBlock } from "./HeaderBlock";
import { MousePositionProvider } from "../utils/MouseContext";
import { DescriptionBlock } from "./DescriptionBlock";
import { ImagesBlock } from "./ImagesBlock";
import { LocationBlock } from "./LocationBlock";

export const AboutSection = () => {
  return (
    <MousePositionProvider>
      <div className="min-h-screen bg-neutralBackgound px-4 py-12 text-textBright cursor-default">
        <SectionHeader title="About" dir="l" />
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
        </motion.div>
      </div>
    </MousePositionProvider>
  );
};
