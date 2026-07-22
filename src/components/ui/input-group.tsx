import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const inputGroupVariants = cva(
  'group/input-group relative flex w-full min-w-0 items-stretch outline-none transition-colors in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-start]]:h-auto has-[>textarea]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:flex-col  has-[[data-slot][aria-invalid=true]]:border-error has-disabled:bg-background/50 has-disabled:opacity-disabled has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-error/20 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-start]]:[&>input]:pl-1.5',
  {
    variants: {
      variant: {
        light: 'border border-stroke',
        normal: 'border-2 border-foreground',
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
      variant: 'normal',
      rounded: 'base',
    },
  },
);

function InputGroup({
  className,
  variant,
  rounded,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof inputGroupVariants>) {
  return (
    // biome-ignore lint/a11y/useSemanticElements: This come from shadcn ui
    <div
      data-slot='input-group'
      role='group'
      className={cn(inputGroupVariants({ variant, rounded }), className)}
      {...props}
    />
  );
}

const inputGroupAddonVariants = cva(
  "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        transparent: 'bg-transparent text-content-secondary',
        surface: 'bg-surface text-content-secondary',
        'surface-hard': 'bg-surface-hard text-content-secondary',
        background: 'bg-background text-content-secondary',
        'background-soft': 'bg-background-soft text-content-secondary',
        foreground: 'bg-foreground text-content-reverse',
        'foreground-soft': 'bg-foreground-soft text-content-reverse',
        error: 'bg-error text-content-reverse',
        warning: 'bg-warning text-content-primary',
        info: 'bg-info text-content-reverse',
        success: 'bg-success text-content-reverse',
      },
      align: {
        'inline-start': 'order-first px-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]',
        'inline-end': 'order-last px-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]',
        'block-start':
          'order-first w-full justify-start p-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2',
        'block-end':
          'order-last w-full justify-start p-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2',
      },
    },
    compoundVariants: [
      {
        variant: 'background',
        align: 'inline-start',
        class: 'border-r border-stroke',
      },
      {
        variant: 'background',
        align: 'inline-end',
        class: 'border-l border-stroke',
      },
      {
        variant: 'background',
        align: 'block-start',
        class: 'border-b border-stroke',
      },
      {
        variant: 'background',
        align: 'block-end',
        class: 'border-t border-stroke',
      },
    ],
    defaultVariants: {
      align: 'inline-start',
      variant: 'surface',
    },
  },
);

function InputGroupAddon({
  className,
  align,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: This come from shadcn ui
    // biome-ignore lint/a11y/useSemanticElements: This come from shadcn ui
    <div
      role='group'
      data-slot='input-group-addon'
      data-align={align}
      data-variant={variant}
      className={cn(inputGroupAddonVariants({ align, variant }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('button')) {
          return;
        }
        e.currentTarget.parentElement?.querySelector('input')?.focus();
      }}
      {...props}
    />
  );
}

const inputGroupButtonVariants = cva('flex items-center gap-2 text-sm shadow-none', {
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
      sm: '',
      'icon-xs': 'size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0',
      'icon-sm': 'size-8 p-0 has-[>svg]:p-0',
    },
  },
  defaultVariants: {
    size: 'xs',
  },
});

function InputGroupButton({
  className,
  type = 'button',
  variant = 'icon',
  size = 'xs',
  ...props
}: Omit<React.ComponentProps<typeof Button>, 'size'> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
}

const inputGroupTextVariants = cva(
  "flex items-center gap-2 text-xs [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        primary: 'text-content-primary',
        secondary: 'text-content-secondary',
        tertiary: 'text-content-tertiary',
        quaternary: 'text-content-quaternary',
        reverse: 'text-content-reverse',
        placeholder: 'text-content-placeholder',
        error: 'text-error',
        warning: 'text-warning',
        info: 'text-info',
        success: 'text-success',
      },
    },
    defaultVariants: {
      variant: 'tertiary',
    },
  },
);
function InputGroupText({
  className,
  variant,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof inputGroupTextVariants>) {
  return <span className={cn(inputGroupTextVariants({ variant }), className)} {...props} />;
}

function InputGroupInput({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <Input
      data-slot='input-group-control'
      className={cn(
        'flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0',
        className,
      )}
      {...props}
    />
  );
}

function InputGroupTextarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <Textarea
      data-slot='input-group-control'
      className={cn(
        'flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0',
        className,
      )}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
};
