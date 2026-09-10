import { cva, type VariantProps } from 'class-variance-authority';
import { Separator as SeparatorPrimitive } from 'radix-ui';
import React from 'react';
import { cn } from '@/lib/utils';

const separatorVariants = cva('', {
  variants: {
    orientation: {
      horizontal: 'w-full',
      vertical: 'h-auto',
    },
    thickness: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
      '2xl': '',
    },
    color: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary',
      quaternary: 'bg-quaternary',

      background: 'bg-background',
      'background-soft': 'bg-background-soft',
      foreground: 'bg-foreground',
      'foreground-soft': 'bg-foreground-soft',

      surface: 'bg-surface',
      'surface-2xs': 'bg-surface-2xs',
      'surface-xs': 'bg-surface-xs',
      'surface-sm': 'bg-surface-sm',
      'surface-md': 'bg-surface-md',
      'surface-lg': 'bg-surface-lg',
      'surface-xl': 'bg-surface-xl',
      'surface-2xl': 'bg-surface-2xl',
      'surface-3xl': 'bg-surface-3xl',
      'surface-4xl': 'bg-surface-4xl',

      error: 'bg-error',
      warning: 'bg-warning',
      info: 'bg-info',
      success: 'bg-success',

      male: 'bg-categorical-male',
      female: 'bg-categorical-female',
      urban: 'bg-categorical-urban',
      rural: 'bg-categorical-rural',
      child: 'bg-categorical-child',
      adolescent: 'bg-categorical-adolescent',
      'young-adult': 'bg-categorical-young-adult',
      adult: 'bg-categorical-adult',
      'older-adult': 'bg-categorical-older-adult',

      red: 'bg-accent-red',
      orange: 'bg-accent-orange',
      yellow: 'bg-accent-yellow',
      lime: 'bg-accent-lime',
      green: 'bg-accent-green',
      teal: 'bg-accent-teal',
      azure: 'bg-accent-azure',
      blue: 'bg-accent-blue',
      violet: 'bg-accent-violet',
      pink: 'bg-accent-pink',

      'sdg-1': 'bg-sdg-1',
      'sdg-2': 'bg-sdg-2',
      'sdg-3': 'bg-sdg-3',
      'sdg-4': 'bg-sdg-4',
      'sdg-5': 'bg-sdg-5',
      'sdg-6': 'bg-sdg-6',
      'sdg-7': 'bg-sdg-7',
      'sdg-8': 'bg-sdg-8',
      'sdg-9': 'bg-sdg-9',
      'sdg-10': 'bg-sdg-10',
      'sdg-11': 'bg-sdg-11',
      'sdg-12': 'bg-sdg-12',
      'sdg-13': 'bg-sdg-13',
      'sdg-14': 'bg-sdg-14',
      'sdg-15': 'bg-sdg-15',
      'sdg-16': 'bg-sdg-16',
      'sdg-17': 'bg-sdg-17',
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      thickness: 'xs',
      class: 'h-[1px]',
    },
    {
      orientation: 'horizontal',
      thickness: 'sm',
      class: 'h-[2px]',
    },
    {
      orientation: 'horizontal',
      thickness: 'md',
      class: 'h-[3px]',
    },
    {
      orientation: 'horizontal',
      thickness: 'lg',
      class: 'h-[4px]',
    },
    {
      orientation: 'horizontal',
      thickness: 'xl',
      class: 'h-[5px]',
    },
    {
      orientation: 'horizontal',
      thickness: '2xl',
      class: 'h-[6px]',
    },
    {
      orientation: 'vertical',
      thickness: 'xs',
      class: 'w-[1px]',
    },
    {
      orientation: 'vertical',
      thickness: 'sm',
      class: 'w-[2px]',
    },
    {
      orientation: 'vertical',
      thickness: 'md',
      class: 'w-[3px]',
    },
    {
      orientation: 'vertical',
      thickness: 'lg',
      class: 'w-[4px]',
    },
    {
      orientation: 'vertical',
      thickness: 'xl',
      class: 'w-[5px]',
    },
    {
      orientation: 'vertical',
      thickness: '2xl',
      class: 'w-[6px]',
    },
  ],
  defaultVariants: {
    orientation: 'horizontal',
    color: 'surface',
    thickness: 'xs',
  },
});

const Separator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> &
    VariantProps<typeof separatorVariants>
>(({ className, orientation, color, thickness = 'xs', ...props }, ref) => (
  <SeparatorPrimitive.Root
    {...props}
    ref={ref}
    orientation={orientation}
    className={cn(separatorVariants({ orientation, color, thickness }), className)}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
