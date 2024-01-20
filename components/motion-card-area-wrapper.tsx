"use client";
import React from "react";
import { motion } from "framer-motion";
import useWindowWidth from "@/hooks/use-window-width";

type Props = {
  children: React.ReactNode;
  index: number;
  direction: "normal" | "reverse";
  total: number;
  additionalDelay?: number;
};

const MotionCardAreaWrapper = ({
  children,
  index,
  total,
  direction = "normal",
  additionalDelay = 0,
}: Props) => {
  const { windowWidth } = useWindowWidth();

  const staggered = windowWidth > 768 ? 1 : 0;

  //const delay = 0.2 + index * staggered * 0.3;

  const delay =
    staggered === 1
      ? direction === "reverse"
        ? 0.4 + (total - 1) * 0.3 - index * 0.3 + additionalDelay
        : 0.4 + index * 0.3 + additionalDelay
      : 0.4;
  return (
    <motion.div
      className="flex-1"
      initial={{
        opacity: 0,
      }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
          //ease: "easeOut",
          delay: delay,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionCardAreaWrapper;
