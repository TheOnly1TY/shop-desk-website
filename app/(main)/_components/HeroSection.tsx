"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
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

  const badgeVariants: Variants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      y: -20,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
        delay: 0.1,
      },
    },
  };

  const heroImageVariants: Variants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        delay: 0.8,
      },
    },
  };

  const starsVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.2,
      },
    },
  };

  const starVariants: Variants = {
    hidden: {
      scale: 0,
      rotate: -180,
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: "backOut",
      },
    },
  };

  return (
    <section className="relative pt-35">
      <Image
        src="/home/bg-image-pattern.png"
        alt="Background pattern"
        fill
        priority
        className="object-contain object-[0_70px] lg:object-[0_90px] !z-0"
      />
      <motion.div
        className="relative z-10 max-w-[964px] text-center mx-auto mb-16 md:mb-24 lg:mb-40 px-6 md:px-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col gap-y-6 mb-8">
          <motion.div
            className="flex justify-center items-center lg:w-[349px] mx-auto bg-white text-sm md:text-base leading-5 md:leading-6 text-[#141414] p-2.5 md:px-0 md:py-2.5 shadow-[0_25px_35px_rgba(42,42,42,0.1)] rounded-[10px]"
            variants={badgeVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 30px 45px rgba(42,42,42,0.15)",
            }}
          >
            Simplify Your Workflow, Boost Your Business
          </motion.div>
          <motion.h1
            className="max-w-[508px] mx-auto md:max-w-none md:mx-0 text-[28px] md:text-5xl lg:text-7xl leading-[42px] md:leading-[3.75rem] lg:leading-[5.625rem] text-[#2a2a2a]"
            variants={itemVariants}
          >
            Simple, and Stress-Free Shop Management
          </motion.h1>

          <motion.p
            className="max-w-[608px] md:max-w-[708px] mx-auto text-sm md:text-base leading-5 md:leading-6 text-[#8d8d8d]"
            variants={itemVariants}
          >
            From inventory tracking to sales monitoring and order management.
            Shop Desk gives you the tools to run your business smoothly—all in
            one easy-to-use platform.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-6"
            variants={itemVariants}
          >
            <Link
              href="/signin"
              className="w-full flex justify-center items-center md:w-[190px] h-14 bg-[#2a2a2a] text-base leading-6 text-white shadow-[0_25px_35px_rgba(42,42,42,0.15)] hover:bg-[#1f1f1f] hover:shadow-[0_25px_35px_rgba(42,42,42,0.25)] transition-all duration-300 rounded-2xl cursor-pointer"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 30px 45px rgba(42,42,42,0.25)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                Start for free
              </motion.button>
            </Link>
            <Link
              href="/demo"
              className="w-full flex justify-center items-center md:w-[190px] h-14 border border-[#009a49] bg-white text-base leading-6 text-[#009a49] rounded-2xl cursor-pointer hover:bg-[#009a49] hover:text-white transition-all duration-300"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 25px rgba(0,154,73,0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-[190px] h-14 border border-[#009a49] bg-white text-base leading-6 text-[#009a49] rounded-2xl cursor-pointer hover:bg-[#009a49] hover:text-white transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                Request a Demo
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center justify-center flex-wrap gap-2"
            variants={itemVariants}
          >
            <motion.div className="flex gap-1" variants={starsVariants}>
              {Array.from({ length: 5 }, (_, i) => i + 1).map((_, id) => (
                <motion.div key={id} variants={starVariants}>
                  <Star
                    className={`w-[19.02px] h-[18.09px] ${
                      4 <= id ? "fill-[#D4D4D4]" : "fill-[#F1C644]"
                    } stroke-none stroke-0`}
                  />
                </motion.div>
              ))}
            </motion.div>
            <motion.span
              className="text-sm leading-5 text-[#8D8D8D]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              Trusted by 30,000+ Businesses
            </motion.span>
          </motion.div>
        </div>

        <motion.div
          variants={heroImageVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          <Image
            src="/home/hero-image.png"
            width={1038}
            height={640}
            priority
            alt="shopdesk visual sample"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
