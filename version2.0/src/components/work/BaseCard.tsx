import { ReactNode, useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import UnderlineAnimationPrimary from "../../assets/cardUnderlinePrimary.json";
import UnderlineAnimationSecondary from "../../assets/cardUnderlineSecondary.json";
import UnderlineAnimationTertiary from "../../assets/cardUnderlineTertiary.json";
import UnderlineAnimationFavorite from "../../assets/cardUnderlineFavorite.json";

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

interface Props {
  icon?: unknown;
  heading?: ReactNode;
  description?: ReactNode;
  logos?: Array<{
    src: string;
    alt: string;
    description?: string;
  }>;
  verticalBarHeight?: string;
  underlineColor?: string;
  tagName?: string;
  descriptionOffset?: number;
}

export const BaseCard = ({
  heading = "Placeholder",
  icon,
  logos,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
  verticalBarHeight = "6",
  underlineColor = "primary",
  tagName = "div",
  descriptionOffset = 1,
}: Props) => {
  const logoRef = useRef<LottieRefCurrentProps>(null);
  const underlineRef = useRef<LottieRefCurrentProps>(null);
  const cardRef = useRef(null);
  const [isLogoPlaying, setIsLogoPlaying] = useState(false);
  const [isUnderlinePlaying, setIsUnderlinePlaying] = useState(false);
  const isMobile = useIsMobileDevice();
  const isInView = useInView(cardRef, {
    margin: "-35% 0px -35% 0px", // Triggers when element is in middle 70% of viewport
    amount: 0.6, // Requires 60% of the element to be visible
    once: false, // Allow re-triggering when scrolling back up
  });

  // Add debounced state to smooth out rapid changes
  const [debouncedIsInView, setDebouncedIsInView] = useState(isInView);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedIsInView(isInView);
    }, 300); // 300ms debounce delay

    return () => clearTimeout(timeoutId);
  }, [isInView]);

  // Handle mobile scroll-based animation
  useEffect(() => {
    if (
      isMobile &&
      debouncedIsInView &&
      !isLogoPlaying &&
      !isUnderlinePlaying
    ) {
      logoRef.current?.play();
      underlineRef.current?.play();
      setIsLogoPlaying(true);
      setIsUnderlinePlaying(true);
    }
  }, [isMobile, debouncedIsInView, isLogoPlaying, isUnderlinePlaying]);

  const handleMouseEnter = () => {
    if (isMobile) return; // Disable hover on mobile

    if (!isLogoPlaying) {
      logoRef.current?.play();
      setIsLogoPlaying(true);
    }
    if (!isUnderlinePlaying) {
      underlineRef.current?.play();
      setIsUnderlinePlaying(true);
    }
  };

  const handleLogoAnimationComplete = () => {
    setIsLogoPlaying(false);
    logoRef.current?.goToAndStop(0, true);
  };

  const handleUnderlineAnimationComplete = () => {
    setIsUnderlinePlaying(false);
    underlineRef.current?.goToAndStop(0, true);
  };

  const underlineColorSelector = () => {
    switch (underlineColor) {
      case "secondary":
        return UnderlineAnimationSecondary;
      case "tertiary":
        return UnderlineAnimationTertiary;
      case "favorite":
        return UnderlineAnimationFavorite;

      default:
        return UnderlineAnimationPrimary;
    }
  };

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
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        className={`group relative min-w-[24rem] max-w-sm overflow-hidden rounded-lg bg-projectBorder p-0.5 transition-all duration-500 ${
          isMobile
            ? debouncedIsInView
              ? "scale-[1.01] bg-projectForeground/50"
              : ""
            : "hover:scale-[1.01] hover:bg-projectForeground/50"
        }`}
      >
        <div
          className={`relative z-10 min-h-[19.25rem] grid grid-rows-4 grid-cols-1 overflow-hidden rounded-[7px] bg-projectBackground p-6 transition-colors duration-500 ${
            isMobile
              ? debouncedIsInView
                ? "bg-projectForeground"
                : ""
              : "group-hover:bg-projectForeground"
          }`}
        >
          <div className="relative z-10 flex items-center justify-center w-full space-x-5">
            <div className="w-14 h-14">
              <Lottie
                lottieRef={logoRef}
                animationData={icon}
                loop={false}
                autoplay={false}
                onComplete={handleLogoAnimationComplete}
              />
            </div>

            <div className="relative text-projectBright font-bold text-2xl">
              <Lottie
                lottieRef={underlineRef}
                animationData={underlineColorSelector()}
                loop={false}
                autoplay={false}
                onComplete={handleUnderlineAnimationComplete}
                className="absolute top-[1.35rem] h-2 w-full opacity-80"
              />
              {heading}
            </div>
          </div>

          <div className="relative row-span-3 flex justify-center items-center min-w-full min-h-full">
            {!logos && (
              <div className="text-zinc-700 font-bold">
                <p className="">&lt;{tagName}&gt;</p>
                <div className="flex">
                  <div
                    style={{ height: verticalBarHeight + "rem" }}
                    className="w-[0.15rem] bg-zinc-700 ml-[25%]"
                  ></div>
                </div>
                <p className="">&lt;/{tagName}&gt;</p>
              </div>
            )}
            <div
              style={{ marginLeft: logos ? "0" : `-${descriptionOffset}rem` }}
              className={`text-zinc-200 ${logos ? "w-full" : ""}`}
            >
              {logos ? (
                <div className="grid grid-cols-3 gap-4 items-center justify-items-center h-full px-6 mt-4">
                  {logos.map((logo) => (
                    <div
                      key={logo.src}
                      className="flex flex-col items-center gap-2"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="w-auto rounded-full h-12 object-contain transition-transform hover:scale-110"
                      />
                      {logo.description && (
                        <p className="text-projectDark text-sm text-center">
                          {logo.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative z-10 text-projectDark">
                  {description}
                </div>
              )}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          style={{ scale: 1.75 }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "linear",
          }}
          className={`absolute inset-0 z-0 bg-gradient-to-br from-projectSecondary via-projectSecondary/0 to-projectSecondary transition-opacity duration-500 ${
            isMobile
              ? debouncedIsInView
                ? "opacity-100"
                : "opacity-0"
              : "opacity-0 group-hover:opacity-100"
          }`}
        />
      </div>
    </motion.div>
  );
};
