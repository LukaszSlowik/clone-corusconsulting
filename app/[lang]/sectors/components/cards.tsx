"use client";

import Card from "@/components/card";
import MotionCardSections from "@/components/motion-card-sections";
import MotionCardWrapper from "@/components/motion-card-wrapper";
import LineUp from "@/components/svgs/line-up";
import { sectorsCards } from "@/data/sectors-cards";
import { DictionaryType } from "@/lib/dictionary";
import { CardType } from "@/types";
import React from "react";
import { useInView } from "react-intersection-observer";
import SectorCard from "./sector-card";

type Props = {
  cards: CardType[];

  dictionary: DictionaryType;
  sector: string;
  //sector: keyof DictionaryType["sectors"];
};
type CardDetails = {
  title: string;
  description: string;
};

type CardsDictionary = {
  cards: Record<string, CardDetails>;
};
const Cards = ({ cards, sector, dictionary }: Props) => {
  console.log(cards);
  // const cardsDictionary =
  //   dictionary.sectors[sector as keyof typeof dictionary.sectors];
  const cardsDictionary: CardsDictionary =
    dictionary.sectors[sector as keyof typeof dictionary.sectors];

  const { ref, inView } = useInView({
    //threshold: 0.5,
    rootMargin: "-200px 0px 0px 0px",
  });
  return (
    <div
      ref={ref}
      className="relative  grid gap-6 py-24  [--staggered:3] md:grid-cols-4 md:[--staggered:3]  lg:gap-16"
    >
      <div className="absolute  bottom-[65%] left-[10%]  w-1/4">
        <LineUp delay={0.5} inView={inView} />
      </div>
      <div className="absolute  left-[50%] top-[65%] mr-[12%] w-1/4 translate-x-[-50%] rotate-180">
        <LineUp delay={1} inView={inView} />
      </div>
      <div className="absolute  bottom-[65%] right-[10%]  w-1/4">
        <LineUp delay={1.5} inView={inView} />
      </div>
      {cards.map((card, index) => (
        <MotionCardSections key={card.name} index={index}>
          <SectorCard
            card={card}
            className="relative p-6 pb-8 text-base"
            description={
              cardsDictionary.cards[
                card.name as keyof typeof cardsDictionary.cards
              ].description
            }
            title={
              cardsDictionary.cards[
                card.name as keyof typeof cardsDictionary.cards
              ].title
            }
          />
        </MotionCardSections>
      ))}
    </div>
  );
};

export default Cards;
