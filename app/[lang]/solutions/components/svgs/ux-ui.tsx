"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};
const variantsPc = {
  initial: { opacity: 0, x: 1000 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      //   staggerChildren: 0.4,
      //   delayChildren: 1,
    },
  },
};
const variantsTablet = {
  initial: { opacity: 0, x: 1000 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      delay: 1,
    },
  },
};
const variantsMobile = {
  initial: { opacity: 0, x: 1000 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      delay: 1.3,
    },
  },
};

const variantsShortArrow = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.8,
    },
  },
};
const variantsLongArrow = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      staggerChildren: 0.04,
      delayChildren: 0.8,
      ease: "easeInOut",
    },
  },
};
const variantsChildren = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const UxUi = (props: Props) => {
  const [ref, inView] = useInView();
  return (
    <>
      <div ref={ref}></div>
      <svg
        id="responsive"
        className="responsive"
        x="0px"
        y="0px"
        viewBox="0 0 500 328.7"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <style type="text/css">
		#tablet{
			fill: var(--st-bg-color);
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
		.responsive_step {
			transform : translateX(1000px);
			transition-timing-function: ease-in;
		}
		:host(.responsive_show) #pc {
			animation-name      : show-right;
			animation-delay     : 0.2s;
			animation-duration  : 1s;
			animation-fill-mode : forwards;
		}
		:host(.responsive_show) #tablet {
			animation-name      : show-right;
			animation-duration  : 1s;
			animation-delay     : 0.8s;
			animation-fill-mode : forwards;
		}
		:host(.responsive_show) #mobile {
			animation-name      : show-right;
			animation-duration  : 1s;
			animation-delay     : 1.5s;
			animation-fill-mode : forwards;
		}
		#arrow_responsive_2 gy-svg{
			width: 80px;
		}
		@media only screen and (max-width : 970px) {
			.responsive{
			width: fit-content;
		}
		}
	</style> */}
        <motion.g>
          <motion.g
            variants={variantsPc}
            initial={"initial"}
            strokeDasharray={"[0 1]"}
            animate={inView && "animate"}
            id="pc"
            className="responsive_step"
          >
            <rect
              x="34.4"
              y="24.7"
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              width="319.8"
              height="192.5"
            ></rect>
            <motion.path
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="
          M213.4,217.2c0,0-8.8,28.6,0,48.5l32.5,2c1.1,0.1,1.1,1.7,0,1.7c0,0-35.5,1.3-47.4,1.5c-2,0-6.2,0-8.2,0
          c-11.9-0.2-47.4-1.5-47.4-1.5c-1.1,0-1.1-1.7,0-1.7l32.5-2c8.8-19.9,0-48.5,0-48.5"
            ></motion.path>
          </motion.g>
          <motion.g
            variants={variantsTablet}
            initial={"initial"}
            animate={inView && "animate"}
            id="tablet"
            className="responsive_step fill-white dark:fill-[#2b2b2b]"
          >
            <rect
              x="239.7"
              y="161.9"
              // fill="#2b2b2b"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              width="101.8"
              height="133.7"
            ></rect>
            <circle
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              cx="290.6"
              cy="276.9"
              r="4.2"
            ></circle>
          </motion.g>
          <motion.g
            variants={variantsMobile}
            initial={"initial"}
            animate={inView && "animate"}
            id="mobile"
            className="responsive_step"
          >
            <rect
              x="365.4"
              y="228.7"
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              width="100.2"
              height="48.5"
            ></rect>
            <line
              fill="none"
              stroke="#3FAE29"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              x1="456.1"
              y1="248.4"
              x2="456.1"
              y2="257.5"
            ></line>
          </motion.g>
        </motion.g>
        <foreignObject x="115" y="280" width="100" height="100">
          <motion.svg
            variants={variantsShortArrow}
            initial={"hidden"}
            animate={"visible"}
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 78 34.9"
            className="fill-[#3FAE29] "
          >
            {/* <style>
	path{
		opacity:0;
		fill: #3FAE29;
	}
</style> */}
            <motion.path
              variants={variantsChildren}
              d="M4.6,4.8c-0.2-0.3-0.7-0.4-1-0.2c-0.3,0.2-0.4,0.7-0.2,1c0,0,0.6,0.9,1.8,2.5c0.1,0.2,0.4,0.3,0.6,0.3
	c0.2,0,0.3-0.1,0.5-0.2C6.6,8,6.6,7.5,6.4,7.2C5.2,5.7,4.6,4.9,4.6,4.8z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M8.9,9.9c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1c1.3,1.4,2.8,2.7,4.3,3.9c0.1,0.1,0.3,0.2,0.5,0.2
	c0.2,0,0.4-0.1,0.6-0.3c0.3-0.3,0.2-0.8-0.1-1.1C11.6,12.5,10.2,11.2,8.9,9.9z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M20.8,18.9c-1.6-0.9-3.2-1.9-4.8-3c-0.3-0.2-0.8-0.2-1,0.2c-0.2,0.3-0.2,0.8,0.2,1c1.6,1.1,3.2,2.1,4.9,3
	c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0,0.5-0.1,0.7-0.4C21.3,19.6,21.2,19.1,20.8,18.9z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M29.4,22.7c-1.8-0.6-3.5-1.3-5.2-2.1c-0.4-0.2-0.8,0-1,0.4c-0.2,0.4,0,0.8,0.4,1c1.7,0.8,3.5,1.5,5.3,2.1
	c0.1,0,0.2,0,0.2,0c0.3,0,0.6-0.2,0.7-0.5C30,23.2,29.8,22.8,29.4,22.7z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M38.4,24.9c-1.9-0.3-3.7-0.7-5.5-1.2c-0.4-0.1-0.8,0.1-0.9,0.5c-0.1,0.4,0.1,0.8,0.5,0.9
	c1.8,0.5,3.7,0.9,5.6,1.2c0,0,0.1,0,0.1,0c0.4,0,0.7-0.3,0.7-0.6C39.1,25.4,38.8,25,38.4,24.9z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M47.7,25.7c-1.9,0-3.8-0.1-5.6-0.3c-0.4-0.1-0.8,0.3-0.8,0.7c0,0.4,0.3,0.8,0.7,0.8c1.9,0.2,3.8,0.3,5.7,0.3
	c0,0,0,0,0,0c0.4,0,0.7-0.3,0.8-0.7C48.5,26,48.2,25.7,47.7,25.7z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M57.1,25.1c-1.9,0.2-3.8,0.4-5.6,0.5c-0.4,0-0.7,0.4-0.7,0.8c0,0.4,0.4,0.7,0.7,0.7c0,0,0,0,0,0
	c1.9-0.1,3.8-0.3,5.7-0.5c0.4-0.1,0.7-0.4,0.7-0.8S57.5,25.1,57.1,25.1z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M66.3,23.4c-1.8,0.4-3.7,0.8-5.5,1.1c-0.4,0.1-0.7,0.5-0.6,0.9c0.1,0.4,0.4,0.6,0.7,0.6c0,0,0.1,0,0.1,0
	c1.8-0.3,3.7-0.7,5.6-1.2c0.4-0.1,0.6-0.5,0.6-0.9S66.7,23.3,66.3,23.4z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M75,21.5c-0.1-0.2-0.3-0.4-0.5-0.5l-7-1.7c-0.4-0.1-0.8,0.2-0.9,0.6c-0.1,0.4,0.2,0.8,0.6,0.9l4.5,1.1
	c-0.1,0.1-0.2,0.1-0.3,0.1c-0.2,0.1-0.4,0.1-0.6,0.2c-0.2,0.1-0.5,0.1-0.7,0.2c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0.1
	c-0.4,0.1-0.6,0.6-0.5,0.9c0.1,0.3,0.4,0.5,0.7,0.5c0.1,0,0.2,0,0.2,0c0.3-0.1,0.6-0.2,0.9-0.3c0.1,0,0.1,0,0.2,0
	c0.2,0,0.3-0.1,0.5-0.1l-3,3.5c-0.3,0.3-0.2,0.8,0.1,1.1c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.3l4.8-5.6
	C75.1,22,75.1,21.7,75,21.5z"
              opacity="1"
            ></motion.path>
          </motion.svg>
          {/* <c-steps src="/img/circle-arrow/arrow-responsive-2.svg" duration="200" delay="1000" id="arrow_responsive_2"> 
        <gy-svg src="/img/circle-arrow/arrow-responsive-2.svg" style="--internal-width: 34.9px;"></gy-svg>
        </c-steps> */}
        </foreignObject>
        <foreignObject x="385" y="120" width="100" height="100">
          <motion.svg
            variants={variantsLongArrow}
            initial={"hidden"}
            animate={"visible"}
            x="0px"
            y="0px"
            viewBox="0 0 87.1 84.7"
            className="fill-[#3FAE29] "
          >
            {/* <style type="text/css">
	path{
		fill:#3FAE29;
		opacity:0;
	}
</style> */}
            <motion.path
              variants={variantsChildren}
              d="M30.5,4.6c0,0.4-0.4,0.7-0.7,0.7c0,0-0.1,0-0.1,0C27.8,5,25.8,4.9,23.8,5c-0.4,0-0.8-0.3-0.8-0.7
	c0-0.4,0.3-0.8,0.7-0.8c2.1-0.1,4.1,0,6.1,0.3C30.3,3.8,30.6,4.2,30.5,4.6z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M72.6,79.7c-0.6,0.7-1.1,1.3-1.6,1.8c-0.3,0.3-0.3,0.8,0,1.1c0.1,0.2,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2
	c0.6-0.5,1.1-1.2,1.7-1.9c0.3-0.3,0.2-0.8-0.1-1.1C73.3,79.3,72.9,79.4,72.6,79.7z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M78.7,71c-0.4-0.2-0.8,0-1,0.4c-0.9,1.8-1.8,3.6-2.8,5.2c-0.2,0.3-0.1,0.8,0.2,1c0.1,0.1,0.3,0.1,0.4,0.1
	c0.2,0,0.5-0.1,0.6-0.3c1-1.6,2-3.4,2.9-5.3C79.2,71.6,79.1,71.2,78.7,71z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M82,61.5c-0.4-0.1-0.8,0.1-0.9,0.5c-0.5,1.9-1.1,3.8-1.8,5.6c-0.1,0.4,0,0.8,0.4,1c0.1,0,0.2,0,0.3,0
	c0.3,0,0.6-0.2,0.7-0.5c0.7-1.9,1.4-3.9,1.9-5.8C82.6,62,82.4,61.6,82,61.5z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M83.2,51.6c-0.4,0-0.8,0.3-0.8,0.7c-0.1,1.9-0.2,3.9-0.6,5.9c-0.1,0.4,0.2,0.8,0.6,0.9c0,0,0.1,0,0.1,0
	c0.4,0,0.7-0.3,0.7-0.6c0.4-2,0.6-4.1,0.6-6.1C84,52,83.7,51.6,83.2,51.6z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M81.4,42.7c0.5,1.8,0.8,3.8,1,5.8c0,0.4,0.4,0.7,0.7,0.7c0,0,0,0,0.1,0c0.4,0,0.7-0.4,0.7-0.8
	c-0.2-2.1-0.5-4.1-1-6c-0.1-0.4-0.5-0.6-0.9-0.5C81.5,41.9,81.3,42.3,81.4,42.7z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M80.1,39c0.1,0.3,0.4,0.5,0.7,0.5c0.1,0,0.2,0,0.3-0.1c0.4-0.2,0.6-0.6,0.4-1c-0.8-1.9-1.8-3.7-2.9-5.4
	c-0.2-0.3-0.7-0.4-1-0.2c-0.3,0.2-0.4,0.7-0.2,1C78.4,35.5,79.4,37.2,80.1,39z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M74.9,30.8c0.1,0.2,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.5-0.2c0.3-0.3,0.3-0.8,0.1-1.1
	c-1.3-1.5-2.8-2.9-4.5-4.2c-0.3-0.3-0.8-0.2-1.1,0.1c-0.3,0.3-0.2,0.8,0.1,1.1C72.2,28.1,73.6,29.4,74.9,30.8z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M68.2,23.3c-0.5-0.3-1-0.6-1.5-0.9c-1.3-0.7-2.6-1.4-3.8-1.9c-0.4-0.2-0.8,0-1,0.4c-0.2,0.4,0,0.8,0.4,1
	c1.2,0.6,2.5,1.2,3.7,1.9c0.5,0.3,1,0.6,1.5,0.9c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.5-0.1,0.6-0.3C68.7,24,68.6,23.5,68.2,23.3z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M59.1,18.9c-1.8-0.7-3.7-1.3-5.5-1.7c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0c0,0,0,0-0.1-0.1
	c-0.1,0.2-0.3,0.4-0.2,0.6c0.1,0.6,0.2,0.8,0.7,1c0.4,0.2,1,0.3,1.1,0.4l-0.2-0.1c1.4,0.4,2.9,0.9,4.3,1.4c0.4,0.1,0.8-0.1,1-0.4
	C59.7,19.4,59.5,19,59.1,18.9z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M49.3,16.3c-1.9-0.3-3.8-0.4-5.6-0.4l-0.5,0c-0.4,0-0.7,0.3-0.7,0.8c0,0.4,0.4,0.7,0.8,0.7l0.5,0
	c1.8,0,3.6,0.1,5.4,0.4c0,0,0.1,0,0.1,0c0.4,0,0.7-0.3,0.7-0.6C50,16.8,49.7,16.4,49.3,16.3z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M39.1,16.2c-2.1,0.3-4.1,0.7-6,1.4c-0.4,0.1-0.6,0.6-0.5,0.9c0.1,0.3,0.4,0.5,0.7,0.5c0.1,0,0.2,0,0.2,0
	c1.8-0.6,3.7-1,5.7-1.3c0.4-0.1,0.7-0.4,0.6-0.8S39.5,16.1,39.1,16.2z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M29.3,19.1c-1.9,0.9-3.6,2.1-5.2,3.4c-0.3,0.3-0.4,0.7-0.1,1.1c0.1,0.2,0.4,0.3,0.6,0.3
	c0.2,0,0.3-0.1,0.5-0.2c1.4-1.2,3.1-2.3,4.9-3.2c0.4-0.2,0.5-0.6,0.3-1S29.7,18.9,29.3,19.1z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M21.3,25.4c-1.3,1.6-2.4,3.4-3.2,5.3c-0.2,0.4,0,0.8,0.4,1c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.6-0.2,0.7-0.5
	c0.7-1.8,1.7-3.4,3-4.9c0.3-0.3,0.2-0.8-0.1-1.1C22,25.1,21.5,25.1,21.3,25.4z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M18.3,40.7c-0.1-0.8-0.2-1.7-0.2-2.5c0-1.1,0.1-2.1,0.3-3.2c0.1-0.4-0.2-0.8-0.6-0.9
	c-0.4-0.1-0.8,0.2-0.9,0.6c-0.2,1.1-0.3,2.3-0.3,3.5c0,0.9,0.1,1.8,0.2,2.8c0.1,0.4,0.4,0.6,0.7,0.6c0,0,0.1,0,0.1,0
	C18.1,41.5,18.4,41.2,18.3,40.7z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M19.2,44.5c-0.1-0.4-0.5-0.6-0.9-0.5c-0.4,0.1-0.6,0.5-0.5,0.9c0.7,2,1.5,3.9,2.6,5.6
	c0.1,0.2,0.4,0.4,0.6,0.4c0.1,0,0.3,0,0.4-0.1c0.4-0.2,0.5-0.7,0.2-1C20.6,48.2,19.8,46.4,19.2,44.5z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M28.4,56.4c-1.7-0.9-3.2-2.1-4.5-3.5c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1
	c1.4,1.5,3.1,2.8,4.9,3.8c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0,0.5-0.1,0.7-0.4C28.9,57,28.8,56.6,28.4,56.4z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M37.7,58.9c-2-0.1-3.9-0.4-5.7-1c-0.4-0.1-0.8,0.1-0.9,0.5c-0.1,0.4,0.1,0.8,0.5,0.9c1.9,0.6,4,1,6.1,1
	c0,0,0,0,0,0c0.4,0,0.7-0.3,0.7-0.7C38.4,59.3,38.1,58.9,37.7,58.9z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M47.1,57.2c-1.8,0.7-3.7,1.2-5.6,1.5c-0.4,0.1-0.7,0.4-0.6,0.8c0.1,0.4,0.4,0.7,0.7,0.7c0,0,0.1,0,0.1,0
	c2.1-0.3,4.1-0.8,6-1.6c0.4-0.2,0.6-0.6,0.4-1S47.5,57.1,47.1,57.2z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M54.8,51.6c-0.4,0.5-0.9,1-1.3,1.5c-0.9,0.9-1.8,1.7-2.9,2.4c-0.3,0.2-0.4,0.7-0.2,1
	c0.1,0.2,0.4,0.3,0.6,0.3c0.1,0,0.3,0,0.4-0.1c1.2-0.8,2.3-1.6,3.2-2.6c0.5-0.5,1-1,1.4-1.6c0.3-0.3,0.2-0.8-0.1-1.1
	C55.5,51.3,55.1,51.3,54.8,51.6z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M59.5,42.3c-0.4-0.1-0.8,0.2-0.9,0.6c-0.4,2-1,3.8-1.8,5.5c-0.2,0.4,0,0.8,0.3,1c0.1,0.1,0.2,0.1,0.3,0.1
	c0.3,0,0.5-0.2,0.7-0.4c0.9-1.8,1.5-3.8,1.9-5.9C60.2,42.8,59.9,42.4,59.5,42.3z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M59.2,32.4c-0.4,0.1-0.7,0.5-0.6,0.9c0.3,1.7,0.5,3.4,0.5,5.1c0,0.2,0,0.5,0,0.7c0,0.4,0.3,0.8,0.7,0.8
	c0,0,0,0,0,0c0.4,0,0.7-0.3,0.8-0.7c0-0.3,0-0.5,0-0.8c0-1.8-0.2-3.6-0.5-5.4C60,32.6,59.6,32.3,59.2,32.4z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M55.9,23c-0.4,0.2-0.5,0.6-0.3,1c0.9,1.8,1.6,3.6,2.2,5.5c0.1,0.3,0.4,0.5,0.7,0.5c0.1,0,0.1,0,0.2,0
	c0.4-0.1,0.6-0.5,0.5-0.9c-0.6-1.9-1.3-3.8-2.3-5.7C56.7,22.9,56.2,22.8,55.9,23z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M53.3,18.6c-0.4-0.2-0.6-0.4-0.7-1c0-0.2,0.1-0.4,0.2-0.6c-0.6-0.7-1.2-1.4-1.8-2.1
	c-0.3-0.3-0.8-0.3-1.1-0.1c-0.3,0.3-0.3,0.8-0.1,1.1c1.3,1.4,2.5,3,3.6,4.7c0.1,0.2,0.4,0.3,0.6,0.3c0.1,0,0.3,0,0.4-0.1
	c0.3-0.2,0.4-0.7,0.2-1c-0.2-0.3-0.4-0.6-0.6-0.9"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M42.5,9.7c1.7,1,3.2,2.2,4.7,3.5c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.3c0.3-0.3,0.2-0.8-0.1-1.1
	c-1.5-1.4-3.2-2.6-4.9-3.6c-0.4-0.2-0.8-0.1-1,0.3C42,9,42.2,9.5,42.5,9.7z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M39.7,6.5c-1.9-0.8-3.8-1.5-5.8-2C33.5,4.4,33.1,4.6,33,5c-0.1,0.4,0.1,0.8,0.5,0.9c1.9,0.5,3.8,1.1,5.5,1.9
	c0.1,0,0.2,0.1,0.3,0.1c0.3,0,0.6-0.2,0.7-0.4C40.2,7.1,40,6.7,39.7,6.5z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M20.5,4.5c-0.1-0.4-0.4-0.7-0.8-0.6c-2,0.3-4,0.7-6,1.3c-0.4,0.1-0.6,0.5-0.5,0.9c0.1,0.3,0.4,0.5,0.7,0.5
	c0.1,0,0.1,0,0.2,0c1.9-0.5,3.9-1,5.8-1.2C20.3,5.3,20.6,4.9,20.5,4.5z"
              opacity="1"
            ></motion.path>
            <motion.path
              variants={variantsChildren}
              d="M6.6,9.5c0.2-0.1,0.2-0.2,0.3-0.3c1.2-0.5,2.3-1,3.5-1.4c0.4-0.1,0.6-0.6,0.4-1s-0.6-0.6-1-0.4
	C8.2,7,6.5,7.7,4.9,8.5c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1l2.5-3.9c0.3-0.3,0.1-0.8-0.3-1.1C6.7,3.5,6.5,3.4,6.3,3.5
	c-0.2,0-0.4,0.2-0.6,0.4l-4,6.2c-0.1,0.4-0.1,0.7,0.1,0.9c0.1,0.2,0.4,0.4,0.6,0.4l7.2,0.7c0.4,0,0.8-0.3,0.8-0.7
	c0-0.4-0.3-0.8-0.7-0.8l-4.6-0.4c0.2-0.1,0.4-0.2,0.6-0.3C6,9.8,6.4,9.6,6.6,9.5z"
              opacity="1"
            ></motion.path>
          </motion.svg>
          {/* <c-steps src="/img/circle-arrow/arrow-responsive.svg" duration="300" delay="2000" id="arrow_responsive_1"> 
        <gy-svg src="/img/circle-arrow/arrow-responsive.svg" style="--internal-width: 84.7px;"></gy-svg>
        </c-steps> */}
        </foreignObject>
      </svg>
    </>
  );
};

export default UxUi;
