import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import type * as React from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'cursor-pointer group/btn m-0! tracking-[0.48px] inline-flex items-center justify-center gap-2 uppercase whitespace-nowrap rounded font-bold transition-colors focus-visible:outline-hidden focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:[&_.button-arrow]:translate-x-[70%] group-hover:[&_.button-arrow]:translate-x-[70%] rtl:hover:[&_.button-arrow]:-translate-x-[70%] rtl:group-hover:[&_.button-arrow]:-translate-x-[70%] disabled:hover:[&_.button-arrow]:translate-x-0 disabled:group-hover:[&_.button-arrow]:translate-x-0',
  {
    variants: {
      variant: {
        primary: 'bg-(--btn) text-(--btn-ink) hover:bg-(--btn-hover)',
        outline: 'bg-transparent border-2 border-(--btn) text-(--btn) hover:bg-foreground/2',
        icon: 'bg-(--btn) text-(--btn-ink) hover:bg-(--btn-hover)',
        text: 'text-(--btn) bg-transparent hover:text-(--btn-hover)',
        link: 'bg-transparent text-content-primary [&_.button-end-icon]:text-(--btn)',
        'link-reverse': 'bg-transparent text-content-reverse [&_.button-end-icon]:text-(--btn)',
      },
      color: {
        primary:
          '[--btn:var(--color-primary)] [--btn-hover:var(--color-primary-hover)] [--btn-ink:var(--color-content-reverse)]',
        secondary:
          '[--btn:var(--color-secondary)] [--btn-hover:var(--color-secondary-hover)] [--btn-ink:var(--color-content-reverse)]',
        tertiary:
          '[--btn:var(--color-tertiary)] [--btn-hover:var(--color-tertiary-hover)] [--btn-ink:var(--color-content-reverse)]',
        quaternary:
          '[--btn:var(--color-quaternary)] [--btn-hover:var(--color-quaternary-hover)] [--btn-ink:var(--color-content-reverse)]',
        success:
          '[--btn:var(--color-success)] [--btn-hover:var(--color-success-hover)] [--btn-ink:var(--color-content-reverse)]',
        warning:
          '[--btn:var(--color-warning)] [--btn-hover:var(--color-warning-hover)] [--btn-ink:var(--color-content-primary)]',
        info: '[--btn:var(--color-info)] [--btn-hover:var(--color-info-hover)] [--btn-ink:var(--color-content-reverse)]',
        error:
          '[--btn:var(--color-error)] [--btn-hover:var(--color-error-hover)] [--btn-ink:var(--color-content-reverse)]',

        background:
          '[--btn:var(--color-background)] [--btn-hover:var(--color-background-soft)] [--btn-ink:var(--color-content-primary)]',
        surface:
          '[--btn:var(--color-surface)] [--btn-ink:var(--color-content-primary)] [--btn-hover:var(--color-surface-hover)]',
        'surface-2xs':
          '[--btn:var(--color-surface-2xs)] [--btn-ink:var(--color-content-primary)] [--btn-hover:var(--color-surface-xs)]',
        'surface-xs':
          '[--btn:var(--color-surface-xs)] [--btn-ink:var(--color-content-primary)] [--btn-hover:var(--color-surface-sm)]',
        'surface-sm':
          '[--btn:var(--color-surface-sm)] [--btn-ink:var(--color-content-primary)] [--btn-hover:var(--color-surface-md)]',
        'surface-md':
          '[--btn:var(--color-surface-md)] [--btn-ink:var(--color-content-primary)] [--btn-hover:var(--color-surface-lg)]',
        'surface-lg':
          '[--btn:var(--color-surface-lg)] [--btn-ink:var(--color-content-primary)] [--btn-hover:var(--color-surface-xl)]',
        'surface-xl':
          '[--btn:var(--color-surface-xl)] [--btn-ink:var(--color-content-reverse)] [--btn-hover:var(--color-surface-2xl)]',
        'surface-2xl':
          '[--btn:var(--color-surface-2xl)] [--btn-ink:var(--color-content-reverse)] [--btn-hover:var(--color-surface-3xl)]',
        'surface-3xl':
          '[--btn:var(--color-surface-3xl)] [--btn-ink:var(--color-content-reverse)] [--btn-hover:var(--color-surface-4xl)]',
        'surface-4xl':
          '[--btn:var(--color-surface-4xl)] [--btn-ink:var(--color-content-reverse)] [--btn-hover:var(--color-foreground)]',
        foreground:
          '[--btn:var(--color-foreground)] [--btn-hover:var(--color-foreground-soft)] [--btn-ink:var(--color-content-reverse)]',

        red: '[--btn:var(--color-accent-red)] [--btn-hover:var(--color-accent-red-hover)] [--btn-ink:var(--color-content-reverse)]',
        orange:
          '[--btn:var(--color-accent-orange)] [--btn-hover:var(--color-accent-orange-hover)] [--btn-ink:var(--color-content-reverse)]',
        yellow:
          '[--btn:var(--color-accent-yellow)] [--btn-hover:var(--color-accent-yellow-hover)] [--btn-ink:var(--color-content-reverse)]',
        lime: '[--btn:var(--color-accent-lime)] [--btn-hover:var(--color-accent-lime-hover)] [--btn-ink:var(--color-content-reverse)]',
        green:
          '[--btn:var(--color-accent-green)] [--btn-hover:var(--color-accent-green-hover)] [--btn-ink:var(--color-content-reverse)]',
        teal: '[--btn:var(--color-accent-teal)] [--btn-hover:var(--color-accent-teal-hover)] [--btn-ink:var(--color-content-reverse)]',
        azure:
          '[--btn:var(--color-accent-azure)] [--btn-hover:var(--color-accent-azure-hover)] [--btn-ink:var(--color-content-reverse)]',
        blue: '[--btn:var(--color-accent-blue)] [--btn-hover:var(--color-accent-blue-hover)] [--btn-ink:var(--color-content-reverse)]',
        violet:
          '[--btn:var(--color-accent-violet)] [--btn-hover:var(--color-accent-violet-hover)] [--btn-ink:var(--color-content-reverse)]',
        pink: '[--btn:var(--color-accent-pink)] [--btn-hover:var(--color-accent-pink-hover)] [--btn-ink:var(--color-content-reverse)]',

        'sdg-1':
          '[--btn:var(--color-sdg-1)] [--btn-hover:var(--color-sdg-1-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-2':
          '[--btn:var(--color-sdg-2)] [--btn-hover:var(--color-sdg-2-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-3':
          '[--btn:var(--color-sdg-3)] [--btn-hover:var(--color-sdg-3-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-4':
          '[--btn:var(--color-sdg-4)] [--btn-hover:var(--color-sdg-4-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-5':
          '[--btn:var(--color-sdg-5)] [--btn-hover:var(--color-sdg-5-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-6':
          '[--btn:var(--color-sdg-6)] [--btn-hover:var(--color-sdg-6-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-7':
          '[--btn:var(--color-sdg-7)] [--btn-hover:var(--color-sdg-7-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-8':
          '[--btn:var(--color-sdg-8)] [--btn-hover:var(--color-sdg-8-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-9':
          '[--btn:var(--color-sdg-9)] [--btn-hover:var(--color-sdg-9-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-10':
          '[--btn:var(--color-sdg-10)] [--btn-hover:var(--color-sdg-10-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-11':
          '[--btn:var(--color-sdg-11)] [--btn-hover:var(--color-sdg-11-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-12':
          '[--btn:var(--color-sdg-12)] [--btn-hover:var(--color-sdg-12-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-13':
          '[--btn:var(--color-sdg-13)] [--btn-hover:var(--color-sdg-13-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-14':
          '[--btn:var(--color-sdg-14)] [--btn-hover:var(--color-sdg-14-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-15':
          '[--btn:var(--color-sdg-15)] [--btn-hover:var(--color-sdg-15-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-16':
          '[--btn:var(--color-sdg-16)] [--btn-hover:var(--color-sdg-16-hover)] [--btn-ink:var(--color-content-reverse)]',
        'sdg-17':
          '[--btn:var(--color-sdg-17)] [--btn-hover:var(--color-sdg-17-hover)] [--btn-ink:var(--color-content-reverse)]',

        male: '[--btn:var(--color-categorical-male)] [--btn-hover:var(--color-categorical-male-hover)] [--btn-ink:var(--color-content-reverse)]',
        female:
          '[--btn:var(--color-categorical-female)] [--btn-hover:var(--color-categorical-female-hover)] [--btn-ink:var(--color-content-reverse)]',
        urban:
          '[--btn:var(--color-categorical-urban)] [--btn-hover:var(--color-categorical-urban-hover)] [--btn-ink:var(--color-content-reverse)]',
        rural:
          '[--btn:var(--color-categorical-rural)] [--btn-hover:var(--color-categorical-rural-hover)] [--btn-ink:var(--color-content-reverse)]',
        child:
          '[--btn:var(--color-categorical-child)] [--btn-hover:var(--color-categorical-child-hover)] [--btn-ink:var(--color-content-reverse)]',
        adolescent:
          '[--btn:var(--color-categorical-adolescent)] [--btn-hover:var(--color-categorical-adolescent-hover)] [--btn-ink:var(--color-content-reverse)]',
        'young-adult':
          '[--btn:var(--color-categorical-young-adult)] [--btn-hover:var(--color-categorical-young-adult-hover)] [--btn-ink:var(--color-content-reverse)]',
        adult:
          '[--btn:var(--color-categorical-adult)] [--btn-hover:var(--color-categorical-adult-hover)] [--btn-ink:var(--color-content-reverse)]',
        'older-adult':
          '[--btn:var(--color-categorical-older-adult)] [--btn-hover:var(--color-categorical-older-adult-hover)] [--btn-ink:var(--color-content-reverse)]',
      },
      size: {
        base: 'text-base leading-xs',
        xs: 'text-xs leading-xs',
        sm: 'text-sm leading-xs',
        xl: 'text-xl leading-xs',
      },
      rounded: {
        base: 'rounded-base',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
        full: 'rounded-full',
      },
      padding: {
        base: 'py-4 px-6 data-[variant=icon]:py-6 data-[variant=icon-transparent-bg]:py-6',
        sm: 'px-4 py-2 data-[variant=icon]:py-4 data-[variant=icon-transparent-bg]:py-4',
        none: 'py-0 px-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      color: 'primary',
      size: 'base',
      padding: 'base',
      rounded: 'base',
    },
  },
);
function Button({
  className,
  variant = 'primary',
  color,
  size,
  endIcon,
  rounded,
  padding,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    endIcon?: 'arrow' | 'download' | 'external-link' | 'arrow-2' | 'none';
  }) {
  const Comp = asChild ? Slot.Root : 'button';
  const icon = variant?.startsWith('icon')
    ? 'none'
    : (variant === 'primary' || variant?.startsWith('link')) && !endIcon
      ? 'arrow'
      : !variant?.startsWith('link') && endIcon === 'arrow-2'
        ? 'arrow'
        : !endIcon
          ? 'none'
          : endIcon;
  return (
    <Comp
      data-slot='button'
      data-variant={variant}
      data-size={size}
      className={cn(
        buttonVariants({
          variant,
          size,
          rounded,
          padding,
          color: variant?.startsWith('link')
            ? color || 'primary'
            : variant?.startsWith('icon')
              ? color || 'surface-md'
              : color,
        }),
        className,
      )}
      {...props}
    >
      {children}
      {icon === 'arrow' ? (
        <div className='button-end-icon ml-3 h-6 w-3.25 rtl:mr-3 rtl:ml-0 rtl:scale-x-[-1]'>
          <svg
            width='26'
            height='24'
            viewBox='0 0 26 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Chevron right icon</title>
            <g className='translate-x-0 transition-transform duration-200 ease-in-out group-hover/btn:translate-x-1.75 group-hover:translate-x-1.75'>
              <path d='M1 3 L11 11.5L1 21' stroke='currentColor' stroke-width='2' />
            </g>
          </svg>
        </div>
      ) : null}
      {icon === 'arrow-2' ? (
        <div className='button-end-icon ml-3 h-6 rtl:mr-3 rtl:ml-0 rtl:scale-x-[-1]'>
          <svg
            width='93'
            height='24'
            viewBox='0 0 93 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Chevron right icon</title>
            <g className='translate-x-0 transition-transform duration-200 ease-in-out group-hover/btn:translate-x-16.75 group-hover:translate-x-16.75'>
              <path d='M1 3 L11 11.5L1 21' stroke='currentColor' stroke-width='2' />
            </g>
            <g className='scale-x-0 transition-transform duration-200 ease-in-out group-hover/btn:scale-x-100 group-hover:scale-x-100'>
              <path d='M1 11.5L80 11.5' stroke='currentColor' stroke-width='2' />
            </g>
          </svg>
        </div>
      ) : null}
      {icon === 'download' ? (
        <div className='button-end-icon ml-3 h-6 w-6 rtl:mr-3 rtl:ml-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='48'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className={cn('download-icon -mt-3', className)}
          >
            <title>Download icon</title>
            <g className='translate-y-0 transition-transform duration-200 ease-in-out group-hover/btn:-translate-y-2 group-hover:-translate-y-2'>
              <path d='M12 15V3' />
              <path d='m7 10 5 5 5-5' />
            </g>
            <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
          </svg>
        </div>
      ) : null}
      {icon === 'external-link' ? (
        <div className='button-end-icon ml-3 h-6 w-6 rtl:mr-3 rtl:ml-0 rtl:scale-x-[-1]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='48'
            height='48'
            viewBox='0 0 48 48'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className={cn('external-link-icon -mt-4.5', className)}
          >
            <title>External link icon</title>
            <g transform='translate(0,16)'>
              <path d='M16 21V21L2 21V6' />
              <g transform='translate(-3,3)'>
                <g className='translate-x-0 translate-y-0 transition-transform duration-200 ease-in-out group-hover/btn:translate-x-1.5 group-hover:translate-x-1.5 group-hover/btn:-translate-y-1.5 group-hover:-translate-y-1.5'>
                  <path d='m21 3-9 9' />
                  <path d='M15 3h6v6' />
                </g>
              </g>
            </g>
          </svg>
        </div>
      ) : null}
    </Comp>
  );
}

export type ButtonColor = NonNullable<VariantProps<typeof buttonVariants>['color']>;

export { Button, buttonVariants };
