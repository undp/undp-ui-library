import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';

import { cn, generateRandomId } from '@/lib/utils';
import { Label } from './label';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    label?: string;
    labelClassName?: string;
    radioClassName?: string;
  }
>(({ className, labelClassName, radioClassName, label, ...props }, ref) => {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label ? <Label className={labelClassName}>{label}</Label> : null}
      <RadioGroupPrimitive.Root
        {...props}
        className={cn(
          'flex gap-x-4 gap-y-2 flex-row flex-wrap',
          radioClassName,
        )}
        ref={ref}
      />
    </div>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    label: string;
    labelClassName?: string;
    radioClassName?: string;
  }
>(({ className, labelClassName, radioClassName, label, ...props }, ref) => {
  const id = props.id || generateRandomId();
  return (
    <div className={cn('flex flex-row gap-1 items-center', className)}>
      <RadioGroupPrimitive.Item
        {...props}
        ref={ref}
        className={cn(
          'aspect-square h-4 w-4 bg-transparent rounded-full border-2 border-primary-blue-600 text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 hover:bg-primary-blue-100',
          radioClassName,
        )}
        id={id}
      >
        <RadioGroupPrimitive.Indicator className='flex items-center justify-center'>
          <Circle className='h-2.5 w-2.5 fill-primary-blue-600 stroke-0' />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      <Label className={cn('mt-0.5', labelClassName)} htmlFor={id}>
        {label}
      </Label>
    </div>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
