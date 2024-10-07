import { useRef } from "react";
import { AboutSection } from "./about/AboutSection";
import { ContactSection } from "./contact/ContactSection";
import { ExperienceSection } from "./experience/ExperienceSection";
import { ProjectsSection } from "./projects/ProjectsSection";
import { FooterSection } from "./nav/FooterSection";
import { HeroSection } from "./hero/HeroSection";
import { NavBar } from "./nav/NavBar";

function App() {
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
    <main className="relative bg-projectBackground">
      <NavBar refsArray={refsArray} />

      <HeroSection sectionRef={heroSectionRef} />
      <AboutSection sectionRef={aboutSectionRef} />
      <ProjectsSection sectionRef={projectSectionRef} />
      <ExperienceSection sectionRef={experienceSectionRef} />
      <ContactSection sectionRef={contactSectionRef} />

      <FooterSection refsArray={refsArray} />
    </main>
  );
}

export default App;
