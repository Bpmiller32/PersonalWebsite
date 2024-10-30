import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { BadgeItem } from "../global/BadgeItem";
import { motion } from "framer-motion";

interface Props {
  image?: string;
  title?: string;
  description?: string;
  techUsed?: string[];
  liveLink?: string;
  githubLink?: string;
}

export const BaseProject = ({
  image,
  title = "Placeholder Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
  techUsed = ["placeholder tech"],
  liveLink,
  githubLink,
}: Props) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.9,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
    >
      <div className="w-full aspect-video bg-projectForeground relative rounded-lg overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={`An image of the ${title} project.`}
            className="scale-[.85] hover:scale-[.98] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 hover:translate-y-[17%] transition-all duration-500 ease-in-out rounded-xl hover:rounded-md"
          />
        ) : (
          <></>
        )}
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-2 w-full">
          <p className="font-bold text-projectBright text-lg shrink-0">
            {title}
          </p>
          <div className="w-full h-[1px] bg-projectBorder" />

          {githubLink ? (
            <a href={githubLink} target="_blank" rel="nofollow">
              <AiFillGithub className="text-xl text-projectDark hover:text-projectPrimary transition-colors duration-500 cursor-pointer" />
            </a>
          ) : (
            <></>
          )}
          {liveLink ? (
            <a href={liveLink} target="_blank" rel="nofollow">
              <AiOutlineExport className="text-xl text-projectDark hover:text-projectPrimary transition-colors duration-500 cursor-pointer" />
            </a>
          ) : (
            <></>
          )}
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-projectPrimary my-2">
          {techUsed.map((tech) => {
            return <BadgeItem key={tech}>{tech}</BadgeItem>;
          })}
        </div>
        <p className="text-projectDark leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
