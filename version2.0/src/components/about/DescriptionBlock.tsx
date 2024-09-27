import { Block } from "./Block";

export const DescriptionBlock = () => {
  return (
    <Block className="col-span-12 text-3xl leading-snug">
      {/* <div
          onMouseMove={handleOnMouseMove}
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
        ></div> */}

      <p className="">
        My passion is building exceptional digital experiences.{" "}
        <span className="text-[#9facac]">
          My journey in tech began as a kid - exploring engineering, automation,
          and video game modding. Today, at Volaris, I create accessible and
          inclusive solutions for a diverse range of clients.
        </span>
      </p>
    </Block>
  );
};
