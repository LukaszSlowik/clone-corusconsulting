"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
};

const MotionHandsWrapper = ({ children }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 1000,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: 0.3,
          //ease: "easeOut",
          type: "spring",
          bounce: 0.3,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionHandsWrapper;
