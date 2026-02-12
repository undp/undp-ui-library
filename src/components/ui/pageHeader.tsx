import * as React from 'react';

import { cn } from '@/lib/utils';

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundImage?: string;
  minHeight?: boolean;
  contentMode?: 'light' | 'dark';
}

const PageHeader = React.forwardRef<HTMLDivElement, PageHeaderProps>(
  (
    { className, style, backgroundImage, minHeight = true, contentMode = 'dark', ...props },
    ref,
  ) => (
    <div className='@container w-full'>
      <div
        ref={ref}
        className={cn(
          `${contentMode} bg-cover bg-center w-full py-20 pl-4 @2xl:pl-[8.3333%] rtl:pr-4 rtl:pl-0 @2xl:rtl:pr-[8.3333%] @2xl:rtl:pl-0 flex flex-col gap-4`,
          minHeight ? 'min-h-[642px] @5xl:min-h-[746px]' : '',
          className,
        )}
        style={{
          ...style,
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        }}
        {...props}
      />
    </div>
  ),
);
PageHeader.displayName = 'PageHeader';

const PageHeaderHead = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('p-4', className)} {...props} />,
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

export { PageHeaderContent, PageHeader, PageHeaderHead };
