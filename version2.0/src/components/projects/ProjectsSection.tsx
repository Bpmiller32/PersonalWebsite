import { SectionHeader } from "../global/SectionHeader";
import { BaseProject } from "./BaseProject";

interface Props {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

export const ProjectsSection = ({ sectionRef }: Props) => {
  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-projectBackground px-4 pt-12 pb-8 text-projectBright cursor-default"
    >
      <SectionHeader title="Projects" titlePlacement="right" />

      <div className="max-w-5xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2">
        <BaseProject title="ML DonkeyKong" />
        <BaseProject title="Argosy DirMaker" />
        <BaseProject title="WebGlGt" />
        <BaseProject title="RAF Technology" techUsed={["asdf", "jkl;"]} />
      </div>
    </section>
  );
};
