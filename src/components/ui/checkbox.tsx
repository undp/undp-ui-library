import { cva, type VariantProps } from 'class-variance-authority';
import { Check } from 'lucide-react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import React, { useMemo } from 'react';
import { cn, generateRandomId } from '@/lib/utils';
import { Label } from './label';

const checkBoxVariants = cva(
  'peer h-4 w-4 shrink-0 rounded bg-background focus-visible:outline-hidden focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-disabled',
  {
    variants: {
      color: {
        primary: 'border-primary group-hover:border-primary-light',
        secondary: 'border-secondary group-hover:border-secondary-light',
        tertiary: 'border-tertiary group-hover:border-tertiary-light',
        quaternary: 'border-quaternary group-hover:border-quaternary-light',
        foreground: 'border-foreground group-hover:border-foreground-soft',
        surface: 'border-stroke group-hover:border-stroke-hover',
      },
      variant: {
        light: 'border',
        normal: 'border-2',
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
    },
    defaultVariants: {
      color: 'primary',
      variant: 'normal',
      rounded: 'base',
    },
  },
);

const checkVariants = cva('h-4 w-4', {
  variants: {
    color: {
      primary: 'stroke-primary',
      secondary: 'stroke-secondary',
      tertiary: 'stroke-tertiary',
      quaternary: 'stroke-quaternary',
      foreground: 'stroke-foreground',
      surface: 'stroke-surface',
    },
    variant: {
      light: '-mt-px',
      normal: '-mt-0.5',
    },
  },
  defaultVariants: {
    color: 'primary',
    variant: 'normal',
  },
});
const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
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
      rounded,
      variant,
      ...props
    },
    ref,
  ) => {
    const id = useMemo(() => props.id || generateRandomId(), [props.id]);
    return (
      <div className={cn('group flex flex-row items-center gap-2', className)}>
        <CheckboxPrimitive.Root
          {...props}
          ref={ref}
          className={cn(checkBoxVariants({ color, variant, rounded }), checkBoxClassName)}
          id={id}
        >
          <CheckboxPrimitive.Indicator
            className={cn('flex items-center justify-center text-current')}
          >
            <Check
              className={cn(checkVariants({ color, variant }), checkIconClassName)}
              strokeWidth={variant === 'light' ? 2 : 4}
            />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label ? (
          <Label className={cn('mt-0.5 text-base', labelClassName)} htmlFor={id}>
            {label}
          </Label>
        ) : null}
      </div>
    );
  },
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
