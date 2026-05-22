import { cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { H2 } from '../typography';

const StatCardContainer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        '@container w-full flex gap-0 items-stretch flex-wrap bg-primary-gray-700 dark:bg-primary-gray-100',
        className,
      )}
      {...props}
    />
  ),
);

const hoverBGVariant = cva(
  'w-full h-full absolute top-0 left-0 transition-all opacity-0 duration-400 ease-[cubic-bezier(0.64,0.05,0.35,1.05)] group-hover:opacity-100',
  {
    variants: {
      variant: {
        blue: 'bg-[linear-gradient(0deg,_rgba(4,104,177,0.8),_transparent_140%)]',
        azure: 'bg-[linear-gradient(0deg,_rgba(0,193,255,0.81),_transparent_140%)]',
        yellow: 'bg-[linear-gradient(0deg,_rgba(255,235,0,0.8),_transparent_140%)]',
        red: 'bg-[linear-gradient(0deg,_rgba(238,64,45,0.8),_transparent_140%)]',
        green: 'bg-[linear-gradient(0deg,_rgba(89,186,71,0.8),_transparent_140%)]',
      },
    },
    defaultVariants: {
      variant: 'yellow',
    },
  },
);
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverColor?: 'yellow' | 'azure' | 'red' | 'green' | 'blue';
  hoverImage?: string;
}
const StatCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverColor = 'yellow', hoverImage, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'group relative w-full min-h-[378px] box-border px-16 @2xl:min-h-[787px] @2xl:w-1/2 @3xl:w-1/4 flex',
        className,
      )}
      {...props}
    >
      {hoverImage && (
        <img
          alt=''
          src={hoverImage}
          className='absolute top-0 transition-all opacity-0 duration-300 object-cover left-0 w-full h-full group-hover:opacity-100'
        />
      )}
      <div className={hoverBGVariant({ variant: hoverColor })} />
      {children}
    </div>
  ),
);
StatCard.displayName = 'StatCard';

const StatCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'm-0 pl-6 pr-6 pt-4 pb-6 leading-[1.15] flex gap-2 font-normal text-[1.25rem] md:text-[1.563rem]',
      className,
    )}
    {...props}
  >
    {children}
  </div>
));
StatCardTitle.displayName = 'StatCardTitle';

const StatCardValue = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }) => (
  <H2
    className={cn(
      'm-0 pl-6 pr-6 pt-4 pb-6 leading-[1.15] flex gap-2 font-normal text-[1.25rem] md:text-[1.563rem]',
      className,
    )}
    {...props}
  />
));
StatCardValue.displayName = 'StatCardValue';

const StatCardDescription = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(`pl-6 pr-6 pt-0 pb-6 mt-0 text-base leading-[1.4] md:text-xl`, className)}
    {...props}
  >
    {children}
  </div>
));
StatCardDescription.displayName = 'StatCardDescription';

export { StatCard, StatCardContainer, StatCardDescription, StatCardTitle, StatCardValue };
