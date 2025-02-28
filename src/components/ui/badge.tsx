import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border-2 px-2.5 py-0.5 font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        'light-gray':
          'border-transparent bg-primary-gray-300 dark:bg-primary-gray-600 text-primary-black dark:text-primary-white',
        gray: 'border-transparent bg-primary-gray-400 dark:bg-primary-gray-550 text-primary-black dark:text-primary-white',
        'dark-gray':
          'border-transparent bg-primary-gray-600 dark:bg-primary-gray-200 text-primary-white dark:text-primary-black',
        blue: 'border-transparent bg-primary-blue-200 text-primary-black dark:bg-primary-blue-500 dark:text-primary-white',
        yellow:
          'border-transparent bg-accent-light-yellow text-primary-black dark:bg-accent-dark-yellow dark:text-primary-black',
        green:
          'border-transparent bg-accent-light-green text-primary-black dark:bg-accent-dark-green dark:text-primary-white',
        red: 'border-transparent bg-accent-light-red text-primary-black dark:bg-accent-dark-red dark:text-primary-white',
        azure:
          'border-transparent bg-accent-light-azure text-primary-black dark:bg-accent-dark-azure dark:text-primary-white',
        outline:
          'border-primary-gray-400 dark:border-primary-gray-500 text-primary-gray-600 dark:text-primary-gray-200',
      },
      size: {
        base: '!text-base',
        sm: '!text-sm',
        xs: '!text-xs',
        lg: '!text-lg',
        xl: '!text-xl',
      },
    },
    defaultVariants: {
      variant: 'light-gray',
      size: 'base',
    },
  },
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      {...props}
      className={cn(badgeVariants({ variant, size }), className)}
    />
  );
}

export { Badge };
