import { motion } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { ReactNode, useRef, useState } from "react";
import UnderlineAnimationPrimary from "../../assets/cardUnderlinePrimary.json";
import UnderlineAnimationSecondary from "../../assets/cardUnderlineSecondary.json";
import UnderlineAnimationTertiary from "../../assets/cardUnderlineTertiary.json";

interface Props {
  icon: unknown;
  heading: ReactNode;
  description: ReactNode;
  verticalBarHeight: string;
  underlineColor: string;
}

export const CardBase = ({
  icon,
  heading,
  description,
  verticalBarHeight,
  underlineColor,
}: Props) => {
  const logoRef = useRef<LottieRefCurrentProps>(null);
  const underlineRef = useRef<LottieRefCurrentProps>(null);
  const [isLogoPlaying, setIsLogoPlaying] = useState(false);
  const [isUnderlinePlaying, setIsUnderlinePlaying] = useState(false);

  const handleMouseEnter = () => {
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

  const underlineSelector = () => {
    switch (underlineColor) {
      case "secondary":
        return UnderlineAnimationSecondary;
      case "tertiary":
        return UnderlineAnimationTertiary;

      default:
        return UnderlineAnimationPrimary;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      className="group relative w-full max-w-sm overflow-hidden rounded-lg bg-neutralBorder p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-neutralForground/50"
    >
      <div className="relative z-10 min-h-[320px] grid grid-rows-4 grid-cols-1 overflow-hidden rounded-[7px] bg-neutralBackgound p-8 transition-colors duration-500 group-hover:bg-neutralForground">
        <div className="relative z-10 flex justify-center w-full space-x-5">
          {/* <div className="w-12 h-12 rounded-full bg-red-500"></div> */}
          <div className="w-12 h-12">
            <Lottie
              lottieRef={logoRef}
              animationData={icon}
              loop={false}
              autoplay={false}
              onComplete={handleLogoAnimationComplete}
            />
          </div>

          <div className="relative text-textBright font-poppins font-bold text-2xl">
            {/* <div className="absolute top-[1.35rem] h-2 w-full opacity-80 bg-pink-500"></div> */}
            <Lottie
              lottieRef={underlineRef}
              animationData={underlineSelector()}
              loop={false}
              autoplay={false}
              onComplete={handleUnderlineAnimationComplete}
              className="absolute top-[1.35rem] h-2 w-full opacity-80"
            />
            {heading}
            {/* <p className="relative">Desktop App</p>
            <p className="relative">Development</p> */}
          </div>
        </div>

        {/* <!-- Description --> */}
        <div className="relative row-span-3 flex justify-center items-center min-w-full min-h-full">
          {/* <!-- Description bracket --> */}
          <div className="text-zinc-700 font-poppins font-bold">
            {/* <!-- Top "open div text" --> */}
            <p className="">&lt;div&gt;</p>
            {/* <!-- Vertical bar --> */}
            <div className="flex justify-center">
              <div
                style={{ height: verticalBarHeight + "rem" }}
                className="w-[0.15rem] bg-zinc-700"
              ></div>
            </div>
            {/* <!-- Bottom "close div text" --> */}
            <p className="">&lt;/div&gt;</p>
          </div>
          {/* <!-- Description text --> */}
          <div className="-ml-2 text-zinc-200 font-poppins">
            <div className="relative z-10 text-textDark">
              {description}
              {/* <p>5 years professional development</p>
              <p>experience in C# Powershell</p>
              <p>.Net Core WinForms UWP, Telerik , and Electron</p> */}
            </div>
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
        className="absolute inset-0 z-0 bg-gradient-to-br from-secondary via-secondary/0 to-secondary opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
    </div>
  );
};
