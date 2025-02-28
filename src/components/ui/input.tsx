import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const inputVariants = cva(
  'w-full bg-primary-white dark:bg-primary-gray-700 text-primary-black dark:text-primary-white text-base transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground dark:file:text-primary-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        light:
          'border border-primary-gray-400 dark:border-primary-gray-200 placeholder:text-primary-gray-400 dark:placeholder:text-primary-gray-550',
        normal:
          'border-2 border-primary-black dark:border-primary-gray-100 placeholder:text-muted-foreground dark:placeholder:text-primary-gray-550',
      },
      size: {
        sm: 'px-2.5 py-1',
        base: 'p-2.5 ',
      },
    },
    defaultVariants: {
      size: 'base',
      variant: 'normal',
    },
  },
);

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> &
    VariantProps<typeof inputVariants>
>(({ className, size, variant, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={cn(inputVariants({ size, variant }), className)}
    />
  );
});
Input.displayName = 'Input';

export { Input };
