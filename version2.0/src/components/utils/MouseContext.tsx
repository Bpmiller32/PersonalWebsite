import { createContext } from "react";

// Create a context with 0,0 as the default value
export const MouseContext = createContext<{ x: number; y: number }>({
  x: 0,
  y: 0,
});
