import Image from "next/image";
import React from "react";

type Props = {};

const PartnersHeader = (props: Props) => {
  return (
    <div className="bg-partners text-dark">
      <div className="mx-auto grid max-w-[1200px] items-center justify-center  px-4 md:grid-cols-2 ">
        <div className=" ">
          <h2 className="py-12 text-5xl">Partners</h2>
          <p>
            We use our technical expertise in the industry to identify
            requirements, developing solutions that combine our partners'
            technologies with the specific business needs of our customers.
          </p>
        </div>
        <Image
          src="/img/puzzle-partners.jpg"
          alt="puzzle-partners"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};

export default PartnersHeader;
