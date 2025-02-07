import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { BadgeItem } from "../global/BadgeItem";

interface Props {
  image?: string;
  title?: string;
  description?: string;
  techUsed?: string[];
  liveLink?: string;
  githubLink?: string;
}

const useIsMobileDevice = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    // Debounce resize handler
    let resizeTimeout: number;
    const handleResize = () => {
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
      resizeTimeout = window.setTimeout(() => {
        setIsMobile(mediaQuery.matches);
      }, 100);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
      if (resizeTimeout) {
        window.clearTimeout(resizeTimeout);
      }
    };
  }, []);

  return isMobile;
};

const ProjectImage = ({ image, title }: { image?: string; title: string }) => {
  const ref = useRef(null);
  const isMobile = useIsMobileDevice();
  const isInView = useInView(ref, {
    margin: "-30% 0px -30% 0px", // Triggers when element is in middle 40% of viewport
    amount: 0.6, // Requires 60% of the element to be visible
    once: false // Allow re-triggering when scrolling back up
  });
  
  const baseClasses = "absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out rounded-xl";
  const mobileClasses = `${baseClasses} ${isInView ? 'scale-[.98] translate-y-[17%] rounded-md' : 'scale-[.85] translate-y-1/4'}`;
  const desktopClasses = `${baseClasses} scale-[.85] hover:scale-[.98] translate-y-1/4 hover:translate-y-[17%] hover:rounded-md`;

  return (
    <img
      ref={ref}
      src={image}
      alt={`An image of the ${title} project.`}
      className={isMobile ? mobileClasses : desktopClasses}
    />
  );
};

export const BaseProject = ({
  image,
  title = "Placeholder Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
  techUsed = ["placeholder tech"],
  liveLink,
  githubLink,
}: Props) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.9,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
    >
      <div className="w-full aspect-video bg-projectForeground relative rounded-lg overflow-hidden">
        {image ? (
          liveLink ? (
            <a href={liveLink} target="_blank" rel="nofollow">
              <ProjectImage image={image} title={title} />
            </a>
          ) : (
            <ProjectImage image={image} title={title} />
          )
        ) : (
          <></>
        )}
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-2 w-full">
          <p className="font-bold text-projectBright text-lg shrink-0">
            {title}
          </p>
          <div className="w-full h-[1px] bg-projectBorder" />

          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="nofollow"
              aria-label={`Go to souce code of ${title} project`}
            >
              <AiFillGithub className="text-xl text-projectDark hover:text-projectPrimary transition-colors duration-500 cursor-pointer" />
            </a>
          ) : (
            <></>
          )}
          {liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="nofollow"
              aria-label={`Go to live demo page of ${title} project`}
            >
              <AiOutlineExport className="text-xl text-projectDark hover:text-projectPrimary transition-colors duration-500 cursor-pointer" />
            </a>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-projectPrimary my-2">
          {techUsed.map((tech) => {
            return <BadgeItem key={tech}>{tech}</BadgeItem>;
          })}
        </div>
        <p className="text-projectDark leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
