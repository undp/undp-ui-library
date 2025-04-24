import React, { useState } from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cva, VariantProps } from 'class-variance-authority';
import { Check, X } from 'lucide-react';

import { P } from './typography';

import { cn } from '@/lib/utils';

const switchVariants = cva(
  'peer inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-primary-blue-100 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      color: {
        blue: 'bg-primary-gray-400 data-[state=checked]:bg-primary-blue-600 dark:bg-primary-gray-550 dark:data-[state=checked]:bg-primary-blue-400',
        red: 'bg-primary-gray-400 data-[state=checked]:bg-accent-dark-red dark:bg-primary-gray-550 dark:data-[state=checked]:bg-accent-red',
        black:
          'bg-primary-gray-400 data-[state=checked]:bg-primary-gray-600 dark:bg-primary-gray-550 dark:data-[state=checked]:bg-primary-gray-300',
        custom: 'bg-primary-gray-400 data-[state=checked]:bg-custom-color-600',
      },
      size: {
        small: 'h-[20px] w-[40px]',
        normal: 'h-[30px] w-[60px]',
      },
    },
    defaultVariants: {
      color: 'blue',
      size: 'normal',
    },
  },
);

const thumbVariant = cva(
  'bg-primary-white pointer-events-none block rounded-full shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-[4px] data-[state=unchecked]:rtl:translate-x-[-2px]',
  {
    variants: {
      size: {
        small: 'h-[14px] w-[14px] ',
        normal: 'h-[22px] w-[22px] ',
      },
      showIconWithSize: {
        yes_with_small: 'data-[state=checked]:translate-x-[8px] data-[state=checked]:rtl:translate-x-[-8px]',
        no_with_small: 'data-[state=checked]:translate-x-[22px] data-[state=checked]:rtl:translate-x-[-22px]',
        yes_with_normal: 'data-[state=checked]:translate-x-[12px] data-[state=checked]:rtl:translate-x-[-12px]',
        no_with_normal: 'data-[state=checked]:translate-x-[32px] data-[state=checked]:rtl:translate-x-[-32px]',
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
>(({
  className, showValue = false, showIcon = true, values = ['On', 'Off'], onCheckedChange, color, size = 'normal', ...props 
}, ref) => {
  const [value, setValue] = useState(props.defaultChecked || false);
  return (
    <div className='flex gap-2 items-center'>
      <SwitchPrimitives.Root
        {...props}
        className={cn(switchVariants({ color, size }), className)}
        ref={ref}
        onCheckedChange={d => {
          setValue(d);
          onCheckedChange?.(d);
        }}
      >        
        {
          showIcon &&  value ?
            <Check size={size === 'normal' ? 14 : 10} className={size === 'normal' ? 'ml-2 rtl:mr-2 rtl:ml-0 text-primary-white' : 'ml-1 rtl:mr-1 rtl:ml-0 text-primary-white'} /> : null
        }
        <SwitchPrimitives.Thumb className={cn(thumbVariant({ size, showIconWithSize: (showIcon ? `yes_with_${size as 'small' | 'normal'}` : `no_with_${size as 'small' | 'normal'}`) }))} />
        {
          showIcon &&  !value ?
            <X size={size === 'normal' ? 14 : 10} className={size === 'normal' ? 'ml-3 rtl:mr-3 rtl:ml-0' : 'ml-2 rtl:mr-2 rtl:ml-0'} /> : null
        }
      </SwitchPrimitives.Root>
      {
        showValue ? <P size={'base'} marginBottom={'none'} leading={'none'}>{value ? values[0] : values[1]}</P> : null
      }
    </div>
  );});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
