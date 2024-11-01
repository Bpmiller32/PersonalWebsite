import { useEffect, useRef } from "react";
import { AboutSection } from "./about/AboutSection";
import { ContactSection } from "./contact/ContactSection";
import { WorkSection } from "./work/WorkSection";
import { ProjectsSection } from "./projects/ProjectsSection";
import { FooterSection } from "./nav/FooterSection";
import { HeroSection } from "./hero/HeroSection";
import { NavSection } from "./nav/NavSection";
import { logSiteVisit } from "../firebase/logSiteVisit";
import { logSectionView } from "../firebase/logSectionView";
import { useInView } from "framer-motion";

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

    // logVisit();
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
      if (experienceSectionVisible)
        await logSectionView(sessionId.current, "ExperienceSection");
      if (contactSectionVisible)
        await logSectionView(sessionId.current, "ContactSection");
    };

    // logView();
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
