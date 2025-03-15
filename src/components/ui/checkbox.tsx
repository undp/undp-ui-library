import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cva, VariantProps } from 'class-variance-authority';
import { cn, generateRandomId } from '@/lib/utils';
import { Label } from './label';

const checkBoxVariants = cva(
  'peer h-4 w-4 shrink-0 rounded-0 bg-primary-white dark:bg-primary-gray-650 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      color: {
        blue: 'border-primary-blue-600 hover:bg-primary-blue-100 dark:border-primary-blue-400 dark:hover:bg-primary-blue-200',
        red: 'border-accent-dark-red hover:bg-accent-light-red dark:border-accent-red dark:hover:bg-accent-light-red',
        black:
          'border-primary-gray-700 hover:bg-primary-gray-400 dark:border-primary-gray-100 dark:hover:bg-primary-gray-550',
        custom:
          'border-custom-color-600 hover:bg-custom-color-100 dark:border-custom-color-400 dark:hover:bg-custom-color-200',
      },
      variant: {
        light: 'border',
        normal: 'border-2',
      },
    },
    defaultVariants: {
      color: 'red',
      variant: 'normal',
    },
  },
);

const checkVariants = cva('h-4 w-4', {
  variants: {
    color: {
      blue: 'stroke-primary-blue-600 dark:stroke-primary-blue-400',
      red: 'stroke-accent-dark-red dark:stroke-accent-red',
      black: 'stroke-primary-gray-700 dark:stroke-primary-gray-100',
      custom: 'stroke-custom-color-600 dark:stroke-custom-color-400',
    },
    variant: {
      light: '-mt-px',
      normal: '-mt-0.5',
    },
  },
  defaultVariants: {
    color: 'red',
    variant: 'normal',
  },
});
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
    VariantProps<typeof checkBoxVariants> & {
      label?: string;
      labelClassName?: string;
      checkBoxClassName?: string;
      checkIconClassName?: string;
    }
>(
  (
    {
      className,
      labelClassName,
      checkBoxClassName,
      checkIconClassName,
      label,
      color,
      variant,
      ...props
    },
    ref,
  ) => {
    const id = props.id || generateRandomId();
    return (
      <div className={cn('flex flex-row gap-2 items-center', className)}>
        <CheckboxPrimitive.Root
          {...props}
          ref={ref}
          className={cn(
            checkBoxVariants({ color, variant }),
            checkBoxClassName,
          )}
          id={id}
        >
          <CheckboxPrimitive.Indicator
            className={cn('flex items-center justify-center text-current')}
          >
            <Check
              className={cn(
                checkVariants({ color, variant }),
                checkIconClassName,
              )}
              strokeWidth={variant === 'light' ? 2 : 4}
            />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label ? (
          <Label
            className={cn('mt-0.5 !text-base', labelClassName)}
            htmlFor={id}
          >
            {label}
          </Label>
        ) : null}
      </div>
    );
  },
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
