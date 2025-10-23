import { useEffect, useEffectEvent, useState } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

interface OptionDataType {
  label: React.ReactNode;
  value: string;
}
const segmentedButtonVariants = cva(
  'inline-flex bg-primary-gray-300 dark:bg-primary-gray-600 rounded-none',
  {
    variants: {
      variant: {
        normal: 'border border-primary-gray-300 dark:border-primary-gray-600',
        light: 'border-0 border-primary-black dark:border-primary-gray-300',
      },
      size: {
        sm: 'p-[3px]',
        base: 'p-[5px]',
      },
    },
    defaultVariants: {
      size: 'base',
      variant: 'normal',
    },
  },
);

const buttonSelectedVariants = cva('bg-primary-white dark:bg-primary-gray-550 shadow-xs', {
  variants: {
    color: {
      blue: 'text-primary-blue-600 dark:text-primary-white',
      red: 'text-accent-dark-red dark:text-primary-white',
      black: 'text-primary-gray-700 dark:text-primary-white',
      custom: 'text-custom-color-600 dark:text-primary-white',
    },
  },
  defaultVariants: { color: 'red' },
});

const buttonUnselectedVariants = cva(
  'text-primary-black dark:text-primary-gray-200 hover:bg-primary-gray-400 dark:hover:bg-primary-gray-650',
  {
    variants: {
      color: {
        blue: 'hover:text-primary-blue-600 dark:hover:text-primary-white',
        red: 'hover:text-accent-dark-red dark:hover:text-primary-white',
        black: 'hover:text-primary-gray-600 dark:hover:text-primary-white',
        custom: 'hover:text-custom-color-600 dark:hover:text-primary-white',
      },
    },
    defaultVariants: { color: 'red' },
  },
);

interface Props {
  options: OptionDataType[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (d: string) => void;
  className?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
  size?: 'sm' | 'base';
  variant?: 'light' | 'normal';
  color?: 'blue' | 'red' | 'black' | 'custom';
  buttonStyle?: {
    active?: React.CSSProperties;
    inactive?: React.CSSProperties;
  };
}

function SegmentedControl(props: Props) {
  const {
    options,
    defaultValue,
    onValueChange,
    className,
    buttonClassName,
    activeButtonClassName,
    size,
    variant,
    color,
    value,
    buttonStyle,
  } = props;
  const [selected, setSelected] = useState(value || defaultValue || options[0].value);

  const handleSelect = (value: string) => {
    setSelected(value);
    onValueChange?.(value);
  };

  const setSelectedEffect = useEffectEvent(() => {
    setSelected(value || defaultValue || options[0].value);
  });
  useEffect(() => {
    setSelectedEffect();
  }, [defaultValue, options, value]);

  return (
    <div className={cn(segmentedButtonVariants({ size, variant }), className)}>
      {options.map(option => (
        <button
          type='button'
          key={option.value}
          onClick={() => handleSelect(option.value)}
          className={cn(
            'px-4 py-2 text-sm rounded-sm transition-all duration-200',
            selected === option.value
              ? buttonSelectedVariants({ color })
              : buttonUnselectedVariants({ color }),
            buttonClassName,
            selected === option.value ? activeButtonClassName : '',
          )}
          style={selected === option.value ? buttonStyle?.active : buttonStyle?.inactive}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export { SegmentedControl };
