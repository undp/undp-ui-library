import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import { LanguageSwitcherIcon } from '../../icons/icons';

const LanguageSelect = SelectPrimitive.Root;

const LanguageSelectGroup = SelectPrimitive.Group;

const LanguageSelectValue = SelectPrimitive.Value;

const LanguageSelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      'flex flex h-9 cursor-pointer items-center justify-between gap-2 whitespace-nowrap bg-transparent p-0 font-semibold text-secondary text-sm uppercase hover:text-secondary disabled:cursor-not-allowed disabled:opacity-disabled data-[placeholder]:text-content-placeholder rtl:[direction:rtl] [&>span]:line-clamp-1',
      '[&[data-state=open]>.lucide-chevron-down]:rotate-180',
      className,
    )}
    {...props}
  >
    <LanguageSwitcherIcon />
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className='h-6 w-6 transition-transform duration-200' />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
LanguageSelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const LanguageSelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & {
    inPortal?: boolean;
  }
>(({ className, children, position = 'popper', inPortal = false, ...props }, ref) => {
  const content = (
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] origin-[--radix-select-content-transform-origin] overflow-y-auto overflow-x-hidden rounded-md border bg-background text-popover-foreground shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in',
        position === 'popper' &&
          'data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  );

  if (inPortal) {
    return <SelectPrimitive.Portal>{content}</SelectPrimitive.Portal>;
  }
  return content;
});
LanguageSelectContent.displayName = SelectPrimitive.Content.displayName;

const LanguageSelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center border-stroke border-b px-4 py-3 font-semibold text-sm uppercase outline-none focus:bg-surface-md data-[disabled]:pointer-events-none data-[disabled]:opacity-disabled [&:last-of-type]:border-b-0',
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
  LanguageSelectContent,
  LanguageSelectGroup,
  LanguageSelectItem,
  LanguageSelectTrigger,
  LanguageSelectValue,
};
