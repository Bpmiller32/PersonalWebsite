import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const BadgeItem = ({ children }: Props) => {
  return (
    <span className="text-xs px-2 py-1 rounded bg-projectForeground text-projectBright">
      {children}
    </span>
  );
};
