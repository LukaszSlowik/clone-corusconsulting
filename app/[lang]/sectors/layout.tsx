import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import type { Metadata } from "next";

export const metadata: Metadata = {};

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);
  return (
    <>
      <div className="">
        <div className=" bg-[#f9f8f8] px-2 pt-[130px] text-center dark:bg-[#414141] ">
          <h1 className="pb-12 text-3xl  md:text-5xl">
            {dictionary["sectors-title"]}
          </h1>
          <h2 className="px-4  text-xl">
            <span className="font-bold">CORUS</span>{" "}
            {dictionary["sectors-description-without-corus"]}
          </h2>
        </div>

        {children}
      </div>
    </>
  );
}
