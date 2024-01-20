import type { Metadata } from "next";

export const metadata: Metadata = {};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className=" bg-[#f9f8f8]  pt-[130px] text-center dark:bg-[#2b2b2b] ">
        {children}
      </div>
    </>
  );
}
