import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'cursor-pointer m-0! tracking-[0.48px] inline-flex items-center justify-center gap-2 uppercase whitespace-nowrap rounded font-bold transition-colors focus-visible:outline-hidden focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-content-reverse hover:bg-primary-hover',
        secondary: 'bg-secondary text-content-reverse hover:bg-secondary-hover',
        tertiary: 'bg-tertiary text-content-primary hover:bg-tertiary-hover',
        quaternary: 'bg-quaternary text-content-primary hover:bg-quaternary-hover',

        link: 'text-content-primary hover:text-content-secondary',
        outline:
          'bg-transparent text-content-primary border-2 border-foreground hover:bg-surface-xs',
        icon: 'bg-transparent text-content-primary hover:text-content-secondary',

        success: 'bg-success text-content-reverse hover:bg-success-hover',
        warning: 'bg-warning text-content-primary hover:bg-warning-hover',
        info: 'bg-info text-content-reverse hover:bg-info-hover',
        error: 'bg-error text-content-reverse hover:bg-error-hover',

        surface: 'bg-surface text-content-primary hover:bg-surface-hover',
        'surface-hard': 'bg-surface-hard text-content-primary hover:bg-surface-hard-hover',
        background: 'bg-background text-content-primary hover:bg-background-soft',
        'background-soft': 'bg-background-soft text-content-primary hover:bg-background',
        foreground: 'bg-foreground text-content-reverse hover:bg-foreground-soft',
        'foreground-soft': 'bg-foreground-soft text-content-reverse hover:bg-foreground',

        red: 'bg-accent-red text-content-reverse hover:bg-accent-red-hover',
        orange: 'bg-accent-orange text-content-reverse hover:bg-accent-orange-hover',
        yellow: 'bg-accent-yellow text-content-reverse hover:bg-accent-yellow-hover',
        lime: 'bg-accent-lime text-content-reverse hover:bg-accent-lime-hover',
        green: 'bg-accent-green text-content-reverse hover:bg-accent-green-hover',
        teal: 'bg-accent-teal text-content-reverse hover:bg-accent-teal-hover',
        azure: 'bg-accent-azure text-content-reverse hover:bg-accent-azure-hover',
        blue: 'bg-accent-blue text-content-reverse hover:bg-accent-blue-hover',
        violet: 'bg-accent-violet text-content-reverse hover:bg-accent-violet-hover',
        pink: 'bg-accent-pink text-content-reverse hover:bg-accent-pink-hover',

        'sdg-1': 'bg-sdg-1 text-content-reverse hover:bg-sdg-1-hover',
        'sdg-2': 'bg-sdg-2 text-content-reverse hover:bg-sdg-2-hover',
        'sdg-3': 'bg-sdg-3 text-content-reverse hover:bg-sdg-3-hover',
        'sdg-4': 'bg-sdg-4 text-content-reverse hover:bg-sdg-4-hover',
        'sdg-5': 'bg-sdg-5 text-content-reverse hover:bg-sdg-5-hover',
        'sdg-6': 'bg-sdg-6 text-content-reverse hover:bg-sdg-6-hover',
        'sdg-7': 'bg-sdg-7 text-content-reverse hover:bg-sdg-7-hover',
        'sdg-8': 'bg-sdg-8 text-content-reverse hover:bg-sdg-8-hover',
        'sdg-9': 'bg-sdg-9 text-content-reverse hover:bg-sdg-9-hover',
        'sdg-10': 'bg-sdg-10 text-content-reverse hover:bg-sdg-10-hover',
        'sdg-11': 'bg-sdg-11 text-content-reverse hover:bg-sdg-11-hover',
        'sdg-12': 'bg-sdg-12 text-content-reverse hover:bg-sdg-12-hover',
        'sdg-13': 'bg-sdg-13 text-content-reverse hover:bg-sdg-13-hover',
        'sdg-14': 'bg-sdg-14 text-content-reverse hover:bg-sdg-14-hover',
        'sdg-15': 'bg-sdg-15 text-content-reverse hover:bg-sdg-15-hover',
        'sdg-16': 'bg-sdg-16 text-content-reverse hover:bg-sdg-16-hover',
        'sdg-17': 'bg-sdg-17 text-content-reverse hover:bg-sdg-17-hover',

        male: 'bg-categorical-male text-content-reverse hover:bg-categorical-male-hover',
        female: 'bg-categorical-female text-content-reverse hover:bg-categorical-female-hover',
        urban: 'bg-categorical-urban text-content-reverse hover:bg-categorical-urban-hover',
        rural: 'bg-categorical-rural text-content-reverse hover:bg-categorical-rural-hover',
      },
      arrow: {
        true: `
          after:content-['']
          after:inline-block
          after:h-[20px]
          after:w-[13px]
          after:ml-3
          rtl:after:ml-0
          rtl:after:mr-3
          rtl:after:scale-x-[-1]
          after:bg-no-repeat
          after:bg-left
          after:transition-transform
          after:duration-200
          after:ease-in-out
          hover:after:translate-x-[70%]
          rtl:hover:after:-translate-x-[70%]
          disabled:hover:after:translate-x-0
          rtl:disabled:hover:after:translate-x-0
          group-hover:after:translate-x-[70%]
          rtl:group-hover:after:-translate-x-[70%]
          disabled:group-hover:after:translate-x-0
          rtl:disabled:group-hover:after:translate-x-0
        `,
      },
      size: {
        base: 'text-base leading-xs',
        xs: 'text-xs leading-xs',
        sm: 'text-sm leading-xs',
        xl: 'text-xl leading-xs',
      },
      rounded: {
        base: 'rounded-base',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        full: 'rounded-full',
      },
      padding: {
        base: 'py-4 px-6',
        sm: 'px-4 py-2',
        none: 'py-0 px-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base',
      padding: 'base',
      rounded: 'base',
      arrow: true,
    },
  },
);
function Button({
  className,
  variant = 'primary',
  size,
  arrow = true,
  rounded,
  padding,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot='button'
      data-variant={variant}
      data-size={size}
      className={cn(
        buttonVariants({
          variant,
          size,
          rounded,
          padding,
          arrow: variant === 'icon' ? false : arrow,
        }),
        arrow
          ? variant === 'primary'
            ? 'foreground-arrow'
            : variant === 'link' ||
                variant === 'tertiary' ||
                variant === 'quaternary' ||
                variant === 'surface' ||
                variant === 'surface-hard' ||
                variant === 'outline' ||
                variant === 'background' ||
                variant === 'background-soft'
              ? 'primary-arrow'
              : 'background-arrow'
          : '',
        className,
      )}
      {...props}
    />
  );
}

export type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>;

export { Button, buttonVariants };
