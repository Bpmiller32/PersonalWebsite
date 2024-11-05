import { motion, useInView } from "framer-motion";
import { memo, useRef } from "react";
import { ActionButton } from "../global/ActionButton";
import { ScrambleText } from "../global/ScrambleText";
import { GlExperience } from "./GlExperience";

interface Props {
  sectionRef?: React.RefObject<HTMLDivElement>;
  targetRef?: React.RefObject<HTMLDivElement>;
}

export const HeroSection = memo(({ sectionRef, targetRef }: Props) => {
  const contentRef = useRef(null);
  const isContentVisible = useInView(contentRef, { once: true });

  const handleContactClick = (ref?: React.RefObject<HTMLElement>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-projectForeground"
    >
      <article className="absolute w-full h-full">
        <GlExperience />
      </article>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1.75, duration: 3 }}
        className="absolute w-full h-full bg-projectForeground"
      />

      <article className="h-full px-4">
        <div className="h-full max-w-5xl mx-auto flex flex-col justify-center">
          <div ref={contentRef} className="pointer-events-none relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="pointer-events-auto flex text-4xl sm:text-6xl font-black text-projectBright md:text-8xl"
            >
              <p className="text-shadow-black">Hi, I'm </p>
              &nbsp;
              <ScrambleText
                className="text-shadow-black"
                text="Billy"
                firstMountDelay={2000}
              />
              <span className="text-projectPrimary text-shadow-black">.</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pointer-events-auto flex my-2 text-xl sm:text-2xl text-projectDark md:my-4 md:text-4xl"
            >
              <p className="text-shadow-black">I'm a</p>
              &nbsp;
              <p className="font-semibold text-projectSecondary text-shadow-black">
                Full Stack
              </p>
              &nbsp;
              <ScrambleText
                text="Developer"
                firstMountDelay={2000}
                className="font-semibold text-projectSecondary text-shadow-black"
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-projectDark text-shadow-black md:text-base"
            >
              I've spent the last 5 years building and scaling software for some
              pretty cool companies. Let's connect!
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isContentVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <ActionButton
              onClick={() => handleContactClick(targetRef)}
              className="mt-4 md:mt-6 h-12 w-fit"
              text="Contact Me"
              colors={{
                borderColor: "border-projectPrimary",
                textColorBase: "text-projectBright",
                textColorHover: "text-projectBright",
                backgroundBase: "bg-projectPrimary/25",
                backgroundHover: "bg-projectSecondary",
              }}
            />
          </motion.div>
        </div>
      </article>
    </section>
  );
});
