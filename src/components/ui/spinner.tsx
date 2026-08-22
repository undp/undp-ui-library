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

      red: 'border-accent-red !border-b-stroke',
      orange: 'border-accent-orange !border-b-stroke',
      yellow: 'border-accent-yellow !border-b-stroke',
      lime: 'border-accent-lime !border-b-stroke',
      green: 'border-accent-green !border-b-stroke',
      teal: 'border-accent-teal !border-b-stroke',
      azure: 'border-accent-azure !border-b-stroke',
      blue: 'border-accent-blue !border-b-stroke',
      violet: 'border-accent-violet !border-b-stroke',
      pink: 'border-accent-pink !border-b-stroke',

      'sdg-1': 'border-sdg-1 !border-b-stroke',
      'sdg-2': 'border-sdg-2 !border-b-stroke',
      'sdg-3': 'border-sdg-3 !border-b-stroke',
      'sdg-4': 'border-sdg-4 !border-b-stroke',
      'sdg-5': 'border-sdg-5 !border-b-stroke',
      'sdg-6': 'border-sdg-6 !border-b-stroke',
      'sdg-7': 'border-sdg-7 !border-b-stroke',
      'sdg-8': 'border-sdg-8 !border-b-stroke',
      'sdg-9': 'border-sdg-9 !border-b-stroke',
      'sdg-10': 'border-sdg-10 !border-b-stroke',
      'sdg-11': 'border-sdg-11 !border-b-stroke',
      'sdg-12': 'border-sdg-12 !border-b-stroke',
      'sdg-13': 'border-sdg-13 !border-b-stroke',
      'sdg-14': 'border-sdg-14 !border-b-stroke',
      'sdg-15': 'border-sdg-15 !border-b-stroke',
      'sdg-16': 'border-sdg-16 !border-b-stroke',
      'sdg-17': 'border-sdg-17 !border-b-stroke',

      male: 'border-categorical-male !border-b-stroke',
      female: 'border-categorical-female !border-b-stroke',
      urban: 'border-categorical-urban !border-b-stroke',
      rural: 'border-categorical-rural !border-b-stroke',
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
