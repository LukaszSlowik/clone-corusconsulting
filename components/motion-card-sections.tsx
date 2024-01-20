"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useWindowWidth from "@/hooks/use-window-width";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  index: number;
  duration?: number;
  margin?: string;
};

const MotionCardSections = ({
  children,
  index,
  duration = 1,
  margin = "-200px 0px 0px 0px",
  className,
}: Props) => {
  const { windowWidth } = useWindowWidth();

  const staggered = windowWidth > 768 ? 1 : 0;

  const delay = 0.2 + index * staggered * 0.3;

  return (
    <motion.div
      className={cn(``, className)}
      initial={{
        opacity: 0,
        // x: -100,
      }}
      viewport={{ once: true, margin }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: duration,
          delay: delay,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionCardSections;
