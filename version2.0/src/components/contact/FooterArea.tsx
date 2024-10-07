import { NavLink } from "../global/NavLink";

export const FooterArea = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full pb-10 max-w-7xl">
      {/* <!-- Divider --> */}
      <div className="mb-5 h-[1px] bg-projectBorder"></div>

      {/* <!-- Container to center links --> */}
      <div className="flex flex-wrap justify-center min-[644px]:justify-between gap-x-20 gap-y-4">
        {/* <!-- Container to space links apart --> */}
        <div className="flex items-center space-x-6">
          {/* <SimpleFloatingNav /> */}
          <NavLink children={"About"} />
          <NavLink children={"Projects"} />
          <NavLink children={"Experience"} />
          <NavLink children={"Contact"} />
        </div>
        {/* <!-- Designed by --> */}
        <p className="text-projectDark">
          {currentYear} | Designed by Billy Miller
        </p>
      </div>
    </section>
  );
};
