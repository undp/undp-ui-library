import { cva, type VariantProps } from 'class-variance-authority';
import { format, subDays } from 'date-fns';
import { ArrowRight, CalendarIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { PropsSingle } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { Calendar } from './calendar-card';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

type SingleCalendarProps = Omit<PropsSingle, 'mode' | 'onSelect'>;

const datePickerVariants = cva(
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

export function DateRangePicker({
  onValueChange,
  value,
  defaultValue,
  disablePopover,
  classNames,
  variant,
  inputSize,
  numberOfMonths = 2,
  ...props
}: SingleCalendarProps &
  VariantProps<typeof datePickerVariants> & {
    numberOfMonths?: number;
    disablePopover?: boolean;
    classNames?: {
      popOverTrigger?: string;
      popOverContent?: string;
      popOverTriggerIcon?: string;
      popOverTriggerButton?: string;
    };
    onValueChange?: (range: { from: Date | undefined; to: Date | undefined }) => void;
    value?: {
      from: Date | undefined;
      to: Date | undefined;
    };
    defaultValue?: {
      from: Date | undefined;
      to: Date | undefined;
    };
  }) {
  const [range, setRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: value?.from || defaultValue?.from || undefined,
    to: value?.to || defaultValue?.to || undefined,
  });
  const [selectingStart, setSelectingStart] = useState(true);
  const [open, setOpen] = useState(false);
  const handleSelect = (date: Date | undefined) => {
    if (!date) return;

    if (selectingStart) {
      setRange({ from: date, to: undefined });
      setSelectingStart(false);
    } else {
      if (range.from && date < range.from) {
        setRange({ from: date, to: range.from });
      } else {
        setRange((prev) => ({ ...prev, to: date }));
      }
      setSelectingStart(true);
      setOpen(false);
    }
  };
  useEffect(() => {
    onValueChange?.({ from: range.from, to: range.to });
  }, [range.from, range.to, onValueChange]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn(datePickerVariants({ inputSize, variant }), classNames?.popOverTrigger)}
      >
        <CalendarIcon className={cn('text-input-border size-4', classNames?.popOverTriggerIcon)} />
        {range.from ? (
          <div className='flex grow items-center gap-4'>
            <p className='font-sans mt-1 p-0 text-primary-gray-700 dark:text-primary-gray-100 grow text-left'>
              {format(range.from, 'MMM d, yyyy')}
            </p>
            <ArrowRight size={14} className='text-foreground' />
            {range.to ? (
              <p className='font-sans mt-1 p-0 text-primary-gray-700 dark:text-primary-gray-100 grow text-left'>
                {format(range.to, 'MMM d, yyyy')}
              </p>
            ) : (
              <div className='text-primary-gray-550 dark:text-primary-gray-400 grow text-left'>
                {selectingStart ? 'Start date' : 'End date'}
              </div>
            )}
          </div>
        ) : (
          <div className='flex grow items-center gap-4'>
            <p className='font-sans mt-1 p-0 text-primary-gray-550 dark:text-primary-gray-400 grow text-left'>
              Start date
            </p>
            <ArrowRight size={14} className='text-foreground' />
            <p className='font-sans mt-1 p-0 text-primary-gray-550 dark:text-primary-gray-400 grow text-left'>
              End date
            </p>
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent className={cn('w-auto p-0', classNames?.popOverContent)} align='start'>
        <Calendar
          mode='single'
          numberOfMonths={numberOfMonths}
          selected={selectingStart ? range.from : range.to}
          modifiers={{
            range_start: range.from ? [range.from] : [],
            range_middle:
              range.from && range.to ? { from: range.from, to: subDays(range.to, 1) } : undefined,
            range_end: range.to ? [range.to] : [],
          }}
          onSelect={(date) => {
            handleSelect(date);
          }}
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
}
