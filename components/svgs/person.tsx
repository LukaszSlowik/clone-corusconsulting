import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
};

const Person = ({ className }: Props) => {
  return (
    <svg
      className={cn(``, className)}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1682 18.1049C17.0691 18.0907 16.9416 18.0907 16.8282 18.1049C14.3349 18.0199 12.3516 15.9799 12.3516 13.4724C12.3516 10.9082 14.4199 8.82568 16.9982 8.82568C19.5624 8.82568 21.6449 10.9082 21.6449 13.4724C21.6307 15.9799 19.6616 18.0199 17.1682 18.1049Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M26.5498 27.455C24.0281 29.7641 20.6848 31.1666 17.0015 31.1666C13.3181 31.1666 9.97479 29.7641 7.45312 27.455C7.59479 26.1233 8.44479 24.82 9.96063 23.8C13.8423 21.2216 20.189 21.2216 24.0423 23.8C25.5581 24.82 26.4081 26.1233 26.5498 27.455Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M16.9987 31.1668C24.8227 31.1668 31.1654 24.8242 31.1654 17.0002C31.1654 9.17613 24.8227 2.8335 16.9987 2.8335C9.17466 2.8335 2.83203 9.17613 2.83203 17.0002C2.83203 24.8242 9.17466 31.1668 16.9987 31.1668Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default Person;
