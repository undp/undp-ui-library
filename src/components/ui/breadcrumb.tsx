import React from 'react';
import { MoreHorizontal } from 'lucide-react';

import { cn } from '@/lib/utils';

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'>
>(({ ...props }, ref) => (
   
  <nav ref={ref} aria-label='breadcrumb' {...props} />
));
Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
  <ol
    {...props}
    ref={ref}
    className={cn(
      'flex flex-wrap items-center gap-1.5 break-words font-semibold text-xs uppercase sm:gap-2.5',
      className,
    )}
  />
));
BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    {...props}
    ref={ref}
    className={cn('inline-flex items-center gap-1.5', className)}
  />
));
BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, ...props }, ref) => {
  const Comp = 'a';

  const combinedClasses = cn(
    'transition-colors text-accent-dark-red hover:text-accent-light-red dark:text-primary-white dark:hover:text-primary-gray-500',
    className,
  );

  return <Comp ref={ref} className={combinedClasses} {...props} />;
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => {
  return (
    <span
      {...props}
      ref={ref}
      role='link'
      aria-disabled='true'
      aria-current='page'
      className={cn(
        'text-primary-gray-700 text-xs dark:text-primary-white',
        className,
      )}
    />
  );
});
BreadcrumbPage.displayName = 'BreadcrumbPage';

function BreadcrumbSeparator() {
  return (
    <li role='presentation' aria-hidden='true'>
      <div className='text-accent-dark-red dark:text-primary-white'>/</div>
    </li>
  );
}
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      {...props}
      role='presentation'
      aria-hidden='true'
      className={cn('flex h-9 w-9 items-center justify-center', className)}
    >
      <MoreHorizontal className='h-4 w-4 text-primary-gray-700 dark:text-white' />
      <span className='sr-only'>More</span>
    </span>
  );
}
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
