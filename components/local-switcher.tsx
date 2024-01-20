"use client";
import React from "react";
import * as Dropdown from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { Locale, i18n } from "@/i18n.config";
import { cn } from "@/lib/utils";
import { LuChevronDown } from "react-icons/lu";
import { usePathname } from "next/navigation";
import DropDownRadix from "./drop-down";
type Props = {
  lang: Locale;
  className?: string;
  scroll: boolean;
};

const LocalSwitcher = ({ lang, className, scroll }: Props) => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const redirectPathName = (lang: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = lang;
    return segments.join("/");
  };

  return (
    <>
      <DropDownRadix
        open={open}
        setOpen={setOpen}
        scroll={scroll}
        trigger={
          <button
            onClick={() => setOpen(true)}
            onMouseEnter={() => setOpen(true)}
            // onMouseLeave={(e) => {
            //   //console.log("Mouse leave: ", e);
            //   setOpen(false);
            // }}
            className={cn(
              `mr-12  flex h-full items-center gap-1 text-white transition-transform duration-300 focus-visible:outline-none max-xxs:mr-2   `,
              open && !scroll && `translate-y-[-2px] text-primary  `,
              open && scroll && `text-[#697e8d] dark:text-primary`,
              !open && scroll && `text-dark dark:text-white`,
            )}
          >
            <span className="font-bold uppercase">{lang}</span>{" "}
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
            //console.log("Mouse leave: ", e);
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

          {i18n.locales.map((locale, index) => {
            let language = locale === "en" ? "English" : "Español";
            return (
              <DropDownRadix.Item key={locale}>
                <Link
                  className="relative block  px-8 py-4 transition  hover:bg-[#e6e6e6] hover:text-[#697e8d] dark:hover:bg-white dark:hover:text-primary"
                  href={redirectPathName(locale)}
                >
                  {language}
                </Link>
              </DropDownRadix.Item>
            );
          })}
        </div>
      </DropDownRadix>
    </>
  );
};

export default LocalSwitcher;
