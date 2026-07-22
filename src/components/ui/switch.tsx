import { cva, type VariantProps } from 'class-variance-authority';
import { Check, X } from 'lucide-react';
import { Switch as SwitchPrimitives } from 'radix-ui';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { P } from './typography';

const switchVariants = cva(
  'peer inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-ring disabled:cursor-not-allowed disabled:opacity-disabled',
  {
    variants: {
      color: {
        primary: 'bg-surface-hard data-[state=checked]:bg-primary',
        secondary: 'bg-surface-hard data-[state=checked]:bg-secondary',
        tertiary: 'bg-surface-hard data-[state=checked]:bg-tertiary',
        quaternary: 'bg-surface-hard data-[state=checked]:bg-quaternary',
        foreground: 'bg-surface-hard data-[state=checked]:bg-foreground',
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
