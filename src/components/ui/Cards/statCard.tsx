import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { H2, H4, P } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'group bg-primary-gray-200 dark:bg-primary-gray-600 box-border items-stretch p-8 transition-all duration-400',
  {
    variants: {
      hoverColor: {
        blue: 'hover:bg-primary-blue-600',
        azure: 'hover:bg-accent-azure',
        yellow: 'hover:bg-accent-yellow',
        red: 'hover:bg-accent-red',
        green: 'hover:bg-accent-green',
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
      hoverColor: 'yellow',
      size: 'base',
    },
  },
);
type StatCardProps = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>;

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, hoverColor = 'yellow', children, size, ...props }, ref) => (
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
      'leading-none [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white] [text-shadow:none] font-heading text-left rtl:text-right transparent text-transparent group-hover:text-primary-black group-hover:dark:text-primary-white  group-hover:[-webkit-text-stroke:0px]',
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
  <H4 ref={ref} className={cn('text-black dark:text-white', className)} {...props} />
));
StatCardTitle.displayName = 'StatCardTitle';

const StatCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <P ref={ref} className={cn('text-black dark:text-white', className)} {...props} />
));
StatCardDescription.displayName = 'StatCardDescription';

export { StatCard, StatCardDescription, StatCardTitle, StatCardValue };
