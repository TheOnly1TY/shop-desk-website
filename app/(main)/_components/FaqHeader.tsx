import Image from "next/image";

export default function FaqHeader() {
  return (
    <div className="relative h-[200px] md:h-[350px]">
      <Image
        src="/faq/faq-banner-desktop.jpg"
        fill
        alt="faq-banner"
        className="hidden md:block object-cover h-full"
      />
      <Image
        src="/faq/faq-banner-mobile.jpg"
        fill
        alt="faq-banner"
        className="md:hidden object-cover h-full"
      />
      <div className="px-6 md:px-10">
        <div className="max-w-[1210px] mx-auto">
          <div className="absolute bottom-2 text-white z-20">
            <p className="text-base leading-6">Need help?</p>
            <h1 className="text-[28px] leading-[42px] md:text-5xl md:leading-[72px]">
              Frequently asked question
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
