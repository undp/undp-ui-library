import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center px-2.5 py-0.5 font-normal transition-colors focus:outline-hidden',
  {
    variants: {
      variant: {
        primary: 'bg-(--badge) text-(--badge-ink)',
        outline: 'bg-transparent border-1 border-(--badge-outline) text-(--badge-outline)',
      },
      color: {
        background:
          '[--badge:var(--color-background)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-background)]',
        surface:
          '[--badge:var(--color-surface)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-surface)]',
        'surface-2xs':
          '[--badge:var(--color-surface-2xs)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-surface-2xs)]',
        'surface-xs':
          '[--badge:var(--color-surface-xs)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-surface-xs)]',
        'surface-sm':
          '[--badge:var(--color-surface-sm)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-surface-sm)]',
        'surface-md':
          '[--badge:var(--color-surface-md)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-surface-md)]',
        'surface-lg':
          '[--badge:var(--color-surface-lg)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-surface-lg)]',
        'surface-xl':
          '[--badge:var(--color-surface-xl)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-surface-xl)]',
        'surface-2xl':
          '[--badge:var(--color-surface-2xl)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-surface-2xl)]',
        'surface-3xl':
          '[--badge:var(--color-surface-3xl)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-surface-3xl)]',
        'surface-4xl':
          '[--badge:var(--color-surface-4xl)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-surface-4xl)]',
        foreground:
          '[--badge:var(--color-foreground)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-foreground)]',

        primary:
          '[--badge:var(--color-primary-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-primary)]',
        secondary:
          '[--badge:var(--color-secondary-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-secondary)]',
        tertiary:
          '[--badge:var(--color-tertiary-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-tertiary)]',
        quaternary:
          '[--badge:var(--color-quaternary-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-quaternary)]',

        warning:
          '[--badge:var(--color-warning-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-warning)]',
        success:
          '[--badge:var(--color-success-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-success)]',
        error:
          '[--badge:var(--color-error-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-error)]',
        info: '[--badge:var(--color-info-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-info)]',

        red: '[--badge:var(--color-accent-red-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-accent-red)]',
        orange:
          '[--badge:var(--color-accent-orange-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-accent-orange)]',
        yellow:
          '[--badge:var(--color-accent-yellow-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-accent-yellow)]',
        lime: '[--badge:var(--color-accent-lime-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-accent-lime)]',
        green:
          '[--badge:var(--color-accent-green-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-accent-green)]',
        teal: '[--badge:var(--color-accent-teal-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-accent-teal)]',
        azure:
          '[--badge:var(--color-accent-azure-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-accent-azure)]',
        blue: '[--badge:var(--color-accent-blue-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-accent-blue)]',
        violet:
          '[--badge:var(--color-accent-violet-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-accent-violet)]',
        pink: '[--badge:var(--color-accent-pink-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-accent-pink)]',

        'sdg-1':
          '[--badge:var(--color-sdg-1)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-1)]',
        'sdg-2':
          '[--badge:var(--color-sdg-2)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-2)]',
        'sdg-3':
          '[--badge:var(--color-sdg-3)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-3)]',
        'sdg-4':
          '[--badge:var(--color-sdg-4)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-4)]',
        'sdg-5':
          '[--badge:var(--color-sdg-5)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-5)]',
        'sdg-6':
          '[--badge:var(--color-sdg-6)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-6)]',
        'sdg-7':
          '[--badge:var(--color-sdg-7)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-7)]',
        'sdg-8':
          '[--badge:var(--color-sdg-8)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-8)]',
        'sdg-9':
          '[--badge:var(--color-sdg-9)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-9)]',
        'sdg-10':
          '[--badge:var(--color-sdg-10)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-10)]',
        'sdg-11':
          '[--badge:var(--color-sdg-11)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-11)]',
        'sdg-12':
          '[--badge:var(--color-sdg-12)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-12)]',
        'sdg-13':
          '[--badge:var(--color-sdg-13)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-13)]',
        'sdg-14':
          '[--badge:var(--color-sdg-14)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-14)]',
        'sdg-15':
          '[--badge:var(--color-sdg-15)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-15)]',
        'sdg-16':
          '[--badge:var(--color-sdg-16)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-16)]',
        'sdg-17':
          '[--badge:var(--color-sdg-17)] [--badge-ink:var(--color-content-reverse)] [--badge-outline:var(--color-sdg-17)]',

        male: '[--badge:var(--color-categorical-male-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-categorical-male)]',
        female:
          '[--badge:var(--color-categorical-female-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-categorical-female)]',
        urban:
          '[--badge:var(--color-categorical-urban-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-categorical-urban)]',
        rural:
          '[--badge:var(--color-categorical-rural-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-categorical-rural)]',
        child:
          '[--badge:var(--color-categorical-child-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-categorical-child)]',
        adolescent:
          '[--badge:var(--color-categorical-adolescent-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-categorical-adolescent)]',
        'young-adult':
          '[--badge:var(--color-categorical-young-adult-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-categorical-young-adult)]',
        adult:
          '[--badge:var(--color-categorical-adult-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-categorical-adult)]',
        'older-adult':
          '[--badge:var(--color-categorical-older-adult-light)] [--badge-ink:var(--color-content-primary)] [--badge-outline:var(--color-categorical-older-adult)]',
      },
      rounded: {
        base: 'rounded',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        full: 'rounded-full',
      },
      size: {
        base: 'text-base',
        sm: 'text-sm',
        xs: 'text-xs',
        lg: 'text-lg',
        xl: 'text-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      color: 'primary',
      size: 'base',
      rounded: 'full',
    },
  },
);

function Badge({
  className,
  rounded,
  variant,
  color,
  size,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return (
    <div {...props} className={cn(badgeVariants({ variant, rounded, size, color }), className)} />
  );
}

export { Badge };
