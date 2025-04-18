import React from 'react';

import { H5, P } from './typography';

import { cn } from '@/lib/utils';

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

function Footer({ className, children, ...props }: FooterProps) {
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

interface FooterLogoUnitProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  link?: string;
  children?: React.ReactNode;
}

function FooterLogoUnit({
  className,
  link,
  children,
  ...props
}: FooterLogoUnitProps) {
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
            src='https://design.undp.org/static/media/undp-logo-white.36e69590.svg'
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

interface FooterMainNavUnitProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

function FooterMainNavUnit({
  className,
  children,
  ...props
}: FooterMainNavUnitProps) {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
}

interface FooterCopyrightUnitProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

function FooterCopyrightUnit({
  className,
  children,
  ...props
}: FooterCopyrightUnitProps) {
  return (
    <div
      {...props}
      className={cn(
        'flex justify-between flex-wrap items-center mt-6',
        className,
      )}
    >
      <P className='m-0 md:m-0 py-0 px-0 text-base'>
        © United Nations Development Programme
      </P>
      <div>{children}</div>
    </div>
  );
}

export { Footer, FooterLogoUnit, FooterCopyrightUnit, FooterMainNavUnit };
