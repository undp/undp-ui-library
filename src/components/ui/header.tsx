import { Menu, X } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';

function Header({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <header
      {...props}
      className={cn(
        'relative top-0 left-0 z-10 box-border flex h-18.75 w-full max-w-full items-center justify-between gap-4 bg-surface-2xs px-6 py-0 shadow-header md:h-header',
        className,
      )}
    >
      {children}
    </header>
  );
}

function HeaderLogoUnit({
  className,
  siteName,
  siteSubName,
  hyperlink,
  logoLocale,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  siteName: string;
  siteSubName?: string;
  hyperlink?: string;
  logoLocale?: 'en' | 'fr' | 'es';
}) {
  return (
    <div {...props} className={cn('flex items-center', className)}>
      <a
        href={hyperlink || './'}
        style={{ textDecoration: 'none' }}
        className='logo-sub-head flex items-center gap-6'
      >
        <img
          src={`https://cdn.jsdelivr.net/npm/@undp/design-system-assets/images/${logoLocale === 'es' || logoLocale === 'fr' ? 'pnud' : 'undp'}-logo-blue.svg`}
          alt='UNDP Logo'
          className='z-100 h-20.5 w-10 md:h-30.5 md:w-15'
        />
        <div>
          {siteSubName ? (
            <div className='mx-0 mt-0 mb-[4.8px] inline-block border-b border-b-primary-gray-500 pb-px font-semibold text-primary-gray-600 text-xs uppercase leading-base no-underline'>
              {siteSubName}
            </div>
          ) : null}
          <div className='m-0 p-0 font-semibold text-base text-content-primary leading-base no-underline lg:text-xl'>
            {siteName}
          </div>
        </div>
      </a>
    </div>
  );
}

function HeaderMainNavUnit({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <>
      <div
        {...props}
        className={cn('hidden grow justify-between gap-8 text-sm uppercase md:flex', className)}
      >
        {children}
      </div>
      <div {...props} className={cn('flex grow justify-end gap-8 md:hidden', className)}>
        <button
          type='button'
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          {showMenu ? (
            <X className='h-6 w-6 stroke-secondary' />
          ) : (
            <Menu className='h-6 w-6 stroke-secondary' />
          )}
        </button>
        {showMenu ? (
          // biome-ignore lint/a11y/noStaticElementInteractions: this is see if what is clicked is a link or not
          <div
            onClick={(e) => {
              const target = e.target as HTMLElement;

              if (target.closest('a')) {
                setShowMenu(false);
              }
            }}
            onKeyDown={() => {}}
            className='absolute top-full left-0 m-0 box-border h-[calc(100vh-75px)] w-full overflow-y-auto bg-surface/80 p-[5.625rem_1.5rem_3.75rem] backdrop-blur-frosted'
          >
            {children}
          </div>
        ) : null}
      </div>
    </>
  );
}

function HeaderMenuUnit({
  className,
  children,
  align = 'center',
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  align?: 'center' | 'end';
}) {
  return (
    <div
      {...props}
      className={cn(
        'grid grow items-center gap-4 font-medium text-content-primary tracking-[0.42px] md:flex md:gap-8 [&>a:hover]:text-secondary [&>a]:font-bold [&>a]:text-base [&>a]:text-content-primary [&>a]:uppercase [&>a]:no-underline md:[&>a]:font-medium md:[&>a]:text-sm',
        align === 'end' ? 'md:justify-end' : 'md:justify-center',
        className,
      )}
    >
      {children}
    </div>
  );
}

function HeaderActions({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn('mt-6 flex items-center gap-8 md:mt-0 md:justify-center', className)}
    >
      {children}
    </div>
  );
}

export { Header, HeaderActions, HeaderLogoUnit, HeaderMainNavUnit, HeaderMenuUnit };
