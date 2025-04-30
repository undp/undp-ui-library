import React from 'react';

import { cn } from '@/lib/utils';

const VisualizationWidget = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          'border border-primary-gray-300 dark:border-primary-gray-600 w-full',
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
VisualizationWidget.displayName = 'VisualizationWidget';

const VisualizationWidgetHeaderContext = React.createContext<{
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

interface VisualizationWidgetHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultValue?: string;
  activeItemClass?: string;
  hoverItemClass?: string;
  onChange?: (value: string) => void;
}

const VisualizationWidgetHeader = React.forwardRef<HTMLDivElement, VisualizationWidgetHeaderProps>(
  (
    { className, children, defaultValue, activeItemClass, hoverItemClass, onChange, ...props },
    ref,
  ) => {
    const [selectedValue, setSelectedValue] = React.useState<string>(defaultValue || '');

    // Handler for checkbox changes
    const handleValueChange = React.useCallback(
      (itemValue: string) => {
        setSelectedValue(itemValue);

        // Call onChange handler if provided
        onChange?.(itemValue);
      },
      [onChange],
    );
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
      <VisualizationWidgetHeaderContext.Provider value={contextValue}>
        <div
          className={cn(
            'flex gap-0 w-full bg-primary-gray-300 dark:bg-primary-gray-600',
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </VisualizationWidgetHeaderContext.Provider>
    );
  },
);
VisualizationWidgetHeader.displayName = 'VisualizationWidgetHeader';

interface VisualizationWidgetHeaderItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const VisualizationWidgetHeaderItem = React.forwardRef<
  HTMLButtonElement,
  VisualizationWidgetHeaderItemProps
>(({ className, children, value, ...props }, ref) => {
  const { selectedValue, activeItemClass, hoverItemClass, onValueChange } = React.useContext(
    VisualizationWidgetHeaderContext,
  );
  return (
    <button
      ref={ref}
      type='button'
      {...props}
      onClick={() => onValueChange(value)}
      className={cn(
        'flex border-0 flex-col grow gap-1 items-center justify-center p-3 font-medium bg-primary-gray-100 dark:bg-primary-gray-650 text-primary-gray-500 dark:text-primary-white text-sm font-medium border-r border-r-primary-gray-400 dark:border-r-primary-gray-550 last:border-r-0',
        selectedValue === value
          ? activeItemClass || 'bg-primary-white text-primary-blue-600 dark:bg-primary-gray-700'
          : '',
        hoverItemClass
          ? `hover:${hoverItemClass} dark:hover:${hoverItemClass}`
          : 'hover:bg-primary-white dark:hover:bg-primary-gray-700',
        className,
      )}
    >
      {children}
    </button>
  );
});
VisualizationWidgetHeaderItem.displayName = 'VisualizationWidgetHeaderItem';

const VisualizationWidgetBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn(
        'flex gap-0 flex-wrap items-stretch max-h-none flex-col md:max-h-[80vh] md:flex-row',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
VisualizationWidgetBody.displayName = 'VisualizationWidgetBody';

const VisualizationWidgetBodySidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn(
        'flex flex-wrap undp-scrollbar max-h-none md:max-h-[80vh] w-full md:w-1/3 xl:w-1/4 2xl:w-1/5 bg-primary-gray-100 dark:bg-primary-gray-650 border-r border-r-primary-gray-400 dark:border-r-primary-gray-600 p-4',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
VisualizationWidgetBodySidebar.displayName = 'VisualizationWidgetBodySidebar';

const VisualizationWidgetBodyContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn(
        'flex flex-wrap undp-scrollbar flex-1 bg-primary-white dark:bg-primary-gray-700 max-h-none md:max-h-[80vh]',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
VisualizationWidgetBodyContent.displayName = 'VisualizationWidgetBodyContent';

export {
  VisualizationWidget,
  VisualizationWidgetHeader,
  VisualizationWidgetHeaderItem,
  VisualizationWidgetBody,
  VisualizationWidgetBodySidebar,
  VisualizationWidgetBodyContent,
};
