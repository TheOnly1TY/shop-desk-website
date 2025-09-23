export default function CTASection() {
  return (
    <section className="mb-16 md:mb-24 lg:mb-40 px-6 md:px-10">
      <div className="flex flex-col justify-center items-center text-center bg-[#009a49] max-w-[1210px] lg:h-[383px] mx-auto rounded-[10px] md:rounded-[20px] p-6">
        <h2 className="text-2xl lg:text-[2.5rem] md:text-[2rem] md:leading-[2.75rem] leading-9 lg:leading-[60px] text-white mb-1">
          Take Control of Your Inventory Today
        </h2>
        <p className="max-w-[665px] mx-auto text-sm lg:text-base leading-5 lg:leading-6 text-white/70 mb-8">
          Say goodbye to stock issues and manual tracking. Streamline your
          business with real-time updates, smart automation, and powerful
          insights.
        </p>
        <button className="w-[153px] md:w-[165px] h-12 md:h-14 bg-white text-base leading-6 text-[#009a49] mb-5 rounded-2xl transition-all duration-300 ease-in-out cursor-pointer">
          Start for free
        </button>
        <p className="text-sm lg:text-base leading-5 lg:leading-6 text-white">
          Free plan. No card Required.
        </p>
      </div>
    </section>
  );
}
