import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from './label';

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & {
    label?: string;
    labelClassName?: string;
    inputClassName?: string;
  }
>(
  (
    { className, type, label, labelClassName, inputClassName, ...props },
    ref,
  ) => {
    return (
      <div className={cn('flex flex-col gap-1.5', className)}>
        {label ? <Label className={labelClassName}>{label}</Label> : null}
        <input
          {...props}
          type={type}
          ref={ref}
          className={cn(
            'w-full border-2 border-primary-black bg-transparent p-2.5 text-base transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-25',
            inputClassName,
          )}
        />
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
