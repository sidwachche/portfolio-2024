import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        reverse: Infinity,
        duration: 0.5,
      },
      y: {
        reverse: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const DancingLoader = () => {
  return (
    <motion.div
      className="size-4 rounded-full absolute -top-1/3 left-1/2 bg-gradient-to-r from-pink-500 to-orange-500"
      variants={loaderVariants}
      animate={{
        x: [-20, 20],
        y: [0, -20],
        transition: {
          x: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          },
          y: {
            duration: 0.25,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        },
      }}
    ></motion.div>
  );
};

export default DancingLoader;
