import { MoreHorizontal } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

const Breadcrumb = React.forwardRef<HTMLElement, React.ComponentPropsWithoutRef<'nav'>>(
  ({ ...props }, ref) => <nav ref={ref} aria-label='breadcrumb' {...props} />,
);
Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(
  ({ className, ...props }, ref) => (
    <ol
      {...props}
      ref={ref}
      className={cn(
        'flex list-none flex-wrap items-center gap-1.5 break-words font-semibold text-xs uppercase sm:gap-2.5',
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
  React.ComponentPropsWithoutRef<'a'> & { variant?: 'default' | 'reverse' }
>(({ className, variant = 'default', ...props }, ref) => {
  const Comp = 'a';

  const combinedClasses = cn(
    'transition-all',
    variant === 'reverse'
      ? 'text-content-reverse hover:opacity-80'
      : 'text-primary hover:text-primary-hover',
    className,
  );

  return <Comp ref={ref} className={combinedClasses} {...props} />;
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'> & { variant?: 'default' | 'reverse' }
>(({ className, variant = 'default', ...props }, ref) => {
  return (
    <span
      {...props}
      ref={ref}
      aria-disabled='true'
      aria-current='page'
      className={cn(
        'text-xs',
        variant === 'reverse' ? 'text-content-reverse' : 'text-content-primary',
        className,
      )}
    />
  );
});
BreadcrumbPage.displayName = 'BreadcrumbPage';

function BreadcrumbSeparator({ variant = 'default' }: { variant?: 'default' | 'reverse' }) {
  return (
    <li role='presentation' aria-hidden='true'>
      <div
        className={cn(
          variant === 'reverse' ? 'text-content-reverse text-xs' : 'text-primary text-xs',
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
  variant = 'default',
  ...props
}: React.ComponentProps<'span'> & { variant?: 'default' | 'reverse' }) {
  return (
    <span
      {...props}
      role='presentation'
      aria-hidden='true'
      className={cn(
        'flex h-9 w-9 items-center justify-center',
        variant === 'reverse' ? 'text-content-reverse' : 'text-content-primary',
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
