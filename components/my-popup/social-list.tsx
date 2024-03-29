import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type SocialType = {
  name: string;
  url: string;
  icon: string;
};
type Props = {
  className?: string;
  socialArray: SocialType[];
};

const SocialList = ({ socialArray, className }: Props) => {
  return (
    <ul className={cn(`flex  px-4`, className)}>
      {socialArray.map((item) => (
        <li
          key={item.name}
          className="p-1 transition-colors duration-700 hover:bg-red-600"
        >
          <a
            href={item.url}
            title={item.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={24}
              height={24}
              className="h-full w-full"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
