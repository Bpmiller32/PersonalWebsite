import { BaseBlock } from "./BaseBlock";

export const DescriptionBlock = () => {
  return (
    <BaseBlock className="col-span-12 text-3xl leading-snug">
      <p className="">
        My passion is building exceptional digital experiences.{" "}
        <span className="text-projectDark">
          My journey in tech began as a kid - exploring video game modding,
          automation, and engineering. Today, at Constellation, I create
          accessible and inclusive solutions for a diverse range of clients.
        </span>
      </p>
    </BaseBlock>
  );
};
