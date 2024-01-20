import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import React from "react";
import Hands from "./components/hands";
import AboutUsSteps from "./components/about-us-steps";
import AboutUsValues from "./components/about-us-values";
import AboutUsHistory from "./components/about-us-history";

type Props = {
  params: {
    lang: Locale;
  };
};

const Page = async ({ params }: Props) => {
  const dictionary = await getDictionary(params.lang);
  return (
    <div>
      <Hands dictionary={dictionary} />
      <AboutUsSteps dictionary={dictionary} />
      <AboutUsValues dictionary={dictionary} />
      <AboutUsHistory dictionary={dictionary} />
    </div>
  );
};

export default Page;
