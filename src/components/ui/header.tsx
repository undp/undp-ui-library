import * as React from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
}

function Header({ className, children, ...props }: HeaderProps) {
  return (
    <header
      {...props}
      className={cn(
        'bg-primary-gray-100 shadow-header left-0 fixed top-0 w-full z-9 relative h-[75px] md:h-header',
        className,
      )}
    >
      <div className='max-w-full flex py-0 px-3 gap-4 justify-between items-center'>
        {children}
      </div>
    </header>
  );
}

interface HeaderLogoUnitProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  siteSubName?: string;
  siteName: string;
  hyperlink?: string;
}

function HeaderLogoUnit({
  className,
  siteName,
  siteSubName,
  hyperlink,
  ...props
}: HeaderLogoUnitProps) {
  return (
    <div {...props} className={cn('flex items-center', className)}>
      <a
        href={hyperlink || './'}
        style={{ textDecoration: 'none' }}
        className='logo-sub-head flex gap-4 items-center sm:gap-3'
      >
        <img
          src='https://design.undp.org/static/media/undp-logo-blue.4f32e17f.svg'
          alt='UNDP Logo'
          className='w-[40px] h-[82px] md:w-[60px] md:h-[122px] z-100'
        />
        <div>
          {siteSubName ? (
            <div className='uppercase text-primary-gray-600 pb-px mx-0 mt-0 mb-1 text-xs leading-none inline-block no-underline'>
              {siteSubName}
            </div>
          ) : null}
          <div className='text-primary-black p-0 m-0 no-underline'>
            {siteName}
          </div>
        </div>
      </a>
    </div>
  );
}

interface HeaderMainNavUnitProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

function HeaderMainNavUnit({
  className,
  children,
  ...props
}: HeaderMainNavUnitProps) {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <>
      <div
        {...props}
        className={cn('grow justify-between gap-8 hidden md:flex', className)}
      >
        {children}
      </div>
      <div
        {...props}
        className={cn('grow justify-end gap-8 flex md:hidden', className)}
      >
        <button
          type='button'
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          {showMenu ? (
            <X className='w-6 h-6 stroke-primary-blue-600' />
          ) : (
            <Menu className='w-6 h-6 stroke-primary-blue-600' />
          )}
        </button>
        {showMenu ? (
          <div className='box-border h-[calc(100vh-75px)] left-0 m-0 overflow-y-auto p-[5.625rem_1.5rem_3.75rem] absolute top-full w-full backdrop-blur-[18px] bg-[rgba(247,247,247,0.8)]'>
            {children}
          </div>
        ) : null}
      </div>
    </>
  );
}

interface HeaderMenuUnitProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

function HeaderMenuUnit({
  className,
  children,
  ...props
}: HeaderMenuUnitProps) {
  return (
    <div
      {...props}
      className={cn(
        'grid gap-4 md:flex grow items-center md:justify-center md:gap-8 [&>a]:text-base [&>a]:font-bold [&>a]:uppercase [&>a]:text-primary-black md:[&>a]:text-sm md:[&>a]:font-medium [&>a]:no-underline [&>a:hover]:text-primary-blue-600',
        className,
      )}
    >
      {children}
    </div>
  );
}

interface HeaderActionsProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

function HeaderActions({ className, children, ...props }: HeaderActionsProps) {
  return (
    <div
      {...props}
      className={cn(
        'flex mt-6 md:mt-0 md:justify-center gap-8 items-center',
        className,
      )}
    >
      {children}
    </div>
  );
}

export {
  Header,
  HeaderLogoUnit,
  HeaderMenuUnit,
  HeaderActions,
  HeaderMainNavUnit,
};
