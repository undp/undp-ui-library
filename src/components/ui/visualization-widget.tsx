import { cva, type VariantProps } from 'class-variance-authority';
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

const buttonSelectedVariants = cva('bg-background', {
  variants: {
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      quaternary: 'text-quaternary',
      foreground: 'text-foreground',

      red: 'text-accent-red',
      orange: 'text-accent-orange',
      yellow: 'text-accent-yellow',
      lime: 'text-accent-lime',
      green: 'text-accent-green',
      teal: 'text-accent-teal',
      azure: 'text-accent-azure',
      blue: 'text-accent-blue',
      violet: 'text-accent-violet',
      pink: 'text-accent-pink',

      'sdg-1': 'text-sdg-1',
      'sdg-2': 'text-sdg-2',
      'sdg-3': 'text-sdg-3',
      'sdg-4': 'text-sdg-4',
      'sdg-5': 'text-sdg-5',
      'sdg-6': 'text-sdg-6',
      'sdg-7': 'text-sdg-7',
      'sdg-8': 'text-sdg-8',
      'sdg-9': 'text-sdg-9',
      'sdg-10': 'text-sdg-10',
      'sdg-11': 'text-sdg-11',
      'sdg-12': 'text-sdg-12',
      'sdg-13': 'text-sdg-13',
      'sdg-14': 'text-sdg-14',
      'sdg-15': 'text-sdg-15',
      'sdg-16': 'text-sdg-16',
      'sdg-17': 'text-sdg-17',

      male: 'text-categorical-male',
      female: 'text-categorical-female',
      urban: 'text-categorical-urban',
      rural: 'text-categorical-rural',
      child: 'text-categorical-child',
      adolescent: 'text-categorical-adolescent',
      'young-adult': 'text-categorical-young-adult',
      adult: 'text-categorical-adult',
      'older-adult': 'text-categorical-older-adult',
    },
  },
  defaultVariants: { color: 'primary' },
});

const VisualizationWidgetHeaderContext = React.createContext<
  {
    selectedValue?: string;
    activeItemClass?: string;
    hoverItemClass?: string;
    onValueChange: (value: string) => void;
  } & VariantProps<typeof buttonSelectedVariants>
>({
  selectedValue: undefined,
  hoverItemClass: undefined,
  activeItemClass: undefined,
  color: undefined,
  onValueChange: () => {},
});

interface VisualizationWidgetHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {
  defaultValue?: string;
  activeItemClass?: string;
  hoverItemClass?: string;
  color?: VariantProps<typeof buttonSelectedVariants>['color'];
  onChange?: (value: string) => void;
}

const VisualizationWidgetHeader = React.forwardRef<HTMLDivElement, VisualizationWidgetHeaderProps>(
  (
    {
      className,
      children,
      defaultValue,
      activeItemClass,
      hoverItemClass,
      onChange,
      color,
      ...props
    },
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
        color,
      }),
      [selectedValue, activeItemClass, hoverItemClass, handleValueChange, color],
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
  const { selectedValue, activeItemClass, hoverItemClass, onValueChange, color } = React.useContext(
    VisualizationWidgetHeaderContext,
  );
  return (
    <button
      ref={ref}
      type='button'
      {...props}
      onClick={() => onValueChange(value)}
      className={cn(
        'flex grow cursor-pointer flex-col items-center justify-center gap-1 border-0 border-r border-r-stroke bg-surface-2xs p-3 font-medium text-content-secondary text-sm last:border-r-0',
        selectedValue === value ? cn(buttonSelectedVariants({ color }), activeItemClass) : '',
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
        collapsed ? '@3xl:w-10 w-full px-2 py-4' : '@3xl:w-1/3 @7xl:w-1/4 @8xl:w-1/5 w-full p-4',
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className='relative @3xl:block hidden w-full'>
        {collapsible?.enabled !== false ? (
          <Button
            type='button'
            variant='icon'
            size='sm'
            padding='none'
            onClick={() => setCollapsed(!collapsed)}
            className={cn(
              'absolute top-0 right-0 flex normal-case',
              collapsible?.triggerButtonClassName,
            )}
            rounded='full'
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
