"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ValuesSection() {
  // Individual section observers
  const [section1Ref, section1InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [section2Ref, section2InView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [section3Ref, section3InView] = useInView({ threshold: 0.2, triggerOnce: true });


  // Animation
  const contentVariants: Variants = {
    hidden: { 
      x: -50,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
      }
    }
  };

  const contentVariantsRight: Variants = {
    hidden: { 
      x: 50,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { 
      x: 50,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        delay: 0.2
      }
    }
  };

  const imageVariantsLeft: Variants = {
    hidden: { 
      x: -50,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        delay: 0.2
      }
    }
  };

  const titleVariants: Variants = {
    hidden: { 
      y: 30,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
      }
    }
  };

  const textVariants: Variants = {
    hidden: { 
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
        delay: 0.3
      }
    }
  };

  return (
    <section className="mb-16 md:mb-24 lg:mb-40 px-6 md:px-10">
      <div className="flex flex-col gap-y-[60px] md:gap-y-[80px] lg:gap-y-[7.5rem] max-w-[1210px] mx-auto">
        

        <div 
          ref={section1Ref}
          className="flex flex-col lg:flex-row justify-between items-center gap-8"
        >
          <motion.div 
            className="mb-[15px] lg:mb-0 md:text-center lg:text-left"
            variants={contentVariants}
            initial="hidden"
            animate={section1InView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-2xl lg:text-[2.5rem] md:text-[2rem] md:leading-[2.75rem] leading-9 lg:leading-[3.75rem] md:max-w-[550px] lg:max-w-none mx-auto mb-[10px]"
              variants={titleVariants}
              initial="hidden"
              animate={section1InView ? "visible" : "hidden"}
            >
              Effortless Product Management at Your Fingertips
            </motion.h2>
            <motion.p 
              className="text-sm lg:text-base md:text-[15px] md:leading-[1.5rem] leading-5 lg:leading-[1.875rem] md:max-w-[675px] lg:max-w-[435px] md:mx-auto lg:mx-0  text-[#2a2a2a]/70"
              variants={textVariants}
              initial="hidden"
              animate={section1InView ? "visible" : "hidden"}
            >
              Stay on top of your stock levels with real-time updates across
              multiple warehouses and retail locations. Our system ensures that
              every product movement, from restocking to sales, is tracked
              instantly. With this feature, you can eliminate manual updates,
              reduce human error, and have full visibility of your inventory at
              any given moment.
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={section1InView ? "visible" : "hidden"}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <Image
              src="/home/feature-image1.png"
              width={584}
              height={522}
              alt=""
            />
          </motion.div>
        </div>
        <div 
          ref={section2Ref}
          className="flex flex-col lg:flex-row-reverse justify-between items-center gap-8 mb-[15px] lg:mb-0"
        >
          <motion.div 
            className="mb-[15px] lg:mb-0 md:text-center lg:text-left"
            variants={contentVariantsRight}
            initial="hidden"
            animate={section2InView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-2xl md:text-[2rem] lg:text-[2.5rem] leading-9 md:leading-[2.75rem] lg:leading-[3.75rem] md:max-w-[550px] lg:max-w-none mx-auto mb-[10px] lg:text-right"
              variants={titleVariants}
              initial="hidden"
              animate={section2InView ? "visible" : "hidden"}
            >
              Access Your Business Anytime, Anywhere on Any Device
            </motion.h2>
            <motion.p 
              className="text-sm md:text-[15px] lg:text-base leading-5 md:leading-[1.5rem] lg:leading-[1.875rem] md:max-w-[675px] lg:max-w-[435px] float-right md:mx-auto lg:mx-0 text-[#2a2a2a]/70"
              variants={textVariants}
              initial="hidden"
              animate={section2InView ? "visible" : "hidden"}
            >
              Take control of your inventory on-the-go. With cloud-based access,
              you can manage your stock from anywhere, whether you&apos;re at
              the office, in transit, or at a retail location. The mobile and
              web apps are designed to give you the flexibility to manage your
              inventory seamlessly, offering you the freedom to track and update
              your stock anytime, anywhere.
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={imageVariantsLeft}
            initial="hidden"
            animate={section2InView ? "visible" : "hidden"}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <Image
              src="/home/feature-image2.png"
              width={584}
              height={522}
              alt=""
            />
          </motion.div>
        </div>
        <div 
          ref={section3Ref}
          className="flex flex-col lg:flex-row justify-between items-center gap-8"
        >
          <motion.div 
            className="mb-[15px] lg:mb-0 md:text-center lg:text-left"
            variants={contentVariants}
            initial="hidden"
            animate={section3InView ? "visible" : "hidden"}
          >
            <motion.h2 
              className="text-2xl lg:text-[2.5rem] md:text-[2rem] md:leading-[2.75rem] leading-9 lg:leading-[3.75rem] md:max-w-[550px] lg:max-w-none mx-auto mb-[10px]"
              variants={titleVariants}
              initial="hidden"
              animate={section3InView ? "visible" : "hidden"}
            >
              Seamless Integrations
            </motion.h2>
            <motion.p 
              className="text-sm lg:text-base md:text-[15px] md:leading-[1.5rem] leading-5 lg:leading-[1.875rem] md:max-w-[675px] lg:max-w-[435px] md:mx-auto lg:mx-0 text-[#2a2a2a]/70"
              variants={textVariants}
              initial="hidden"
              animate={section3InView ? "visible" : "hidden"}
            >
              Integrate effortlessly with your exiting systems, from accounting
              tools to POS systems and popular e-commerce platforms like Shopify
              and WooCommerce. With these integrations, you can keep all your
              oprations connected, synchronize data across platforms, and reduce
              the time spent on manual data entry. Whether you&apos;re managing
              online sales or physical stores, our system ensures your inventory
              is always aligned with your business processes.
            </motion.p>
          </motion.div>
          
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={section3InView ? "visible" : "hidden"}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <Image
              src="/home/feature-image3.png"
              width={584}
              height={522}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}