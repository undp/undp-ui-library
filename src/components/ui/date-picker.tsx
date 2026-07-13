import { cva, type VariantProps } from 'class-variance-authority';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import * as React from 'react';
import type { PropsSingle } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { Calendar } from './calendar-card';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

type SingleCalendarProps = Omit<PropsSingle, 'mode'>;

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

export function DatePicker({
  selected,
  onSelect,
  disablePopover,
  classNames,
  variant,
  inputSize,
  placeHolder = 'Pick a date',
  ...props
}: SingleCalendarProps &
  VariantProps<typeof datePickerVariants> & {
    disablePopover?: boolean;
    classNames?: {
      popOverTrigger?: string;
      popOverContent?: string;
      popOverTriggerIcon?: string;
      popOverTriggerButton?: string;
    };
    placeHolder?: string;
  }) {
  const [date, setDate] = React.useState<Date>();
  const [open, setOpen] = React.useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        className={cn(datePickerVariants({ inputSize, variant }), classNames?.popOverTrigger)}
      >
        <CalendarIcon className={cn('text-input-border size-4', classNames?.popOverTriggerIcon)} />
        {date ? (
          <p className='font-sans mt-1 p-0 text-primary-gray-700 dark:text-primary-gray-100'>
            {format(date, 'MMM d, yyyy')}
          </p>
        ) : (
          <p className='font-sans mt-1 p-0 text-primary-gray-550 dark:text-primary-gray-400'>
            {placeHolder}
          </p>
        )}
      </PopoverTrigger>
      <PopoverContent className={cn('w-auto p-0', classNames?.popOverContent)} align='start'>
        <Calendar
          mode='single'
          selected={selected || date}
          onSelect={(date, triggerDate, modifiers, event) => {
            setDate(date);
            onSelect?.(date, triggerDate, modifiers, event);
            setOpen(false);
          }}
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
}
