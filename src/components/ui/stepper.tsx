import * as React from 'react';

import { CheckIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepperProps extends React.HTMLAttributes<HTMLOListElement> {
  className?: string;
  unfinishedStepsClassName?: string;
  finishedStepsClassName?: string;
  activeStepsClassName?: string;
  steps: {
    title: string;
    description?: string;
  }[];
  currentStep?: number;
}

function Stepper({
  className,
  steps,
  currentStep = 0,
  unfinishedStepsClassName,
  finishedStepsClassName,
  activeStepsClassName,
  ...props
}: StepperProps) {
  return (
    <ol
      {...props}
      className={cn(
        'flex items-center w-full text-base text-center text-primary-gray-700 dark:text-primary-white justify-between gap-3',
        className,
      )}
    >
      {steps.map((d, i) => (
        <li
          key={i}
          className={cn(
            'flex items-center grow',
            i === steps.length - 1 ? 'grow-0' : 'grow',
            i + 1 < currentStep
              ? finishedStepsClassName
              : i + 1 === currentStep
              ? activeStepsClassName
              : unfinishedStepsClassName,
          )}
        >
          <div className='flex items-center gap-3 grow'>
            <div
              className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center shrink-0',
                i + 1 < currentStep
                  ? 'bg-primary-blue-600 dark:bg-primary-blue-300'
                  : i + 1 === currentStep
                  ? 'bg-primary-gray-600 dark:bg-primary-gray-550'
                  : 'bg-primary-gray-300 dark:bg-primary-gray-650',
              )}
            >
              {i + 1 < currentStep ? (
                <CheckIcon className='h-4 w-4 shrink-0 stroke-primary-white dark:stroke-primary-gray-700' />
              ) : (
                <div
                  className={
                    i + 1 === currentStep
                      ? 'text-sm text-primary-white'
                      : 'text-sm text-primary-gray-700 dark:text-primary-white'
                  }
                >
                  {i + 1}
                </div>
              )}
            </div>
            <div className='flex flex-col shrink-0'>
              <div
                className={cn(
                  'text-base text-left rtl:text-right font-normal',
                  i + 1 < currentStep
                    ? 'text-primary-blue-600 dark:text-primary-blue-300'
                    : 'text-primary-gray-700 dark:text-primary-white',
                )}
              >
                {d.title}
              </div>
              {d.description ? (
                <div
                  className={cn(
                    'text-sm text-primary-gray-500 text-left rtl:text-right dark:text-primary-gray-400',
                  )}
                >
                  {d.description}
                </div>
              ) : null}
            </div>
            {i === steps.length - 1 ? null : (
              <div className='h-px bg-primary-gray-400 grow w-full dark:bg-primary-gray-550' />
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export { Stepper };
