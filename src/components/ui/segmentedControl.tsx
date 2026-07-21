import { cva } from 'class-variance-authority';
import { useEffect, useEffectEvent, useState } from 'react';

import { cn } from '@/lib/utils';

const segmentedButtonVariants = cva('inline-flex rounded-base bg-surface', {
  variants: {
    variant: {
      normal: 'border-2 border-foreground bg-background',
      light: 'border-0',
    },
    size: {
      sm: '',
      base: '',
    },
    rounded: {
      base: 'rounded-base',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      full: 'rounded-full',
    },
  },
  compoundVariants: [
    { variant: 'normal', size: 'sm', class: 'p-0' },
    { variant: 'normal', size: 'base', class: 'p-0' },
    { variant: 'light', size: 'sm', class: 'p-[3px]' },
    { variant: 'light', size: 'base', class: 'p-[5px]' },
  ],
  defaultVariants: {
    size: 'base',
    variant: 'normal',
    rounded: 'base',
  },
});

const buttonSelectedVariants = cva('disabled:opacity-disabled disabled:cursor-not-allowed', {
  variants: {
    variant: {
      normal: '',
      light: '',
    },
    color: {
      primary: '',
      secondary: '',
      tertiary: '',
      quaternary: '',
      foreground: '',
    },
    rounded: {
      base: 'rounded-base',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      full: 'rounded-full',
    },
  },

  compoundVariants: [
    { variant: 'normal', color: 'primary', class: 'bg-primary text-content-reverse' },
    { variant: 'normal', color: 'secondary', class: 'bg-secondary text-content-reverse' },
    { variant: 'normal', color: 'tertiary', class: 'bg-tertiary text-content-reverse' },
    { variant: 'normal', color: 'quaternary', class: 'bg-quaternary text-content-primary' },
    {
      variant: 'normal',
      color: 'foreground',
      class: 'font-bold bg-foreground text-content-reverse',
    },
    { variant: 'light', color: 'primary', class: 'font-bold bg-background text-primary' },
    { variant: 'light', color: 'secondary', class: 'font-bold bg-background text-secondary' },
    { variant: 'light', color: 'tertiary', class: 'font-bold bg-background text-tertiary' },
    { variant: 'light', color: 'quaternary', class: 'font-bold bg-background text-quaternary' },
    {
      variant: 'light',
      color: 'foreground',
      class: 'font-bold bg-background text-foreground',
    },
  ],
  defaultVariants: { color: 'primary', rounded: 'base', variant: 'normal' },
});

const buttonUnselectedVariants = cva(
  'text-content-primary hover:bg-surface-hover disabled:hover:bg-transparent disabled:hover:text-inherit disabled:cursor-not-allowed disabled:opacity-25',
  {
    variants: {
      variant: {
        normal: '',
        light: '',
      },
      color: {
        primary: '',
        secondary: '',
        tertiary: '',
        quaternary: '',
        foreground: '',
      },
      rounded: {
        base: 'rounded-base',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        full: 'rounded-full',
      },
    },

    compoundVariants: [
      {
        variant: 'normal',
        color: 'primary',
        class: 'hover:bg-primary-light',
      },
      { variant: 'normal', color: 'secondary', class: 'hover:bg-secondary-light' },
      { variant: 'normal', color: 'tertiary', class: 'hover:bg-tertiary-light' },
      { variant: 'normal', color: 'quaternary', class: 'hover:bg-quaternary-hover' },
      { variant: 'normal', color: 'foreground', class: 'hover:bg-surface-hover' },
      {
        variant: 'light',
        color: 'primary',
        class: 'hover:text-primary disabled:hover:text-inherit',
      },
      {
        variant: 'light',
        color: 'secondary',
        class: 'hover:text-secondary disabled:hover:text-inherit',
      },
      {
        variant: 'light',
        color: 'tertiary',
        class: 'hover:text-tertiary disabled:hover:text-inherit',
      },
      {
        variant: 'light',
        color: 'quaternary',
        class: 'hover:text-quaternary disabled:hover:text-inherit',
      },
      {
        variant: 'light',
        color: 'foreground',
        class: 'hover:text-foreground disabled:hover:text-inherit',
      },
    ],
    defaultVariants: { color: 'primary', rounded: 'base', variant: 'normal' },
  },
);

function SegmentedControl(props: {
  options: {
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
  }[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (d: string) => void;
  className?: string;
  size?: 'sm' | 'base';
  variant?: 'light' | 'normal';
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'foreground';
  rounded?: 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  disabled?: boolean;
  buttonStyle?: {
    active?: React.CSSProperties;
    items?: React.CSSProperties;
  };
  classNames?: {
    control?: string;
    items?: string;
    active?: string;
  };
}) {
  const {
    options,
    defaultValue,
    onValueChange,
    className,
    size,
    variant,
    color,
    value,
    disabled,
    rounded,
    buttonStyle,
    classNames,
  } = props;
  const [selected, setSelected] = useState(value || defaultValue || options[0].value);

  const handleSelect = (value: string) => {
    setSelected(value);
    onValueChange?.(value);
  };

  const setSelectedEffect = useEffectEvent((value?: string) => {
    setSelected(value || defaultValue || options[0].value);
  });

  useEffect(() => {
    setSelectedEffect(value);
  }, [value]);

  return (
    <div
      className={cn(
        segmentedButtonVariants({ size, variant, rounded }),
        className,
        classNames?.control,
      )}
    >
      {options.map((option) => (
        <button
          disabled={disabled || option.disabled}
          type='button'
          key={option.value}
          onClick={() => handleSelect(option.value)}
          className={cn(
            'rounded-sm px-4 py-2 text-sm transition-all duration-200',
            selected === option.value
              ? buttonSelectedVariants({ color, rounded, variant })
              : buttonUnselectedVariants({ color, rounded, variant }),
            classNames?.items,
            selected === option.value && classNames?.active,
          )}
          style={
            buttonStyle?.items || (selected === option.value && buttonStyle?.active)
              ? {
                  ...(buttonStyle?.items || {}),
                  ...(selected === option.value ? buttonStyle?.active : {}),
                }
              : undefined
          }
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export { SegmentedControl };
