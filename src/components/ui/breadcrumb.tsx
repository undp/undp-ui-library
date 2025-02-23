import * as React from 'react';
import { MoreHorizontal } from 'lucide-react';

import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const breadcrumbsVariants = cva('', {
  variants: {
    variant: {
      dark: 'transition-colors text-accent-dark-red hover:text-accent-light-red',
      light: 'transition-colors text-primary-white hover:text-primary-gray-200',
    },
  },
  defaultVariants: {
    variant: 'dark',
  },
});

const BreadcrumbCtx = React.createContext<{
  variant: 'dark' | 'light' | null | undefined;
} | null>(null);

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    variant?: 'dark' | 'light' | null | undefined;
  }
>(({ variant, ...props }, ref) => (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  <BreadcrumbCtx.Provider value={{ variant }}>
    <nav ref={ref} aria-label='breadcrumb' {...props} />
  </BreadcrumbCtx.Provider>
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
      'flex flex-wrap items-center gap-1.5 break-words font-semibold text-xs uppercase text-muted-foreground sm:gap-2.5',
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
  const context = React.useContext(BreadcrumbCtx);

  const combinedClasses = cn(
    breadcrumbsVariants({ variant: context?.variant }),
    className,
  );

  return <Comp ref={ref} className={combinedClasses} {...props} />;
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => {
  const context = React.useContext(BreadcrumbCtx);
  return (
    <span
      {...props}
      ref={ref}
      role='link'
      aria-disabled='true'
      aria-current='page'
      className={cn(
        context?.variant === 'dark'
          ? 'text-primary-white text-xs'
          : 'text-foreground text-xs',
        className,
      )}
    />
  );
});
BreadcrumbPage.displayName = 'BreadcrumbPage';

function BreadcrumbSeparator() {
  const context = React.useContext(BreadcrumbCtx);
  return (
    <li role='presentation' aria-hidden='true'>
      <div
        className={
          context?.variant === 'dark'
            ? 'text-primary-white'
            : 'text-accent-dark-red'
        }
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
  const context = React.useContext(BreadcrumbCtx);
  return (
    <span
      {...props}
      role='presentation'
      aria-hidden='true'
      className={cn('flex h-9 w-9 items-center justify-center', className)}
    >
      <MoreHorizontal
        className={
          context?.variant === 'dark' ? 'h-4 w-4 text-white' : 'h-4 w-4'
        }
      />
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
