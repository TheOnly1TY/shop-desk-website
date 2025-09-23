export default function StatsSection() {
  return (
    <section className="flex items-center w-full bg-[#009a49] py-8 lg:h-[240px] mb-16 md:mb-24 lg:mb-40">
      <div className="flex flex-wrap justify-center lg:justify-between gap-6 md:gap-8 lg:gap-0 items-center max-w-[1210px] w-full mx-auto px-6 md:px-10 text-center">
        <div className="max-w-[190px] md:max-w-[268px] ">
          <h3 className="text-base md:text-[2.5rem] leading-6 md:leading-[60px] text-white">
            20.4{" "}
            <span className="text-sm md:text-2xl leading-5 md:leading-9">
              k
            </span>
          </h3>
          <p className="text-sm md:text-lg leading-5 md:leading-7 text-white">
            Active small business owners using Shop Desk daily
          </p>
        </div>

        <div className="max-w-[190px] md:max-w-[268px] ">
          <h3 className="text-base md:text-[2.5rem] leading-6 md:leading-[60px] text-white">
            25.6{" "}
            <span className="text-sm md:text-2xl leading-5 md:leading-9">
              k
            </span>
          </h3>
          <p className="text-sm md:text-lg leading-5 md:leading-7 text-white">
            Products tracked in real-time inventory
          </p>
        </div>

        <div className="max-w-[190px] md:max-w-[268px]">
          <h3 className="text-base md:text-[2.5rem] leading-6 md:leading-[60px] text-white">
            15{" "}
            <span className="text-sm md:text-2xl leading-5 md:leading-9">
              k
            </span>
          </h3>
          <p className="text-sm md:text-lg leading-5 md:leading-7 text-white">
            Sales reports generated for better insights
          </p>
        </div>
      </div>
    </section>
  );
}
