"use client";

import { motion } from "framer-motion";

const Backgroundeffect = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="absolute left-0 top-0 h-full w-full bg-darkturkish/20 md:top-[16%] md:h-[800px] md:-skew-y-6"
    ></motion.div>
  );
};

export default Backgroundeffect;
