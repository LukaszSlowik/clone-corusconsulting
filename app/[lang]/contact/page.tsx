import ContactLeftLine from "@/components/svgs/contact-left-line";
import ContactRightLine from "@/components/svgs/contact-right-line";
import ContactShortLine from "@/components/svgs/contact-short-line";
import ContactLongLine from "@/components/svgs/contact-long-line";
import Map from "@/components/svgs/map";
import React from "react";
import MotionShowWrapper from "@/components/motion-show-wrapper";
import ContactForm from "@/components/contact-form";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { Metadata } from "next";

type Props = {
  params: {
    lang: Locale;
  };
};

export const generateStaticParams = async () => {
  const slugs = ["en", "es"];
  return slugs.map((slug) => ({
    lang: slug,
  }));
};

export const metadata: Metadata = {
  title: "Contact | Clone of Corus",
};

const Page = async ({ params }: Props) => {
  const dictionary = await getDictionary(params.lang);
  return (
    <div
      style={{
        backgroundImage: "url(/img/phone.png)",
        backgroundSize: "30%",
        backgroundRepeat: "no-repeat",

        backgroundPositionY: "72px",
        backgroundPositionX: "-150px",
      }}
      className="relative overflow-hidden  bg-dark  pb-24   pt-[72px] text-white  "
    >
      <div className="absolute right-0 top-[200px]  w-[40%] max-lg:hidden">
        <ContactLongLine />
      </div>
      <div className="absolute bottom-0 right-0  w-[15%] max-lg:hidden">
        <ContactRightLine />
      </div>
      <div className="absolute bottom-0 left-[-5px]  w-[15%] max-lg:hidden">
        <ContactLeftLine />
      </div>
      <div className="relative mx-auto grid w-[90%] max-w-[1200px] items-center  max-lg:gap-44 lg:grid-cols-2">
        <div className="absolute left-[30%] top-[180px] w-[150px] max-lg:rotate-90  lg:w-[200px]">
          <ContactShortLine />
        </div>

        <div className="">
          <h2 className="pb-4 text-4xl max-lg:pt-12 lg:text-5xl">
            Contact us at
          </h2>
          <p>We are at your disposal for whatever you need.</p>
        </div>
        <MotionShowWrapper direction="right" delay={0} duration={0.2}>
          <div className="mt-4    bg-[#cbcfc9]">
            <ContactForm lang={params.lang} dictionary={dictionary} />
          </div>
        </MotionShowWrapper>
      </div>
      <div className="relative mx-auto  max-w-[1200px] max-lg:hidden">
        <div>
          <h2 className="pt-24 text-3xl">Our offices</h2>
        </div>
        <Map />
      </div>
    </div>
  );
};

export default Page;
