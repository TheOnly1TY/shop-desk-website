"use client";

import Data from "@/public/data/pricing.json";
import { motion, Variants } from "framer-motion";

export default function page() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
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

  const cardsContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      y: 60,
      opacity: 0,
      scale: 0.95,
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

  const popularBadgeVariants: Variants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -10,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
        delay: 0.3,
      },
    },
  };

  const featureVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const featureItemVariants: Variants = {
    hidden: {
      x: -20,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      className="pt-35 mb-16 md:mb-24 lg:mb-40 px-6 md:px-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-[75.625rem] mx-auto">
        <motion.h1
          className="text-[1.75rem] md:text-[2.5rem] lg:text-5xl
          md:leading-[3.25rem] leading-[2.625rem] lg:leading-[4.5rem]
          text-heading-text text-center"
          variants={titleVariants}
        >
          Simple{" "}
          <span className="text-primary-brand">Pricing for Every Business</span>
        </motion.h1>

        <motion.p
          className="md:max-w-[41.625rem] lg:max-w-[48.5625rem] mx-auto 
          text-sm md:text-base leading-5 md:leading-6 text-[#8D8D8D] text-center"
          variants={itemVariants}
        >
          Find the perfect plan to streamline your shop&apos;s inventory and
          sales. No hidden fees, no stress-just the tools you need to grow.
        </motion.p>

        <motion.ul
          className="flex flex-wrap flex-col md:flex-row justify-center items-center md:items-start
         gap-10 mt-10 md:mt-16"
          variants={cardsContainerVariants}
        >
          {Data.map((pricingData, index) => (
            <motion.li
              key={pricingData.name}
              className="max-w-[21.25rem] lg:max-w-[21.125rem] w-full px-[17px] py-5 
              border border-primary-brand text-primary-brand/50 rounded-[10px]"
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,154,73,0.15)",
                borderColor: "rgba(0,154,73,0.8)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              {pricingData.popularPlan && (
                <motion.span
                  className="text-sm leading-5 text-primary-brand bg-primary-brand/10 
                  border border-primary-brand/60 px-6 py-1.5 rounded-lg inline-block"
                  variants={popularBadgeVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 8px rgba(0,154,73,0.2)",
                  }}
                >
                  Popular
                </motion.span>
              )}

              <motion.h2
                className="text-4xl leading-[3.375rem] text-heading-text mt-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.15 + 0.2, duration: 0.5 }}
              >
                {pricingData.name}
              </motion.h2>

              <motion.p
                className="text-base leading-6 text-heading-text mb-5"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.15 + 0.3, duration: 0.5 }}
              >
                {pricingData.purpose}
              </motion.p>

              <motion.hr
                className="border-t border-[#BBBBBB]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8 + index * 0.15 + 0.4, duration: 0.5 }}
              />

              <motion.h3
                className="text-[2.5rem] leading-[3.75rem] text-heading-text"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.8 + index * 0.15 + 0.5,
                  duration: 0.5,
                  ease: "backOut",
                }}
              >
                ₦{pricingData.amount.toLocaleString()}
                {pricingData?.duration ? (
                  <span className="text-base leading-6">/per month</span>
                ) : null}
              </motion.h3>

              <motion.hr
                className="border-t border-[#BBBBBB]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8 + index * 0.15 + 0.6, duration: 0.5 }}
              />

              <motion.ul
                className="flex flex-col list-disc list-inside gap-2 mt-5"
                variants={featureVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 + index * 0.15 + 0.7 }}
              >
                {pricingData.feaures.map((feature, id) => (
                  <motion.li
                    key={id}
                    className="text-sm leading-5 text-heading-text marker:text-primary-brand marker:text-2xl"
                    variants={featureItemVariants}
                    whileHover={{
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                className="w-full h-12 bg-primary-brand mt-8
                text-base text-white leading-6 rounded-lg
                hover:bg-white hover:border hover:border-primary-brand hover:text-primary-brand 
                transition-all duration-300 ease-in-out cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.15 + 0.9, duration: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 8px 20px rgba(0,154,73,0.3)",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
