import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const loaderVariants = cva(
  'animate-spin border-[5px] rounded-full inline-block box-border',
  {
    variants: {
      variant: {
        red: 'border-accent-dark-red dark:border-accent-red border-b-primary-gray-300 dark:border-b-primary-gray-550',
        blue: 'border-primary-blue-600 dark:border-primary-blue-500 border-b-primary-gray-300 dark:border-b-primary-gray-550',
        black: 'border-primary-gray-600 dark:border-primary-gray-200 border-b-primary-gray-300 dark:border-b-primary-gray-550',
        custom: 'border-custom-color-600 border-b-primary-gray-300 dark:border-b-primary-gray-550',
      },
      size: {
        sm: 'border-[2px] h-6 w-6',
        base: 'border-[4px] h-8 w-8',
        lg: 'border-[6px] h-12 w-12',
      },
    },
    defaultVariants: {
      size: 'base',
      variant: 'blue',
    },
  },
);

interface SpinnerContentProps extends VariantProps<typeof loaderVariants> {
  show?: boolean;
  className?: string;
  variant?: 'blue' | 'red' | 'black' | 'custom' | null | undefined;
  size?: 'sm' | 'base' | 'lg';
  children?: React.ReactNode;
}

export function Spinner({
  size,
  variant,
  show = true,
  children,
  className,
}: SpinnerContentProps) {
  return (
    <span
      className={cn(
        'flex-col items-center justify-center',
        show ? 'flex' : 'hidden',
      )}
    >
      <div
        className={cn(loaderVariants({ variant,size }), className)}
      />
      {children}
    </span>
  );
}
