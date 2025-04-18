import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import { cva } from 'class-variance-authority';

import { Label } from './label';

import { cn, generateRandomId } from '@/lib/utils';

const radioVariants = cva(
  'aspect-square h-4 w-4 bg-primary-white dark:bg-primary-gray-650 rounded-full text-primary-gray-700 dark:text-primary-white shadow-sm focus:outline-hidden focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
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

const radioCheckVariants = cva('stroke-0', {
  variants: {
    color: {
      blue: 'fill-primary-blue-600 dark:fill-primary-blue-400',
      red: 'fill-accent-dark-red dark:fill-accent-red',
      black: 'fill-primary-gray-700 dark:fill-primary-gray-100',
      custom: 'fill-custom-color-600 dark:fill-custom-color-400',
    },
    variant: {
      light: 'h-1.5 w-1.5',
      normal: 'h-2.5 w-2.5',
    },
  },
  defaultVariants: {
    color: 'red',
    variant: 'normal',
  },
});

const RadioGroupContext = React.createContext<{
  color?: 'blue' | 'red' | 'black' | 'custom' | null | undefined;
  variant?: 'light' | 'normal' | null | undefined;
}>({
  color: null,
  variant: null,
});

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    color?: 'blue' | 'red' | 'black' | 'custom' | null | undefined;
    variant?: 'light' | 'normal' | null | undefined;
  }
>(({
  className, color, variant, ...props 
}, ref) => {
  const contextValue = React.useMemo(
    () => ({
      color,
      variant,
    }),
    [color, variant],
  );
  return (
    <RadioGroupContext.Provider value={contextValue}>
      <RadioGroupPrimitive.Root
        {...props}
        className={cn(
          'flex gap-x-4 gap-y-2 flex-row flex-wrap rtl:[direction:rtl]',
          className,
        )}
        ref={ref}
      />
    </RadioGroupContext.Provider>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    label: string;
    radioClassName?: string;
    labelClassName?: string;
  }
>(({
  className, radioClassName, labelClassName, label, ...props 
}, ref) => {
  const id = props.id || generateRandomId();
  const { color, variant } = React.useContext(RadioGroupContext);
  return (
    <div className={cn('flex flex-row gap-2 items-center', className)}>
      <RadioGroupPrimitive.Item
        {...props}
        ref={ref}
        className={cn(radioVariants({ color, variant }), radioClassName)}
        id={id}
      >
        <RadioGroupPrimitive.Indicator className='flex items-center justify-center'>
          <Circle className={radioCheckVariants({ color, variant })} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <Label className={cn('mt-0.5 text-base!', labelClassName)} htmlFor={id}>
        {label}
      </Label>
    </div>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
