import { motion } from "framer-motion";
import { BadgeItem } from "../global/BadgeItem";

interface Props {
  title?: string;
  position?: string;
  time?: string;
  location?: string;
  description?: string;
  tech?: string[];
  renderBottomBorder?: boolean;
}

export const BaseJob = ({
  title = "Job Title",
  position = "Job Position",
  time = "20XX - Present",
  location = "Sesame St, USA",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
  tech = [],
  renderBottomBorder = true,
}: Props) => {
  return (
    <motion.div
      variants={{
        initial: {
          y: 15,
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        duration: 0.5,
      }}
      className={
        renderBottomBorder === true
          ? "mb-6 border-b pb-6 border-projectBorder"
          : "border-projectBorder"
      }
    >
      <div className="flex justify-between space-x-10 mb-2">
        <span className="font-bold text-xl text-projectBright">{title}</span>
        <span className="text-projectDark shrink-0">{time}</span>
      </div>

      <div className="flex justify-between space-x-10 mb-4">
        <span className="text-projectSecondary font-bold">{position}</span>
        <span className="text-projectDark shrink-0">{location}</span>
      </div>

      <p className="mb-6 text-projectDark leading-relaxed whitespace-pre-line">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <BadgeItem key={item}>{item}</BadgeItem>
        ))}
      </div>
    </motion.div>
  );
};
