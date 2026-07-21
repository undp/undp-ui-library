import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { H2, H4, P } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'group bg-surface box-border items-stretch p-8 transition-all duration-400',
  {
    variants: {
      hoverColor: {
        primary: 'hover:bg-primary',
        secondary: 'hover:bg-secondary',
        tertiary: 'hover:bg-tertiary',
        quaternary: 'hover:bg-quaternary',
        foreground: 'hover:bg-foreground',
        background: 'hover:bg-background',
        success: 'hover:bg-success',
        warning: 'hover:bg-warning',
        info: 'hover:bg-info',
        error: 'hover:bg-error',
        none: '',
      },
      size: {
        sm: 'w-1/4',
        base: 'w-1/3',
        lg: 'w-1/2',
        xl: 'w-2/3',
        full: 'w-full',
      },
    },
    defaultVariants: {
      hoverColor: 'warning',
      size: 'full',
    },
  },
);
type StatCardProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>;

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, hoverColor = 'primary', children, size, ...props }, ref) => (
    <div ref={ref} className={cn(cardVariants({ size, hoverColor }), className)} {...props}>
      {children}
    </div>
  ),
);
StatCard.displayName = 'StatCard';

const StatCardValue = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <H2
    ref={ref}
    className={cn(
      'text-left font-heading text-transparent leading-none [-webkit-text-stroke:2px_var(--foreground)] [text-shadow:none] group-hover:text-content-primary rtl:text-right group-hover:[-webkit-text-stroke:0px]',
      className,
    )}
    {...props}
  />
));
StatCardValue.displayName = 'StatCardValue';

const StatCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <H4 ref={ref} className={cn('text-content-primary', className)} {...props} />
));
StatCardTitle.displayName = 'StatCardTitle';

const StatCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <P ref={ref} className={cn('text-content-primary', className)} {...props} />
));
StatCardDescription.displayName = 'StatCardDescription';

export { StatCard, StatCardDescription, StatCardTitle, StatCardValue };
