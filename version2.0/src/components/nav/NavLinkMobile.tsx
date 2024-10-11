import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

interface Props {
  text: string;
  targetSection: React.RefObject<HTMLElement>;
  idx?: number;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const NavLinkMobile = ({
  text,
  targetSection,
  idx = 0,
  setActive, // Accept setActive as a prop
}: Props) => {
  const handleOnClick = (ref: React.RefObject<HTMLElement>) => {
    // Smooth scroll to target section
    if (ref.current) {
      console.log(ref.current);
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    // Close the menu after delay....
    // Hacky workaround because the smooth scroll above needs to finish before NavMobile is closed and this doesn't exist
    setTimeout(() => {
      setActive(false);
    }, 400);
  };

  return (
    <motion.a
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.25,
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0, y: -8 }}
      className="block text-5xl font-semibold text-projectDark transition-colors hover:text-projectBright md:text-7xl duration-500"
      onClick={() => handleOnClick(targetSection)}
    >
      {text}.
    </motion.a>
  );
};
