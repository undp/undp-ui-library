import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const loaderVariants = cva('animate-spin text-primary', {
  variants: {
    size: {
      sm: 'size-6',
      base: 'size-8',
      lg: 'size-12',
    },
  },
  defaultVariants: {
    size: 'base',
  },
});

interface SpinnerContentProps extends VariantProps<typeof loaderVariants> {
  show?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Spinner({
  size,
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
      <Loader2
        className={cn(
          loaderVariants({ size }),
          'stroke-primary-blue-600',
          className,
        )}
      />
      {children}
    </span>
  );
}
