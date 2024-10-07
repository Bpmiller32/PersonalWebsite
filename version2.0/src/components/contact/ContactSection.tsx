import { SectionHeader } from "../global/SectionHeader";
import { MessageBox } from "./MessageBox";
import { InfoArea } from "./InfoArea";
import { FooterArea } from "./FooterArea";

export const ContactSection = () => {
  return (
    <section className="bg-projectBackground px-4 text-projectBright cursor-default">
      <SectionHeader title="Contact" titlePlacement="right" />

      <div className="max-w-5xl mx-auto">
        <div className="mb-12 flex flex-wrap justify-center min-[944px]:justify-between items-center gap-x-20 gap-y-12">
          <InfoArea />
          <MessageBox />
        </div>
        <FooterArea />
      </div>
    </section>
  );
};
