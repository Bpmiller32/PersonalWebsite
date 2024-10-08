import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { LinkButton } from "../global/LinkButton";

export const InfoArea = () => {
  return (
    <div className="max-w-lg animateFadeIn flex flex-col justify-center justify-self-center">
      <div className="text-projectBright font-bold text-2xl">
        Shoot me an email if you want to connect!
      </div>
      <div className="mt-5 text-projectDark">
        You can also find me on Linkedin, Instagram, or contact me via the
        message form here if that's more your speed.
      </div>

      <div className="flex justify-center w-full min-[944px]:block min-[944px]:w-max my-7 text-2xl">
        <LinkButton
          href="mailto:bpmiller32@outlook.com"
          text={
            <>
              <IoIosMail className="h-8 w-8" />
              <div>bpmiller32@outlook.com</div>
            </>
          }
        />
      </div>

      <div className="flex items-center min-[944px]:items-start flex-col gap-2">
        <LinkButton
          href="https://www.linkedin.com/in/bpmiller32"
          text={
            <>
              <FaLinkedin className="h-8 w-8" />
              <div>LinkedIn</div>
            </>
          }
        />
        <LinkButton
          href="https://www.github.com/bpmiller32"
          text={
            <>
              <FaGithub className="h-8 w-8" />
              <div>Github</div>
            </>
          }
        />
        <LinkButton
          href="https://www.instagram.com/billybeboppin/"
          text={
            <>
              <FaInstagram className="h-8 w-8" />
              <div>Instagram</div>
            </>
          }
        />
      </div>
    </div>
  );
};
