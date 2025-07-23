import Select, { components, createFilter, Props } from 'react-select';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { JSX } from 'react/jsx-runtime';

import { cn } from '@/lib/utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
const selectVariants = cva('text-sm! rounded-none!', {
  variants: {
    variant: {
      light: 'border! border-primary-gray-400! dark:border-primary-gray-500!',
      normal: 'border-2! border-primary-black! dark:border-primary-gray-300!',
    },
    size: {
      sm: 'p-0! min-h-[40px]!',
      base: 'min-h-[48px]! px-0! py-0.5!',
    },
    isDisabled: {
      true: 'bg-primary-gray-200! dark:bg-primary-gray-650! border-primary-gray-400! dark:border-primary-gray-500!',
      false: 'bg-primary-white! dark:bg-primary-gray-650!',
    },
  },
  defaultVariants: {
    variant: 'normal',
    size: 'base',
    isDisabled: false,
  },
});

interface SelectPropsDataType extends Props {
  truncateLabel?: boolean;
  variant?: 'light' | 'normal';
  size?: 'sm' | 'base';
  maxTagCount?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomDropdownIndicator(props: any, isDisabled?: boolean) {
  const { selectProps } = props;
  return (
    <components.DropdownIndicator {...props}>
      {selectProps.menuIsOpen ? (
        <ChevronUp
          className={cn(
            'h-6 w-6',
            isDisabled ? 'stroke-primary-gray-400' : 'stroke-accent-red dark:stroke-primary-white',
          )}
        />
      ) : (
        <ChevronDown
          className={cn(
            'h-6 w-6',
            isDisabled ? 'stroke-primary-gray-400' : 'stroke-accent-red dark:stroke-primary-white',
          )}
        />
      )}
    </components.DropdownIndicator>
  );
}

const customComponents = (maxTagCount?: number, isDisabled?: boolean) => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  DropdownIndicator: (props: any) => CustomDropdownIndicator(props, isDisabled),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  MultiValue: (props: any) => MultiValue(props, maxTagCount || Infinity),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
});

function DropdownSelect({
  className,
  variant,
  size,
  truncateLabel,
  placeholder,
  maxTagCount,
  isDisabled,
  ...props
}: SelectPropsDataType): JSX.Element {
  return (
    <Select
      {...props}
      isDisabled={isDisabled}
      hideSelectedOptions={false}
      closeMenuOnSelect={!props.isMulti}
      placeholder={placeholder || 'Select...'}
      classNames={{
        control: () =>
          cn(selectVariants({ variant, size, isDisabled: isDisabled || false }), className),
        singleValue: state =>
          cn(
            'text-base',
            state.isDisabled
              ? 'text-primary-gray-500! dark:text-primary-gray-500! '
              : 'text-primary-black! dark:text-primary-white!',
          ),
        placeholder: () => 'text-primary-gray-550! dark:text-primary-400! text-base',
        group: () => 'py-0!',
        groupHeading: () =>
          'font-bold! text-base! normal-case! py-[12px]! m-0! bg-primary-gray-300 dark:bg-primary-gray-600 text-primary-gray-700! dark:text-primary-white!',
        input: () => 'text-base undp-select-input',
        multiValue: () =>
          'bg-primary-gray-300 dark:bg-primary-gray-550 rounded-sm border border-primary-gray-400 dark:border-primary-gray-600',
        multiValueLabel: () =>
          `px-1.5! py-1! text-sm text-primary-black dark:text-primary-white ${
            truncateLabel ? ' max-w-[72px] truncate' : ''
          }`,
        multiValueRemove: () => 'hover:bg-primary-gray-400 dark:[&_svg]:stroke-primary-white!',
        valueContainer: () => 'px-2 py-[2px]',
        option: state =>
          cn(
            'bg-transparent! text-base',
            state.isSelected
              ? 'bg-primary-blue-500! text-primary-white dark:bg-primary-blue-600! dark:text-primary-gray-700 hover:bg-primary-blue-700! dark:hover:bg-primary-blue-700!'
              : 'text-primary-black dark:text-primary-white hover:bg-primary-blue-100! dark:hover:bg-primary-blue-700! hover:text-primary-black! dark:hover:text-primary-white!',
          ),
        menu: () =>
          'bg-primary-white! rounded-none! mt-1! border-0! shadow-lg! p-0! dark:bg-primary-gray-650!',
        menuList: () => 'undp-scrollbar pt-0! pb-0!',
      }}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      components={customComponents(maxTagCount, isDisabled) as any}
    />
  );
}

export { DropdownSelect, createFilter };
