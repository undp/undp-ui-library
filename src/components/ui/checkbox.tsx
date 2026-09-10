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
        error: 'border-error group-hover:border-error-light',
        warning: 'border-warning group-hover:border-warning-light',
        info: 'border-info group-hover:border-info-light',
        success: 'border-success group-hover:border-success-light',

        'sdg-1': 'border-sdg-1 group-hover:border-sdg-1-light',
        'sdg-2': 'border-sdg-2 group-hover:border-sdg-2-light',
        'sdg-3': 'border-sdg-3 group-hover:border-sdg-3-light',
        'sdg-4': 'border-sdg-4 group-hover:border-sdg-4-light',
        'sdg-5': 'border-sdg-5 group-hover:border-sdg-5-light',
        'sdg-6': 'border-sdg-6 group-hover:border-sdg-6-light',
        'sdg-7': 'border-sdg-7 group-hover:border-sdg-7-light',
        'sdg-8': 'border-sdg-8 group-hover:border-sdg-8-light',
        'sdg-9': 'border-sdg-9 group-hover:border-sdg-9-light',
        'sdg-10': 'border-sdg-10 group-hover:border-sdg-10-light',
        'sdg-11': 'border-sdg-11 group-hover:border-sdg-11-light',
        'sdg-12': 'border-sdg-12 group-hover:border-sdg-12-light',
        'sdg-13': 'border-sdg-13 group-hover:border-sdg-13-light',
        'sdg-14': 'border-sdg-14 group-hover:border-sdg-14-light',
        'sdg-15': 'border-sdg-15 group-hover:border-sdg-15-light',
        'sdg-16': 'border-sdg-16 group-hover:border-sdg-16-light',
        'sdg-17': 'border-sdg-17 group-hover:border-sdg-17-light',

        male: 'border-categorical-male group-hover:border-categorical-male-light',
        female: 'border-categorical-female group-hover:border-categorical-female-light',
        urban: 'border-categorical-urban group-hover:border-categorical-urban-light',
        rural: 'border-categorical-rural group-hover:border-categorical-rural-light',
        child: 'border-categorical-child group-hover:border-categorical-child-light',
        adolescent: 'border-categorical-adolescent group-hover:border-categorical-adolescent-light',
        'young-adult':
          'border-categorical-young-adult group-hover:border-categorical-young-adult-light',
        adult: 'border-categorical-adult group-hover:border-categorical-adult-light',
        'older-adult':
          'border-categorical-older-adult group-hover:border-categorical-older-adult-light',

        red: 'border-accent-red group-hover:border-accent-red-light',
        orange: 'border-accent-orange group-hover:border-accent-orange-light',
        yellow: 'border-accent-yellow group-hover:border-accent-yellow-light',
        lime: 'border-accent-lime group-hover:border-accent-lime-light',
        green: 'border-accent-green group-hover:border-accent-green-light',
        teal: 'border-accent-teal group-hover:border-accent-teal-light',
        azure: 'border-accent-azure group-hover:border-accent-azure-light',
        blue: 'border-accent-blue group-hover:border-accent-blue-light',
        violet: 'border-accent-violet group-hover:border-accent-violet-light',
        pink: 'border-accent-pink group-hover:border-accent-pink-light',
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
      error: 'stroke-error',
      warning: 'stroke-warning',
      info: 'stroke-info',
      success: 'stroke-success',

      'sdg-1': 'stroke-sdg-1',
      'sdg-2': 'stroke-sdg-2',
      'sdg-3': 'stroke-sdg-3',
      'sdg-4': 'stroke-sdg-4',
      'sdg-5': 'stroke-sdg-5',
      'sdg-6': 'stroke-sdg-6',
      'sdg-7': 'stroke-sdg-7',
      'sdg-8': 'stroke-sdg-8',
      'sdg-9': 'stroke-sdg-9',
      'sdg-10': 'stroke-sdg-10',
      'sdg-11': 'stroke-sdg-11',
      'sdg-12': 'stroke-sdg-12',
      'sdg-13': 'stroke-sdg-13',
      'sdg-14': 'stroke-sdg-14',
      'sdg-15': 'stroke-sdg-15',
      'sdg-16': 'stroke-sdg-16',
      'sdg-17': 'stroke-sdg-17',

      male: 'stroke-male',
      female: 'stroke-female',
      urban: 'stroke-urban',
      rural: 'stroke-rural',
      child: 'stroke-child',
      adolescent: 'stroke-adolescent',
      'young-adult': 'stroke-young-adult',
      adult: 'stroke-adult',
      'older-adult': 'stroke-older-adult',

      red: 'stroke-red',
      orange: 'stroke-orange',
      yellow: 'stroke-yellow',
      lime: 'stroke-lime',
      green: 'stroke-green',
      teal: 'stroke-teal',
      azure: 'stroke-azure',
      blue: 'stroke-blue',
      violet: 'stroke-violet',
      pink: 'stroke-pink',
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

export type CheckBoxVariantProps = VariantProps<typeof checkBoxVariants>;
