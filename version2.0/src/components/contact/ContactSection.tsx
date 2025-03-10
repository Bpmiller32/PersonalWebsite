import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "../global/SectionHeader";
import { MessageBox } from "./MessageBox";
import { InfoArea } from "./InfoArea";

interface Props {
  sectionRef?: React.RefObject<HTMLElement>;
  sessionId?: string;
}

export const ContactSection = memo(({ sectionRef, sessionId }: Props) => {
  const contentRef = useRef(null);
  const isContentVisible = useInView(contentRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="px-4 pt-12 text-projectBright cursor-default"
    >
      <SectionHeader title="Contact" titlePlacement="right" />

      <motion.article
        ref={contentRef}
        initial={{ opacity: 0, y: 15 }}
        animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto flex flex-wrap justify-center min-[944px]:justify-between items-center gap-x-20 gap-y-12"
      >
        <InfoArea sessionId={sessionId} />
        <MessageBox />
      </motion.article>
    </section>
  );
});
