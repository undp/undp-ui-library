import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const accordionVariants = cva('', {
  variants: {
    variant: {
      primary:
        'bg-primary-gray-200 dark:bg-primary-gray-650 text-primary-gray-700 dark:text-primary-white mb-4 px-4 py-1',
      secondary:
        'bg-primary-gray-200 dark:bg-primary-gray-650 text-primary-gray-700 dark:text-primary-white mb-0 px-4 py-1 border-b border-b-primary-gray-400 dark:border-b-primary-gray-550 last:border-b-0',
      tertiary:
        'bg-transparent text-primary-gray-700 dark:text-primary-white mb-0 py-2 px-0 border-b border-b-primary-gray-400 dark:border-b-primary-gray-500',
      quaternary: 'bg-transparent text-primary-gray-700 dark:text-primary-white mb-0 py-0 px-0',
    },
  },
  defaultVariants: { variant: 'primary' },
});

const accordionTitleVariants = cva(
  'flex flex-1 items-center transition-all text-left text-primary-gray-700 dark:text-primary-white [&[data-state=open]>svg]:rotate-180',
  {
    variants: {
      variant: {
        primary: 'font-normal text-xl justify-between',
        secondary: 'uppercase font-normal text-base justify-between',
        tertiary: 'uppercase font-normal text-2xl justify-between',
        quaternary: 'uppercase font-bold text-base gap-3',
      },
    },
    defaultVariants: { variant: 'primary' },
  },
);

const accordionContentVariants = cva(
  'overflow-hidden text-primary-gray-700 dark:text-primary-white text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
  {
    variants: {
      variant: {
        primary: 'my-3.5',
        secondary: 'my-3.5',
        tertiary: 'my-3.5 px-3.5',
        quaternary: 'my-3.5 p-0',
      },
    },
    defaultVariants: { variant: 'primary' },
  },
);

const AccordionContext = React.createContext<{
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | null | undefined;
} | null>(null);

type AccordionProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> &
  VariantProps<typeof accordionVariants>;

const Accordion = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ variant, children, ...props }, ref) => {
  return (
    <AccordionContext.Provider value={{ variant }}>
      <AccordionPrimitive.Root ref={ref} {...props}>
        {children}
      </AccordionPrimitive.Root>
    </AccordionContext.Provider>
  );
});
Accordion.displayName = AccordionPrimitive.Root.displayName;

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const context = React.useContext(AccordionContext);

  const combinedClasses = cn(accordionVariants({ variant: context?.variant }), className);
  return (
    <AccordionPrimitive.Item {...props} ref={ref} className={cn(combinedClasses, className)} />
  );
});
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  return (
    <AccordionPrimitive.Header className='flex my-4'>
      <AccordionPrimitive.Trigger
        {...props}
        ref={ref}
        className={cn(accordionTitleVariants({ variant: context?.variant }), className)}
      >
        {context?.variant === 'quaternary' ? (
          <>
            <ChevronDown className='h-6 w-6 shrink-0 text-accent-red dark:text-primary-white transition-transform duration-200' />
            {children}
          </>
        ) : (
          <>
            {children}
            <ChevronDown className='h-6 w-6 shrink-0 text-accent-red dark:text-primary-white transition-transform duration-200' />
          </>
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext);
  return (
    <AccordionPrimitive.Content
      {...props}
      ref={ref}
      className={cn(accordionContentVariants({ variant: context?.variant }), className)}
    >
      <div className={className}>{children}</div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
