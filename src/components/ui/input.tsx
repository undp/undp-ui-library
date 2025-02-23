import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Label } from './label';

const inputVariants = cva(
  'w-full border-2 border-primary-black bg-transparent text-base transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-25',
  {
    variants: {
      size: {
        sm: 'px-2.5 py-1',
        base: 'p-2.5 ',
      },
    },
    defaultVariants: {
      size: 'base',
    },
  },
);

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> &
    VariantProps<typeof inputVariants> & {
      label?: string;
      labelClassName?: string;
      inputClassName?: string;
      size?: 'sm' | 'base';
    }
>(
  (
    { className, size, label, labelClassName, inputClassName, ...props },
    ref,
  ) => {
    return (
      <div className={cn('flex flex-col gap-1.5', className)}>
        {label ? <Label className={labelClassName}>{label}</Label> : null}
        <input
          {...props}
          ref={ref}
          className={cn(inputVariants({ size }), inputClassName)}
        />
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
