"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
type Props = {};

const variants = {
  initial: { opacity: 0, x: 1000 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", staggerChildren: 0.4, delayChildren: 1 },
  },
};

const variantsChildren = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
};

const IotAi = (props: Props) => {
  const [ref, inView] = useInView();
  return (
    <>
      <div ref={ref}></div>
      <motion.svg
        variants={variants}
        initial={"initial"}
        strokeDasharray={"[0 1]"}
        animate={inView && "animate"}
        id="waves"
        className="waves"
        x="0px"
        y="0px"
        viewBox="0 0 309.6 328.7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g>
          <motion.g id="wave-up-s" className="wave">
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M175.2,200
            c-0.5,0.5-1,0.9-1.5,1.4"
            ></path>
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="3.6016,5.4024"
              d="
            M169.4,204.5c-9.8,5.7-22.2,5.2-31.5-1.5"
            ></path>
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M135.8,201.3
            c-0.5-0.4-1-0.9-1.5-1.4"
            ></path>
          </motion.g>
          <motion.g id="wave-down-s" className="wave">
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M134.3,128.7
            c0.5-0.5,1-0.9,1.5-1.4"
            ></path>
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="3.6016,5.4024"
              d="
            M140.2,124.2c9.8-5.7,22.2-5.2,31.5,1.5"
            ></path>
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M173.8,127.4
            c0.5,0.4,1,0.9,1.5,1.4"
            ></path>
          </motion.g>
        </motion.g>
        <motion.g variants={variantsChildren}>
          <motion.g id="wave-up-m" className="wave">
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M203.5,227.8
            c-0.5,0.5-1,0.9-1.4,1.4"
            ></path>
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="3.9359,5.9038"
              d="
            M197.6,233.1c-25.8,20.5-62.9,19.9-88-1.9"
            ></path>
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M107.5,229.2
            c-0.5-0.5-1-0.9-1.4-1.4"
            ></path>
          </motion.g>
          <motion.g id="wave-down-m" className="wave">
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M106,100.9
            c0.5-0.5,1-0.9,1.4-1.4"
            ></path>
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="3.9359,5.9038"
              d="
            M111.9,95.6c25.8-20.5,62.9-19.9,88,1.9"
            ></path>
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M202.1,99.5
            c0.5,0.5,1,0.9,1.4,1.4"
            ></path>
          </motion.g>
        </motion.g>
        <motion.g variants={variantsChildren}>
          <motion.g id="wave-up-l" className="wave">
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M233.8,258.4
            c-0.5,0.5-0.9,0.9-1.4,1.4"
            ></path>
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="3.9006,5.8509"
              d="
            M228.1,263.8c-42.7,37.2-106.9,36.5-148.8-2"
            ></path>
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M77.1,259.8
            c-0.5-0.5-1-0.9-1.4-1.4"
            ></path>
          </motion.g>
          <motion.g id="wave-down-l" className="wave">
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M75.7,70.3
            c0.5-0.5,0.9-0.9,1.4-1.4"
            ></path>
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="3.9006,5.8509"
              d="
            M81.5,64.9c42.7-37.2,106.9-36.5,148.8,2"
            ></path>
            <path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M232.4,68.9
            c0.5,0.5,1,0.9,1.4,1.4"
            ></path>
          </motion.g>
        </motion.g>
        <motion.g id="text">
          <circle
            fill="none"
            stroke="#3FAE29"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            cx="155"
            cy="164.4"
            r="16"
          ></circle>
          <line
            fill="none"
            stroke="#3FAE29"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            x1="203.5"
            y1="148.3"
            x2="203.5"
            y2="180.4"
          ></line>
          <line
            fill="none"
            stroke="#3FAE29"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            x1="192.1"
            y1="148.3"
            x2="214.9"
            y2="148.3"
          ></line>
          <line
            fill="none"
            stroke="#3FAE29"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            x1="99.4"
            y1="148.3"
            x2="112.6"
            y2="148.3"
          ></line>
          <line
            fill="none"
            stroke="#3FAE29"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            x1="99.4"
            y1="180.4"
            x2="112.7"
            y2="180.4"
          ></line>
          <line
            fill="none"
            stroke="#3FAE29"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            x1="106"
            y1="148.3"
            x2="106"
            y2="180.4"
          ></line>
        </motion.g>
      </motion.svg>
    </>
  );
};

export default IotAi;
