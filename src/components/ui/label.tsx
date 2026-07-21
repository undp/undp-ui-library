import * as LabelPrimitive from '@radix-ui/react-label';
import React from 'react';

import { cn } from '@/lib/utils';

const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    {...props}
    ref={ref}
    className={cn(
      'm-0 block p-0 text-content-primary text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-disabled',
      className,
    )}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
