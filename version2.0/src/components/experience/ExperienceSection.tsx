import { SectionHeader } from "../global/SectionHeader";
import { CardList } from "./CardList";
import { JobList } from "./JobList";

export const ExperienceSection = () => {
  return (
    <section className="min-h-screen bg-projectBackground px-4 pt-12 pb-8 text-projectBright cursor-default">
      <SectionHeader title="Experience" titlePlacement="left" />
      <CardList />
      <JobList />
    </section>
  );
};
