import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const containerVariants = cva('', {
  variants: {
    backgroundColor: {
      transparent:
        'bg-primary-transparent text-primary-black dark:text-primary-white',
      white:
        'bg-primary-white dark:bg-primary-gray-700 text-primary-black dark:text-primary-white',
      gray: 'bg-primary-gray-200 dark:bg-primary-gray-600 text-primary-black dark:text-primary-white',
      'dark-gray':
        'bg-primary-gray-600 dark:bg-primary-gray-300 text-primary-white dark:text-primary-black',
      black:
        'bg-primary-gray-700 dark:bg-primary-gray-100 text-primary-white dark:text-primary-black',
      blue: 'bg-primary-blue-600 dark:bg-primary-blue-500 text-primary-white',
      azure: 'bg-accent-azure',
      yellow: 'bg-accent-yellow',
      red: 'bg-accent-red text-primary-white',
      green: 'bg-accent-green',
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
