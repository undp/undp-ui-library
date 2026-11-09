import { ChevronRight, Menu, X } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './navigation-menu';

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
  siteSubNameUrl,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  siteName: string;
  siteSubName?: string;
  siteSubNameUrl?: string;
  hyperlink?: string;
  logoLocale?: 'en' | 'fr' | 'es';
}) {
  return (
    <div {...props} className={cn('flex items-center gap-6', className)}>
      <a
        href={hyperlink || './'}
        style={{ textDecoration: 'none' }}
        className='logo-sub-head flex items-center'
      >
        <img
          src={`https://cdn.jsdelivr.net/npm/@undp/design-system-assets/images/${logoLocale === 'es' || logoLocale === 'fr' ? 'pnud' : 'undp'}-logo-blue.svg`}
          alt='UNDP Logo'
          className='z-100 h-20.5 w-10 md:h-30.5 md:w-15'
        />
      </a>
      <div>
        <a
          href={siteSubNameUrl || 'https://www.undp.org/'}
          style={{ textDecoration: 'none' }}
          className='logo-sub-head flex items-center gap-6'
        >
          {siteSubName ? (
            <div className='mx-0 mt-0 mb-[4.8px] inline-block border-b border-b-primary-gray-500 pb-px font-semibold text-content-secondary text-xs uppercase leading-base no-underline'>
              {siteSubName}
            </div>
          ) : null}
        </a>
        <a
          href={hyperlink || './'}
          style={{ textDecoration: 'none' }}
          className='logo-sub-head flex items-center gap-6'
        >
          <div className='m-0 p-0 font-semibold text-base text-content-primary leading-base no-underline lg:text-xl'>
            {siteName}
          </div>
        </a>
      </div>
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
        'grid grow items-center gap-8 font-medium text-content-primary tracking-[0.42px] md:flex md:gap-8 [&>a:hover]:text-content-secondary [&>a]:font-bold [&>a]:text-base [&>a]:text-content-primary [&>a]:uppercase [&>a]:no-underline md:[&>a]:font-medium md:[&>a]:text-sm',
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

function HeaderMenuDropdown({
  label,
  items,
  classNames,
  styles,
  isResponsive = true,
  showArrowInMobile = true,
}: {
  label: string;
  items: { label: string; href?: string; target?: string }[];
  classNames?: {
    triggerClassName?: string;
    menuClassName?: string;
    itemClassName?: string;
  };
  styles?: {
    triggerStyles?: React.CSSProperties;
    menuStyles?: React.CSSProperties;
    itemStyles?: React.CSSProperties;
  };
  isResponsive?: boolean;
  showArrowInMobile?: boolean;
}) {
  return (
    <>
      <NavigationMenu viewport={false} className={isResponsive ? 'hidden md:flex' : 'flex'}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={classNames?.triggerClassName}
              style={styles?.triggerStyles}
            >
              {label}
            </NavigationMenuTrigger>
            <NavigationMenuContent
              className={cn('md:w-[320px]', classNames?.menuClassName)}
              style={styles?.menuStyles}
            >
              {items.map((item) => (
                <NavigationMenuLink
                  href={item.href || '#'}
                  target={item.target || '_self'}
                  key={item.label}
                  className={classNames?.itemClassName}
                  style={styles?.itemStyles}
                >
                  {item.label}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className={isResponsive ? 'flex flex-col gap-9 md:hidden' : 'hidden flex-col gap-9'}>
        <div className='font-bold text-base text-content-primary uppercase no-underline md:font-medium md:text-sm'>
          {label}
        </div>
        {items.map((item) => (
          <div
            key={item.label}
            className='ml-3 rtl:mr-3 [&>a:hover]:text-content-secondary [&>a]:text-content-primary [&>a]:text-sm [&>a]:no-underline'
          >
            <a
              href={item.href || '#'}
              className='flex items-center gap-1'
              target={item.target || '_self'}
            >
              {item.label}
              {showArrowInMobile && <ChevronRight className='block text-primary md:hidden' />}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

function HeaderMenuLink({
  children,
  className,
  showArrowInMobile = true,
  href,
  target,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  showArrowInMobile?: boolean;
}) {
  return (
    <a
      {...props}
      href={href || '#'}
      target={target || '_self'}
      className={cn(
        'flex items-center gap-1 font-bold text-base text-content-primary uppercase no-underline hover:text-content-secondary md:font-medium md:text-sm',
        className,
      )}
    >
      {children} {showArrowInMobile && <ChevronRight className='block text-primary md:hidden' />}
    </a>
  );
}

export {
  Header,
  HeaderActions,
  HeaderLogoUnit,
  HeaderMainNavUnit,
  HeaderMenuDropdown,
  HeaderMenuLink,
  HeaderMenuUnit,
};
