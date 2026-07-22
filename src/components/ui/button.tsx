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
        base: 'text-base leading-none',
        xs: 'text-xs leading-none',
        sm: 'text-sm leading-none',
        xl: 'text-xl leading-none',
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
            : variant === 'secondary' ||
                variant === 'foreground' ||
                variant === 'foreground-soft' ||
                variant === 'success' ||
                variant === 'error' ||
                variant === 'info'
              ? 'background-arrow'
              : variant === 'link' ||
                  variant === 'tertiary' ||
                  variant === 'quaternary' ||
                  variant === 'surface' ||
                  variant === 'surface-hard' ||
                  variant === 'outline' ||
                  variant === 'background' ||
                  variant === 'background-soft'
                ? 'primary-arrow'
                : ''
          : '',
        className,
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
