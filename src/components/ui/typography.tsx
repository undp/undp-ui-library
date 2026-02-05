import React from 'react';
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
      base: 'text-base',
      'base-responsive': 'text-base md:text-xl',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    leading: {
      none: 'leading-none',
      xs: 'leading-[1.25]',
      sm: 'leading-[1.375]',
      base: 'leading-[1.4]',
      lg: 'leading-[1.625]',
      xl: 'leading-[2]',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
    decoration: {
      normal: 'normal',
      italic: 'italic',
      underline: 'underline',
      'line-through': 'line-through',
    },
    marginBottom: {
      none: 'mb-0',
      '3xs': 'mb-1',
      '2xs': 'mb-2',
      xs: 'mb-3',
      sm: 'mb-4',
      base: 'mb-5',
      lg: 'mb-6',
      xl: 'mb-7',
    },
    alignment: {
      left: 'text-left',
      right: 'text-right',
      center: 'text-center',
    },
  },
  defaultVariants: {
    size: 'base-responsive',
    leading: 'base',
    weight: 'normal',
    decoration: 'normal',
    marginBottom: 'base',
    alignment: 'left',
  },
});
function P({
  children,
  className,
  size,
  leading,
  marginBottom,
  weight,
  decoration,
  alignment,
  ...props
}: ParagraphProps & VariantProps<typeof paragraphVariant>) {
  return (
    <p
      {...props}
      className={cn(
        paragraphVariant({ size, leading, marginBottom, weight, decoration, alignment }),
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

const heading1Variant = cva('mt-0 ml-0 mr-0 p-0 uppercase font-heading', {
  variants: {
    marginBottom: {
      none: 'mb-0',
      '2xs': 'mb-1',
      xs: 'mb-2',
      sm: 'mb-3',
      'base-responsive': 'mb-3 md:mb-4',
      base: 'mb-4',
      lg: 'mb-5',
      xl: 'mb-6',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
    size: {
      base: 'text-[2.938rem] md:text-[5.125rem] lg:text-[6.25rem] tracking-[0.06rem] leading-[1.08]',
      sm: 'text-[2.5rem] md:text-[2.813rem] lg:text-[3.438rem] leading-[1.1]',
    },
    alignment: {
      left: 'text-left',
      right: 'text-right',
      center: 'text-center',
    },
  },
  defaultVariants: {
    marginBottom: 'base-responsive',
    size: 'base',
    weight: 'bold',
    alignment: 'left',
  },
});
function H1({
  children,
  className,
  marginBottom,
  size,
  alignment,
  ...props
}: HeadingProps & VariantProps<typeof heading1Variant>) {
  return (
    <h1 {...props} className={cn(heading1Variant({ marginBottom, size, alignment }), className)}>
      {children}
    </h1>
  );
}

const heading2Variant = cva(
  'mt-0 ml-0 mr-0 p-0 text-[2.5rem] md:text-[2.813rem] lg:text-[3.438rem] leading-[1.1] font-sans',
  {
    variants: {
      marginBottom: {
        none: 'mb-0',
        '2xs': 'mb-1',
        xs: 'mb-2',
        sm: 'mb-3',
        'base-responsive': 'mb-3 md:mb-4',
        base: 'mb-4',
        lg: 'mb-5',
        xl: 'mb-6',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
      },
      alignment: {
        left: 'text-left',
        right: 'text-right',
        center: 'text-center',
      },
    },
    defaultVariants: { marginBottom: 'base-responsive', weight: 'bold', alignment: 'left' },
  },
);

function H2({
  children,
  className,
  marginBottom,
  weight,
  alignment,
  ...props
}: HeadingProps & VariantProps<typeof heading2Variant>) {
  return (
    <h2 {...props} className={cn(heading2Variant({ marginBottom, weight, alignment }), className)}>
      {children}
    </h2>
  );
}

const heading3Variant = cva(
  'mt-0 ml-0 mr-0 p-0 text-[1.875rem] md:text-[2.188rem] leading-[1.15] font-sans',
  {
    variants: {
      marginBottom: {
        none: 'mb-0',
        '2xs': 'mb-1',
        xs: 'mb-2',
        sm: 'mb-3',
        'base-responsive': 'mb-3 md:mb-4',
        base: 'mb-4',
        lg: 'mb-5',
        xl: 'mb-6',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
      },
      alignment: {
        left: 'text-left',
        right: 'text-right',
        center: 'text-center',
      },
    },
    defaultVariants: { marginBottom: 'base-responsive', weight: 'semibold', alignment: 'left' },
  },
);
function H3({
  children,
  className,
  marginBottom,
  weight,
  alignment,
  ...props
}: HeadingProps & VariantProps<typeof heading3Variant>) {
  return (
    <h3 {...props} className={cn(heading3Variant({ marginBottom, weight, alignment }), className)}>
      {children}
    </h3>
  );
}

const heading4Variant = cva(
  'mt-0 ml-0 mr-0 p-0 text-[1.563rem] md:text-[2.188rem] leading-[1.15] font-sans',
  {
    variants: {
      marginBottom: {
        none: 'mb-0',
        '2xs': 'mb-1',
        xs: 'mb-2',
        sm: 'mb-3',
        'base-responsive': 'mb-3 md:mb-4',
        base: 'mb-4',
        lg: 'mb-5',
        xl: 'mb-6',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
      },
      alignment: {
        left: 'text-left',
        right: 'text-right',
        center: 'text-center',
      },
    },
    defaultVariants: { marginBottom: 'base-responsive', weight: 'normal', alignment: 'left' },
  },
);
function H4({
  children,
  className,
  marginBottom,
  weight,
  alignment,
  ...props
}: HeadingProps & VariantProps<typeof heading4Variant>) {
  return (
    <h4 {...props} className={cn(heading4Variant({ marginBottom, weight, alignment }), className)}>
      {children}
    </h4>
  );
}
const heading5Variant = cva(
  'mt-0 ml-0 mr-0 p-0 text-[1.25rem] md:text-[1.563rem] leading-[1.15] font-sans',
  {
    variants: {
      marginBottom: {
        none: 'mb-0',
        '2xs': 'mb-1',
        xs: 'mb-2',
        sm: 'mb-3',
        'base-responsive': 'mb-3 md:mb-4',
        base: 'mb-4',
        lg: 'mb-5',
        xl: 'mb-6',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
      },
      alignment: {
        left: 'text-left',
        right: 'text-right',
        center: 'text-center',
      },
    },
    defaultVariants: { marginBottom: 'base-responsive', weight: 'normal', alignment: 'left' },
  },
);

function H5({
  children,
  className,
  marginBottom,
  weight,
  alignment,
  ...props
}: HeadingProps & VariantProps<typeof heading5Variant>) {
  return (
    <h5 {...props} className={cn(heading5Variant({ marginBottom, weight, alignment }), className)}>
      {children}
    </h5>
  );
}
const heading6Variant = cva(
  'mt-0 ml-0 mr-0 p-0 text-base leading-[1.15] uppercase tracking-[0.48px] font-sans',
  {
    variants: {
      marginBottom: {
        none: 'mb-0',
        '2xs': 'mb-1',
        xs: 'mb-2',
        sm: 'mb-3',
        'base-responsive': 'mb-3 md:mb-4',
        base: 'mb-4',
        lg: 'mb-5',
        xl: 'mb-6',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
      },
      alignment: {
        left: 'text-left',
        right: 'text-right',
        center: 'text-center',
      },
    },
    defaultVariants: { marginBottom: 'base-responsive', weight: 'bold', alignment: 'left' },
  },
);

function H6({
  children,
  className,
  marginBottom,
  weight,
  alignment,
  ...props
}: HeadingProps & VariantProps<typeof heading6Variant>) {
  return (
    <h6 {...props} className={cn(heading6Variant({ marginBottom, weight, alignment }), className)}>
      {children}
    </h6>
  );
}

const citeVariant = cva('mt-0 ml-0 mr-0 p-0 text-xl md:text-2xl leading-[1.1] block font-sans', {
  variants: {
    marginBottom: {
      none: 'mb-0',
      '2xs': 'mb-1',
      xs: 'mb-2',
      sm: 'mb-3',
      'base-responsive': 'mb-3 md:mb-4',
      base: 'mb-4',
      lg: 'mb-5',
      xl: 'mb-6',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
  },
  defaultVariants: { marginBottom: 'base-responsive', weight: 'normal' },
});
function Cite({
  children,
  className,
  marginBottom,
  weight,
  ...props
}: HeadingProps & VariantProps<typeof citeVariant>) {
  return (
    <cite {...props} className={cn(citeVariant({ marginBottom, weight }), className)}>
      {children}
    </cite>
  );
}

const codeVariant = cva(
  'mt-0 ml-0 mr-0 font-mono mt-0 text-base bg-primary-gray-200 dark:bg-primary-gray-600 px-2 pb-2 text-primary-black dark:text-primary-white',
  {
    variants: {
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
      },
    },
    defaultVariants: {
      weight: 'normal',
    },
  },
);
function Code({
  children,
  className,
  weight,
  ...props
}: HeadingProps & VariantProps<typeof codeVariant>) {
  return (
    <code {...props} className={cn(codeVariant({ weight }), className)}>
      {children}
    </code>
  );
}

interface BlockquoteProps extends React.HTMLAttributes<HTMLQuoteElement> {
  className?: string;
}

const blockquoteVariant = cva(
  'mt-0 ml-0 mr-0 text-[1.625rem] md:text-[2.188rem] leading-[1.1] md:leading-[1.25] font-sans',
  {
    variants: {
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
      },
    },
    defaultVariants: {
      weight: 'normal',
    },
  },
);

function Blockquote({
  children,
  className,
  weight,
  ...props
}: BlockquoteProps & VariantProps<typeof blockquoteVariant>) {
  return (
    <blockquote {...props} className={cn(blockquoteVariant({ weight }), className)}>
      {children}
    </blockquote>
  );
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
}

function A({ children, className, weight, ...props }: LinkProps) {
  return (
    <a
      {...props}
      className={cn(
        'undp-link light text-primary-black dark:text-primary-white dark:text-primary-white bg-double-red dark:bg-double-white',
        'cursor-pointer no-underline focus-visible:outline-hidden focus-visible:shadow-[0_0_0_#0468b1]',
        weight ? `font-${weight}` : 'font-normal',
        className,
      )}
    >
      {children}
    </a>
  );
}

export { H1, H2, H3, H4, H5, H6, Cite, Code, Blockquote, P, A };
