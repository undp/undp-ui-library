import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { cn } from '@/lib/utils';

const separatorVariants = cva('', {
  variants: {
    orientation: {
      horizontal: 'w-full',
      vertical: 'h-full',
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
