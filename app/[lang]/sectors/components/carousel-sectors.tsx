"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import Image from "next/image";
import Finance from "./icons/finance";
import Link from "next/link";
import { DictionaryType } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
type Props = {
  selected: string;
  dictionary: DictionaryType;
  lang: Locale;
};

const sectors = [
  {
    title: "finance",
  },
  {
    title: "consumer",
  },
  {
    title: "healthcare",
  },
  {
    title: "insurance",
  },
  {
    title: "media",
  },
  {
    title: "industry",
  },
];

export const CarouselSectors = ({ selected, dictionary, lang }: Props) => {
  return (
    <div
      style={{
        borderImage: `url('/img/border.png') 15 round`,
      }}
      className="bg-[#f9f8f8]  [border-bottom:15px_solid_transparent]  dark:bg-[#414141]  "
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 px-2 sm:grid-cols-3">
        <div className="  w-[90%]  pt-[100px]">
          {" "}
          <div className=" flex  justify-center">
            <Image
              priority
              src={`/img/icon/${selected}-selected.svg`}
              alt="finance"
              width={200}
              height={200}
              className="w-full drop-shadow-sectors  "
            />
          </div>
          <div className="pt-2 text-center text-xl font-bold first-letter:uppercase">
            {
              dictionary.navigation[
                selected as keyof typeof dictionary.navigation
              ]
            }
            <div className="mx-auto   pt-4">
              <Image
                priority
                alt=""
                src={`/img/icon/selected.svg`}
                width={60}
                height={100}
                className="mx-auto translate-y-[13px]  drop-shadow-sectors"
              />
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center  sm:col-span-2 ">
          <Carousel
            className="  mx-auto flex   w-full  py-24 pt-[100px] "
            opts={{ loop: true, align: "start" }}
          >
            <CarouselPrevious className="" />

            <CarouselContent className="">
              {sectors
                .filter((sector) => sector.title !== selected)
                .map((sector, index) => {
                  return (
                    <CarouselItem
                      key={index}
                      className="group  flex basis-[100%] cursor-pointer flex-col justify-center  sm:basis-1/2 lg:basis-1/3 "
                    >
                      <Link href={`/${lang}/sectors/${sector.title}`}>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            transition: {
                              delay: 0.5 + index * 0.3,
                              duration: 2,
                            },
                          }}
                          className=" w-full   transition hover:scale-[97%]"
                        >
                          <Image
                            priority
                            src={`/img/icon/${sector.title}.svg`}
                            alt={sector.title}
                            width={300}
                            height={300}
                            className="drop-shadow-sectors  "
                          />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            transition: {
                              delay: 0.5 + index * 0.4,
                              duration: 1,
                            },
                          }}
                          className="z-[999]  pt-2 text-center first-letter:uppercase group-hover:text-primary max-xs:hyphens-auto"
                        >
                          {
                            dictionary.navigation[
                              sector.title as keyof typeof dictionary.navigation
                            ]
                          }
                          {/* {sector.title} */}
                        </motion.div>
                      </Link>
                    </CarouselItem>
                  );
                })}
            </CarouselContent>

            <CarouselNext className="" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};
