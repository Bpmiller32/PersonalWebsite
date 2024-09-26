import { motion } from "framer-motion";
import { HeaderBlock } from "./HeaderBlock";
import { ImagesBlock } from "./ImagesBlock";
import { LocationBlock } from "./LocationBlock";
import { DescriptionBlock } from "./DescriptionBlock";

export const RevealBento = () => {
  return (
    <div className="min-h-screen bg-[#181b1b] px-4 py-12 text-[#fbfbfb] cursor-default">
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
  );
};
