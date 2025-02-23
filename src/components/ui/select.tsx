/* eslint-disable @typescript-eslint/no-explicit-any */
import Select, {
  components,
  MultiValue,
  SingleValue,
  ActionMeta,
} from 'react-select';
import { CSSProperties } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Label } from './label';

interface OptionType {
  value: string | number;
  label: string;
}

const selectVariants = cva('text-sm rounded-none', {
  variants: {
    variant: {
      light: 'border-2 border-primary-gray-400',
      normal: 'border-2 border-primary-black',
    },
    size: {
      sm: 'p-0 min-h-[40px]',
      base: 'min-h-[48px] px-0 py-0.5',
    },
  },
  defaultVariants: {
    variant: 'normal',
    size: 'base',
  },
});

interface SelectPropsDataType {
  label?: string;
  labelClassName?: string;
  selectClassName?: string;
  truncateLabel?: boolean;
  options?: OptionType[];
  value?: OptionType | null;
  defaultValue?: OptionType | null;
  isMulti?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;

  onChange?: (
    newValue: MultiValue<OptionType> | SingleValue<OptionType>,
    actionMeta: ActionMeta<OptionType>,
  ) => void;
  onInputChange?: (inputValue: string, actionMeta: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;

  className?: string;
  classNamePrefix?: string;
  styles?: {
    [key: string]: (base: CSSProperties, state: any) => CSSProperties;
  };
  theme?: (theme: any) => any;

  menuIsOpen?: boolean;
  menuPlacement?: 'auto' | 'top' | 'bottom';
  menuPosition?: 'absolute' | 'fixed';
  menuPortalTarget?: HTMLElement;
  maxMenuHeight?: number;

  placeholder?: string;
  inputValue?: string;
  backspaceRemovesValue?: boolean;

  ariaLiveMessages?: { [key: string]: (props: any) => string };
  isRtl?: boolean;

  components?: {
    [key: string]: React.ComponentType<any>;
  };
  formatOptionLabel?: (
    data: OptionType,
    meta: { context: 'menu' | 'value' },
  ) => React.ReactNode;

  blurInputOnSelect?: boolean;
  closeMenuOnSelect?: boolean;
  captureMenuScroll?: boolean;
  escapeClearsValue?: boolean;
  loadingMessage?: () => string | null;
  noOptionsMessage?: () => string | null;
  getOptionLabel?: (option: OptionType) => string;
  getOptionValue?: (option: OptionType) => string;
  variant?: 'light' | 'normal';
  size?: 'sm' | 'base';
}

function CustomDropdownIndicator(props: any) {
  const { selectProps } = props;
  return (
    <components.DropdownIndicator {...props}>
      {selectProps.menuIsOpen ? (
        <ChevronUp className='h-6 w-6 stroke-accent-red' />
      ) : (
        <ChevronDown className='h-6 w-6 stroke-accent-red' />
      )}
    </components.DropdownIndicator>
  );
}

const customComponents = {
  DropdownIndicator: CustomDropdownIndicator,
};

function DropdownSelect({
  label,
  labelClassName,
  className,
  selectClassName,
  variant,
  size,
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
              cn(selectVariants({ variant, size }), selectClassName),
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
          components={customComponents}
        />
      </div>
    </div>
  );
}

export { DropdownSelect };
