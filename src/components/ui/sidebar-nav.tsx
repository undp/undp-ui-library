import { cva, type VariantProps } from 'class-variance-authority';
import React, { useEffect, useEffectEvent } from 'react';

import { cn } from '@/lib/utils';

const sidebarVariants = cva('w-full @2xl:w-1/2 @3xl:w-1/3 @7xl:w-1/4 @8xl:w-1/5', {
  variants: {
    variant: {
      noEffect: '',
      background: 'bg-surface',
      border: 'border-r border-r-stroke',
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
        <div className='@container w-full'>
          <div className={cn(sidebarVariants({ variant }), className)} ref={ref} {...props}>
            {children}
          </div>
        </div>
      </SidebarContext.Provider>
    );
  },
);
Sidebar.displayName = 'Sidebar';

const SidebarItem = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement> & {
    value?: string;
  }
>(({ className, children, value, ...props }, ref) => {
  const { selectedValue, classNames, onValueChange } = React.useContext(SidebarContext);
  return (
    <button
      {...props}
      ref={ref}
      className={cn(
        'flex w-full cursor-pointer items-center gap-2 border-0 bg-transparent p-4 text-base text-content-primary hover:bg-surface-hover',
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
    </button>
  );
});
SidebarItem.displayName = 'SidebarItem';

export { Sidebar, SidebarItem };
