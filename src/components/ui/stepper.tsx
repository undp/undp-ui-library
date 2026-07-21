import { CheckIcon } from 'lucide-react';
import type React from 'react';

import { cn } from '@/lib/utils';

function Stepper({
  className,
  steps,
  currentStep = 0,
  unfinishedStepsClassName,
  finishedStepsClassName,
  activeStepsClassName,
  ...props
}: React.HTMLAttributes<HTMLOListElement> & {
  className?: string;
  unfinishedStepsClassName?: string;
  finishedStepsClassName?: string;
  activeStepsClassName?: string;
  steps: {
    title: string;
    description?: string;
  }[];
  currentStep?: number;
}) {
  return (
    <ol
      {...props}
      className={cn(
        'flex w-full list-none items-center justify-between gap-3 text-center text-base text-content-primary',
        className,
      )}
    >
      {steps.map((d, i) => (
        <li
          key={d.title}
          className={cn(
            'flex grow items-center',
            i === steps.length - 1 ? 'grow-0' : 'grow',
            i + 1 < currentStep
              ? finishedStepsClassName
              : i + 1 === currentStep
                ? activeStepsClassName
                : unfinishedStepsClassName,
          )}
        >
          <div className='flex grow items-center gap-3'>
            <div
              className={cn(
                'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                i + 1 < currentStep
                  ? 'bg-info'
                  : i + 1 === currentStep
                    ? 'bg-foreground-soft'
                    : 'bg-surface',
              )}
            >
              {i + 1 < currentStep ? (
                <CheckIcon className='h-4 w-4 shrink-0 stroke-background' />
              ) : (
                <div
                  className={
                    i + 1 === currentStep
                      ? 'text-content-reverse text-sm'
                      : 'text-content-primary text-sm'
                  }
                >
                  {i + 1}
                </div>
              )}
            </div>
            <div className='flex shrink-0 flex-col'>
              <div
                className={cn(
                  'text-left font-normal text-base rtl:text-right',
                  i + 1 < currentStep ? 'text-info' : 'text-content-primary',
                )}
              >
                {d.title}
              </div>
              {d.description ? (
                <div className={cn('text-left text-content-tertiary text-sm rtl:text-right')}>
                  {d.description}
                </div>
              ) : null}
            </div>
            {i === steps.length - 1 ? null : <div className='h-px w-full grow bg-surface' />}
          </div>
        </li>
      ))}
    </ol>
  );
}

export { Stepper };
