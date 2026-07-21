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
        <CalendarIcon
          className={cn('size-4 text-content-placeholder', classNames?.popOverTriggerIcon)}
        />
        {date ? (
          <p className='mt-1 p-0 font-body text-content-primary'>{format(date, 'MMM d, yyyy')}</p>
        ) : (
          <p className='mt-1 p-0 font-body text-content-placeholder'>{placeHolder}</p>
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
