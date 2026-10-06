import { MoreHorizontal } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

const BreadcrumbContext = React.createContext<{ variant: 'default' | 'reverse' } | null>(null);

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & { variant?: 'default' | 'reverse' }
>(({ variant = 'default', ...props }, ref) => {
  const contextValue = React.useMemo(() => ({ variant }), [variant]);
  return (
    <BreadcrumbContext.Provider value={contextValue}>
      <nav ref={ref} aria-label='breadcrumb' {...props} />
    </BreadcrumbContext.Provider>
  );
});
Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(
  ({ className, ...props }, ref) => (
    <ol
      {...props}
      ref={ref}
      className={cn(
        'wrap-break-word flex list-none flex-wrap items-center gap-1.5 font-semibold text-xs uppercase sm:gap-2.5',
        className,
      )}
    />
  ),
);
BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className, ...props }, ref) => (
    <li {...props} ref={ref} className={cn('inline-flex items-center gap-1.5', className)} />
  ),
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, ...props }, ref) => {
  const context = React.useContext(BreadcrumbContext);
  const Comp = 'a';

  const combinedClasses = cn(
    'transition-all',
    context?.variant === 'reverse'
      ? 'text-content-reverse hover:opacity-80'
      : 'text-primary hover:text-primary-hover',
    className,
  );

  return <Comp ref={ref} className={combinedClasses} {...props} />;
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => {
  const context = React.useContext(BreadcrumbContext);
  return (
    <span
      {...props}
      ref={ref}
      aria-disabled='true'
      aria-current='page'
      className={cn(
        'text-xs',
        context?.variant === 'reverse' ? 'text-content-reverse' : 'text-content-primary',
        className,
      )}
    />
  );
});
BreadcrumbPage.displayName = 'BreadcrumbPage';

function BreadcrumbSeparator() {
  const context = React.useContext(BreadcrumbContext);
  return (
    <li role='presentation' aria-hidden='true'>
      <div
        className={cn(
          context?.variant === 'reverse' ? 'text-content-reverse text-xs' : 'text-primary text-xs',
        )}
      >
        /
      </div>
    </li>
  );
}
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
    const context = React.useContext(BreadcrumbContext);
  return (
    <span
      {...props}
      role='presentation'
      aria-hidden='true'
      className={cn(
        'flex h-9 w-9 items-center justify-center',
        context?.variant === 'reverse' ? 'text-content-reverse' : 'text-content-primary',
        className,
      )}
    >
      <MoreHorizontal className='h-4 w-4' />
      <span className='sr-only'>More</span>
    </span>
  );
}
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
