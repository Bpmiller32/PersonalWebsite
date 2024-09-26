import { Block } from "./Block";
import { FiArrowRight } from "react-icons/fi";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";
import siteLogo from "../../assets/siteLogo.webp";

export const HeaderBlock = () => {
  // Event handler
  const handleOnMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const xPosition = event.clientX - rect.left;
    const yPosition = event.clientY - rect.top;

    event.currentTarget.style.setProperty("--mouse-x", `${xPosition}px`);
    event.currentTarget.style.setProperty("--mouse-y", `${yPosition}px`);
  };

  // Render function
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <div onMouseMove={handleOnMouseMove} className="bg-radial-at-mouse p-6">
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
