import { cva, type VariantProps } from 'class-variance-authority';
import { Tabs as TabsPrimitive } from 'radix-ui';
import React from 'react';

import { cn } from '@/lib/utils';

const tabVariants = cva(
  'inline-flex text-base rtl:[direction:rtl] uppercase font-bold justify-center whitespace-nowrap border-b-2 border-stroke-sm p-0 pb-2 mt-3 mr-6 -mb-0.5 transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-ring disabled:pointer-events-none disabled:opacity-disabled',
  {
    variants: {
      color: {
        primary: 'data-[state=active]:border-primary',
        secondary: 'data-[state=active]:border-secondary',
        tertiary: 'data-[state=active]:border-tertiary',
        quaternary: 'data-[state=active]:border-quaternary',
        foreground: 'data-[state=active]:border-foreground',

        'sdg-1': 'data-[state=active]:border-sdg-1',
        'sdg-2': 'data-[state=active]:border-sdg-2',
        'sdg-3': 'data-[state=active]:border-sdg-3',
        'sdg-4': 'data-[state=active]:border-sdg-4',
        'sdg-5': 'data-[state=active]:border-sdg-5',
        'sdg-6': 'data-[state=active]:border-sdg-6',
        'sdg-7': 'data-[state=active]:border-sdg-7',
        'sdg-8': 'data-[state=active]:border-sdg-8',
        'sdg-9': 'data-[state=active]:border-sdg-9',
        'sdg-10': 'data-[state=active]:border-sdg-10',
        'sdg-11': 'data-[state=active]:border-sdg-11',
        'sdg-12': 'data-[state=active]:border-sdg-12',
        'sdg-13': 'data-[state=active]:border-sdg-13',
        'sdg-14': 'data-[state=active]:border-sdg-14',
        'sdg-15': 'data-[state=active]:border-sdg-15',
        'sdg-16': 'data-[state=active]:border-sdg-16',
        'sdg-17': 'data-[state=active]:border-sdg-17',

        male: 'data-[state=active]:border-categorical-male',
        female: 'data-[state=active]:border-categorical-female',
        urban: 'data-[state=active]:border-categorical-urban',
        rural: 'data-[state=active]:border-categorical-rural',
        child: 'data-[state=active]:border-categorical-child',
        adolescent: 'data-[state=active]:border-categorical-adolescent',
        'young-adult': 'data-[state=active]:border-categorical-young-adult',
        adult: 'data-[state=active]:border-categorical-adult',
        'older-adult': 'data-[state=active]:border-categorical-older-adult',

        red: 'data-[state=active]:border-accent-red',
        orange: 'data-[state=active]:border-accent-orange',
        yellow: 'data-[state=active]:border-accent-yellow',
        lime: 'data-[state=active]:border-accent-lime',
        green: 'data-[state=active]:border-accent-green',
        teal: 'data-[state=active]:border-accent-teal',
        azure: 'data-[state=active]:border-accent-azure',
        blue: 'data-[state=active]:border-accent-blue',
        violet: 'data-[state=active]:border-accent-violet',
        pink: 'data-[state=active]:border-accent-pink',

        success: 'data-[state=active]:border-success',
        warning: 'data-[state=active]:border-warning',
        info: 'data-[state=active]:border-info',
        error: 'data-[state=active]:border-error',
      },
    },
    defaultVariants: { color: 'primary' },
  },
);

const TabContext = React.createContext<VariantProps<typeof tabVariants>>({ color: undefined });

const Tabs = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & VariantProps<typeof tabVariants>
>(({ color, className, ...props }, ref) => {
  const contextValue = React.useMemo(() => ({ color }), [color]);
  return (
    <TabContext.Provider value={contextValue}>
      <TabsPrimitive.Root className={cn('rtl:[direction:rtl]', className)} {...props} ref={ref} />
    </TabContext.Provider>
  );
});
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    {...props}
    ref={ref}
    className={cn(
      'mb-10 inline-flex w-full items-center border-stroke-sm border-b-2 pl-12 rtl:[direction:rtl]',
      className,
    )}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { color } = React.useContext(TabContext);
  return (
    <TabsPrimitive.Trigger {...props} ref={ref} className={cn(tabVariants({ color }), className)} />
  );
});

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    {...props}
    ref={ref}
    className={cn(
      'mt-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-1',
      className,
    )}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
