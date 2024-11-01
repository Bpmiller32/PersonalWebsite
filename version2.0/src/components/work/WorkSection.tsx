import { motion, useInView } from "framer-motion";
import { SectionHeader } from "../global/SectionHeader";
import { CardList } from "./CardList";
import { JobList } from "./JobList";
import { memo, useRef } from "react";
import { LinkButton } from "../global/LinkButton";
import { IoMdDocument } from "react-icons/io";

interface Props {
  sectionRef?: React.RefObject<HTMLElement>;
}

export const WorkSection = memo(({ sectionRef }: Props) => {
  const cardsRef = useRef(null);
  const isCardsVisible = useInView(cardsRef, { once: true });

  const resumeRef = useRef(null);
  const isResumeVisible = useInView(resumeRef, { once: true });

  const jobsRef = useRef(null);
  const isJobsVisible = useInView(jobsRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="px-4 pt-12 text-projectBright cursor-default"
    >
      <SectionHeader title="Experience" titlePlacement="left" />

      <motion.article
        ref={cardsRef}
        initial="initial"
        animate={isCardsVisible ? "animate" : ""}
        transition={{
          staggerChildren: 0.05,
        }}
      >
        <CardList />
      </motion.article>

      <motion.article
        ref={resumeRef}
        initial={{ opacity: 0, y: 15 }}
        animate={isResumeVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex justify-center my-10"
      >
        <LinkButton
          href="https://storage.googleapis.com/bpmillerwebsitestorage/Billy's%20Resume.docx.pdf"
          text={
            <div className="flex justify-center items-center space-x-2">
              <p>My Resume</p>
              <IoMdDocument className="h-5 w-5" />
            </div>
          }
          className="h-12"
        />
      </motion.article>

      <motion.article
        ref={jobsRef}
        initial="initial"
        animate={isJobsVisible ? "animate" : ""}
        transition={{
          staggerChildren: 0.05,
        }}
      >
        <JobList />
      </motion.article>
    </section>
  );
});
