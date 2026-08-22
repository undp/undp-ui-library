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

      red: '',
      orange: '',
      yellow: '',
      lime: '',
      green: '',
      teal: '',
      azure: '',
      blue: '',
      violet: '',
      pink: '',

      'sdg-1': '',
      'sdg-2': '',
      'sdg-3': '',
      'sdg-4': '',
      'sdg-5': '',
      'sdg-6': '',
      'sdg-7': '',
      'sdg-8': '',
      'sdg-9': '',
      'sdg-10': '',
      'sdg-11': '',
      'sdg-12': '',
      'sdg-13': '',
      'sdg-14': '',
      'sdg-15': '',
      'sdg-16': '',
      'sdg-17': '',

      male: '',
      female: '',
      urban: '',
      rural: '',
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

    { variant: 'normal', color: 'red', class: 'bg-accent-red text-content-reverse' },
    { variant: 'normal', color: 'orange', class: 'bg-accent-orange text-content-reverse' },
    { variant: 'normal', color: 'yellow', class: 'bg-accent-yellow text-content-reverse' },
    { variant: 'normal', color: 'lime', class: 'bg-accent-lime text-content-reverse' },
    { variant: 'normal', color: 'green', class: 'bg-accent-green text-content-reverse' },
    { variant: 'normal', color: 'teal', class: 'bg-accent-teal text-content-reverse' },
    { variant: 'normal', color: 'azure', class: 'bg-accent-azure text-content-reverse' },
    { variant: 'normal', color: 'blue', class: 'bg-accent-blue text-content-reverse' },
    { variant: 'normal', color: 'violet', class: 'bg-accent-violet text-content-reverse' },
    { variant: 'normal', color: 'pink', class: 'bg-accent-pink text-content-reverse' },

    { variant: 'normal', color: 'sdg-1', class: 'bg-sdg-1 text-content-reverse' },
    { variant: 'normal', color: 'sdg-2', class: 'bg-sdg-2 text-content-reverse' },
    { variant: 'normal', color: 'sdg-3', class: 'bg-sdg-3 text-content-reverse' },
    { variant: 'normal', color: 'sdg-4', class: 'bg-sdg-4 text-content-reverse' },
    { variant: 'normal', color: 'sdg-5', class: 'bg-sdg-5 text-content-reverse' },
    { variant: 'normal', color: 'sdg-6', class: 'bg-sdg-6 text-content-reverse' },
    { variant: 'normal', color: 'sdg-7', class: 'bg-sdg-7 text-content-reverse' },
    { variant: 'normal', color: 'sdg-8', class: 'bg-sdg-8 text-content-reverse' },
    { variant: 'normal', color: 'sdg-9', class: 'bg-sdg-9 text-content-reverse' },
    { variant: 'normal', color: 'sdg-10', class: 'bg-sdg-10 text-content-reverse' },
    { variant: 'normal', color: 'sdg-11', class: 'bg-sdg-11 text-content-reverse' },
    { variant: 'normal', color: 'sdg-12', class: 'bg-sdg-12 text-content-reverse' },
    { variant: 'normal', color: 'sdg-13', class: 'bg-sdg-13 text-content-reverse' },
    { variant: 'normal', color: 'sdg-14', class: 'bg-sdg-14 text-content-reverse' },
    { variant: 'normal', color: 'sdg-15', class: 'bg-sdg-15 text-content-reverse' },
    { variant: 'normal', color: 'sdg-16', class: 'bg-sdg-16 text-content-reverse' },
    { variant: 'normal', color: 'sdg-17', class: 'bg-sdg-17 text-content-reverse' },

    { variant: 'normal', color: 'male', class: 'bg-categorical-male text-content-reverse' },
    { variant: 'normal', color: 'female', class: 'bg-categorical-female text-content-reverse' },
    { variant: 'normal', color: 'urban', class: 'bg-categorical-urban text-content-reverse' },
    { variant: 'normal', color: 'rural', class: 'bg-categorical-rural text-content-reverse' },

    { variant: 'light', color: 'primary', class: 'font-bold bg-background text-primary' },
    { variant: 'light', color: 'secondary', class: 'font-bold bg-background text-secondary' },
    { variant: 'light', color: 'tertiary', class: 'font-bold bg-background text-tertiary' },
    { variant: 'light', color: 'quaternary', class: 'font-bold bg-background text-quaternary' },
    {
      variant: 'light',
      color: 'foreground',
      class: 'font-bold bg-background text-foreground',
    },

    { variant: 'light', color: 'red', class: 'font-bold bg-background text-accent-red' },
    { variant: 'light', color: 'orange', class: 'font-bold bg-background text-accent-orange' },
    { variant: 'light', color: 'yellow', class: 'font-bold bg-background text-accent-yellow' },
    { variant: 'light', color: 'lime', class: 'font-bold bg-background text-accent-lime' },
    { variant: 'light', color: 'green', class: 'font-bold bg-background text-accent-green' },
    { variant: 'light', color: 'teal', class: 'font-bold bg-background text-accent-teal' },
    { variant: 'light', color: 'azure', class: 'font-bold bg-background text-accent-azure' },
    { variant: 'light', color: 'blue', class: 'font-bold bg-background text-accent-blue' },
    { variant: 'light', color: 'violet', class: 'font-bold bg-background text-accent-violet' },
    { variant: 'light', color: 'pink', class: 'font-bold bg-background text-accent-pink' },

    { variant: 'light', color: 'sdg-1', class: 'font-bold bg-background text-sdg-1' },
    { variant: 'light', color: 'sdg-2', class: 'font-bold bg-background text-sdg-2' },
    { variant: 'light', color: 'sdg-3', class: 'font-bold bg-background text-sdg-3' },
    { variant: 'light', color: 'sdg-4', class: 'font-bold bg-background text-sdg-4' },
    { variant: 'light', color: 'sdg-5', class: 'font-bold bg-background text-sdg-5' },
    { variant: 'light', color: 'sdg-6', class: 'font-bold bg-background text-sdg-6' },
    { variant: 'light', color: 'sdg-7', class: 'font-bold bg-background text-sdg-7' },
    { variant: 'light', color: 'sdg-8', class: 'font-bold bg-background text-sdg-8' },
    { variant: 'light', color: 'sdg-9', class: 'font-bold bg-background text-sdg-9' },
    { variant: 'light', color: 'sdg-10', class: 'font-bold bg-background text-sdg-10' },
    { variant: 'light', color: 'sdg-11', class: 'font-bold bg-background text-sdg-11' },
    { variant: 'light', color: 'sdg-12', class: 'font-bold bg-background text-sdg-12' },
    { variant: 'light', color: 'sdg-13', class: 'font-bold bg-background text-sdg-13' },
    { variant: 'light', color: 'sdg-14', class: 'font-bold bg-background text-sdg-14' },
    { variant: 'light', color: 'sdg-15', class: 'font-bold bg-background text-sdg-15' },
    { variant: 'light', color: 'sdg-16', class: 'font-bold bg-background text-sdg-16' },
    { variant: 'light', color: 'sdg-17', class: 'font-bold bg-background text-sdg-17' },

    { variant: 'light', color: 'male', class: 'font-bold bg-background text-categorical-male' },
    { variant: 'light', color: 'female', class: 'font-bold bg-background text-categorical-female' },
    { variant: 'light', color: 'urban', class: 'font-bold bg-background text-categorical-urban' },
    { variant: 'light', color: 'rural', class: 'font-bold bg-background text-categorical-rural' },
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
