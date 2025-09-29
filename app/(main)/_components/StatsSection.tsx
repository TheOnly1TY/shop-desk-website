"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function CountUp({ from, to, start }: { from: number; to: number; start: boolean }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => latest.toFixed(1)); // keep 1 decimal place

  useEffect(() => {
    if (start) {
      const controls = animate(count, to, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [start, count, to]);

  return <motion.span>{rounded}</motion.span>;
}

export default function StatsSection() {
  const [stat1Ref, stat1InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [stat2Ref, stat2InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [stat3Ref, stat3InView] = useInView({ threshold: 0.2, triggerOnce: true });

  const TextVariants1 = {
    hidden: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay: 0.3 },
    },
  };
  const TextVariants2 = { ...TextVariants1 };
  const TextVariants3 = { ...TextVariants1 };

  return (
    <section className="flex items-center w-full bg-[#009a49] py-8 lg:h-[240px] mb-16 md:mb-24 lg:mb-40">
      <div className="flex flex-wrap justify-center lg:justify-between gap-6 md:gap-8 lg:gap-0 items-center max-w-[1210px] w-full mx-auto px-6 md:px-10 text-center">
        
        {/* Stat 1 */}
        <div ref={stat1Ref} className="max-w-[190px] md:max-w-[268px] ">
          <h3 className="text-base md:text-[2.5rem] leading-6 md:leading-[60px] text-white">
            <CountUp from={0} to={20.4} start={stat1InView} />{" "}
            <span className="text-sm md:text-2xl leading-5 md:leading-9">k</span>
          </h3>
          <motion.p
            variants={TextVariants1}
            initial="hidden"
            animate={stat1InView ? "animate" : "hidden"}
            className="text-sm md:text-lg leading-5 md:leading-7 text-white"
          >
            Active small business owners using Shop Desk daily
          </motion.p>
        </div>

        {/* Stat 2 */}
        <div ref={stat2Ref} className="max-w-[190px] md:max-w-[268px] ">
          <h3 className="text-base md:text-[2.5rem] leading-6 md:leading-[60px] text-white">
            <CountUp from={0} to={25.6} start={stat2InView} />{" "}
            <span className="text-sm md:text-2xl leading-5 md:leading-9">k</span>
          </h3>
          <motion.p
            variants={TextVariants2}
            initial="hidden"
            animate={stat2InView ? "animate" : "hidden"}
            className="text-sm md:text-lg leading-5 md:leading-7 text-white"
          >
            Products tracked in real-time inventory
          </motion.p>
        </div>

        {/* Stat 3 */}
        <div ref={stat3Ref} className="max-w-[190px] md:max-w-[268px]">
          <h3 className="text-base md:text-[2.5rem] leading-6 md:leading-[60px] text-white">
            <CountUp from={0} to={15} start={stat3InView} />{" "}
            <span className="text-sm md:text-2xl leading-5 md:leading-9">k</span>
          </h3>
          <motion.p
            variants={TextVariants3}
            initial="hidden"
            animate={stat3InView ? "animate" : "hidden"}
            className="text-sm md:text-lg leading-5 md:leading-7 text-white"
          >
            Sales reports generated for better insights
          </motion.p>
        </div>
      </div>
    </section>
  );
}
