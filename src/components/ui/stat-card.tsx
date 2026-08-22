import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { H2, H4, P } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'group bg-surface box-border items-stretch p-8 transition-all duration-400',
  {
    variants: {
      hoverColor: {
        default: 'hover:bg-card-hover-color',
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

        male: 'hover:bg-categorical-male',
        female: 'hover:bg-categorical-female',
        urban: 'hover:bg-categorical-urban',
        rural: 'hover:bg-categorical-rural',

        red: 'hover:bg-accent-red',
        orange: 'hover:bg-accent-orange',
        yellow: 'hover:bg-accent-yellow',
        lime: 'hover:bg-accent-lime',
        green: 'hover:bg-accent-green',
        teal: 'hover:bg-accent-teal',
        azure: 'hover:bg-accent-azure',
        blue: 'hover:bg-accent-blue',
        violet: 'hover:bg-accent-violet',
        pink: 'hover:bg-accent-pink',

        'sdg-1': 'hover:bg-sdg-1',
        'sdg-2': 'hover:bg-sdg-2',
        'sdg-3': 'hover:bg-sdg-3',
        'sdg-4': 'hover:bg-sdg-4',
        'sdg-5': 'hover:bg-sdg-5',
        'sdg-6': 'hover:bg-sdg-6',
        'sdg-7': 'hover:bg-sdg-7',
        'sdg-8': 'hover:bg-sdg-8',
        'sdg-9': 'hover:bg-sdg-9',
        'sdg-10': 'hover:bg-sdg-10',
        'sdg-11': 'hover:bg-sdg-11',
        'sdg-12': 'hover:bg-sdg-12',
        'sdg-13': 'hover:bg-sdg-13',
        'sdg-14': 'hover:bg-sdg-14',
        'sdg-15': 'hover:bg-sdg-15',
        'sdg-16': 'hover:bg-sdg-16',
        'sdg-17': 'hover:bg-sdg-17',

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
      hoverColor: 'default',
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
      'text-left font-heading text-shadow-none text-transparent leading-xs [-webkit-text-stroke:2px_var(--content-primary)] group-hover:text-content-primary rtl:text-right group-hover:[-webkit-text-stroke:0px]',
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
