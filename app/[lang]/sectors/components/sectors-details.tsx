import MotionShowWrapper from "@/components/motion-show-wrapper";
import { DictionaryType } from "@/lib/dictionary";
import Image from "next/image";
import DOMPurify from "dompurify";
import React from "react";
import HtmlFromJson from "@/components/html-from-json";

type Props = {
  dictionary: DictionaryType;
  sector: string;
};

const SectorsDetails = ({ dictionary, sector }: Props) => {
  console.log("sector", sector);
  const title =
    dictionary.sectors[sector as keyof typeof dictionary.sectors].title;
  const description =
    dictionary.sectors[sector as keyof typeof dictionary.sectors].description;

  return (
    <div className="index-[2] relative ">
      <div className="mx-auto max-w-[1200px]   px-4 py-12 ">
        <MotionShowWrapper direction="left">
          <h2 className="pb-2 text-3xl">{title}</h2>
        </MotionShowWrapper>
        <div className="flex w-full  gap-12 py-8 max-lg:flex-col">
          <div className="basic-full min-w-0 grow-0 space-y-4  lg:shrink-0 lg:basis-1/2">
            <MotionShowWrapper direction="left">
              {/* <div></div> */}
              <HtmlFromJson htmlText={description} className=" space-y-4  " />
            </MotionShowWrapper>
          </div>
          <div className="  ">
            <div className="sector-image relative  max-w-[90%] before:bg-[#e6e6e6] before:dark:bg-[#414141]">
              <MotionShowWrapper direction="right">
                <Image
                  src={`/img/sectors/${sector}.jpg`}
                  alt={sector}
                  width={800}
                  height={800}
                  className="relative  drop-shadow-sectors    "
                />
              </MotionShowWrapper>
              {/* <div className="absolute left-12 right-0 top-14   h-full   w-[100vw] bg-[#e6e6e6]   dark:bg-[#414141]"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorsDetails;
