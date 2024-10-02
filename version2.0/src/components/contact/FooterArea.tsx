import { ContactLink } from "./ContactLink";

export const FooterArea = () => {
  return (
    <section className="w-full pb-10 max-w-7xl">
      {/* <!-- Divider --> */}
      <div className="mb-5 h-[1px] bg-neutralBorder"></div>

      {/* <!-- Container to center links --> */}
      <div className="flex justify-between">
        {/* <!-- Container to space links apart --> */}
        <div className="flex justify-around space-x-2">
          <ContactLink text="Home" href="#" />
          <ContactLink text="About" href="#" />
          <ContactLink text="Projects" href="#" />
          <ContactLink text="Experience" href="#" />
          <ContactLink text="Contact" href="#" />
        </div>
        {/* <!-- Designed by --> */}
        <p className="text-textLight">2024 | Designed by Billy Miller</p>
      </div>
    </section>
  );
};
