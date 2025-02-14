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
        'flex items-center w-full text-base font-medium text-center text-primary-gray-700 justify-between gap-3',
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
                  ? 'bg-primary-blue-600'
                  : i + 1 === currentStep
                  ? 'bg-primary-gray-600'
                  : 'bg-primary-gray-400',
              )}
            >
              {i + 1 < currentStep ? (
                <CheckIcon className='h-4 w-4 shrink-0 text-muted-foreground stroke-primary-white' />
              ) : (
                <div
                  className={
                    i + 1 === currentStep
                      ? 'text-sm text-primary-white'
                      : 'text-sm text-primary-gray-700'
                  }
                >
                  {i + 1}
                </div>
              )}
            </div>
            <div className='flex flex-col shrink-0'>
              <div
                className={cn(
                  'text-base text-left',
                  i + 1 === currentStep ? 'font-bold' : 'font-medium',
                  i + 1 < currentStep
                    ? 'text-primary-blue-600'
                    : 'text-primary-black',
                )}
              >
                {d.title}
              </div>
              {d.description ? (
                <div
                  className={cn(
                    'text-sm text-primary-gray-500 font-medium text-left',
                  )}
                >
                  {d.description}
                </div>
              ) : null}
            </div>
            {i === steps.length - 1 ? null : (
              <div className='h-px bg-primary-black grow w-full' />
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export { Stepper };
