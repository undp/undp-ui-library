import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { P } from './typography';

const errorStateVariants = cva(
  'flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center',
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

function ErrorState({
  description = 'Error loading',
  actionButton,
  backgroundColor,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof errorStateVariants> & {
    description?: string;
    actionButton?: React.ReactNode;
  }) {
  return (
    <div role='alert' {...props} className={cn(errorStateVariants({ backgroundColor }), className)}>
      <AlertCircle size={18} strokeWidth={1} />
      <P size='sm'> {description}</P>
      {actionButton}
    </div>
  );
}

export { ErrorState };
