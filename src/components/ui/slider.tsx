import Slider from 'rc-slider';
import type React from 'react';
import 'rc-slider/assets/index.css';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

interface SliderProps extends React.ComponentPropsWithoutRef<typeof Slider> {
  trackClassName?: string;
  className?: string;
  sliderClassName?: string;
  railClassName?: string;
  handleClassName?: string;
  showHandleValue?: boolean;
  color?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'foreground' | null | undefined;
}

const trackVariants = cva('h-1', {
  variants: {
    color: {
      primary: 'bg-primary!',
      secondary: 'bg-secondary!',
      tertiary: 'bg-tertiary!',
      quaternary: 'bg-quaternary!',
      foreground: 'bg-foreground!',
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
    },
  },
  defaultVariants: { color: 'primary' },
});

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
    <div className={cn('[&_.rc-slider-disabled]:!bg-transparent w-full px-4 py-6', className)}>
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
            color === 'primary'
              ? 'var(--primary-hover)'
              : color === 'secondary'
                ? 'var(--secondary-hover)'
                : color === 'tertiary'
                  ? 'var(--tertiary-hover)'
                  : color === 'quaternary'
                    ? 'var(--quaternary-hover)'
                    : color === 'foreground'
                      ? 'var(--foreground-soft)'
                      : 'var(--primary-hover)',
        }}
      />
    </div>
  );
}

export { SliderUI };
