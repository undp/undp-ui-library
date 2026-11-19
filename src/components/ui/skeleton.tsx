import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const skeletonVariants = cva(
  'h-full w-full animate-pulse [animation-duration:1s] motion-reduce:animate-none',
  {
    variants: {
      backgroundColor: {
        background: 'bg-background',
        'background-soft': 'bg-background-soft',
        surface: 'bg-surface',
        'surface-2xs': 'bg-surface-2xs',
        'surface-xs': 'bg-surface-xs',
        'surface-sm': 'bg-surface-sm',
        'surface-md': 'bg-surface-md',
        'surface-lg': 'bg-surface-lg',
        'surface-xl': 'bg-surface-xl',
        'surface-2xl': 'bg-surface-2xl',
        'surface-3xl': 'bg-surface-3xl',
        'surface-4xl': 'bg-surface-4xl',
        'foreground-soft': 'bg-foreground-soft',
        foreground: 'bg-foreground',
      },
    },
    defaultVariants: {
      backgroundColor: 'surface',
    },
  },
);

function Skeleton({
  backgroundColor = 'surface',
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof skeletonVariants>) {
  return (
    <div
      aria-hidden='true'
      {...props}
      className={cn(skeletonVariants({ backgroundColor }), className)}
    />
  );
}

export { Skeleton };
