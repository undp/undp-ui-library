import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Label } from './label';

interface CheckboxGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: string;
  labelClassName?: string;
  checkboxClassName?: string;
  value?: string[];
  onChange?: (value: string[]) => void;
}

// Context for sharing state between CheckboxGroup and CheckboxGroupItem
const CheckboxGroupContext = React.createContext<{
  selectedValues: string[];
  onValueChange: (value: string, checked: boolean) => void;
}>({
  selectedValues: [],
  onValueChange: () => {},
});

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      className,
      labelClassName,
      checkboxClassName,
      label,
      children,
      value,
      onChange,
      ...props
    },
    ref,
  ) => {
    // Internal state for uncontrolled usage
    const [internalValue, setInternalValue] = React.useState<string[]>([]);

    // Use either controlled or uncontrolled value
    const selectedValues = value !== undefined ? value : internalValue;

    // Handler for checkbox changes
    const handleValueChange = React.useCallback(
      (itemValue: string, checked: boolean) => {
        const newValue = checked
          ? [...selectedValues, itemValue]
          : selectedValues.filter(v => v !== itemValue);

        // Update internal state if uncontrolled
        if (value === undefined) {
          setInternalValue(newValue);
        }

        // Call onChange handler if provided
        onChange?.(newValue);
      },
      [selectedValues, value, onChange],
    );

    // Context to pass down the handler and selected values
    const contextValue = React.useMemo(
      () => ({
        selectedValues,
        onValueChange: handleValueChange,
      }),
      [selectedValues, handleValueChange],
    );

    return (
      <CheckboxGroupContext.Provider value={contextValue}>
        <div
          className={cn('flex flex-col gap-1.5', className)}
          ref={ref}
          {...props}
        >
          {label ? <Label className={labelClassName}>{label}</Label> : null}
          <div
            className={cn(
              'flex gap-x-4 gap-y-2 flex-row flex-wrap',
              checkboxClassName,
            )}
          >
            {children}
          </div>
        </div>
      </CheckboxGroupContext.Provider>
    );
  },
);
CheckboxGroup.displayName = 'CheckboxGroup';

interface CheckboxGroupItemProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    'value'
  > {
  label?: string;
  labelClassName?: string;
  checkBoxClassName?: string;
  checkIconClassName?: string;
  value: string;
}

const CheckboxGroupItem = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxGroupItemProps
>(
  (
    {
      className,
      labelClassName,
      checkBoxClassName,
      checkIconClassName,
      label,
      value,
      ...props
    },
    ref,
  ) => {
    const id = props.id || `checkbox-${Math.random().toString(36).slice(2)}`;
    const { selectedValues, onValueChange } =
      React.useContext(CheckboxGroupContext);

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
          checked={selectedValues.includes(value)}
          onCheckedChange={checked => onValueChange(value, checked === true)}
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
        <Label className={labelClassName} htmlFor={id}>
          {label || value}
        </Label>
      </div>
    );
  },
);
CheckboxGroupItem.displayName = 'CheckboxGroupItem';

export { CheckboxGroup, CheckboxGroupItem };
