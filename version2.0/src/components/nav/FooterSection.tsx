import { NavLink } from "./NavLink";
import { WebsiteLogo } from "../global/WebsiteLogo";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrambleText } from "../global/ScrambleText";

interface Props {
  refsArray: React.RefObject<HTMLDivElement>[];
}

export const FooterSection = ({ refsArray }: Props) => {
  const currentYear = new Date().getFullYear();

  const loadingBarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef(null);
  const isContentVisible = useInView(contentRef, { once: true });

  return (
    <footer
      ref={contentRef}
      className="w-full px-4 pt-12 pb-10 text-projectBright"
    >
      <motion.div
        ref={loadingBarRef}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isContentVisible ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="max-w-5xl mx-auto mb-5 h-[1px] bg-projectBorder"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto flex flex-wrap justify-center items-center min-[700px]:justify-between gap-x-20 gap-y-4"
      >
        <div className="flex items-center space-x-4 min-[400px]:space-x-6">
          <WebsiteLogo
            className="h-8 w-8 cursor-pointer"
            targetSection={refsArray[0]}
          />
          <NavLink text="About" targetSection={refsArray[1]} />
          <NavLink text="Projects" targetSection={refsArray[2]} />
          <NavLink text="Experience" targetSection={refsArray[3]} />
          <NavLink text="Contact" targetSection={refsArray[4]} />
        </div>

        <div className="text-projectDark flex items-center">
          <p>{currentYear} | Designed by</p>
          &nbsp;
          <ScrambleText text="Billy Miller" />
        </div>
      </motion.div>
    </footer>
  );
};
