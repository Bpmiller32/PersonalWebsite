import { memo } from "react";
import { useWindowSize } from "../utils/UseWindowSize";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

interface Props {
  refsArray: React.RefObject<HTMLDivElement>[];
}

export const NavSection = memo(({ refsArray }: Props) => {
  const { width } = useWindowSize();

  if (width === undefined) {
    return <></>;
  }

  return (
    <>
      {width > 515 ? (
        <NavDesktop refsArray={refsArray} />
      ) : (
        <NavMobile refsArray={refsArray} />
      )}
    </>
  );
});
