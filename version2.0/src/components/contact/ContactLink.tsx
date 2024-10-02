import { ReactNode } from "react";

interface Props {
  icon?: ReactNode;
  text: string;
  href: string;
}

export const ContactLink = ({ icon, text, href }: Props) => {
  return (
    <div className="w-max">
      <a href={href} className="flex items-center group">
        {icon}
        <p className="rounded-md px-2 py-2 bg-neutralForground text-textLight group-hover:bg-primary/80 group-hover:text-textBright transition duration-500">
          {text}
        </p>
      </a>
    </div>
  );
};
