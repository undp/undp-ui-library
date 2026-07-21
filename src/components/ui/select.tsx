/** biome-ignore-all lint/suspicious/noExplicitAny: Any for some of the type tht does not exist */
import { cva } from 'class-variance-authority';
import { Check, ChevronDown, ChevronUp, X } from 'lucide-react';
import type { JSX } from 'react/jsx-runtime';
import type {
  GroupBase,
  MultiValue as MultiValueOption,
  OnChangeValue,
  OptionProps,
  SingleValue as SingleValueOption,
} from 'react-select';
import Select, { components, createFilter, type Props } from 'react-select';

import { cn } from '@/lib/utils';
import { Checkbox } from './checkbox';

const MultiValue = (props: any, maxTagCount: number) => {
  const { index, getValue } = props;
  const selectedValues = getValue();

  if (index < maxTagCount) {
    return <components.MultiValue {...props} />;
  }

  if (index === maxTagCount) {
    const extraCount = selectedValues.length - maxTagCount;
    return <div className='ml-1 text-sm'>+{extraCount}</div>;
  }

  return null;
};

interface BaseOption {
  value: string | number;
  label: string | number;
}

const selectVariants = cva('text-sm! rounded-none!', {
  variants: {
    variant: {
      light: 'border! border-stroke!',
      normal: 'border-2! border-foreground!',
    },
    size: {
      sm: 'p-0! min-h-[40px]!',
      base: 'min-h-[48px]! px-0! py-0.5!',
    },
    isDisabled: {
      true: 'opacity-disabled! cursor-not-allowed!',
      false: 'bg-background!',
    },
  },
  defaultVariants: {
    variant: 'normal',
    size: 'base',
    isDisabled: false,
  },
});

const iconVariants = cva('h-6 w-6', {
  variants: {
    color: {
      primary: 'stroke-primary',
      secondary: 'stroke-secondary',
      tertiary: 'stroke-tertiary',
      quaternary: 'stroke-quaternary',
      foreground: 'stroke-foreground',
      surface: 'stroke-surface',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

interface SelectPropsDataType<
  Option extends BaseOption = BaseOption,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends Props<Option, IsMulti, Group> {
  truncateLabel?: boolean;
  variant?: 'light' | 'normal';
  size?: 'sm' | 'base';
  maxTagCount?: number;
  color?: 'primary' | 'secondary' | 'tertiary' | 'foreground' | 'quaternary';
  showCheck?: boolean;
}
function CustomDropdownIndicator(
  props: any,
  color?: 'primary' | 'secondary' | 'tertiary' | 'foreground' | 'quaternary',
) {
  const { selectProps } = props;
  return (
    <components.DropdownIndicator {...props}>
      {selectProps.menuIsOpen ? (
        <ChevronUp className={iconVariants({ color })} strokeWidth={2} />
      ) : (
        <ChevronDown className={iconVariants({ color })} strokeWidth={2} />
      )}
    </components.DropdownIndicator>
  );
}

function createOption<Option, IsMulti extends boolean, Group extends GroupBase<Option>>(
  color?: 'primary' | 'secondary' | 'tertiary' | 'foreground' | 'quaternary',
  showCheck?: boolean,
  isMulti?: boolean,
) {
  return function SelectOption(props: OptionProps<Option, IsMulti, Group>) {
    return (
      <components.Option {...props}>
        <div className='flex items-center justify-between gap-2'>
          {props.label}
          {showCheck && isMulti ? (
            <Checkbox checked={props.isSelected} color={color} />
          ) : (
            props.isSelected && (
              <Check strokeWidth={2} className={cn(iconVariants({ color }), 'h-6 w-6 shrink-0')} />
            )
          )}
        </div>
      </components.Option>
    );
  };
}

const customComponents = (
  maxTagCount?: number,
  color?: 'primary' | 'secondary' | 'tertiary' | 'foreground' | 'quaternary',
) => ({
  DropdownIndicator: (props: any) => CustomDropdownIndicator(props, color),
  MultiValue: (props: any) => MultiValue(props, maxTagCount || Infinity),
  MultiValueRemove: (props: any) => {
    const { innerRef, innerProps } = props;
    return (
      <div
        {...innerRef}
        {...innerProps}
        className='rounded p-1.5 text-content-secondary hover:text-error'
      >
        <X size={14} />
      </div>
    );
  },
});

function DropdownSelect<
  Option extends BaseOption = BaseOption,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  className,
  classNames,
  variant,
  size,
  truncateLabel,
  placeholder,
  maxTagCount,
  isDisabled,
  components,
  isSearchable,
  color,
  showCheck = true,
  ...props
}: SelectPropsDataType<Option, IsMulti, Group>): JSX.Element {
  return (
    <Select
      {...props}
      isSearchable={isSearchable}
      isDisabled={isDisabled}
      hideSelectedOptions={false}
      closeMenuOnSelect={!props.isMulti}
      placeholder={placeholder || 'Select...'}
      classNames={{
        control: () =>
          cn(selectVariants({ variant, size, isDisabled: isDisabled || false }), className),
        singleValue: (state) =>
          cn(
            'text-base',
            state.isDisabled ? 'text-content-primary! opacity-disabled!' : 'text-content-primary!',
          ),
        placeholder: () => 'text-content-placeholder! text-base',
        group: () => 'py-0!',
        indicatorSeparator: () => 'hidden!',
        groupHeading: () =>
          'font-bold! text-sm! uppercase! py-[12px]! m-0! bg-surface-md text-content-primary!',
        input: () => `text-base undp-select-input${isSearchable ? ' searchable-input' : ''}`,
        multiValue: () => 'bg-surface-xs rounded-sm border border-stroke text-base',
        multiValueLabel: () =>
          `px-1.5! py-1! text-sm text-content-primary ${truncateLabel ? ' max-w-[72px] truncate' : ''}`,
        multiValueRemove: () => 'hover:bg-surface-hover',
        valueContainer: () => 'px-2 py-[2px]',
        option: (state) =>
          cn(
            'bg-transparent text-base text-content-primary',
            state.isSelected
              ? 'bg-transparent! text-content-primary! hover:bg-surface-hover! '
              : 'text-content-primary hover:bg-surface-hover! hover:text-content-primary!',
            state.isFocused ? 'bg-surface-hover! ' : '',
          ),
        menu: () => 'bg-surface/90! backdrop-blur-frosted rounded-base! mt-1! border-0! p-0!',
        menuList: () => 'undp-scrollbar pt-0! pb-0!',
        ...(classNames || {}),
      }}
      components={{
        ...customComponents(maxTagCount, color),
        Option: createOption<Option, IsMulti, Group>(color, showCheck, props.isMulti),
        ...(components || {}),
      }}
    />
  );
}

export type { BaseOption as OptionType, MultiValueOption, OnChangeValue, SingleValueOption };
export { components, createFilter, DropdownSelect };
