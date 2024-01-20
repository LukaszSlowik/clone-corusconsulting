"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

const IntegrationApi = (props: Props) => {
  const { ref, inView } = useInView({
    //threshold: 0.5,
    //rootMargin: "-200px 0px 0px 0px",
  });

  const delay = 1;
  const variants = {
    visible: {
      opacity: 1,
      transition: {
        //   when: "beforeChildren",
        //delay: delay,
        staggerChildren: 0.7 / 67,
        delayChildren: delay,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        //   when: "afterChildren",
      },
    },
  };
  const childerenVariants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <motion.svg
      variants={variants}
      initial="hidden"
      overflow="visible"
      //xmlns="http://www.w3.org/2000/svg"
      //xmlnsXlink="http://www.w3.org/1999/xlink"
      animate={inView && "visible"}
      //xmlSpace="preserve"
      x="0px"
      y="0px"
      ref={ref}
      viewBox="0 0 500 343.4"
      //viewport={{ once: true, margin: "-200px 0px 0px 0px" }}
      className="stroke:#3FAE29 h-full w-full"
    >
      {/* <style type="text/css">
        .fill-[#3FAE29]{
            fill:#3FAE29;
            opacity:0;
        }
        .stroke-primary stroke-2 dark:fill-[#2b2b2b] fill-[#f9f8f8] {
            fill:var(--st-bg-color);
            stroke:#3FAE29;
            stroke-width:1.5;
            stroke-linecap:round;
            stroke-linejoin:round;
            stroke-miterlimit:10;
        }
    </style> */}
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M209.3,61.8c0.1,0,0.1,0,0.2,0c1.4-0.4,2.8-0.8,4.1-1.1c0.4-0.1,0.7-0.6,0.5-1c-0.1-0.4-0.5-0.7-1-0.6
        c-1.4,0.3-2.8,0.8-4.2,1.1c-0.4,0.1-0.7,0.6-0.5,1C208.7,61.6,209,61.8,209.3,61.8z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M201.1,64.5c0.1,0,0.2,0,0.2,0c1.3-0.4,2.7-1,4.1-1.4c0.4-0.1,0.7-0.6,0.5-1s-0.5-0.7-1-0.6
        c-1.4,0.4-2.8,0.9-4.1,1.4c-0.4,0.1-0.7,0.7-0.5,1.1C200.4,64.2,200.7,64.5,201.1,64.5z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M192.9,67.7c0.1,0,0.2,0,0.3-0.1c1.3-0.6,2.7-1.1,4-1.7c0.4-0.1,0.7-0.7,0.4-1.1c-0.1-0.4-0.7-0.7-1.1-0.4
        c-1.4,0.6-2.7,1.1-4,1.7c-0.4,0.2-0.7,0.7-0.4,1.1C192.3,67.4,192.7,67.7,192.9,67.7z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M185.1,71.3c0.1,0,0.2,0,0.3-0.1c1.3-0.7,2.6-1.3,3.9-1.9c0.4-0.2,0.5-0.7,0.4-1.1c-0.2-0.4-0.7-0.6-1.1-0.4
        c-1.3,0.7-2.6,1.2-3.9,1.9c-0.4,0.2-0.5,0.7-0.3,1.1C184.4,71.1,184.7,71.3,185.1,71.3z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M177.3,75.4c0.1,0,0.3,0,0.4-0.1c1.2-0.8,2.5-1.4,3.8-2.1c0.4-0.2,0.5-0.7,0.3-1.1c-0.2-0.4-0.8-0.6-1.1-0.3
        c-1.3,0.7-2.6,1.4-3.8,2.1c-0.4,0.2-0.5,0.8-0.3,1.1C176.8,75.2,177,75.4,177.3,75.4z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M169.9,80c0.1,0,0.3,0,0.4-0.1c1.2-0.8,2.4-1.5,3.7-2.3c0.4-0.2,0.5-0.8,0.2-1.1c-0.2-0.4-0.8-0.6-1.1-0.2
        c-1.2,0.8-2.5,1.5-3.7,2.4c-0.3,0.2-0.4,0.8-0.2,1.1C169.4,79.9,169.7,80,169.9,80z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M162.9,85c0.2,0,0.3,0,0.5-0.2c1.2-0.9,2.3-1.8,3.5-2.5c0.3-0.2,0.4-0.8,0.2-1.1c-0.2-0.3-0.8-0.4-1.1-0.2
        c-1.2,0.9-2.4,1.8-3.5,2.6c-0.3,0.2-0.4,0.8-0.1,1.2C162.3,84.9,162.5,85,162.9,85z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M156.1,90.7c0.2,0,0.3-0.1,0.5-0.2c1.1-1,2.2-1.9,3.3-2.9c0.3-0.3,0.4-0.8,0.1-1.2c-0.3-0.3-0.8-0.4-1.2-0.1
        c-1.1,0.9-2.3,1.9-3.4,2.9c-0.3,0.3-0.3,0.8-0.1,1.2C155.6,90.6,155.8,90.7,156.1,90.7z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M149.7,96.6c0.2,0,0.4-0.1,0.5-0.2c1-1,2.1-2.1,3.2-3c0.3-0.3,0.3-0.9,0-1.2c-0.3-0.3-0.9-0.3-1.2,0
        c-1.1,1-2.2,2-3.2,3.1c-0.3,0.3-0.3,0.9,0,1.2C149.3,96.5,149.5,96.6,149.7,96.6z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M143.7,103c0.2,0,0.4-0.1,0.7-0.3c1-1.1,2-2.2,2.9-3.2c0.3-0.3,0.3-0.9,0-1.2c-0.3-0.3-0.9-0.3-1.2,0
        c-1,1.1-2,2.2-2.9,3.3c-0.3,0.3-0.2,0.9,0.1,1.2C143.4,103,143.5,103,143.7,103z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M141.4,104.9c-0.3-0.3-0.9-0.2-1.2,0.1c-0.9,1.1-1.8,2.3-2.7,3.5c-0.3,0.3-0.2,0.9,0.1,1.2
        c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.7-0.3c0.9-1.1,1.7-2.3,2.7-3.4C141.9,105.7,141.8,105.2,141.4,104.9z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M136.1,111.8c-0.3-0.2-0.9-0.2-1.1,0.2c-0.9,1.2-1.6,2.4-2.5,3.6c-0.2,0.3-0.1,0.9,0.2,1.1
        c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.5-0.1,0.7-0.3c0.8-1.2,1.6-2.4,2.4-3.6C136.6,112.7,136.5,112.1,136.1,111.8z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M131.3,119.2c-0.4-0.2-0.9-0.1-1.1,0.3c-0.8,1.2-1.5,2.5-2.2,3.9c-0.2,0.4-0.1,0.9,0.3,1.1
        c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0,0.5-0.1,0.8-0.4c0.7-1.2,1.4-2.5,2.2-3.7C131.9,119.9,131.7,119.4,131.3,119.2z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M127.1,126.9c-0.4-0.2-0.9,0-1.1,0.3c-0.7,1.3-1.3,2.6-2,4c-0.2,0.4,0,0.9,0.4,1.1c0.1,0,0.2,0.1,0.3,0.1
        c0.3,0,0.7-0.2,0.8-0.4c0.5-1.3,1.2-2.6,1.8-4C127.6,127.5,127.5,127,127.1,126.9z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M121.2,140.4c0.1,0,0.2,0,0.3,0c0.3,0,0.7-0.2,0.8-0.6c0.5-1.3,1-2.8,1.5-4.1c0.2-0.4,0-0.9-0.4-1.1
        c-0.4-0.2-0.9,0-1.1,0.4c-0.5,1.3-1.1,2.8-1.6,4.2C120.5,139.8,120.8,140.3,121.2,140.4z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M118.6,148.8c0.1,0,0.1,0,0.2,0c0.3,0,0.7-0.2,0.8-0.6c0.4-1.4,0.8-2.8,1.3-4.2c0.1-0.4-0.1-0.9-0.5-1
        c-0.4-0.1-0.9,0.1-1,0.6c-0.4,1.4-0.9,2.9-1.3,4.3C117.8,148.2,118.1,148.7,118.6,148.8z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M116.5,157.4h0.1c0.4,0,0.8-0.2,0.8-0.7c0.3-1.4,0.5-2.9,1-4.3c0.1-0.4-0.2-0.9-0.7-1c-0.4-0.1-0.9,0.2-1,0.7
        c-0.3,1.4-0.7,2.9-1,4.3C115.9,156.9,116.1,157.4,116.5,157.4z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M115.2,166.2C115.3,166.2,115.3,166.2,115.2,166.2c0.5,0,0.9-0.3,0.9-0.8c0.2-1.4,0.3-2.9,0.5-4.3
        c0.1-0.4-0.2-0.9-0.7-1s-0.9,0.2-1,0.7c-0.2,1.4-0.4,3-0.7,4.4C114.4,165.6,114.8,166.1,115.2,166.2z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M114.7,174.9L114.7,174.9c0.4,0,0.9-0.3,0.9-0.8c0.1-1.4,0.1-2.9,0.2-4.4c0-0.4-0.3-0.9-0.8-0.9
        s-0.9,0.3-0.9,0.8c-0.1,1.4-0.2,3-0.2,4.4C113.8,174.5,114.1,174.9,114.7,174.9z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M114.7,183.7c0.4,0,0.8-0.4,0.8-0.9c0-1.4-0.1-2.9-0.1-4.2v-0.1c0-0.4-0.3-0.9-0.9-0.9s-0.9,0.3-0.9,0.9v0.1
        c0,1.4,0,2.9,0.1,4.3C113.8,183.3,114.2,183.7,114.7,183.7L114.7,183.7z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M115.4,192.5c0.4,0,0.8-0.4,0.8-0.9c-0.2-1.4-0.3-2.9-0.4-4.3c0-0.4-0.4-0.8-0.9-0.8c-0.4,0-0.8,0.4-0.8,0.9
        c0.1,1.4,0.2,3,0.4,4.4C114.6,192.2,114.9,192.5,115.4,192.5C115.3,192.5,115.4,192.5,115.4,192.5z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M153.2,263.7c-0.3-0.3-0.9-0.3-1.2,0c-0.3,0.3-0.3,0.9,0,1.2c1.1,1,2.2,2,3.3,3c0.1,0.1,0.3,0.2,0.5,0.2
        c0.2,0,0.4-0.1,0.7-0.3c0.3-0.3,0.2-0.9-0.1-1.2C155.4,265.7,154.3,264.7,153.2,263.7z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M159.7,269.5c-0.3-0.3-0.9-0.2-1.2,0.1c-0.3,0.3-0.2,0.9,0.1,1.2c1.1,0.9,2.3,1.9,3.5,2.8
        c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.7-0.3c0.3-0.3,0.2-0.9-0.1-1.2C162,271.3,160.9,270.4,159.7,269.5z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M170.3,277.2c-1.2-0.8-2.4-1.7-3.6-2.4c-0.3-0.2-0.9-0.2-1.1,0.2c-0.2,0.3-0.2,0.9,0.2,1.1
        c1.2,0.9,2.4,1.7,3.6,2.5c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.5-0.1,0.7-0.3C170.7,278,170.6,277.5,170.3,277.2z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M177.6,281.9c-1.3-0.8-2.5-1.4-3.7-2.2c-0.4-0.2-0.9-0.1-1.1,0.2c-0.2,0.4-0.1,0.9,0.2,1.1
        c1.2,0.8,2.5,1.5,3.8,2.3c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0,0.5-0.1,0.8-0.4C178.1,282.6,178,282.1,177.6,281.9z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M185.2,285.9c-1.3-0.7-2.6-1.3-3.8-2c-0.4-0.2-0.9-0.1-1.1,0.3c-0.2,0.4-0.1,0.9,0.3,1.1c1.3,0.7,2.6,1.3,3.9,2
        c0.1,0.1,0.2,0.1,0.3,0.1c0.3,0,0.5-0.2,0.8-0.4C185.8,286.7,185.6,286.2,185.2,285.9z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M193.1,289.6c-1.3-0.6-2.6-1.1-3.9-1.8c-0.4-0.2-0.9,0-1.1,0.4c-0.2,0.4,0,0.9,0.4,1.1c1.3,0.7,2.6,1.2,4,1.8
        c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.7-0.2,0.8-0.6C193.7,290.2,193.4,289.8,193.1,289.6z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M201.2,292.8c-1.4-0.4-2.7-1-4-1.5c-0.4-0.1-0.9,0-1.1,0.4c-0.2,0.4,0,0.9,0.4,1.1c1.3,0.6,2.7,1,4.1,1.5
        c0.1,0,0.2,0,0.2,0c0.3,0,0.7-0.2,0.8-0.6C201.8,293.4,201.6,292.9,201.2,292.8z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M209.4,295.4c-1.4-0.4-2.7-0.8-4.1-1.2c-0.4-0.1-0.9,0.1-1,0.6s0.1,0.9,0.5,1c1.4,0.4,2.8,0.9,4.2,1.3
        c0.1,0,0.1,0,0.2,0c0.3,0,0.7-0.2,0.8-0.6C210.1,296,209.9,295.5,209.4,295.4z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M217.8,297.6c-1.4-0.3-2.8-0.7-4.2-1c-0.4-0.1-0.9,0.1-1,0.6c-0.1,0.4,0.1,0.9,0.5,1c1.4,0.3,2.8,0.7,4.2,1
        c0.1,0,0.1,0,0.2,0c0.3,0,0.8-0.2,0.8-0.7C218.5,298.1,218.2,297.6,217.8,297.6z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M226.3,299.2c-1.4-0.2-2.8-0.4-4.2-0.8c-0.4-0.1-0.9,0.2-1,0.7c-0.1,0.4,0.2,0.9,0.7,1c1.4,0.3,2.8,0.6,4.4,0.8
        h0.1c0.4,0,0.8-0.3,0.8-0.7C227.1,299.7,226.7,299.3,226.3,299.2z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M234.9,300.4c-1.4-0.1-2.8-0.3-4.4-0.6c-0.4-0.1-0.9,0.2-0.9,0.7c-0.1,0.4,0.2,0.9,0.7,0.9
        c1.4,0.2,2.9,0.3,4.4,0.6h0.1c0.4,0,0.8-0.3,0.8-0.8C235.7,300.8,235.3,300.4,234.9,300.4z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M243.5,300.9c-1.4-0.1-2.9-0.1-4.4-0.2c-0.4,0-0.9,0.3-0.9,0.8c0,0.4,0.3,0.9,0.8,0.9c1.4,0.1,2.9,0.2,4.4,0.2
        l0,0c0.4,0,0.8-0.3,0.8-0.8C244.2,301.4,243.9,301,243.5,300.9z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M252.2,301c-1.4,0-2.9,0-4.4,0c-0.4,0-0.9,0.3-0.9,0.8c0,0.4,0.3,0.9,0.8,0.9c0.8,0,1.5,0,2.2,0
        c0.8,0,1.4,0,2.2,0c0.4,0,0.8-0.3,0.8-0.9C252.8,301.2,252.6,301.1,252.2,301z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M260.8,300.7c-1.4,0.1-2.8,0.2-4.4,0.2c-0.4,0-0.8,0.4-0.8,0.9s0.3,0.8,0.8,0.8l0,0c1.4-0.1,2.9-0.1,4.4-0.2
        c0.4,0,0.8-0.4,0.8-0.9C261.5,301,261.2,300.7,260.8,300.7z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M269.4,299.8c-1.4,0.2-2.8,0.3-4.4,0.6c-0.4,0-0.8,0.4-0.8,0.9s0.4,0.8,0.8,0.8h0.1c1.4-0.1,2.9-0.3,4.4-0.6
        c0.4-0.1,0.8-0.4,0.7-0.9C270.2,300.1,269.8,299.8,269.4,299.8z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M278,298.5c-1.4,0.2-2.8,0.6-4.2,0.8c-0.4,0.1-0.8,0.4-0.7,1c0.1,0.4,0.4,0.7,0.8,0.7h0.1
        c1.4-0.2,2.8-0.4,4.4-0.8c0.4-0.1,0.8-0.6,0.7-1C278.8,298.7,278.4,298.4,278,298.5z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M286.4,296.6c-1.4,0.3-2.8,0.7-4.2,1c-0.4,0.1-0.8,0.6-0.7,1s0.4,0.7,0.8,0.7c0.1,0,0.1,0,0.2,0
        c1.4-0.3,2.8-0.7,4.2-1c0.4-0.1,0.7-0.6,0.5-1C287.3,296.7,286.8,296.4,286.4,296.6z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M294.7,294.2c-1.4,0.4-2.7,0.9-4.1,1.2c-0.4,0.1-0.7,0.6-0.5,1c0.1,0.3,0.4,0.6,0.8,0.6c0.1,0,0.1,0,0.2,0
        c1.4-0.4,2.8-0.9,4.2-1.3c0.4-0.1,0.7-0.6,0.5-1C295.6,294.3,295.2,294.1,294.7,294.2z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M302.9,291.3c-1.3,0.6-2.7,1-4,1.5c-0.4,0.1-0.7,0.7-0.5,1.1c0.1,0.3,0.4,0.6,0.8,0.6c0.1,0,0.2,0,0.2,0
        c1.4-0.4,2.7-1,4.1-1.5c0.4-0.1,0.7-0.7,0.4-1.1C303.8,291.3,303.3,291.1,302.9,291.3z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M310.8,287.9c-1.3,0.6-2.6,1.2-3.9,1.8c-0.4,0.2-0.7,0.7-0.4,1.1c0.1,0.3,0.4,0.6,0.8,0.6c0.1,0,0.2,0,0.3-0.1
        c1.3-0.6,2.7-1.2,4-1.8c0.4-0.2,0.5-0.7,0.4-1.1S311.3,287.7,310.8,287.9z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M318.7,284c-1.3,0.7-2.5,1.3-3.8,2c-0.4,0.2-0.5,0.7-0.3,1.1c0.1,0.3,0.4,0.4,0.8,0.4c0.1,0,0.2,0,0.3-0.1
        c1.3-0.7,2.6-1.3,3.9-2c0.4-0.2,0.5-0.7,0.3-1.1C319.5,284,319,283.9,318.7,284z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M326.2,279.7c-1.2,0.8-2.5,1.5-3.7,2.2c-0.4,0.2-0.5,0.8-0.3,1.1c0.1,0.2,0.4,0.4,0.8,0.4c0.1,0,0.3,0,0.4-0.1
        c1.3-0.8,2.5-1.5,3.8-2.3c0.4-0.2,0.5-0.8,0.2-1.1C327,279.6,326.5,279.4,326.2,279.7z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M333.4,274.8c-1.2,0.9-2.4,1.7-3.6,2.4c-0.3,0.2-0.4,0.8-0.2,1.1c0.1,0.2,0.4,0.3,0.7,0.3c0.1,0,0.3,0,0.4-0.1
        c1.2-0.8,2.4-1.7,3.6-2.5c0.3-0.2,0.4-0.8,0.2-1.1C334.2,274.6,333.7,274.6,333.4,274.8z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M340.2,269.5c-1.1,0.9-2.3,1.9-3.4,2.8c-0.3,0.2-0.4,0.8-0.1,1.2c0.1,0.2,0.4,0.3,0.7,0.3s0.3,0,0.5-0.2
        c1.2-0.9,2.3-1.8,3.5-2.8c0.3-0.3,0.4-0.8,0.1-1.2C341.1,269.3,340.5,269.2,340.2,269.5z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M346.7,263.8c-1.1,1-2.2,2-3.3,3c-0.3,0.3-0.3,0.8-0.1,1.2c0.1,0.2,0.4,0.3,0.7,0.3s0.3-0.1,0.5-0.2
        c1.1-1,2.2-2,3.3-3c0.3-0.3,0.3-0.9,0-1.2C347.5,263.6,347.1,263.5,346.7,263.8z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M385.1,186.7c-0.4,0-0.9,0.3-0.9,0.8c-0.1,1.4-0.2,3-0.4,4.3c0,0.4,0.2,0.9,0.8,0.9h0.1c0.4,0,0.8-0.3,0.8-0.8
        c0.2-1.4,0.3-3,0.4-4.4C386,187,385.7,186.7,385.1,186.7z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M385.5,177.8c-0.4,0-0.9,0.3-0.9,0.9c0,1.4,0,2.9-0.1,4.4c0,0.4,0.3,0.9,0.8,0.9l0,0c0.4,0,0.8-0.3,0.8-0.8
        c0.1-1.4,0.1-3,0.1-4.4C386.2,178.2,385.9,177.8,385.5,177.8z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M384.4,170.2c0.1,1.4,0.2,2.9,0.2,4.4c0,0.4,0.3,0.8,0.8,0.8l0,0c0.4,0,0.8-0.4,0.8-0.9c0-1.4-0.1-3-0.2-4.4
        c0-0.4-0.4-0.8-0.9-0.8C384.6,169.4,384.3,169.7,384.4,170.2z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M383.3,161.6c0.2,1.4,0.4,2.9,0.5,4.3c0,0.4,0.4,0.8,0.8,0.8h0.1c0.4,0,0.8-0.4,0.8-0.9c-0.2-1.4-0.3-3-0.5-4.4
        c-0.1-0.4-0.4-0.8-1-0.7C383.6,160.7,383.3,161.1,383.3,161.6z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M381.7,153c0.3,1.4,0.7,2.9,0.9,4.3c0.1,0.4,0.4,0.7,0.8,0.7h0.1c0.4-0.1,0.8-0.6,0.7-1c-0.3-1.4-0.5-2.9-1-4.3
        c-0.1-0.4-0.5-0.8-1-0.7C381.9,152.1,381.6,152.5,381.7,153z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M379.4,144.6c0.4,1.4,0.9,2.8,1.2,4.2c0.1,0.3,0.4,0.6,0.8,0.6c0.1,0,0.1,0,0.2,0c0.4-0.1,0.7-0.6,0.5-1
        c-0.4-1.4-0.8-2.9-1.3-4.2c-0.1-0.4-0.7-0.7-1-0.6C379.5,143.6,379.3,144.2,379.4,144.6z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M378,140.4c0.1,0.3,0.4,0.6,0.8,0.6c0.1,0,0.2,0,0.3,0c0.4-0.1,0.7-0.7,0.4-1.1c-0.5-1.3-1-2.8-1.6-4.2
        c-0.2-0.4-0.7-0.7-1.1-0.4c-0.4,0.2-0.7,0.7-0.4,1.1C377,137.7,377.5,139.1,378,140.4z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M374.7,132.4c0.1,0.3,0.4,0.4,0.8,0.4c0.1,0,0.2,0,0.3-0.1c0.4-0.2,0.5-0.7,0.4-1.1c-0.7-1.3-1.2-2.6-1.8-4
        c-0.2-0.4-0.7-0.6-1.1-0.3c-0.4,0.2-0.5,0.7-0.3,1.1C373.5,129.7,374.2,131.1,374.7,132.4z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M370.8,124.6c0.1,0.2,0.4,0.4,0.8,0.4c0.1,0,0.2,0,0.4-0.1c0.4-0.2,0.5-0.8,0.3-1.1c-0.7-1.3-1.4-2.5-2.2-3.9
        c-0.2-0.4-0.8-0.6-1.1-0.3c-0.3,0.2-0.5,0.8-0.3,1.1C369.4,122,370.1,123.2,370.8,124.6z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M366.4,117.1c0.1,0.2,0.4,0.3,0.7,0.3c0.1,0,0.3,0,0.4-0.1c0.3-0.2,0.4-0.8,0.2-1.1c-0.8-1.2-1.6-2.4-2.5-3.6
        c-0.2-0.3-0.8-0.4-1.1-0.2c-0.3,0.2-0.4,0.8-0.2,1.1C364.8,114.5,365.7,115.9,366.4,117.1z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M361.4,109.8c0.1,0.2,0.4,0.3,0.7,0.3s0.3,0,0.5-0.2c0.3-0.3,0.4-0.8,0.1-1.2c-0.9-1.2-1.7-2.3-2.7-3.5
        c-0.3-0.3-0.8-0.4-1.2-0.1c-0.3,0.3-0.4,0.8-0.1,1.2C359.7,107.5,360.6,108.7,361.4,109.8z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M356,103.1c0.1,0.2,0.4,0.3,0.7,0.3s0.4-0.1,0.5-0.2c0.3-0.3,0.3-0.8,0.1-1.2c-1-1.1-2-2.2-2.9-3.3
        c-0.3-0.3-0.9-0.3-1.2,0c-0.3,0.3-0.3,0.9,0,1.2C354,100.9,355,102,356,103.1z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M350,96.6c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2c0.3-0.3,0.3-0.9,0-1.2c-1-1-2.1-2.1-3.2-3.1
        c-0.3-0.3-0.9-0.3-1.2,0c-0.3,0.3-0.3,0.9,0,1.2C347.9,94.6,349,95.6,350,96.6z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M343.7,90.7c0.1,0.1,0.3,0.2,0.5,0.2s0.4-0.1,0.7-0.3c0.3-0.3,0.2-0.9-0.1-1.2c-1.1-1-2.2-1.9-3.4-2.9
        c-0.3-0.3-0.9-0.2-1.2,0.1c-0.3,0.3-0.2,0.9,0.1,1.2C341.5,88.8,342.6,89.7,343.7,90.7z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M336.9,85.2c0.1,0.1,0.3,0.2,0.5,0.2s0.5-0.1,0.7-0.3c0.3-0.3,0.2-0.9-0.1-1.2c-1.2-0.9-2.3-1.8-3.5-2.6
        c-0.3-0.2-0.9-0.2-1.1,0.2c-0.2,0.3-0.2,0.9,0.2,1.1C334.7,83.4,335.9,84.3,336.9,85.2z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M326.3,77.7c1.2,0.8,2.4,1.5,3.6,2.3c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.5-0.1,0.7-0.3c0.2-0.3,0.1-0.9-0.2-1.1
        c-1.2-0.8-2.4-1.7-3.7-2.4c-0.4-0.2-0.9-0.1-1.1,0.2C325.8,77,326,77.5,326.3,77.7z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M318.8,73.4c1.3,0.7,2.5,1.4,3.8,2.1c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0,0.5-0.1,0.8-0.4c0.2-0.4,0.1-0.9-0.3-1.1
        c-1.3-0.8-2.5-1.4-3.8-2.2c-0.4-0.2-0.9-0.1-1.1,0.3C318.2,72.6,318.4,73.2,318.8,73.4z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M311.1,69.4c1.3,0.7,2.6,1.2,3.9,1.9c0.1,0.1,0.2,0.1,0.3,0.1c0.3,0,0.5-0.2,0.8-0.4c0.2-0.4,0-0.9-0.3-1.1
        c-1.3-0.7-2.6-1.3-3.9-1.9c-0.4-0.2-0.9,0-1.1,0.4C310.5,68.8,310.6,69.3,311.1,69.4z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M303.1,66c1.3,0.6,2.7,1.1,4,1.7c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.7-0.2,0.8-0.6c0.2-0.4,0-0.9-0.4-1.1
        c-1.3-0.6-2.7-1.1-4-1.7c-0.4-0.1-0.9,0-1.1,0.4C302.5,65.5,302.7,65.9,303.1,66z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M294.9,63.1c1.4,0.4,2.7,0.9,4.1,1.4c0.1,0,0.2,0,0.2,0c0.3,0,0.7-0.2,0.8-0.6c0.1-0.4-0.1-0.9-0.5-1.1
        c-1.4-0.4-2.7-1-4.1-1.4c-0.4-0.1-0.9,0.1-1,0.6C294.3,62.6,294.5,63,294.9,63.1z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={childerenVariants}
        //initial="hidden"
        //animate={inView && "visible"}
        className="fill-[#3FAE29]"
        d="M286.6,60.7c1.4,0.3,2.8,0.8,4.1,1.1c0.1,0,0.1,0,0.2,0c0.3,0,0.7-0.2,0.8-0.6c0.1-0.4-0.1-0.9-0.5-1
        c-1.4-0.4-2.8-0.8-4.2-1.1c-0.4-0.1-0.9,0.1-1,0.6C285.9,60.2,286.1,60.6,286.6,60.7z"
        opacity="1"
      ></motion.path>
      <g>
        <rect
          x="216"
          y="32.1"
          className="fill-[#f9f8f8] stroke-primary stroke-2  dark:fill-[#2b2b2b]"
          width="68"
          height="124.2"
        ></rect>
        <rect
          x="223.8"
          y="43.7"
          className="fill-[#f9f8f8] stroke-primary stroke-2  dark:fill-[#2b2b2b]"
          width="52.4"
          height="10.9"
        ></rect>
        <rect
          x="223.8"
          y="65.9"
          className="fill-[#f9f8f8] stroke-primary stroke-2  dark:fill-[#2b2b2b]"
          width="52.4"
          height="10.9"
        ></rect>
        <circle
          className="fill-[#f9f8f8] stroke-primary stroke-2  dark:fill-[#2b2b2b]"
          cx="250"
          cy="119.4"
          r="3.5"
          opacity="1"
        ></circle>
      </g>
      <g>
        <rect
          x="93.5"
          y="194.2"
          className="fill-[#f9f8f8] stroke-primary stroke-2  dark:fill-[#2b2b2b]"
          width="68"
          height="124.2"
        ></rect>
        <rect
          x="101.3"
          y="205.7"
          className="fill-[#f9f8f8] stroke-primary stroke-2  dark:fill-[#2b2b2b]"
          width="52.4"
          height="10.9"
        ></rect>
        <rect
          x="101.3"
          y="227.9"
          className="fill-[#f9f8f8] stroke-primary stroke-2  dark:fill-[#2b2b2b]"
          width="52.4"
          height="10.9"
        ></rect>
        <circle
          className="fill-[#f9f8f8] stroke-primary stroke-2  dark:fill-[#2b2b2b]"
          cx="127.5"
          cy="281.4"
          r="3.5"
          opacity="1"
        ></circle>
      </g>
      <g>
        <rect
          x="338.5"
          y="194.2"
          className="fill-[#f9f8f8] stroke-primary stroke-2  dark:fill-[#2b2b2b]"
          width="68"
          height="124.2"
        ></rect>
        <rect
          x="346.3"
          y="205.7"
          className="fill-[#f9f8f8] stroke-primary stroke-2  dark:fill-[#2b2b2b]"
          width="52.4"
          height="10.9"
        ></rect>
        <rect
          x="346.3"
          y="227.9"
          className="fill-[#f9f8f8] stroke-primary stroke-2  dark:fill-[#2b2b2b]"
          width="52.4"
          height="10.9"
        ></rect>
        <circle
          className="fill-[#f9f8f8] stroke-primary stroke-2  dark:fill-[#2b2b2b]"
          cx="372.5"
          cy="281.4"
          r="3.5"
          opacity="1"
        ></circle>
      </g>
    </motion.svg>
  );
};

export default IntegrationApi;
