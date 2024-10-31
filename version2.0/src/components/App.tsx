import { useEffect, useRef } from "react";
import { AboutSection } from "./about/AboutSection";
import { ContactSection } from "./contact/ContactSection";
import { WorkSection } from "./work/WorkSection";
import { ProjectsSection } from "./projects/ProjectsSection";
import { FooterSection } from "./nav/FooterSection";
import { HeroSection } from "./hero/HeroSection";
import { NavSection } from "./nav/NavSection";
import { logSiteVisit } from "../firebase/logSiteVisit";
import { useInView } from "framer-motion";
import { logSectionView } from "../firebase/logSectionView";

function App() {
  const sessionId = useRef<string | undefined>();

  // Define section refs and visibility state
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  // Call useInView for each section at the top level
  const heroSectionVisible = useInView(heroSectionRef, { once: true });
  const aboutSectionVisible = useInView(aboutSectionRef, {
    once: true,
    amount: 0.25,
  });
  const projectSectionVisible = useInView(projectSectionRef, { once: true });
  const experienceSectionVisible = useInView(experienceSectionRef, {
    once: true,
  });
  const contactSectionVisible = useInView(contactSectionRef, { once: true });

  // Store refs in array for navigation in NavSection
  const refsArray = [
    heroSectionRef,
    aboutSectionRef,
    projectSectionRef,
    experienceSectionRef,
    contactSectionRef,
  ];

  // Fetch session ID once on component mount
  useEffect(() => {
    const logVisit = async () => {
      const id = await logSiteVisit();
      sessionId.current = id;
    };

    logVisit();
  }, []);

  // Log section views based on visibility
  useEffect(() => {
    if (sessionId.current) {
      if (heroSectionVisible) logSectionView(sessionId.current, "HeroSection");
      if (aboutSectionVisible)
        logSectionView(sessionId.current, "AboutSection");
      if (projectSectionVisible)
        logSectionView(sessionId.current, "ProjectsSection");
      if (experienceSectionVisible)
        logSectionView(sessionId.current, "ExperienceSection");
      if (contactSectionVisible)
        logSectionView(sessionId.current, "ContactSection");
    }
  }, [
    heroSectionVisible,
    aboutSectionVisible,
    projectSectionVisible,
    experienceSectionVisible,
    contactSectionVisible,
  ]);

  return (
    <main className="relative overflow-hidden">
      <NavSection refsArray={refsArray} />

      <HeroSection sectionRef={heroSectionRef} targetRef={contactSectionRef} />
      <AboutSection sectionRef={aboutSectionRef} />
      <ProjectsSection sectionRef={projectSectionRef} />
      <WorkSection sectionRef={experienceSectionRef} />
      <ContactSection sectionRef={contactSectionRef} />

      <FooterSection refsArray={refsArray} />
    </main>
  );
}

export default App;
