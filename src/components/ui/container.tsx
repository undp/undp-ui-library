import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/lib/utils';

const containerVariants = cva('box-border', {
  variants: {
    backgroundColor: {
      transparent: 'bg-transparent text-content-primary',
      background: 'bg-background text-content-primary',
      'background-soft': 'bg-background-soft text-content-primary',
      foreground: 'bg-foreground text-content-reverse',
      'foreground-soft': 'bg-foreground-soft text-content-reverse',

      primary: 'bg-primary text-content-reverse',
      secondary: 'bg-secondary text-content-reverse',
      tertiary: 'bg-tertiary text-content-reverse',
      quaternary: 'bg-quaternary text-content-primary',

      success: 'bg-success text-content-reverse',
      warning: 'bg-warning text-content-primary',
      info: 'bg-info text-content-reverse',
      error: 'bg-error text-content-reverse',

      surface: 'bg-surface text-content-primary',
      'surface-2xs': 'bg-surface-2xs text-content-primary',
      'surface-xs': 'bg-surface-xs text-content-primary',
      'surface-sm': 'bg-surface-sm text-content-primary',
      'surface-md': 'bg-surface-md text-content-primary',
      'surface-lg': 'bg-surface-lg text-content-primary',
      'surface-xl': 'bg-surface-xl text-content-reverse',
      'surface-2xl': 'bg-surface-2xl text-content-reverse',
      'surface-3xl': 'bg-surface-3xl text-content-reverse',
      'surface-4xl': 'bg-surface-4xl text-content-reverse',

      'sdg-1': 'bg-sdg-1 text-content-reverse',
      'sdg-2': 'bg-sdg-2 text-content-reverse',
      'sdg-3': 'bg-sdg-3 text-content-reverse',
      'sdg-4': 'bg-sdg-4 text-content-reverse',
      'sdg-5': 'bg-sdg-5 text-content-reverse',
      'sdg-6': 'bg-sdg-6 text-content-reverse',
      'sdg-7': 'bg-sdg-7 text-content-reverse',
      'sdg-8': 'bg-sdg-8 text-content-reverse',
      'sdg-9': 'bg-sdg-9 text-content-reverse',
      'sdg-10': 'bg-sdg-10 text-content-reverse',
      'sdg-11': 'bg-sdg-11 text-content-reverse',
      'sdg-12': 'bg-sdg-12 text-content-reverse',
      'sdg-13': 'bg-sdg-13 text-content-reverse',
      'sdg-14': 'bg-sdg-14 text-content-reverse',
      'sdg-15': 'bg-sdg-15 text-content-reverse',
      'sdg-16': 'bg-sdg-16 text-content-reverse',
      'sdg-17': 'bg-sdg-17 text-content-reverse',

      male: 'bg-categorical-male text-content-reverse',
      female: 'bg-categorical-female text-content-reverse',
      urban: 'bg-categorical-urban text-content-reverse',
      rural: 'bg-categorical-rural text-content-reverse',

      red: 'bg-accent-red text-content-reverse',
      orange: 'bg-accent-orange text-content-reverse',
      yellow: 'bg-accent-yellow text-content-reverse',
      lime: 'bg-accent-lime text-content-reverse',
      green: 'bg-accent-green text-content-reverse',
      teal: 'bg-accent-teal text-content-reverse',
      azure: 'bg-accent-azure text-content-reverse',
      blue: 'bg-accent-blue text-content-reverse',
      violet: 'bg-accent-violet text-content-reverse',
      pink: 'bg-accent-pink text-content-reverse',
    },
    layout: {
      flex: 'flex flex-row items-stretch flex-wrap',
      default: '',
    },
    width: {
      xs: 'w-1/4',
      sm: 'w-1/3',
      base: 'w-1/2',
      lg: 'w-2/3',
      xl: 'w-3/4',
      full: 'w-full',
    },
    padding: {
      none: 'p-0',
      '2xs': 'p-1',
      xs: 'p-2',
      sm: 'p-3',
      base: 'p-4',
      lg: 'p-5',
      xl: 'p-6',
      '2xl': 'p-7',
      '3xl': 'p-8',
    },
    gap: {
      none: 'gap-0',
      '2xs': 'gap-1',
      xs: 'gap-2',
      sm: 'gap-3',
      base: 'gap-4',
      lg: 'gap-5',
      xl: 'gap-6',
      '2xl': 'gap-7',
      '3xl': 'gap-8',
    },
  },
  defaultVariants: {
    backgroundColor: 'transparent',
    layout: 'default',
    padding: 'base',
    gap: 'none',
    width: 'full',
  },
});

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof containerVariants>
>(({ className, backgroundColor, layout, width, padding, gap, ...props }, ref) => {
  return (
    <div
      {...props}
      className={cn(
        containerVariants({
          backgroundColor,
          layout,
          width,
          padding,
          gap,
        }),
        className,
      )}
      ref={ref}
    />
  );
});
Container.displayName = 'Container';

export { Container };
