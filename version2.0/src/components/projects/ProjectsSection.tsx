import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "../global/SectionHeader";
import { BaseProject } from "./BaseProject";
import { VerticalAccordion } from "./VerticalAccordion";
import FireGame from "../../assets/projectFireGame.webp";
import WebGLGT from "../../assets/projectWebGLGT.webp";
import ArgosyDirMaker from "../../assets/projectArgosyDirMaker.webp";
import RafWebsite from "../../assets/projectRafWebsite.webp";
import RafWebsiteOld from "../../assets/projectRafWebsiteOld.webp";
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
    techUsed: [
      "Three.js",
      "Stable-Baselines",
      "PPO Neural Network",
      "Rapier",
      "React",
      "Tailwind",
    ],
    description: `A two-part project. First, a recreation of the classic Donkey Kong arcade game in my custom WebGL based game engine.
    
    Next, an interactive simulation environment to train and test a Proximal Policy Optimization (PPO) reinforcement learning algorithm.
    
    Combines game design with cutting-edge AI, where the recreated game environment enables a model to learn strategies and optimize gameplay performance. Both a homage to one of my favorite games and a fun experimental learning tool for reinforcement learning techniques.`,
    liveLink: "https://firegamedk.web.app",
    githubLink: "https://github.com/Bpmiller32/FireGame",
  },
  {
    title: "Argosy DirMaker",
    image: ArgosyDirMaker,
    techUsed: [
      "Vue.js",
      "Anime.js",
      "Tailwind",
      "React Router",
      "Firebase",
      "Asp.Net",
      "Entity Framework",
      "SQL Server",
      "Swagger/Swashbuckle",
      "PuppeteerSharp",
      "Fla.UI",
      "HtmlAgilityPack",
      "MailKit",
      "Serilog",
    ],
    description: `Concurrent, multi-threaded, full-stack application used to gather, catalog, compile, and distribute critical directories on multiple timelines and deadlines. 
    
    Fully automates a time-consuming manual process that previously took a week of collaboration among several team members.`,
    showLinks: true,

    liveLink: "https://rafdirmaker.web.app",
    githubLink: "https://github.com/Bpmiller32/ArgosyDirMaker",
  },
  {
    title: "WebGLGT",
    image: WebGLGT,
    techUsed: [
      "Three.js",
      "Vue.js",
      "Tailwind",
      "Google Cloud Vision AI",
      "Axios",
      "Firebase",
      "Firestore",
      "Google Authentication",
      "Mitt",
      "Express.js",
      "JWT",
      "Sharp",
      "Playwright",
    ],
    description: `A custom WebGL interface with adaptable tooling and shortcuts to aid in ground truthing and tagging image sets for use in neutral nets.
      
    Optimizes previous workflow by 70%+ per piece by changing the approach from manual entry to review and approval using Google Vision AI.`,
    showLinks: true,
    liveLink: "https://webglgt.web.app",
    githubLink: "https://github.com/Bpmiller32/WebGLGT",
  },
  {
    title: "RAF Technology",
    image: RafWebsite,
    techUsed: [
      "Webflow",
      "Tailwind",
      "Lottie",
      "Firebase Functions",
      "Google Analytics",
    ],
    description: `RAF is a global leader in AI-driven pattern recognition, intelligent data extraction, and signature verification software for enterprise, government, and postal authorities. 
    
    This is the latest in a series of 3 web solutions I've designed for them. This iteration showcases a major marketing upgrade and is implemented using Webflow to empower faster marketing team contributions and real-time collaboration.`,
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
      "React",
      "Asp.Net",
      "JWT",
      "Entity Framework",
      "SQL Server",
      "Swagger/Swashbuckle",
      "Serilog",
      "PdfPig",
      "HtmlAgilityPack",
      "Discord Webhooks",
    ],
    description:
      "Full-stack application that web scrapes California Department of Transportation contracts, intelligently scans multiple documents to extract and tag relevant information, and provides a Web API for contract management and review.",
    liveLink: "https://caltrans-3d33e.web.app/",
    githubLink: "https://github.com/Bpmiller32/CalTransApi",
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
    liveLink: "https://billmill.dev",
    githubLink: "https://github.com/Bpmiller32/PersonalWebsite",
  },
  {
    title: "Portfolio Website (Previous)",
    image: PersonalWebsiteOld,
    techUsed: [
      "Vue.js",
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
    title: "RAF Technology (Previous)",
    image: RafWebsiteOld,
    techUsed: [
      "Nuxt",
      "Tailwind",
      "Lottie",
      "Firebase Functions",
      "Google Analytics",
    ],
    description: `RAF is a global leader in AI-driven pattern recognition, intelligent data extraction, and signature verification software for enterprise, government, and postal authorities.
    
    This is the 2nd in a series of 3 web solutions I've designed for them. This iteration is built with Nuxt, leveraging its powerful server-side rendering (SSR) for fast load times, SEO optimization, and enhanced performance across all devices. Also uses Lottie animations for a polished user experience and Google Analytics to provide insights needed to refine marketing strategies and boost sales.`,
    showLinks: true,
    liveLink: "https://raftechnologywebsite.web.app",
    githubLink: "https://github.com/Bpmiller32/RafWebsite",
  },
  {
    title: "Backend Tools + Compiler Utilities",
    image: IomMaker,
    techUsed: ["WinForms", "Serilog", "Service Controller"],
    description: `An assortment of backend projects, including a socket connection interface for image and result transfer, a socket control port interface, a C# wrapper for a proprietary image and process-metadata format, an Outlook email reader, and additional scripts and tools.
    
    Additionally, BE-powered utility applications developed to compile mailing directories by validating raw address data against the Isle of Man and Royal Mail postal standards, rules, and schema.`,
    githubLink: "https://github.com/Bpmiller32/RafTools",
  },
  {
    title: "Embedded and IoT Projects",
    image: RaspberryPi,
    techUsed: [
      "KiCad",
      "Python",
      "C#",
      "Python.Net",
      "MailKit",
      "Serilog",
      "Raspberry Pi",
      "ESP32",
    ],
    description: `A custom circuit solution to restore and improve my cat's broken automated litter box. Effectively replacing faulty components and ensuring long-term reliability. 
      
      A worker service to monitor temperature, humidity, pressure, and light levels in a server room - ensuring optimal environmental conditions. Automatically triggers alerts to a designated mailing group when thresholds are exceeded, enabling proactive maintenance. Built using a BME280 sensor, Raspberry Pi, and a custom circuit. 
      
      A custom device that detects potential drowning incidents in a pool by monitoring movement patterns, water & submersion detection - enhancing pool safety with real-time alerts. Utilizes an ESP32-C3 along with photoelectric, capacitive, barometric, and IMU senors.`,
    githubLink: "https://github.com/Bpmiller32/PiProjects",
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
