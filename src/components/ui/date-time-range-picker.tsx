import { isAfter, isBefore, isSameDay } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Matcher } from 'react-day-picker';
import { DateTimePicker } from './date-time-picker';

export function DateTimeRangePicker({
  disablePopover,
  classNames,
  variant,
  inputSize,
  rounded,
  onValueChange,
  defaultValue,
  disabled,
}: {
  variant?: 'light' | 'normal';
  inputSize?: 'sm' | 'base';
  rounded?: 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  classNames?: {
    popOverTrigger?: string;
    popOverContent?: string;
    popOverTriggerIcon?: string;
  };
  onValueChange?: (dates?: { startDate?: Date; endDate?: Date }) => void;
  defaultValue?: {
    startDate?: Date;
    endDate?: Date;
  };
  disablePopover?: boolean;
  disabled?: Matcher | Matcher[];
}) {
  const [startDate, setStartDate] = useState<Date | undefined>(defaultValue?.startDate);
  const [endDate, setEndDate] = useState<Date | undefined>(defaultValue?.endDate);
  useEffect(() => {
    onValueChange?.({
      startDate: startDate ?? defaultValue?.startDate,
      endDate: endDate ?? defaultValue?.endDate,
    });
  }, [startDate, endDate, defaultValue?.startDate, defaultValue?.endDate, onValueChange]);

  const startDateValue = startDate ?? defaultValue?.startDate;
  const endDateValue = endDate ?? defaultValue?.endDate;

  return (
    <div className='flex w-full items-center gap-2'>
      <DateTimePicker
        onValueChange={(value: Date | undefined) => {
          setStartDate(value);
        }}
        placeHolder='Start date and time'
        rounded={rounded}
        disablePopover={disablePopover}
        variant={variant}
        inputSize={inputSize}
        classNames={classNames}
        selected={startDateValue}
        disabled={(date: Date) => {
          const isAfterEndDate = endDateValue ? isAfter(date, endDateValue) : false;

          if (typeof disabled === 'function') {
            return disabled(date) || isAfterEndDate;
          }

          if (Array.isArray(disabled)) {
            return (
              disabled.some((matcher) => (typeof matcher === 'function' ? matcher(date) : false)) ||
              isAfterEndDate
            );
          }

          return isAfterEndDate;
        }}
        disabledHours={
          endDateValue && endDateValue?.getDate() === startDateValue?.getDate()
            ? Array.from({ length: 24 }, (_, i) => i).filter(
                (hour) => hour > endDateValue.getHours(),
              )
            : []
        }
        disabledMinutes={
          endDateValue && endDateValue?.getDate() === startDateValue?.getDate()
            ? Array.from({ length: 60 }, (_, i) => i).filter(
                (minute) => minute > endDateValue.getMinutes(),
              )
            : []
        }
      />
      <div className='size-4 text-input-border'>
        <ArrowRight size={16} />
      </div>
      <DateTimePicker
        onValueChange={(value: Date | undefined) => {
          setEndDate(value);
        }}
        placeHolder='End date and time'
        rounded={rounded}
        disablePopover={disablePopover}
        variant={variant}
        inputSize={inputSize}
        classNames={classNames}
        selected={endDateValue}
        disabled={(date: Date) => {
          const isBeforeStartDate = startDateValue
            ? isBefore(date, startDateValue) && !isSameDay(date, startDateValue)
            : false;

          if (typeof disabled === 'function') {
            return disabled(date) || isBeforeStartDate;
          }

          if (Array.isArray(disabled)) {
            return (
              disabled.some((matcher) => (typeof matcher === 'function' ? matcher(date) : false)) ||
              isBeforeStartDate
            );
          }

          return isBeforeStartDate;
        }}
        disabledHours={
          startDateValue && endDateValue && isSameDay(startDateValue, endDateValue)
            ? Array.from({ length: 24 }, (_, i) => i).filter(
                (hour) => hour < startDateValue.getHours(),
              )
            : []
        }
        disabledMinutes={
          startDateValue &&
          endDateValue &&
          isSameDay(startDateValue, endDateValue) &&
          startDateValue?.getHours() === endDateValue?.getHours()
            ? Array.from({ length: 60 }, (_, i) => i).filter(
                (minute) => minute < startDateValue.getMinutes(),
              )
            : []
        }
      />
    </div>
  );
}
