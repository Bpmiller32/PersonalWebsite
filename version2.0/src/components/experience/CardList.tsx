import { motion } from "framer-motion";
import { CardBase } from "./CardBase";
import DesktopLogo from "../../assets/desktopLogo.json";
import ReactVueLogos from "../../assets/reactVueLogos.json";
import CloudLogo from "../../assets/cloudLogo.json";
import CodeBackground from "../../assets/codeBackground.webp";

export const CardList = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      className="relative mx-auto max-w-7xl flex flex-wrap justify-center gap-4"
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 3,
          times: [0, 0.5, 1],
        }}
        className="absolute top-[-2.5%] min-[816px]:top-[-4%] min-[1216px]:top-[-9%] left-[-7%] opacity-25"
      >
        <img
          className="h-[20rem]"
          src={CodeBackground}
          alt="Image of the code that made this, meta!"
        />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 5,
          times: [0, 0.5, 1],
          delay: 2,
        }}
        className="absolute bottom-0 right-[-15%] opacity-25"
      >
        <img
          className="h-[20rem]"
          src={CodeBackground}
          alt="Image of the code that made this, meta!"
        />
      </motion.div>

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
