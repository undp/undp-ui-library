import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const accordionVariants = cva('', {
  variants: {
    variant: {
      primary: 'bg-primary-gray-200 text-primary mb-4 p-2',
      secondary:
        'bg-primary-gray-200 text-primary mb-0 p-2 border-b border-b-primary-gray-400',
      tertiary:
        'bg-transparent text-primary mb-0 py-2 px-0 border-b border-b-primary-gray-400',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const accordionTitleVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-primary font-semibold text-2xl',
      secondary: 'uppercase font-semibold text-base',
      tertiary: 'uppercase text-2xl',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const accordionContentVariants = cva('', {
  variants: {
    variant: {
      primary: 'text-primary text-base my-3.5',
      secondary: 'text-primary text-base my-3.5',
      tertiary: 'text-primary text-base my-3.5 px-3.5',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const AccordionContext = React.createContext<{
  variant: 'primary' | 'secondary' | 'tertiary' | null | undefined;
} | null>(null);

type AccordionProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> &
  VariantProps<typeof accordionVariants> & {
    asChild?: boolean;
  };

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ variant, children, ...props }, ref) => {
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AccordionContext.Provider value={{ variant }}>
      <AccordionPrimitive.Root ref={ref} {...props}>
        {children}
      </AccordionPrimitive.Root>
    </AccordionContext.Provider>
  );
});
Accordion.displayName = AccordionPrimitive.Root.displayName;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const context = React.useContext(AccordionContext);

  const combinedClasses = cn(
    accordionVariants({ variant: context?.variant }),
    className,
  );
  return (
    <AccordionPrimitive.Item
      {...props}
      ref={ref}
      className={cn(combinedClasses, className)}
    />
  );
});
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext);

  const combinedClasses = cn(
    accordionTitleVariants({ variant: context?.variant }),
    'flex flex-1 items-center justify-between py-1 transition-all text-left [&[data-state=open]>svg]:rotate-180',
    className,
  );
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        {...props}
        ref={ref}
        className={combinedClasses}
      >
        {children}
        <ChevronDown className='h-6 w-6 shrink-0 text-muted-foreground stroke-accent-red transition-transform duration-200' />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(AccordionContext);

  const combinedClasses = cn(
    accordionContentVariants({ variant: context?.variant }),
    'overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
    className,
  );
  return (
    <AccordionPrimitive.Content
      {...props}
      ref={ref}
      className={combinedClasses}
    >
      <div className={className}>{children}</div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordionVariants,
};
