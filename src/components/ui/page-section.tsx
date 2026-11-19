import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const pageSectionVariants = cva('mx-auto w-full px-4 py-24 sm:px-8 lg:px-12 xl:px-24 2xl:px-32', {
  variants: {
    backgroundColor: {
      transparent: 'bg-transparent',
      background: 'bg-background',
      'background-soft': 'bg-background-soft',
      foreground: 'bg-foreground text-content-reverse',
      'foreground-soft': 'bg-foreground-soft text-content-reverse',
      surface: 'bg-surface',
      'surface-2xs': 'bg-surface-2xs',
      'surface-xs': 'bg-surface-xs',
      'surface-sm': 'bg-surface-sm',
      'surface-md': 'bg-surface-md',
      'surface-lg': 'bg-surface-lg',
      'surface-xl': 'bg-surface-xl text-content-reverse',
      'surface-2xl': 'bg-surface-2xl text-content-reverse',
      'surface-3xl': 'bg-surface-3xl text-content-reverse',
      'surface-4xl': 'bg-surface-4xl text-content-reverse',
      primary: 'bg-primary text-content-reverse',
      secondary: 'bg-secondary text-content-reverse',
      tertiary: 'bg-tertiary text-content-reverse',
      quaternary: 'bg-quaternary text-content-reverse',
    },
  },
  defaultVariants: {
    backgroundColor: 'background',
  },
});
interface PageSectionProps extends HTMLAttributes<HTMLDivElement> {
  containerClassName?: string;
  backgroundColor?: VariantProps<typeof pageSectionVariants>['backgroundColor'];
  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export const PageSection = forwardRef<HTMLDivElement, PageSectionProps>(
  ({ className, containerClassName, backgroundColor, containerProps, children, ...props }, ref) => (
    <div ref={ref} className={cn(pageSectionVariants({ backgroundColor }), className)} {...props}>
      <div
        {...containerProps}
        className={cn(
          'mx-auto w-full max-w-[1920px]',
          containerProps?.className,
          containerClassName,
        )}
      >
        {children}
      </div>
    </div>
  ),
);

PageSection.displayName = 'PageSection';
