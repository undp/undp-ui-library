import * as React from 'react';

import { cn } from '@/lib/utils';

const PageHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    backgroundImage?: string;
    minHeight?: boolean | string;
    contentMode?: 'light' | 'dark';
    variant?: 'primary' | 'secondary';
  }
>(
  (
    {
      className,
      style,
      backgroundImage,
      variant,
      minHeight = true,
      contentMode = 'dark',
      children,
      ...props
    },
    ref,
  ) => {
    if (variant === 'secondary') {
      return (
        <div className='@container w-full'>
          <div
            ref={ref}
            className={cn(
              `${contentMode} w-full relative isolate flex flex-col @2xl:flex-row @2xl:items-stretch`,
              minHeight
                ? minHeight === true
                  ? 'min-h-auto @2xl:min-h-[642px] @5xl:min-h-[746px]'
                  : minHeight
                : '',
              className,
            )}
            style={style}
            {...props}
          >
            <div
              className='absolute inset-0 @2xl:hidden bg-cover bg-center'
              style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
              }}
            />
            <div className='relative w-full @2xl:w-1/2 py-20 pl-4 @2xl:pl-[8.3333%] rtl:pr-4 rtl:pl-0 @2xl:rtl:pr-0 flex flex-col gap-4'>
              {children}
            </div>
            <div
              className='hidden @2xl:block @2xl:w-1/2 bg-cover bg-center'
              style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
              }}
            />
          </div>
        </div>
      );
    }
    return (
      <div className='@container w-full'>
        <div
          ref={ref}
          className={cn(
            `${contentMode} bg-cover bg-center w-full py-20 pl-4 @2xl:pl-[8.3333%] rtl:pr-4 rtl:pl-0 @2xl:rtl:pr-[8.3333%] @2xl:rtl:pl-0 flex flex-col gap-4`,
            minHeight
              ? minHeight === true
                ? 'min-h-auto @2xl:min-h-[642px] @5xl:min-h-[746px]'
                : minHeight
              : '',
            className,
          )}
          style={{
            ...style,
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          }}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  },
);
PageHeader.displayName = 'PageHeader';

const PageHeaderHead = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('py-0 px-4 @2xl:py-4 @2xl:px-4', className)} {...props} />
  ),
);
PageHeaderHead.displayName = 'PageHeaderHead';

const PageHeaderContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'p-4 w-full @2xl:w-[66.667%] grow flex flex-col gap-6 justify-center',
        className,
      )}
      {...props}
    />
  ),
);

PageHeaderContent.displayName = 'PageHeaderContent';

export { PageHeader, PageHeaderContent, PageHeaderHead };
