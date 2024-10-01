import { JobBase } from "./JobBase";

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
      "MS Access",
      "Wordpress",
      "TortoiseSvn",
      "AWS",
    ],
  },
  {
    title: "Louisiana Division of Administration",
    position: "IT Specialist",
    time: "2012 - 2016",
    location: "Baton Rouge, LA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
    tech: [
      "Python",
      "Active Directory",
      "Git",
      "GitHub",
      "Java",
      "Golang",
      "K8s",
    ],
  },
  {
    title: "Louisiana State University",
    position: "Network Infrastructure Engineer",
    time: "2010 - 2012",
    location: "Baton Rouge, LA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
    tech: [
      "Angular",
      "Python",
      "GCP",
      "Git",
      "GitHub",
      "Java",
      "Golang",
      "K8s",
    ],
  },
];

export const JobList = () => {
  return (
    <div className="max-w-7xl mt-12 mx-auto px-4">
      <JobBase {...experience[0]} />
      <JobBase drawBottomBorder={false} {...experience[1]} />
      <JobBase drawTitle={false} {...experience[2]} />
      <JobBase {...experience[3]} />
      <JobBase {...experience[4]} />
    </div>
  );
};
