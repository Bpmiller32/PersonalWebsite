import { motion } from "framer-motion";
import { SectionHeader } from "../global/SectionHeader";
import { Example } from "./BaseCard";

export const ExperienceSection = () => {
  return (
    <div className="min-h-screen bg-neutralBackgound px-4 py-12 text-textBright cursor-default">
      <SectionHeader title="Experience" titlePlacement="right" />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto max-w-4xl"
      >
        <Example />
        {/* <HeaderBlock /> */}
      </motion.div>
    </div>
  );
};
