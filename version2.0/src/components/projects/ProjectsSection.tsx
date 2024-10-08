import { SectionHeader } from "../global/SectionHeader";
import { BaseProject } from "./BaseProject";

interface Props {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

export const ProjectsSection = ({ sectionRef }: Props) => {
  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-projectBackground px-4 pt-12 text-projectBright cursor-default"
    >
      <SectionHeader title="Projects" titlePlacement="right" />

      <div className="max-w-5xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2">
        <BaseProject
          title="ML WebGL DonkeyKong"
          techUsed={["React", "React Three Fiber", "Rapier", "Tailwind"]}
        />
        <BaseProject
          title="Argosy DirMaker"
          techUsed={[
            "React",
            "AnimeJs",
            "Tailwind",
            "React Router",
            "Firebase",
            "Asp.Net",
            "Entity Framework",
            "SQL Server",
            "Swagger/Swashbuckle",
            "PuppeteerSharp",
            "Fla.Ui",
            "HtmlAgilityPack",
            "MailKit",
            "Serilog",
          ]}
          description="Concurrent, multi-threaded, full-stack program used to distribute critical directories on multiple timelines and deadlines. Fully automates a time-consuming manual process that previously took a week of collaboration among several team members."
          liveLink="https://rafdirmaker.web.app"
        />
        <BaseProject
          title="WebGLGT"
          techUsed={[
            "Three",
            "Vue",
            "VueUse/Motion",
            "Tailwind",
            "Google Cloud Vision AI",
            "Axios",
            "Firebase",
            "Firestore",
            "Mitt",
            "Express",
            "Playwright",
          ]}
          description="A custom WebGL interface with adaptable tools and shortcuts to aid in ground truthing and tagging image sets. Optimizes previous workflow by 70+% per piece by changing the approach from manual entry to review and approval using Google Vision AI."
          liveLink="https://webglgt.web.app"
        />
        <BaseProject
          title="RAF Technology"
          techUsed={[
            "Nuxt",
            "Tailwind",
            "Lottie",
            "Webflow",
            "Firebase Functions",
            "Google Analytics",
          ]}
          description="RAF is a global leader in AI-driven pattern recognition, intelligent data extraction, and signature verification software for enterprise, government, and postal authorities. This is the latest interation of the 3 web solutions I made for them."
          liveLink="https://www.raf.com"
        />
      </div>
    </section>
  );
};
