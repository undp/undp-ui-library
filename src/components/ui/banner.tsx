import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/lib/utils';

const bannerVariants = cva('', {
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

      warning: 'bg-warning text-content-reverse',
      info: 'bg-info text-content-reverse',
      error: 'bg-error text-content-reverse',

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
      child: 'bg-categorical-child text-content-reverse',
      adolescent: 'bg-categorical-adolescent text-content-reverse',
      'young-adult': 'bg-categorical-young-adult text-content-reverse',
      adult: 'bg-categorical-adult text-content-reverse',
      'older-adult': 'bg-categorical-older-adult text-content-reverse',
    },
    padding: {
      none: 'py-24 px-0',
      '2xs': 'py-24 px-1',
      xs: 'py-24 px-2',
      sm: 'py-24 px-3',
      base: 'py-24 px-4',
      lg: 'py-24 px-5',
      xl: 'py-24 px-6',
      '2xl': 'py-24 px-8',
      '3xl': 'py-24 px-10',
    },
  },
  defaultVariants: {
    backgroundColor: 'transparent',
    padding: 'base',
  },
});

const bodyVariants = cva('flex flex-row items-stretch flex-wrap w-full', {
  variants: {
    bodyMaxWidth: {
      xs: 'max-w-[1024px] mx-auto',
      sm: 'max-w-[1272px] mx-auto',
      base: 'max-w-[1440px] mx-auto',
      lg: 'max-w-[1600px] mx-auto',
      xl: 'max-w-[1980px] mx-auto',
      full: 'max-w-none',
    },
    bodyGap: {
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
    bodyGap: 'base',
    bodyMaxWidth: 'full',
  },
});

const sidebarVariants = cva('w-full', {
  variants: {
    sidebarWidth: {
      sm: 'sm:w-1/4',
      base: 'sm:w-1/3',
      lg: 'sm:w-1/2',
      full: '',
    },
  },
  defaultVariants: { sidebarWidth: 'base' },
});

const BannerContext = React.createContext<
  | (VariantProps<typeof bannerVariants> &
      VariantProps<typeof bodyVariants> &
      VariantProps<typeof sidebarVariants>)
  | null
>(null);

const Banner = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof bannerVariants> &
    VariantProps<typeof bodyVariants> &
    VariantProps<typeof sidebarVariants>
>(({ className, backgroundColor, sidebarWidth, bodyGap, bodyMaxWidth, padding, ...props }, ref) => {
  const contextValue = React.useMemo(
    () => ({
      backgroundColor,
      sidebarWidth,
      bodyGap,
      bodyMaxWidth,
      padding,
    }),
    [backgroundColor, sidebarWidth, bodyGap, bodyMaxWidth, padding],
  );
  return (
    <BannerContext.Provider value={contextValue}>
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
    </BannerContext.Provider>
  );
});
Banner.displayName = 'Banner';

const BannerBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(BannerContext);
    return (
      <div
        {...props}
        className={cn(
          bodyVariants({
            bodyMaxWidth: context?.bodyMaxWidth,
            bodyGap: context?.bodyGap,
          }),
          className,
        )}
        ref={ref}
      />
    );
  },
);
BannerBody.displayName = 'BannerBody';

const BannerBodySidebar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const context = React.useContext(BannerContext);
    return (
      <div
        {...props}
        className={cn(sidebarVariants({ sidebarWidth: context?.sidebarWidth }), className)}
        ref={ref}
      />
    );
  },
);
BannerBodySidebar.displayName = 'BannerBodySidebar';

const BannerBodyContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div {...props} className={cn('flex-1', className)} ref={ref} />;
  },
);
BannerBodyContent.displayName = 'BannerBodyContent';

export { Banner, BannerBody, BannerBodyContent, BannerBodySidebar };
