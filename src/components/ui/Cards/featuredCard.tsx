import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const featuredCardVariants = cva(
  'items-stretch flex flex-col justify-between items-stretch group',
  {
    variants: {
      backgroundColor: {
        transparent: 'bg-transparent text-primary-black dark:text-primary-white',
        white:
          'bg-primary-white dark:bg-primary-gray-700 hover:bg-primary-gray-200 dark:hover:bg-primary-gray-600 text-primary-black dark:text-primary-white',
        gray: 'bg-primary-gray-200 dark:bg-primary-gray-600 hover:bg-primary-gray-300 dark:hover:bg-primary-gray-500 text-primary-black dark:text-primary-white',
        'dark-gray':
          'bg-primary-gray-600 dark:bg-primary-gray-300 hover:bg-primary-gray-500 dark:hover:bg-primary-gray-400 text-primary-white dark:text-primary-black',
        black:
          'bg-primary-gray-700 dark:bg-primary-gray-100 hover:bg-primary-gray-650 dark:hover:bg-primary-gray-300 text-primary-white dark:text-primary-black',
        blue: 'bg-primary-blue-200 hover:bg-primary-blue-300 dark:bg-primary-blue-600 dark:hover:bg-primary-blue-500 text-primary-black dark:text-primary-white',
        azure:
          'bg-accent-light-azure hover:bg-accent-azure dark:bg-accent-dark-azure dark:hover:bg-accent-azure text-primary-black dark:text-primary-white',
        yellow:
          'bg-accent-light-yellow hover:bg-accent-yellow dark:bg-accent-dark-yellow dark:hover:bg-accent-yellow text-primary-black',
        red: 'bg-accent-light-red hover:bg-accent-red dark:bg-accent-dark-red dark:hover:bg-accent-red text-primary-black dark:text-primary-white',
        green:
          'bg-accent-light-green hover:bg-accent-green dark:bg-accent-dark-green dark:hover:bg-accent-green text-primary-black dark:text-primary-white',
        custom: 'bg-custom-color-200 hover:bg-custom-color-300 text-custom-foreground',
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
      backgroundColor: 'white',
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
    <div ref={ref} className={cn('pl-6 pr-6 pb-6 flex flex-wrap gap-4', className)} {...props} />
  ),
);
FeaturedCardFooter.displayName = 'FeaturedCardFooter';

const FeaturedCardTag = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'card-tag flex gap-2 mt-0 mb-0 pt-4 pl-6 pr-6 md:mb-0 text-xs font-bold leading-[1.15] uppercase',
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
FeaturedCardTag.displayName = 'FeaturedCardTag';

const FeaturedCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col justify-end grow m-0 pl-6 pr-6 mt-8 mb-3 leading-[1.15] flex gap-2 font-normal text-[2rem]',
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
FeaturedCardTitle.displayName = 'FeaturedCardTitle';

const FeaturedCardDescription = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(`pl-6 pr-6 pt-0 pb-6 mt-0 text-base leading-[1.4]`, className)}
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
