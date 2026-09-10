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

        red: 'border-transparent bg-accent-red-light text-content-primary',
        orange: 'border-transparent bg-accent-orange-light text-content-primary',
        yellow: 'border-transparent bg-accent-yellow-light text-content-primary',
        lime: 'border-transparent bg-accent-lime-light text-content-primary',
        green: 'border-transparent bg-accent-green-light text-content-primary',
        teal: 'border-transparent bg-accent-teal-light text-content-primary',
        azure: 'border-transparent bg-accent-azure-light text-content-primary',
        blue: 'border-transparent bg-accent-blue-light text-content-primary',
        violet: 'border-transparent bg-accent-violet-light text-content-primary',
        pink: 'border-transparent bg-accent-pink-light text-content-primary',

        'sdg-1': 'border-transparent bg-sdg-1 text-content-reverse',
        'sdg-2': 'border-transparent bg-sdg-2 text-content-reverse',
        'sdg-3': 'border-transparent bg-sdg-3 text-content-reverse',
        'sdg-4': 'border-transparent bg-sdg-4 text-content-reverse',
        'sdg-5': 'border-transparent bg-sdg-5 text-content-reverse',
        'sdg-6': 'border-transparent bg-sdg-6 text-content-reverse',
        'sdg-7': 'border-transparent bg-sdg-7 text-content-reverse',
        'sdg-8': 'border-transparent bg-sdg-8 text-content-reverse',
        'sdg-9': 'border-transparent bg-sdg-9 text-content-reverse',
        'sdg-10': 'border-transparent bg-sdg-10 text-content-reverse',
        'sdg-11': 'border-transparent bg-sdg-11 text-content-reverse',
        'sdg-12': 'border-transparent bg-sdg-12 text-content-reverse',
        'sdg-13': 'border-transparent bg-sdg-13 text-content-reverse',
        'sdg-14': 'border-transparent bg-sdg-14 text-content-reverse',
        'sdg-15': 'border-transparent bg-sdg-15 text-content-reverse',
        'sdg-16': 'border-transparent bg-sdg-16 text-content-reverse',
        'sdg-17': 'border-transparent bg-sdg-17 text-content-reverse',

        male: 'border-transparent bg-categorical-male-light text-content-primary',
        female: 'border-transparent bg-categorical-female-light text-content-primary',
        urban: 'border-transparent bg-categorical-urban-light text-content-primary',
        rural: 'border-transparent bg-categorical-rural-light text-content-primary',
        child: 'border-transparent bg-categorical-child-light text-content-primary',
        adolescent: 'border-transparent bg-categorical-adolescent-light text-content-primary',
        'young-adult': 'border-transparent bg-categorical-young-adult-light text-content-primary',
        adult: 'border-transparent bg-categorical-adult-light text-content-primary',
        'older-adult': 'border-transparent bg-categorical-older-adult-light text-content-primary',

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
