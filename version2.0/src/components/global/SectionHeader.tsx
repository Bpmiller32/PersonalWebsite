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
    <div
      className="flex items-center justify-center gap-8 mb-12"
      style={{
        flexDirection: titlePlacement === "right" ? "row" : "row-reverse",
      }}
    >
      <div
        ref={loadingBarRef}
        className={
          "w-full max-w-4xl h-[1px] bg-neutralBorder transition-transform duration-1000 ease-in-out scale-x-0 " +
          (titlePlacement === "left" ? "origin-top-left " : "origin-top-right ")
        }
      />
      <h2>
        <span className="text-3xl md:text-5xl font-black text-end">
          {title}
          <span className="text-primary">.</span>
        </span>
      </h2>
    </div>
  );
};
