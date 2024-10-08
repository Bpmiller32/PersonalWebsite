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
    <section ref={sectionRef} className="h-screen bg-projectForeground">
      <div className="relative max-w-5xl mx-auto top-40">
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

          {/* <div className="h-12">
            <ProjectButton
              text="Contact Me"
              className="h-full mt-4 md:mt-6 bg-projectForeground"
            />
          </div> */}
        </div>

        <div onClick={() => handleOnClick(targetRef)} className="h-12">
          <button
            className={`
            bg-projectSecondary h-full mt-4 md:mt-6 relative z-50 flex items-center justify-center gap-2 overflow-hidden rounded-lg text-sm border-[1px] 
            border-projectBorder px-4 py-1.5
            text-projectBright transition-all duration-500
            
            before:absolute before:inset-0
            before:-z-30 before:translate-x-[150%]
            before:translate-y-[150%] before:scale-[2.5]
            before:rounded-[100%] before:bg-projectBright
            before:transition-transform before:duration-1000
            before:content-[""]
    
            hover:scale-105 hover:text-projectBackground
            hover:before:translate-x-[0%]
            hover:before:translate-y-[0%]
            active:scale-95`}
          >
            <div className="flex items-center space-x-2">Contact Me</div>
          </button>
        </div>
      </div>
    </section>
  );
};
