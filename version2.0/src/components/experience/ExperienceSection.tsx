import { SectionHeader } from "../global/SectionHeader";
import { CardList } from "./CardList";
import { JobList } from "./JobList";

interface Props {
  sectionRef?: React.RefObject<HTMLElement>;
}

export const ExperienceSection = ({ sectionRef }: Props) => {
  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-4 pt-12 pb-8 text-projectBright cursor-default"
    >
      <SectionHeader title="Experience" titlePlacement="left" />
      <CardList />
      <JobList />
    </section>
  );
};
