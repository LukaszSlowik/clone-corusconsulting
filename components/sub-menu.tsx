import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { LuChevronDown } from "react-icons/lu";
import Link from "next/link";
type Props = {
  children?: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  scroll: boolean;
  trigger: React.ReactNode;
};

const SubMenu = ({ children, open, setOpen, trigger, scroll }: Props) => {
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="start"
          alignOffset={-10}
          className="relative z-[999] focus-visible:outline-none"
        >
          {children}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default SubMenu;
