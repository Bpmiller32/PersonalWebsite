import { BlockBase } from "./BlockBase";
import { FiMapPin } from "react-icons/fi";
import { GiSpaceNeedle } from "react-icons/gi";

export const LocationBlock = () => (
  <BlockBase className="col-span-12 md:col-span-3">
    <div className="flex flex-col items-center gap-4 ">
      <FiMapPin className="text-3xl" />
      <div className="flex items-center gap-1">
        <p className="text-center text-lg text-textDark">Seattle, WA</p>
        <GiSpaceNeedle />
      </div>
    </div>
  </BlockBase>
);
