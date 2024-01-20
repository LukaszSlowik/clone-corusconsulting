"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
type Props = {};

const Process = (props: Props) => {
  const [ref, inView] = useInView();

  return (
    <motion.svg
      ref={ref}
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 500 328.7"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-transparent`}
    >
      {/* <style type="text/css">
      .st0 stroke-[#3fae29] {
        fill              : none;
        stroke            : #3fae29;
        stroke-width      : 1.5;
        stroke-linecap    : round;
        stroke-linejoin   : round;
        stroke-miterlimit : 10;
      }

      .st1 {
        fill             : none;
        stroke           : #3fae29;
        stroke-width     : 1.5;
        stroke-linecap   : round;
        stroke-linejoin  : round;
        strokeDasharray : 4, 4;
      }

      @keyframes rotate-right {
        0% {
          transform : rotate(0);
        }
        100% {
          transform : rotate(-180deg);
        }
      }

      @keyframes rotate-left {
        0% {
          transform : rotate(0);
        }
        100% {
          transform : rotate(180deg);
        }
      }
      .nut_small {
        transition-timing-function: linear;
      }
      :host(.nut_show) #nut_small {
        animation-name      : rotate-right;
        animation-duration  : 3s;
        animation-fill-mode : forwards;
        transform-origin: 130px 129.3px;
      }

      .nut_big {
        transition-timing-function: linear;
      }
      :host(.nut_show) #nut_big{
        animation-name      : rotate-left;
        animation-duration  : 3s;
        animation-fill-mode : forwards;
        transform-origin: 344.5px 180px;
      }
    </style> */}
      <motion.g
        initial={{ rotate: 0 }}
        animate={inView && { rotate: -180 }}
        transition={{
          duration: 3,
          //type: "tween",
        }}
        id="nut_small"
        className="nut_small"
      >
        <motion.path
          style={{
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
          }}
          className="st0 stroke-[#3fae29]"
          d="M193.9,206.8l-4.3-18.6c6.3-6.3,11.6-13.7,15.6-22l19-2c0.7-0.1,1.2-0.6,1.4-1.2l5.1-22.3
                c0.1-0.7-0.1-1.3-0.7-1.7l-16.2-10.1c0-9.2-1.6-18.1-4.5-26.6l12-14.9c0.4-0.5,0.5-1.3,0.1-1.8l-12.2-19.4c-0.4-0.6-1-0.8-1.7-0.7
                l-18.6,4.3c-6.3-6.3-13.7-11.6-22-15.6l-2-19c-0.1-0.7-0.6-1.2-1.2-1.4l-22.3-5.1c-0.7-0.1-1.3,0.1-1.7,0.7l-10.1,16.2
                c-9.2,0-18.1,1.6-26.6,4.5l-14.9-12c-0.5-0.4-1.3-0.5-1.8-0.1L66.9,50.2c-0.6,0.4-0.8,1-0.7,1.7l4.3,18.6
                c-6.3,6.3-11.6,13.7-15.6,22l-19,2c-0.7,0.1-1.2,0.6-1.4,1.2L29.4,118c-0.1,0.7,0.1,1.3,0.7,1.7l16.2,10.1c0,9.2,1.6,18.1,4.5,26.6
                l-12,14.9c-0.4,0.5-0.5,1.3-0.1,1.8l12.2,19.4c0.4,0.6,1,0.8,1.7,0.7l18.6-4.3c6.3,6.3,13.7,11.6,22,15.6l2,19
                c0.1,0.7,0.6,1.2,1.2,1.4l22.3,5.1c0.7,0.1,1.3-0.1,1.7-0.7l10.1-16.2c9.2,0,18.1-1.6,26.6-4.5l14.9,12c0.5,0.4,1.3,0.5,1.8,0.1
                l19.4-12.2C193.8,208.2,194.1,207.5,193.9,206.8z"
        ></motion.path>
        <motion.path
          style={{
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
          }}
          className="st0 stroke-[#3fae29]"
          d="M90.8,116.1c0.6-1.9,1.4-3.8,2.4-5.6c10.4-20.3,35.4-28.4,55.7-18c9.8,5,17.1,13.6,20.6,24.1
                c3.4,10.5,2.5,21.7-2.5,31.6c-10.4,20.3-35.4,28.4-55.7,18C92.7,156.8,84.4,135.3,90.8,116.1z"
        ></motion.path>
        <g>
          <g>
            <motion.path
              //   initial={{ rotate: 0 }}
              //   animate={{ rotate: -180 }}
              //   transition={{
              //     duration: 3,
              //   }}
              style={{
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeDasharray: "4, 4",
              }}
              className="st1 stroke-[#3fae29]"
              d="M99.1,182.8c8,4.5,16.9,7.3,26,8c2.1,0.2,4.2,0.2,6.4,0.2c34.6-0.8,62-29.5,61.3-64
                        c-0.4-16.7-7.2-32.3-19.3-43.9c-10.5-10.1-23.9-16.1-38.3-17.2c-2.1-0.2-4.3-0.2-6.4-0.2c-12.3,0.3-23.8,4.1-33.4,10.5
                        C78.2,87.7,67,107.5,67.5,129.7c0.1,4.5,0.7,8.9,1.7,13.2"
            ></motion.path>
          </g>
          <motion.polyline
            // initial={{ rotate: 0 }}
            // animate={{ rotate: -180 }}
            // transition={{
            //   duration: 3,
            // }}
            style={{
              transformOrigin: "50%",
            }}
            // initial={{ rotate: 0 }}
            // animate={{ rotate: -180 }}
            // transition={{
            //   duration: 3,
            // }}
            className=" st0 stroke-[#3fae29]"
            points="72.1,135.9 69.1,142.3 63.7,137.9 		"
          ></motion.polyline>
        </g>
      </motion.g>
      <motion.g
        initial={{ rotate: 0 }}
        animate={inView && { rotate: 180 }}
        transition={{
          duration: 3,
          //   type: "tween",
        }}
        id="nut_big"
        className="nut_big"
      >
        <motion.path
          style={{
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
          }}
          className="st0 stroke-[#3fae29]"
          d="M454.5,239.6l-13.7-19.5c4.3-10.2,7-21.3,7.8-32.7l21-11.2c0.7-0.4,1.1-1.2,1-2l-4.5-28.2
                c-0.1-0.8-0.8-1.5-1.6-1.6l-23.4-4.1c-4.3-10.6-10.3-20.2-17.6-28.6l6.9-22.8c0.2-0.8,0-1.7-0.7-2.2L406.6,70
                c-0.7-0.5-1.6-0.5-2.3,0l-19.5,13.7c-10.2-4.3-21.3-7-32.7-7.8l-11.2-21c-0.4-0.7-1.2-1.1-2-1l-28.2,4.5c-0.8,0.1-1.5,0.8-1.6,1.6
                L305,83.5c-10.6,4.3-20.2,10.3-28.6,17.6l-22.8-6.9c-0.8-0.2-1.7,0-2.2,0.7L234.7,118c-0.5,0.7-0.5,1.6,0,2.3l13.7,19.5
                c-4.3,10.2-7,21.3-7.8,32.7l-21,11.2c-0.7,0.4-1.1,1.2-1,2l4.5,28.2c0.1,0.8,0.8,1.5,1.6,1.6l23.4,4.1
                c4.3,10.6,10.3,20.2,17.6,28.6l-6.9,22.8c-0.2,0.8,0,1.7,0.7,2.2l23.1,16.7c0.7,0.5,1.6,0.5,2.3,0l19.5-13.7
                c10.2,4.3,21.3,7,32.7,7.8l11.2,21c0.4,0.7,1.2,1.1,2,1l28.2-4.5c0.8-0.1,1.5-0.8,1.6-1.6l4.1-23.4c10.6-4.3,20.2-10.3,28.6-17.6
                l22.8,6.9c0.8,0.2,1.7,0,2.2-0.7l16.7-23.1C454.9,241.2,455,240.3,454.5,239.6z"
        ></motion.path>
        <motion.path
          style={{
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
          }}
          className="st0 stroke-[#3fae29]"
          d="M293.1,183c-0.1-2.5-0.1-5,0.1-7.6c2.5-28.3,27.6-49.3,55.9-46.8c13.7,1.2,26.1,7.7,35,18.3
                c8.8,10.6,13,23.9,11.8,37.7c-2.5,28.3-27.6,49.3-55.9,46.8C314.3,229.1,294.6,208.1,293.1,183z"
        ></motion.path>
        <g>
          <g>
            <motion.path
              style={{
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",

                strokeDasharray: "4, 4",
              }}
              className="st1 stroke-[#3fae29]"
              d="M305.8,248.2c10,5.7,21.1,9.1,32.6,10c2.6,0.2,5.3,0.3,8,0.2c43.3-1,77.7-36.9,76.8-80.2
                        c-0.5-21-9.1-40.5-24.2-55c-13.2-12.6-30-20.1-47.9-21.5c-2.7-0.2-5.4-0.3-8.1-0.2c-15.5,0.3-29.8,5.2-41.8,13.2
                        c-21.6,14.4-35.6,39.2-35,67.1c0.1,5.6,0.8,11.2,2.1,16.6"
            ></motion.path>
          </g>
          <polyline
            className="st0 stroke-[#3fae29]"
            points="307.5,254 304.8,247.4 311.7,246.4 		"
          ></polyline>
        </g>
      </motion.g>
    </motion.svg>
  );
};

export default Process;
