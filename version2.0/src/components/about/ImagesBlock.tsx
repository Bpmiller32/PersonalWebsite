import { BaseBlock } from "./BaseBlock";
import billyImage0 from "../../assets/billyImage0.webp";
import billyImage1 from "../../assets/billyImage1.webp";
import billyImage2 from "../../assets/billyImage2.webp";
import billyImage3 from "../../assets/billyImage3.webp";

export const ImagesBlock = () => (
  <>
    <BaseBlock
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3"
    >
      <div className="grid h-full min-h-24 md:min-h-full place-content-center text-3xl text-white">
        <img
          className="absolute rounded-lg inset-0 w-full h-full object-cover"
          src={billyImage0}
        ></img>
      </div>
    </BaseBlock>
    <BaseBlock
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3"
    >
      <div className="grid h-full min-h-24 md:min-h-full place-content-center text-3xl text-white">
        <img
          className="absolute rounded-lg inset-0 w-full h-full object-cover object-bottom"
          src={billyImage3}
        ></img>
      </div>
    </BaseBlock>
    <BaseBlock
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3"
    >
      <div className="grid h-full min-h-24 md:min-h-full place-content-center text-3xl text-black">
        <img
          className="absolute rounded-lg inset-0 w-full h-full object-cover"
          src={billyImage1}
        ></img>
      </div>
    </BaseBlock>
    <BaseBlock
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 md:col-span-3"
    >
      <div className="grid h-full min-h-24 md:min-h-full place-content-center text-3xl text-white">
        <img
          className="absolute rounded-lg inset-0 w-full h-full object-cover object-right"
          src={billyImage2}
        ></img>
      </div>
    </BaseBlock>
  </>
);
