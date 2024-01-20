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
    transition: { type: "tween" },
  },
};
const Develop = (props: Props) => {
  const { ref, inView } = useInView();
  return (
    <>
      <div ref={ref}></div>
      <motion.svg
        variants={variants}
        initial={"initial"}
        strokeDasharray={"[0 1]"}
        animate={inView && "animate"}
        className={`fill-white stroke-primary stroke-2 dark:fill-[#2b2b2b]`}
        id="key-board"
        x="0px"
        y="0px"
        viewBox="0 0 500 328.7"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          style={{
            filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
          }}
          d="M377.4,292.7H47.2c-1.1,0-2-0.9-2-2V127.9c0-1.1,0.9-2,2-2h330.2c1.1,0,2,0.9,2,2v162.7
            C379.4,291.8,378.6,292.7,377.4,292.7z"
        ></motion.path>
        <g>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="default-key"
            id="default_key_1"
            d="M279.4,265.4H145.3c-5.5,0-10-4.5-10-10v-3.7c0-5.5,4.5-10,10-10h134.1c5.5,0,10,4.5,10,10v3.7
                C289.4,260.9,284.9,265.4,279.4,265.4z"
          ></motion.path>

          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="default-key"
            id="default_key_2"
            d="M107.8,176.2H87.7c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C117.5,171.9,113.2,176.2,107.8,176.2z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="default-key"
            id="default_key_3"
            d="M107.8,220.4H87.7c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C117.5,216.1,113.2,220.4,107.8,220.4z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="default-key"
            id="default_key_4"
            d="M107.8,264.7H87.7c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C117.5,260.3,113.2,264.7,107.8,264.7z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="default-key"
            id="default_key_5"
            d="M165.1,176.2H145c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C174.8,171.9,170.5,176.2,165.1,176.2z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="default-key"
            id="default_key_6"
            d="M165.1,220.4H145c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C174.8,216.1,170.5,220.4,165.1,220.4z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="default-key"
            id="default_key_7"
            d="M222.4,176.2h-20.2c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C232.1,171.9,227.8,176.2,222.4,176.2z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="default-key"
            id="default_key_8"
            d="M222.4,220.4h-20.2c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C232.1,216.1,227.8,220.4,222.4,220.4z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="default-key"
            id="default_key_9"
            d="M279.7,176.2h-20.2c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C289.4,171.9,285.1,176.2,279.7,176.2z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="default-key"
            id="default_key_10"
            d="M279.7,220.4h-20.2c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C289.4,216.1,285.1,220.4,279.7,220.4z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="default-key"
            id="default_key_11"
            d="M346.7,166.5v-3.6c0-5.4-4.3-9.7-9.7-9.7h-20.2c-5.4,0-9.7,4.3-9.7,9.7v3.6c0,5.4,4.3,9.7,9.7,9.7H337
                C342.4,176.2,346.7,171.9,346.7,166.5z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="default-key"
            id="default_key_12"
            d="M337,220.4h-20.2c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7H337c5.4,0,9.7,4.3,9.7,9.7v3.6
                C346.7,216.1,342.4,220.4,337,220.4z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="default-key"
            id="default_key_13"
            d="M337,264.7h-20.2c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7H337c5.4,0,9.7,4.3,9.7,9.7v3.6
                C346.7,260.3,342.4,264.7,337,264.7z"
          ></motion.path>
        </g>
        <g>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="st1 key"
            id="press_key_1"
            d="M279.4,265.4H145.3c-5.5,0-10-4.5-10-10v-3.7c0-5.5,4.5-10,10-10h134.1c5.5,0,10,4.5,10,10v3.7
                C289.4,260.9,284.9,265.4,279.4,265.4z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="st1 key"
            id="press_key_2"
            d="M107.8,176.2H87.7c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C117.5,171.9,113.2,176.2,107.8,176.2z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="st1 key"
            id="press_key_3"
            d="M107.8,220.4H87.7c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C117.5,216.1,113.2,220.4,107.8,220.4z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="st1 key"
            id="press_key_4"
            d="M107.8,264.7H87.7c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C117.5,260.3,113.2,264.7,107.8,264.7z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="st1 key"
            id="press_key_5"
            d="M165.1,176.2H145c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C174.8,171.9,170.5,176.2,165.1,176.2z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="st1 key"
            id="press_key_6"
            d="M165.1,220.4H145c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C174.8,216.1,170.5,220.4,165.1,220.4z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="st1 key"
            id="press_key_7"
            d="M222.4,176.2h-20.2c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C232.1,171.9,227.8,176.2,222.4,176.2z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="st1 key"
            id="press_key_8"
            d="M222.4,220.4h-20.2c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C232.1,216.1,227.8,220.4,222.4,220.4z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="st1 key"
            id="press_key_9"
            d="M279.7,176.2h-20.2c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C289.4,171.9,285.1,176.2,279.7,176.2z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="st1 key"
            id="press_key_10"
            d="M279.7,220.4h-20.2c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7h20.2c5.4,0,9.7,4.3,9.7,9.7v3.6
                C289.4,216.1,285.1,220.4,279.7,220.4z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="st1 key"
            id="press_key_11"
            d="M346.7,166.5v-3.6c0-5.4-4.3-9.7-9.7-9.7h-20.2c-5.4,0-9.7,4.3-9.7,9.7v3.6c0,5.4,4.3,9.7,9.7,9.7H337
                C342.4,176.2,346.7,171.9,346.7,166.5z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="st1 key"
            id="press_key_12"
            d="M337,220.4h-20.2c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7H337c5.4,0,9.7,4.3,9.7,9.7v3.6
                C346.7,216.1,342.4,220.4,337,220.4z"
          ></motion.path>
          <motion.path
            style={{
              filter: "drop-shadow(2px 2px 0px rgb(62, 174, 41))",
            }}
            className="st1 key"
            id="press_key_13"
            d="M337,264.7h-20.2c-5.4,0-9.7-4.3-9.7-9.7v-3.6c0-5.4,4.3-9.7,9.7-9.7H337c5.4,0,9.7,4.3,9.7,9.7v3.6
                C346.7,260.3,342.4,264.7,337,264.7z"
          ></motion.path>
        </g>

        <motion.path
          style={{
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeDasharray: "4, 4",
          }}
          className="st2"
          d="M212.3,118.8c0,0,0-58.9,136.3-56.8c122.1,1.8,106.8,18.7,90.2,27.5c-8.8,4.7-19.5,4.7-28-0.5
            c-10.6-6.4-12.7-17.9,51.7-34.2C556.3,31,573.2,44.5,573.2,44.5"
        ></motion.path>
        <polyline
          className="st1"
          points="207.5,125.9 209.5,118.8 215.8,118.8 217.9,125.9 "
        ></polyline>
      </motion.svg>
    </>
  );
};

export default Develop;
