import Image from "next/image";

export default function MainBlog() {
  return (
    <div className="relative text-white">
      <div className="relative">
        {" "}
        <div className="flex justify-center items-center w-[164px] h-[44px] text-base text-white leading-6 bg-[#009a49] rounded-t-lg">
          Hottest Read
        </div>
        <Image
          src="/blog/main-blog.jpg"
          width={1200}
          height={469}
          priority
          className="rounded-r-lg rounded-b-lg rounded-bl-lg md:rounded-r-xl md:rounded-b-xl md:rounded-bl-xl h-[469px] object-cover"
          alt="main blog"
        />
      </div>

      <div className="absolute left-4 bottom-8 ">
        <h2 className="text-xl leading-7 md:text-[2rem] md:leading-12 mb-6">
          5 Simple Ways to Boost <br className="block md:hidden" /> Your{" "}
          <br className="hidden md:block" /> Shop Sales Today
        </h2>
        <div className="flex gap-8 md:gap-16">
          <div>
            {" "}
            <p className="text-sm leading-5 mb-2">Written By</p>
            <div className="flex items-center gap-2">
              <Image
                src="/public/blog/shopdesk-team.jpg"
                width={32}
                height={32}
                className="rounded-full"
                alt="shop desk"
              />
              <span className="text-xs leading-5 md:text-base md:leading-6">
                By Shop Desk Teams
              </span>
            </div>
          </div>
          <div>
            {" "}
            <p className="text-sm leading-5 mb-2">Published On</p>
            <p className="text-xs leading-5 md:text-base md:leading-6">
              Published On Feb 12, 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
