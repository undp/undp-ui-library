import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/lib/utils';

const paragraphVariant = cva('mt-0 ml-0 mr-0', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-p-sm',
      'base-responsive': 'text-p-xs md:text-p-sm lg:text-p',
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

const P = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof paragraphVariant>
>(
  (
    { children, className, size, leading, marginBottom, weight, decoration, alignment, ...props },
    ref,
  ) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(
          paragraphVariant({ size, leading, marginBottom, weight, decoration, alignment }),
          className,
        )}
      >
        {children}
      </p>
    );
  },
);

const heading1Variant = cva('mt-0 ml-0 mr-0 p-0 uppercase font-heading tracking-[0.06rem]', {
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
      base: 'text-h1-xs md:text-h1-sm lg:text-h1',
      sm: 'text-h2-xs md:text-h2-sm lg:text-h2',
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

const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof heading1Variant>
>(({ children, className, marginBottom, size, alignment, ...props }, ref) => (
  <h1
    ref={ref}
    {...props}
    className={cn(heading1Variant({ marginBottom, size, alignment }), className)}
  >
    {children}
  </h1>
));

const heading2Variant = cva('mt-0 ml-0 mr-0 p-0 font-body text-h2-xs md:text-h2-sm lg:text-h2', {
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
});

const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof heading2Variant>
>(({ children, className, marginBottom, weight, alignment, ...props }, ref) => (
  <h2
    ref={ref}
    {...props}
    className={cn(heading2Variant({ marginBottom, weight, alignment }), className)}
  >
    {children}
  </h2>
));

const heading3Variant = cva('mt-0 ml-0 mr-0 p-0 font-body text-h3-xs md:text-h3-sm lg:text-h3', {
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
});

const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof heading3Variant>
>(({ children, className, marginBottom, weight, alignment, ...props }, ref) => (
  <h3
    ref={ref}
    {...props}
    className={cn(heading3Variant({ marginBottom, weight, alignment }), className)}
  >
    {children}
  </h3>
));

const heading4Variant = cva('mt-0 ml-0 mr-0 p-0 font-body text-h4-xs md:text-h4-sm lg:text-h4', {
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
});
const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof heading4Variant>
>(({ children, className, marginBottom, weight, alignment, ...props }, ref) => (
  <h4
    ref={ref}
    {...props}
    className={cn(heading4Variant({ marginBottom, weight, alignment }), className)}
  >
    {children}
  </h4>
));

const heading5Variant = cva('mt-0 ml-0 mr-0 p-0 font-body', {
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
    size: {
      'base-responsive': 'text-h5-xs md:text-h5-sm lg:text-h5',
      base: 'text-h5-xs',
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
  defaultVariants: {
    marginBottom: 'base-responsive',
    weight: 'normal',
    alignment: 'left',
    size: 'base-responsive',
  },
});

const H5 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof heading5Variant>
>(({ children, className, marginBottom, weight, size, alignment, ...props }, ref) => (
  <h5
    ref={ref}
    {...props}
    className={cn(heading5Variant({ marginBottom, weight, alignment, size }), className)}
  >
    {children}
  </h5>
));

const heading6Variant = cva(
  'mt-0 ml-0 mr-0 p-0 font-body text-h6-xs md:text-h6-sm lg:text-h6 uppercase tracking-[0.48px]',
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

const H6 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof heading6Variant>
>(({ children, className, marginBottom, weight, alignment, ...props }, ref) => (
  <h6
    ref={ref}
    {...props}
    className={cn(heading6Variant({ marginBottom, weight, alignment }), className)}
  >
    {children}
  </h6>
));

const citeVariant = cva('mt-0 ml-0 mr-0 block p-0 font-body text-h5-xs md:text-h5-sm lg:text-h5', {
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
const Cite = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & VariantProps<typeof citeVariant>
>(({ children, className, marginBottom, weight, ...props }, ref) => (
  <cite ref={ref} {...props} className={cn(citeVariant({ marginBottom, weight }), className)}>
    {children}
  </cite>
));

const codeVariant = cva(
  'm-0 bg-surface px-1 pb-1 font-mono text-content-primary text-p-xs md:text-p-sm lg:text-p',
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
const Code = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & VariantProps<typeof citeVariant>
>(({ children, className, marginBottom, weight, ...props }, ref) => (
  <code ref={ref} {...props} className={cn(codeVariant({ weight }), className)}>
    {children}
  </code>
));

const blockquoteVariant = cva('m-0 font-body text-h4-xs md:text-h4-sm lg:text-h4', {
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
    weight: 'semibold',
  },
});

const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.QuoteHTMLAttributes<HTMLQuoteElement> & VariantProps<typeof blockquoteVariant>
>(({ children, className, weight, ...props }, ref) => (
  <blockquote ref={ref} {...props} className={cn(blockquoteVariant({ weight }), className)}>
    {children}
  </blockquote>
));

const linkVariant = cva(
  'undp-link light font-inherit text-inherit cursor-pointer no-underline focus-visible:shadow-[0_0_0_var(--ring)] focus-visible:outline-hidden',
  {
    variants: {
      variant: {
        primary: 'bg-double-primary',
        secondary: 'bg-double-secondary',
        tertiary: 'bg-double-tertiary',
        quaternary: 'bg-double-quaternary',
        background: 'bg-double-background',
        foreground: 'bg-double-foreground',
        success: 'bg-double-success',
        warning: 'bg-double-warning',
        info: 'bg-double-info',
        error: 'bg-double-error',
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
    defaultVariants: {
      weight: 'normal',
      variant: 'primary',
    },
  },
);
const A = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof linkVariant>
>(({ children, className, weight, variant, ...props }, ref) => (
  <a ref={ref} {...props} className={cn(linkVariant({ variant, weight }), className)}>
    {children}
  </a>
));

export { A, Blockquote, Cite, Code, H1, H2, H3, H4, H5, H6, P };
