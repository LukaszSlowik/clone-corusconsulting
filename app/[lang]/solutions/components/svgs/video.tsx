"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

const Video = (props: Props) => {
  const { ref, inView } = useInView();
  return (
    <>
      <div ref={ref}></div>
      <svg
        className="fill-transparent"
        id="media"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 500 328.7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          id="media-group"
          initial={{ x: 1000 }}
          animate={inView && { x: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.2,
          }}
          style={{
            strokeWidth: 1.5,
            stroke: "#3fae29",
          }}
        >
          <motion.g
            id="montain"
            animate={
              inView && {
                opacity: [0, 1, 1, 0],
                transition: {
                  times: [0, 0.3, 0.8, 1],
                  duration: 3,
                  delay: 1,
                },
              }
            }
          >
            <motion.path
              id="sun"
              animate={
                inView && {
                  rotate: [0, 15, 20, 20],
                  x: [0, -35, -30, -30],
                  y: [0, 5, -90, -90],

                  transition: {
                    times: [0, 0.3, 0.7, 1],

                    duration: 2.8,
                    delay: 1.2,
                  },
                }
              }
              style={{
                transformOrigin: "top right",
                stroke: "#3fae29",
                strokeWidth: 1.5,
                strokeDasharray: "3.918, 3.918",
              }}
              className="st0"
              d="M214.2,198.9c0,15.2-12.3,27.4-27.4,27.4c-36.4-1.4-36.4-53.4,0-54.9C202,171.5,214.2,183.7,214.2,198.9
                    L214.2,198.9z"
            ></motion.path>
            <motion.g className={`fill-white dark:fill-[#2b2b2b]`}>
              <polygon
                className="st1"
                points="423.5,149.8 378.4,91.4 275,213.1 203.7,159 112.9,253.5 423.4,253.5"
              ></polygon>
              <motion.g
                style={{
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  stroke: "#3fae29",
                }}
              >
                <polyline
                  className="st2"
                  points="379.6,93 378.4,91.4 377.1,93"
                ></polyline>
                <line
                  className="st3"
                  x1="374.5"
                  y1="96"
                  x2="277.5"
                  y2="210.1"
                ></line>
                <polyline
                  className="st2"
                  points="276.2,211.6 275,213.1 273.4,211.9"
                ></polyline>
                <line
                  className="st4"
                  x1="270.1"
                  y1="209.5"
                  x2="206.9"
                  y2="161.4"
                ></line>
                <polyline
                  className="st2"
                  points="205.2,160.2 203.7,159 202.3,160.4"
                ></polyline>
                <line
                  className="st5"
                  x1="199.4"
                  y1="163.4"
                  x2="115.7"
                  y2="250.6"
                ></line>
                <line
                  className="st2"
                  x1="114.3"
                  y1="252.1"
                  x2="112.9"
                  y2="253.5"
                ></line>
                <line
                  className="st6"
                  x1="423.5"
                  y1="149.8"
                  x2="380.9"
                  y2="94.6"
                ></line>
              </motion.g>
            </motion.g>
          </motion.g>
          <motion.g
            id="play"
            animate={
              inView && {
                opacity: [1, 0, 0, 1],
                transition: {
                  times: [0, 0.1, 0.9, 1],
                  duration: 3,
                  delay: 1,
                },
              }
            }
            style={{
              strokeWidth: 1.5,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "#3fae29",
              strokeDasharray: "3.918, 3.918",
            }}
          >
            <polygon
              className="st7"
              points="231.4,131.6 231.4,193.9 282,162.8 	"
            ></polygon>
          </motion.g>
          <motion.g id="bg">
            <motion.path
              className="st8"
              d="M423.5,253.5h-347V61.2h346.9L423.5,253.5L423.5,253.5z M423.5,276.8h-347v-23.3h346.9L423.5,276.8 L423.5,276.8z"
            ></motion.path>
          </motion.g>
        </motion.g>
      </svg>
    </>
  );
};

export default Video;
