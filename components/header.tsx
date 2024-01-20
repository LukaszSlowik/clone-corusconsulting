"use client";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LuSun, LuMoon, LuChevronDown } from "react-icons/lu";
import CorusHeaderLogo from "./corus-header-logo";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import Link from "next/link";
import LocalSwitcher from "./local-switcher";
import { Locale, i18n } from "@/i18n.config";
import { DictionaryType } from "@/lib/dictionary";
import { SubLinksType } from "@/app/[lang]/layout";
import MyPresentationPopup from "./my-popup/my-presentation-popup";
import Person from "./svgs/person";
import Hamburger from "./hamburger";
import MobileNav from "./mobile-nav";
type Props = {
  lang: Locale;
  dictionary: DictionaryType;
  navSubLinks: SubLinksType[];
};

const Header = ({ lang, dictionary, navSubLinks }: Props) => {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scroll, setScroll] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const pathName = usePathname();
  //console.log("PathName: ", pathName);

  useEffect(() => {
    if (pathName.length != 3) {
      setScroll(true);
    }
  }, [pathName, scroll]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    //        console.log("Page scroll: ", latest);
    if (latest > 100 && !scroll) {
      setScroll(true);
    }
    if (latest < 100 && scroll) {
      setScroll(false);
    }
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const contact = dictionary?.contact;

  return (
    <header
      className={cn(
        `fixed left-0 right-0 top-0  z-[999] h-[72px] bg-transparent transition-colors duration-500 ease-in-out `,
        scroll && `bg-white shadow-header dark:bg-[#2b2b2b]`,
      )}
    >
      <div className="">
        <MyPresentationPopup open={open} setOpen={setOpen} />
        <Link href={`/${lang}`}>
          <CorusHeaderLogo
            className={cn(
              `stroke-[#3FAE29]`,

              !scroll && `stroke-white`,
            )}
            classNameText={cn(
              ``,
              !scroll && `fill-white`,
              scroll && `fill-black dark:fill-white`,
            )}
          />{" "}
        </Link>
      </div>
      <div className="flex h-full items-center justify-end">
        <Navbar
          scroll={scroll}
          dictionary={dictionary}
          lang={lang}
          navSubLinks={navSubLinks}
          openMobile={openMobile}
          setOpenMobile={setOpenMobile}
        />
        <div className="p-4">
          <button
            onClick={() => setTheme("dark")}
            className={cn(
              ` block   hover:text-primary dark:hidden  `,
              !scroll && `text-white`,
            )}
          >
            <LuSun />
          </button>

          <button
            onClick={() => setTheme("light")}
            className={cn(` hidden hover:text-primary dark:block`)}
          >
            <LuMoon />
          </button>
        </div>
        <Link
          href={`/${lang}/contact`}
          className={cn(
            `block   px-4 py-2  font-bold transition-colors   duration-500 ease-in-out hover:text-[#697e8d] max-lg:hidden  dark:hover:text-primary`,
            scroll && `text-dark dark:text-white`,
          )}
        >
          {contact}
        </Link>
        <button className="max-lg:hidden" onClick={() => setOpen(true)}>
          <Person
            className={cn(
              `  mr-12 flex h-full items-center gap-1 stroke-white transition-transform duration-300 focus-visible:outline-none   `,
              `hover:translate-y-[-1px] hover:stroke-primary  `,
              open && !scroll && `translate-y-[-2px] stroke-primary  `,
              open && scroll && `stroke-[#697e8d] dark:stroke-primary`,
              !open && scroll && `stroke-dark dark:stroke-white`,
            )}
          />
        </button>
        <LocalSwitcher lang={lang} scroll={scroll} />
        <Hamburger
          openMobile={openMobile}
          setOpenMobile={setOpenMobile}
          scroll={scroll}
        />
        <MobileNav
          lang={lang}
          openMobile={openMobile}
          setOpenMobile={setOpenMobile}
          navSubLinks={navSubLinks}
        />
      </div>
    </header>
  );
};

export default Header;
