import { SectionHeader } from "../global/SectionHeader";
import { FooterArea } from "./FooterArea";
import { FormArea } from "./FormArea";
import { InfoArea } from "./InfoArea";

export const ContactSection = () => {
  return (
    <section className="min-h-screen bg-neutralBackgound px-4 text-textBright cursor-default">
      <SectionHeader title="Contact" titlePlacement="right" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-wrap justify-center items-center gap-x-20">
          <InfoArea />
          <FormArea />
        </div>
        <FooterArea />
      </div>
    </section>
  );
};
