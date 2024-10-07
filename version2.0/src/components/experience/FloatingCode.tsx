import { motion } from "framer-motion";
import CodeBackground from "../../assets/codeBackground.webp";

export const FloatingCode = () => {
  return (
    <div className="absolute overflow-hidden w-full h-full">
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 3,
          times: [0, 0.5, 1],
        }}
        className="absolute top-[-2.5%] min-[816px]:top-[-4%] min-[1216px]:top-[-9%] left-[-7%] opacity-25"
      >
        <img
          className="h-[20rem]"
          src={CodeBackground}
          alt="Image of the code that made this, meta!"
        />
      </motion.div>
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 5,
          times: [0, 0.5, 1],
          delay: 2,
        }}
        className="absolute bottom-0 right-[-15%] opacity-25"
      >
        <img
          className="h-[20rem]"
          src={CodeBackground}
          alt="Image of the code that made this, meta!"
        />
      </motion.div>
    </div>
  );
};
