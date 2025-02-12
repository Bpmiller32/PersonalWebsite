import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { LinkButton } from "../global/LinkButton";

interface Props {
  sessionId?: string;
}

export const InfoArea = ({ sessionId }: Props) => {
  return (
    <div className="max-w-lg animateFadeIn flex flex-col justify-center justify-self-center">
      <p className="mb-7 text-projectBright font-bold text-2xl">
        Send me an email and let's connect!
      </p>

      <div className="flex justify-center w-full min-[944px]:block min-[944px]:w-max mb-7 text-2xl">
        <LinkButton
          href="mailto:bpmiller32@outlook.com"
          text={
            <>
          <IoIosMail className="h-8 w-8" />
          <div>bpmiller32@outlook.com</div>
            </>
          }
          sessionId={sessionId}
          linkData="Email Contact"
        />
      </div>

      <p className="mb-7 text-projectDark">
        You can also find me on Linkedin, Instagram, or send me a message using
        the contact form here.
      </p>

      <div className="flex items-center min-[944px]:items-start flex-col gap-2">
        <LinkButton
          href="https://www.linkedin.com/in/bpmiller32"
          text={
            <>
              <FaLinkedin className="h-8 w-8" />
              <div>LinkedIn</div>
            </>
          }
          sessionId={sessionId}
          linkData="LinkedIn Profile"
        />
        <LinkButton
          href="https://www.github.com/bpmiller32"
          text={
            <>
              <FaGithub className="h-8 w-8" />
              <div>Github</div>
            </>
          }
          sessionId={sessionId}
          linkData="GitHub Profile"
        />
        <LinkButton
          href="https://www.instagram.com/billybeboppin/"
          text={
            <>
              <FaInstagram className="h-8 w-8" />
              <div>Instagram</div>
            </>
          }
          sessionId={sessionId}
          linkData="Instagram Profile"
        />
      </div>
    </div>
  );
};
