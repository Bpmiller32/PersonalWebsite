import { NavLink } from "./NavLink";
import { WebsiteLogo } from "../global/WebsiteLogo";

interface Props {
  refsArray: React.RefObject<HTMLDivElement>[];
}

export const FooterSection = ({ refsArray }: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-4 pt-12 pb-10 text-projectBright">
      <div className="max-w-5xl mx-auto mb-5 h-[1px] bg-projectBorder"></div>

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center min-[700px]:justify-between gap-x-20 gap-y-4">
        <div className="flex items-center space-x-4 min-[400px]:space-x-6">
          <WebsiteLogo
            className="h-8 w-8 cursor-pointer"
            targetSection={refsArray[0]}
          />
          <NavLink text="About" targetSection={refsArray[1]} />
          <NavLink text="Projects" targetSection={refsArray[2]} />
          <NavLink text="Experience" targetSection={refsArray[3]} />
          <NavLink text="Contact" targetSection={refsArray[4]} />
        </div>

        <p className="text-projectDark">
          {currentYear} | Designed by Billy Miller
        </p>
      </div>
    </footer>
  );
};
