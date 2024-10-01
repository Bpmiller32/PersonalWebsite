import { BadgeItem } from "../global/BadgeItem";

interface Props {
  drawTitle?: boolean;
  drawBottomBorder?: boolean;

  title: string;
  position: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
}

export const JobBase = ({
  drawTitle = true,
  drawBottomBorder = true,
  title,
  position,
  time,
  location,
  description,
  tech,
}: Props) => {
  const renderTitle = () => {
    if (drawTitle) {
      return (
        <div className="col-span-6">
          <div className="font-bold text-xl text-textBright mb-2">{title}</div>
          <div className="text-secondary font-bold mb-4">{position}</div>
        </div>
      );
    } else {
      return (
        <div className="col-span-6 flex items-center">
          <div className="text-secondary font-bold">{position}</div>
        </div>
      );
    }
  };

  return (
    <div
      className={
        drawBottomBorder
          ? "mb-6 border-b pb-6 border-neutralBorder"
          : "mb-6 pb-6"
      }
    >
      <div className="grid grid-cols-8 grid-rows-1">
        {/* <div className="col-span-6">
          <div className="font-bold text-xl text-textBright mb-2">{title}</div>
          <div className="text-secondary font-bold mb-4">{position}</div>
        </div> */}
        {renderTitle()}
        <div className="col-span-2 justify-self-end flex flex-col items-end">
          <div className="text-textDark mb-2">{time}</div>
          <div className="text-textDark mb-4">{location}</div>
        </div>
      </div>

      <p className="mb-6 text-textLight leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <BadgeItem key={item}>{item}</BadgeItem>
        ))}
      </div>
    </div>
  );
};
