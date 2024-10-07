import { useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../../assets/websiteLogo.json";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  targetSection?: React.RefObject<HTMLElement>;
}

export const WebsiteLogo = ({ className, targetSection }: Props) => {
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

  const handleOnClick = (ref?: React.RefObject<HTMLElement>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onClick={() => handleOnClick(targetSection)}
      className={twMerge(className)}
    >
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
