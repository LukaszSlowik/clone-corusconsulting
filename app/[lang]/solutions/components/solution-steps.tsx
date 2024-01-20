import MotionCardSections from "@/components/motion-card-sections";
import { sectorsCards } from "@/data/sectors-cards";
import { solutionsCards } from "@/data/solutions-cards";
import { DictionaryType } from "@/lib/dictionary";
import Image from "next/image";
import React from "react";

type Props = {
  dictionary: DictionaryType;
  solution: keyof DictionaryType["solutions"];
};
type CardDetails = {
  title: string;
  description: string;
};
type CardsDictionary = {
  cards: Record<string, CardDetails>;
};

const SolutionSteps = ({ dictionary, solution }: Props) => {
  const cardsDictionary: CardsDictionary =
    dictionary.solutions[solution as keyof typeof dictionary.solutions];

  return (
    <div className="relative overflow-hidden bg-[#f9f8f8] pb-20 dark:bg-[#414141]">
      <div
        className=" absolute left-0 right-0 top-[199px] md:[border-bottom:15px_solid_transparent]   "
        style={{ borderImage: `url('/img/border.png') 15 round` }}
      ></div>
      <div className="mx-auto  w-[90%] max-w-[1200px] ">
        <div className="py-20">
          {" "}
          <h2 className="text-left text-2xl">
            {dictionary.solutions[solution].title2}
          </h2>
        </div>
        <div className="relative grid gap-8 lg:flex ">
          {solutionsCards[solution].map((card, index) => {
            const title = cardsDictionary.cards[card.name].title;
            const description = cardsDictionary.cards[card.name].description;
            // const title = "test";
            // const description = "test";
            return (
              <MotionCardSections key={card.name} index={index}>
                <div key={card.name} className="text-left leading-loose">
                  <Image
                    src={card.icon}
                    alt={card.alt}
                    width={30}
                    height={30}
                  />
                  <h2 className="py-8 text-xl font-bold">{title}</h2>
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

export default SolutionSteps;
