import { motion, useInView } from "framer-motion";
import { SectionHeader } from "../global/SectionHeader";
import { HeaderBlock } from "./HeaderBlock";
import { DescriptionBlock } from "./DescriptionBlock";
import { ImagesBlock } from "./ImagesBlock";
import { LocationBlock } from "./LocationBlock";
import { HobbiesBlock } from "./HobbiesBlock";
import { MousePositionProvider } from "../utils/MousePositionProvider";
import { useRef } from "react";

interface Props {
  sectionRef?: React.RefObject<HTMLElement>;
}

export const AboutSection = ({ sectionRef }: Props) => {
  const contentRef = useRef(null);
  const isContentVisible = useInView(contentRef, { once: true });

  return (
    <MousePositionProvider>
      <section
        ref={sectionRef}
        className="rounded-t-3xl relative -top-6 bg-projectBackground px-4 pt-12 text-projectBright cursor-default"
      >
        <SectionHeader title="About" titlePlacement="left" />

        <motion.div
          ref={contentRef}
          initial="initial"
          animate={isContentVisible ? "animate" : ""}
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
