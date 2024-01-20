"use client";

import React from "react";
import { LuChevronDown } from "react-icons/lu";

import { cn } from "@/lib/utils";
import Link from "next/link";
import SubMenu from "./sub-menu";

import { DictionaryType } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import { SubLinksType } from "@/app/[lang]/layout";
import MyPresentationPopup from "./my-popup/my-presentation-popup";

type Props = {
  scroll: boolean;
  dictionary: DictionaryType;
  lang: Locale;
  navSubLinks: SubLinksType[];
  openMobile: boolean;
  setOpenMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ scroll, navSubLinks, openMobile, setOpenMobile }: Props) => {
  const [openPopUp, setOpenPopUp] = React.useState(false);

  return (
    <>
      <MyPresentationPopup open={openPopUp} setOpen={setOpenPopUp} />
      <ul
        className={cn(
          ` flex h-full items-center justify-between gap-8 text-white max-lg:hidden`,
          scroll && `text-dark  dark:text-white`,
        )}
      >
        {navSubLinks.map((link) => (
          <li key={link.title} className=" h-full">
            <SpanNav
              scroll={scroll}
              spanLink={link}
              openPopUp={openPopUp}
              setOpenPopUp={setOpenPopUp}
            />
          </li>
        ))}
      </ul>

      {/* <div
        className={cn(
          `  fixed left-0 right-0 top-0  h-[100vh] bg-[#cbcfc9] transition-all duration-500   ease-in-out`,
          openMobile && ` translate-x-0 `,
          !openMobile && `translate-x-[100%]`,
        )}
      >
        <CorusHeaderLogo
          className={cn(`stroke-[#3FAE29]`)}
          classNameText={cn(`fill-white`)}
        />
        <div className="text-2xl font-bold text-white">
          <ul className="flex flex-col items-center justify-center gap-4 pt-[20%]">
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
          </ul>
        </div>
      </div> */}
    </>
  );
};

type PropsSpanNav = {
  scroll: boolean;

  spanLink: SubLinksType;
  openPopUp: boolean;
  setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpanNav = ({
  scroll,
  openPopUp,
  setOpenPopUp,
  spanLink,
}: PropsSpanNav) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <SubMenu
        open={open}
        setOpen={setOpen}
        scroll={scroll}
        trigger={
          <button
            onClick={() => setOpen(true)}
            onMouseEnter={() => setOpen(true)}
            className={cn(
              `  flex h-full items-center gap-1 transition-transform duration-300 focus-visible:outline-none   `,
              open && !scroll && `translate-y-[-2px] text-primary  `,
              open &&
                scroll &&
                `translate-y-[-2px] text-[#697e8d] dark:text-primary`,
            )}
          >
            <span className="font-bold">{spanLink.title}</span>{" "}
            <LuChevronDown
              className={cn(
                `h-6 w-6 overflow-hidden transition-all duration-500`,
                open && `rotate-180 `,
              )}
            />
          </button>
        }
      >
        <div
          onMouseLeave={(e) => {
            //("Mouse leave: ", e);
            setOpen(false);
          }}
          className={cn(
            `relative border-[3px]  bg-dark font-bold text-white opacity-90 shadow-dropdownMenu `,
            scroll &&
              ` border-none bg-white text-dark opacity-100 dark:bg-dark dark:text-white`,
          )}
        >
          <div
            className={cn(
              `absolute left-[30px] top-[-10px] h-[16px] w-[16px] rotate-45 border-l-[3px]  border-t-[3px]  border-b-white border-l-white border-r-white border-t-white bg-dark`,
              scroll && `hidden`,
            )}
          ></div>
          <ul className=" relative z-[999]  h-full ">
            {spanLink.subLinks.map((subLink) => (
              <li
                key={subLink.title}
                className=" flex  min-w-[160px]"
                onClick={() => {
                  setOpen(false);
                }}
              >
                {subLink.href.includes("positions") ? (
                  <button
                    onClick={() => {
                      setOpenPopUp(true);
                    }}
                    className="inline-block w-full px-4 py-4 text-left text-sm outline-none transition  hover:bg-[#e6e6e6] hover:text-[#697e8d] dark:hover:bg-white dark:hover:text-primary"
                  >
                    {subLink.title}
                  </button>
                ) : (
                  <Link
                    href={subLink.href}
                    className="inline-block w-full px-4 py-4 text-sm transition  hover:bg-[#e6e6e6] hover:text-[#697e8d] dark:hover:bg-white dark:hover:text-primary"
                  >
                    {subLink.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </SubMenu>
    </>
  );
};

export default Navbar;
