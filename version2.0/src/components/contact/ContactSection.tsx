import { SectionHeader } from "../global/SectionHeader";
import { MessageBox } from "./MessageBox";
import { InfoArea } from "./InfoArea";

interface Props {
  sectionRef?: React.RefObject<HTMLElement>;
}

export const ContactSection = ({ sectionRef }: Props) => {
  return (
    <section
      ref={sectionRef}
      className="px-4 text-projectBright cursor-default"
    >
      <SectionHeader title="Contact" titlePlacement="right" />

      <div className="max-w-5xl mx-auto mb-12 flex flex-wrap justify-center min-[944px]:justify-between items-center gap-x-20 gap-y-12">
        <InfoArea />
        <MessageBox />
      </div>
    </section>
  );
};
