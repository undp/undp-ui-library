import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
 
import { LanguageSwitcherIcon } from "../../icons/icons";

import { cn } from "@/lib/utils";
 
const LanguageSelect = SelectPrimitive.Root;
 
const LanguageSelectGroup = SelectPrimitive.Group;
 
const LanguageSelectValue = SelectPrimitive.Value;
 
const LanguageSelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 flex gap-2 rtl:[direction:rtl] items-center text-primary-blue-600 dark:text-primary-white uppercase font-semibold text-sm justify-between whitespace-nowrap bg-transparent p-0 shadow-sm data-[placeholder]:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    <LanguageSwitcherIcon />
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className='h-6 w-6' />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
LanguageSelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
 
const LanguageSelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({
  className, children, position = "popper", ...props 
}, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-primary-white dark:bg-primary-gray-650 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
LanguageSelectContent.displayName = SelectPrimitive.Content.displayName;
 
const LanguageSelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center py-3 px-4 text-sm uppercase font-semibold outline-none border-b border-primary-gray-400 [&:last-of-type]:border-b-0 dark:border-primary-gray-550 focus:bg-primary-gray-400 dark:focus:bg-primary-gray-550  data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className='absolute right-2 flex h-3.5 w-3.5 items-center justify-center'>
      <SelectPrimitive.ItemIndicator>
        <Check className='h-4 w-4' />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
LanguageSelectItem.displayName = SelectPrimitive.Item.displayName;
 
export {
  LanguageSelect,
  LanguageSelectGroup,
  LanguageSelectValue,
  LanguageSelectTrigger,
  LanguageSelectContent,
  LanguageSelectItem,
};