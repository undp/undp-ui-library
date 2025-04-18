import React from 'react';
import Slider from 'rc-slider';
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
  variant?: 'blue' | 'red' | 'black' | 'custom' | null | undefined;
}

const trackVariants = cva('h-1', {
  variants: {
    variant: {
      red: 'bg-accent-red!',
      blue: 'bg-primary-blue-400!',
      black: 'bg-primary-gray-600! dark:bg-primary-gray-200!',
      custom: 'bg-custom-color-400!',
    },
  },
  defaultVariants: { variant: 'red' },
});

const handleVariants = cva('rounded-full border-2 opacity-100!', {
  variants: {
    variant: {
      red: 'border-accent-red! bg-accent-red!',
      blue: 'border-primary-blue-600! bg-primary-blue-600!',
      black:
        'border-primary-gray-600! bg-primary-gray-600! dark:border-primary-gray-200! dark:bg-primary-gray-200!',
      custom: 'bg-custom-color-600! border-custom-color-600!',
    },
  },
  defaultVariants: { variant: 'red' },
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
    variant,
    showHandleValue = false,
  } = sliderProps;
  return (
    <div className={cn('w-full py-6 px-4', className)}>
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
                  className='px-1 bg-primary-gray-200 text-primary-black dark:text-primary-white dark:bg-primary-gray-650 border border-primary-gray-200 dark:border-primary-gray-600 text-sm mb-4'
                  style={{
                    left: node.props.style?.left,
                    position: 'absolute',
                    textAlign: 'center',
                    transform:
                      'translateX(-50%) translateY(calc(-100% - 12px))',
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
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
          sliderClassName,
        )}
        classNames={{
          rail: cn(
            'bg-primary-gray-300! h-1 dark:bg-primary-gray-550!',
            railClassName,
          ),
          track: cn(trackVariants({ variant }), trackClassName),
          handle: cn(handleVariants({ variant }), handleClassName),
        }}
        dotStyle={{ borderColor: 'var(--gray-400)' }}
        activeDotStyle={{
          borderColor:
            variant === 'blue'
              ? 'var(--blue-400)'
              : variant === 'black'
                ? 'var(--gray-550)'
                : 'var(--red)',
        }}
      />
    </div>
  );
}

export { SliderUI };
