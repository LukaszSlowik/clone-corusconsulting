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

  //   useEffect(() => {
  //     const handleResize = () => {
  //       const newWidth = window.innerWidth;
  //       const newHeight = window.innerHeight;
  //       if (Math.abs(newWidth - prevWidth) > 200) {
  //         setWindowSize([newWidth, newHeight]);
  //         setPrevWidth(newWidth);
  //       }
  //     };
  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, [prevWidth]);

  //console.log(staggered);
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
        // x: `var(--staggered)`,
        transition: {
          duration: duration,
          delay: delay,
          //`calc(0.2 + ${index} * var(--staggered) * 0.3)` as any, //0.2 + index * parseInt("var(--staggered)") * 0.3,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionCardSections;
