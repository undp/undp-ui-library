import * as React from 'react';
import { cn } from '@/lib/utils';

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}
function P({ children, className, ...props }: ParagraphProps) {
  return (
    <p
      {...props}
      className={cn(`mt-0 text-base leading-[1.4] md:text-xl`, className)}
    >
      {children}
    </p>
  );
}
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

function H1({ children, className, ...props }: HeadingProps) {
  return (
    <h1
      {...props}
      className={cn(
        'mt-0 mb-3 p-0 md:mb-4 text-[2.938rem] md:text-[5.125rem] lg:text-[6.25rem] font-bold tracking-[0.06rem] leading-[1.08] uppercase font-heading text-primary-black',
        className,
      )}
    >
      {children}
    </h1>
  );
}

function H2({ children, className, ...props }: HeadingProps) {
  return (
    <h2
      {...props}
      className={cn(
        'mt-0 mb-3 p-0 md:mb-4 text-[2.5rem] md:text-[2.813rem] lg:text-[3.438rem] font-bold leading-[1.1] text-primary-black',
        className,
      )}
    >
      {children}
    </h2>
  );
}

function H3({ children, className, ...props }: HeadingProps) {
  return (
    <h3
      {...props}
      className={cn(
        'mt-0 mb-3 p-0 md:mb-4 text-[1.875rem] md:text-[2.188rem] font-semibold leading-[1.15] text-primary-black',
        className,
      )}
    >
      {children}
    </h3>
  );
}

function H4({ children, className, ...props }: HeadingProps) {
  return (
    <h4
      {...props}
      className={cn(
        'mt-0 mb-3 p-0 md:mb-4 text-[1.563rem] md:text-[2.188rem] font-normal leading-[1.15] text-primary-black',
        className,
      )}
    >
      {children}
    </h4>
  );
}

function H5({ children, className, ...props }: HeadingProps) {
  return (
    <h5
      {...props}
      className={cn(
        'mt-0 mb-3 p-0 md:mb-4 text-[1.25rem] md:text-[1.563rem] font-normal leading-[1.15] text-primary-black',
        className,
      )}
    >
      {children}
    </h5>
  );
}

function H6({ children, className, ...props }: HeadingProps) {
  return (
    <h6
      {...props}
      className={cn(
        'mt-0 mb-3 p-0 md:mb-4 text-base font-bold leading-[1.15] text-primary-black uppercase',
        className,
      )}
    >
      {children}
    </h6>
  );
}

function Cite({ children, className, ...props }: HeadingProps) {
  return (
    <cite
      {...props}
      className={cn(
        'mt-0 mb-3 p-0 md:mb-4 text-xl md:text-2xl leading-[1.1] block font-normal mt-4.5 text-primary-black',
        className,
      )}
    >
      {children}
    </cite>
  );
}

function Code({ children, className, ...props }: HeadingProps) {
  return (
    <code
      {...props}
      className={cn(
        'mt-0 text-base bg-primary-gray-200 px-2 pb-2 text-primary-black',
        className,
      )}
    >
      {children}
    </code>
  );
}

function Blockquote({ children, className, ...props }: HeadingProps) {
  return (
    <code
      {...props}
      className={cn(
        'font-mono mt-0 text-[1.625rem] md:text-[2.188rem] font-semibold leading-[1.1] md:leading-[1.25] m-0',
        className,
      )}
    >
      {children}
    </code>
  );
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  variant?: 'dark' | 'light';
}

function A({ children, className, variant = 'light', ...props }: LinkProps) {
  return (
    <a
      {...props}
      className={cn(
        variant === 'light'
          ? 'undp-link light text-primary-black'
          : 'undp-link dark text-primary-white',
        'cursor-pointer no-underline focus-visible:outline-none focus-visible:shadow-[0_0_4px_#0468b1]',
        className,
      )}
    >
      {children}
    </a>
  );
}

export { H1, H2, H3, H4, H5, H6, Cite, Code, Blockquote, P, A };
