/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from 'react-select';
import { CSSProperties } from 'react';
import { cn } from '@/lib/utils';
import { Label } from './label';

interface OptionType {
  value: string | number;
  label: string;
}
// Extend the props of react-select
interface SelectPropsDataType {
  label?: string;
  labelClassName?: string;
  selectClassName?: string;
  truncateLabel?: boolean;
  // Data
  options?: OptionType[]; // The options available in the dropdown
  value?: OptionType | null; // The currently selected option
  defaultValue?: OptionType | null; // The default selected value
  isMulti?: boolean; // Enable multi-select
  isClearable?: boolean; // Show a clear button (X) to remove selection
  isSearchable?: boolean; // Allow the user to search/filter the options
  isDisabled?: boolean; // Disable the entire select component
  isLoading?: boolean; // Show a loading indicator

  // Callbacks
  onChange?: (
    newValue: OptionType | null | OptionType[],
    actionMeta: any,
  ) => void; // Called when value changes
  onInputChange?: (inputValue: string, actionMeta: any) => void; // Called when the input value changes
  onFocus?: () => void; // Called when the select is focused
  onBlur?: () => void; // Called when the select loses focus
  onMenuOpen?: () => void; // Called when the menu is opened
  onMenuClose?: () => void; // Called when the menu is closed

  // Styling
  className?: string; // CSS class applied to the container
  classNamePrefix?: string; // Prefix for inner CSS classes
  styles?: {
    [key: string]: (base: CSSProperties, state: any) => CSSProperties;
  }; // Custom styles for components
  theme?: (theme: any) => any; // Custom theme function

  // Dropdown/Menu
  menuIsOpen?: boolean; // Control the menu's open state
  menuPlacement?: 'auto' | 'top' | 'bottom'; // Where to place the menu
  menuPosition?: 'absolute' | 'fixed'; // The positioning strategy for the menu
  menuPortalTarget?: HTMLElement; // Portal target for the menu
  maxMenuHeight?: number; // Max height of the menu

  // Input
  placeholder?: string; // Placeholder for the input
  inputValue?: string; // Manually control the input value
  backspaceRemovesValue?: boolean; // Remove values on backspace

  // Accessibility
  ariaLiveMessages?: { [key: string]: (props: any) => string }; // Custom ARIA live region messages
  isRtl?: boolean; // Right-to-left support

  // Custom Rendering
  components?: {
    [key: string]: React.ComponentType<any>;
  }; // Override components like `Option`, `Control`, etc.
  formatOptionLabel?: (
    data: OptionType,
    meta: { context: 'menu' | 'value' },
  ) => React.ReactNode; // Custom formatting for options

  // Others
  blurInputOnSelect?: boolean; // Blur the input when an option is selected
  closeMenuOnSelect?: boolean; // Close the menu when an option is selected
  captureMenuScroll?: boolean; // Capture scroll events when menu is open
  escapeClearsValue?: boolean; // Clear value when pressing `Escape`
  loadingMessage?: () => string | null; // Message when options are loading
  noOptionsMessage?: () => string | null; // Message when no options are available
  getOptionLabel?: (option: OptionType) => string; // Custom label extractor
  getOptionValue?: (option: OptionType) => string; // Custom value extractor
}

function DropdownSelect({
  label,
  labelClassName,
  className,
  selectClassName,
  truncateLabel,
  ...props
}: SelectPropsDataType): JSX.Element {
  return (
    <div className='w-full'>
      <div className={cn('flex flex-col gap-1.5', className)}>
        {label ? <Label className={labelClassName}>{label}</Label> : null}
        <Select
          {...props}
          classNames={{
            control: () =>
              cn(
                'min-h-[48px] border-2 border-primary-black text-sm rounded-none px-0 py-0.5',
                selectClassName,
              ),
            singleValue: () => 'text-medium text-primary-black text-base',
            placeholder: () => 'text-primary-gray-500 text-base',
            groupHeading: () => 'font-bold',
            input: () => 'text-base',
            multiValue: () =>
              'bg-primary-gray-300 font-medium text-primary-black rounded-sm border border-primary-gray-400',
            multiValueLabel: () =>
              `px-1.5 py-1 text-sm ${
                truncateLabel ? ' max-w-[72px] truncate' : ''
              }`,
            multiValueRemove: () => 'hover:bg-primary-gray-400',
            valueContainer: () => 'px-1',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            option: (state: any) =>
              `${'p-1 text-base hover:bg-primary-blue-100 hover:font-bold hover:text-primary-black '}${
                state.isSelected
                  ? 'bg-primary-blue-600 text-primary-white'
                  : 'bg-primary-white text-primary-black'
              }`,
            menu: () => 'rounded-none mt-1 border-0 shadow-lg',
            menuList: () => 'undp-scrollbar',
          }}
        />
      </div>
    </div>
  );
}

export { DropdownSelect };
