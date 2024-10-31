import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  text?: ReactNode;
  colors?: {
    borderColor?: string;
    textColorBase?: string;
    textColorHover?: string;
    backgroundBase?: string;
    backgroundHover?: string;
  };
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
}

const defaultColors = {
  borderColor: "border-projectPrimary",
  textColorBase: "text-projectBright",
  textColorHover: "text-projectBright",
  backgroundBase: "",
  backgroundHover: "bg-projectSecondary",
};

export const ActionButton = ({
  text = "Placeholder",
  colors = defaultColors,
  onClick,
  className,
  disabled = false,
}: Props) => {
  const isDefaultColorsUsed = colors === defaultColors;

  return (
    <>
      {isDefaultColorsUsed ? (
        <button
          onClick={onClick}
          className={twMerge(
            className,
            `
              relative z-0 flex items-center justify-center gap-2 overflow-hidden rounded-lg text-sm border-[1px] 
              px-4 py-1.5
              transition-all duration-500
              
              before:absolute before:inset-0
              before:-z-10 before:translate-x-[150%]
              before:translate-y-[150%] before:scale-[2.5]
              before:rounded-[100%] 
              before:transition-transform before:duration-1000
              before:content-[""]

              hover:before:translate-x-[0%]
              hover:before:translate-y-[0%]
              active:scale-95

              border-projectPrimary
              text-projectBright
              before:bg-projectSecondary
            `,
            disabled ? "cursor-not-allowed" : "hover:scale-105"
          )}
        >
          <div className="flex items-center space-x-2">{text}</div>
        </button>
      ) : (
        <button
          onClick={onClick}
          className={twMerge(
            className,
            `
              relative z-0 flex items-center justify-center gap-2 overflow-hidden rounded-lg text-sm border-[1px] 
              px-4 py-1.5
              transition-all duration-500
              
              before:absolute before:inset-0
              before:-z-10 before:translate-x-[150%]
              before:translate-y-[150%] before:scale-[2.5]
              before:rounded-[100%] 
              before:transition-transform before:duration-1000
              before:content-[""]

              hover:before:translate-x-[0%]
              hover:before:translate-y-[0%]
              active:scale-95
            `,
            colors.borderColor,
            colors.textColorBase,
            "hover:" + colors.textColorHover,
            colors.backgroundBase,
            "before:" + colors.backgroundHover,
            disabled ? "cursor-not-allowed" : "hover:scale-105"
          )}
        >
          <div className="flex items-center space-x-2">{text}</div>
        </button>
      )}
    </>
  );
};
