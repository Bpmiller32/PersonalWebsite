import { ReactNode } from "react";
import { LinkButton } from "../global/LinkButton";

interface Props {
  icon?: ReactNode;
  text: string;
  href: string;
}

export const SocialButton = ({ icon, text, href }: Props) => {
  return (
    <a href={href}>
      <LinkButton
        text={
          <>
            <div className="">{icon}</div>
            <div>{text}</div>
          </>
        }
      />
    </a>
  );
};
