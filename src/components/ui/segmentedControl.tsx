import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptionDataType {
  label: string;
  value: string;
}

interface Props {
  options: OptionDataType[];
  defaultValue?: string;
  onValueChange?: (d: string) => void;
  className?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
}

function SegmentedControl(props: Props) {
  const {
    options,
    defaultValue,
    onValueChange,
    className,
    buttonClassName,
    activeButtonClassName,
  } = props;
  const [selected, setSelected] = useState(defaultValue || options[0].value);

  const handleSelect = (value: string) => {
    setSelected(value);
    onValueChange?.(value);
  };

  return (
    <div
      className={cn(
        'inline-flex p-1 bg-primary-gray-300 dark:bg-primary-gray-600 rounded-none',
        className,
      )}
    >
      {options.map(option => (
        <button
          type='button'
          key={option.value}
          onClick={() => handleSelect(option.value)}
          className={cn(
            'px-4 py-2 text-sm rounded-sm transition-all duration-200',
            selected === option.value
              ? 'bg-primary-white dark:bg-primary-gray-550 shadow-sm text-primary-blue-600 dark:text-primary-white'
              : 'text-primary-black dark:text-primary-gray-200 hover:text-primary-blue-600 hover:dark:text-primary-white hover:bg-primary-gray-400 dark:hover:bg-primary-gray-650',
            buttonClassName,
            selected === option.value ? activeButtonClassName : '',
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export { SegmentedControl };
