"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FeaturesSection() {
  // Main section intersection observer
  const [sectionRef] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Header intersection observer
  const [headerRef, headerInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Cards container intersection observer
  const [cardsRef] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Individual card observers
  const [card1Ref, card1InView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [card2Ref, card2InView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [card3Ref, card3InView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [card4Ref, card4InView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [card5Ref, card5InView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [card6Ref, card6InView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const titleVariants: Variants = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      y: 60,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const iconVariants: Variants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
        delay: 0.2,
      },
    },
  };

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="text-center mb-16 md:mb-24 lg:mb-40 px-6 md:px-10"
    >
      {/* Header Section */}
      <div ref={headerRef}>
        <motion.h2
          className="text-2xl leading-9 lg:text-[2.5rem] lg:leading-[60px]"
          variants={titleVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
        >
          Smart Inventory Management for High-Ticket Items
        </motion.h2>

        <motion.p
          className="lg:max-w-[692px] mx-auto text-sm leading-5 lg:text-base lg:leading-6 text-[#2a2a2a]/70 mt-2"
          variants={itemVariants}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          From automated stock tracking to powerful analysis, ShopDesk gives you
          the tools to manage, optimize, and grow your business—whether
          you&apos;re on desktop or mobile.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <ul
        ref={cardsRef}
        className="max-w-[1210px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-16 mt-10 place-items-center lg:place-items-stretch"
      >
        {/* Card 1 - Real-Time Tracking */}
        <motion.li
          ref={card1Ref}
          className="flex flex-col justify-center items-center max-w-[380px] md:max-w-none lg:max-w-[380px] bg-[#f2f5f7]/20 border-2 border-[#2a2a2a]/10 rounded-4xl pt-7 pb-8 p-4"
          variants={cardVariants}
          initial="hidden"
          animate={card1InView ? "visible" : "hidden"}
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(42,42,42,0.1)",
            borderColor: "rgba(42,42,42,0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate={card1InView ? "visible" : "hidden"}
          >
            <Image
              src="/home/repeat.svg"
              width={48}
              height={40.08}
              alt="real time tracking"
              className="mb-8"
            />
          </motion.div>

          <motion.h3
            className="text-base md:text-2xl leading-6 md:leading-8 text-[#2a2a2a] mb-1.5"
            variants={textVariants}
            initial="hidden"
            animate={card1InView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            Real-Time Tracking
          </motion.h3>
          <motion.p
            className="lg:max-w-[266px] mx-auto text-sm md:text-base leading-[145%] tracking-[2%] text-black/70"
            variants={textVariants}
            initial="hidden"
            animate={card1InView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          >
            Get instant stock updates and full visibility across all locations.
            Prevent stock discrepancies and ensure inventory accuracy at all
            times.
          </motion.p>
        </motion.li>

        {/* Card 2 - Automated Stock Updates */}
        <motion.li
          ref={card2Ref}
          className="flex flex-col justify-center items-center max-w-[380px] md:max-w-none lg:max-w-[380px] bg-[#f2f5f7]/20 border-[2px] border-[#2a2a2a]/10 rounded-4xl pt-7 pb-8 p-4"
          variants={cardVariants}
          initial="hidden"
          animate={card2InView ? "visible" : "hidden"}
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(42,42,42,0.1)",
            borderColor: "rgba(42,42,42,0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate={card2InView ? "visible" : "hidden"}
          >
            <Image
              src="/home/bar-chart.svg"
              width={48}
              height={40.08}
              alt="Automated Stock Updates"
              className="mb-8"
            />
          </motion.div>
          <motion.h3
            className="text-base md:text-2xl leading-6 md:leading-8 text-[#2a2a2a] mb-1.5"
            variants={textVariants}
            initial="hidden"
            animate={card2InView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            Automated Stock Updates
          </motion.h3>
          <motion.p
            className="lg:max-w-[266px] mx-auto text-sm md:text-base leading-[145%] tracking-[2%] text-black/70"
            variants={textVariants}
            initial="hidden"
            animate={card2InView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          >
            Receive smart restocking alerts and predictive ordering suggestions.
            Reduce manual inventory management and keep stock levels optimized.
          </motion.p>
        </motion.li>

        {/* Card 3 - Built for High-Value Products */}
        <motion.li
          ref={card3Ref}
          className="flex flex-col justify-center items-center max-w-[380px] md:max-w-none lg:max-w-[380px] bg-[#f2f5f7]/20 border-[2px] border-[#2a2a2a]/10 rounded-4xl pt-7 pb-8 p-4"
          variants={cardVariants}
          initial="hidden"
          animate={card3InView ? "visible" : "hidden"}
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(42,42,42,0.1)",
            borderColor: "rgba(42,42,42,0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate={card3InView ? "visible" : "hidden"}
          >
            <Image
              src="/home/wallet.svg"
              width={48}
              height={40.08}
              alt=""
              className="mb-8"
            />
          </motion.div>
          <motion.h3
            className="text-base md:text-2xl leading-6 md:leading-8 text-[#2a2a2a] mb-1.5"
            variants={textVariants}
            initial="hidden"
            animate={card3InView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            Built for High-Value Products
          </motion.h3>
          <motion.p
            className="lg:max-w-[266px] mx-auto text-sm md:text-base leading-[145%] tracking-[2%] text-black/70"
            variants={textVariants}
            initial="hidden"
            animate={card3InView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          >
            Manage luxury goods, electronics, and premium stock with precision.
            Our system ensure security, accuracy, and efficieny for high-value
            inventory.
          </motion.p>
        </motion.li>

        {/* Card 4 - Mobile & Web Access */}
        <motion.li
          ref={card4Ref}
          className="flex flex-col justify-center items-center max-w-[380px] md:max-w-none lg:max-w-[380px] bg-[#f2f5f7]/20 border-[2px] border-[#2a2a2a]/10 rounded-4xl pt-7 pb-8 p-4"
          variants={cardVariants}
          initial="hidden"
          animate={card4InView ? "visible" : "hidden"}
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(42,42,42,0.1)",
            borderColor: "rgba(42,42,42,0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate={card4InView ? "visible" : "hidden"}
          >
            <Image
              src="/home/devices.svg"
              width={48}
              height={40.08}
              alt=""
              className="mb-8"
            />
          </motion.div>
          <motion.h3
            className="text-base md:text-2xl leading-6 md:leading-8 text-[#2a2a2a] mb-1.5"
            variants={textVariants}
            initial="hidden"
            animate={card4InView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            Mobile & Web Access
          </motion.h3>
          <motion.p
            className="lg:max-w-[266px] mx-auto text-sm md:text-base leading-[145%] tracking-[2%] text-black/70"
            variants={textVariants}
            initial="hidden"
            animate={card4InView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          >
            Monitor and control your inventory anytime, anywhere, Our
            cloud-based system keeps you connected whether you&apos;re at the
            office or on the go.
          </motion.p>
        </motion.li>

        {/* Card 5 - Seamless Integrations */}
        <motion.li
          ref={card5Ref}
          className="flex flex-col justify-center items-center max-w-[380px] md:max-w-none lg:max-w-[380px] bg-[#f2f5f7]/20 border-[2px] border-[#2a2a2a]/10 rounded-4xl pt-7 pb-8 p-4"
          variants={cardVariants}
          initial="hidden"
          animate={card5InView ? "visible" : "hidden"}
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(42,42,42,0.1)",
            borderColor: "rgba(42,42,42,0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate={card5InView ? "visible" : "hidden"}
          >
            <Image
              src="/home/link.svg"
              width={48}
              height={40.08}
              alt=""
              className="mb-8"
            />
          </motion.div>
          <motion.h3
            className="text-base md:text-2xl leading-6 md:leading-8 text-[#2a2a2a] mb-1.5"
            variants={textVariants}
            initial="hidden"
            animate={card5InView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            Seamless Ingrations
          </motion.h3>
          <motion.p
            className="lg:max-w-[266px] mx-auto text-sm md:text-base leading-[145%] tracking-[2%] text-black/70"
            variants={textVariants}
            initial="hidden"
            animate={card5InView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          >
            Easily connect with POS systems, accounting software, and e-commerce
            platforms. Keep all your business tools in sync for a smooth
            workflow.
          </motion.p>
        </motion.li>

        {/* Card 6 - Advanced Insights & Reports */}
        <motion.li
          ref={card6Ref}
          className="flex flex-col justify-center items-center max-w-[380px] md:max-w-none lg:max-w-[380px] bg-[#f2f5f7]/20 border-[2px] border-[#2a2a2a]/10 rounded-4xl pt-7 pb-8 p-4"
          variants={cardVariants}
          initial="hidden"
          animate={card6InView ? "visible" : "hidden"}
          whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(42,42,42,0.1)",
            borderColor: "rgba(42,42,42,0.2)",
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            variants={iconVariants}
            initial="hidden"
            animate={card6InView ? "visible" : "hidden"}
          >
            <Image
              src="/home/analysis.svg"
              width={48}
              height={40.08}
              alt=""
              className="mb-8"
            />
          </motion.div>
          <motion.h3
            className="text-base md:text-2xl leading-6 md:leading-8 text-[#2a2a2a] mb-1.5"
            variants={textVariants}
            initial="hidden"
            animate={card6InView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            Advanced Insights & Reports
          </motion.h3>
          <motion.p
            className="lg:max-w-[266px] mx-auto text-sm md:text-base leading-[145%] tracking-[2%] text-black/70"
            variants={textVariants}
            initial="hidden"
            animate={card6InView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          >
            Analyze trends, track performance, and forecast demand with detailed
            reports. Make smarter, data-driven decisions to optimize your
            inventory.
          </motion.p>
        </motion.li>
      </ul>
    </section>
  );
}
