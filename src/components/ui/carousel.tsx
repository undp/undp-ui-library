/** biome-ignore-all lint/a11y/noStaticElementInteractions: For carousel makes sense that outer div is not button but a div */
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/lib/utils';

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const WrapperRef = React.useRef<HTMLDivElement>(null);
    const [cursor, setCursor] = React.useState(
      'url(https://cdn.jsdelivr.net/npm/@undp/design-system-assets/images/arrow-right.svg)',
    );
    return (
      <div
        ref={WrapperRef}
        className={cn(
          'undp-scrollbar mr-auto mb-0 ml-auto flex w-full snap-x snap-mandatory scroll-p-0 scroll-pl-0 overflow-x-auto pb-4',
          className,
        )}
        {...props}
        onKeyDown={(e) => {
          if (!WrapperRef.current) return;

          if (e.key === 'ArrowRight') {
            WrapperRef.current.scrollBy(280, 0);
          }

          if (e.key === 'ArrowLeft') {
            WrapperRef.current.scrollBy(-280, 0);
          }
        }}
        onClick={(e) => {
          if (WrapperRef.current) {
            if (e.clientX > window.innerWidth / 2) WrapperRef.current.scrollBy(280, 0);
            else WrapperRef.current.scrollBy(-280, 0);
          }
        }}
        onMouseMove={(e) => {
          if (e.clientX > window.innerWidth / 2)
            setCursor(
              'url(https://cdn.jsdelivr.net/npm/@undp/design-system-assets/images/arrow-right.svg)',
            );
          else
            setCursor(
              'url(https://cdn.jsdelivr.net/npm/@undp/design-system-assets/images/arrow-left.svg)',
            );
        }}
      >
        <div
          ref={ref}
          className='flex w-full items-stretch gap-4'
          style={{ cursor: `${cursor}, auto` }}
        >
          {children}
        </div>
      </div>
    );
  },
);
Carousel.displayName = 'Carousel';

const cardVariants = cva('shrink-0 min-w-[320px] snap-start', {
  variants: {
    size: {
      xs: 'w-1/4 snap-start',
      sm: 'w-1/3 snap-start',
      base: 'w-1/2 snap-start',
      lg: 'w-2/3 snap-start',
      xl: 'w-[calc(100%-80px)] snap-start',
      full: 'w-full snap-start',
    },
  },
  defaultVariants: { size: 'sm' },
});
const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ className, size, ...props }, ref) => (
  <div ref={ref} className={cn(cardVariants({ size }), className)} {...props} />
));
CarouselItem.displayName = 'CarouselItem';

export { Carousel, CarouselItem };
