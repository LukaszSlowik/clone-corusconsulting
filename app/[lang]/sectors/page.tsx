import React from "react";
import { CarouselSectors } from "./components/carousel-sectors";

type Props = {};
export const generateStaticParams = async () => {
  const slugs = ["en", "es"];
  return slugs.map((slug) => ({
    lang: slug,
  }));
};

const Page = (props: Props) => {
  return <></>;
};

export default Page;
