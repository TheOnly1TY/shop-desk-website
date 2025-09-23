import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="text-center mb-16 md:mb-24 lg:mb-40 px-6 md:px-10">
      <h2 className="text-2xl leading-9 lg:text-[2.5rem] lg:leading-[60px]">
        Smart Inventory Management for High-Ticket Items
      </h2>
      <p className="lg:max-w-[692px] mx-auto text-sm leading-5 lg:text-base lg:leading-6 text-[#2a2a2a]/70 mt-2">
        From automated stock tracking to powerful analysis, ShopDesk gives you
        the tools to manage, optimize, and grow your business—whether
        you&apos;re on desktop or mobile.
      </p>
      <ul className="max-w-[1210px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-16 mt-10 place-items-center lg:place-items-stretch">
        <li className="flex flex-col justify-center items-center max-w-[380px] md:max-w-none lg:max-w-[380px] bg-[#f2f5f7]/20 border-2 border-[#2a2a2a]/10 rounded-4xl pt-7 pb-8 p-4">
          <Image
            src="/home/repeat.svg"
            width={48}
            height={40.08}
            alt=""
            className="mb-8"
          />

          <h3 className="text-base md:text-2xl leading-6 md:leading-8 text-[#2a2a2a] mb-1.5">
            Real-Time Tracking
          </h3>
          <p className="lg:max-w-[266px] mx-auto text-sm md:text-base leading-[145%] tracking-[2%] text-black/70">
            Get instant stock updates and full visibility across all locations.
            Prevent stock discrepancies and ensure inventory accuracy at all
            times.
          </p>
        </li>
        <li className="flex flex-col justify-center items-center max-w-[380px] md:max-w-none lg:max-w-[380px] bg-[#f2f5f7]/20 border-[2px] border-[#2a2a2a]/10 rounded-4xl pt-7 pb-8 p-4">
          <Image
            src="/home/bar-chart.svg"
            width={48}
            height={40.08}
            alt=""
            className="mb-8"
          />
          <h3 className="text-base md:text-2xl leading-6 md:leading-8 text-[#2a2a2a] mb-1.5">
            Automated Stock Updates
          </h3>
          <p className="lg:max-w-[266px] mx-auto text-sm md:text-base leading-[145%] tracking-[2%] text-black/70">
            Receive smart restocking alerts and predictive ordering suggestions.
            Reduce manual inventory management and keep stock levels optimized.
          </p>
        </li>
        <li className="flex flex-col justify-center items-center max-w-[380px] md:max-w-none lg:max-w-[380px] bg-[#f2f5f7]/20 border-[2px] border-[#2a2a2a]/10 rounded-4xl pt-7 pb-8 p-4">
          <Image
            src="/home/wallet.svg"
            width={48}
            height={40.08}
            alt=""
            className="mb-8"
          />
          <h3 className="text-base md:text-2xl leading-6 md:leading-8 text-[#2a2a2a] mb-1.5">
            Built for High-Value Products
          </h3>
          <p className="lg:max-w-[266px] mx-auto text-sm md:text-base leading-[145%] tracking-[2%] text-black/70">
            Manage luxury goods, electronics, and premium stock with precision.
            Our system ensure security, accuracy, and efficieny for high-value
            inventory.
          </p>
        </li>
        <li className="flex flex-col justify-center items-center max-w-[380px] md:max-w-none lg:max-w-[380px] bg-[#f2f5f7]/20 border-[2px] border-[#2a2a2a]/10 rounded-4xl pt-7 pb-8 p-4">
          <Image
            src="/home/devices.svg"
            width={48}
            height={40.08}
            alt=""
            className="mb-8"
          />
          <h3 className="text-base md:text-2xl leading-6 md:leading-8 text-[#2a2a2a] mb-1.5">
            Mobile & Web Access
          </h3>
          <p className="lg:max-w-[266px] mx-auto text-sm md:text-base leading-[145%] tracking-[2%] text-black/70">
            Monitor and control your inventory anytime, anywhere, Our
            cloud-based system keeps you connected whether you&apos;re at the
            office or on the go.
          </p>
        </li>
        <li className="flex flex-col justify-center items-center max-w-[380px] md:max-w-none lg:max-w-[380px] bg-[#f2f5f7]/20 border-[2px] border-[#2a2a2a]/10 rounded-4xl pt-7 pb-8 p-4">
          <Image
            src="/home/link.svg"
            width={48}
            height={40.08}
            alt=""
            className="mb-8"
          />
          <h3 className="text-base md:text-2xl leading-6 md:leading-8 text-[#2a2a2a] mb-1.5">
            Seamless Ingrations
          </h3>
          <p className="lg:max-w-[266px] mx-auto text-sm md:text-base leading-[145%] tracking-[2%] text-black/70">
            Easily connect with POS systems, accounting software, and e-commerce
            platforms. Keep all your business tools in sync for a smooth
            workflow.
          </p>
        </li>
        <li className="flex flex-col justify-center items-center max-w-[380px] md:max-w-none lg:max-w-[380px] bg-[#f2f5f7]/20 border-[2px] border-[#2a2a2a]/10 rounded-4xl pt-7 pb-8 p-4">
          <Image
            src="/home/analysis.svg"
            width={48}
            height={40.08}
            alt=""
            className="mb-8"
          />
          <h3 className="text-base md:text-2xl leading-6 md:leading-8 text-[#2a2a2a] mb-1.5">
            Advanced Insights & Reports
          </h3>
          <p className="lg:max-w-[266px] mx-auto text-sm md:text-base leading-[145%] tracking-[2%] text-black/70">
            Analyze trends, track performance, and forecast demand with detailed
            reports. Make smarter, data-driven decisions to optimize your
            inventory.
          </p>
        </li>
      </ul>
    </section>
  );
}
