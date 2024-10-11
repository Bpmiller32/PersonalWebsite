import { useEffect, useRef, useState } from "react";

export const useMeasure = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ height: 0 });

  useEffect(() => {
    // Store ref in a variable
    const element = ref.current;

    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setDimensions({ height: entry.contentRect.height });
      }
    });

    observer.observe(element);

    // Clean up the observer when the component is unmounted or ref changes
    return () => {
      // Use the stored variable
      if (element) observer.unobserve(element);
    };
  }, []);

  return [ref, dimensions] as const;
};
