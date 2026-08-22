import Slider from 'rc-slider';
import type React from 'react';
import 'rc-slider/assets/index.css';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const trackVariants = cva('h-1', {
  variants: {
    color: {
      primary: 'bg-primary!',
      secondary: 'bg-secondary!',
      tertiary: 'bg-tertiary!',
      quaternary: 'bg-quaternary!',
      foreground: 'bg-foreground!',

      red: 'bg-accent-red!',
      orange: 'bg-accent-orange!',
      yellow: 'bg-accent-yellow!',
      lime: 'bg-accent-lime!',
      green: 'bg-accent-green!',
      teal: 'bg-accent-teal!',
      azure: 'bg-accent-azure!',
      blue: 'bg-accent-blue!',
      violet: 'bg-accent-violet!',
      pink: 'bg-accent-pink!',

      'sdg-1': 'bg-sdg-1!',
      'sdg-2': 'bg-sdg-2!',
      'sdg-3': 'bg-sdg-3!',
      'sdg-4': 'bg-sdg-4!',
      'sdg-5': 'bg-sdg-5!',
      'sdg-6': 'bg-sdg-6!',
      'sdg-7': 'bg-sdg-7!',
      'sdg-8': 'bg-sdg-8!',
      'sdg-9': 'bg-sdg-9!',
      'sdg-10': 'bg-sdg-10!',
      'sdg-11': 'bg-sdg-11!',
      'sdg-12': 'bg-sdg-12!',
      'sdg-13': 'bg-sdg-13!',
      'sdg-14': 'bg-sdg-14!',
      'sdg-15': 'bg-sdg-15!',
      'sdg-16': 'bg-sdg-16!',
      'sdg-17': 'bg-sdg-17!',

      male: 'bg-categorical-male!',
      female: 'bg-categorical-female!',
      urban: 'bg-categorical-urban!',
      rural: 'bg-categorical-rural!',
    },
  },
  defaultVariants: { color: 'primary' },
});

const handleVariants = cva('rounded-full border-2 opacity-100!', {
  variants: {
    color: {
      primary: 'border-primary! bg-primary!',
      secondary: 'border-secondary! bg-secondary!',
      tertiary: 'border-tertiary! bg-tertiary!',
      quaternary: 'border-quaternary! bg-quaternary!',
      foreground: 'border-foreground! bg-foreground!',

      red: 'border-accent-red! bg-accent-red!',
      orange: 'border-accent-orange! bg-accent-orange!',
      yellow: 'border-accent-yellow! bg-accent-yellow!',
      lime: 'border-accent-lime! bg-accent-lime!',
      green: 'border-accent-green! bg-accent-green!',
      teal: 'border-accent-teal! bg-accent-teal!',
      azure: 'border-accent-azure! bg-accent-azure!',
      blue: 'border-accent-blue! bg-accent-blue!',
      violet: 'border-accent-violet! bg-accent-violet!',
      pink: 'border-accent-pink! bg-accent-pink!',

      'sdg-1': 'border-sdg-1! bg-sdg-1!',
      'sdg-2': 'border-sdg-2! bg-sdg-2!',
      'sdg-3': 'border-sdg-3! bg-sdg-3!',
      'sdg-4': 'border-sdg-4! bg-sdg-4!',
      'sdg-5': 'border-sdg-5! bg-sdg-5!',
      'sdg-6': 'border-sdg-6! bg-sdg-6!',
      'sdg-7': 'border-sdg-7! bg-sdg-7!',
      'sdg-8': 'border-sdg-8! bg-sdg-8!',
      'sdg-9': 'border-sdg-9! bg-sdg-9!',
      'sdg-10': 'border-sdg-10! bg-sdg-10!',
      'sdg-11': 'border-sdg-11! bg-sdg-11!',
      'sdg-12': 'border-sdg-12! bg-sdg-12!',
      'sdg-13': 'border-sdg-13! bg-sdg-13!',
      'sdg-14': 'border-sdg-14! bg-sdg-14!',
      'sdg-15': 'border-sdg-15! bg-sdg-15!',
      'sdg-16': 'border-sdg-16! bg-sdg-16!',
      'sdg-17': 'border-sdg-17! bg-sdg-17!',

      male: 'border-categorical-male! bg-categorical-male!',
      female: 'border-categorical-female! bg-categorical-female!',
      urban: 'border-categorical-urban! bg-categorical-urban!',
      rural: 'border-categorical-rural! bg-categorical-rural!',
    },
  },
  defaultVariants: { color: 'primary' },
});

interface SliderProps extends React.ComponentPropsWithoutRef<typeof Slider> {
  trackClassName?: string;
  className?: string;
  sliderClassName?: string;
  railClassName?: string;
  handleClassName?: string;
  showHandleValue?: boolean;
  color?: VariantProps<typeof trackVariants>['color'];
}

function SliderUI(sliderProps: SliderProps) {
  const {
    min = 0,
    max = 100,
    disabled,
    trackClassName,
    className,
    railClassName,
    sliderClassName,
    handleClassName,
    color,
    showHandleValue = false,
  } = sliderProps;
  return (
    <div className={cn('w-full px-4 py-6 [&_.rc-slider-disabled]:bg-transparent!', className)}>
      <Slider
        {...sliderProps}
        min={min}
        max={max}
        handleRender={(node, handleProps) => {
          return (
            <div>
              {node}
              {showHandleValue ? (
                <div
                  className='mb-4 border border-primary-gray-200 bg-surface px-1 text-content-primary text-sm'
                  style={{
                    left: node.props.style?.left,
                    position: 'absolute',
                    textAlign: 'center',
                    transform: 'translateX(-50%) translateY(calc(-100% - 12px))',
                  }}
                >
                  {handleProps.value}
                </div>
              ) : null}
            </div>
          );
        }}
        className={cn(
          'h-2',
          disabled ? 'cursor-not-allowed opacity-disabled' : 'cursor-pointer',
          sliderClassName,
        )}
        classNames={{
          rail: cn('bg-surface-sm! h-1', railClassName),
          track: cn(trackVariants({ color }), trackClassName),
          handle: cn(handleVariants({ color }), handleClassName),
        }}
        dotStyle={{ borderColor: 'var(--surface-md)' }}
        activeDotStyle={{
          borderColor:
            color === 'primary' ||
            color === 'secondary' ||
            color === 'tertiary' ||
            color === 'quaternary'
              ? `var(--${color}-hover)`
              : color === 'foreground'
                ? 'var(--foreground-soft)'
                : color === 'male' || color === 'female' || color === 'urban' || color === 'rural'
                  ? `var(--categorical-${color}-hover)`
                  : color === 'red' ||
                      color === 'orange' ||
                      color === 'yellow' ||
                      color === 'lime' ||
                      color === 'green' ||
                      color === 'teal' ||
                      color === 'azure' ||
                      color === 'blue' ||
                      color === 'violet' ||
                      color === 'pink'
                    ? `var(--accent-${color}-hover)`
                    : color?.startsWith('sdg-')
                      ? `var(--sdg-${color}-hover)`
                      : 'var(--primary-hover)',
        }}
      />
    </div>
  );
}

export { SliderUI };
