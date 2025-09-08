import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

type TooltipContentProps = React.ComponentProps<typeof TooltipPrimitive.Content> & {
  inPortal?: boolean;
};
const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(({ className, inPortal = false, sideOffset = 4, ...props }, ref) => {
  const content = (
    <TooltipPrimitive.Content
      {...props}
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden border border-primary-gray-300 dark:border-primary-gray-550 text-sm! bg-primary-gray-300 dark:bg-primary-gray-550 p-2 text-primary-black dark:text-primary-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
    />
  );

  return inPortal ? <TooltipPrimitive.Portal>{content}</TooltipPrimitive.Portal> : content;
});

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
