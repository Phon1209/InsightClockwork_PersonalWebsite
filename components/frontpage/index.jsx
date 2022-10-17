import React from "react";
import BubbleImg from "./bubble/bubble_img";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.645, 0.045, 0.355, 1],
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
    },
  },
};

const Frontpage = () => {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row">
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        className=" text-white text-center p-16 flex justify-center items-center flex-col min-h-[400px] lg:pl-24 lg:items-start lg:text-left"
      >
        <motion.h1
          variants={item}
          layoutId="name"
          animate
          className="text-display-lg"
        >
          Patiphon Loetsuthakun
        </motion.h1>
        <motion.h3 variants={item} animate className="text-headline-sm">
          Frontend Developer
        </motion.h3>
      </motion.section>
      <section className="flex-grow flex justify-center items-center">
        <BubbleImg size={300} onPage={false} />
      </section>
    </div>
  );
};

export default Frontpage;
