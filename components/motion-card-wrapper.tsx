"use client";
import React from "react";
import { motion } from "framer-motion";
import useWindowWidth from "@/hooks/use-window-width";

type Props = {
  children: React.ReactNode;
  index: number;
};

const MotionCardWrapper = ({ children, index }: Props) => {
  const { windowWidth } = useWindowWidth();

  const staggered = windowWidth > 768 ? 1 : 0;

  const delay = 0.2 + index * staggered * 0.3;
  return (
    <motion.div
      className=""
      initial={{
        opacity: 0,
        y: 100,
      }}
      viewport={{ once: true }}
      whileInView={{
        y: -50,
        opacity: 1,
        transition: {
          duration: 1,
          delay: delay,
          // ease: "easeInOut",
          type: "spring",
          bounce: 0.5,
          //bounce: 0.5,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionCardWrapper;
