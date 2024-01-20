import MotionCardSections from "@/components/motion-card-sections";
import { aboutUsCards } from "@/data/about-us.cards";
import { DictionaryType } from "@/lib/dictionary";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
  dictionary: DictionaryType;
};

const AboutUsValues = ({ className, dictionary }: Props) => {
  const values = dictionary["about-us-values"];
  return (
    <div className="mx-auto max-w-[1200px]  py-12">
      <h2 className="pb-24 text-3xl md:text-4xl">{values}</h2>
      <div className=" grid gap-8 max-md:px-4 md:grid-cols-2">
        {aboutUsCards.map((card, index) => {
          const title =
            dictionary["about-us-cards"][
              card.name as keyof (typeof dictionary)["about-us-cards"]
            ].title;
          const description =
            dictionary["about-us-cards"][
              card.name as keyof (typeof dictionary)["about-us-cards"]
            ].description;
          return (
            <MotionCardSections
              index={index}
              key={card.name}
              className={cn(
                `flex h-full flex-col gap-2  rounded-sm  bg-white p-10 text-xl text-dark shadow-card`,
                className,
              )}
            >
              <Image
                src={card.icon}
                alt={card.alt}
                width={82}
                height={82}
                className="mb-8"
              />
              <h1 className=" font-bold">{title}</h1>
              <p className="">{description}</p>
            </MotionCardSections>
          );
        })}
      </div>
    </div>
  );
};

export default AboutUsValues;
