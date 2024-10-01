import { FiArrowRight } from "react-icons/fi";

export const ResumeButton = () => {
  return (
    <button
      className={`relative z-0 flex items-center gap-2 overflow-hidden rounded-md border-[1px]
          border-textBright px-4 py-2 font-medium text-sm
          text-textBright transition-all duration-300

          before:absolute before:inset-0
          before:-z-10 before:translate-x-[150%]
          before:translate-y-[150%] before:scale-[2.5]
          before:rounded-[100%] before:bg-textBright
          before:transition-transform before:duration-1000
          before:content-[""]

          hover:text-zinc-950
          hover:before:translate-x-[0%]
          hover:before:translate-y-[0%]
          active:scale-95`}
    >
      My Resume
    </button>

    // <button className="group flex h-10 items-center gap-2 rounded-full bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-black hover:pl-2 hover:text-white active:bg-neutral-700">
    //   <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-textBright">
    //     <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" />
    //   </span>
    //   <span>My Resume</span>
    // </button>
  );
};
