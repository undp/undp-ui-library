import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from './label';

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'> & {
    label?: string;
    labelClassName?: string;
    textAreaClassName?: string;
  }
>(({ className, label, labelClassName, textAreaClassName, ...props }, ref) => {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label ? <Label className={labelClassName}>{label}</Label> : null}
      <textarea
        {...props}
        className={cn(
          'flex min-h-[60px] border-2 border-primary-black bg-transparent p-2.5 text-base transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          textAreaClassName,
        )}
        ref={ref}
      />
    </div>
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
