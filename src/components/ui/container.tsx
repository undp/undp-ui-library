import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const containerVariants = cva('flex w-full gap-4 flex-row items-stretch p-4', {
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
  },
  defaultVariants: {
    backgroundColor: 'transparent',
  },
});

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof containerVariants>
>(({ className, backgroundColor, ...props }, ref) => {
  return (
    <div
      {...props}
      className={cn(containerVariants({ backgroundColor }), className)}
      ref={ref}
    />
  );
});
Container.displayName = 'Container';

export { Container };
