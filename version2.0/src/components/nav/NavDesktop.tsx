import { motion, useInView } from "framer-motion";
import { LinkButton } from "../global/LinkButton";
import { WebsiteLogo } from "../global/WebsiteLogo";
import { NavLink } from "./NavLink";
import { useRef } from "react";

interface Props {
  refsArray: React.RefObject<HTMLDivElement>[];
}

export const NavDesktop = ({ refsArray }: Props) => {
  const contentRef = useRef(null);
  const isContentVisible = useInView(contentRef, { once: true });

  return (
    <nav className="absolute w-full top-5 flex justify-center z-10">
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 15 }}
        animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="w-fit flex items-center gap-6 rounded-lg border-[1px] border-projectBorder bg-projectForeground p-2 text-sm text-projectDark"
      >
        <WebsiteLogo
          className="ml-2 h-7 w-7 cursor-pointer"
          targetSection={refsArray[0]}
        />
        <NavLink text="About" targetSection={refsArray[1]} />
        <NavLink text="Projects" targetSection={refsArray[2]} />
        <NavLink text="Experience" targetSection={refsArray[3]} />
        <NavLink text="Contact" targetSection={refsArray[4]} />

        <LinkButton
          href="https://storage.googleapis.com/bpmillerwebsitestorage/Billy's%20Resume.docx.pdf"
          text="My Resume"
        />
      </motion.div>
    </nav>
  );
};
