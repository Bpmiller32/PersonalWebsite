import { AboutSection } from "./about/AboutSection";
import { ContactSection } from "./contact/ContactSection";
import { ExperienceSection } from "./experience/ExperienceSection";
import { ResumeButton } from "./global/ResumeButton";
import { ProjectsSection } from "./projects/ProjectsSection";

function App() {
  return (
    <>
      <main className="relative">
        <header className="absolute right-0 p-6 bg-transparent">
          <ResumeButton />
        </header>
        <div className="w-screen h-screen bg-blue-500 flex items-center justify-center">
          <h1 className="text-white text-3xl">Hero placeholder</h1>
        </div>
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
