import React, { createContext, useContext, ReactNode, useState } from "react";

// Create a context with 0,0 as the default value
const MouseContext = createContext<{ x: number; y: number }>({
  x: 0,
  y: 0,
});

// Custom hook to use the MouseContext
// eslint-disable-next-line react-refresh/only-export-components
export const useMouseContext = () => useContext(MouseContext);

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
