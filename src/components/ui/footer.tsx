import React from 'react';

import { H5, P } from './typography';

import { cn } from '@/lib/utils';

function Footer({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      {...props}
      className={cn(
        'bg-primary-blue-600 text-primary-white w-full pt-14 px-3 pb-12 h-auto',
        className,
      )}
    >
      {children}
    </footer>
  );
}

function FooterLogoUnit({
  className,
  link,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  link?: string;
}) {
  return (
    <div
      {...props}
      className={cn(
        'flex justify-between mb-8 flex-wrap pt-0 px-3 pb-12 border-b-primary-white border-b items-center',
        className,
      )}
    >
      <div className='flex items-center m-0 gap-4'>
        <a href={link || './'} target='_blank' rel='noreferrer'>
          <img
            alt='undp logo'
            src='https://cdn.jsdelivr.net/npm/@undp/design-system-assets@1.6.1/images/undp-logo-white.svg'
            className='w-[72px]'
          />
        </a>
        <H5 className='mb-0 text-primary-white md:mb-0'>
          United Nations
          <br />
          Development Programme
        </H5>
      </div>
      <div>{children}</div>
    </div>
  );
}

function FooterMainNavUnit({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
}

function FooterCopyrightUnit({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cn('flex justify-between flex-wrap items-center mt-6', className)}>
      <P className='m-0 md:m-0 py-0 px-0 text-base'>© United Nations Development Programme</P>
      <div>{children}</div>
    </div>
  );
}

export { Footer, FooterLogoUnit, FooterCopyrightUnit, FooterMainNavUnit };
