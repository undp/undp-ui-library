import * as React from 'react';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva('flex flex-col items-stretch w-full', {
  variants: {
    imageWidth: {
      zero: '[&_.card-img]:hidden [&_.card-content]:w-full',
      xs: '[&_.card-img]:w-1/4 [&_.card-content]:w-3/4',
      sm: '[&_.card-img]:w-1/3 [&_.card-content]:w-2/3',
      normal: '[&_.card-img]:w-1/2 [&_.card-content]:w-1/2',
      lg: '[&_.card-img]:w-2/3 [&_.card-content]:w-1/3',
      xl: '[&_.card-img]:w-3/4 [&_.card-content]:w-1/4',
    },
  },
  defaultVariants: {
    imageWidth: 'normal',
  },
});

export interface CardProps
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
        border === false ? '' : 'border-t-2 border-primary-black',
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
      className={cn(
        'card-content flex flex-col justify-between pl-4',
        className,
      )}
    />
  ),
);
PageWideCardContent.displayName = 'PageWideCardContent';

const PageWideCardHeader = React.forwardRef<HTMLDivElement, CardProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />,
);
PageWideCardHeader.displayName = 'PageWideCardHeader';

const PageWideCardContainer = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      {...props}
      className={cn('flex flex-row gap-6 items-stretch', className)}
    />
  ),
);
PageWideCardContainer.displayName = 'PageWideCardContainer';

const PageWideCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('pt-4 pb-2 flex flex-wrap gap-4 ', className)}
    {...props}
  />
));
PageWideCardFooter.displayName = 'PageWideCardFooter';

const PageWideCardTag = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }) => (
  <h6
    className={cn(
      'w-full mt-0 mb-0 pt-4 pl-6 pr-6 pb-4 md:mb-0 text-base font-bold leading-[1.15] text-primary-black uppercase',
      className,
    )}
    {...props}
  >
    {children}
  </h6>
));
PageWideCardTag.displayName = 'PageWideCardTag';

const cardTitleVariants = cva(
  'm-0 pl-0 pr-0 pt-12 pb-8 hello text-primary-black leading-[1.15]',
  {
    variants: {
      weight: {
        bold: 'font-bold',
        medium: 'font-medium',
        normal: 'font-normal',
      },
      size: {
        small: 'text-[1.25rem] md:text-[1.563rem]',
        normal: 'text-[1.563rem] md:text-[2.188rem]',
      },
    },
    defaultVariants: {
      size: 'normal',
      weight: 'normal',
    },
  },
);

const PageWideCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> &
    VariantProps<typeof cardTitleVariants>
>(({ children, weight, size, className, ...props }) => (
  <h4 className={cn(cardTitleVariants({ size, weight }), className)} {...props}>
    {children}
  </h4>
));
PageWideCardTitle.displayName = 'PageWideCardTitle';

const PageWideCardDescription = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }) => (
  <p
    className={cn(
      `pl-0 pr-0 pt-0 pb-6 mt-0 text-base leading-[1.4] md:text-xl`,
      className,
    )}
    {...props}
  >
    {children}
  </p>
));
PageWideCardDescription.displayName = 'PageWideCardDescription';

interface PagWideCardImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

const PagWideCardImage = React.forwardRef<
  HTMLImageElement,
  PagWideCardImageProps
>(({ className, ...props }, ref) => (
  <img
    ref={ref}
    alt='card'
    {...props}
    className={cn('card-img object-cover', className)}
  />
));
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
