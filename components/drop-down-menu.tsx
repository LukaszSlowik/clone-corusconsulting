"use client";
import React from "react";
import * as Popover from "@radix-ui/react-popover";
type Props = {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
};

const DropDownMenu = ({ children, open, setOpen }: Props) => {
  console.log("Open in DropDownMenu: ", open);
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      {children}
    </Popover.Root>
  );
};

type DorpDownMenuTriggerProps = {
  children: React.ReactNode;
};

// const DropDownMenuTrigger = ({ children }: DorpDownMenuTriggerProps) => {
//   return <Popover.Trigger asChild>{children}</Popover.Trigger>;
// };
const DropDownArrow = React.forwardRef<
  React.ElementRef<typeof Popover.Arrow>,
  React.ComponentPropsWithoutRef<typeof Popover.Arrow>
>((props, ref) => (
  <Popover.Arrow
    asChild
    ref={ref}
    {...props}
    // className="text-black dark:text-white"
    // style={{
    //   fill: "currentColor",
    // }}
  />
));
DropDownArrow.displayName = "DropDownArrow";

type DropDownMenuContentProps = {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
};

const DropDownMenuContent = React.forwardRef<
  React.ElementRef<typeof Popover.Content>,
  React.ComponentPropsWithoutRef<typeof Popover.Content> &
    DropDownMenuContentProps
>(({ className, align = "left", setOpen, open, ...props }, ref) => (
  <Popover.Portal forceMount>
    <Popover.Content
      ref={ref}
      {...props}
      //   onMouseLeave={(e) => {
      //     console.log("Mouse leave: ", e);
      //     setOpen(false);
      //   }}
    >
      {props.children}
    </Popover.Content>
  </Popover.Portal>
));
DropDownMenuContent.displayName = "DropDownMenuContent";

//DropDownMenu.Trigger = DropDownMenuTrigger;
DropDownMenu.Arrow = DropDownArrow;
DropDownMenu.Content = DropDownMenuContent;

export default DropDownMenu;
