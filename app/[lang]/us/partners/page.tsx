import React from "react";
import PartnersHeader from "./components/partners-header";
import OtherCollaborators from "./components/OtherCollaborators";
import MainPartners from "./components/main-partners";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Partners | Clone of Corus",
};

export const generateStaticParams = async () => {
  const slugs = [{ lang: "en" }, { lang: "es" }];
  return slugs.map((slug) => ({
    lang: slug.lang,
  }));
};

const Page = (props: Props) => {
  return (
    <div className="pt-[72px] text-dark">
      <PartnersHeader />
      <MainPartners />
      <OtherCollaborators />
    </div>
  );
};

export default Page;
