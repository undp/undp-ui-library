import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const cardVariants = cva('flex flex-col justify-between items-stretch group', {
  variants: {
    variant: {
      'with-image': '[&_.card-tag]:pb-[26px]',
      'without-image': '[&_.card-tag]:pb-4',
    },
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
      info: 'bg-info hover:bg-info-hover text-content-reverse',
      warning: 'bg-warning hover:bg-warning-hover text-content-primary',
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
    backgroundColor: 'background',
  },
});

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  border?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, border = true, size, variant, backgroundColor, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ size, backgroundColor, variant }),
        border === false ? '' : 'border-foreground border-t-2',
        className,
      )}
      {...props}
    />
  ),
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, CardProps>(({ ...props }, ref) => (
  <div ref={ref} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-wrap gap-4 pt-4 pr-6 pb-6 pl-6 font-body', className)}
      {...props}
    />
  ),
);
CardFooter.displayName = 'CardFooter';

const CardTag = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'card-tag mt-0 mb-0 flex gap-2 pt-4 pr-6 pl-6 font-body font-bold text-xs uppercase leading-h6 md:mb-0',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
CardTag.displayName = 'CardTag';

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'm-0 flex gap-2 pt-4 pr-6 pb-6 pl-6 font-body font-normal text-h4-xs md:text-h4-sm lg:text-h4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'mt-0 pt-0 pr-6 pb-6 pl-6 font-body text-p-xs md:text-p-sm lg:text-p',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
CardDescription.displayName = 'CardDescription';

const CardImage = React.forwardRef<
  HTMLImageElement,
  React.HTMLAttributes<HTMLImageElement> & {
    src: string;
    alt?: string;
  }
>(({ className, ...props }, ref) => (
  <img ref={ref} alt='card' {...props} className={cn('h-64 w-full object-cover', className)} />
));
CardImage.displayName = 'CardImage';

export { Card, CardDescription, CardFooter, CardHeader, CardImage, CardTag, CardTitle };
