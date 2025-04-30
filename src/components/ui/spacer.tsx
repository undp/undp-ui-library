import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const spacerVariants = cva('h-0 w-full', {
  variants: {
    size: {
      xs: 'py-px',
      sm: 'py-[2px]',
      base: 'py-1',
      lg: 'py-1.5',
      xl: 'py-2',
      '2xl': 'py-3',
      '3xl': 'py-4',
      '4xl': 'py-5',
      '5xl': 'py-6',
      '6xl': 'py-8',
      '7xl': 'py-10',
      '8xl': 'py-12',
      '9xl': 'py-20',
    },
  },
  defaultVariants: { size: 'base' },
});

const Spacer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof spacerVariants>
>(({ className, size, ...props }, ref) => {
  return <div {...props} className={cn(spacerVariants({ size }), className)} ref={ref} />;
});
Spacer.displayName = 'Spacer';

export { Spacer };
