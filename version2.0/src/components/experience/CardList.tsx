import { motion } from "framer-motion";
import { CardBase } from "./CardBase";
import ReactVueLogos from "../../assets/reactVueLogos.json";

export const CardList = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      className="mx-auto max-w-7xl flex flex-wrap justify-center gap-4"
    >
      <CardBase
        // icon={<div className="w-12 h-12 rounded-full bg-red-500"></div>}
        icon={ReactVueLogos}
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
            3 years of development experience with Vue, React, Three, Asp.Net
            Core, ExpressJs, Firebase, Wordpress, and Webflow.
          </div>
        }
        verticalBarHeight="5.5"
        underlineColor="secondary"
      />
      <CardBase
        icon={ReactVueLogos}
        heading={
          <div>
            <p className="relative">Enterprise IT</p>
          </div>
        }
        description={
          <div className="text-pretty">
            10 years experiece in designing, managing, and implementing
            large-scale IT challenges.
          </div>
        }
        verticalBarHeight="4.5"
        underlineColor="tertiary"
      />
    </motion.div>
  );
};
