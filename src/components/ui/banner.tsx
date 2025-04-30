import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const bannerVariants = cva('', {
  variants: {
    backgroundColor: {
      transparent: 'bg-primary-transparent text-primary-black dark:text-primary-white',
      white: 'bg-primary-white dark:bg-primary-gray-700 text-primary-black dark:text-primary-white',
      gray: 'bg-primary-gray-200 dark:bg-primary-gray-600 text-primary-black dark:text-primary-white',
      'dark-gray':
        'bg-primary-gray-600 dark:bg-primary-gray-300 text-primary-white dark:text-primary-black',
      black:
        'bg-primary-gray-700 dark:bg-primary-gray-100 text-primary-white dark:text-primary-black',
      blue: 'bg-primary-blue-600 dark:bg-primary-blue-500 text-primary-white',
      azure: 'bg-accent-azure',
      yellow: 'bg-accent-yellow',
      red: 'bg-accent-red text-primary-white',
      green: 'bg-accent-green',
      custom: 'bg-custom-color-600 text-custom-foreground',
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

const BannerContext = React.createContext<{
  backgroundColor:
    | 'transparent'
    | 'white'
    | 'gray'
    | 'dark-gray'
    | 'black'
    | 'blue'
    | 'azure'
    | 'yellow'
    | 'red'
    | 'green'
    | 'custom'
    | null
    | undefined;
  padding: 'none' | '2xs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | null | undefined;
  bodyMaxWidth: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'full' | null | undefined;
  bodyGap: 'none' | '2xs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | null | undefined;
  sidebarWidth: 'sm' | 'base' | 'lg' | 'full' | null | undefined;
} | null>(null);

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

export { Banner, BannerBody, BannerBodySidebar, BannerBodyContent };
