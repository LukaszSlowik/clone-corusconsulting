import Image from "next/image";
import React from "react";
import Card from "./card";
import CardArea from "./card-area";
import MotionCardAreaWrapper from "./motion-card-area-wrapper";
import { Locale } from "@/i18n.config";
import { DictionaryType, getDictionary } from "@/lib/dictionary";

type Props = {
  dictionary: DictionaryType;
  lang: Locale;
};

const cards = [
  {
    name: "integration",
    icon: "/img/icon/level-circle.svg",
    href: "/solutions/integration-api",
    alt: "level-circle.svg",
  },
  {
    name: "processes",
    icon: "/img/icon/box-circle.svg",
    href: "/solutions/process",
    alt: "box-circle",
  },
  {
    name: "iot",
    icon: "/img/icon/convertshape-circle.svg",
    href: "/solutions/iot-ai",
    alt: "convertshape-circle",
  },
  {
    name: "ux",
    icon: "/img/icon/bpm-circle.svg",
    href: "/solutions/ux",
    alt: "bpm-circle",
  },
  {
    name: "cms",
    icon: "/img/icon/cms-circle.svg",
    href: "/solutions/cms",
    alt: "cms-circle",
  },
  {
    name: "video",
    icon: "/img/icon/video-circle.svg",
    href: "/solutions/video",
    alt: "video-circle",
  },
  {
    name: "development",
    icon: "/img/icon/document-code-circle.svg",
    href: "/solutions/develop",
    alt: "document-code-circle",
  },
  {
    name: "qa",
    icon: "/img/icon/magnifier-circle.svg",
    href: "/solutions/qa",
    alt: "magnifier-circle",
  },
];

const KnowledgeArea = ({ dictionary, lang }: Props) => {
  const knowledgeArea = dictionary["knowledge-areas"];
  return (
    <div className="relative  pt-[100px]">
      <div className="flex h-[200px]">
        <div className=" pr-16 md:pt-12">
          <h2 className=" text-3xl">{knowledgeArea}</h2>
        </div>
        <div className="max-md:hidden">
          <Image
            src="/img/bullet.svg"
            alt="bullet"
            width={15}
            height={15}
            className=" pt-16"
          />
        </div>
        <div
          className="mt-16  flex-1 bg-white md:mb-[-14px] md:[border-bottom:15px_solid_transparent]  md:[border-right:15px_solid_transparent] md:[border-top:15px_solid_transparent] dark:bg-dark"
          style={{
            borderImage: `url('/img/border.png') 15 round`,
            // borderRight: "15px solid transparent",
            // borderTop: "15px solid transparent",
            // borderBottom: "15px solid transparent",
          }}
        ></div>
      </div>
      <div
        style={{
          borderImage: `url('/img/border.png') 15 round`,
        }}
        className="  md:[border-top:15px_solid_transparent] md:[border-left:15px_solid_transparent]"
      >
        <div className="  translate-y-[-90px] justify-evenly gap-4 max-md:space-y-4 md:mx-8 md:flex">
          {cards.slice(0, 4).map((card, index) => (
            <MotionCardAreaWrapper
              total={4}
              index={index}
              key={index}
              direction="reverse"
            >
              <CardArea card={card} dictionary={dictionary} lang={lang} />
            </MotionCardAreaWrapper>
          ))}
        </div>
      </div>

      <div
        style={{
          borderImage: `url('/img/border.png') 15 round`,
        }}
        className="relative md:[border-top:15px_solid_transparent] lg:w-[calc(100vw_-_((100vw_-_min(87vw,_1181px))_/_2))]"
      >
        <div className="absolute left-0 top-[-15px] max-md:hidden">
          <Image
            src="/img/bullet.svg"
            alt="bullet"
            width={15}
            height={15}
            className=" "
          />
        </div>
        <div className="  translate-y-[-90px] justify-evenly gap-4 max-md:space-y-4 md:mx-8 md:flex">
          {cards.slice(4, 8).map((card, index) => (
            <MotionCardAreaWrapper
              additionalDelay={0.8}
              total={4}
              index={index}
              key={index}
              direction="normal"
            >
              <CardArea card={card} dictionary={dictionary} lang={lang} />
            </MotionCardAreaWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeArea;
