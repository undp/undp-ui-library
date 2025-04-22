/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Select, {
  components,
  MultiValue,
  SingleValue,
  ActionMeta,
  createFilter,
  OptionsOrGroups,
  GroupBase,
  PropsValue,
  FormatOptionLabelMeta,
  GetOptionLabel,
  GetOptionValue,
  FilterOptionOption,
} from 'react-select';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { JSX } from 'react/jsx-runtime';

import { cn } from '@/lib/utils';

interface OptionType {
  value: string | number | (string | number)[];
  label: string | number;
}

const selectVariants = cva(
  'text-sm! rounded-none! bg-primary-white! dark:bg-primary-gray-650!',
  {
    variants: {
      variant: {
        light: 'border! border-primary-gray-400! dark:border-primary-gray-500!',
        normal: 'border-2! border-primary-black! dark:border-primary-gray-300!',
      },
      size: {
        sm: 'p-0! min-h-[40px]!',
        base: 'min-h-[48px]! px-0! py-0.5!',
      },
    },
    defaultVariants: {
      variant: 'normal',
      size: 'base',
    },
  },
);

interface SelectPropsDataType {
  truncateLabel?: boolean;
  options?: OptionsOrGroups<OptionType, GroupBase<OptionType>> | undefined;
  value?: PropsValue<OptionType> | undefined;
  defaultValue?: PropsValue<OptionType> | undefined;
  isMulti?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  controlShouldRenderValue?: boolean;
  hideSelectedOptions?: boolean;

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
    formatOptionLabelMeta: FormatOptionLabelMeta<OptionType>,
  ) => React.ReactNode;

  blurInputOnSelect?: boolean;
  closeMenuOnSelect?: boolean;
  captureMenuScroll?: boolean;
  escapeClearsValue?: boolean;
  filterOption?:
    | ((option: FilterOptionOption<OptionType>, inputValue: string) => boolean)
    | null;
  loadingMessage?: () => string | null;
  noOptionsMessage?: () => string | null;
  getOptionLabel?: GetOptionLabel<OptionType> | undefined;
  getOptionValue?: GetOptionValue<OptionType> | undefined;
  variant?: 'light' | 'normal';
  size?: 'sm' | 'base';
}

function CustomDropdownIndicator(props: any) {
  const { selectProps } = props;
  return (
    <components.DropdownIndicator {...props}>
      {selectProps.menuIsOpen ? (
        <ChevronUp className='h-6 w-6 stroke-accent-red dark:stroke-primary-white' />
      ) : (
        <ChevronDown className='h-6 w-6 stroke-accent-red dark:stroke-primary-white' />
      )}
    </components.DropdownIndicator>
  );
}

const customComponents = {
  DropdownIndicator: CustomDropdownIndicator,
  MultiValueRemove: (props: any) => {
    const { innerRef, innerProps } = props;
    return (
      <div
        {...innerRef}
        {...innerProps}
        className='p-1.5 rounded text-primary-gray-600 hover:text-accent-dark-red dark:text-primary-gray-100 dark:hover:text-accent-light-red'
      >
        <X size={14} />
      </div>
    );
  },
};

function DropdownSelect({
  className,
  variant,
  size,
  truncateLabel,
  placeholder,
  ...props
}: SelectPropsDataType): JSX.Element {
  return (
    <Select
      {...props}
      placeholder={placeholder || 'Select...'}
      classNames={{
        control: () => cn(selectVariants({ variant, size }), className),
        singleValue: () =>
          'text-primary-black dark:text-primary-white text-base',
        placeholder: () =>
          'text-primary-gray-550 dark:text-primary-400 text-base',
        groupHeading: () => 'font-bold',
        input: () => 'text-base',
        multiValue: () =>
          'bg-primary-gray-300 dark:bg-primary-gray-550 rounded-sm border border-primary-gray-400 dark:border-primary-gray-600',
        multiValueLabel: () =>
          `!px-1.5 !py-1 text-sm text-primary-black dark:text-primary-white ${
            truncateLabel ? ' max-w-[72px] truncate' : ''
          }`,
        multiValueRemove: () =>
          'hover:bg-primary-gray-400 dark:[&_svg]:stroke-primary-white!',
        valueContainer: () => 'px-1',
         
        option: (state: any) =>
          `${'p-0 text-sm hover:bg-primary-blue-100 dark:hover:bg-primary-blue-400 hover:font-bold hover:text-primary-black'}${
            state.isSelected
              ? 'bg-primary-blue-600 text-primary-white dark:bg-primary-blue-200 dark:text-primary-gray-700'
              : 'bg-primary-white text-primary-black dark:bg-primary-gray-650 dark:text-primary-white'
          }`,
        menu: () => 'rounded-none! mt-1! border-0! shadow-lg! p-0!',
        menuList: () => 'undp-scrollbar pt-0! pb-0!',
      }}
      components={customComponents}
    />
  );
}

export { DropdownSelect, createFilter };
