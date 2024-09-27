import { Block } from "./Block";
import { FiArrowRight } from "react-icons/fi";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import siteLogo from "../../assets/siteLogo.webp";
import { MousePostion } from "../utils/Types";

interface HeaderBlockProps {
  mousePosition: MousePostion;
}

export const HeaderBlock: React.FC<HeaderBlockProps> = (props) => {
  console.log("from HeaderBlock: ", props);

  // Render function
  return (
    <Block
      mousePosition={props.mousePosition}
      className="col-span-12 row-span-2 md:col-span-6"
    >
      <div className="p-6 opacity-100 hover:opacity-100 transition-opacity duration-500">
        <img
          src={siteLogo}
          alt="avatar"
          className="mb-4 size-14 rounded-full"
        />
        <h1 className="mb-12 text-4xl font-medium leading-tight">
          Hi, I'm Billy.{" "}
          <span className="text-[#9facac]">
            I create innovative applications and solutions.
          </span>
        </h1>
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1 text-[#32e7e7]">
            My links <FiArrowRight />
          </p>
          <div className="flex items-center text-lg gap-3">
            <a
              className="text-[#d6dcdc] hover:text-[#32e7e7] transition-colors"
              href="https://www.linkedin.com/in/billy-p-miller"
              target="_blank"
              rel="nofollow"
            >
              <SiLinkedin />
            </a>
            <a
              className="text-[#d6dcdc] hover:text-[#32e7e7] transition-colors"
              href="https://www.github.com/bpmiller32"
              target="_blank"
              rel="nofollow"
            >
              <SiGithub />
            </a>
            <a
              className="text-[#d6dcdc] hover:text-[#32e7e7] transition-colors"
              href="https://www.instagram.com/billybeboppin/"
              target="_blank"
              rel="nofollow"
            >
              <SiInstagram />
            </a>
          </div>
        </div>
      </div>
    </Block>
  );
};
