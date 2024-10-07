import { useRef } from "react";
import { AboutSection } from "./about/AboutSection";
import { ContactSection } from "./contact/ContactSection";
import { ExperienceSection } from "./experience/ExperienceSection";
import { ProjectsSection } from "./projects/ProjectsSection";
import { motion } from "framer-motion";

function App() {
  // Refs for different sections
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  // Function to handle smooth scrolling
  const handleScroll = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main className="relative bg-projectSecondary">
        <div className="w-screen h-screen bg-projectSecondary flex items-center justify-center">
          <h1 className="text-white text-3xl">Hero placeholder</h1>
        </div>
        <div ref={section1Ref}>
          <AboutSection />
        </div>
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-4 py-2 text-blue-500 hover:text-blue-700"
          onClick={() => handleScroll(section1Ref)}
        >
          Section 1
        </motion.button>
      </main>
    </>
  );
}

export default App;
