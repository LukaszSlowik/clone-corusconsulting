"use client";
import Link from "next/link";
import React from "react";
import MyPresentationPopup from "./my-popup/my-presentation-popup";

type Props = {
  terms: string;
  privacy: string;
  cookies: string;
};

const FooterLinks = ({ terms, privacy, cookies }: Props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center justify-between gap-8 text-sm">
      <MyPresentationPopup open={open} setOpen={setOpen} />
      <div>
        <button onClick={() => setOpen(true)}>{terms} </button>
      </div>
      <div>
        <button onClick={() => setOpen(true)}>{privacy}</button>
      </div>
      <div>
        <button onClick={() => setOpen(true)}>{cookies}</button>
      </div>
    </div>
  );
};

export default FooterLinks;
