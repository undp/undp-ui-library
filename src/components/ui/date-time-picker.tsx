import { cva, type VariantProps } from 'class-variance-authority';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Matcher, PropsSingle } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { Calendar } from './calendar-card';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Separator } from './separator';

type SingleCalendarProps = Omit<PropsSingle, 'mode'>;

const dateTimePickerVariants = cva(
  'w-full h-auto bg-background rounded-base text-content-primary text-base transition-colors focus-visible:outline-hidden focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-disabled placeholder:text-content-placeholder',
  {
    variants: {
      variant: {
        light: 'border border-stroke',
        normal: 'border-2 border-foreground',
      },
      rounded: {
        base: 'rounded',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        full: 'rounded-full',
      },
      inputSize: {
        sm: 'px-2.5 py-1',
        base: 'p-2.5',
      },
    },
    defaultVariants: {
      inputSize: 'base',
      variant: 'normal',
      rounded: 'base',
    },
  },
);

export function DateTimePicker({
  selected,
  onSelect,
  disablePopover,
  disabled,
  classNames,
  variant,
  inputSize,
  onValueChange,
  disabledHours = [],
  disabledMinutes = [],
  placeHolder = 'Pick a date and time',
  ...props
}: SingleCalendarProps &
  VariantProps<typeof dateTimePickerVariants> & {
    disablePopover?: boolean;
    classNames?: {
      popOverTrigger?: string;
      popOverContent?: string;
      popOverTriggerIcon?: string;
      popOverTriggerButton?: string;
    };
    onValueChange?: (date?: Date) => void;
    disabledHours?: number[];
    disabledMinutes?: number[];
    disabled?: Matcher | Matcher[];
    placeHolder?: string;
  }) {
  const [date, setDate] = useState<Date>();
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  useEffect(() => {
    onValueChange?.(date);
  }, [date, onValueChange]);
  return (
    <Popover>
      <PopoverTrigger
        className={cn(dateTimePickerVariants({ inputSize, variant }), classNames?.popOverTrigger)}
      >
        <CalendarIcon
          className={cn('size-4 text-content-placeholder', classNames?.popOverTriggerIcon)}
        />
        {date ? (
          <p className='mt-1 p-0 font-body text-content-primary'>
            {format(date, 'MMM d, yyyy HH:mm')}
          </p>
        ) : (
          <p className='mt-1 p-0 font-body text-content-placeholder'>{placeHolder}</p>
        )}
      </PopoverTrigger>
      <PopoverContent className={cn('w-auto p-0', classNames?.popOverContent)} align='start'>
        <div className='flex items-start gap-0'>
          <Calendar
            mode='single'
            selected={selected || date}
            onSelect={(selectedDate, triggerDate, modifiers, event) => {
              if (!selectedDate) return;
              const newDate = new Date(selectedDate);
              const currentHour = date?.getHours() ?? hour;
              const currentMinute = date?.getMinutes() ?? minute;
              newDate.setHours(currentHour, currentMinute);
              setHour(currentHour);
              setMinute(currentMinute);
              setDate(newDate);
              onSelect?.(selectedDate, triggerDate, modifiers, event);
            }}
            disabled={disabled}
            {...props}
          />
          <Separator orientation='vertical' color='surface-lg' />
          <div className='flex flex-col gap-4 px-2 pt-2'>
            <p className='mb-0 flex h-7 items-center justify-center text-content-primary text-sm'>
              {String(hour).padStart(2, '0')}:{String(minute).padStart(2, '0')}
            </p>
            <div className='flex max-h-[204px]'>
              <div className='undp-scrollbar flex flex-col items-center gap-1.5 overflow-y-auto overflow-x-hidden px-4'>
                <p className='sticky top-0 mb-0 bg-surface font-bold text-[14px] text-content-primary'>
                  HH
                </p>
                {Array.from({ length: 24 }, (_, i) => (
                  <button
                    // biome-ignore lint/suspicious/noArrayIndexKey: This array is not expected to change
                    key={i}
                    type='button'
                    className={cn(
                      'mb-0 cursor-pointer rounded-sm p-1 text-content-primary text-sm hover:bg-surface hover:text-content-primary disabled:pointer-events-none disabled:opacity-disabled',
                      i === hour &&
                        'bg-surface-hard font-bold text-content-primary hover:bg-surface-hard-hover',
                    )}
                    onClick={() => {
                      setHour(i);
                      setDate((prev) => {
                        const updated = new Date(prev ?? new Date());
                        updated.setHours(i);
                        return updated;
                      });
                    }}
                    disabled={disabledHours.includes(i)}
                  >
                    {String(i).padStart(2, '0')}
                  </button>
                ))}
              </div>
              <Separator orientation='vertical' />
              <div className='overflow-x-hidden! undp-scrollbar flex flex-col items-center gap-1.5 overflow-y-auto px-4'>
                <p className='sticky top-0 mb-0 bg-surface font-bold text-[14px] text-content-primary'>
                  MM
                </p>
                {Array.from({ length: 60 }, (_, i) => (
                  <button
                    // biome-ignore lint/suspicious/noArrayIndexKey: This array is not expected to change
                    key={i}
                    type='button'
                    className={cn(
                      'mb-0 cursor-pointer rounded-sm p-1 text-content-primary text-sm hover:bg-surface hover:text-content-primary disabled:pointer-events-none disabled:opacity-disabled',
                      i === minute &&
                        'bg-surface-hard font-bold text-content-primary hover:bg-surface-hard-hover',
                    )}
                    onClick={() => {
                      setMinute(i);
                      setDate((prev) => {
                        const updated = new Date(prev ?? new Date());
                        updated.setMinutes(i);
                        return updated;
                      });
                    }}
                    disabled={disabledMinutes.includes(i)}
                  >
                    {String(i).padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
