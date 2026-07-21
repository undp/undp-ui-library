import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const featuredCardVariants = cva(
  'items-stretch flex flex-col justify-between items-stretch group',
  {
    variants: {
      backgroundColor: {
        transparent: 'bg-transparent text-content-primary',
        background: 'bg-background hover:bg-surface text-content-primary',
        'background-soft': 'bg-background-soft hover:bg-surface-hover text-content-primary',
        foreground: 'bg-foreground hover:bg-surface-3xl text-content-reverse',
        'foreground-soft': 'bg-foreground-soft hover:bg-surface-3xl text-content-reverse',
        surface: 'bg-surface hover:bg-surface-hover text-content-primary',
        'surface-xl': 'bg-surface-xl hover:bg-surface-2xl text-content-reverse ',
        'surface-2xl': 'bg-surface-2xl hover:bg-surface-3xl text-content-reverse ',
        'surface-3xl': 'bg-surface-3xl hover:bg-surface-4xl text-content-reverse ',
        primary: 'bg-primary hover:bg-primary-hover text-content-reverse',
        secondary: 'bg-secondary hover:bg-secondary-hover text-content-reverse',
        tertiary: 'bg-tertiary hover:bg-tertiary-hover text-content-reverse',
        quaternary: 'bg-quaternary hover:bg-quaternary-hover text-content-primary',
        success: 'bg-success hover:bg-success-hover text-content-reverse',
        error: 'bg-error hover:bg-error-hover text-content-reverse',
        warning: 'bg-warning hover:bg-warning-hover text-content-primary',
        info: 'bg-info hover:bg-info-hover text-content-reverse',
      },
      size: {
        xs: 'w-1/4',
        sm: 'w-1/3',
        base: 'w-1/2',
        lg: 'w-2/3',
        xl: 'w-3/4',
        full: 'w-full',
      },
    },
    defaultVariants: {
      size: 'full',
      backgroundColor: 'background',
    },
  },
);

interface FeaturedCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featuredCardVariants> {
  border?: boolean;
}

const FeaturedCard = React.forwardRef<HTMLDivElement, FeaturedCardProps>(
  ({ className, border = true, size, backgroundColor, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(featuredCardVariants({ size, backgroundColor }), className)}
      {...props}
    />
  ),
);
FeaturedCard.displayName = 'FeaturedCard';

const FeaturedCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-wrap gap-4 pr-6 pb-6 pl-6', className)} {...props} />
  ),
);
FeaturedCardFooter.displayName = 'FeaturedCardFooter';

const FeaturedCardTag = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'card-tag mt-0 mb-0 flex gap-2 pt-4 pr-6 pl-6 font-body font-bold text-xs uppercase leading-[1.15] md:mb-0',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
FeaturedCardTag.displayName = 'FeaturedCardTag';

const FeaturedCardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'm-0 mt-8 mb-3 flex flex grow flex-col justify-end gap-2 pr-6 pl-6 font-body font-normal text-h4-xs md:text-h4-sm lg:text-h4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
FeaturedCardTitle.displayName = 'FeaturedCardTitle';

const FeaturedCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'mt-0 pt-0 pr-6 pb-6 pl-6 font-body text-sm leading-[1.4] lg:text-base',
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
FeaturedCardDescription.displayName = 'FeaturedCardDescription';

export {
  FeaturedCard,
  FeaturedCardDescription,
  FeaturedCardFooter,
  FeaturedCardTag,
  FeaturedCardTitle,
};
