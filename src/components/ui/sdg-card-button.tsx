import React from 'react';

import { cn } from '@/lib/utils';
import { H1, H4 } from './typography';

const SDGCardButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    index: string | number;
    text: string;
    backgroundColor?: string;
    textColor?: string;
    indexClassName?: string;
    textClassName?: string;
  }
>(
  (
    {
      className,
      indexClassName,
      backgroundColor,
      textClassName,
      textColor,
      index,
      text,
      style,
      ...props
    },
    ref,
  ) => {
    const Comp = 'button';
    return (
      <div className='@container w-full'>
        <Comp
          {...props}
          ref={ref}
          style={{
            ...style,
            backgroundColor: backgroundColor || 'var(--primary)',
            cursor:
              'url(https://cdn.jsdelivr.net/npm/@undp/design-system-assets/images/arrow-right-white.svg), auto',
          }}
          className={cn(
            'flex min-h-[160px] w-full @2xl:flex-row flex-col items-start @2xl:items-center @2xl:gap-9 gap-3 @2xl:px-0 px-6 @2xl:py-0 py-9 hover:brightness-90',
            className,
          )}
        >
          <H1
            marginBottom='none'
            className={cn(
              '@2xl:w-[250px] w-auto @2xl:pl-[6.313rem] pl-0 rtl:pr-0 rtl:pr-[6.313rem] rtl:pl-0',
              indexClassName,
            )}
            style={{ color: textColor || '#fff' }}
          >
            {index}
          </H1>
          <H4
            marginBottom='none'
            className={cn('font-heading uppercase tracking-[.078rem]', textClassName)}
            style={{ color: textColor || '#fff' }}
          >
            {text}
          </H4>
        </Comp>
      </div>
    );
  },
);

SDGCardButton.displayName = 'SDGCardButton';

export { SDGCardButton };
