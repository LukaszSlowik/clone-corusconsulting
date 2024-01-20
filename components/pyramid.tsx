"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DictionaryType } from "@/lib/dictionary";
type Props = {
  dictionary: DictionaryType;
};

const Pyramid = ({ dictionary }: Props) => {
  //const [isView, setIsView] = React.useState(false);
  const title = dictionary["pyramid"]["collaboration-modalities"];
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  console.log("inView", inView);

  return (
    <div ref={ref} className="relative mx-auto max-w-[1200px]">
      <h2 className="p-4 text-3xl dark:text-dark">{title}</h2>

      <svg
        id="pyramid"
        viewBox="0 0 1840 1000"
        width="100%"
        className="pyramid_show mx-auto fill-[#cbcfc9] stroke-black stroke-2 max-md:w-[80%]"
      >
        <motion.text
          initial={{
            opacity: 0,
          }}
          animate={
            inView && {
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: 0.3 + 0.3,
                ease: "easeInOut",
              },
            }
          }
          id="pyramid_header_4"
          className=" fill-primary stroke-primary text-4xl max-md:translate-x-[-190px] max-md:text-[80px]"
          x="1655"
          y="640"
        >
          {dictionary.pyramid.team.title}
        </motion.text>
        <motion.line
          initial={{
            pathLength: 0,
          }}
          animate={
            inView && {
              pathLength: 1,
              transition: {
                duration: 0.5,
                delay: 0.3 + 0.3,
                ease: "easeInOut",
              },
            }
          }
          id="pyramid_line_4"
          className="pyramid_line"
          strokeDashoffset="[0 1]"
          x1="878"
          y1="658"
          x2="1800"
          y2="658"
        ></motion.line>
        <motion.text
          initial={{
            opacity: 0,
          }}
          animate={
            inView && {
              opacity: 0.7,
              transition: {
                duration: 0.5,
                delay: 0.3 + 0.3,
                ease: "easeInOut",
              },
            }
          }
          id="pyramid_text_4"
          className="pyramid_text hidden stroke-dark text-2xl font-light  md:block"
          y="696"
          textAnchor="end"
        >
          <tspan dy="0" x="1800">
            {dictionary.pyramid.team.description1}
          </tspan>
          <tspan dy="1.4em" x="1800">
            {dictionary.pyramid.team.description2}
          </tspan>
        </motion.text>
        <motion.g
          initial={{
            opacity: 0,
            x: -300,
          }}
          animate={
            inView && {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,

                ease: "easeInOut",
              },
            }
          }
          id="pyramid_step_4"
          //className="pyramid_step fill-[#cbcfc9] stroke-black stroke-2"
        >
          <polygon
            className="pyramid_block"
            points="121.25,572.92 500.62,803.07 878.71,572.92 878.71,727.15 499.98,954.63 121.25,727.15"
          ></polygon>
          <polygon
            className="pyramid_block "
            points="121.25,572.92 499.98,347.86 878.71,572.92 500.62,803.07"
          ></polygon>
        </motion.g>

        <motion.text
          initial={{
            opacity: 0,
          }}
          animate={
            inView && {
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: 0.3 + 0.9,
                ease: "easeInOut",
              },
            }
          }
          id="pyramid_header_3"
          className="fill-primary stroke-primary text-4xl max-md:translate-x-[-190px] max-md:text-[80px]"
          x="1560"
          y="480"
        >
          {dictionary.pyramid.service.title}
        </motion.text>
        <motion.line
          initial={{
            pathLength: 0,
          }}
          animate={
            inView && {
              pathLength: 1,
              transition: {
                duration: 0.5,
                delay: 0.3 + 0.9,
                ease: "easeInOut",
              },
            }
          }
          id="pyramid_line_3"
          className="pyramid_line"
          x1="805"
          y1="498"
          x2="1725"
          y2="498"
        ></motion.line>
        <motion.text
          initial={{
            opacity: 0,
          }}
          animate={
            inView && {
              opacity: 0.7,
              transition: {
                duration: 0.4,
                delay: 0.3 + 0.9,
                ease: "easeInOut",
              },
            }
          }
          id="pyramid_text_3"
          className="pyramid_text hidden stroke-dark text-2xl font-light  md:block"
          y="536"
          textAnchor={"end"}
        >
          <tspan dy="0" x="1725">
            {dictionary.pyramid.service.description1}
          </tspan>
          <tspan dy="1.4em" x="1725">
            {dictionary.pyramid.service.description2}
          </tspan>
        </motion.text>
        <motion.g
          initial={{
            opacity: 0,
            x: -300,
          }}
          animate={
            inView && {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
                delay: 0.3 + 0.6,

                ease: "easeInOut",
              },
            }
          }
          id="pyramid_step_3"
          // className="pyramid_step bg-blue-300 fill-red-500"
        >
          <polygon
            className="pyramid_block"
            points="196.14,426.29 499.98,245.74 803.81,426.29 500.5,610.93"
          ></polygon>
          <polygon
            className="pyramid_block"
            points="195.74,426.84 500.5,611.8 804.21,426.84 804.21,581.07 499.85,763.36 195.74,581.07"
          ></polygon>
        </motion.g>

        <motion.text
          initial={{
            opacity: 0,
          }}
          animate={
            inView && {
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: 0.3 + 1.5,
                ease: "easeInOut",
              },
            }
          }
          id="pyramid_header_2"
          className="fill-primary  stroke-primary text-4xl max-md:translate-x-[-190px] max-md:text-[80px]"
          x="1472"
          y="320"
        >
          {dictionary.pyramid.project.title}
        </motion.text>
        <motion.line
          initial={{
            pathLength: 0,
          }}
          animate={
            inView && {
              pathLength: 1,
              transition: {
                duration: 0.5,
                delay: 0.3 + 1.5,
                ease: "easeInOut",
              },
            }
          }
          id="pyramid_line_2"
          className="pyramid_line"
          x1="730"
          y1="338"
          x2="1650"
          y2="338"
        ></motion.line>
        <motion.text
          initial={{
            opacity: 0,
          }}
          animate={
            inView && {
              opacity: 0.7,
              transition: {
                duration: 0.4,
                delay: 0.3 + 1.5,
                ease: "easeInOut",
              },
            }
          }
          id="pyramid_text_2"
          className="pyramid_text hidden stroke-dark text-2xl font-light  md:block"
          y="380"
          textAnchor={"end"}
        >
          <tspan dy="0" x="1650">
            {dictionary.pyramid.project.description1}
          </tspan>
          <tspan dy="1.4em" x="1650">
            {dictionary.pyramid.project.description2}
          </tspan>
        </motion.text>
        <motion.g
          initial={{
            opacity: 0,
            x: -300,
          }}
          animate={
            inView && {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
                delay: 0.3 + 1.2,

                ease: "easeInOut",
              },
            }
          }
          id="pyramid_step_2"
          //className="pyramid_step fill-green-500"
        >
          <polygon
            className="pyramid_block"
            points="272.78,282.84 499.9,147.87 727.02,282.84 500.29,420.85"
          ></polygon>
          <polygon
            className="pyramid_block"
            points="272.42,282.87 499.9,421.59 727.47,282.87 727.47,437.1 499.25,573.15 272.42,437.1"
          ></polygon>
        </motion.g>

        <motion.text
          initial={{
            opacity: 0,
          }}
          animate={
            inView && {
              opacity: 1,
              transition: {
                duration: 0.4,
                delay: 0.3 + 2.1,
                ease: "easeInOut",
              },
            }
          }
          id="pyramid_header_1"
          className="fill-primary stroke-primary text-4xl max-md:translate-x-[-190px] max-md:text-[80px]"
          x="1340"
          y="160"
        >
          {dictionary.pyramid.consulting.title}
        </motion.text>
        <motion.line
          initial={{
            pathLength: 0,
          }}
          animate={
            inView && {
              pathLength: 1,
              transition: {
                duration: 0.5,
                delay: 0.3 + 2.1,
                ease: "easeInOut",
              },
            }
          }
          id="pyramid_line_1"
          className="pyramid_line"
          x1="650"
          y1="178"
          x2="1575"
          y2="178"
        ></motion.line>
        <motion.text
          initial={{
            opacity: 0,
          }}
          animate={
            inView && {
              opacity: 0.7,
              transition: {
                duration: 0.4,
                delay: 0.3 + 2.1,
                ease: "easeInOut",
              },
            }
          }
          id="pyramid_text_1"
          className="pyramid_text hidden stroke-dark text-2xl font-light  md:block"
          y="220"
          textAnchor={"end"}
        >
          <tspan dy="0" x="1575">
            {dictionary.pyramid.consulting.description1}
          </tspan>
          <tspan dy="1.4em" x="1575">
            {dictionary.pyramid.consulting.description2}
          </tspan>
        </motion.text>
        <motion.g
          initial={{
            opacity: 0,
            x: -300,
          }}
          animate={
            inView && {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
                delay: 0.3 + 2.1,

                ease: "easeInOut",
              },
            }
          }
          id="pyramid_step_1"
          // className="pyramid_step fill-blue-400"
        >
          <polygon
            className="pyramid_block"
            points="346.42,136.2 499.9,45 653.38,136.2 500.16,229.47"
          ></polygon>
          <polygon
            className="pyramid_block"
            points="345.99,136.79 500.47,230.32 652.85,136.79 652.85,291.02 499.82,381.88 345.99,291.02"
          ></polygon>
        </motion.g>
      </svg>
    </div>
  );
};

export default Pyramid;
