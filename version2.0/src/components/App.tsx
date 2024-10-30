import { useEffect, useRef } from "react";
import { AboutSection } from "./about/AboutSection";
import { ContactSection } from "./contact/ContactSection";
import { WorkSection } from "./work/WorkSection";
import { ProjectsSection } from "./projects/ProjectsSection";
import { FooterSection } from "./nav/FooterSection";
import { HeroSection } from "./hero/HeroSection";
import { NavSection } from "./nav/NavSection";

function App() {
  useEffect(() => {
    // // Call page load log async
    // const logLoad = async () => {
    //   await logPageLoad("MainPage");
    // };
    // logLoad();
  }, []);

  const heroSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const refsArray = [
    heroSectionRef,
    aboutSectionRef,
    projectSectionRef,
    experienceSectionRef,
    contactSectionRef,
  ];

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
