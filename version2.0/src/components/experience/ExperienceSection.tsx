import { FaReact, FaVuejs } from "react-icons/fa";
import { SectionHeader } from "../global/SectionHeader";
import { CardList } from "./CardList";
import { FaComputer } from "react-icons/fa6";
import { TbCloudCode } from "react-icons/tb";

export const ExperienceSection = () => {
  return (
    <div className="min-h-screen bg-neutralBackgound px-4 py-12 text-textBright cursor-default">
      <SectionHeader title="Experience" titlePlacement="right" />
      <CardList />
      <FaVuejs className="h-32 w-32 text-white"></FaVuejs>
      <FaReact className="h-32 w-32 text-white" />
      <FaComputer className="h-32 w-32 text-white" />
      <TbCloudCode className="h-32 w-32 text-white" />
    </div>
  );
};
