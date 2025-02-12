import DesktopLogo from "../../assets/desktopLogo.json";
import ReactVueLogos from "../../assets/reactVueLogos.json";
import CloudLogo from "../../assets/cloudLogo.json";
import { BaseCard } from "./BaseCard";
import { FloatingCode } from "./FloatingCode";
import DotnetLogo from "../../assets/dotnet.webp";
import ThreeLogo from "../../assets/three.webp";
import VueLogo from "../../assets/vue.webp";
import ReactLogo from "../../assets/react.webp";
import FirebaseLogo from "../../assets/firebase.webp";
import NodeLogo from "../../assets/node.webp";

const cards = [
  {
    icon: DesktopLogo,
    heading: (
      <div>
        <p className="relative">Favorite Tools</p>
        <p className="relative">& Frameworks</p>
      </div>
    ),
    logos: [
      { src: ThreeLogo, alt: "LSU Logo", description: "Three.js" },
      { src: VueLogo, alt: "LDOA Logo", description: "Vue.js" },
      { src: ReactLogo, alt: "Matthews Logo", description: "React" },
      { src: DotnetLogo, alt: "DMI Logo", description: "C#/.NET" },
      {
        src: NodeLogo,
        alt: "Constellation Logo",
        description: "Node.js",
      },
      { src: FirebaseLogo, alt: "RAF Logo", description: "Firebase" },
    ],
    verticalBarHeight: "6",
    underlineColor: "favorite",
    tagName: "ListView",
    descriptionOffset: 2.75,
  },

  {
    icon: ReactVueLogos,
    heading: (
      <div>
        <p className="relative">Full Stack Web</p>
        <p className="relative">Development</p>
      </div>
    ),
    description: (
      <div className="text-pretty">
        4 years of development experience with Vue.js, React, Three.js, Asp.Net
        Core, Express.js, Firebase, Wordpress, and Webflow.
      </div>
    ),
    verticalBarHeight: "6.5",
    underlineColor: "secondary",
  },

  {
    icon: DesktopLogo,
    heading: (
      <div>
        <p className="relative">Desktop App</p>
        <p className="relative">Development</p>
      </div>
    ),
    description: (
      <div className="text-pretty">
        5 years professional development experience with C#, .Net Core,
        Powershell, WinForms, UWP, Telerik, and Electron.
      </div>
    ),
    verticalBarHeight: "6",
    underlineColor: "primary",
    tagName: "ListView",
    descriptionOffset: 2.75,
  },

  {
    icon: CloudLogo,
    heading: (
      <div>
        <p className="relative">Enterprise IT</p>
      </div>
    ),
    description: (
      <div className="text-pretty">
        10 years experience in designing, managing, and solving large-scale IT
        challenges.
      </div>
    ),
    verticalBarHeight: "4.5",
    underlineColor: "tertiary",
    tagName: "Property",
    descriptionOffset: 3,
  },
];

export const CardList = () => {
  return (
    <div className="relative mx-auto max-w-5xl flex flex-wrap justify-center gap-4">
      <FloatingCode />

      {cards.map((card, index) => {
        return <BaseCard key={`card-${index}`} {...card} />;
      })}
    </div>
  );
};
