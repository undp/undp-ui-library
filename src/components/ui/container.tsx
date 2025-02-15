import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const containerVariants = cva('', {
  variants: {
    backgroundColor: {
      transparent: 'bg-primary-transparent',
      white: 'bg-primary-white',
      gray: 'bg-primary-gray-200',
      darkGray: 'bg-primary-gray-600',
      black: 'bg-primary-black',
      blue: 'bg-primary-blue-600',
      azure: 'bg-accent-azure',
      yellow: 'bg-accent-yellow',
      red: 'bg-accent-red',
      green: 'bg-accent-green',
    },
    layout: {
      flex: 'flex flex-row items-stretch flex-wrap',
      default: '',
    },
    width: {
      xs: 'w-1/4',
      sm: 'w-1/3',
      md: 'w-1/2',
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
      md: 'p-5',
      lg: 'p-6',
      xl: 'p-7',
      '2xl': 'p-8',
    },
    gap: {
      none: 'gap-0',
      '2xs': 'gap-1',
      xs: 'gap-2',
      sm: 'gap-3',
      base: 'gap-4',
      md: 'gap-5',
      lg: 'gap-6',
      xl: 'gap-7',
      '2xl': 'gap-8',
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
>(
  (
    { className, backgroundColor, layout, width, padding, gap, ...props },
    ref,
  ) => {
    return (
      <div
        {...props}
        className={cn(
          containerVariants({ backgroundColor, layout, width, padding, gap }),
          className,
        )}
        ref={ref}
      />
    );
  },
);
Container.displayName = 'Container';

export { Container };
