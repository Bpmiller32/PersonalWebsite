import { motion, useInView } from "framer-motion";
import { SectionHeader } from "../global/SectionHeader";
import { CardList } from "./CardList";
import { JobList } from "./JobList";
import { useRef } from "react";

interface Props {
  sectionRef?: React.RefObject<HTMLElement>;
}

export const ExperienceSection = ({ sectionRef }: Props) => {
  const cardsRef = useRef(null);
  const isCardsVisible = useInView(cardsRef, { once: true });

  const jobsRef = useRef(null);
  const isJobsVisible = useInView(jobsRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="px-4 pt-12 text-projectBright cursor-default"
    >
      <SectionHeader title="Experience" titlePlacement="left" />

      <motion.div
        ref={cardsRef}
        initial="initial"
        animate={isCardsVisible ? "animate" : ""}
        transition={{
          staggerChildren: 0.05,
        }}
      >
        <CardList />
      </motion.div>

      <motion.div
        ref={jobsRef}
        initial="initial"
        animate={isJobsVisible ? "animate" : ""}
        transition={{
          staggerChildren: 0.05,
        }}
      >
        <JobList />
      </motion.div>
    </section>
  );
};
