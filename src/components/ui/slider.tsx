/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { cn } from '@/lib/utils';
import { Label } from './label';

interface SliderProps extends React.ComponentPropsWithoutRef<typeof Slider> {
  trackClassName?: string;
  label?: string;
  labelClassName?: string;
  className?: string;
  sliderClassName?: string;
  railClassName?: string;
  handleClassName?: string;
  showHandleValue?: boolean;
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
    label,
    labelClassName,
    showHandleValue,
  } = sliderProps;
  return (
    <div className='w-full py-6 px-4'>
      <div
        className={cn(
          'flex flex-col',
          showHandleValue ? 'gap-6' : 'gap-1.5',
          className,
        )}
      >
        {label ? <Label className={labelClassName}>{label}</Label> : null}
        <Slider
          {...sliderProps}
          range
          min={min}
          max={max}
          handleRender={(node, handleProps) => {
            return (
              <div>
                {node}
                {showHandleValue ? (
                  <div
                    className='px-1 bg-primary-gray-200 border text-sm mb-4'
                    style={{
                      left: node.props.style?.left,
                      position: 'absolute',
                      textAlign: 'center',
                      transform:
                        'translateX(-50%) translateY(calc(-100% - 8px))',
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
            rail: cn('bg-primary-gray-300 h-1', railClassName),
            track: cn('bg-primary-blue-300 h-1', trackClassName),
            handle: cn(
              'rounded-full bg-primary-white border-2 border-primary-blue-600 bg-primary-blue-600',
              handleClassName,
            ),
          }}
          dotStyle={{
            borderColor: 'var(--gray-400)',
          }}
          activeDotStyle={{
            borderColor: 'var(--blue-300)',
          }}
        />
      </div>
    </div>
  );
}

export { SliderUI };
