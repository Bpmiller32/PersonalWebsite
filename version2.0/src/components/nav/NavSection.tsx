import { memo } from "react";
import { useWindowSize } from "../utils/UseWindowSize";
import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

interface Props {
  refsArray: React.RefObject<HTMLDivElement>[];
  sessionId?: string;
}

export const NavSection = memo(({ refsArray, sessionId }: Props) => {
  const { width } = useWindowSize();

  if (width === undefined) {
    return <></>;
  }

  return (
    <>
      {width > 515 ? (
        <NavDesktop refsArray={refsArray} sessionId={sessionId} />
      ) : (
        <NavMobile refsArray={refsArray} sessionId={sessionId} />
      )}
    </>
  );
});
