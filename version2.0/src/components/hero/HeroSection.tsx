import { ActionButton } from "../global/ActionButton";

interface Props {
  sectionRef?: React.RefObject<HTMLDivElement>;
  targetRef?: React.RefObject<HTMLDivElement>;
}

export const HeroSection = ({ sectionRef, targetRef }: Props) => {
  const handleOnClick = (ref?: React.RefObject<HTMLElement>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="px-4 h-screen bg-projectForeground">
      <div className="h-full max-w-5xl mx-auto flex flex-col justify-center">
        <div className="pointer-events-none relative z-10">
          <h1 className="pointer-events-auto text-4xl sm:text-6xl font-black text-projectBright md:text-8xl">
            Hi, I'm Billy<span className="text-projectPrimary">.</span>
          </h1>
          <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-projectDark md:my-4 md:text-4xl">
            I'm a{" "}
            <span className="font-semibold text-projectSecondary">
              Full Stack Developer
            </span>
          </h2>
          <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-projectDark md:text-base">
            I've spent the last 5 years building and scaling software for some
            pretty cool companies. Let's connect!
          </p>
        </div>

        <ActionButton
          onClick={() => handleOnClick(targetRef)}
          className="mt-4 md:mt-6 h-12 w-fit"
          text="Contact Me"
        />
      </div>
    </section>
  );
};
