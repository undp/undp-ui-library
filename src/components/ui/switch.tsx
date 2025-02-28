import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const switchVariants = cva(
  'peer inline-flex h-5 w-9 shrink-0 cursor-pointer bg-transparent items-center rounded-full border-2 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-transparent',
  {
    variants: {
      variant: {
        blue: 'border-primary-blue-600 data-[state=checked]:bg-primary-blue-200 dark:border-primary-blue-400 dark:data-[state=checked]:bg-primary-blue-100',
        red: 'border-accent-dark-red data-[state=checked]:bg-accent-light-red dark:border-accent-red dark:data-[state=checked]:bg-accent-light-red',
        black:
          'border-primary-gray-700 data-[state=checked]:bg-primary-gray-200 dark:border-primary-gray-100 dark:data-[state=checked]:bg-primary-gray-550',
      },
    },
    defaultVariants: {
      variant: 'red',
    },
  },
);

const thumbVariants = cva(
  'pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
  {
    variants: {
      variant: {
        blue: 'bg-primary-blue-600 dark:bg-primary-blue-400',
        red: 'bg-accent-dark-red dark:bg-accent-red',
        black: 'bg-primary-gray-700 dark:bg-primary-gray-100',
      },
    },
    defaultVariants: {
      variant: 'red',
    },
  },
);

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    variant?: 'blue' | 'red' | 'black' | null;
  }
>(({ className, variant, ...props }, ref) => (
  <SwitchPrimitives.Root
    {...props}
    className={cn(switchVariants({ variant }), className)}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className={thumbVariants({ variant })} />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
