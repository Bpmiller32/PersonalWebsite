import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { ActionButton } from "../global/ActionButton";

interface Props {
  defaultOpen: boolean;
  children: ReactNode;
}

export const VerticalAccordion = ({ defaultOpen = false, children }: Props) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="max-w-5xl mx-auto"
    >
      <div
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6 cursor-pointer"
      >
        <motion.span
          variants={{
            open: {
              rotate: "-180deg",
              color: "#8c32e7",
            },
            closed: {
              rotate: "0deg",
              color: "#32e7e7",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
        <ActionButton
          text={open ? "See fewer projects" : "See additional projects"}
          colors={
            open
              ? {
                  borderColor: "border-projectPrimary",
                  textColorBase: "text-projectBright",
                  textColorHover: "text-projectBright",
                  backgroundBase: "bg-projectSecondary",
                  backgroundHover: "bg-projectSecondary",
                }
              : {
                  borderColor: "border-projectPrimary",
                  textColorBase: "text-projectBright",
                  textColorHover: "text-projectBright",
                  backgroundBase: "",
                  backgroundHover: "bg-projectSecondary",
                }
          }
        />
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "#8c32e7",
            },
            closed: {
              rotate: "0deg",
              color: "#32e7e7",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </div>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden"
      >
        <div ref={ref}>{children}</div>
      </motion.div>
    </motion.div>
  );
};
