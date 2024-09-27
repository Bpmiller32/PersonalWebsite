import { motion } from "framer-motion";
import { SectionHeader } from "../utils/SectionHeader";
import { HeaderBlock } from "./HeaderBlock";
import { ImagesBlock } from "./ImagesBlock";
import { LocationBlock } from "./LocationBlock";
import { DescriptionBlock } from "./DescriptionBlock";
import { createContext, useRef } from "react";
import { MouseContext, MousePositionProvider } from "../utils/MouseContext";

export const RevealBento = () => {
  // Using useRef instead of useState
  const mousePosition = useRef({ x: 0, y: 0 });

  // Event handling
  const handleOnMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mousePosition.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    // console.log(
    //   "Mouse moved: {0}, {1}",
    //   mousePosition.current.x,
    //   mousePosition.current.y
    // );
  };

  // // Directly update the CSS variable based on the mouse position
  // if (event.currentTarget.id === "blockBackground") {
  //   event.currentTarget.style.background = `radial-gradient(800px circle at ${mousePosition.current.x}px ${mousePosition.current.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`;
  // } else {
  //   event.currentTarget.style.background = `radial-gradient(400px circle at ${mousePosition.current.x}px ${mousePosition.current.y}px, rgba(255, 255, 255, 0.4), transparent 40%)`;
  // }
  // // Event handler with css vars
  // const handleOnMouseMove = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) => {
  //   const rect = event.currentTarget.getBoundingClientRect();
  //   const xPosition = event.clientX - rect.left;
  //   const yPosition = event.clientY - rect.top;

  //   event.currentTarget.style.setProperty("--mouse-x", `${xPosition}px`);
  //   event.currentTarget.style.setProperty("--mouse-y", `${yPosition}px`);
  // };

  return (
    <div className="min-h-screen bg-[#181b1b] px-4 py-12 text-[#fbfbfb] cursor-default">
      <SectionHeader title="About" dir="l" />
      <MousePositionProvider>
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          // onMouseMove={handleOnMouseMove}
          className="bg-radial-at-mouse mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
        >
          <HeaderBlock mousePosition={mousePosition.current} />
          {/* <ImagesBlock />
        <DescriptionBlock />
        <LocationBlock /> */}
        </motion.div>
      </MousePositionProvider>
    </div>
  );
};
