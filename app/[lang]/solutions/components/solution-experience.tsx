import { DictionaryType } from "@/lib/dictionary";
import React from "react";
import TwoColumnsWrapper from "./two-columns-wrapper";
import MotionShowWrapper from "@/components/motion-show-wrapper";
import Image from "next/image";
import HtmlFromJson from "@/components/html-from-json";

type Props = {
  dictionary: DictionaryType;
  solution: keyof DictionaryType["solutions"];
};

const SolutionExperience = ({ dictionary, solution }: Props) => {
  const title = dictionary["solution-experience"];
  const experience = dictionary.solutions[solution].experience;
  return (
    <div>
      <TwoColumnsWrapper>
        <TwoColumnsWrapper.LeftColumn className="">
          <div className="solution-image relative  max-w-[90%] before:bg-[#e6e6e6] before:dark:bg-[#414141]">
            <MotionShowWrapper direction="left">
              <Image
                src={`/img/solutions/${solution}.jpg`}
                alt={solution}
                width={800}
                height={800}
                className="relative  drop-shadow-sectors    "
              />
            </MotionShowWrapper>
          </div>
        </TwoColumnsWrapper.LeftColumn>
        <TwoColumnsWrapper.RightColumn>
          <MotionShowWrapper direction="right">
            <div className="text-left">
              <h2 className="pb-12 text-3xl max-lg:pt-16">{title}</h2>
              <div>
                {" "}
                <HtmlFromJson htmlText={experience} className="space-y-4" />
              </div>
            </div>
          </MotionShowWrapper>
        </TwoColumnsWrapper.RightColumn>
      </TwoColumnsWrapper>
    </div>
  );
};

export default SolutionExperience;
