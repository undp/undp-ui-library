import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React from 'react';

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
        'fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 animate-in overflow-hidden border border-stroke bg-surface p-2 text-content-primary text-sm data-[state=closed]:animate-out',
        className,
      )}
    />
  );

  return inPortal ? <TooltipPrimitive.Portal>{content}</TooltipPrimitive.Portal> : content;
});

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
