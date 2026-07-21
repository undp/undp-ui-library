import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';

import { cn } from '@/lib/utils';

const loaderVariants = cva('animate-spin border-[5px] rounded-full inline-block box-border', {
  variants: {
    color: {
      primary: 'border-primary !border-b-stroke',
      secondary: 'border-secondary !border-b-stroke',
      tertiary: 'border-tertiary !border-b-stroke',
      quaternary: 'border-stroke !border-b-quaternary',
      foreground: 'border-foreground !border-b-stroke',
    },
    size: {
      sm: 'border-[2px] h-6 w-6',
      base: 'border-[4px] h-8 w-8',
      lg: 'border-[6px] h-12 w-12',
    },
  },
  defaultVariants: {
    size: 'base',
    color: 'primary',
  },
});

export function Spinner({
  size,
  color,
  show = true,
  children,
  className,
}: VariantProps<typeof loaderVariants> & {
  show?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <span className={cn('flex-col items-center justify-center', show ? 'flex' : 'hidden')}>
      <div className={cn(loaderVariants({ color, size }), className)} />
      {children}
    </span>
  );
}
