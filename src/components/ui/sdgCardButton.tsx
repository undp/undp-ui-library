import React from 'react';

import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  index: string | number;
  text: string;
  backgroundColor?: string;
  textColor?: string;
  indexClassName?: string;
  textClassName?: string;
}

const SDGCardButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
      <Comp
        {...props}
        ref={ref}
        style={{
          ...style,
          backgroundColor: backgroundColor || 'var(--blue-600)',
          cursor:
            'url(https://cdn.jsdelivr.net/npm/@undp/design-system-assets@1.6.1/images/arrow-right-white.svg), auto',
        }}
        className={cn(
          'min-h-[160px] w-full flex items-start flex-col gap-0 px-6 py-9 sm:flex-row sm:px-0 sm:items-center sm:py-0 sm:gap-9 hover:brightness-90',
          className,
        )}
      >
        <strong
          className={cn(
            'text-[2.938rem] pl-0 sm:text-[6.875rem] sm:pl-[6.313rem] font-heading w-auto sm:w-[250px] text-left',
            indexClassName,
          )}
          style={{ color: textColor || '#fff' }}
        >
          {index}
        </strong>
        <h4
          className={cn(
            'm-0 font-heading text-left p-0 text-[1.563rem] tracking-[.078rem] uppercase sm:text-[1.875rem] sm:tracking-[.094rem]',
            textClassName,
          )}
          style={{ color: textColor || '#fff' }}
        >
          {text}
        </h4>
      </Comp>
    );
  },
);

SDGCardButton.displayName = 'SDGCardButton';

export { SDGCardButton };
