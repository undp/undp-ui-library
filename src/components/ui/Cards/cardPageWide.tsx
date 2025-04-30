import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

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
        border === false ? '' : 'border-t-2 border-primary-black dark:border-primary-gray-100',
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
      className={cn('card-content flex flex-col justify-between pl-4', className)}
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
    <div ref={ref} {...props} className={cn('flex flex-row gap-6 items-stretch', className)} />
  ),
);
PageWideCardContainer.displayName = 'PageWideCardContainer';

const PageWideCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'pt-4 pb-2 flex flex-wrap gap-4 text-primary-black dark:text-primary-white',
        className,
      )}
      {...props}
    />
  ),
);
PageWideCardFooter.displayName = 'PageWideCardFooter';

const PageWideCardTag = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex gap-2 w-full mt-0 mb-0 pt-4 pl-6 pr-6 pb-4 md:mb-0 text-xs font-bold leading-[1.15] text-primary-black dark:text-primary-white uppercase',
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
PageWideCardTag.displayName = 'PageWideCardTag';

const PageWideCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex gap-2 m-0 pl-0 pr-0 pt-12 pb-8 text-primary-black dark:text-primary-white leading-[1.15] font-normal text-[1.563rem] md:text-[2.188rem]',
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
PageWideCardTitle.displayName = 'PageWideCardTitle';

const PageWideCardDescription = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `pl-0 pr-0 pt-0 pb-6 mt-0 text-base leading-[1.4] md:text-xl flex flex-col gap-2 text-primary-black dark:text-primary-white`,
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
PageWideCardDescription.displayName = 'PageWideCardDescription';

interface PagWideCardImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

const PagWideCardImage = React.forwardRef<HTMLImageElement, PagWideCardImageProps>(
  ({ className, ...props }, ref) => (
    <img ref={ref} alt='card' {...props} className={cn('card-img object-cover', className)} />
  ),
);
PagWideCardImage.displayName = 'PagWideCardImage';

export {
  PageWideCard,
  PageWideCardTag,
  PageWideCardTitle,
  PageWideCardDescription,
  PagWideCardImage,
  PageWideCardFooter,
  PageWideCardContent,
  PageWideCardContainer,
  PageWideCardHeader,
};
