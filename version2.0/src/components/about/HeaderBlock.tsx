import { BaseBlock } from "./BaseBlock";
import { FiArrowRight } from "react-icons/fi";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import { WebsiteLogo } from "../global/WebsiteLogo";

export const HeaderBlock = () => {
  // Render function
  return (
    <BaseBlock className="col-span-12 row-span-2 md:col-span-6">
      <WebsiteLogo className="mb-4 h-14 w-14" />
      <h1 className="mb-12 text-4xl font-medium leading-tight">
        Hey, I'm Billy.{" "}
        <span className="text-projectDark">
          I create innovative applications and solutions.
        </span>
      </h1>
      <div className="flex items-center gap-4">
        <p className="flex items-center gap-1 text-projectPrimary">
          My links <FiArrowRight />
        </p>
        <div className="flex items-center text-lg gap-3">
          <a
            className="text-projectBright hover:text-projectPrimary transition-colors duration-500"
            href="https://www.linkedin.com/in/bpmiller32"
            target="_blank"
            rel="nofollow"
          >
            <SiLinkedin />
          </a>
          <a
            className="text-projectBright hover:text-projectPrimary transition-colors duration-500"
            href="https://www.github.com/bpmiller32"
            target="_blank"
            rel="nofollow"
          >
            <SiGithub />
          </a>
          <a
            className="text-projectBright hover:text-projectPrimary transition-colors duration-500"
            href="https://www.instagram.com/billybeboppin/"
            target="_blank"
            rel="nofollow"
          >
            <SiInstagram />
          </a>
        </div>
      </div>
    </BaseBlock>
  );
};
