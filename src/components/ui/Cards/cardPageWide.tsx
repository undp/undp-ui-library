import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const cardVariants = cva('flex flex-col items-stretch w-full', {
  variants: {
    imageWidth: {
      zero: '[&_.card-img]:hidden [&_.card-content]:w-full',
      xs: '[&_.card-img]:w-1/4 [&_.card-content]:w-3/4',
      sm: '[&_.card-img]:w-1/3 [&_.card-content]:w-2/3',
      base: '[&_.card-img]:w-1/2 [&_.card-content]:w-1/2',
      lg: '[&_.card-img]:w-2/3 [&_.card-content]:w-1/3',
      xl: '[&_.card-img]:w-3/4 [&_.card-content]:w-1/4',
    },
  },
  defaultVariants: { imageWidth: 'base' },
});

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  border?: boolean;
}

const PageWideCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, border, imageWidth, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        cardVariants({ imageWidth }),
        border === false ? '' : 'border-foreground border-t-2',
        className,
      )}
      {...props}
    />
  ),
);
PageWideCard.displayName = 'PageWideCard';

const PageWideCardContent = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn('card-content flex flex-col justify-between pl-4 rtl:pr-4 rtl:pl-0', className)}
    />
  ),
);
PageWideCardContent.displayName = 'PageWideCardContent';

const PageWideCardHeader = React.forwardRef<HTMLDivElement, CardProps>(({ ...props }, ref) => (
  <div ref={ref} {...props} />
));
PageWideCardHeader.displayName = 'PageWideCardHeader';

const PageWideCardContainer = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} {...props} className={cn('flex flex-row items-stretch gap-6', className)} />
  ),
);
PageWideCardContainer.displayName = 'PageWideCardContainer';

const PageWideCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-wrap gap-4 pt-4 pb-2 text-content-primary', className)}
      {...props}
    />
  ),
);
PageWideCardFooter.displayName = 'PageWideCardFooter';

const PageWideCardTag = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'mt-0 mb-0 flex w-full gap-2 pt-4 pr-6 pb-4 pl-6 font-body font-bold text-content-primary text-xs uppercase leading-xs md:mb-0 rtl:pl-6 [dir-rtl]:pr-6',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
PageWideCardTag.displayName = 'PageWideCardTag';

const PageWideCardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'm-0 flex gap-2 pt-12 pr-0 pb-8 pl-0 font-body font-normal text-content-primary text-h4-xs md:text-h4-sm lg:text-h4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
PageWideCardTitle.displayName = 'PageWideCardTitle';

const PageWideCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'mt-0 flex flex-col gap-2 pt-0 pr-0 pb-6 pl-0 font-body text-content-primary text-p-xs md:text-p-sm lg:text-p',
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
PageWideCardDescription.displayName = 'PageWideCardDescription';

const PageWideCardImage = React.forwardRef<
  HTMLImageElement,
  React.HTMLAttributes<HTMLImageElement> & {
    src: string;
    alt?: string;
  }
>(({ className, ...props }, ref) => (
  <img ref={ref} alt='card' {...props} className={cn('card-img object-cover', className)} />
));
PageWideCardImage.displayName = 'PageWideCardImage';

export {
  PageWideCard,
  PageWideCardContainer,
  PageWideCardContent,
  PageWideCardDescription,
  PageWideCardFooter,
  PageWideCardHeader,
  PageWideCardImage,
  PageWideCardTag,
  PageWideCardTitle,
};
