import { cva } from 'class-variance-authority';
import * as React from 'react';
import { H2, H4, P } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

const StatsPanel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        '@container flex w-full flex-wrap items-stretch justify-start gap-0 bg-surface-2xl',
        className,
      )}
      {...props}
    />
  ),
);

const hoverBGVariant = cva(
  'w-full h-full absolute inset-0 top-0 left-0 transition-all opacity-0 duration-400 ease-[cubic-bezier(0.64,0.05,0.35,1.05)] group-hover:opacity-100',
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

const StatsPanelCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverColor = 'yellow', hoverImage, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'group relative box-border flex @2xl:min-h-[787px] min-h-[378px] @2xl:w-1/2 @3xl:w-1/4 w-full items-center bg-foreground-soft px-16',
        className,
      )}
      {...props}
    >
      {hoverImage && (
        <img
          alt=''
          src={hoverImage}
          className='absolute top-0 left-0 h-full w-full object-cover opacity-0 transition-all duration-300 group-hover:opacity-100'
        />
      )}
      <div className={hoverBGVariant({ variant: hoverColor })} />
      <div className='relative z-5 flex flex-col'>{children}</div>
    </div>
  ),
);

StatsPanelCard.displayName = 'StatsPanelCard';

const StatsPanelCardValue = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <H2
    ref={ref}
    className={cn(
      'text-left font-heading text-transparent leading-none transition-all duration-400 [-webkit-text-stroke:2px_var(--background)] group-hover:text-content-primary rtl:text-right group-hover:[-webkit-text-stroke:0px]',
      className,
    )}
    {...props}
  />
));

StatsPanelCardValue.displayName = 'StatsPanelCardValue';

const StatsPanelCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <H4
    ref={ref}
    className={cn(
      'text-white transition-all duration-400 group-hover:text-content-primary',
      className,
    )}
    {...props}
  />
));

StatsPanelCardTitle.displayName = 'StatsPanelCardTitle';

const StatsPanelCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <P
    ref={ref}
    className={cn(
      '@2xl:h-[100px] h-auto text-white transition-all duration-400 group-hover:text-content-primary',
      className,
    )}
    {...props}
  />
));

StatsPanelCardDescription.displayName = 'StatsPanelCardDescription';

export {
  StatsPanel,
  StatsPanelCard,
  StatsPanelCardDescription,
  StatsPanelCardTitle,
  StatsPanelCardValue,
};
