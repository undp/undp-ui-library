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
      'surface': 'bg-surface text-content-primary',
      'surface-2xs': 'bg-surface-2xs text-content-primary',
      'surface-xs': 'bg-surface-xs text-content-primary',
      'surface-sm': 'bg-surface-sm text-content-primary',
      'surface-md': 'bg-surface-md text-content-primary',
      'surface-lg': 'bg-surface-lg text-content-primary',
      'surface-xl': 'bg-surface-xl text-content-reverse',
      'surface-2xl': 'bg-surface-2xl text-content-reverse',
      'surface-3xl': 'bg-surface-3xl text-content-reverse',
      'surface-4xl': 'bg-surface-4xl text-content-reverse',
      'sgd-1': 'bg-sdg-1 text-content-reverse',
      'sgd-2': 'bg-sdg-2 text-content-reverse',
      'sgd-3': 'bg-sdg-3 text-content-reverse',
      'sgd-4': 'bg-sdg-4 text-content-reverse',
      'sgd-5': 'bg-sdg-5 text-content-reverse',
      'sgd-6': 'bg-sdg-6 text-content-reverse',
      'sgd-7': 'bg-sdg-7 text-content-reverse',
      'sgd-8': 'bg-sdg-8 text-content-reverse',
      'sgd-9': 'bg-sdg-9 text-content-reverse',
      'sgd-10': 'bg-sdg-10 text-content-reverse',
      'sgd-11': 'bg-sdg-11 text-content-reverse',
      'sgd-12': 'bg-sdg-12 text-content-reverse',
      'sgd-13': 'bg-sdg-13 text-content-reverse',
      'sgd-14': 'bg-sdg-14 text-content-reverse',
      'sgd-15': 'bg-sdg-15 text-content-reverse',
      'sgd-16': 'bg-sdg-16 text-content-reverse',
      'sgd-17': 'bg-sdg-17 text-content-reverse',
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
