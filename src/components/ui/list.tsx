import React from 'react';

import { cn } from '@/lib/utils';

const Ol = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
   
  <ol ref={ref} aria-label='list' {...props} className={cn('pl-6 rtl:pr-6 rtl:pl-0', className)}/>
));
Ol.displayName = 'Ol';

const Ul = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<'ul'>
>(({ className, ...props }, ref) => (
   
  <ul ref={ref} aria-label='list' {...props} className={cn('pl-6 rtl:pr-6 rtl:pl-0', className)}  />
));
Ul.displayName = 'Ul';

const Li = React.forwardRef<  
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    {...props}
    ref={ref}
    className={cn('mb-6 pl-3 text-base md:text-xl rtl:pr-3 rtl:pl-0',className)}
  />
));
Li.displayName = 'li';

export {
  Ul,
  Ol,
  Li,
};
