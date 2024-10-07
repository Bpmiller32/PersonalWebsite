interface Props {
  sectionRef?: React.RefObject<HTMLDivElement>;
}

export const HeroSection = ({ sectionRef }: Props) => {
  return (
    <section
      ref={sectionRef}
      className="w-screen h-screen bg-blue-500 flex items-center justify-center"
    >
      <h1 className="text-white text-3xl">Hero placeholder</h1>
    </section>
  );
};
