import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  text?: ReactNode;
  className?: string;
}

export const ProjectButton = ({ text, className }: Props) => {
  return (
    <button
      className={twMerge(
        className,
        `
            relative z-0 flex items-center justify-center gap-2 overflow-hidden rounded-lg text-sm border-[1px] 
            border-projectPrimary px-4 py-1.5
            text-projectBright transition-all duration-500
            
            before:absolute before:inset-0
            before:-z-10 before:translate-x-[150%]
            before:translate-y-[150%] before:scale-[2.5]
            before:rounded-[100%] before:bg-projectSecondary
            before:transition-transform before:duration-1000
            before:content-[""]
    
            hover:scale-105 hover:text-projectBright
            hover:before:translate-x-[0%]
            hover:before:translate-y-[0%]
            active:scale-95`
      )}
    >
      <div className="flex items-center space-x-2">{text}</div>
    </button>
  );
};
