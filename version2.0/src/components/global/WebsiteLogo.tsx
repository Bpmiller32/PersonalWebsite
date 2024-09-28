import { useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../assets/newWebsiteLogoLottie.json";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

export const WebsiteLogo = ({ className }: Props) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (!isPlaying) {
      lottieRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleAnimationComplete = () => {
    setIsPlaying(false);

    // Rewind the animation to the beginning
    lottieRef.current?.goToAndStop(0, true);
  };

  return (
    <div onMouseEnter={handleMouseEnter} className={twMerge(className)}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        onComplete={handleAnimationComplete}
      />
    </div>
  );
};
