import { cva, type VariantProps } from 'class-variance-authority';
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
      hoverColor: {
        default:
          'bg-[linear-gradient(0deg,_color-mix(in_srgb,_var(--card-hover-color)_80%,_transparent),_transparent_140%)]',
        primary:
          'bg-[linear-gradient(0deg,_color-mix(in_srgb,_var(--primary)_80%,_transparent),_transparent_140%)]',
        secondary:
          'bg-[linear-gradient(0deg,_color-mix(in_srgb,_var(--secondary)_80%,_transparent),_transparent_140%)]',
        tertiary:
          'bg-[linear-gradient(0deg,_color-mix(in_srgb,_var(--tertiary)_80%,_transparent),_transparent_140%)]',
        quaternary:
          'bg-[linear-gradient(0deg,_color-mix(in_srgb,_var(--quaternary)_80%,_transparent),_transparent_140%)]',
        info: 'bg-[linear-gradient(0deg,_color-mix(in_srgb,_var(--info)_80%,_transparent),_transparent_140%)]',
        success:
          'bg-[linear-gradient(0deg,_color-mix(in_srgb,_var(--success)_80%,_transparent),_transparent_140%)]',
        warning:
          'bg-[linear-gradient(0deg,_color-mix(in_srgb,_var(--warning)_80%,_transparent),_transparent_140%)]',
        error:
          'bg-[linear-gradient(0deg,_color-mix(in_srgb,_var(--error)_80%,_transparent),_transparent_140%)]',
        background:
          'bg-[linear-gradient(0deg,_color-mix(in_srgb,_var(--background)_80%,_transparent),_transparent_140%)]',
        foreground:
          'bg-[linear-gradient(0deg,_color-mix(in_srgb,_var(--foreground)_80%,_transparent),_transparent_140%)]',
      },
    },
    defaultVariants: {
      hoverColor: 'default',
    },
  },
);

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverImage?: string;
}

const StatsPanelCard = React.forwardRef<
  HTMLDivElement,
  VariantProps<typeof hoverBGVariant> & CardProps
>(({ className, hoverColor = 'default', hoverImage, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'group relative box-border flex @2xl:min-h-196.75 min-h-94.5 @2xl:w-1/2 @3xl:w-1/4 w-full items-center bg-foreground-soft px-16',
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
    <div className={hoverBGVariant({ hoverColor })} />
    <div className='relative z-5 flex flex-col'>{children}</div>
  </div>
));

StatsPanelCard.displayName = 'StatsPanelCard';

const StatsPanelCardValue = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <H2
    ref={ref}
    className={cn(
      'text-left font-heading text-transparent leading-xs transition-all duration-400 [-webkit-text-stroke:2px_var(--content-reverse)] group-hover:text-content-primary rtl:text-right group-hover:[-webkit-text-stroke:0px]',
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
      '@2xl:h-25 h-auto text-white transition-all duration-400 group-hover:text-content-primary',
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
