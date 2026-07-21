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
  value,
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
  value?: {
    startDate?: Date;
    endDate?: Date;
  };
  defaultValue?: {
    startDate?: Date;
    endDate?: Date;
  };
  disablePopover?: boolean;
  disabled?: Matcher | Matcher[];
}) {
  const [startDate, setStartDate] = useState<Date | undefined>(
    value?.startDate || defaultValue?.startDate || undefined,
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    value?.endDate || defaultValue?.endDate || undefined,
  );
  useEffect(() => {
    onValueChange?.({ startDate, endDate });
  }, [startDate, endDate, onValueChange]);

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
        disabled={(date: Date) => {
          const isAfterEndDate = endDate ? date.getDate() > endDate.getDate() : false;

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
          endDate && endDate?.getDate() === startDate?.getDate()
            ? Array.from({ length: 24 }, (_, i) => i).filter((hour) => hour > endDate.getHours())
            : []
        }
        disabledMinutes={
          endDate && endDate?.getDate() === startDate?.getDate()
            ? Array.from({ length: 60 }, (_, i) => i).filter(
                (minute) => minute > endDate.getMinutes(),
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
        disabled={(date: Date) => {
          const isBeforeStartDate = startDate ? date.getDate() < startDate.getDate() : false;

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
          startDate && endDate?.getDate() === startDate.getDate()
            ? Array.from({ length: 24 }, (_, i) => i).filter((hour) => hour < startDate.getHours())
            : []
        }
        disabledMinutes={
          startDate && endDate?.getDate() === startDate.getDate()
            ? Array.from({ length: 60 }, (_, i) => i).filter(
                (minute) => minute < startDate.getMinutes(),
              )
            : []
        }
      />
    </div>
  );
}
