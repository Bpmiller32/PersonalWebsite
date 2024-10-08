import { BaseJob } from "./BaseJob";

const experience = [
  {
    title: "Constellation Software - Volaris Group",
    position: "Engineering Manager",
    time: "2023 - Present",
    location: "Seattle, WA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
    tech: [
      "React",
      "ThreeJs",
      "Framer Motion",
      "React Three Fiber",
      "ExpressJs",
      "Playwright",
      "Google Firebase",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Matthews International",
    position: "Techservices Manager",
    time: "2020 - 2023",
    location: "Redmond, WA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
    tech: [
      "VueJs",
      "Tailwind",
      "AnimeJs",
      "C#",
      "Asp.Net",
      "Entity Framework",
      "FlaUi",
      "PuppeteerSharp",
      "Serilog",
      "Mailkit",
      "Google Firebase",
      "Git",
      "GitHub",
      "Vultr",
    ],
  },
  {
    title: "Matthews International",
    position: "Software Engineer",
    time: "2016 - 2020",
    location: "Redmond, WA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
    tech: [
      "C#",
      "Powershell",
      "Vb.Net",
      "Winforms",
      "Telerik",
      "MongoDb",
      "MS Access",
      "Wordpress",
      "TortoiseSvn",
      "AWS",
    ],
  },
  {
    title: "Louisiana State University",
    position: "Network Infrastructure Engineer",
    time: "2012 - 2016",
    location: "Baton Rouge, LA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
    tech: ["ARM v4-v7", "Verilog", "Keil", "Pspice", "EaglePCB", "Xbee", "DSP"],
  },
  {
    title: "Louisiana Division of Administration",
    position: "IT Specialist",
    time: "2010 - 2012",
    location: "Baton Rouge, LA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
    tech: [
      "Active Directory",
      "Powershell",
      "Windows Server Orchestration",
      "Veeam",
      "Nginx",
      "IIS",
    ],
  },
];

export const JobList = () => {
  return (
    <div className="max-w-5xl mt-12 mx-auto">
      <BaseJob {...experience[0]} />
      <BaseJob {...experience[1]} />
      <BaseJob {...experience[2]} />
      <BaseJob {...experience[3]} />
      <BaseJob renderBottomBorder={false} {...experience[4]} />
    </div>
  );
};
