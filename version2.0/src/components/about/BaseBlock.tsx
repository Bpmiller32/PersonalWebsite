import { ReactNode, useRef } from "react";
import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useMouseContext } from "../utils/UseMouseContext";

interface Props extends MotionProps {
  className?: string;
  children?: ReactNode;
  contentNeedsPadding?: boolean;
}

export const BaseBlock = ({
  className,
  children,
  contentNeedsPadding = true,
  ...motionProps
}: Props) => {
  const blockContentRef = useRef<HTMLDivElement>(null);
  const mouseContext = useMouseContext();

  const rect = blockContentRef.current?.getBoundingClientRect();

  let currentMousePosition;
  if (rect) {
    currentMousePosition = {
      x: mouseContext.x - rect.left,
      y: mouseContext.y - rect.top,
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
      ref={blockContentRef}
      className={twMerge("relative group", className)}
      {...motionProps}
    >
      {/* Content */}
      <div
        style={{ height: "calc(100% - 2px)", width: "calc(100% - 2px)" }}
        className={
          "relative z-20 left-[1px] top-[1px] rounded-lg " +
          (contentNeedsPadding === true ? "p-6" : "")
        }
      >
        {children}
      </div>
      {/* Background */}
      <div
        style={{
          height: "calc(100% - 2px)",
          width: "calc(100% - 2px)",
        }}
        className="absolute z-10 left-[1px] top-[1px] inset-0 w-full h-full bg-projectForeground rounded-lg"
      >
        <div
          style={{
            background: `radial-gradient(800px circle at ${currentMousePosition?.x}px ${currentMousePosition?.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
          }}
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>
      </div>
      {/* Border */}
      <div className="absolute z-0 inset-0 w-full h-full bg-projectBorder rounded-lg">
        <div
          style={{
            background: `radial-gradient(400px circle at ${currentMousePosition?.x}px ${currentMousePosition?.y}px, rgba(255, 255, 255, 0.3), transparent 40%)`,
          }}
          className="absolute inset-0 rounded-lg"
        ></div>
      </div>
    </motion.div>
  );
};
