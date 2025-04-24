import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { Checkbox } from './checkbox';

import { cn } from '@/lib/utils';

interface CheckboxGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onValueChange'> {
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  color?: 'blue' | 'red' | 'black' | 'custom' | undefined;
  variant?: 'light' | 'normal' | undefined;
}

// Context for sharing state between CheckboxGroup and CheckboxGroupItem
const CheckboxGroupContext = React.createContext<{
  selectedValues: string[];
  onValueChange: (value: string, checked: boolean) => void;
  color?: 'blue' | 'red' | 'black' | 'custom' | undefined;
  variant?: 'light' | 'normal' | undefined;
    }>({
      selectedValues: [],
      onValueChange: () => {},
      color: undefined,
      variant: undefined,
    });

const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      className,
      children,
      value,
      variant,
      color,
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
        color,
        variant,
        onValueChange: handleValueChange,
      }),
      [selectedValues, handleValueChange, color, variant],
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
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxGroupItemProps
>(({ value, ...props }, ref) => {
  const {
    selectedValues, onValueChange, color, variant, 
  } =
    React.useContext(CheckboxGroupContext);

  return (
    <Checkbox
      ref={ref}
      {...props}
      value={value}
      color={color}
      variant={variant}
      checked={selectedValues.includes(value)}
      onCheckedChange={checked => onValueChange(value, checked === true)}
    />
  );
});
CheckboxGroupItem.displayName = 'CheckboxGroupItem';

export { CheckboxGroup, CheckboxGroupItem };
