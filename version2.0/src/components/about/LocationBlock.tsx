import { BlockBase } from "./BlockBase";
import { FiMapPin } from "react-icons/fi";
import { GiSpaceNeedle } from "react-icons/gi";

export const LocationBlock = () => (
  <BlockBase className="col-span-12 md:col-span-3">
    <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
      <FiMapPin className="text-3xl" />
      <div className="flex items-center gap-1">
        <p className="text-center text-lg text-projectDark">Seattle, WA</p>
        <GiSpaceNeedle />
      </div>
    </div>
  </BlockBase>
);
