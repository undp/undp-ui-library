import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center border-1 px-2.5 py-0.5 font-normal transition-colors focus:outline-hidden',
  {
    variants: {
      variant: {
        'surface-sm': 'border-transparent bg-surface-sm text-content-primary',
        surface: 'border-transparent bg-surface-md text-content-primary',
        'surface-xl': 'border-transparent bg-surface-xl text-content-reverse',
        primary: 'border-transparent bg-primary-light text-content-primary',
        secondary: 'border-transparent bg-secondary-light text-content-primary',
        tertiary: 'border-transparent bg-tertiary-light text-content-primary',
        quaternary: 'border-transparent bg-quaternary-light text-content-primary',
        warning: 'border-transparent bg-warning-light text-content-primary',
        success: 'border-transparent bg-success-light text-content-primary',
        error: 'border-transparent bg-error-light text-content-primary',
        info: 'border-transparent bg-info-light text-content-primary',
        outline: 'border-stroke text-content-secondary',
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
      size: {
        base: 'text-base',
        sm: 'text-sm',
        xs: 'text-xs',
        lg: 'text-lg',
        xl: 'text-xl',
      },
    },
    defaultVariants: {
      variant: 'surface-sm',
      size: 'base',
      rounded: 'full',
    },
  },
);

function Badge({
  className,
  rounded,
  variant,
  size,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div {...props} className={cn(badgeVariants({ variant, rounded, size }), className)} />;
}

export { Badge };
