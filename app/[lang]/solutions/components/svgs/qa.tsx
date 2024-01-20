"use client";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Qa = (props: Props) => {
  return (
    <svg
      className="quality"
      id="quality"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 500 328.7"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <style>
    #magnifier{
        transform:  translate(50em,50em);
        transition-timing-function: ease-in-out;
    }
    :host(.quality_show) #magnifier{
        animation-name      : random-motion;
        animation-duration  : 2s;
        animation-fill-mode : forwards;
        }
    #tick {
        opacity: 0;
    }
    :host(.quality_show) #tick {
        animation           : fade-in;
        animation-duration  : 0.5s;
        animation-delay     : 1.5s;
        animation-fill-mode : forwards;
    }
    @keyframes random-motion {
        0% {
            transform:  translate(800px,800px);
        }
        20% {
            transform:  translate(-160px,-32px);
        }
        40% {
            transform:  translate(-80px,0);
        }
        60% {
            transform:  translate(-64px,-6px);
        }
        100% {
            transform:  translate(-232px,-25.6px);
        }
    }
    @keyframes fade-in {
        0% {
            opacity : 0;
        }
        100% {
            opacity : 1;
        }
    }
    </style> */}
      <motion.g
        id="magnifier"
        animate={{
          x: [800, -160, -80, -64, -232],
          y: [800, -32, 0, -6, -25.6],
          transition: {
            times: [0, 0.2, 0.4, 0.6, 1],
            duration: 3,
            type: "tween",
          },
        }}
      >
        <circle
          className="fill-white dark:fill-dark"
          fill="var(--st-bg-color)"
          stroke="#3FAE29"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          cx="384.1"
          cy="142.7"
          r="68.7"
        ></circle>
        <circle
          className="fill-transparent"
          stroke="#3FAE29"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          cx="384.1"
          cy="142.7"
          r="60.8"
        ></circle>
        <polyline
          fill="none"
          stroke="#3FAE29"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="
            419.6,201.7 433.4,234.1 415.9,241.5 402,209 	"
        ></polyline>
        <rect
          x="397.6"
          y="265.5"
          transform="matrix(0.3921 0.9199 -0.9199 0.3921 525.0817 -237.2359)"
          className="fill-white dark:fill-dark"
          stroke="#3FAE29"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          width="88.9"
          height="26.4"
        ></rect>
        <path
          fill="none"
          stroke="#3FAE29"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M432.4,123.9c2.3,5.8,3.5,12.2,3.5,18.8"
        ></path>
        <path
          fill="none"
          stroke="#3FAE29"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="M384.1,90.9c18.3,0,34.5,9.5,43.7,23.9"
        ></path>
      </motion.g>
      <motion.polygon
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.7,
            duration: 0.5,
          },
        }}
        id="tick"
        fill="none"
        stroke="#3FAE29"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeDasharray="4,4"
        points="
            126.5,115.5 146.6,147.2 185.2,98.7 176,98.7 147.2,134 134.4,115.5 "
      ></motion.polygon>
    </svg>
  );
};

export default Qa;
