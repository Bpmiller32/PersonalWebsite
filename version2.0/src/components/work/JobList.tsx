import { BaseJob } from "./BaseJob";
import { VerticalAccordion } from "../projects/VerticalAccordion";
import ConstellationLogo from "../../assets/constellation.webp";
import MatthewsLogo from "../../assets/matthews.webp";
import RafLogo from "../../assets/raf.webp";
import LdoaLogo from "../../assets/ldoa.webp";
import LsuLogo from "../../assets/lsu.webp";

const experience = [
  {
    title: "Volaris Group",
    logo: ConstellationLogo,
    position: "Systems & Software Engineer",
    time: "2023 - Present",
    location: "Seattle, WA",
    description: `✧ Architected and shipped WebGLGT, a full-stack TypeScript/WebGL platform integrating Google Vision AI that made ML data-labeling 70%+ faster and eliminated the need for temporary staff.

    ✧ Designed backend services, REST APIs, and SQL/Firestore data layers powering data prep, job orchestration, and evaluation feedback loops for downstream OCR and computer-vision models; owned schema design and resolved slow-query hot paths across millions of records.

    ✧ Trained and iterated on production OCR and computer-vision models using large image datasets across letters, flats, parcels, print codes, and routing marks for mail-sorting reader applications.

    ✧ Built and maintained C#/.NET automation services for the postal-directory build pipeline using ASP.NET Core, Entity Framework, headless-browser automation, a raw-TCP protocol driving the OCR engine, and real-time SSE status streaming to a Vue dashboard.

    ✧ Drove $340K in annual cost savings (84% reduction) through infrastructure consolidation and delivered two zero-downtime datacenter migrations in 12 months supporting hundreds of customers.

    ✧ Led a cross-functional team of 4 engineers supporting 6 major OEM partners and hundreds of facilities, providing tier-3 support and tailored engineering solutions with <24hr response time.`,
    tech: [
      "TypeScript",
      "React",
      "Vue.js",
      "Three.js",
      "React Three Fiber",
      "Node.js",
      "Express.js",
      "C#",
      "Asp.Net Core",
      "Entity Framework",
      "Google Cloud Vision AI",
      "Firebase",
      "Firestore",
      "Playwright",
      "Git",
    ],
  },
  {
    title: "Matthews International",
    logo: MatthewsLogo,
    position: "Technical Services Manager",
    time: "2020 - 2023",
    location: "Redmond, WA",
    description: `✧ Continued the development of both new and existing product offerings, focusing on dashboards and development utilities, and utilizing multiple technologies to create 7 extension products and 3 new products.

    ✧ Managed a cross-functional team of 6 technical consultants supporting 6 major OEM partners and hundreds of facilities for an industry-leading postal OCR solution deployed at USPIS and every major presort facility nationwide.
    
    ✧ Served as a primary point of contact for escalated technical issues, acting as a liaison to ensure customer needs were effectively communicated and addressed both externally and internally.
    
    ✧ Directed the migration of the USPS CASS cycle for our core postal products, ensuring a seamless transition and compliance with industry standards. Actively engaged in virtual and in-person conferences to align timing and development scheduling and deployment.
    
    ✧ Supervised product releases, licensing operations, and deployment for mission-critical OCR systems processing millions of mailpieces daily; administered cloud infrastructure (AWS, Vultr) and the technical-operations budget supporting hundreds of customer installations.
    
    ✧ Directed training programs and daily stand-ups to manage team workload and customer escalations; maintained <24hr response and <1 week average resolution with industry-leading customer satisfaction.`,
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
    title: "Louisiana Department of Education",
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
    position: "Networking Infrastructure Engineer",
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
