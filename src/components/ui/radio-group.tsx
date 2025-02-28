import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';

import { cva } from 'class-variance-authority';
import { cn, generateRandomId } from '@/lib/utils';
import { Label } from './label';

const radioVariants = cva(
  'aspect-square h-4 w-4 bg-transparent rounded-full border-2 text-primary dark:text-primary-white shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        blue: 'border-primary-blue-600 hover:bg-primary-blue-100 dark:border-primary-blue-400 dark:hover:bg-primary-blue-200',
        red: 'border-accent-dark-red hover:bg-accent-light-red dark:border-accent-red dark:hover:bg-accent-light-red',
        black:
          'border-primary-gray-700 hover:bg-primary-gray-400 dark:border-primary-gray-100 dark:hover:bg-primary-gray-550',
      },
    },
    defaultVariants: {
      variant: 'red',
    },
  },
);

const radioCheckVariants = cva('h-2.5 w-2.5 stroke-0', {
  variants: {
    variant: {
      blue: 'fill-primary-blue-600 dark:fill-primary-blue-400',
      red: 'fill-accent-dark-red dark:fill-accent-red',
      black: 'fill-primary-gray-700 dark:fill-primary-gray-100',
    },
  },
  defaultVariants: {
    variant: 'red',
  },
});

const RadioGroupContext = React.createContext<{
  variant?: 'blue' | 'red' | 'black' | null | undefined;
}>({
  variant: null,
});

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    variant: 'blue' | 'red' | 'black' | null | undefined;
  }
>(({ className, variant, ...props }, ref) => {
  const contextValue = React.useMemo(
    () => ({
      variant,
    }),
    [variant],
  );
  return (
    <RadioGroupContext.Provider value={contextValue}>
      <RadioGroupPrimitive.Root
        {...props}
        className={cn('flex gap-x-4 gap-y-2 flex-row flex-wrap', className)}
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
>(({ className, radioClassName, labelClassName, label, ...props }, ref) => {
  const id = props.id || generateRandomId();
  const { variant } = React.useContext(RadioGroupContext);
  return (
    <div className={cn('flex flex-row gap-2 items-center', className)}>
      <RadioGroupPrimitive.Item
        {...props}
        ref={ref}
        className={cn(radioVariants({ variant }), radioClassName)}
        id={id}
      >
        <RadioGroupPrimitive.Indicator className='flex items-center justify-center'>
          <Circle className={radioCheckVariants({ variant })} />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <Label className={cn('mt-0.5 !text-base', labelClassName)} htmlFor={id}>
        {label}
      </Label>
    </div>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
