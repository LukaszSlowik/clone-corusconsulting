import Image from "next/image";
import React from "react";

import Link from "next/link";
import { CardType } from "@/types";
import { DictionaryType } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";

type Props = {
  card: CardType;
  dictionary: DictionaryType;
  lang: Locale;
};

const CardArea = ({ card, dictionary, lang }: Props) => {
  const title =
    dictionary.cards[card.name as keyof typeof dictionary.cards].title;
  const description =
    dictionary.cards[card.name as keyof typeof dictionary.cards].description;
  const seeMore = dictionary["see-more"];

  return (
    <div className="group z-[999] flex  h-full flex-1  flex-col gap-2  rounded-sm p-10 pb-2  text-xl text-dark hover:bg-white max-md:mb-4 max-md:bg-white  max-md:pb-8   max-md:shadow-cardArea md:hover:shadow-cardArea dark:text-white dark:hover:bg-darkHover dark:max-md:bg-darkHover  ">
      <Link href={`${lang}${card.href}`}>
        <Image
          src={card.icon}
          alt={card.alt}
          width={82}
          height={82}
          className=" z-[999] mb-8"
        />
        <h1 className=" mb-2 font-bold text-primary">{title}</h1>
        <p className="text-base">{description}</p>

        <p className=" pt-12 font-bold  text-primary group-hover:visible md:invisible ">
          {seeMore} {`>`}
        </p>
      </Link>
    </div>
  );
};

export default CardArea;
