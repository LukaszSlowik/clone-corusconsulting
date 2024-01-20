import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

const Yt = ({ className }: Props) => {
  return (
    <svg
      width="36"
      height="36"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 36 36"
      xmlSpace="preserve"
      className={cn(`overflow-visible`, className)}
    >
      <g>
        <path
          d="M17.9,0C8,0,0,8,0,17.9s8,17.9,17.9,17.9s17.9-8,17.9-17.9S27.8,0,17.9,0z M29.9,24c-0.1,0.5-0.4,1-0.8,1.4
          c-0.4,0.4-0.9,0.7-1.4,0.8c-1.9,0.5-9.8,0.5-9.8,0.5s-7.8,0-9.8-0.5c-0.5-0.1-1-0.4-1.4-0.8C6.4,25,6.1,24.5,6,24
          c-0.7-4-0.7-8.1,0-12.1c0.1-0.5,0.4-1,0.8-1.4c0.4-0.4,0.9-0.7,1.4-0.8c1.9-0.5,9.8-0.5,9.8-0.5s7.8,0,9.7,0.5
          c0.5,0.1,1,0.4,1.4,0.8c0.4,0.4,0.7,0.9,0.8,1.4l0,0C30.6,15.9,30.6,20,29.9,24z"
        ></path>
        <polygon points="15.4,21.6 21.9,17.9 15.4,14.2 	"></polygon>
      </g>
    </svg>
  );
};

export default Yt;
