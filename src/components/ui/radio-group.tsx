import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cva, type VariantProps } from 'class-variance-authority';
import { Circle } from 'lucide-react';
import React, { useMemo } from 'react';
import { cn, generateRandomId } from '@/lib/utils';
import { Label } from './label';

const radioVariants = cva(
  'peer aspect-square h-4 w-4 bg-background rounded-full text-content-primary focus:outline-hidden focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-disabled',
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
    },
    defaultVariants: {
      color: 'primary',
      variant: 'normal',
    },
  },
);

const radioCheckVariants = cva('stroke-0', {
  variants: {
    color: {
      primary: 'fill-primary',
      secondary: 'fill-secondary',
      tertiary: 'fill-tertiary',
      quaternary: 'fill-quaternary',
      foreground: 'fill-foreground',
      surface: 'fill-surface',
    },
    variant: {
      light: 'h-1.5 w-1.5',
      normal: 'h-2.5 w-2.5',
    },
  },
  defaultVariants: {
    color: 'primary',
    variant: 'normal',
  },
});

const RadioGroupContext = React.createContext<VariantProps<typeof radioVariants>>({
  color: undefined,
  variant: undefined,
});

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> &
    VariantProps<typeof radioVariants>
>(({ className, color, variant, ...props }, ref) => {
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
        className={cn('flex flex-row flex-wrap gap-x-4 gap-y-2 rtl:[direction:rtl]', className)}
        ref={ref}
      />
    </RadioGroupContext.Provider>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ComponentRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    label: string;
    radioClassName?: string;
    labelClassName?: string;
  }
>(({ className, radioClassName, labelClassName, label, ...props }, ref) => {
  const id = useMemo(() => props.id || generateRandomId(), [props.id]);
  const { color, variant } = React.useContext(RadioGroupContext);
  return (
    <div className={cn('group flex flex-row items-center gap-2', className)}>
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
