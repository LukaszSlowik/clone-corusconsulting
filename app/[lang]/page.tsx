import Card from "@/components/card";
import Hero from "@/components/hero";
import KnowledgeArea from "@/components/knowledge-area";
import MotionCardWrapper from "@/components/motion-card-wrapper";
import Pyramid from "@/components/pyramid";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Image from "next/image";

const cards = [
  {
    name: "commitment1",

    icon: "/img/icon/hand-heart-circle.svg",
    alt: "hand-heart-circle",
  },
  {
    name: "quality1",
    icon: "/img/icon/medal-star-circle.svg",
    alt: "medal-star-circle",
  },
  {
    name: "innovation",
    icon: "/img/icon/bulb-circle.svg",
    alt: "bulb-circle",
  },
  {
    name: "proximity",
    icon: "/img/icon/people-circle.svg",
    alt: "people-circle",
  },
];
type Props = {
  params: { lang: Locale };
};

export default async function Home({ params }: Props) {
  const dictionary = await getDictionary(params.lang);
  return (
    <div className="">
      {/* <div>
        <Image
          src={"/img/favicon.svg"}
          alt="logo"
          width={100}
          height={100}
          className=" p-4"
        />
      </div> */}
      <div
        className="relative  h-[100vh] w-full   bg-[url('/img/tunnel.jpg')] bg-cover bg-center"
        style={
          {
            //backgroundImage: "url('/img/tunnel.jpg')",
          }
        }
      >
        {/* <div className="pt-[30vh] "></div> */}
        <Hero dictionary={dictionary} lang={params.lang} />
        {/* <div className="pt-[100vh]"></div> */}
      </div>
      <main className="mx-auto  w-[90%] max-w-[1200px] ">
        <div className="grid gap-8 md:grid-cols-4  ">
          {cards.map((card, index) => (
            <MotionCardWrapper key={card.name} index={index}>
              <Card card={card} dictionary={dictionary} />
            </MotionCardWrapper>
          ))}
        </div>
        <KnowledgeArea dictionary={dictionary} lang={params.lang} />
      </main>
      <div className="bg-[#e6e6e6] py-24">
        <Pyramid dictionary={dictionary} />
      </div>
    </div>
  );
}
