import * as React from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'flex flex-col justify-between items-stretch font-sans',
  {
    variants: {
      variant: {
        'with-image': '[&_.card-tag]:pb-[26px]',
        'without-image': '[&_.card-tag]:pb-4',
      },
      backgroundColor: {
        transparent:
          'bg-primary-transparent text-primary-black dark:text-primary-white',
        white:
          'bg-primary-white dark:bg-primary-gray-700 hover:bg-primary-gray-200 hover:dark:bg-primary-gray-600 text-primary-black dark:text-primary-white',
        gray: 'bg-primary-gray-200 dark:bg-primary-gray-600 hover:bg-primary-gray-400 hover:dark:bg-primary-gray-500 text-primary-black dark:text-primary-white',
        'dark-gray':
          'bg-primary-gray-600 dark:bg-primary-gray-300 hover:bg-primary-gray-500 hover:dark:bg-primary-gray-400 text-primary-white dark:text-primary-black',
        black:
          'bg-primary-gray-700 dark:bg-primary-gray-100 hover:bg-primary-gray-650 hover:dark:bg-primary-gray-300 text-primary-white dark:text-primary-black',
        blue: 'bg-primary-blue-200 hover:bg-primary-blue-300 dark:bg-primary-blue-600 hover:dark:bg-primary-blue-500 text-primary-black dark:text-primary-white',
        azure:
          'bg-accent-light-azure hover:bg-accent-azure dark:bg-accent-dark-azure hover:dark:bg-accent-azure text-primary-black dark:text-primary-white',
        yellow:
          'bg-accent-light-yellow hover:bg-accent-yellow dark:bg-accent-dark-yellow hover:dark:bg-accent-yellow text-primary-black',
        red: 'bg-accent-light-red hover:bg-accent-red dark:bg-accent-dark-red hover:dark:bg-accent-red text-primary-black dark:text-primary-white',
        green:
          'bg-accent-light-green hover:bg-accent-green dark:bg-accent-dark-green hover:dark:bg-accent-green text-primary-black dark:text-primary-white',
        custom:
          'bg-custom-color-200 hover:bg-custom-color-300 text-custom-foreground',
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
      variant: 'with-image',
      backgroundColor: 'white',
    },
  },
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  border?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, border, size, variant, backgroundColor, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ size, backgroundColor, variant }),
        border === false
          ? ''
          : 'border-t-2 border-primary-black dark:border-primary-gray-100',
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />,
);
CardHeader.displayName = 'CardHeader';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('pl-6 pr-6 pt-4 pb-6 flex flex-wrap gap-4', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

const CardTag = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }) => (
  <div
    className={cn(
      'card-tag flex gap-2 mt-0 mb-0 pt-4 pl-6 pr-6 md:mb-0 text-xs font-bold leading-[1.15] uppercase',
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
CardTag.displayName = 'CardTag';

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }) => (
  <div
    className={cn(
      'm-0 pl-6 pr-6 pt-4 pb-6 leading-[1.15] flex gap-2 font-normal text-[1.25rem] md:text-[1.563rem]',
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }) => (
  <div
    className={cn(
      `pl-6 pr-6 pt-0 pb-6 mt-0 text-base leading-[1.4] md:text-xl`,
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
CardDescription.displayName = 'CardDescription';

interface CardImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  ({ className, ...props }, ref) => (
    <img
      ref={ref}
      alt='card'
      {...props}
      className={cn('w-full h-64 object-cover', className)}
    />
  ),
);
CardImage.displayName = 'CardImage';

export {
  Card,
  CardTag,
  CardTitle,
  CardDescription,
  CardImage,
  CardFooter,
  CardHeader,
};
