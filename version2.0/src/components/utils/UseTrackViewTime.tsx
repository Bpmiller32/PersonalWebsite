import { useEffect, useRef } from "react";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../firebase";

// Define the types for componentName and threshold
export const useTrackViewTime = (componentName: string, threshold = 0.5) => {
  const trackerRef = useRef(null); // Ref for the element to observe
  const startTimeRef = useRef(0); // Ref for start time
  const timeSpentRef = useRef(0); // Ref for accumulated time spent

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start tracking time when the component is visible
            startTimeRef.current = Date.now();
          } else if (startTimeRef.current) {
            // When the component is no longer visible, calculate time spent
            const timeInView = Date.now() - (startTimeRef.current || 0);
            timeSpentRef.current += timeInView; // Accumulate time

            // Log event to Firebase
            logEvent(analytics, "component_view_duration", {
              component: componentName,
              time_spent: timeInView / 1000, // Time in seconds
            });

            startTimeRef.current = 0; // Reset the start time
          }
        });
      },
      { threshold }
    );

    const currentElement = trackerRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [componentName, threshold]); // No dependencies on state variables to avoid rerendering

  return {
    trackerRef,
  };
};
