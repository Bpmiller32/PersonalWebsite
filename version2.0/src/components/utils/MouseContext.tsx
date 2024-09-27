import React, {
  createContext,
  useContext,
  ReactNode,
  useRef,
  useState,
} from "react";

// Create a context with 0,0 as the default value
const MousePositionContext = createContext<{ x: number; y: number }>({
  x: 0,
  y: 0,
});

// Custom hook to use the ThemeContext
export const useMousePosition = () => useContext(MousePositionContext);

// Create a provider component
export const MousePositionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleOnMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // const rect = event.currentTarget.getBoundingClientRect();
    // mousePosition.current = {
    //   x: event.clientX - rect.left,
    //   y: event.clientY - rect.top,
    // };
    // setMousePosition({
    //   x: event.clientX - rect.left,
    //   y: event.clientY - rect.top,
    // });

    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <MousePositionContext.Provider value={mousePosition}>
      <div onMouseMove={handleOnMouseMove}>{children}</div>
    </MousePositionContext.Provider>
  );
};
