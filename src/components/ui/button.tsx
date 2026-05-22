import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'cursor-pointer m-0! tracking-[0.48px] inline-flex items-center justify-center gap-2 uppercase whitespace-nowrap rounded-none text-lg font-bold transition-colors focus-visible:outline-hidden focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-accent-dark-red text-primary-white black-arrow hover:bg-accent-red',
        'primary-without-icon': 'bg-accent-dark-red text-primary-white hover:bg-accent-red',
        secondary:
          'bg-primary-blue-600 text-primary-white white-arrow hover:bg-primary-blue-400',
        'secondary-without-icon':
          'bg-primary-blue-600 text-primary-white hover:bg-primary-blue-400',
        custom:
          'bg-custom-color-600 text-custom-foreground white-arrow hover:bg-custom-color-400',
        'custom-without-icon':
          'bg-custom-color-600 text-custom-foreground hover:bg-custom-color-400',
        tertiary:
          'bg-primary-gray-300 text-primary-gray-700 dark:bg-primary-gray-600 dark:text-primary-white red-arrow hover:bg-primary-gray-400 dark:hover:bg-primary-gray-550',
        link: 'text-primary-gray-700 dark:text-primary-white red-arrow',
        'link-without-icon':
          'text-primary-gray-700 dark:text-primary-white dark:hover:text-primary-gray-500 hover:text-primary-gray-500',
        outline:
          'bg-transparent text-primary-black dark:text-primary-white border-2 border-primary-gray-700 dark:border-primary-gray-100 dark:hover:bg-primary-gray-550 hover:bg-primary-gray-300',
        icon: 'bg-transparent dark:text-primary-gray-100 text-primary-gray-700 dark:hover:text-primary-gray-500 hover:text-primary-gray-500',
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
        base: 'leading-none text-base!',
        xs: 'leading-none text-xs!',
        sm: 'leading-none text-sm!',
        xl: 'leading-none text-xl!',
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
      arrow: false,
    },
  },
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>
>(({ className, variant, size, padding, ...props }, ref) => {
  const Comp = 'button';
  return (
    <Comp
      {...props}
      className={cn(buttonVariants({ variant, size, padding, arrow: variant === 'primary' || variant === 'secondary' || variant === 'custom' || variant === 'link' }), className)}
      ref={ref}
    />
  );
});
Button.displayName = 'Button';

export { Button };
