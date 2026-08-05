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
              'relative isolate flex w-full @2xl:flex-row flex-col @2xl:items-stretch',
              contentMode === 'dark' ? 'text-content-reverse' : 'text-content-primary',
              minHeight
                ? minHeight === true
                  ? '@2xl:min-h-160.5 @5xl:min-h-186.5 min-h-auto'
                  : minHeight
                : '',
              className,
            )}
            style={style}
            {...props}
          >
            <div
              className='absolute inset-0 @2xl:hidden bg-center bg-cover'
              style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
              }}
            />
            <div className='relative flex @2xl:w-1/2 w-full flex-col gap-4 py-20 @2xl:pl-[8.3333%] pl-4 @2xl:rtl:pr-0 rtl:pr-4 rtl:pl-0'>
              {children}
            </div>
            <div
              className='@2xl:block hidden @2xl:w-1/2 bg-center bg-cover'
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
            `${contentMode} flex w-full flex-col gap-4 bg-center bg-cover py-20 @2xl:pl-[8.3333%] pl-4 @2xl:rtl:pr-[8.3333%] rtl:pr-4 @2xl:rtl:pl-0 rtl:pl-0`,
            minHeight
              ? minHeight === true
                ? '@2xl:min-h-160.5 @5xl:min-h-186.5 min-h-auto'
                : minHeight
              : '',
            contentMode === 'dark' ? 'text-content-reverse' : 'text-content-primary',
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
    <div ref={ref} className={cn('@2xl:px-4 px-4 @2xl:py-4 py-0', className)} {...props} />
  ),
);
PageHeaderHead.displayName = 'PageHeaderHead';

const PageHeaderContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex @2xl:w-[66.667%] w-full grow flex-col justify-center gap-6 p-4',
        className,
      )}
      {...props}
    />
  ),
);

PageHeaderContent.displayName = 'PageHeaderContent';

export { PageHeader, PageHeaderContent, PageHeaderHead };
