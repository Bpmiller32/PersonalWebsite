import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { logSiteVisit } from "../firebase/logSiteVisit";
import { logSectionView } from "../firebase/logSectionView";
import { NavSection } from "./nav/NavSection";
import { HeroSection } from "./hero/HeroSection";
import { AboutSection } from "./about/AboutSection";
import { ProjectsSection } from "./projects/ProjectsSection";
import { WorkSection } from "./work/WorkSection";
import { ContactSection } from "./contact/ContactSection";
import { FooterSection } from "./nav/FooterSection";

function App() {
  // Define section refs and visibility state
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const workSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  // Call useInView for each section at the top level because the hooks can't be inside useEffect hook
  const heroSectionVisible = useInView(heroSectionRef, { once: true });
  const aboutSectionVisible = useInView(aboutSectionRef, {
    once: true,
    amount: 0.25,
  });
  const projectSectionVisible = useInView(projectSectionRef, { once: true });
  const workSectionVisible = useInView(workSectionRef, {
    once: true,
  });
  const contactSectionVisible = useInView(contactSectionRef, { once: true });

  // Store refs in array for navigation in NavSection
  const refsArray = [
    heroSectionRef,
    aboutSectionRef,
    projectSectionRef,
    workSectionRef,
    contactSectionRef,
  ];

  // Fetch session ID once on component mount
  const sessionId = useRef<string | undefined>();

  useEffect(() => {
    const logVisit = async () => {
      const id = await logSiteVisit();
      sessionId.current = id;
    };
    logVisit();
  }, []);

  // Log section views based on visibility
  useEffect(() => {
    const logView = async () => {
      if (!sessionId.current) {
        return;
      }
      if (heroSectionVisible)
        await logSectionView(sessionId.current, "HeroSection");
      if (aboutSectionVisible)
        await logSectionView(sessionId.current, "AboutSection");
      if (projectSectionVisible)
        await logSectionView(sessionId.current, "ProjectsSection");
      if (workSectionVisible)
        await logSectionView(sessionId.current, "WorkSection");
      if (contactSectionVisible)
        await logSectionView(sessionId.current, "ContactSection");
    };
    logView();
  }, [
    heroSectionVisible,
    aboutSectionVisible,
    projectSectionVisible,
    workSectionVisible,
    contactSectionVisible,
  ]);

  return (
    <main className="relative overflow-hidden">
      <NavSection refsArray={refsArray} />

      <HeroSection sectionRef={heroSectionRef} targetRef={contactSectionRef} />
      <AboutSection sectionRef={aboutSectionRef} />
      <ProjectsSection sectionRef={projectSectionRef} />
      <WorkSection sectionRef={workSectionRef} />
      <ContactSection sectionRef={contactSectionRef} />

      <FooterSection refsArray={refsArray} />
    </main>
  );
}

export default App;
