import React from "react";
import { CarouselSectors } from "../components/carousel-sectors";
import SectorsDetails from "../components/sectors-details";
import Cards from "../components/cards";
import SomeClients from "../../solutions/components/some-clients";
import { Locale } from "@/i18n.config";
import { DictionaryType } from "@/lib/dictionary";
import { getDictionary } from "@/lib/dictionary";
import { sectorsCards } from "@/data/sectors-cards";
import { sectorsClients } from "@/data/sectors-clients";
import { Metadata } from "next";

type Props = {
  params: { lang: Locale; sector: string };
};
export async function generateMetadata({
  params,
}: {
  params: { lang: Locale; sector: string };
}): Promise<Metadata> {
  const id = params.sector;
  const idUpperFirst = id.charAt(0).toUpperCase() + id.slice(1);
  return {
    title: `${idUpperFirst} | Clone Corus`,
  };
}

// const cards = [
//   {
//     name: "quality",
//     // title: "Quality",
//     // description: "in the contents and their reproduction",
//     icon: "/img/icon/medal-star-circle.svg",
//     alt: "medal",
//   },
//   {
//     name: "security",
//     // title: "Security",
//     // description: "in rights management",
//     icon: "/img/icon/security-circle.svg",
//     alt: "security",
//   },
//   {
//     name: "usability",
//     // title: "Usability",
//     // description: "in the interaction with the user",
//     icon: "/img/icon/usability-circle.svg",
//     alt: "usability",
//   },
//   {
//     name: "adaptation",
//     // title: "Adaptation",
//     // description: "to each of the devices",
//     icon: "/img/icon/responsive-circle.svg",
//     alt: "responsive",
//   },
// ];

// const clients = [
//   {
//     icon: "/img/logo/vocento.svg",
//     alt: "vocento",
//   },
//   {
//     icon: "/img/logo/rtve.svg",
//     alt: "rtve",
//   },
//   {
//     icon: "/img/logo/elespanol.svg",
//     alt: "el español",
//   },
//   {
//     icon: "/img/logo/prisa.svg",
//     alt: "prisa",
//   },
// ];

const Page = async ({ params }: Props) => {
  const dictionary = await getDictionary(params.lang);
  //console.log("dictionary", dictionary);
  return (
    <div>
      <CarouselSectors
        selected={params.sector}
        dictionary={dictionary}
        lang={params.lang}
      />
      <div className="bg-[#f2faf0] dark:bg-dark">
        <SectorsDetails dictionary={dictionary} sector={params.sector} />
        <div className="mx-auto max-w-[1200px] px-4">
          <Cards
            sector={params.sector as keyof DictionaryType["sectors"]}
            cards={sectorsCards[params.sector as keyof typeof sectorsCards]}
            dictionary={dictionary}
          />
        </div>
        <SomeClients
          dictionary={dictionary}
          clients={sectorsClients[params.sector as keyof typeof sectorsClients]}
        />
      </div>
    </div>
  );
};

export default Page;
