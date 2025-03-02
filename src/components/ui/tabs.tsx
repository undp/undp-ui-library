import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const tabVariants = cva(
  'inline-flex text-base uppercase font-bold justify-center whitespace-nowrap border-b-2 border-primary-gray-300 dark:border-primary-gray-650 dark:text-primary-white p-0 pb-2 mt-3 mr-6 -mb-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      color: {
        red: 'data-[state=active]:border-accent-dark-red  dark:data-[state=active]:border-accent-red',
        blue: 'data-[state=active]:border-primary-blue-600 dark:data-[state=active]:border-primary-blue-300',
        black:
          'data-[state=active]:border-primary-gray-700 dark:data-[state=active]:border-primary-gray-100',
        custom: 'data-[state=active]:border-custom-color-600',
      },
    },
    defaultVariants: {
      color: 'red',
    },
  },
);

const TabContext = React.createContext<{
  color?: 'blue' | 'red' | 'black' | 'custom' | undefined;
}>({
  color: undefined,
});

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
    color: 'blue' | 'red' | 'black' | 'custom' | undefined;
  }
>(({ color, ...props }, ref) => {
  const contextValue = React.useMemo(
    () => ({
      color,
    }),
    [color],
  );
  return (
    <TabContext.Provider value={contextValue}>
      <TabsPrimitive.Root {...props} ref={ref} />
    </TabContext.Provider>
  );
});
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    {...props}
    ref={ref}
    className={cn(
      'pl-12 inline-flex items-center border-b-2 border-primary-gray-300 mb-10 w-full dark:border-primary-gray-650',
      className,
    )}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { color } = React.useContext(TabContext);
  return (
    <TabsPrimitive.Trigger
      {...props}
      ref={ref}
      className={cn(tabVariants({ color }), className)}
    />
  );
});

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    {...props}
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:text-primary-white',
      className,
    )}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
