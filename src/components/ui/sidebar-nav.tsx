/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const sidebarVariants = cva('w-full sm:w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5', {
  variants: {
    variant: {
      noEffect: '',
      background: 'bg-primary-gray-100 dark:bg-primary-gray-650',
      border:
        'border-r border-r-primary-gray-300 dark:border-r-primary-gray-600',
    },
  },
  defaultVariants: {
    variant: 'background',
  },
});
interface SidebarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof sidebarVariants> {
  defaultValue?: string;
  activeItemClass?: string;
  hoverItemClass?: string;
  onValueChange?: (value: string) => void;
}

const SidebarContext = React.createContext<{
  selectedValue?: string;
  activeItemClass?: string;
  hoverItemClass?: string;
  onValueChange: (value: string) => void;
}>({
  selectedValue: undefined,
  hoverItemClass: undefined,
  activeItemClass: undefined,
  onValueChange: () => {},
});

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      className,
      children,
      variant,
      defaultValue,
      activeItemClass,
      hoverItemClass,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    // Internal state for uncontrolled usage
    const [selectedValue, setSelectedValue] = React.useState<string>(
      defaultValue || '',
    );

    // Handler for checkbox changes
    const handleValueChange = React.useCallback(
      (itemValue: string) => {
        setSelectedValue(itemValue);

        // Call onChange handler if provided
        onValueChange?.(itemValue);
      },
      [onValueChange],
    );

    // Context to pass down the handler and selected values
    const contextValue = React.useMemo(
      () => ({
        activeItemClass,
        selectedValue,
        hoverItemClass,
        onValueChange: handleValueChange,
      }),
      [selectedValue, activeItemClass, hoverItemClass, handleValueChange],
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <div
          className={cn(sidebarVariants({ variant }), className)}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    );
  },
);
Sidebar.displayName = 'Sidebar';

interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
}

const SidebarItem = React.forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ className, children, value, ...props }, ref) => {
    const { selectedValue, activeItemClass, hoverItemClass, onValueChange } =
      React.useContext(SidebarContext);
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          'text-primary-black dark:text-primary-white text-base bg-transparent p-4 flex gap-2 items-center cursor-pointer',
          selectedValue === value
            ? activeItemClass ||
                'bg-primary-gray-300 font-bold dark:bg-primary-gray-600'
            : '',
          hoverItemClass
            ? `hover:${hoverItemClass} dark:hover:${hoverItemClass}`
            : 'hover:bg-primary-gray-300 dark:hover:bg-primary-gray-600',
          className,
        )}
        onClick={() => {
          if (value) {
            onValueChange(value);
          }
        }}
      >
        {children}
      </div>
    );
  },
);
SidebarItem.displayName = 'SidebarItem';

export { Sidebar, SidebarItem };
