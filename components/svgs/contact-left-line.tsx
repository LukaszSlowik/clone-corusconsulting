"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
type Props = {};
const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 2 / 38,
      delayChildren: 2.7,
    },
  },
};
const variantsChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      //duration: 0.5
    },
  },
};
const ContactLeftLine = (props: Props) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.svg
      ref={ref}
      variants={variants}
      initial={"hidden"}
      animate={inView && "visible"}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 260 279"
      //style="enable-background:new 0 0 260 279;"
      xmlSpace="preserve"
    >
      {/* <style type="text/css">
      .st0{
          fill:#3FAE29;
          opacity:0;
          }
  </style> */}
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M5.9,40.7c-0.3,0.5-0.9,0.7-1.4,0.4c-1.8-1-3.6-1.9-5.3-2.8c-0.5-0.3-0.7-0.9-0.4-1.4c0.3-0.5,0.9-0.7,1.4-0.4
      c1.8,0.9,3.6,1.9,5.4,2.9C6,39.6,6.2,40.2,5.9,40.7z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M232.4,237.4c0.3,0.4,0.2,1.1-0.2,1.4c-0.4,0.3-1.1,0.2-1.4-0.2c-1.2-1.6-2.4-3.2-3.7-4.9
      c-0.3-0.4-0.3-1.1,0.2-1.4c0.4-0.3,1.1-0.3,1.4,0.2C230,234.2,231.2,235.8,232.4,237.4z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M239.6,247.2c0.3,0.4,0.2,1.1-0.2,1.4c-0.4,0.3-1.1,0.2-1.4-0.2c-1.2-1.6-2.3-3.2-3.6-4.9
      c-0.3-0.4-0.2-1.1,0.2-1.4c0.4-0.3,1.1-0.2,1.4,0.2C237.2,244,238.4,245.6,239.6,247.2z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M246.6,257.1c0.3,0.5,0.2,1.1-0.3,1.4c-0.5,0.3-1.1,0.2-1.4-0.3c-1.1-1.6-2.3-3.3-3.4-4.9
      c-0.3-0.5-0.2-1.1,0.2-1.4c0.5-0.3,1.1-0.2,1.4,0.2C244.3,253.8,245.4,255.5,246.6,257.1z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M256.6,272.3c-0.3-0.5-0.9-0.6-1.4-0.3c-0.5,0.3-0.6,0.9-0.3,1.4c1.1,1.8,2.2,3.5,3.2,5.2
      c0.3,0.5,0.9,0.6,1.4,0.3s0.6-0.9,0.3-1.4C258.8,275.8,257.7,274.1,256.6,272.3z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M250,262.2c-0.3-0.5-0.9-0.6-1.4-0.3c-0.5,0.3-0.6,0.9-0.3,1.4c1.1,1.7,2.3,3.4,3.3,5c0.3,0.5,0.9,0.6,1.4,0.3
      c0.5-0.3,0.6-0.9,0.3-1.4C252.3,265.6,251.2,263.9,250,262.2z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M221.2,223c-0.3-0.4-1-0.5-1.4-0.2c-0.4,0.3-0.5,1-0.2,1.4c1.3,1.6,2.5,3.2,3.8,4.8c0.3,0.4,1,0.5,1.4,0.2
      c0.4-0.3,0.5-1,0.2-1.4C223.8,226.2,222.5,224.6,221.2,223z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M213.6,213.6c-0.3-0.4-1-0.5-1.4-0.1c-0.4,0.4-0.5,1-0.1,1.4c1.3,1.6,2.6,3.2,3.9,4.7c0.3,0.4,1,0.5,1.4,0.1
      c0.4-0.3,0.5-1,0.2-1.4C216.2,216.7,214.9,215.2,213.6,213.6z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M205.8,204.3c-0.4-0.4-1-0.5-1.4-0.1c-0.4,0.4-0.5,1-0.1,1.4c1.3,1.6,2.6,3.1,3.9,4.7c0.4,0.4,1,0.5,1.4,0.1
      c0.4-0.4,0.5-1,0.1-1.4C208.5,207.4,207.2,205.8,205.8,204.3z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M197.9,195.1c-0.4-0.4-1-0.5-1.4-0.1c-0.4,0.4-0.5,1-0.1,1.4c1.4,1.5,2.7,3.1,4,4.6c0.4,0.4,1,0.5,1.4,0.1
      c0.4-0.4,0.5-1,0.1-1.4C200.6,198.2,199.2,196.6,197.9,195.1z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M189.8,186c-0.4-0.4-1-0.4-1.4-0.1c-0.4,0.4-0.4,1-0.1,1.4c1.4,1.5,2.7,3,4.1,4.5c0.4,0.4,1,0.4,1.4,0.1
      c0.4-0.4,0.4-1,0.1-1.4C192.5,189.1,191.2,187.6,189.8,186z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M181.6,177.1c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4c1.4,1.5,2.8,3,4.1,4.4c0.4,0.4,1,0.4,1.4,0.1
      c0.4-0.4,0.4-1,0.1-1.4C184.4,180.1,183,178.6,181.6,177.1z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M173.2,168.3c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4c1.4,1.5,2.8,2.9,4.2,4.4c0.4,0.4,1,0.4,1.4,0
      c0.4-0.4,0.4-1,0-1.4C176,171.3,174.6,169.8,173.2,168.3z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M164.7,159.7c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4c1.4,1.4,2.8,2.9,4.2,4.3c0.4,0.4,1,0.4,1.4,0
      c0.4-0.4,0.4-1,0-1.4C167.6,162.6,166.2,161.1,164.7,159.7z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M156.1,151.2c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4c1.4,1.4,2.9,2.8,4.3,4.2c0.4,0.4,1,0.4,1.4,0
      c0.4-0.4,0.4-1,0-1.4C159,154,157.5,152.6,156.1,151.2z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M147.3,142.8c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4c1.5,1.4,2.9,2.8,4.4,4.2c0.4,0.4,1,0.4,1.4,0
      c0.4-0.4,0.4-1,0-1.4C150.3,145.6,148.8,144.2,147.3,142.8z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M138.4,134.5c-0.4-0.4-1-0.3-1.4,0.1c-0.4,0.4-0.3,1,0.1,1.4c1.5,1.4,3,2.7,4.5,4.1c0.4,0.4,1,0.4,1.4-0.1
      c0.4-0.4,0.4-1-0.1-1.4C141.4,137.3,139.9,135.9,138.4,134.5z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M129.4,126.4c-0.4-0.4-1-0.3-1.4,0.1c-0.4,0.4-0.3,1,0.1,1.4c1.5,1.3,3,2.7,4.5,4c0.4,0.4,1,0.3,1.4-0.1
      c0.4-0.4,0.3-1-0.1-1.4C132.4,129.1,130.9,127.8,129.4,126.4z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M120.2,118.5c-0.4-0.4-1.1-0.3-1.4,0.1c-0.4,0.4-0.3,1.1,0.1,1.4c1.5,1.3,3.1,2.6,4.6,3.9
      c0.4,0.4,1,0.3,1.4-0.1s0.3-1-0.1-1.4C123.3,121.1,121.8,119.8,120.2,118.5z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M110.9,110.7c-0.4-0.4-1.1-0.3-1.4,0.1c-0.4,0.4-0.3,1.1,0.1,1.4c1.6,1.3,3.1,2.6,4.6,3.9
      c0.4,0.4,1.1,0.3,1.4-0.1c0.4-0.4,0.3-1.1-0.1-1.4C114,113.3,112.5,112,110.9,110.7z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M101.5,103c-0.4-0.3-1.1-0.3-1.4,0.2c-0.3,0.4-0.3,1.1,0.2,1.4c1.6,1.3,3.1,2.5,4.7,3.8
      c0.4,0.3,1.1,0.3,1.4-0.1c0.3-0.4,0.3-1.1-0.1-1.4C104.6,105.6,103.1,104.3,101.5,103z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M91.9,95.6c-0.4-0.3-1.1-0.3-1.4,0.2c-0.3,0.4-0.3,1.1,0.2,1.4c1.6,1.2,3.2,2.5,4.8,3.7
      c0.4,0.3,1.1,0.3,1.4-0.2c0.3-0.4,0.3-1.1-0.2-1.4C95.1,98,93.5,96.8,91.9,95.6z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M82.2,88.3c-0.4-0.3-1.1-0.2-1.4,0.2c-0.3,0.4-0.2,1.1,0.2,1.4c1.6,1.2,3.2,2.4,4.9,3.6
      c0.4,0.3,1.1,0.2,1.4-0.2c0.3-0.4,0.2-1.1-0.2-1.4C85.5,90.7,83.9,89.5,82.2,88.3z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M72.4,81.1c-0.4-0.3-1.1-0.2-1.4,0.2c-0.3,0.4-0.2,1.1,0.2,1.4c1.6,1.2,3.3,2.4,4.9,3.5
      c0.4,0.3,1.1,0.2,1.4-0.2c0.3-0.4,0.2-1.1-0.2-1.4C75.7,83.5,74.1,82.3,72.4,81.1z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M62.5,74.2c-0.5-0.3-1.1-0.2-1.4,0.3c-0.3,0.5-0.2,1.1,0.3,1.4c1.7,1.1,3.3,2.3,5,3.4c0.5,0.3,1.1,0.2,1.4-0.2
      c0.3-0.5,0.2-1.1-0.2-1.4C65.8,76.5,64.1,75.3,62.5,74.2z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M52.4,67.4c-0.5-0.3-1.1-0.2-1.4,0.3c-0.3,0.5-0.2,1.1,0.3,1.4c1.7,1.1,3.4,2.2,5,3.4c0.5,0.3,1.1,0.2,1.4-0.3
      c0.3-0.5,0.2-1.1-0.3-1.4C55.8,69.6,54.1,68.5,52.4,67.4z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M47.3,64.1c-1.7-1.1-3.4-2.2-5.1-3.3c-0.5-0.3-1.1-0.2-1.4,0.3c-0.3,0.5-0.2,1.1,0.3,1.4
      c1.7,1.1,3.4,2.2,5.1,3.3c0.5,0.3,1.1,0.2,1.4-0.3C47.9,65,47.8,64.4,47.3,64.1z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M37.1,57.6c-1.7-1.1-3.4-2.1-5.2-3.2c-0.5-0.3-1.1-0.1-1.4,0.3c-0.3,0.5-0.1,1.1,0.3,1.4c1.7,1,3.4,2.1,5.2,3.2
      c0.5,0.3,1.1,0.1,1.4-0.3C37.7,58.5,37.5,57.9,37.1,57.6z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M26.7,51.3c-1.7-1-3.5-2-5.2-3.1c-0.5-0.3-1.1-0.1-1.4,0.4c-0.3,0.5-0.1,1.1,0.4,1.4c1.7,1,3.5,2,5.2,3
      c0.5,0.3,1.1,0.1,1.4-0.4C27.3,52.2,27.1,51.6,26.7,51.3z"
        opacity="1"
      ></motion.path>
      <motion.path
        variants={variantsChildren}
        className="fill-primary"
        d="M16.2,45.2c-1.8-1-3.5-2-5.3-3c-0.5-0.3-1.1-0.1-1.4,0.4c-0.3,0.5-0.1,1.1,0.4,1.4c1.8,1,3.5,2,5.3,2.9
      c0.5,0.3,1.1,0.1,1.4-0.4S16.6,45.5,16.2,45.2z"
        opacity="1"
      ></motion.path>
    </motion.svg>
  );
};

export default ContactLeftLine;
