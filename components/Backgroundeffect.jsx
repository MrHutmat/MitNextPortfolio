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
      className="w-full h-full top-0 absolute md:top-[13%] bg-darkturkish/20 left-0 md:h-[800px] md:-skew-y-6"
    ></motion.div>
  );
};

export default Backgroundeffect;
