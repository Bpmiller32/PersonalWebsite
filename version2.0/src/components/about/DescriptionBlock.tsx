import { BlockBase } from "./BlockBase";

export const DescriptionBlock = () => {
  return (
    <BlockBase className="col-span-12 text-3xl leading-snug">
      <p className="">
        My passion is building exceptional digital experiences.{" "}
        <span className="text-textDark">
          My journey in tech began as a kid - exploring engineering, automation,
          and video game modding. Today, at Constellation, I create accessible
          and inclusive solutions for a diverse range of clients.
        </span>
      </p>
    </BlockBase>
  );
};
