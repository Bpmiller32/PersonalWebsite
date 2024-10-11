import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { WebsiteLogo } from "../global/WebsiteLogo";
import { FiMenu } from "react-icons/fi";
import { NavLinkMobile } from "./NavLinkMobile";
import { IoClose } from "react-icons/io5";

interface Props {
  refsArray: React.RefObject<HTMLDivElement>[];
}

export const NavMobile = ({ refsArray }: Props) => {
  const contentRef = useRef(null);
  const isContentVisible = useInView(contentRef, { once: true });

  const [active, setActive] = useState(false);

  // Links associated with section refs
  const links = [
    {
      text: "about",
      sectionRef: refsArray[1],
    },
    {
      text: "projects",
      sectionRef: refsArray[2],
    },
    {
      text: "experience",
      sectionRef: refsArray[3],
    },
    {
      text: "contact",
      sectionRef: refsArray[4],
    },
  ];

  // Lock or unlock scroll based on the menu state
  useEffect(() => {
    if (active) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll
      document.body.style.overflow = "";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <motion.div
      ref={contentRef}
      initial={{ opacity: 0, y: 15 }}
      animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative z-20"
    >
      <motion.div
        initial={false}
        animate={
          active
            ? {
                width: "calc(100% - 32px)",
                height: "500px",
                transition: {
                  type: "spring",
                  mass: 3,
                  stiffness: 400,
                  damping: 50,
                },
              }
            : {
                width: "80px",
                height: "80px",
                transition: {
                  type: "spring",
                  mass: 3,
                  stiffness: 400,
                  damping: 50,
                },
              }
        }
        className="absolute top-4 right-4 rounded-xl bg-projectBackground shadow-lg"
      />

      <motion.button
        initial={false}
        onClick={() => setActive((pv) => !pv)}
        className={`flex justify-center items-center group absolute right-4 top-4 z-20 h-20 w-20 transition-all hover:bg-projectBorder duration-500 ${
          active ? "rounded-bl-xl rounded-tr-xl" : "rounded-xl"
        }`}
      >
        <AnimatePresence>
          {active && (
            <motion.div
              key="first"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                // Entry transition
                opacity: { delay: 0.5, duration: 0.5 },
                // Exit transition
                rotate: { delay: 0 },
              }}
              exit={{ rotate: "-180deg" }}
              className="absolute"
            >
              <IoClose className="h-10 w-10 text-projectBright" />
            </motion.div>
          )}

          {!active && (
            <motion.div
              key="second"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                opacity: { delay: 0.5, duration: 0.5 },
                rotate: { delay: 0 },
              }}
              exit={{ rotate: "180deg" }}
              className="absolute"
            >
              <FiMenu className="h-10 w-10 text-projectBright" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {active && (
          <nav className="absolute right-4 top-4 z-10 w-[calc(100%_-_32px)] overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: -12, y: -12 }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                transition: { delay: 0.5, duration: 0.25, ease: "easeInOut" },
              }}
              exit={{ opacity: 0 }}
              onClick={() => setActive((pv) => !pv)}
              className="grid h-20 w-20 place-content-center rounded-br-xl rounded-tl-xl bg-projectBorder transition-colors hover:bg-projectBright duration-500"
            >
              <WebsiteLogo className="h-12 w-12" />
            </motion.div>

            <motion.div className="space-y-4 p-12 pl-4 md:pl-20">
              {links.map((link, idx) => {
                return (
                  <NavLinkMobile
                    key={link.text}
                    idx={idx}
                    text={link.text}
                    targetSection={link.sectionRef}
                    setActive={setActive}
                  />
                );
              })}
            </motion.div>
          </nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
