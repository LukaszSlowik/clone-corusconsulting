"use client";
import { DictionaryType } from "@/lib/dictionary";
import { title } from "process";
import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import MotionCardSections from "@/components/motion-card-sections";
import HistoryPathDown from "@/components/svgs/history-path-down";
import HistoryPathUp from "@/components/svgs/history-path-up";
type Props = {
  dictionary: DictionaryType;
};

const aboutUsHistory = [
  {
    name: "2004",
  },
  {
    name: "2009",
  },
  {
    name: "2010",
  },
  {
    name: "2014",
  },
  {
    name: "2017",
  },
  {
    name: "2018",
  },
  {
    name: "2022",
  },
];

const AboutUsHistory = ({ dictionary }: Props) => {
  const ourHistory = dictionary["about-us-our-history"];

  return (
    <div className="relative bg-[#f9f8f8] pb-32 dark:bg-[#cbcfc9]">
      <div className="absolute right-0 top-4 w-[140px] ">
        <HistoryPathDown />
      </div>
      <div className="absolute bottom-4 left-0 w-[150px] ">
        <HistoryPathUp />
      </div>
      <div
        className="absolute left-0 right-0 top-[265px] lg:[border-bottom:15px_solid_transparent]   "
        style={{ borderImage: `url('/img/border.png') 15 round` }}
      ></div>
      <div className="relative mx-auto  max-w-[1200px] py-20 max-md:px-4 md:py-24">
        <h2 className="pb-28 pl-8  text-3xl text-dark">{ourHistory}</h2>
        <div className="flex items-center justify-evenly  max-lg:hidden">
          {aboutUsHistory.map((card, index) => {
            const title =
              dictionary["about-us-history"][
                card.name as keyof (typeof dictionary)["about-us-history"]
              ].title;
            const description =
              dictionary["about-us-history"][
                card.name as keyof (typeof dictionary)["about-us-history"]
              ].description;

            return (
              <div key={card.name}>
                <MotionCardSections
                  index={index * 1}
                  className=" "
                  margin="0px 0px 0px 0px"
                >
                  <Tooltip.Provider>
                    <Tooltip.Root delayDuration={0}>
                      <Tooltip.Trigger className="rounded-sm bg-dark px-6 py-4 text-white shadow-card-over transition-all hover:translate-y-[-2px] hover:bg-primary">
                        {card.name}
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content
                          side={index % 2 === 0 ? "top" : "bottom"}
                          sideOffset={10}
                          className="max-w-[300px] bg-dark p-6 text-white shadow-card-over transition-all duration-1000"
                        >
                          <h2 className="pb-4 text-xl">{title}</h2>
                          <p>{description}</p>
                          <Tooltip.Arrow className=" h-3 w-4 fill-dark" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </MotionCardSections>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 lg:hidden">
          {aboutUsHistory.map((card, index) => {
            const title =
              dictionary["about-us-history"][
                card.name as keyof (typeof dictionary)["about-us-history"]
              ].title;
            const description =
              dictionary["about-us-history"][
                card.name as keyof (typeof dictionary)["about-us-history"]
              ].description;
            return (
              <MotionCardSections
                duration={0.4}
                index={index}
                key={card.name}
                className=" mx-auto max-w-[500px]  px-4"
              >
                <div className="   rounded-sm bg-primary px-6 py-4 text-center text-white transition-all ">
                  {card.name}
                </div>
                <div className="bg-white p-6 shadow-cardhistory dark:bg-dark">
                  <h2 className="py-2 text-xl">{title}</h2>
                  <p>{description}</p>
                </div>
              </MotionCardSections>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUsHistory;
