import React from "react";
import TwoColumnsWrapper from "./two-columns-wrapper";
import { DictionaryType } from "@/lib/dictionary";
import HtmlFromJson from "@/components/html-from-json";
import Image from "next/image";
import IntegrationApi from "./svgs/integration-api";

type Props = {
  solution: string;
  dictionary: DictionaryType;
  svg: React.ReactNode;
};

const SolutionFirstPart = ({ solution, dictionary, svg }: Props) => {
  console.log("solution:", solution);
  const title =
    dictionary.solutions[solution as keyof typeof dictionary.solutions].title;
  const description =
    dictionary.solutions[solution as keyof typeof dictionary.solutions]
      .description;
  //   const title = "test";
  //   const description = "test";
  return (
    <TwoColumnsWrapper className="pt-2">
      <TwoColumnsWrapper.LeftColumn>
        <div className="text-left ">
          <h2 className="pb-20  text-3xl lg:text-4xl">{title}</h2>
          <HtmlFromJson htmlText={description} className=" space-y-4  " />
        </div>
      </TwoColumnsWrapper.LeftColumn>

      <TwoColumnsWrapper.RightColumn>
        {/* <IntegrationApi /> */}
        {svg}
      </TwoColumnsWrapper.RightColumn>
    </TwoColumnsWrapper>
  );
};

export default SolutionFirstPart;
