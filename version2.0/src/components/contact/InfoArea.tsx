import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ContactLink } from "./ContactLink";

export const InfoArea = () => {
  return (
    <div className="mx-auto max-w-lg animateFadeIn flex flex-col justify-center justify-self-center">
      <div className="text-textBright font-bold text-2xl">
        Shoot me an email if you want to connect!
      </div>
      <div className="mt-5 text-textDark">
        You can also find me on Linkedin, Instagram, or contact me via the
        message form here if that's more your speed.
      </div>

      <div className="w-max my-7 text-2xl">
        <ContactLink
          icon={<IoIosMail className="h-8 w-8 mr-1" />}
          text="bpmiller32@gmail.com"
          href="mailto:bpmiller32@gmail.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <ContactLink
          icon={<FaLinkedin className="h-8 w-8 mr-1" />}
          text="LinkedIn"
          href="https://www.linkedin.com/in/billy-p-miller"
        />
        <ContactLink
          icon={<FaGithub className="h-8 w-8 mr-1" />}
          text="Github"
          href="https://www.github.com/bpmiller32"
        />
        <ContactLink
          icon={<FaInstagram className="h-8 w-8 mr-1" />}
          text="Instagram"
          href="https://www.instagram.com/billybeboppin/"
        />
      </div>
    </div>
  );
};
