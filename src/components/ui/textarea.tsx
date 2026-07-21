import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/lib/utils';

const inputVariants = cva(
  'flex w-full min-h-[60px] text-normal text-base bg-background text-content-primary p-2.5 text-base transition-colors file:border-0 file:bg-transparent file:font-medium file:text-content-primary focus-visible:outline-hidden focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-disabled placeholder:text-content-placeholder',
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
    },
    defaultVariants: { variant: 'normal', rounded: 'base' },
  },
);
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & VariantProps<typeof inputVariants>
>(({ className, variant, placeholder, ...props }, ref) => {
  return (
    <textarea
      {...props}
      placeholder={placeholder || 'Text here...'}
      className={cn(inputVariants({ variant }), className)}
      ref={ref}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
