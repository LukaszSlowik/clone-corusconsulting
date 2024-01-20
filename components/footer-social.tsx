"use client";
import React from "react";
import Yt from "./svgs/yt";
import Tw from "./svgs/tw";
import Ln from "./svgs/ln";
import MyPresentationPopup from "./my-popup/my-presentation-popup";

type Props = {};

const FooterSocial = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="mx-2 flex items-center gap-2 fill-white stroke-white">
      <MyPresentationPopup open={open} setOpen={setOpen} />
      <button onClick={() => setOpen(true)}>
        <Yt className="hover:opacity-50 " />
      </button>
      <button onClick={() => setOpen(true)}>
        <Tw className="hover:opacity-50 " />
      </button>
      <button className="" onClick={() => setOpen(true)}>
        <Ln className="hover:opacity-50 " />
      </button>
    </div>
  );
};

export default FooterSocial;
