import React from 'react';

import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  index: string | number;
  text: string;
  backgroundColor: string;
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
            'url(https://www.undp.org/libraries/undp--design-system-assets/images/arrow-right-white.svg), auto',
        }}
        className={cn('min-h-[160px] w-full flex items-center', className)}
      >
        <strong
          className={cn('text-[6.875rem] pl-[6.313rem] font-heading', indexClassName)}
          style={{ color: textColor || '#fff' }}
        >
          {index}
        </strong>
        <h4
          className={cn(
            'm-0 font-heading text-left p-0 text-[1.875rem] left-[18rem] tracking-[.094rem] absolute uppercase',
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
