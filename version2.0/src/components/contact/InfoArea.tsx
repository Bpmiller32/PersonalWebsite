import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { SocialButton } from "./SocialButton";

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
        <SocialButton
          icon={<IoIosMail className="h-8 w-8" />}
          text="bpmiller32@outlook.com"
          href="mailto:bpmiller32@outlook.com"
        />
      </div>

      <div className="flex items-center min-[944px]:items-start flex-col gap-2">
        <SocialButton
          icon={<FaLinkedin className="h-8 w-8" />}
          text="LinkedIn"
          href="https://www.linkedin.com/in/billy-p-miller"
        />
        <SocialButton
          icon={<FaGithub className="h-8 w-8" />}
          text="Github"
          href="https://www.github.com/bpmiller32"
        />
        <SocialButton
          icon={<FaInstagram className="h-8 w-8" />}
          text="Instagram"
          href="https://www.instagram.com/billybeboppin/"
        />
      </div>
    </div>
  );
};
