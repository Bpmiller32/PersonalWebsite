import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { WebsiteLogo } from "../global/WebsiteLogo";
import { NavMobileButton } from "./NavMobileButton";
import { NavMobileLink } from "./NavMobileLink";

interface Props {
  refsArray: React.RefObject<HTMLDivElement>[];
  sessionId?: string;
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

      <NavMobileButton active={active} setActive={setActive} />

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
                  <NavMobileLink
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
