import { ReactNode } from "react";

interface Props {
  text?: ReactNode;
}

export const LinkButton = ({ text = <div>Placeholder</div> }: Props) => {
  return (
    <button
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-projectBorder px-4 py-1.5 font-medium bg-projectForeground
         text-projectBright transition-all duration-300
          
          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-projectBright
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:border-projectBright hover:text-projectBackground
          hover:before:translate-y-[0%]
          active:scale-100`}
    >
      {text}
    </button>
  );
};
