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
  'w-full h-auto flex gap-2 items-center bg-primary-white dark:bg-primary-gray-650 text-primary-black dark:text-primary-white text-base transition-colors file:border-0 file:bg-transparent file:font-medium file:text-primary-gray-700 dark:file:text-primary-white focus-visible:outline-hidden focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-primary-gray-550 dark:placeholder:text-primary-gray-400',
  {
    variants: {
      variant: {
        light: 'border border-primary-gray-400 dark:border-primary-gray-500',
        normal: 'border-2 border-primary-black dark:border-primary-gray-300',
      },
      inputSize: {
        sm: 'px-2.5 py-1',
        base: 'p-2.5',
      },
    },
    defaultVariants: {
      inputSize: 'base',
      variant: 'normal',
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
        <CalendarIcon className={cn('text-input-border size-4', classNames?.popOverTriggerIcon)} />
        {date ? (
          <p className='font-sans mt-1 p-0 text-primary-gray-700 dark:text-primary-gray-100'>
            {format(date, 'MMM d, yyyy HH:mm')}
          </p>
        ) : (
          <p className='font-sans mt-1 p-0 text-primary-gray-700 dark:text-primary-gray-100'>
            {placeHolder}
          </p>
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
          <Separator orientation='vertical' />
          <div className='flex flex-col gap-4 px-2 pt-2'>
            <p
              className='
                text-foreground mb-0 flex h-7 items-center justify-center
                text-[14px]
              '
            >
              {String(hour).padStart(2, '0')}:{String(minute).padStart(2, '0')}
            </p>
            <div className='flex max-h-[204px]'>
              <div
                className='
                  flex flex-col items-center gap-1.5 overflow-x-hidden overflow-y-auto
                  px-4 undp-scrollbar
                '
              >
                <p className='text-primary-gray-700 dark:text-primary-gray-100 mb-0 text-[14px] font-bold sticky top-0 bg-primary-gray-100 dark:bg-primary-gray-600'>
                  HH
                </p>
                {Array.from({ length: 24 }, (_, i) => (
                  <button
                    // biome-ignore lint/suspicious/noArrayIndexKey: This array is not expected to change
                    key={i}
                    type='button'
                    className={cn(
                      `                      
                        text-primary-gray-700 dark:text-primary-gray-100
                        hover:text-foreground
                        hover:bg-primary-gray-400
                        dark:hover:bg-primary-gray-500
                        disabled:opacity-50
                        mb-0 cursor-pointer p-1 rounded-sm text-base
                        disabled:pointer-events-none text-[14px]
                      `,
                      i === hour &&
                        `
                          bg-primary-gray-400 dark:bg-primary-gray-600
                          hover:bg-primary-gray-200 dark:hover:bg-primary-gray-550
                          text-primary-gray-700 dark:text-primary-gray-100 font-bold
                        `,
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
              <div
                className='
                  flex flex-col items-center gap-1.5 overflow-x-hidden!
                  overflow-y-auto px-4 undp-scrollbar
                '
              >
                <p className='text-primary-gray-700 dark:text-primary-gray-100 mb-0 text-[14px] font-bold sticky top-0 bg-primary-gray-100 dark:bg-primary-gray-600'>
                  MM
                </p>
                {Array.from({ length: 60 }, (_, i) => (
                  <button
                    // biome-ignore lint/suspicious/noArrayIndexKey: This array is not expected to change
                    key={i}
                    type='button'
                    className={cn(
                      `
                        text-primary-gray-700 dark:text-primary-gray-100
                        hover:text-foreground
                        hover:bg-primary-gray-400
                        dark:hover:bg-primary-gray-500
                        disabled:opacity-50
                        mb-0 cursor-pointer p-1 rounded-sm text-base
                        disabled:pointer-events-none text-[14px]
                      `,
                      i === minute &&
                        `
                          bg-primary-gray-400 dark:bg-primary-gray-600
                          hover:bg-primary-gray-200 dark:hover:bg-primary-gray-550
                          text-primary-gray-700 dark:text-primary-gray-100 font-bold
                        `,
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
