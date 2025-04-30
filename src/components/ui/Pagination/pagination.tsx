import React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

import { cn } from '@/lib/utils';

function PaginationUnit({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      {...props}
      role='navigation'
      aria-label='pagination'
      className={cn('mx-auto flex w-full justify-center', className)}
    />
  );
}
PaginationUnit.displayName = 'PaginationUnit';

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul
      {...props}
      ref={ref}
      className={cn('flex flex-row items-center gap-1 list-none', className)}
    />
  ),
);
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => (
    <li {...props} ref={ref} className={cn('mr-2 last:mr-0', className)} />
  ),
);
PaginationItem.displayName = 'PaginationItem';

function PaginationLink({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      type='button'
      className={cn(
        'p-4 text-base text-primary-black dark:text-primary-gray-100 dark:hover:bg-primary-gray-600',
        className,
      )}
    >
      {children}
    </button>
  );
}
PaginationLink.displayName = 'PaginationLink';

function PaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      {...props}
      aria-label='Go to previous page'
      className={cn(
        'p-2 bg-primary-gray-300 dark:bg-primary-gray-600 rtl:scale-x-[-1] rounded-full hover:bg-primary-gray-400 dark:hover:bg-primary-gray-550',
        className,
      )}
    >
      <ChevronLeft className='h-6 w-6 stroke-primary-gray-700 dark:stroke-primary-gray-100' />
    </PaginationLink>
  );
}
PaginationPrevious.displayName = 'PaginationPrevious';

function PaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      {...props}
      aria-label='Go to next page'
      className={cn(
        'p-2 bg-primary-gray-300 dark:bg-primary-gray-600 rtl:scale-x-[-1] rounded-full hover:bg-primary-gray-400 dark:hover:bg-primary-gray-550',
        className,
      )}
    >
      <ChevronRight className='h-6 w-6 stroke-primary-gray-700 dark:stroke-primary-gray-100' />
    </PaginationLink>
  );
}
PaginationNext.displayName = 'PaginationNext';

function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      {...props}
      aria-hidden
      className={cn('flex h-9 w-9 items-center justify-center', className)}
    >
      <MoreHorizontal className='h-4 w-4 text-primary-gray-700 dark:text-primary-gray-100' />
      <span className='sr-only'>More pages</span>
    </span>
  );
}
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  PaginationUnit,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
