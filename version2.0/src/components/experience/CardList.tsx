import { motion } from "framer-motion";
import { CardBase } from "./CardBase";
import DesktopLogo from "../../assets/desktopLogo.json";
import ReactVueLogos from "../../assets/reactVueLogos.json";
import CloudLogo from "../../assets/cloudLogo.json";
import { FloatingCode } from "./FloatingCode";

export const CardList = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      className="relative mx-auto max-w-5xl flex flex-wrap justify-center gap-4"
    >
      <FloatingCode />

      <CardBase
        icon={DesktopLogo}
        heading={
          <div>
            <p className="relative">Desktop App</p>
            <p className="relative">Development</p>
          </div>
        }
        description={
          <div className="text-pretty">
            5 years professional development experience with C#, .Net Core,
            Powershell, WinForms, UWP, Telerik, and Electron.
          </div>
        }
        verticalBarHeight="6"
        underlineColor="primary"
      />
      <CardBase
        icon={ReactVueLogos}
        heading={
          <div>
            <p className="relative">Full Stack Web</p>
            <p className="relative">Development</p>
          </div>
        }
        description={
          <div className="text-pretty">
            4 years of development experience with Vue, React, Three, Asp.Net
            Core, ExpressJs, Firebase, Wordpress, and Webflow.
          </div>
        }
        verticalBarHeight="5.5"
        underlineColor="secondary"
      />
      <CardBase
        icon={CloudLogo}
        heading={
          <div>
            <p className="relative">Enterprise IT</p>
          </div>
        }
        description={
          <div className="text-pretty">
            10 years experience in designing, managing, and solving large-scale
            IT challenges.
          </div>
        }
        verticalBarHeight="4.5"
        underlineColor="tertiary"
      />
    </motion.div>
  );
};
