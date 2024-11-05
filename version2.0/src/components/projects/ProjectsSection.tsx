import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "../global/SectionHeader";
import { BaseProject } from "./BaseProject";
import { VerticalAccordion } from "./VerticalAccordion";
import FireGame from "../../assets/projectFireGame.webp";
import WebGLGT from "../../assets/projectWebGLGT.webp";
import ArgosyDirMaker from "../../assets/projectArgosyDirMaker.webp";
import RafWebsite from "../../assets/projectRafWebsite.webp";
import Dmi from "../../assets/projectDmi.webp";
import PersonalWebsiteCurrent from "../../assets/projectPersonalWebsiteCurrent.webp";
import PersonalWebsiteOld from "../../assets/projectPersonalWebsiteOld.webp";
import IomMaker from "../../assets/projectIomMaker.webp";
import CalTrans from "../../assets/projectCalTrans.webp";
import RaspberryPi from "../../assets/projectRaspberryPi.webp";

const showcaseProjects = [
  {
    title: "ML WebGL DonkeyKong",
    image: FireGame,
    techUsed: ["React", "React Three Fiber", "Rapier", "Tailwind"],
    description: `WebGL recreation of the classic Donkey Kong arcade game, used as an interactive simulation platform to train and test a Proximal Policy Optimization (PPO) reinforcement learning algorithm.
    
    Combines retro game design with cutting-edge AI, where the recreated environment enables a model to learn strategies and optimize gameplay performance, navigating through levels and overcoming obstacles as an AI agent learns progressively from its interactions.
    
    Both a homage to one of my favorite games and a fun experimental learning tool for reinforcement learning techniques.`,
  },
  {
    title: "Argosy DirMaker",
    image: ArgosyDirMaker,
    techUsed: [
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
    ],
    description: `Concurrent, multi-threaded, full-stack program used to gather, catalog, compile, and distribute critical directories on multiple timelines and deadlines. 
    
    Fully automates a time-consuming manual process that previously took a week of collaboration among several team members.`,
    showLinks: true,

    liveLink: "https://rafdirmaker.web.app",
    githubLink: "https://github.com/Bpmiller32/RafTools",
  },
  {
    title: "WebGLGT",
    image: WebGLGT,
    techUsed: [
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
    ],
    description: `A custom WebGL interface with adaptable tooling and shortcuts to aid in ground truthing and tagging image sets for use in neutral nets.
      
    Optimizes previous workflow by 70+% per piece by changing the approach from manual entry to review and approval using Google Vision AI.`,
    showLinks: true,
    liveLink: "https://webglgt.web.app",
    githubLink: "https://github.com/Bpmiller32/RafTools",
  },
  {
    title: "RAF Technology",
    image: RafWebsite,
    techUsed: [
      "Nuxt",
      "Tailwind",
      "Lottie",
      "Webflow",
      "Firebase Functions",
      "Google Analytics",
    ],
    description:
      "RAF is a global leader in AI-driven pattern recognition, intelligent data extraction, and signature verification software for enterprise, government, and postal authorities. This is the latest iteration of 3 web solutions I made for them.",
    showLinks: true,
    liveLink: "https://www.raf.com",
    githubLink: "https://github.com/Bpmiller32/RafWebsite",
  },
];

const additionalProjects = [
  {
    title: "CalTrans Project Manager",
    image: CalTrans,
    techUsed: [
      "Asp.Net",
      "Authentication with Jwt",
      "Entity Framework",
      "SQL Server",
      "Swagger/Swashbuckle",
      "Serilog",
      "PdfPig",
      "HtmlAgilityPack",
      "Discord Webhooks",
    ],
    description:
      "A tool that web scrapes all California Department of Transportation contracts, intelligently scans multiple documents to extract and tag relevant information, and provides a Web API for contract management and review.",
  },
  {
    title: "Dangerous Mail Investigation",
    image: Dmi,
    techUsed: ["WinForms", "Telerik", "Entity Framework", "MongoDb"],
    description:
      "In partnership with the USPS, a solution to automate the viewing and analysis of thousands of mailpiece images. This solution uses OCR technology combined with intelligent search, sorting, and filtering to identify mailpieces with characteristics similar to a previously identified dangerous item.",
  },
  {
    title: "Portfolio Website (Current)",
    image: PersonalWebsiteCurrent,
    techUsed: [
      "React",
      "React Three Fiber",
      "Framer Motion",
      "Tailwind",
      "Lottie",
      "Firebase",
      "Firebase Functions",
      "Custom Analytics",
    ],
    description:
      "My current portfolio and personal website, highlighting my most recent work, skills, and accomplishments - all updated for the year.",
    liveLink: "https://bpmiller.com",
    githubLink: "https://github.com/Bpmiller32/PersonalWebsite",
  },
  {
    title: "Portfolio Website (Previous)",
    image: PersonalWebsiteOld,
    techUsed: [
      "Vue",
      "VueUse/Motion",
      "Tailwind",
      "Firebase",
      "Firebase Functions",
    ],
    description:
      "My old portfolio and personal website, highlighting my most recent work, skills, and accomplishments - all updated for the year.",
    liveLink: "https://bpmillerpersonalwebsiteold.web.app",
    githubLink: "https://github.com/Bpmiller32/PersonalWebsite",
  },
  {
    title: "Raspberry Pi Projects",
    image: RaspberryPi,
    techUsed: ["Python", "C#", "Python.Net", "MailKit", "Serilog", "BME280"],
    description: `Solution to repair my cat’s broken automated litterbox using a mechanical relay and a custom circuit. 
      
      Worker service designed to monitor temperature (and humidity, pressure, and light) levels in a server room, sending alerts to a mailing group when specific thresholds are exceeded. 
      
      Scripts to make a mock GameBoy case for the Pi Zero work.`,
    githubLink: "https://github.com/Bpmiller32/PiProjects",
  },
  {
    title: "Isle of Man Data Compiler",
    image: IomMaker,
    techUsed: ["WinForms", "Serilog", "Service Controller"],
    description:
      "Utility application used to compile mailing directories by validating raw address data against the ruleset and schema of Isle of Man and Royal Mail postal standards.",
    githubLink: "https://github.com/Bpmiller32/RafTools",
  },
];

interface Props {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

export const ProjectsSection = memo(({ sectionRef }: Props) => {
  const contentRef = useRef(null);
  const isContentVisible = useInView(contentRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="bg-projectBackground px-4 pt-12 text-projectBright cursor-default"
    >
      <SectionHeader title="Projects" titlePlacement="right" />

      <motion.article
        ref={contentRef}
        initial="initial"
        animate={isContentVisible ? "animate" : ""}
        transition={{
          staggerChildren: 0.05,
        }}
        className="max-w-5xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2"
      >
        {showcaseProjects.map((project) => {
          return <BaseProject key={project.title} {...project} />;
        })}
      </motion.article>

      <VerticalAccordion
        defaultOpen={false}
        children={
          <div className="max-w-5xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2">
            {additionalProjects.map((project) => {
              return <BaseProject key={project.title} {...project} />;
            })}
          </div>
        }
      ></VerticalAccordion>
    </section>
  );
});
