import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tw from "./svgs/tw";
import Ln from "./svgs/ln";
import Yt from "./svgs/yt";
import { DictionaryType } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import FooterLinks from "./footer-links";
import FooterSocial from "./footer-social";

type Props = {
  dictionary: DictionaryType;
  lang: Locale;
};

// const places = [
//   "madrid",
// ];

const Footer = ({ dictionary, lang }: Props) => {
  const places = dictionary["footer-addresses"];
  const links = dictionary["footer-links"];
  return (
    <div className="shadow-footer relative   bg-dark pt-12 text-white">
      <div className=" mx-auto max-w-[1200px] pb-4 ">
        <div className="text  grid  grid-cols-2 justify-between p-4 text-xs lg:flex lg:gap-4">
          {places.map((place, index) => (
            <ul key={index} className="p-2  leading-relaxed">
              <li className=" font-bold uppercase ">{place.city}</li>
              <li>
                {place.address}
                <br />
                {place["postal-code"]}
                <br />
                {place.country}
              </li>
            </ul>
          ))}
        </div>
        <div className=" border-b border-white"></div>
        <div className="flex items-center justify-between gap-12 pt-8 max-md:flex-col">
          <Image
            priority
            src="/img/corus-white.svg"
            alt="logo"
            width={150}
            height={100}
            className=" p-4"
          />
          <FooterLinks
            terms={links.terms}
            privacy={links.privacy}
            cookies={links.cookies}
          />

          <FooterSocial />
        </div>
        <div className="flex justify-end">
          <Image
            src="/img/sello-ecovadis.png"
            alt="sello-ecovadis"
            width={120}
            height={100}
            className="pr-4 max-sm:w-[70px] "
          />
        </div>
        <h1 className="px-2 text-center text-sm">
          Copyright © 2022 Corus Systems & Consulting Group, S.L. - All rights
          reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
