import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { BadgeItem } from "../global/BadgeItem";
// import { ProjectButton } from "../global/ProjectButton";

interface Props {
  title?: string;
  description?: string;
  techUsed?: string[];
  liveLink?: string;
  githubLink?: string;
}

export const BaseProject = ({
  title = "Placeholder Title",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
  techUsed = ["placeholder tech"],
  liveLink = "#",
  githubLink = "#",
}: Props) => {
  return (
    <>
      <div>
        <div className="w-full aspect-video bg-projectForeground cursor-pointer relative rounded-lg overflow-hidden">
          <img
            alt={`An image of the ${title} project.`}
            style={{
              width: "85%",
              rotate: "0deg",
            }}
            className="w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 transition-all rounded"
          />
        </div>
        <div className="mt-6">
          <div className="flex items-center gap-2 w-full">
            <h4 className="font-bold text-projectBright text-lg shrink-0 max-w-[calc(100%_-_150px)]">
              {title}
            </h4>
            <div className="w-full h-[1px] bg-projectBorder" />

            <a href={githubLink} rel="nofollow">
              <AiFillGithub className="text-xl text-projectDark hover:text-projectPrimary transition-colors duration-500 cursor-pointer" />
            </a>

            <a href={liveLink} rel="nofollow">
              <AiOutlineExport className="text-xl text-projectDark hover:text-projectPrimary transition-colors duration-500 cursor-pointer" />
            </a>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-projectPrimary my-2">
            {techUsed.map((tech) => {
              return <BadgeItem key={tech}>{tech}</BadgeItem>;
            })}
          </div>
          <p className="text-projectDark leading-relaxed">
            {description}

            {/* <ProjectButton
              text={
                <div className="flex items-center gap-2">
                  <p>Learn more</p>
                  <AiOutlineExport />
                </div>
              }
              className="mt-4"
            /> */}
          </p>
        </div>
      </div>
      {/* <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      /> */}
    </>
  );
};
