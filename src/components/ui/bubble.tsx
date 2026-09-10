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
          '*:data-[slot=bubble-content]:bg-primary *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-primary-hover',
        secondary:
          '*:data-[slot=bubble-content]:bg-secondary *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-secondary-hover',
        tertiary:
          '*:data-[slot=bubble-content]:bg-tertiary *:data-[slot=bubble-content]:text-content-primary [&>[data-slot=bubble-content]:is(button,a):hover]:bg-tertiary-hover',
        quaternary:
          '*:data-[slot=bubble-content]:bg-quaternary *:data-[slot=bubble-content]:text-content-primary [&>[data-slot=bubble-content]:is(button,a):hover]:bg-quaternary-hover',

        success:
          '*:data-[slot=bubble-content]:bg-success *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-success-hover',
        warning:
          '*:data-[slot=bubble-content]:bg-warning *:data-[slot=bubble-content]:text-content-primary [&>[data-slot=bubble-content]:is(button,a):hover]:bg-warning-hover',
        info: '*:data-[slot=bubble-content]:bg-info *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-info-hover',
        error:
          '*:data-[slot=bubble-content]:bg-error *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-error-hover',

        outline:
          '*:data-[slot=bubble-content]:bg-transparent *:data-[slot=bubble-content]:border *:data-[slot=bubble-content]:border-stroke *:data-[slot=bubble-content]:text-content-primary [&>[data-slot=bubble-content]:is(button,a):hover]:border-stroke-hover',

        surface:
          '*:data-[slot=bubble-content]:bg-surface *:data-[slot=bubble-content]:text-content-primary [&>[data-slot=bubble-content]:is(button,a):hover]:bg-surface-hover',
        'surface-2xs':
          '*:data-[slot=bubble-content]:bg-surface-2xs *:data-[slot=bubble-content]:text-content-primary [&>[data-slot=bubble-content]:is(button,a):hover]:bg-surface-xs',
        'surface-xs':
          '*:data-[slot=bubble-content]:bg-surface-xs *:data-[slot=bubble-content]:text-content-primary [&>[data-slot=bubble-content]:is(button,a):hover]:bg-surface-sm',
        'surface-sm':
          '*:data-[slot=bubble-content]:bg-surface-sm *:data-[slot=bubble-content]:text-content-primary [&>[data-slot=bubble-content]:is(button,a):hover]:bg-surface-md',
        'surface-md':
          '*:data-[slot=bubble-content]:bg-surface-md *:data-[slot=bubble-content]:text-content-primary [&>[data-slot=bubble-content]:is(button,a):hover]:bg-surface-lg',
        'surface-lg':
          '*:data-[slot=bubble-content]:bg-surface-lg *:data-[slot=bubble-content]:text-content-primary [&>[data-slot=bubble-content]:is(button,a):hover]:bg-surface-xl',
        'surface-xl':
          '*:data-[slot=bubble-content]:bg-surface-xl *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-surface-2xl',
        'surface-2xl':
          '*:data-[slot=bubble-content]:bg-surface-2xl *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-surface-3xl',
        'surface-3xl':
          '*:data-[slot=bubble-content]:bg-surface-3xl *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-surface-4xl',
        'surface-4xl':
          '*:data-[slot=bubble-content]:bg-surface-4xl *:data-[slot=bubble-content]:text-content-reverse',

        red: '*:data-[slot=bubble-content]:bg-accent-red *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-accent-red-hover',
        orange:
          '*:data-[slot=bubble-content]:bg-accent-orange *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-accent-orange-hover',
        yellow:
          '*:data-[slot=bubble-content]:bg-accent-yellow *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-accent-yellow-hover',
        lime: '*:data-[slot=bubble-content]:bg-accent-lime *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-accent-lime-hover',
        green:
          '*:data-[slot=bubble-content]:bg-accent-green *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-accent-green-hover',
        teal: '*:data-[slot=bubble-content]:bg-accent-teal *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-accent-teal-hover',
        azure:
          '*:data-[slot=bubble-content]:bg-accent-azure *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-accent-azure-hover',
        blue: '*:data-[slot=bubble-content]:bg-accent-blue *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-accent-blue-hover',
        violet:
          '*:data-[slot=bubble-content]:bg-accent-violet *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-accent-violet-hover',
        pink: '*:data-[slot=bubble-content]:bg-accent-pink *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-accent-pink-hover',

        'sdg-1':
          '*:data-[slot=bubble-content]:bg-sdg-1 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-1-hover',
        'sdg-2':
          '*:data-[slot=bubble-content]:bg-sdg-2 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-2-hover',
        'sdg-3':
          '*:data-[slot=bubble-content]:bg-sdg-3 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-3-hover',
        'sdg-4':
          '*:data-[slot=bubble-content]:bg-sdg-4 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-4-hover',
        'sdg-5':
          '*:data-[slot=bubble-content]:bg-sdg-5 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-5-hover',
        'sdg-6':
          '*:data-[slot=bubble-content]:bg-sdg-6 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-6-hover',
        'sdg-7':
          '*:data-[slot=bubble-content]:bg-sdg-7 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-7-hover',
        'sdg-8':
          '*:data-[slot=bubble-content]:bg-sdg-8 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-8-hover',
        'sdg-9':
          '*:data-[slot=bubble-content]:bg-sdg-9 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-9-hover',
        'sdg-10':
          '*:data-[slot=bubble-content]:bg-sdg-10 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-10-hover',
        'sdg-11':
          '*:data-[slot=bubble-content]:bg-sdg-11 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-11-hover',
        'sdg-12':
          '*:data-[slot=bubble-content]:bg-sdg-12 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-12-hover',
        'sdg-13':
          '*:data-[slot=bubble-content]:bg-sdg-13 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-13-hover',
        'sdg-15':
          '*:data-[slot=bubble-content]:bg-sdg-15 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-15-hover',
        'sdg-16':
          '*:data-[slot=bubble-content]:bg-sdg-16 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-16-hover',
        'sdg-17':
          '*:data-[slot=bubble-content]:bg-sdg-17 *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-sdg-17-hover',

        male: '*:data-[slot=bubble-content]:bg-categorical-male *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-categorical-male-hover',
        female:
          '*:data-[slot=bubble-content]:bg-categorical-female *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-categorical-female-hover',
        urban:
          '*:data-[slot=bubble-content]:bg-categorical-urban *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-categorical-urban-hover',
        rural:
          '*:data-[slot=bubble-content]:bg-categorical-rural *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-categorical-rural-hover',
        child:
          '*:data-[slot=bubble-content]:bg-categorical-child *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-categorical-child-hover',
        adolescent:
          '*:data-[slot=bubble-content]:bg-categorical-adolescent *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-categorical-adolescent-hover',
        'young-adult':
          '*:data-[slot=bubble-content]:bg-categorical-young-adult *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-categorical-young-adult-hover',
        adult:
          '*:data-[slot=bubble-content]:bg-categorical-adult *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-categorical-adult-hover',
        'older-adult':
          '*:data-[slot=bubble-content]:bg-categorical-older-adult *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-categorical-older-adult-hover',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
function Bubble({
  variant,
  align = 'start',
  className,
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
      className={cn(bubbleVariants({ variant }), className)}
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
