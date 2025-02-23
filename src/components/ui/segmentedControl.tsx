import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Label } from './label';

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
  label?: string;
  labelClassName?: string;
}

function SegmentedControl(props: Props) {
  const {
    options,
    defaultValue,
    onValueChange,
    className,
    buttonClassName,
    activeButtonClassName,
    labelClassName,
    label,
  } = props;
  const [selected, setSelected] = useState(defaultValue || options[0].value);

  const handleSelect = (value: string) => {
    setSelected(value);
    onValueChange?.(value);
  };

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label ? <Label className={labelClassName}>{label}</Label> : null}
      <div>
        <div className='inline-flex p-1 bg-primary-gray-300 rounded-none'>
          {options.map(option => (
            <button
              type='button'
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={cn(
                'px-4 py-2 text-sm font-semibold rounded-sm transition-all duration-200',
                selected === option.value
                  ? 'bg-primary-white shadow-sm text-primary-blue-600'
                  : 'text-primary-black hover:text-primary-blue-600 hover:bg-primary-gray-400',
                buttonClassName,
                selected === option.value ? activeButtonClassName : '',
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export { SegmentedControl };
