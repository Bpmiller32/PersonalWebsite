import { AboutSection } from "./about/AboutSection";
import { ExperienceSection } from "./experience/ExperienceSection";
import { ResumeButton } from "./global/ResumeButton";

function App() {
  return (
    <>
      {/* <div className="w-screen h-screen bg-blue-500 flex items-center justify-center">
        <h1 className="text-white text-3xl">Full Screen Div</h1>
      </div> */}
      <main className="relative">
        <header className="absolute right-0 p-6 bg-transparent">
          <ResumeButton />
        </header>
        <AboutSection />
        <ExperienceSection />
      </main>
    </>
  );
}

export default App;
