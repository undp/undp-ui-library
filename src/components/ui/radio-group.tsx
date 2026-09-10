import { cva, type VariantProps } from 'class-variance-authority';
import { Circle } from 'lucide-react';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
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

        red: 'border-accent-red group-hover:border-accent-red-200',
        orange: 'border-accent-orange group-hover:border-accent-orange-200',
        amber: 'border-accent-amber group-hover:border-accent-amber-200',
        yellow: 'border-accent-yellow group-hover:border-accent-yellow-200',
        lime: 'border-accent-lime group-hover:border-accent-lime-200',
        green: 'border-accent-green group-hover:border-accent-green-200',
        teal: 'border-accent-teal group-hover:border-accent-teal-200',
        azure: 'border-accent-azure group-hover:border-accent-azure-200',
        blue: 'border-accent-blue group-hover:border-accent-blue-200',
        violet: 'border-accent-violet group-hover:border-accent-violet-200',
        pink: 'border-accent-pink group-hover:border-accent-pink-200',

        'sdg-1': 'border-sdg-1 group-hover:border-sdg-1-200',
        'sdg-2': 'border-sdg-2 group-hover:border-sdg-2-200',
        'sdg-3': 'border-sdg-3 group-hover:border-sdg-3-200',
        'sdg-4': 'border-sdg-4 group-hover:border-sdg-4-200',
        'sdg-5': 'border-sdg-5 group-hover:border-sdg-5-200',
        'sdg-6': 'border-sdg-6 group-hover:border-sdg-6-200',
        'sdg-7': 'border-sdg-7 group-hover:border-sdg-7-200',
        'sdg-8': 'border-sdg-8 group-hover:border-sdg-8-200',
        'sdg-9': 'border-sdg-9 group-hover:border-sdg-9-200',
        'sdg-10': 'border-sdg-10 group-hover:border-sdg-10-200',
        'sdg-11': 'border-sdg-11 group-hover:border-sdg-11-200',
        'sdg-12': 'border-sdg-12 group-hover:border-sdg-12-200',
        'sdg-13': 'border-sdg-13 group-hover:border-sdg-13-200',
        'sdg-14': 'border-sdg-14 group-hover:border-sdg-14-200',
        'sdg-15': 'border-sdg-15 group-hover:border-sdg-15-200',
        'sdg-16': 'border-sdg-16 group-hover:border-sdg-16-200',
        'sdg-17': 'border-sdg-17 group-hover:border-sdg-17-200',

        male: 'border-categorical-male group-hover:border-categorical-male-200',
        female: 'border-categorical-female group-hover:border-categorical-female-200',
        urban: 'border-categorical-urban group-hover:border-categorical-urban-200',
        rural: 'border-categorical-rural group-hover:border-categorical-rural-200',
        child: 'border-categorical-child group-hover:border-categorical-child-200',
        adolescent: 'border-categorical-adolescent group-hover:border-categorical-adolescent-200',
        'young-adult':
          'border-categorical-young-adult group-hover:border-categorical-young-adult-200',
        adult: 'border-categorical-adult group-hover:border-categorical-adult-200',
        'older-adult':
          'border-categorical-older-adult group-hover:border-categorical-older-adult-200',
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

      red: 'fill-accent-red',
      orange: 'fill-accent-orange',
      amber: 'fill-accent-amber',
      yellow: 'fill-accent-yellow',
      lime: 'fill-accent-lime',
      green: 'fill-accent-green',
      teal: 'fill-accent-teal',
      azure: 'fill-accent-azure',
      blue: 'fill-accent-blue',
      violet: 'fill-accent-violet',
      pink: 'fill-accent-pink',

      'sdg-1': 'fill-sdg-1',
      'sdg-2': 'fill-sdg-2',
      'sdg-3': 'fill-sdg-3',
      'sdg-4': 'fill-sdg-4',
      'sdg-5': 'fill-sdg-5',
      'sdg-6': 'fill-sdg-6',
      'sdg-7': 'fill-sdg-7',
      'sdg-8': 'fill-sdg-8',
      'sdg-9': 'fill-sdg-9',
      'sdg-10': 'fill-sdg-10',
      'sdg-11': 'fill-sdg-11',
      'sdg-12': 'fill-sdg-12',
      'sdg-13': 'fill-sdg-13',
      'sdg-14': 'fill-sdg-14',
      'sdg-15': 'fill-sdg-15',
      'sdg-16': 'fill-sdg-16',
      'sdg-17': 'fill-sdg-17',

      male: 'fill-categorical-male',
      female: 'fill-categorical-female',
      urban: 'fill-categorical-urban',
      rural: 'fill-categorical-rural',
      child: 'fill-categorical-child',
      adolescent: 'fill-categorical-adolescent',
      'young-adult': 'fill-categorical-young-adult',
      adult: 'fill-categorical-adult',
      'older-adult': 'fill-categorical-older-adult',
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
