import { LinkButton } from "../global/LinkButton";
import { WebsiteLogo } from "../global/WebsiteLogo";
import { NavLink } from "./NavLink";

interface Props {
  refsArray: React.RefObject<HTMLDivElement>[];
}

export const NavBar = ({ refsArray }: Props) => {
  return (
    <nav className="absolute w-full top-5 flex justify-center">
      <div className="w-fit flex items-center gap-6 rounded-lg border-[1px] border-projectBorder bg-projectForeground p-2 text-sm text-projectDark">
        <WebsiteLogo
          className="ml-2 h-7 w-7 cursor-pointer"
          targetSection={refsArray[0]}
        />
        <NavLink text="About" targetSection={refsArray[1]} />
        <NavLink text="Projects" targetSection={refsArray[2]} />
        <NavLink text="Experience" targetSection={refsArray[3]} />
        <NavLink text="Contact" targetSection={refsArray[4]} />

        <LinkButton text="My Resume" />
      </div>
    </nav>
  );
};
