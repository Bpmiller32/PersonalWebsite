import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MousePositionProvider } from "../utils/MousePositionProvider";
import { SectionHeader } from "../global/SectionHeader";
import { HeaderBlock } from "./HeaderBlock";
import { DescriptionBlock } from "./DescriptionBlock";
import { ImagesBlock } from "./ImagesBlock";
import { LocationBlock } from "./LocationBlock";
import { HobbiesBlock } from "./HobbiesBlock";

interface Props {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

export const AboutSection = memo(({ sectionRef }: Props) => {
  const contentRef = useRef(null);
  const isContentVisible = useInView(contentRef, { once: true });

  return (
    <MousePositionProvider>
      <div
        ref={sectionRef}
        className="rounded-t-3xl relative -top-6 bg-projectBackground px-4 pt-12 text-projectBright cursor-default"
      >
        <SectionHeader title="About" titlePlacement="left" />

        <motion.article
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
        </motion.article>
      </div>
    </MousePositionProvider>
  );
});
