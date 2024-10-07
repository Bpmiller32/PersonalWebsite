import { motion } from "framer-motion";

interface Props {
  text: string;
  targetSection: React.RefObject<HTMLElement>;
}

export const NavLink = ({ text, targetSection }: Props) => {
  const handleOnClick = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      onClick={() => handleOnClick(targetSection)}
      className="block overflow-hidden cursor-pointer"
    >
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center">{text}</span>
        <span className="flex h-[20px] items-center text-neutral-50">
          {text}
        </span>
      </motion.div>
    </a>
  );
};
