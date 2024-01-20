import { cn } from "@/lib/utils";
import React from "react";

type TwoColumnsWrapper = {
  children: React.ReactNode;
  className?: string;
};
type LeftColumn = {
  children: React.ReactNode;
  className?: string;
};
type RightColumn = {
  children: React.ReactNode;
  className?: string;
};

const TwoColumnsWrapper = ({ children, className }: TwoColumnsWrapper) => {
  return (
    <div
      className={cn(
        `mx-auto flex max-w-[1200px] gap-12   px-4 py-20 max-lg:flex-col`,

        className,
      )}
    >
      {children}
    </div>
  );
};

const LeftColumn = ({ children, className }: LeftColumn) => {
  return (
    <div
      className={cn(
        `basic-full min-w-0 grow-0 space-y-4   lg:shrink-0 lg:basis-1/2`,
        className,
      )}
    >
      {children}
    </div>
  );
};
const RightColumn = ({ children, className }: RightColumn) => {
  return (
    <div className={cn(`max-w-[600px] flex-grow `, className)}>{children}</div>
  );
};

TwoColumnsWrapper.LeftColumn = LeftColumn;
TwoColumnsWrapper.RightColumn = RightColumn;

export default TwoColumnsWrapper;
