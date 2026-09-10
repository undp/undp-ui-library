import { cva, type VariantProps } from 'class-variance-authority';
import { Check, X } from 'lucide-react';
import { Switch as SwitchPrimitives } from 'radix-ui';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { P } from './typography';

const switchVariants = cva(
  'peer inline-flex h-[30px] w-[60px] bg-surface-hard shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-ring disabled:cursor-not-allowed disabled:opacity-disabled',
  {
    variants: {
      color: {
        primary: 'data-[state=checked]:bg-primary',
        secondary: 'data-[state=checked]:bg-secondary',
        tertiary: 'data-[state=checked]:bg-tertiary',
        quaternary: 'data-[state=checked]:bg-quaternary',
        success: 'data-[state=checked]:bg-success',
        error: 'data-[state=checked]:bg-error',
        warning: 'data-[state=checked]:bg-warning',
        info: 'data-[state=checked]:bg-info',
        foreground: 'data-[state=checked]:bg-foreground',

        male: 'data-[state=checked]:bg-categorical-male',
        female: 'data-[state=checked]:bg-categorical-female',
        urban: 'data-[state=checked]:bg-categorical-urban',
        rural: 'data-[state=checked]:bg-categorical-rural',
        child: 'data-[state=checked]:bg-categorical-child',
        adolescent: 'data-[state=checked]:bg-categorical-adolescent',
        'young-adult': 'data-[state=checked]:bg-categorical-young-adult',
        adult: 'data-[state=checked]:bg-categorical-adult',
        'older-adult': 'data-[state=checked]:bg-categorical-older-adult',

        red: 'data-[state=checked]:bg-accent-red',
        orange: 'data-[state=checked]:bg-accent-orange',
        yellow: 'data-[state=checked]:bg-accent-yellow',
        lime: 'data-[state=checked]:bg-accent-lime',
        green: 'data-[state=checked]:bg-accent-green',
        teal: 'data-[state=checked]:bg-accent-teal',
        azure: 'data-[state=checked]:bg-accent-azure',
        blue: 'data-[state=checked]:bg-accent-blue',
        violet: 'data-[state=checked]:bg-accent-violet',
        pink: 'data-[state=checked]:bg-accent-pink',

        'sdg-1': 'data-[state=checked]:bg-sdg-1',
        'sdg-2': 'data-[state=checked]:bg-sdg-2',
        'sdg-3': 'data-[state=checked]:bg-sdg-3',
        'sdg-4': 'data-[state=checked]:bg-sdg-4',
        'sdg-5': 'data-[state=checked]:bg-sdg-5',
        'sdg-6': 'data-[state=checked]:bg-sdg-6',
        'sdg-7': 'data-[state=checked]:bg-sdg-7',
        'sdg-8': 'data-[state=checked]:bg-sdg-8',
        'sdg-9': 'data-[state=checked]:bg-sdg-9',
        'sdg-10': 'data-[state=checked]:bg-sdg-10',
        'sdg-11': 'data-[state=checked]:bg-sdg-11',
        'sdg-12': 'data-[state=checked]:bg-sdg-12',
        'sdg-13': 'data-[state=checked]:bg-sdg-13',
        'sdg-14': 'data-[state=checked]:bg-sdg-14',
        'sdg-15': 'data-[state=checked]:bg-sdg-15',
        'sdg-16': 'data-[state=checked]:bg-sdg-16',
        'sdg-17': 'data-[state=checked]:bg-sdg-17',
      },
      size: {
        small: 'h-[20px] w-[40px]',
        normal: 'h-[30px] w-[60px]',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'normal',
    },
  },
);

const thumbVariant = cva(
  'bg-background pointer-events-none block rounded-full shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-[4px] data-[state=unchecked]:rtl:translate-x-[-2px]',
  {
    variants: {
      size: {
        small: 'h-[14px] w-[14px] ',
        normal: 'h-[22px] w-[22px] ',
      },
      showIconWithSize: {
        yes_with_small:
          'data-[state=checked]:translate-x-[8px] data-[state=checked]:rtl:translate-x-[-8px]',
        no_with_small:
          'data-[state=checked]:translate-x-[22px] data-[state=checked]:rtl:translate-x-[-22px]',
        yes_with_normal:
          'data-[state=checked]:translate-x-[12px] data-[state=checked]:rtl:translate-x-[-12px]',
        no_with_normal:
          'data-[state=checked]:translate-x-[32px] data-[state=checked]:rtl:translate-x-[-32px]',
      },
    },
    defaultVariants: { size: 'normal', showIconWithSize: 'no_with_normal' },
  },
);

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
    VariantProps<typeof switchVariants> & {
      showValue?: boolean;
      showIcon?: boolean;
      values?: [string, string];
    }
>(
  (
    {
      className,
      showValue = false,
      showIcon = true,
      values = ['On', 'Off'],
      onCheckedChange,
      color,
      size = 'normal',
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState(props.defaultChecked || false);
    return (
      <div className='flex items-center gap-2'>
        <SwitchPrimitives.Root
          {...props}
          className={cn(switchVariants({ color, size }), className)}
          ref={ref}
          onCheckedChange={(d) => {
            setValue(d);
            onCheckedChange?.(d);
          }}
        >
          {showIcon && value ? (
            <Check
              size={size === 'normal' ? 14 : 10}
              className={
                size === 'normal'
                  ? 'ml-2 text-content-reverse rtl:mr-2 rtl:ml-0'
                  : 'ml-1 text-content-reverse rtl:mr-1 rtl:ml-0'
              }
            />
          ) : null}
          <SwitchPrimitives.Thumb
            className={cn(
              thumbVariant({
                size,
                showIconWithSize: showIcon
                  ? `yes_with_${size as 'small' | 'normal'}`
                  : `no_with_${size as 'small' | 'normal'}`,
              }),
            )}
          />
          {showIcon && !value ? (
            <X
              size={size === 'normal' ? 14 : 10}
              className={size === 'normal' ? 'ml-3 rtl:mr-3 rtl:ml-0' : 'ml-2 rtl:mr-2 rtl:ml-0'}
            />
          ) : null}
        </SwitchPrimitives.Root>
        {showValue ? (
          <P size='base' marginBottom='none' leading='none'>
            {value ? values[0] : values[1]}
          </P>
        ) : null}
      </div>
    );
  },
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
