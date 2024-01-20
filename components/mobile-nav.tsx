"use client";
import React, { useState } from "react";
import CorusHeaderLogo from "./corus-header-logo";
import { cn } from "@/lib/utils";
import { LuChevronDown } from "react-icons/lu";
import { SubLinksType } from "@/app/[lang]/layout";
import Link from "next/link";
import MyPresentationPopup from "./my-popup/my-presentation-popup";
import { Locale } from "@/i18n.config";

type Props = {
  navSubLinks: SubLinksType[];
  openMobile: boolean;
  setOpenMobile: React.Dispatch<React.SetStateAction<boolean>>;
  lang: Locale;
};

type ShowSubLinksType = {
  show: boolean;
};

const MobileNav = ({ navSubLinks, setOpenMobile, openMobile, lang }: Props) => {
  const [showSubLinks, setShowSubLinks] = useState<ShowSubLinksType[]>(
    Array.from({ length: navSubLinks.length }, () => ({ show: false })),
  );
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <div
      className={cn(
        `  fixed bottom-[40px] left-0 right-0 top-0  overflow-y-auto overflow-x-hidden   bg-[#cbcfc9] transition-all duration-500 ease-in-out   lg:hidden`,
        openMobile && ` translate-x-0 `,
        !openMobile && `translate-x-[100%]`,
      )}
    >
      <MyPresentationPopup open={openPopUp} setOpen={setOpenPopUp} />
      <CorusHeaderLogo
        className={cn(`stroke-[#3FAE29]`)}
        classNameText={cn(`fill-white`)}
      />
      <div className="py-4 text-2xl font-bold text-white">
        <ul className="flex flex-col items-center justify-center gap-4 pt-[20%]">
          {navSubLinks.map((spanLink, index) => (
            <li
              key={index}
              className="group cursor-pointer   xxs:min-w-[300px] "
            >
              <button
                onClick={() => {
                  const newShowSubLinks = [...showSubLinks];
                  newShowSubLinks[index].show = !newShowSubLinks[index].show;
                  setShowSubLinks(newShowSubLinks);
                }}
                className=" flex items-center justify-center gap-2 transition-all duration-300 group-hover:text-primary"
              >
                <span className="">{spanLink.title}</span>{" "}
                <LuChevronDown className="transition duration-300 group-hover:rotate-180" />
              </button>
              {showSubLinks[index].show && (
                <ul className="flex flex-col gap-2 py-4 pl-6  ">
                  {spanLink.subLinks.map((subLink, index) => (
                    <li
                      onClick={() => setOpenMobile(false)}
                      key={index}
                      className=" hover:text-primary"
                    >
                      {subLink.href.includes("positions") ? (
                        <button
                          onClick={() => {
                            setOpenPopUp(true);
                          }}
                          className="inline-block w-full px-4 py-4 text-left text-base outline-none transition     hover:text-primary"
                        >
                          {subLink.title}
                        </button>
                      ) : (
                        <Link href={subLink.href} className="text-base ">
                          {subLink.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="group cursor-pointer   xxs:min-w-[300px]">
            <Link
              onClick={() => setOpenMobile(false)}
              href={`/${lang}/contact`}
            >
              Contact
            </Link>
          </li>

          {/* <li className="group cursor-pointer ">
            <div className=" flex items-center justify-center gap-2 transition-all duration-300 group-hover:text-primary">
              <span className="">Solution</span>{" "}
              <LuChevronDown className="transition duration-300 group-hover:rotate-180" />
            </div>
            <ul className="hidden flex-col gap-2 pl-6 group-hover:flex ">
              <li className="hover:text-primary">test</li>
              <li className="hover:text-primary">test</li>
              <li className="hover:text-primary">test</li>
            </ul>
          </li>
          <li className="group cursor-pointer ">
            <div className=" flex items-center justify-center gap-2 transition-all duration-300 group-hover:text-primary">
              <span className="">Solution</span>{" "}
              <LuChevronDown className="transition duration-300 group-hover:rotate-180" />
            </div>
            <ul className="hidden flex-col gap-2 pl-6 group-hover:flex ">
              <li className="hover:text-primary">test</li>
              <li className="hover:text-primary">test</li>
              <li className="hover:text-primary">test</li>
            </ul>
          </li>
          <li className="group cursor-pointer ">
            <div className=" flex items-center justify-center gap-2 transition-all duration-300 group-hover:text-primary">
              <span className="">Solution</span>{" "}
              <LuChevronDown className="transition duration-300 group-hover:rotate-180" />
            </div>
            <ul className="hidden flex-col gap-2 pl-6 group-hover:flex ">
              <li className="hover:text-primary">test</li>
              <li className="hover:text-primary">test</li>
              <li className="hover:text-primary">test</li>
            </ul>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
