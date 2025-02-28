import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { cn } from '@/lib/utils';
import { Checkbox } from './checkbox';

interface CheckboxGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onValueChange'> {
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  variant?: 'blue' | 'red' | 'black' | null | undefined;
}

// Context for sharing state between CheckboxGroup and CheckboxGroupItem
const CheckboxGroupContext = React.createContext<{
  selectedValues: string[];
  onValueChange: (value: string, checked: boolean) => void;
  variant?: 'blue' | 'red' | 'black' | null | undefined;
}>({
  selectedValues: [],
  onValueChange: () => {},
  variant: null,
});

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      className,
      children,
      value,
      variant,
      onValueChange,
      defaultValue,
      ...props
    },
    ref,
  ) => {
    // Internal state for uncontrolled usage
    const [internalValue, setInternalValue] = React.useState<string[]>(
      defaultValue || [],
    );

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

        // Call onValueChange handler if provided
        onValueChange?.(newValue);
      },
      [selectedValues, value, onValueChange],
    );

    // Context to pass down the handler and selected values
    const contextValue = React.useMemo(
      () => ({
        selectedValues,
        variant,
        onValueChange: handleValueChange,
      }),
      [selectedValues, handleValueChange, variant],
    );

    return (
      <CheckboxGroupContext.Provider value={contextValue}>
        <div
          {...props}
          className={cn('flex gap-x-4 gap-y-2 flex-row flex-wrap', className)}
          ref={ref}
        >
          {children}
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
>(({ value, ...props }) => {
  const { selectedValues, onValueChange, variant } =
    React.useContext(CheckboxGroupContext);

  return (
    <Checkbox
      {...props}
      value={value}
      variant={variant || undefined}
      checked={selectedValues.includes(value)}
      onCheckedChange={checked => onValueChange(value, checked === true)}
    />
  );
});
CheckboxGroupItem.displayName = 'CheckboxGroupItem';

export { CheckboxGroup, CheckboxGroupItem };
