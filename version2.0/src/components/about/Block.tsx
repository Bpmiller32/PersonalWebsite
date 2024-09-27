import { ReactNode, useEffect, useRef } from "react";
import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { MousePostion } from "../utils/Types";
import { useMousePosition } from "../utils/MouseContext";

interface BlockProps extends MotionProps {
  mousePosition?: MousePostion;
  className?: string;
  children?: ReactNode;
}

export const Block = ({
  mousePosition,
  className,
  children,
  ...motionProps
}: BlockProps) => {
  console.log("rerendering block");

  const blockContentRef = useRef<HTMLDivElement>(null);
  const mousePosition2 = useMousePosition();

  const rect = blockContentRef.current?.getBoundingClientRect();

  let mousePosition3;
  if (rect) {
    mousePosition3 = {
      x: mousePosition2.x - rect.left,
      y: mousePosition2.y - rect.top,
    };
  }

  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge("relative group", className)}
      {...motionProps}
    >
      <div className="absolute inset-0 w-full h-full bg-neutralBorder rounded-lg"></div>
      <div
        style={{
          background: `radial-gradient(400px circle at ${mousePosition3?.x}px ${mousePosition3?.y}px, rgba(255, 255, 255, 0.4), transparent 40%)`,
        }}
        className="absolute inset-0 w-full h-full rounded-lg bg-red-500 opacity-100 group-hover:opacity-100"
      ></div>
      <div
        ref={blockContentRef}
        style={{ height: "calc(100% - 2px)", width: "calc(100% - 2px)" }}
        className="relative left-[1px] top-[1px] p-6 bg-neutralForground rounded-lg hover:opacity-100"
      >
        {children}
      </div>
      {mousePosition3?.x} {mousePosition3?.y}
    </motion.div>
  );
};
