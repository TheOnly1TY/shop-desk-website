"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CTASection() {
  const [ref, inView] = useInView({
    threshold: 0.2, 
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="mb-16 md:mb-24 lg:mb-40 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}} 
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col justify-center items-center text-center bg-[#009a49] max-w-[1210px] lg:h-[383px] mx-auto rounded-[10px] md:rounded-[20px] p-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-2xl lg:text-[2.5rem] md:text-[2rem] md:leading-[2.75rem] leading-9 lg:leading-[60px] text-white mb-1"
        >
          Take Control of Your Inventory Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="max-w-[665px] mx-auto text-sm lg:text-base leading-5 lg:leading-6 text-white/70 mb-8"
        >
          Say goodbye to stock issues and manual tracking. Streamline your
          business with real-time updates, smart automation, and powerful
          insights.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="w-[153px] md:w-[165px] h-12 md:h-14 bg-white text-base leading-6 text-[#009a49] mb-5 rounded-2xl transition-all duration-300 ease-in-out cursor-pointer"
        >
          Start for free
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="text-sm lg:text-base leading-5 lg:leading-6 text-white"
        >
          Free plan. No card Required.
        </motion.p>
      </motion.div>
    </section>
  );
}
