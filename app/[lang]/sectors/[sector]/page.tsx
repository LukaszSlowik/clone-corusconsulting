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
import { GetStaticPaths, Metadata } from "next";

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

export const generateStaticParams = async () => {
  const slugs = [
    { sector: "finance", lang: "en" },
    { sector: "finance", lang: "es" },
    { sector: "insurance", lang: "en" },
    { sector: "insurance", lang: "es" },
    { sector: "healthcare", lang: "en" },
    { sector: "healthcare", lang: "es" },
    { sector: "industry", lang: "en" },
    { sector: "industry", lang: "es" },
    { sector: "media", lang: "en" },
    { sector: "media", lang: "es" },
    { sector: "consumer", lang: "en" },
    { sector: "consumer", lang: "es" },
  ];
  return slugs.map((slug) => ({
    sector: slug.sector,
    lang: slug.lang,
  }));
};

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
