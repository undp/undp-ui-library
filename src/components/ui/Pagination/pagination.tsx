import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

function PaginationUnit({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      {...props}
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
      className={cn('flex list-none flex-row items-center gap-1', className)}
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
      className={cn('p-4 text-base text-content-primary', className)}
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
        'rounded-full bg-surface p-2 hover:bg-surface-hover rtl:scale-x-[-1]',
        className,
      )}
    >
      <ChevronLeft className='h-6 w-6 stroke-foreground' />
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
        'rounded-full bg-surface p-2 hover:bg-surface-hover rtl:scale-x-[-1]',
        className,
      )}
    >
      <ChevronRight className='h-6 w-6 stroke-foreground' />
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
      <MoreHorizontal className='h-4 w-4 text-content-primary' />
      <span className='sr-only'>More pages</span>
    </span>
  );
}
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationUnit,
};
