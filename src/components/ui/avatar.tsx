import { cva, type VariantProps } from 'class-variance-authority';
import { Avatar as AvatarPrimitive } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

function Avatar({
  className,
  size = 'default',
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: 'default' | 'sm' | 'lg';
}) {
  return (
    <AvatarPrimitive.Root
      data-slot='avatar'
      data-size={size}
      className={cn(
        'group/avatar relative flex size-8 shrink-0 select-none rounded-full after:absolute after:inset-0 after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6',
        className,
      )}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot='avatar-image'
      className={cn('aspect-square size-full rounded-full object-cover', className)}
      {...props}
    />
  );
}

const avatarColorVariants = cva(
  'flex size-full items-center justify-center rounded-full border-0 text-sm group-data-[size=sm]/avatar:text-xs',
  {
    variants: {
      color: {
        transparent: 'bg-transparent text-content-primary border border-stroke',
        background: 'bg-background text-content-primary border border-stroke',
        'background-soft': 'bg-background-soft text-content-primary border border-stroke',
        foreground: 'bg-foreground text-content-reverse',
        'foreground-soft': 'bg-foreground-soft text-content-reverse',
        primary: 'bg-primary text-content-reverse',
        secondary: 'bg-secondary text-content-reverse',
        tertiary: 'bg-tertiary text-content-reverse',
        quaternary: 'bg-quaternary text-content-primary',
        success: 'bg-success text-content-reverse',
        warning: 'bg-warning text-content-primary',
        info: 'bg-info text-content-reverse',
        error: 'bg-error text-content-reverse',
        surface: 'bg-surface text-content-primary border border-stroke',
        'surface-2xs': 'bg-surface-2xs text-content-primary',
        'surface-xs': 'bg-surface-xs text-content-primary',
        'surface-sm': 'bg-surface-sm text-content-primary',
        'surface-md': 'bg-surface-md text-content-primary',
        'surface-lg': 'bg-surface-lg text-content-primary',
        'surface-xl': 'bg-surface-xl text-content-reverse',
        'surface-2xl': 'bg-surface-2xl text-content-reverse',
        'surface-3xl': 'bg-surface-3xl text-content-reverse',
        'surface-4xl': 'bg-surface-4xl text-content-reverse',
        'sgd-1': 'bg-sdg-1 text-content-reverse',
        'sgd-2': 'bg-sdg-2 text-content-reverse',
        'sgd-3': 'bg-sdg-3 text-content-reverse',
        'sgd-4': 'bg-sdg-4 text-content-reverse',
        'sgd-5': 'bg-sdg-5 text-content-reverse',
        'sgd-6': 'bg-sdg-6 text-content-reverse',
        'sgd-7': 'bg-sdg-7 text-content-reverse',
        'sgd-8': 'bg-sdg-8 text-content-reverse',
        'sgd-9': 'bg-sdg-9 text-content-reverse',
        'sgd-10': 'bg-sdg-10 text-content-reverse',
        'sgd-11': 'bg-sdg-11 text-content-reverse',
        'sgd-12': 'bg-sdg-12 text-content-reverse',
        'sgd-13': 'bg-sdg-13 text-content-reverse',
        'sgd-14': 'bg-sdg-14 text-content-reverse',
        'sgd-15': 'bg-sdg-15 text-content-reverse',
        'sgd-16': 'bg-sdg-16 text-content-reverse',
        'sgd-17': 'bg-sdg-17 text-content-reverse',
      },
      border: {
        true: 'border border-stroke',
        false: '',
      },
    },
    defaultVariants: {
      color: 'surface',
      border: true,
    },
  },
);

function AvatarFallback({
  className,
  color,
  border,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback> &
  VariantProps<typeof avatarColorVariants>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot='avatar-fallback'
      className={cn(avatarColorVariants({ color, border }), className)}
      {...props}
    />
  );
}

const avatarBadgeVariants = cva(
  'absolute right-0 bottom-0 z-10 inline-flex select-none items-center justify-center rounded-full text-content-reverse group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2 group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2',
  {
    variants: {
      status: {
        available: 'bg-success',
        idle: 'bg-warning-hover',
        offline: 'bg-background border-2 border-stroke-hard',
        busy: 'bg-error',
      },
    },
    defaultVariants: {
      status: 'available',
    },
  },
);

function AvatarBadge({
  className,
  status,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof avatarBadgeVariants>) {
  return (
    <span
      data-slot='avatar-badge'
      className={cn(avatarBadgeVariants({ status }), className)}
      {...props}
    />
  );
}

function AvatarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='avatar-group'
      className={cn('group/avatar-group flex -space-x-2', className)}
      {...props}
    />
  );
}

function AvatarGroupCount({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='avatar-group-count'
      className={cn(
        'relative flex size-8 shrink-0 items-center justify-center rounded-full bg-surface text-content-secondary text-sm group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3',
        className,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage };
