import { AnimationProps, motion } from "framer-motion";
import { BlockBase } from "./BlockBase";
import { useEffect, useState } from "react";
import { useWindowSize } from "../utils/UseWindowSize";
import { degreesToRadians } from "../utils/DegreesToRadians";
import { FaCamera, FaSnowboarding } from "react-icons/fa";
import { TbScubaMask } from "react-icons/tb";
import { FaEarthAmericas, FaFootball } from "react-icons/fa6";
import { GiHiking, GiRetroController } from "react-icons/gi";
import { IoTerminal } from "react-icons/io5";

/* --------------------------- External variables --------------------------- */
const ICON_DATA = [
  {
    Icon: FaCamera,
  },
  {
    Icon: FaSnowboarding,
  },
  {
    Icon: TbScubaMask,
  },
  {
    Icon: FaEarthAmericas,
  },
  {
    Icon: FaFootball,
  },
  {
    Icon: GiRetroController,
  },
  {
    Icon: GiHiking,
  },
  {
    Icon: IoTerminal,
  },
];

// Defines the distance from the center of the circle to the center of the icons
const RADIUS_TO_CENTER_OF_ICONS = {
  sm: 150,
  md: 225,
  lg: 325,
};
// Defines the width of the icon circles
const ICON_WRAPPER_WIDTH = {
  sm: 40,
  md: 65,
  lg: 80,
};
// Defines the padding between the icon circles and the inner and outer rings
const RING_PADDING = {
  sm: 8,
  md: 12,
  lg: 24,
};
// Defines the font size for logos
const LOGO_FONT_SIZE = {
  sm: 18,
  md: 24,
  lg: 36,
};
// Window size breakpoints
const BREAKPOINTS = {
  sm: 480,
  md: 768,
};

const TRANSITION: AnimationProps["transition"] = {
  repeat: Infinity,
  repeatType: "loop",
  duration: 50,
  ease: "linear",
};

/* -------------------------------- Component ------------------------------- */
export const HobbiesBlock = () => {
  const { width } = useWindowSize();

  const [sizes, setSizes] = useState({
    radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
    iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
    ringPadding: RING_PADDING.lg,
    logoFontSize: LOGO_FONT_SIZE.lg,
  });

  useEffect(() => {
    if (!width) {
      return;
    }

    if (width < BREAKPOINTS.sm) {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.sm,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.sm,
        ringPadding: RING_PADDING.sm,
        logoFontSize: LOGO_FONT_SIZE.sm,
      });
    } else if (width < BREAKPOINTS.md) {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.md,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.md,
        ringPadding: RING_PADDING.md,
        logoFontSize: LOGO_FONT_SIZE.md,
      });
    } else {
      setSizes({
        radiusToCenterOfIcons: RADIUS_TO_CENTER_OF_ICONS.lg,
        iconWrapperWidth: ICON_WRAPPER_WIDTH.lg,
        ringPadding: RING_PADDING.lg,
        logoFontSize: LOGO_FONT_SIZE.lg,
      });
    }
  }, [width]);

  return (
    <BlockBase
      className="col-span-12 md:col-span-9"
      contentNeedsPadding={false}
    >
      <div className="relative w-full h-full overflow-hidden grid grid-cols-5">
        <p className="col-span-3 md:col-span-2 min-[840px]:col-span-3 py-6 pl-6 text-lg">
          Outside of work{" "}
          <span className="text-projectDark">
            I enjoy exploring photography 📷, snowboarding 🏂, scuba 🤿, college
            football 🏈, and time with my cat 🐱.
          </span>
        </p>

        <div
          style={{
            width:
              sizes.radiusToCenterOfIcons +
              sizes.iconWrapperWidth +
              sizes.ringPadding,
            height:
              sizes.radiusToCenterOfIcons +
              sizes.iconWrapperWidth +
              sizes.ringPadding,
          }}
          className="cold-span-2 overflow-hidden absolute right-0 top-0 z-0 grid translate-x-1/3 place-content-center rounded-full bg-projectSecondary/50 shadow-inner"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={TRANSITION}
            style={{
              width:
                sizes.radiusToCenterOfIcons -
                sizes.iconWrapperWidth -
                sizes.ringPadding,
              height:
                sizes.radiusToCenterOfIcons -
                sizes.iconWrapperWidth -
                sizes.ringPadding,
            }}
            className="relative grid place-items-center rounded-full shadow"
          >
            {ICON_DATA.map((icon, idx) => {
              const degrees = (360 / ICON_DATA.length) * idx;
              return (
                <motion.div
                  key={idx}
                  style={{
                    marginTop:
                      sizes.radiusToCenterOfIcons *
                      Math.sin(degreesToRadians(degrees)),
                    marginLeft:
                      sizes.radiusToCenterOfIcons *
                      Math.cos(degreesToRadians(degrees)),
                    width: sizes.iconWrapperWidth,
                    height: sizes.iconWrapperWidth,
                  }}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: -360 }}
                  transition={TRANSITION}
                  className="absolute grid place-content-center rounded-full bg-gradient-to-br to-[#229898] from-projectPrimary text-projectBright shadow-lg"
                >
                  <icon.Icon
                    style={{
                      fontSize: sizes.logoFontSize,
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </BlockBase>
  );
};
