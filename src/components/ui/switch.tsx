import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const switchVariants = cva(
  'peer inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-primary-blue-100 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      color: {
        blue: 'bg-primary-gray-400 data-[state=checked]:bg-primary-blue-600 dark:bg-primary-gray-550 dark:data-[state=checked]:bg-primary-blue-400',
        red: 'bg-primary-gray-400 data-[state=checked]:bg-accent-dark-red dark:bg-primary-gray-550 dark:data-[state=checked]:bg-accent-red',
        black:
          'bg-primary-gray-400 data-[state=checked]:bg-primary-gray-600 dark:bg-primary-gray-550 dark:data-[state=checked]:bg-primary-gray-300',
        custom: 'bg-primary-gray-400 data-[state=checked]:bg-custom-color-600',
      },
      variant: {
        light: 'border',
        normal: 'border-2',
      },
    },
    defaultVariants: {
      color: 'red',
      variant: 'normal',
    },
  },
);

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> &
    VariantProps<typeof switchVariants>
>(({ className, color, variant, ...props }, ref) => (
  <SwitchPrimitives.Root
    {...props}
    className={cn(switchVariants({ color, variant }), className)}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className='bg-primary-white pointer-events-none block h-[22px] w-[22px] rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[32px] rtl:data-[state=checked]:translate-x-[-32px] data-[state=unchecked]:translate-x-0' />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
