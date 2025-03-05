import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

const paragraphVariant = cva('mt-0 ml-0 mr-0', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base md:text-xl',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    leading: {
      none: 'leading-none',
      xs: 'leading-tight',
      sm: 'leading-snug',
      base: 'leading-[1.4]',
      lg: 'leading-relaxed',
      xl: 'leading-loose',
    },
    marginBottom: {
      none: 'mb-0',
      xs: 'mb-2',
      sm: 'mb-3',
      base: 'mb-5',
      lg: 'mb-6',
      xl: 'mb-7',
    },
  },
  defaultVariants: {
    size: 'base',
    leading: 'base',
    marginBottom: 'base',
  },
});
function P({
  children,
  className,
  size,
  leading,
  marginBottom,
  ...props
}: ParagraphProps & VariantProps<typeof paragraphVariant>) {
  return (
    <p
      {...props}
      className={cn(
        paragraphVariant({ size, leading, marginBottom }),
        className,
      )}
    >
      {children}
    </p>
  );
}
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}

const heading1Variant = cva('mt-0 ml-0 mr-0 p-0 font-bold uppercase', {
  variants: {
    marginBottom: {
      none: 'mb-0',
      xs: 'mb-1',
      sm: 'mb-2',
      base: 'mb-3 md:mb-4',
      lg: 'mb-5',
      xl: 'mb-6',
    },
    size: {
      base: 'text-[2.938rem] md:text-[5.125rem] lg:text-[6.25rem] tracking-[0.06rem] leading-[1.08]',
      sm: 'text-[2.5rem] md:text-[2.813rem] lg:text-[3.438rem] leading-[1.1]',
    },
  },
  defaultVariants: {
    marginBottom: 'base',
    size: 'base',
  },
});
function H1({
  children,
  className,
  marginBottom,
  size,
  ...props
}: HeadingProps & VariantProps<typeof heading1Variant>) {
  return (
    <h1
      {...props}
      className={cn(heading1Variant({ marginBottom, size }), className)}
    >
      {children}
    </h1>
  );
}

const headingVariant = cva('mt-0 ml-0 mr-0 p-0', {
  variants: {
    marginBottom: {
      none: 'mb-0',
      xs: 'mb-1',
      sm: 'mb-2',
      base: 'mb-3 md:mb-4',
      lg: 'mb-5',
      xl: 'mb-6',
    },
  },
  defaultVariants: {
    marginBottom: 'base',
  },
});
function H2({
  children,
  className,
  marginBottom,
  ...props
}: HeadingProps & VariantProps<typeof headingVariant>) {
  return (
    <h2
      {...props}
      className={cn(
        'text-[2.5rem] md:text-[2.813rem] lg:text-[3.438rem] font-bold leading-[1.1]',
        headingVariant({ marginBottom }),
        className,
      )}
    >
      {children}
    </h2>
  );
}

function H3({
  children,
  className,
  marginBottom,
  ...props
}: HeadingProps & VariantProps<typeof headingVariant>) {
  return (
    <h3
      {...props}
      className={cn(
        'text-[1.875rem] md:text-[2.188rem] font-semibold leading-[1.15]',
        headingVariant({ marginBottom }),
        className,
      )}
    >
      {children}
    </h3>
  );
}

function H4({
  children,
  className,
  marginBottom,
  ...props
}: HeadingProps & VariantProps<typeof headingVariant>) {
  return (
    <h4
      {...props}
      className={cn(
        'text-[1.563rem] md:text-[2.188rem] font-normal leading-[1.15]',
        headingVariant({ marginBottom }),
        className,
      )}
    >
      {children}
    </h4>
  );
}

function H5({
  children,
  className,
  marginBottom,
  ...props
}: HeadingProps & VariantProps<typeof headingVariant>) {
  return (
    <h5
      {...props}
      className={cn(
        'text-[1.25rem] md:text-[1.563rem] font-normal leading-[1.15]',
        headingVariant({ marginBottom }),
        className,
      )}
    >
      {children}
    </h5>
  );
}

function H6({
  children,
  className,
  marginBottom,
  ...props
}: HeadingProps & VariantProps<typeof headingVariant>) {
  return (
    <h6
      {...props}
      className={cn(
        'text-base font-bold leading-[1.15] uppercase',
        headingVariant({ marginBottom }),
        className,
      )}
    >
      {children}
    </h6>
  );
}

function Cite({
  children,
  className,
  marginBottom,
  ...props
}: HeadingProps & VariantProps<typeof headingVariant>) {
  return (
    <cite
      {...props}
      className={cn(
        'text-xl md:text-2xl leading-[1.1] block font-normal',
        headingVariant({ marginBottom }),
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
        'font-mono mt-0 text-base bg-primary-gray-200 dark:bg-primary-gray-600 px-2 pb-2 text-primary-black dark:text-primary-white',
        className,
      )}
    >
      {children}
    </code>
  );
}

function Blockquote({
  children,
  className,
  marginBottom,
  ...props
}: HeadingProps & VariantProps<typeof headingVariant>) {
  return (
    <code
      {...props}
      className={cn(
        'text-[1.625rem] md:text-[2.188rem] font-semibold leading-[1.1] md:leading-[1.25]',
        headingVariant({ marginBottom }),
        className,
      )}
    >
      {children}
    </code>
  );
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

function A({ children, className, ...props }: LinkProps) {
  return (
    <a
      {...props}
      className={cn(
        'undp-link light text-primary-black dark:text-primary-white dark:text-primary-white bg-double-red dark:bg-double-white',
        'cursor-pointer no-underline focus-visible:outline-none focus-visible:shadow-[0_0_0_#0468b1]',
        className,
      )}
    >
      {children}
    </a>
  );
}

export { H1, H2, H3, H4, H5, H6, Cite, Code, Blockquote, P, A };
