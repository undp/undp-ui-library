import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border-2 px-2.5 py-0.5 font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        'light-gray':
          'border-transparent bg-primary-gray-300 text-primary-foreground',
        gray: 'border-transparent bg-primary-gray-400 text-primary-foreground',
        blue: 'border-transparent bg-primary-blue-200 text-primary-foreground ',
        yellow:
          'border-transparent bg-accent-light-yellow text-primary-foreground',
        green:
          'border-transparent bg-accent-light-green text-primary-foreground',
        red: 'border-transparent bg-accent-light-red text-primary-foreground',
        azure:
          'border-transparent bg-accent-light-azure text-primary-foreground',
        outline:
          'text-foreground border-primary-gray-400 text-primary-gray-600',
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
