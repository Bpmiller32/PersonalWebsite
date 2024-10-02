import { BadgeItem } from "../global/BadgeItem";

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
  renderBottomBorder?: boolean;
}

export const JobBase = ({
  title,
  position,
  time,
  location,
  description,
  tech,
  renderBottomBorder = true,
}: Props) => {
  return (
    <div
      className={
        renderBottomBorder === true
          ? "mb-6 border-b pb-6 border-neutralBorder"
          : "pb-6 border-neutralBorder"
      }
    >
      <div className="flex justify-between mb-2">
        <span className="font-bold text-xl text-textBright">{title}</span>
        <span className="text-textDark shrink-0">{time}</span>
      </div>

      <div className="flex justify-between mb-4">
        <span className="text-secondary font-bold">{position}</span>
        <span className="text-textDark shrink-0">{location}</span>
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
