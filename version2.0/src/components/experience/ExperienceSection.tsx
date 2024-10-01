import { SectionHeader } from "../global/SectionHeader";
import { CardList } from "./CardList";
import { JobList } from "./JobList";

export const ExperienceSection = () => {
  return (
    <section className="min-h-screen bg-neutralBackgound px-4 py-12 text-textBright cursor-default">
      <SectionHeader title="Experience" titlePlacement="left" />
      <CardList />
      <JobList />
    </section>
  );
};
