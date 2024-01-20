"use client";

import MotionCardSections from "@/components/motion-card-sections";

import LineUp from "@/components/svgs/line-up";

import { DictionaryType } from "@/lib/dictionary";
import { CardType } from "@/types";
import React from "react";
import { useInView } from "react-intersection-observer";
import SectorCard from "./sector-card";

type Props = {
  cards: CardType[];

  dictionary: DictionaryType;
  sector: string;
};
type CardDetails = {
  title: string;
  description: string;
};

type CardsDictionary = {
  cards: Record<string, CardDetails>;
};
const Cards = ({ cards, sector, dictionary }: Props) => {
  const cardsDictionary: CardsDictionary =
    dictionary.sectors[sector as keyof typeof dictionary.sectors];
  const { ref, inView } = useInView({
    rootMargin: "-200px 0px 0px 0px",
  });
  return (
    <div
      ref={ref}
      className="relative  grid gap-6 py-24  [--staggered:3] md:grid-cols-4 md:[--staggered:3]  lg:gap-16"
    >
      <div className="absolute bottom-[65%]  left-[10%] w-1/4  max-lg:hidden">
        <LineUp delay={0.5} inView={inView} />
      </div>
      <div className="absolute left-[50%]  top-[65%] mr-[12%] w-1/4 translate-x-[-50%] rotate-180 max-lg:hidden">
        <LineUp delay={1} inView={inView} />
      </div>
      <div className="absolute bottom-[65%]  right-[10%] w-1/4  max-lg:hidden">
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
