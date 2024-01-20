"use client";
import { cn } from "@/lib/utils";
import React, { useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DictionaryType } from "@/lib/dictionary";
import Link from "next/link";
import { Locale } from "@/i18n.config";

type Props = {
  dictionary: DictionaryType;
  lang: Locale;
};

const Hero = ({ dictionary, lang }: Props) => {
  const slider = [
    {
      id: 1,
      name: "finance",
      href: `/sectors/finance`,
      img: "/img/transform.jpg",
    },
    {
      id: 2,
      img: "/img/puzzle.jpg",
      name: "qa",
      href: `/solutions/qa`,
    },
    {
      id: 3,
      img: "/img/tunnel.jpg",
      href: `/contact`,
      name: "contact",
    },
  ];
  const [index, setIndex] = React.useState(0);

  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const startInterval = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
    }, 5000);
  }, [slider.length]);

  React.useEffect(() => {
    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startInterval]);

  const handleButtonClick = (i: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIndex(i);
    startInterval();
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={slider[index].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          style={{
            backgroundImage: `url(${slider[index].img})`,
            //transition: "all 2s ease-in-out",
            // backgroundImage: `url('/img/tunnel.jpg')`,
          }}
          className={cn(
            `sm:max-w- linear absolute bottom-0 left-0 right-0 top-0   bg-cover bg-center text-white `,
          )}
        >
          <div className=" w-[80%]  pl-[10%]  pt-[15vh] sm:w-[60%] sm:pt-[30vh]">
            <motion.h1
              key={slider[index].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0, transition: { duration: 4 } }}
              className="  mx-auto pb-4 text-2xl leading-[1.4] [text-shadow:_1px_1px_5px_rgb(43_43_43_/_90%)] xs:text-4xl sm:text-5xl "
            >
              {
                dictionary["hero-slides"][
                  slider[index].name as keyof (typeof dictionary)["hero-slides"]
                ]["first-line"]
              }

              <br />
              {
                dictionary["hero-slides"][
                  slider[index].name as keyof (typeof dictionary)["hero-slides"]
                ]["second-line"]
              }
              <br />
            </motion.h1>

            <Link
              href={`/${lang}${slider[index].href}`}
              //onClick={() => console.log("test")}
              className="mt-12 block w-full max-w-[200px] cursor-pointer border border-white px-4 py-2 text-xl opacity-80  shadow-learnMoreButton [text-shadow:_1px_1px_5px_rgb(43_43_43_/_90%)] hover:border-none hover:bg-[#3fae29] hover:opacity-100 "
            >
              {dictionary["hero-button"]}
            </Link>
          </div>

          <div className="absolute bottom-[6%] left-[50%] right-[50%]    gap-1  transition-all duration-700  max-sm:rotate-90 sm:bottom-[50%] sm:left-auto sm:right-12 sm:top-[50%] sm:rotate-90 ">
            {slider.map((item, i) => {
              return (
                <button
                  onClick={() => handleButtonClick(i)}
                  key={item.id}
                  className={cn(
                    `mb-3 mr-3 h-5  w-5 rounded-full bg-dark`,
                    index === i && `bg-[#3fae29]`,
                  )}
                ></button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Hero;
