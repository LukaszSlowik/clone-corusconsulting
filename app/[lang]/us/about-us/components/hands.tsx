import MotionHandsWrapper from "@/components/motion-hands-wrapper";
import { DictionaryType } from "@/lib/dictionary";
import React, { Fragment } from "react";

type Props = {
  dictionary: DictionaryType;
};

const Hands = ({ dictionary }: Props) => {
  const aboutUs = dictionary["about-us-hands"];
  return (
    <div
      style={{
        backgroundImage: "url(/img/aboutUs.jpg)",
        //backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="mt-16 min-h-[560px] bg-[75%_60%] md:bg-[50%_50%]"
    >
      <MotionHandsWrapper>
        <div className="relative top-32 mx-auto flex w-fit bg-[#697e8d] p-12 text-4xl leading-snug text-white sm:ml-[10%] lg:text-5xl  lg:leading-relaxed dark:bg-dark">
          <h2>
            {aboutUs.map((text, index) => (
              <Fragment key="text">
                {text}
                <br />
              </Fragment>
            ))}
            {/* Technology <br />
          Innovation <br />
          People */}
          </h2>
        </div>
      </MotionHandsWrapper>
    </div>
  );
};

export default Hands;
