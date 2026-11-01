import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/lib/utils';

type ContainerSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'full';

type ResponsiveValue = {
  base?: ContainerSize;
  sm?: ContainerSize;
  md?: ContainerSize;
  lg?: ContainerSize;
  xl?: ContainerSize;
  '2xl'?: ContainerSize;
};

const containerWidthMap: Record<ContainerSize, string> = {
  xs: 'w-1/4',
  sm: 'w-1/3',
  base: 'w-1/2',
  lg: 'w-2/3',
  xl: 'w-3/4',
  full: 'w-full',
};

const containerWidthSmMap: Record<ContainerSize, string> = {
  xs: 'sm:w-1/4',
  sm: 'sm:w-1/3',
  base: 'sm:w-1/2',
  lg: 'sm:w-2/3',
  xl: 'sm:w-3/4',
  full: 'sm:w-full',
};

const containerWidthMdMap: Record<ContainerSize, string> = {
  xs: 'md:w-1/4',
  sm: 'md:w-1/3',
  base: 'md:w-1/2',
  lg: 'md:w-2/3',
  xl: 'md:w-3/4',
  full: 'md:w-full',
};

const containerWidthLgMap: Record<ContainerSize, string> = {
  xs: 'lg:w-1/4',
  sm: 'lg:w-1/3',
  base: 'lg:w-1/2',
  lg: 'lg:w-2/3',
  xl: 'lg:w-3/4',
  full: 'lg:w-full',
};

const containerWidthXlMap: Record<ContainerSize, string> = {
  xs: 'xl:w-1/4',
  sm: 'xl:w-1/3',
  base: 'xl:w-1/2',
  lg: 'xl:w-2/3',
  xl: 'xl:w-3/4',
  full: 'xl:w-full',
};

const containerWidth2xlMap: Record<ContainerSize, string> = {
  xs: '2xl:w-1/4',
  sm: '2xl:w-1/3',
  base: '2xl:w-1/2',
  lg: '2xl:w-2/3',
  xl: '2xl:w-3/4',
  full: '2xl:w-full',
};

const containerVariants = cva('box-border', {
  variants: {
    backgroundColor: {
      transparent: 'bg-transparent text-content-primary',
      background: 'bg-background text-content-primary',
      'background-soft': 'bg-background-soft text-content-primary',
      foreground: 'bg-foreground text-content-reverse',
      'foreground-soft': 'bg-foreground-soft text-content-reverse',

      primary: 'bg-primary text-content-reverse',
      secondary: 'bg-secondary text-content-reverse',
      tertiary: 'bg-tertiary text-content-reverse',
      quaternary: 'bg-quaternary text-content-primary',

      success: 'bg-success text-content-reverse',
      warning: 'bg-warning text-content-primary',
      info: 'bg-info text-content-reverse',
      error: 'bg-error text-content-reverse',

      surface: 'bg-surface text-content-primary',
      'surface-2xs': 'bg-surface-2xs text-content-primary',
      'surface-xs': 'bg-surface-xs text-content-primary',
      'surface-sm': 'bg-surface-sm text-content-primary',
      'surface-md': 'bg-surface-md text-content-primary',
      'surface-lg': 'bg-surface-lg text-content-primary',
      'surface-xl': 'bg-surface-xl text-content-reverse',
      'surface-2xl': 'bg-surface-2xl text-content-reverse',
      'surface-3xl': 'bg-surface-3xl text-content-reverse',
      'surface-4xl': 'bg-surface-4xl text-content-reverse',

      'sdg-1': 'bg-sdg-1 text-content-reverse',
      'sdg-2': 'bg-sdg-2 text-content-reverse',
      'sdg-3': 'bg-sdg-3 text-content-reverse',
      'sdg-4': 'bg-sdg-4 text-content-reverse',
      'sdg-5': 'bg-sdg-5 text-content-reverse',
      'sdg-6': 'bg-sdg-6 text-content-reverse',
      'sdg-7': 'bg-sdg-7 text-content-reverse',
      'sdg-8': 'bg-sdg-8 text-content-reverse',
      'sdg-9': 'bg-sdg-9 text-content-reverse',
      'sdg-10': 'bg-sdg-10 text-content-reverse',
      'sdg-11': 'bg-sdg-11 text-content-reverse',
      'sdg-12': 'bg-sdg-12 text-content-reverse',
      'sdg-13': 'bg-sdg-13 text-content-reverse',
      'sdg-14': 'bg-sdg-14 text-content-reverse',
      'sdg-15': 'bg-sdg-15 text-content-reverse',
      'sdg-16': 'bg-sdg-16 text-content-reverse',
      'sdg-17': 'bg-sdg-17 text-content-reverse',

      male: 'bg-categorical-male text-content-reverse',
      female: 'bg-categorical-female text-content-reverse',
      urban: 'bg-categorical-urban text-content-reverse',
      rural: 'bg-categorical-rural text-content-reverse',

      red: 'bg-accent-red text-content-reverse',
      orange: 'bg-accent-orange text-content-reverse',
      yellow: 'bg-accent-yellow text-content-reverse',
      lime: 'bg-accent-lime text-content-reverse',
      green: 'bg-accent-green text-content-reverse',
      teal: 'bg-accent-teal text-content-reverse',
      azure: 'bg-accent-azure text-content-reverse',
      blue: 'bg-accent-blue text-content-reverse',
      violet: 'bg-accent-violet text-content-reverse',
      pink: 'bg-accent-pink text-content-reverse',
    },
    layout: {
      flex: 'flex flex-row items-stretch flex-wrap',
      default: '',
    },
    padding: {
      none: 'p-0',
      '2xs': 'p-1',
      xs: 'p-2',
      sm: 'p-3',
      base: 'p-4',
      lg: 'p-5',
      xl: 'p-6',
      '2xl': 'p-7',
      '3xl': 'p-8',
    },
    gap: {
      none: 'gap-0',
      '2xs': 'gap-1',
      xs: 'gap-2',
      sm: 'gap-3',
      base: 'gap-4',
      lg: 'gap-5',
      xl: 'gap-6',
      '2xl': 'gap-7',
      '3xl': 'gap-8',
    },
  },
  defaultVariants: {
    backgroundColor: 'transparent',
    layout: 'default',
    padding: 'base',
    gap: 'none',
  },
});

const resolveResponsiveClasses = (
  value: ContainerSize | ResponsiveValue | undefined,
  maps: {
    base: Record<ContainerSize, string>;
    sm: Record<ContainerSize, string>;
    md: Record<ContainerSize, string>;
    lg: Record<ContainerSize, string>;
    xl: Record<ContainerSize, string>;
    '2xl': Record<ContainerSize, string>;
  },
) => {
  if (value === undefined) return undefined;

  if (typeof value === 'string') {
    return maps.base[value];
  }

  return cn(
    value.base !== undefined && maps.base[value.base],
    value.sm !== undefined && maps.sm[value.sm],
    value.md !== undefined && maps.md[value.md],
    value.lg !== undefined && maps.lg[value.lg],
    value.xl !== undefined && maps.xl[value.xl],
    value['2xl'] !== undefined && maps['2xl'][value['2xl']],
  );
};

const gridColsMaps = {
  base: containerWidthMap,
  sm: containerWidthSmMap,
  md: containerWidthMdMap,
  lg: containerWidthLgMap,
  xl: containerWidthXlMap,
  '2xl': containerWidth2xlMap,
};

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof containerVariants> & { width?: ContainerSize | ResponsiveValue }
>(({ className, backgroundColor, layout, width = 'full', padding, gap, ...props }, ref) => {
  return (
    <div
      {...props}
      className={cn(
        containerVariants({
          backgroundColor,
          layout,
          padding,
          gap,
        }),
        resolveResponsiveClasses(width, gridColsMaps),
        className,
      )}
      ref={ref}
    />
  );
});
Container.displayName = 'Container';

export { Container };
