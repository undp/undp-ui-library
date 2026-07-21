import type React from 'react';
import { cn } from '@/lib/utils';
import { H5, P } from './typography';

function Footer({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      {...props}
      className={cn('h-auto w-full bg-secondary px-3 pt-14 pb-12 text-content-reverse', className)}
    >
      <div className={cn('mx-auto w-full sm:w-[83.333%]')}>{children}</div>
    </footer>
  );
}

function FooterContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mx-auto h-auto w-full sm:w-[83.333%]', className)} {...props}>
      {children}
    </div>
  );
}

function FooterLogoUnit({
  className,
  link,
  children,
  locale = 'en',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  link?: string;
  locale?: 'en' | 'fr' | 'es';
}) {
  return (
    <div
      {...props}
      className={cn(
        'mb-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-6 border-b border-b-background px-3 pt-0 pb-12',
        className,
      )}
    >
      <div className='m-0 flex items-center gap-4'>
        <a href={link || './'} target='_blank' rel='noreferrer'>
          <img
            alt='undp logo'
            src={`https://cdn.jsdelivr.net/npm/@undp/design-system-assets/images/${locale === 'es' || locale === 'fr' ? 'pnud' : 'undp'}-logo-white.svg`}
            className='w-[60px]'
          />
        </a>
        <H5 className='text-content-reverse' marginBottom='none'>
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
    <div
      {...props}
      className={cn('mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-6', className)}
    >
      <P className='m-0 px-0 py-0 text-content-reverse text-sm md:m-0 md:text-base lg:text-base'>
        © United Nations Development Programme
      </P>
      <div className='flex flex-wrap gap-x-4 gap-y-6'>
        {children}
        <a
          href='https://www.undp.org/copyright-terms-use'
          target='_blank'
          rel='noopener noreferrer'
          className='text-content-reverse text-sm hover:text-blue-100 md:text-base'
        >
          Terms of use
        </a>
      </div>
    </div>
  );
}

export { Footer, FooterContent, FooterCopyrightUnit, FooterLogoUnit, FooterMainNavUnit };
