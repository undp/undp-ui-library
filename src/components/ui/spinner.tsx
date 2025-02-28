import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const loaderVariants = cva(
  'animate-spin text-primary dark:text-primary-white',
  {
    variants: {
      variant: {
        red: 'stroke-accent-dark-red dark:!stroke-accent-red',
        blue: 'stroke-primary-blue-600 dark:!stroke-primary-blue-500',
        black: 'stroke-primary-gray-600 dark:!stroke-primary-gray-200',
      },
      size: {
        sm: 'size-6',
        base: 'size-8',
        lg: 'size-12',
      },
    },
    defaultVariants: {
      size: 'base',
      variant: 'red',
    },
  },
);

interface SpinnerContentProps extends VariantProps<typeof loaderVariants> {
  show?: boolean;
  className?: string;
  variant?: 'blue' | 'red' | 'black' | null | undefined;
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
      <Loader2 className={cn(loaderVariants({ size, variant }), className)} />
      {children}
    </span>
  );
}
