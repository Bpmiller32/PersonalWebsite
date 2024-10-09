import { useRef, useEffect } from "react";

interface Props {
  title: string;
  titlePlacement?: "left" | "right";
}

export const SectionHeader = ({ title, titlePlacement = "right" }: Props) => {
  const loadingBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadingBarRef.current) {
      loadingBarRef.current.classList.remove("scale-x-0");
      loadingBarRef.current.classList.add("scale-x-100");
    }
  }, []);

  return (
    <header className="w-full max-w-5xl flex justify-center mx-auto">
      <div
        className="flex items-center justify-center w-full gap-8 mb-12"
        style={{
          flexDirection: titlePlacement === "right" ? "row" : "row-reverse",
        }}
      >
        <div
          ref={loadingBarRef}
          className={
            "w-full h-[1px] bg-projectBorder transition-transform duration-1000 ease-in-out scale-x-0 " +
            (titlePlacement === "left"
              ? "origin-top-left "
              : "origin-top-right ")
          }
        />
        <h2>
          <span className="text-3xl md:text-5xl font-black text-end">
            {title}
            <span className="text-projectPrimary">.</span>
          </span>
        </h2>
      </div>
    </header>
  );
};
