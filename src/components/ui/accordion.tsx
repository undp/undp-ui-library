import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import React from 'react';

import { cn } from '@/lib/utils';

const accordionVariants = cva('', {
  variants: {
    variant: {
      primary: 'bg-surface text-content-primary mb-4 px-4 py-1',
      secondary:
        'bg-surface text-content-primary mb-0 px-4 py-1 border-b border-b-stroke last:border-b-0',
      tertiary: 'bg-transparent text-content-primary mb-0 py-2 px-0 border-b border-b-stroke',
      quaternary: 'bg-transparent text-content-primary mb-0 py-0 px-0',
    },
  },
  defaultVariants: { variant: 'primary' },
});

const accordionTitleVariants = cva(
  'flex flex-1 items-center transition-all text-left text-content-primary [&[data-state=open]>svg]:rotate-180',
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
  'overflow-hidden text-content-primary text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
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

const chevronVariants = cva('h-6 w-6 shrink-0 transition-transform duration-200', {
  variants: {
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      quaternary: 'text-quaternary',
      foreground: 'text-foreground',
      surface: 'text-surface',
      error: 'text-error',
      warning: 'text-warning',
      info: 'text-info',
      success: 'text-success',

      male: 'text-categorical-male',
      female: 'text-categorical-female',
      urban: 'text-categorical-urban',
      rural: 'text-categorical-rural',
      child: 'text-categorical-child',
      adolescent: 'text-categorical-adolescent',
      'young-adult': 'text-categorical-young-adult',
      adult: 'text-categorical-adult',
      'older-adult': 'text-categorical-older-adult',

      red: 'text-accent-red',
      orange: 'text-accent-orange',
      yellow: 'text-accent-yellow',
      lime: 'text-accent-lime',
      green: 'text-accent-green',
      teal: 'text-accent-teal',
      azure: 'text-accent-azure',
      blue: 'text-accent-blue',
      violet: 'text-accent-violet',
      pink: 'text-accent-pink',

      'sdg-1': 'text-sdg-1',
      'sdg-2': 'text-sdg-2',
      'sdg-3': 'text-sdg-3',
      'sdg-4': 'text-sdg-4',
      'sdg-5': 'text-sdg-5',
      'sdg-6': 'text-sdg-6',
      'sdg-7': 'text-sdg-7',
      'sdg-8': 'text-sdg-8',
      'sdg-9': 'text-sdg-9',
      'sdg-10': 'text-sdg-10',
      'sdg-11': 'text-sdg-11',
      'sdg-12': 'text-sdg-12',
      'sdg-13': 'text-sdg-13',
      'sdg-14': 'text-sdg-14',
      'sdg-15': 'text-sdg-15',
      'sdg-16': 'text-sdg-16',
      'sdg-17': 'text-sdg-17',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});
const AccordionContext = React.createContext<{
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | null | undefined;
  color: VariantProps<typeof chevronVariants>['color'];
} | null>(null);

type AccordionProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> &
  VariantProps<typeof accordionVariants> &
  VariantProps<typeof chevronVariants>;

const Accordion = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ variant, color, children, ...props }, ref) => {
  return (
    <AccordionContext.Provider value={{ variant, color }}>
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
    <AccordionPrimitive.Header className='my-4 flex'>
      <AccordionPrimitive.Trigger
        {...props}
        ref={ref}
        className={cn(accordionTitleVariants({ variant: context?.variant }), className)}
      >
        {context?.variant === 'quaternary' ? (
          <>
            <ChevronDown className={chevronVariants({ color: context?.color })} />
            {children}
          </>
        ) : (
          <>
            {children}
            <ChevronDown className={chevronVariants({ color: context?.color })} />
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

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
