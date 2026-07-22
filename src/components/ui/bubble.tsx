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
        outline:
          '*:data-[slot=bubble-content]:bg-transparent *:data-[slot=bubble-content]:border *:data-[slot=bubble-content]:border-stroke *:data-[slot=bubble-content]:text-content-primary [&>[data-slot=bubble-content]:is(button,a):hover]:border-stroke-hover',
        error:
          '*:data-[slot=bubble-content]:bg-error *:data-[slot=bubble-content]:text-content-reverse [&>[data-slot=bubble-content]:is(button,a):hover]:bg-error-hover',
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
        'wrap-break-word w-fit min-w-0 max-w-full overflow-hidden rounded-3xl border border-transparent px-3 py-2.5 text-sm leading-relaxed group-data-[align=end]/bubble:self-end [button,a]:outline-none [button,a]:transition-colors [button,a]:focus-visible:border-ring [button,a]:focus-visible:ring-3 [button,a]:focus-visible:ring-ring/30 [button]:text-left',
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
