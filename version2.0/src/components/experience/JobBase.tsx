import { BadgeItem } from "../global/BadgeItem";

interface Props {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
}

export const JobBase = ({
  title,
  position,
  time,
  location,
  description,
  tech,
}: Props) => {
  return (
    <div className="mb-6 border-b pb-6 border-neutralBorder">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-xl text-textBright">{title}</span>
        <span className="text-textDark">{time}</span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-secondary font-bold">{position}</span>
        <span className="text-textDark">{location}</span>
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
