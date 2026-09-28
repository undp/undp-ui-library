/** biome-ignore-all lint/a11y/noStaticElementInteractions: For carousel makes sense that outer div is not button but a div */
import { cva, type VariantProps } from 'class-variance-authority';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const ARROW_RIGHT =
  'url(https://cdn.jsdelivr.net/npm/@undp/design-system-assets/images/arrow-right.svg)';
const ARROW_LEFT =
  'url(https://cdn.jsdelivr.net/npm/@undp/design-system-assets/images/arrow-left.svg)';

const INTERACTIVE = 'a, button, input, select, textarea, label, [role="button"]';

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  showScroll?: boolean;
}
const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, showScroll = true, children, ...props }, ref) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
    const [cursor, setCursor] = React.useState(
      'url(https://cdn.jsdelivr.net/npm/@undp/design-system-assets/images/arrow-right.svg)',
    );
    const onScroll = useCallback(() => {
      if (!emblaApi) return;

      setScrollProgress(emblaApi.scrollProgress());
    }, [emblaApi]);

    useEffect(() => {
      if (!emblaApi) return;
      onScroll();
      emblaApi.on('reInit', onScroll).on('scroll', onScroll);
      return () => {
        emblaApi.off('reInit', onScroll).off('scroll', onScroll);
      };
    }, [emblaApi, onScroll]);

    const isRightHalf = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      return e.clientX > rect.left + rect.width / 2;
    };
    const count = emblaApi?.scrollSnapList().length ?? 1;
    return (
      <>
        <div
          ref={emblaRef}
          className={cn('mr-auto mb-0 ml-auto flex w-full overflow-x-hidden', className)}
          {...props}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') {
              e.preventDefault();
              emblaApi?.scrollNext();
            }
            if (e.key === 'ArrowLeft') {
              e.preventDefault();
              emblaApi?.scrollPrev();
            }
          }}
          onClick={(e) => {
            if (!emblaApi) return;
            if ((e.target as HTMLElement).closest(INTERACTIVE)) return;
            if (isRightHalf(e)) emblaApi.scrollNext();
            else emblaApi.scrollPrev();
          }}
          onMouseMove={(e) => setCursor(isRightHalf(e) ? ARROW_RIGHT : ARROW_LEFT)}
        >
          <div
            ref={ref}
            className='flex w-full touch-pan-y items-stretch gap-4'
            style={{ cursor: `${cursor}, auto` }}
          >
            {children}
          </div>
        </div>
        {showScroll && (
          <div className='relative mt-4 h-2 w-full overflow-hidden'>
            <div className='mt-0.75 h-0.5 w-full bg-foreground-soft' />
            <div
              className='absolute top-0 left-0 h-full bg-foreground'
              style={{
                width: `${100 / count}%`,
                transform: `translateX(${Math.max(0, Math.min(1, scrollProgress)) * (count - 1) * 100}%)`,
              }}
            />
          </div>
        )}
      </>
    );
  },
);
Carousel.displayName = 'Carousel';

const cardVariants = cva('shrink-0 min-w-80 shrink-0 grow-0', {
  variants: {
    size: {
      xs: 'basis-1/4',
      sm: 'basis-1/3',
      base: 'basis-1/2',
      lg: 'basis-2/3',
      xl: 'basis-[calc(100%-80px)]',
      full: 'basis-full',
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
