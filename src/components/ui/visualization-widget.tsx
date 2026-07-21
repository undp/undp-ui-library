import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';

const VisualizationWidget = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={cn('@container w-full border border-stroke', className)} ref={ref} {...props}>
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
        <div className={cn('flex w-full gap-0 bg-surface-sm', className)} ref={ref} {...props}>
          {children}
        </div>
      </VisualizationWidgetHeaderContext.Provider>
    );
  },
);
VisualizationWidgetHeader.displayName = 'VisualizationWidgetHeader';

const VisualizationWidgetHeaderItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }
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
        'flex grow cursor-pointer flex-col items-center justify-center gap-1 border-0 border-r border-r-stroke bg-surface-2xs p-3 font-medium font-medium text-content-secondary text-sm last:border-r-0',
        selectedValue === value ? activeItemClass || 'bg-background text-primary' : '',
        hoverItemClass ? `hover:${hoverItemClass}` : 'hover:bg-background',
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
        'flex @3xl:max-h-[80vh] max-h-none @3xl:flex-row flex-col flex-wrap items-stretch gap-0',
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
  React.HTMLAttributes<HTMLDivElement> & {
    collapsible?: {
      enabled: boolean;
      triggerButtonClassName?: string;
      triggerButtonChildren?: React.ReactNode;
      triggerButtonStyles?: React.CSSProperties;
      defaultCollapsed?: boolean;
    };
  }
>(({ className, children, collapsible, ...props }, ref) => {
  const [collapsed, setCollapsed] = React.useState(collapsible?.defaultCollapsed || false);
  return (
    <div
      className={cn(
        'undp-scrollbar @3xl:max-h-[80vh] max-h-none @3xl:border-r @3xl:border-r-stroke border-r-0 bg-surface',
        collapsed
          ? '@3xl:w-[40px] w-full px-2 py-4'
          : '@3xl:w-1/3 @7xl:w-1/4 @8xl:w-1/5 w-full p-4',
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className='relative @3xl:block hidden w-full'>
        {collapsible?.enabled !== false ? (
          <Button
            type='button'
            variant='tertiary'
            size='sm'
            onClick={() => setCollapsed(!collapsed)}
            className={cn(
              'absolute top-0 right-0 flex h-6 w-6 rounded-full p-0 text-content-primary normal-case',
              collapsible?.triggerButtonClassName,
            )}
            style={collapsible?.triggerButtonStyles}
          >
            {collapsible?.triggerButtonChildren ||
              (collapsed ? <ChevronsRight /> : <ChevronsLeft />)}
          </Button>
        ) : null}
      </div>
      {collapsible?.enabled !== false && collapsed ? null : children}
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
        'undp-scrollbar flex @3xl:max-h-[80vh] max-h-none w-full flex-1 flex-wrap bg-background',
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
  VisualizationWidgetBody,
  VisualizationWidgetBodyContent,
  VisualizationWidgetBodySidebar,
  VisualizationWidgetHeader,
  VisualizationWidgetHeaderItem,
};
