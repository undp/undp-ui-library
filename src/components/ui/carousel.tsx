import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const WrapperRef = React.useRef<HTMLDivElement>(null);
    const [cursor, setCursor] = React.useState(
      'url(https://cdn.jsdelivr.net/npm/@undp/design-system-assets@1.6.1/images/arrow-right.svg)',
    );
    return (
      <div
        ref={WrapperRef}
        className={cn(
          'mr-auto ml-auto mb-0 undp-scrollbar w-full pb-4 flex snap-x snap-mandatory scroll-p-0 scroll-pl-0 overflow-x-auto',
          className,
        )}
        {...props}
        onClick={e => {
          if (WrapperRef.current) {
            if (e.clientX > window.innerWidth / 2) WrapperRef.current.scrollBy(280, 0);
            else WrapperRef.current.scrollBy(-280, 0);
          }
        }}
        onMouseMove={e => {
          if (e.clientX > window.innerWidth / 2)
            setCursor(
              'url(https://cdn.jsdelivr.net/npm/@undp/design-system-assets@1.6.1/images/arrow-right.svg)',
            );
          else
            setCursor(
              'url(https://cdn.jsdelivr.net/npm/@undp/design-system-assets@1.6.1/images/arrow-left.svg)',
            );
        }}
      >
        <div
          ref={ref}
          className='flex gap-4 items-stretch w-full'
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
const CarouselCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ className, size, ...props }, ref) => (
  <div ref={ref} className={cn(cardVariants({ size }), className)} {...props} />
));
CarouselCard.displayName = 'CarouselCard';

export { Carousel, CarouselCard };
