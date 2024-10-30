import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  title: string;
  titlePlacement?: "left" | "right";
}

export const SectionHeader = ({ title, titlePlacement = "right" }: Props) => {
  const contentRef = useRef(null);
  const isContentVisible = useInView(contentRef, { once: true });

  return (
    <header
      ref={contentRef}
      className="w-full max-w-5xl flex justify-center mx-auto"
    >
      <div
        className="flex items-center justify-center w-full gap-8 mb-12"
        style={{
          flexDirection: titlePlacement === "right" ? "row" : "row-reverse",
        }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isContentVisible ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className={
            "w-full h-[1px] bg-projectBorder scale-x-0 " +
            (titlePlacement === "left"
              ? "origin-top-left "
              : "origin-top-right ")
          }
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5 }}
          className="text-3xl md:text-5xl font-black text-end"
        >
          {title}
          <span className="text-projectPrimary">.</span>
        </motion.p>
      </div>
    </header>
  );
};
