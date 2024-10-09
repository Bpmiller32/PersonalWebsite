import { ReactNode, useState } from "react";
import { MouseContext } from "./MouseContext";

interface Props {
  children: ReactNode;
}

// Create a provider component
export const MousePositionProvider = ({ children }: Props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleOnMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <MouseContext.Provider value={mousePosition}>
      <div onMouseMove={handleOnMouseMove}>{children}</div>
    </MouseContext.Provider>
  );
};
