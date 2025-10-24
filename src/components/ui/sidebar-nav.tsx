import React, { useEffect, useEffectEvent } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const sidebarVariants = cva('w-full sm:w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5', {
  variants: {
    variant: {
      noEffect: '',
      background: 'bg-primary-gray-100 dark:bg-primary-gray-650',
      border: 'border-r border-r-primary-gray-300 dark:border-r-primary-gray-600',
    },
  },
  defaultVariants: { variant: 'background' },
});
interface SidebarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof sidebarVariants> {
  defaultValue?: string;
  activeValue?: string;
  classNames?: {
    active?: string;
    controls?: string;
    hover?: string;
  };
  activeItemClass?: string;
  hoverItemClass?: string;
  onValueChange?: (value: string) => void;
}

const SidebarContext = React.createContext<{
  selectedValue?: string;
  activeValue?: string;
  classNames?: {
    active?: string;
    controls?: string;
  };
  onValueChange: (value: string) => void;
}>({
  selectedValue: undefined,
  classNames: undefined,
  activeValue: undefined,
  onValueChange: () => {},
});

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      className,
      children,
      variant,
      defaultValue,
      activeValue,
      activeItemClass,
      hoverItemClass,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    const [selectedValue, setSelectedValue] = React.useState<string>(
      activeValue || defaultValue || '',
    );
    const handleValueChange = React.useCallback(
      (itemValue: string) => {
        setSelectedValue(activeValue || itemValue);
        onValueChange?.(itemValue);
      },
      [onValueChange, activeValue],
    );

    const setSelectedValueEffect = useEffectEvent((activeValue?: string) => {
      setSelectedValue(activeValue || defaultValue || '');
    });

    useEffect(() => {
      setSelectedValueEffect(activeValue);
    }, [activeValue]);

    const contextValue = React.useMemo(
      () => ({
        activeItemClass,
        activeValue,
        selectedValue,
        hoverItemClass,
        onValueChange: handleValueChange,
      }),
      [activeItemClass, activeValue, selectedValue, hoverItemClass, handleValueChange],
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <div className={cn(sidebarVariants({ variant }), className)} ref={ref} {...props}>
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
    const { selectedValue, classNames, onValueChange } = React.useContext(SidebarContext);
    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          'text-primary-black dark:text-primary-white text-base bg-transparent p-4 flex gap-2 items-center cursor-pointer hover:bg-primary-gray-300 dark:hover:bg-primary-gray-600',
          className,
          classNames?.controls,
          selectedValue === value && classNames?.active,
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
