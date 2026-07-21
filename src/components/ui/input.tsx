import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/lib/utils';

const inputVariants = cva(
  'w-full h-auto bg-background rounded-base text-content-primary text-base transition-colors file:border-0 file:bg-transparent file:font-regular file:text-content-primary focus-visible:outline-hidden focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-disabled placeholder:text-content-placeholder',
  {
    variants: {
      variant: {
        light: 'border border-stroke',
        normal: 'border-2 border-foreground',
      },
      rounded: {
        base: 'rounded',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        full: 'rounded-full',
      },
      inputSize: {
        sm: 'px-2.5 py-1',
        base: 'p-2.5',
      },
    },
    defaultVariants: {
      inputSize: 'base',
      variant: 'normal',
      rounded: 'base',
    },
  },
);

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>
>(({ className, inputSize, variant, ...props }, ref) => {
  return (
    <input {...props} ref={ref} className={cn(inputVariants({ inputSize, variant }), className)} />
  );
});
Input.displayName = 'Input';

export { Input };
