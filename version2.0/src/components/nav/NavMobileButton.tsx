import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

interface Props {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const NavMobileButton = ({ active, setActive }: Props) => {
  return (
    <motion.button
      initial={false}
      onClick={() => setActive((pv) => !pv)}
      className={`flex justify-center items-center group absolute right-4 top-4 z-20 h-20 w-20 transition-all hover:bg-projectBorder duration-500 ${
        active ? "rounded-bl-xl rounded-tr-xl" : "rounded-xl"
      }`}
    >
      <AnimatePresence>
        {active && (
          <motion.div
            key="first"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              // Entry transition
              opacity: { delay: 0.5, duration: 0.5 },
              // Exit transition
              rotate: { delay: 0 },
            }}
            exit={{ rotate: "-180deg" }}
            className="absolute"
          >
            <IoClose className="h-10 w-10 text-projectBright" />
          </motion.div>
        )}

        {!active && (
          <motion.div
            key="second"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              opacity: { delay: 0.5, duration: 0.5 },
              rotate: { delay: 0 },
            }}
            exit={{ rotate: "180deg" }}
            className="absolute"
          >
            <FiMenu className="h-10 w-10 text-projectBright" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};
