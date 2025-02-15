import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const bannerVariants = cva('', {
  variants: {
    backgroundColor: {
      transparent: 'bg-primary-transparent',
      white: 'bg-primary-white',
      gray: 'bg-primary-gray-200',
      darkGray: 'bg-primary-gray-600',
      black: 'bg-primary-black',
      blue: 'bg-primary-blue-600',
      azure: 'bg-accent-azure',
      yellow: 'bg-accent-yellow',
      red: 'bg-accent-red',
      green: 'bg-accent-green',
    },
    padding: {
      none: 'py-24 px-0',
      '2xs': 'py-24 px-1',
      xs: 'py-24 px-2',
      sm: 'py-24 px-3',
      base: 'py-24 px-4',
      md: 'py-24 px-5',
      lg: 'py-24 px-6',
      xl: 'py-24 px-7',
      '2xl': 'py-24 px-8',
    },
  },
  defaultVariants: {
    backgroundColor: 'transparent',
    padding: 'base',
  },
});

const bodyVariants = cva('flex flex-row items-stretch flex-wrap w-full', {
  variants: {
    maxWidth: {
      xs: 'max-w-[1024px] mx-auto',
      sm: 'max-w-[1272px] mx-auto',
      md: 'max-w-[1440px] mx-auto',
      lg: 'max-w-[1600px] mx-auto',
      xl: 'max-w-[1980px] mx-auto',
      full: 'max-w-none',
    },
    gap: {
      none: 'gap-0',
      '2xs': 'gap-1',
      xs: 'gap-2',
      sm: 'gap-3',
      base: 'gap-4',
      md: 'gap-5',
      lg: 'gap-6',
      xl: 'gap-7',
      '2xl': 'gap-8',
    },
  },
  defaultVariants: {
    gap: 'base',
    maxWidth: 'full',
  },
});

const Banner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof bannerVariants>
>(({ className, backgroundColor, padding, ...props }, ref) => {
  return (
    <div
      {...props}
      className={cn(
        bannerVariants({
          backgroundColor,
          padding,
        }),
        className,
      )}
      ref={ref}
    />
  );
});
Banner.displayName = 'Banner';

const BannerBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof bodyVariants>
>(({ className, maxWidth, gap, ...props }, ref) => {
  return (
    <div
      {...props}
      className={cn(bodyVariants({ maxWidth, gap }), className)}
      ref={ref}
    />
  );
});
BannerBody.displayName = 'BannerBody';

const bodySidebarVariants = cva('w-full', {
  variants: {
    width: {
      sm: 'sm:w-1/4',
      md: 'sm:w-1/3',
      lg: 'sm:w-1/2',
      full: '',
    },
  },
  defaultVariants: {
    width: 'md',
  },
});

const BannerBodySidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof bodySidebarVariants>
>(({ className, width, ...props }, ref) => {
  return (
    <div
      {...props}
      className={cn(bodySidebarVariants({ width }), className)}
      ref={ref}
    />
  );
});
BannerBodySidebar.displayName = 'BannerBodySidebar';

const BannerBodyContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div {...props} className={cn('flex-1', className)} ref={ref} />;
});
BannerBodyContent.displayName = 'BannerBodyContent';

export { Banner, BannerBody, BannerBodySidebar, BannerBodyContent };
