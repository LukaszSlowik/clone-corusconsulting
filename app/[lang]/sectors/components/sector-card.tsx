import { DictionaryType } from "@/lib/dictionary";
import { cn } from "@/lib/utils";
import { CardType } from "@/types";
import Image from "next/image";
import React from "react";

type Props = {
  card: CardType;
  className?: string;

  title: string;
  description: string;
};

const SectorCard = ({ card, className, title, description }: Props) => {
  return (
    <div
      className={cn(
        `flex h-full flex-col gap-2  rounded-sm  bg-white p-10 pb-20 text-xl text-dark shadow-card`,
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
    </div>
  );
};

export default SectorCard;
