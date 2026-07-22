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
