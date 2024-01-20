"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Video = (props: Props) => {
  return (
    <svg
      //className="fill-white dark:fill-[#2b2b2b]"
      className="fill-transparent"
      id="media"
      //stroke="#3fae29"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 500 328.7"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <style type="text/css">
	.st0 {
		fill             : var(--st-bg-color);
		stroke           : #3fae29;
		stroke-width     : 1.5;
		stroke-linecap   : round;
		stroke-linejoin  : round;
		strokeDasharray : 3.918, 3.918;
	}

	.st1 {
		fill : var(--st-bg-color);
	}

	.st2 {
		fill            : var(--st-bg-color);
		stroke          : #3fae29;
		stroke-width    : 1.5;
		stroke-linecap  : round;
		stroke-linejoin : round;
	}

	.st3 {
		fill             : var(--st-bg-color);
		stroke           : #3fae29;
		stroke-width     : 1.5;
		stroke-linecap   : round;
		stroke-linejoin  : round;
		strokeDasharray : 3.9929, 3.9929;
	}

	.st4 {
		fill             : var(--st-bg-color);
		stroke           : #3fae29;
		stroke-width     : 1.5;
		stroke-linecap   : round;
		stroke-linejoin  : round;
		strokeDasharray : 4.0726, 4.0726;
	}

	.st5 {
		fill             : var(--st-bg-color);
		stroke           : #3fae29;
		stroke-width     : 1.5;
		stroke-linecap   : round;
		stroke-linejoin  : round;
		strokeDasharray : 4.0985, 4.0985;
	}

	.st6 {
		fill             : var(--st-bg-color);
		stroke           : #3fae29;
		stroke-width     : 1.5;
		stroke-linecap   : round;
		stroke-linejoin  : round;
		strokeDasharray : 4.0333, 4.0333;
	}

	.st7 {
		fill             : var(--st-bg-color);
		stroke           : #3fae29;
		stroke-width     : 1.5;
		stroke-linecap   : round;
		stroke-linejoin  : round;
		strokeDasharray : 4, 4;
	}

	.st8 {
		fill              : none;
		stroke            : #3fae29;
		stroke-width      : 1.5;
		stroke-linecap    : round;
		stroke-linejoin   : round;
		stroke-miterlimit : 10;
	}
	@keyframes show-right {
		0% {
			transform : translateX(1000px);
		}
		90% {
			transform : translateX(-10px);
		}
		100% {
			transform : translateX(0);
		}
	}
	@keyframes montain-motion {
        0% {
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        50% {
          opacity: 1;
        }
        60% {
          opacity: 0;
        }
    }
	@keyframes sun-motion {
        0% {
          transform : rotate(0);
        }
        100% {
          transform : rotate(15deg);
          transform-origin:  top right;
        }
    }
	@keyframes play-motion {
        0% {
          opacity: 1;
        }
        10% {
          opacity: 0;
        }
        20% {
          opacity: 0;
        }
        50%{
          opacity: 0;
        }
        60% {
          opacity: 1;
        }
    }
      
	#media-group{
		transform : translateX(1000px);
	}
	#montain{
		opacity: 0;
	}
	:host(.media_show) #media-group{
		animation-name      : show-right;
		animation-delay: 0.2s;
		animation-duration  : 1s;
		animation-fill-mode : forwards;
	}
	
	:host(.media_show) #montain{
		animation-name      : montain-motion;
		animation-delay: 1.5s;
		animation-duration  : 6s;
		animation-fill-mode : forwards;
	}
	
	:host(.media_show) #sun{
		animation-name      : sun-motion;
		animation-delay: 2s;
		animation-duration  : 1.5s;
		animation-fill-mode : forwards;
	}
	
	:host(.media_show) #play{
		animation-name      : play-motion;
		animation-delay: 1.4s;
		animation-duration  : 6s;
		animation-fill-mode : forwards;
		transform-origin: center;
	}
    </style> */}
      <motion.g
        id="media-group"
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          bounce: 0.2,
        }}
        style={{
          //fill: "blue",
          strokeWidth: 1.5,
          //strokeLinecap: "round",
          //strokeLinejoin: "round",
          stroke: "#3fae29",
          //strokeDasharray: "3.918, 3.918",
          //strokeDasharray: "3.918, 3.918",
        }}
      >
        <motion.g
          id="montain"
          animate={{
            opacity: [0, 1, 1, 0],
            transition: {
              times: [0, 0.3, 0.8, 1],
              duration: 3,
              delay: 1,
            },
          }}
        >
          <motion.path
            id="sun"
            animate={{
              // opacity: [0, 1, 1, 0],
              rotate: [0, 15, 20, 20],
              x: [0, -35, -30, -30],
              y: [0, 5, -90, -90],

              //   transformOrigin: [
              //     "top right",
              //     "top right",
              //     "top right",
              //     "top right",
              //   ],
              transition: {
                times: [0, 0.3, 0.7, 1],

                duration: 2.8,
                delay: 1.2,
              },
            }}
            //initial={{ opacity: 0 }}
            style={{
              //fill: "red",
              transformOrigin: "top right",
              stroke: "#3fae29",
              strokeWidth: 1.5,
              strokeDasharray: "3.918, 3.918",
            }}
            className="st0"
            d="M214.2,198.9c0,15.2-12.3,27.4-27.4,27.4c-36.4-1.4-36.4-53.4,0-54.9C202,171.5,214.2,183.7,214.2,198.9
                    L214.2,198.9z"
          ></motion.path>
          <motion.g
            // style={{
            //   fill: "red",
            // }}
            className={`fill-white dark:fill-[#2b2b2b]`}
          >
            <polygon
              className="st1"
              points="423.5,149.8 378.4,91.4 275,213.1 203.7,159 112.9,253.5 423.4,253.5"
            ></polygon>
            <motion.g
              style={{
                //fill: "red",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                stroke: "#3fae29",
                //strokeDasharray: "3.918, 3.918",
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
          // initial={{ opacity: 1 }}
          animate={{
            opacity: [1, 0, 0, 1],
            transition: {
              times: [0, 0.1, 0.9, 1],
              duration: 3,
              delay: 1,
            },
          }}
          style={{
            //fill: "red",
            strokeWidth: 1.5,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "#3fae29",
            strokeDasharray: "3.918, 3.918",
          }}
        >
          <polygon
            // style={{
            //   fill: "red",
            //   strokeWidth: 1.5,
            //   strokeLinecap: "round",
            //   strokeLinejoin: "round",
            //   stroke: "#3fae29",
            //   strokeDasharray: "3.918, 3.918",
            // }}
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
  );
};

export default Video;
