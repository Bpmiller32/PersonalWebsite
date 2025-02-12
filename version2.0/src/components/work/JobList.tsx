import { BaseJob } from "./BaseJob";
import { VerticalAccordion } from "../projects/VerticalAccordion";
import ConstellationLogo from "../../assets/constellation.webp";
import MatthewsLogo from "../../assets/matthews.webp";
import RafLogo from "../../assets/raf.webp";
import LdoaLogo from "../../assets/ldoa.webp";
import LsuLogo from "../../assets/lsu.webp";

const experience = [
  {
    title: "Constellation Software - Volaris Group",
    logo: ConstellationLogo,
    position: "Solutions Engineering Manager",
    time: "2023 - Present",
    location: "Seattle, WA",
    description: `✧ Leading the team responsible for customer relations, support, and licensing while releasing, providing feedback, and supporting new product versions. Assisting with product deployment across diverse customer scenarios and gathering insights from implementation to inform future iterative product improvements.

    ✧ Fostering relationships with key partner stakeholders. Leading regular discussions to align on project goals, gather feedback, and identify opportunities for improvement. Providing technical guidance and tailored engineering solutions to address specific business challenges.

    ✧ Designed, developed, and currently maintaining a workflow automation tool that improves OCR engine and neural network training efficiency by 70%+, accelerating data preprocessing and improving model accuracy.

    ✧ Collaborating with sales and marketing teams to develop compelling presentations and technical documentation that effectively showcase product features and benefits to clients.`,
    tech: [
      "Three.js",
      "React",
      "React Three Fiber",
      "Framer Motion",
      "Express.js",
      "Playwright",
      "Google Firebase",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Matthews International",
    logo: MatthewsLogo,
    position: "Techservices Manager",
    time: "2020 - 2023",
    location: "Redmond, WA",
    description: `✧ Continued the development of both new and existing product offerings, focusing on dashboards and development utilities, and utilizing multiple technologies to create 7 extension products and 3 new products.

    ✧ Managed and oversaw the organization’s IT operations, including infrastructure, systems administration, and internal technical support.
    
    ✧ Served as a primary point of contact for escalated technical issues, acting as a liaison to ensure customer needs were effectively communicated and addressed both externally and internally.
    
    ✧ Directed the migration of the USPS CASS cycle for our core postal products, ensuring a seamless transition and compliance with industry standards. Actively engaged in virtual and in-person conferences to align timing and development scheduling and deployment.
    
    ✧ Led the successful relocation of server infrastructure and networking equipment between multiple buildings, ensuring minimal downtime and disruption to business operations.
    
    ✧ Improved operational efficiency and reduced annual IT operating costs by 84% through various initiatives, including re-evaluating and optimizing cloud services, as well as discontinuing unnecessary legacy systems.`,
    tech: [
      "Vue.js",
      "Tailwind",
      "Anime.js",
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
      "AWS",
      "Vultr",
    ],
  },
  {
    title: "RAF Technology",
    logo: RafLogo,
    position: "Software Engineer",
    time: "2016 - 2020",
    location: "Redmond, WA",
    description: `✧ Developed custom implementation patterns for extension products of our core OCR solution, creating programming solutions that controlled the logic flow and functionality of the engine, ultimately transforming workflows into distinctive product offerings.
    
    ✧ Developed a custom directory compilation suite that automated previously manual procedures, resulting in substantial time and resource savings for the company each month.
    
    ✧ Served as the lead Electrical Engineer for the Print Code Verification project, designing and assembling circuits, integrating components and enclosures, and acting as the sales engineering representative during product demonstrations.
    
    ✧ Designed and implemented a custom CRM software solution that integrated with the wiki and bug tracking systems, significantly improving workflow and collaboration among QA, Development, and Technical Services teams.
    
    ✧ Spearheaded the development and management of the current RAF websites, internal knowledge base wiki, and technical documentation, utilizing a variety of front-end and back-end frameworks and databases.
    
    ✧ Created and executed trade show demonstrations and conducted workshops for clients, resulting in increased user adoption and satisfaction.`,
    tech: [
      "C#",
      "Powershell",
      "Vb.Net",
      "Winforms",
      "Telerik",
      "MongoDb",
      "MS Access",
      "Vue.js",
      "Asp.Net",
      "Entity Framework",
      "Wordpress",
      "TortoiseSvn",
      "AWS",
    ],
  },
  {
    title: "Louisiana Division of Administration",
    logo: LdoaLogo,
    position: "IT Specialist",
    time: "2012 - 2016",
    location: "Baton Rouge, LA",
    description: `✧ Collaborated with the Chief Information Officer and IT team to evaluate system resources and support program development, executing complex tasks annually in alignment with the State of Louisiana’s evolving agenda and budget requirements.
      
      ✧ Managed Windows and Mac systems while integrating sensitive state databases that required security clearance, oversaw the installation of network software and hardware and the replacement of network and workstation components to ensure data integrity and compliance with regulatory standards.
      
      ✧ Delivered technical assistance to over 200 employees, addressing a diverse range of technical issues daily. Offered backup support to the Network Administrator and Application Owners/Administrators.`,
    tech: [
      "Active Directory",
      "Powershell",
      "Windows Server Orchestration",
      "Veeam",
      "Nginx",
      "IIS",
    ],
  },
  {
    title: "Louisiana State University",
    logo: LsuLogo,
    position: "Network Infrastructure Engineer",
    time: "2010 - 2012",
    location: "Baton Rouge, LA",
    description: `✧ Designed and implemented custom circuits for large-scale stock ticker display project associated with the new Business Education Complex.
    
    ✧ Developed expertise in Cisco-based systems and VLAN configuration, installing, configuring, and maintaining server switches across the LSU campus and satellite properties. Provided diagnostic support for LSU’s diverse network infrastructure, ensuring optimal performance and reliability.`,
    tech: ["ARM v4-v7", "Verilog", "Keil", "Pspice", "EaglePCB", "Xbee", "DSP"],
  },
];

export const JobList = () => {
  return (
    <div className="max-w-5xl mt-12 mx-auto">
      <BaseJob renderBottomBorder={false} {...experience[0]} />
      <VerticalAccordion defaultOpen={false} buttonText="jobs">
        <BaseJob {...experience[1]} />
        <BaseJob {...experience[2]} />
        <BaseJob {...experience[3]} />
        <BaseJob renderBottomBorder={false} {...experience[4]} />
      </VerticalAccordion>
    </div>
  );
};
