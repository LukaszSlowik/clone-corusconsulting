"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  direction?: "left" | "right";
};

const MotionShowWrapper = ({
  children,
  direction,
  duration = 0.5,
  delay = 0.3,
}: Props) => {
  return (
    <motion.div
      className="relative "
      initial={{
        opacity: 0,
        zIndex: 20,
        //z: -2,
        x: direction === "left" ? -100 : 100,
      }}
      viewport={{ once: true, margin: "-200px 0px 0px 0px" }}
      whileInView={{
        x: 0,
        //z: 3,
        zIndex: 20,
        opacity: 1,
        transition: {
          duration: duration,
          delay: delay,
          ease: "easeOut",
          //type: "spring",
          //bounce: 0.5,
          //bounce: 0.5,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionShowWrapper;
