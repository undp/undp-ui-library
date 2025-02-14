import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn, generateRandomId } from '@/lib/utils';
import { Label } from './label';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    label?: string;
    labelClassName?: string;
    checkBoxClassName?: string;
    checkIconClassName?: string;
  }
>(
  (
    {
      className,
      labelClassName,
      checkBoxClassName,
      checkIconClassName,
      label,
      ...props
    },
    ref,
  ) => {
    const id = props.id || generateRandomId();
    return (
      <div className={cn('flex flex-row gap-1 items-center', className)}>
        <CheckboxPrimitive.Root
          {...props}
          ref={ref}
          className={cn(
            'peer h-4 w-4 shrink-0 rounded-0 border-2 bg-transparent border-primary-blue-600 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 hover:bg-primary-blue-100',
            checkBoxClassName,
          )}
          id={id}
        >
          <CheckboxPrimitive.Indicator
            className={cn('flex items-center justify-center text-current')}
          >
            <Check
              className={cn(
                'h-4 w-4 -mt-0.5 stroke-primary-blue-600',
                checkIconClassName,
              )}
              strokeWidth={4}
            />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label ? (
          <Label className={labelClassName} htmlFor={id}>
            {label}
          </Label>
        ) : null}
      </div>
    );
  },
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
