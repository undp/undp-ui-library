import { cva, type VariantProps } from 'class-variance-authority';
import { Slot as SlotPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

function BubbleGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='bubble-group'
      className={cn('flex min-w-0 flex-col gap-2', className)}
      {...props}
    />
  );
}
const bubbleVariants = cva(
  'group/bubble relative flex w-fit max-w-[80%] min-w-0 flex-col gap-1 group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full',
  {
    variants: {
      variant: {
        primary:
          '*:data-[slot=bubble-content]:bg-(--bubble) *:data-[slot=bubble-content]:text-(--buble-ink) [&>[data-slot=bubble-content]:is(button,a):hover]:bg-(--bubble-hover)',
        outline:
          '*:data-[slot=bubble-content]:bg-transparent *:data-[slot=bubble-content]:border *:data-[slot=bubble-content]:border-(--bubble) *:data-[slot=bubble-content]:text-(--bubble)',
      },
      color: {
        primary:
          '[--bubble:var(--color-primary)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-primary-hover)]',
        secondary:
          '[--bubble:var(--color-secondary)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-secondary-hover)]',
        tertiary:
          '[--bubble:var(--color-tertiary)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-tertiary-hover)]',
        quaternary:
          '[--bubble:var(--color-quaternary)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-quaternary-hover)]',

        success:
          '[--bubble:var(--color-success)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-success-hover)]',
        warning:
          '[--bubble:var(--color-warning)] [--buble-ink:var(--color-content-primary)] [--bubble-hover:var(--color-warning-hover)]',
        info: '[--bubble:var(--color-info)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-info-hover)]',
        error:
          '[--bubble:var(--color-error)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-error-hover)]',

        surface:
          '[--bubble:var(--color-surface)] [--buble-ink:var(--color-content-primary)] [--bubble-hover:var(--color-surface-hover)]',
        'surface-2xs':
          '[--bubble:var(--color-surface-2xs)] [--buble-ink:var(--color-content-primary)] [--bubble-hover:var(--color-surface-xs)]',
        'surface-xs':
          '[--bubble:var(--color-surface-xs)] [--buble-ink:var(--color-content-primary)] [--bubble-hover:var(--color-surface-sm)]',
        'surface-sm':
          '[--bubble:var(--color-surface-sm)] [--buble-ink:var(--color-content-primary)] [--bubble-hover:var(--color-surface-md)]',
        'surface-md':
          '[--bubble:var(--color-surface-md)] [--buble-ink:var(--color-content-primary)] [--bubble-hover:var(--color-surface-lg)]',
        'surface-lg':
          '[--bubble:var(--color-surface-lg)] [--buble-ink:var(--color-content-primary)] [--bubble-hover:var(--color-surface-xl)]',
        'surface-xl':
          '[--bubble:var(--color-surface-xl)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-surface-2xl)]',
        'surface-2xl':
          '[--bubble:var(--color-surface-2xl)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-surface-3xl)]',
        'surface-3xl':
          '[--bubble:var(--color-surface-3xl)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-surface-4xl)]',
        'surface-4xl':
          '[--bubble:var(--color-surface-4xl)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-surface-4xl)]',

        red: '[--bubble:var(--color-accent-red)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-accent-red-hover)]',
        orange:
          '[--bubble:var(--color-accent-orange)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-accent-orange-hover)]',
        yellow:
          '[--bubble:var(--color-accent-yellow)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-accent-yellow-hover)]',
        lime: '[--bubble:var(--color-accent-lime)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-accent-lime-hover)]',
        green:
          '[--bubble:var(--color-accent-green)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-accent-green-hover)]',
        teal: '[--bubble:var(--color-accent-teal)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-accent-teal-hover)]',
        azure:
          '[--bubble:var(--color-accent-azure)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-accent-azure-hover)]',
        blue: '[--bubble:var(--color-accent-blue)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-accent-blue-hover)]',
        violet:
          '[--bubble:var(--color-accent-violet)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-accent-violet-hover)]',
        pink: '[--bubble:var(--color-accent-pink)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-accent-pink-hover)]',

        'sdg-1':
          '[--bubble:var(--color-sdg-1)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-1-hover)]',
        'sdg-2':
          '[--bubble:var(--color-sdg-2)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-2-hover)]',
        'sdg-3':
          '[--bubble:var(--color-sdg-3)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-3-hover)]',
        'sdg-4':
          '[--bubble:var(--color-sdg-4)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-4-hover)]',
        'sdg-5':
          '[--bubble:var(--color-sdg-5)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-5-hover)]',
        'sdg-6':
          '[--bubble:var(--color-sdg-6)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-6-hover)]',
        'sdg-7':
          '[--bubble:var(--color-sdg-7)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-7-hover)]',
        'sdg-8':
          '[--bubble:var(--color-sdg-8)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-8-hover)]',
        'sdg-9':
          '[--bubble:var(--color-sdg-9)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-9-hover)]',
        'sdg-10':
          '[--bubble:var(--color-sdg-10)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-10-hover)]',
        'sdg-11':
          '[--bubble:var(--color-sdg-11)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-11-hover)]',
        'sdg-12':
          '[--bubble:var(--color-sdg-12)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-12-hover)]',
        'sdg-13':
          '[--bubble:var(--color-sdg-13)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-13-hover)]',
        'sdg-15':
          '[--bubble:var(--color-sdg-15)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-15-hover)]',
        'sdg-16':
          '[--bubble:var(--color-sdg-16)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-16-hover)]',
        'sdg-17':
          '[--bubble:var(--color-sdg-17)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-sdg-17-hover)]',

        male: '[--bubble:var(--color-categorical-male)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-categorical-male-hover)]',
        female:
          '[--bubble:var(--color-categorical-female)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-categorical-female-hover)]',
        urban:
          '[--bubble:var(--color-categorical-urban)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-categorical-urban-hover)]',
        rural:
          '[--bubble:var(--color-categorical-rural)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-categorical-rural-hover)]',
        child:
          '[--bubble:var(--color-categorical-child)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-categorical-child-hover)]',
        adolescent:
          '[--bubble:var(--color-categorical-adolescent)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-categorical-adolescent-hover)]',
        'young-adult':
          '[--bubble:var(--color-categorical-young-adult)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-categorical-young-adult-hover)]',
        adult:
          '[--bubble:var(--color-categorical-adult)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-categorical-adult-hover)]',
        'older-adult':
          '[--bubble:var(--color-categorical-older-adult)] [--buble-ink:var(--color-content-reverse)] [--bubble-hover:var(--color-categorical-older-adult-hover)]',
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
    },
    defaultVariants: {
      variant: 'primary',
      color: 'primary',
      rounded: 'full',
    },
  },
);
function Bubble({
  variant,
  align = 'start',
  className,
  color,
  rounded,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof bubbleVariants> & {
    align?: 'start' | 'end';
  }) {
  return (
    <div
      data-slot='bubble'
      data-variant={variant}
      data-align={align}
      className={cn(bubbleVariants({ variant, color, rounded }), className)}
      {...props}
    />
  );
}
function BubbleContent({
  asChild = false,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? SlotPrimitive.Slot : 'div';
  return (
    <Comp
      data-slot='bubble-content'
      className={cn(
        'wrap-break-word w-fit min-w-0 max-w-full overflow-hidden rounded-3xl border border-transparent px-3 py-2.5 text-sm leading-lg group-data-[align=end]/bubble:self-end [button,a]:outline-none [button,a]:transition-colors [button,a]:focus-visible:border-ring [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-ring/30 [button]:text-left',
        className,
      )}
      {...props}
    />
  );
}
const bubbleReactionsVariants = cva(
  'absolute z-10 flex w-fit shrink-0 items-center justify-center gap-1 rounded-full bg-surface border border-stroke px-1.5 py-0.5 text-sm has-[button]:p-0',
  {
    variants: {
      side: {
        top: 'top-0 -translate-y-3/4',
        bottom: 'bottom-0 translate-y-3/4',
      },
      align: {
        start: 'left-3',
        end: 'right-3',
      },
    },
    defaultVariants: {
      side: 'bottom',
      align: 'end',
    },
  },
);
function BubbleReactions({
  side = 'bottom',
  align = 'end',
  className,
  ...props
}: React.ComponentProps<'div'> & {
  align?: 'start' | 'end';
  side?: 'top' | 'bottom';
}) {
  return (
    <div
      data-slot='bubble-reactions'
      data-align={align}
      data-side={side}
      className={cn(bubbleReactionsVariants({ side, align }), className)}
      {...props}
    />
  );
}

export { Bubble, BubbleContent, BubbleGroup, BubbleReactions };
