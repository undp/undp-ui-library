import React, { ReactNode, useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { P } from './typography';

import { cn } from '@/lib/utils';

const cardVariants = cva('flex box-border justify-between', {
  variants: {
    vizWidth: {
      xs: 'w-3/4 flex-col pr-0 sm:pr-2 rtl:pr-0 sm:rtl:pl-2 rtl:pl-0 gap-4 min-w-80 grow pb-4',
      sm: 'w-2/3 flex-col pr-0 sm:pr-2 rtl:pr-0 sm:rtl:pl-2 rtl:pl-0 gap-4 min-w-80 grow pb-4',
      base: 'w-1/2 flex-col pr-0 sm:pr-2 rtl:pr-0 sm:rtl:pl-2 rtl:pl-0 gap-4 min-w-80 grow pb-4',
      lg: 'w-1/3 flex-col pr-0 sm:pr-2 rtl:pr-0 sm:rtl:pl-2 rtl:pl-0 gap-4 min-w-80 grow pb-4',
      xl: 'w-1/4 flex-col pr-0 sm:pr-2 rtl:pr-0 sm:rtl:pl-2 rtl:pl-0 gap-4 min-w-80 grow pb-4',
      full: 'w-full shrink-0 items-start gap-x-8 gap-y-4 mb-4 flex-wrap sm:flex-nowrap',
    },
  },
  defaultVariants: { vizWidth: 'base' },
});

const vizContainerVariants = cva('flex box-border grow shrink-0', {
  variants: {
    vizWidth: {
      xs: 'w-1/4 pl-0 sm:pl-2 rtl:pr-0 rtl:pl-0 sm:rtl:pr-2 min-w-80 pb-4',
      sm: 'w-1/3 pl-0 sm:pl-2 rtl:pr-0 rtl:pl-0 sm:rtl:pr-2 min-w-80 pb-4',
      base: 'w-1/2 pl-0 sm:pl-2 rtl:pr-0 rtl:pl-0 sm:rtl:pr-2 min-w-80 pb-4',
      lg: 'w-2/3 pl-0 sm:pl-2 rtl:pr-0 rtl:pl-0 sm:rtl:pr-2 min-w-80 pb-4',
      xl: 'w-3/4 pl-0 sm:pl-2 rtl:pr-0 rtl:pl-0 sm:rtl:pr-2 min-w-80 pb-4',
      full: 'w-full',
    },
  },
  defaultVariants: { vizWidth: 'base' },
});

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  vizStyle?: React.CSSProperties;
  slides: {
    content: ReactNode;
    viz: ReactNode;
  }[];
  contentStyle?: React.CSSProperties;
  contentClassName?: string;
  vizClassName?: string;
  slideNo?: boolean;
}

const VizCarousel = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      vizWidth,
      slides,
      vizStyle,
      contentStyle,
      contentClassName,
      vizClassName,
      slideNo = true,
      ...props
    },
    ref,
  ) => {
    const WrapperRef = React.useRef<HTMLDivElement>(null);
    const [slide, setSlide] = useState(1);
    return (
      <div ref={ref}>
        <div
          ref={WrapperRef}
          className={cn(
            'mr-auto ml-auto mb-0 undp-scrollbar w-full pb-4 gap-6 flex snap-x snap-mandatory scroll-p-0 scroll-pl-0 overflow-x-auto',
            className,
          )}
          {...props}
        >
          {slides.map((d, i) => (
            <div
              key={i}
              className={`flex box-border flex-wrap w-full shrink-0 snap-start ${vizWidth === 'full' ? 'flex-col items-start' : 'flex-row items-stretch'}`}
            >
              <div
                style={contentStyle}
                className={cn(cardVariants({ vizWidth }), contentClassName)}
              >
                <div className='min-w-80 grow sm:grow-0'>{d.content}</div>
                <div className={`flex ${slideNo ? 'gap-2' : 'gap-3'} items-center shrink-0`}>
                  <div
                    className={`rounded-full pr-1 w-9 h-9 md:w-12 md:h-12 border-0 flex items-center justify-center rtl:rotate-180 ${slide === 1 ? 'bg-primary-gray-400 dark:bg-primary-gray-550 cursor-not-allowed' : 'cursor-pointer bg-primary-gray-700 dark:bg-primary-gray-100 hover:bg-primary-gray-600 dark:hover:bg-primary-gray-200'}`}
                    onClick={() => {
                      if (WrapperRef.current && slide !== 1) {
                        const parentWithDir = WrapperRef.current.closest('[dir]');
                        const scrollBy = parentWithDir?.getAttribute('dir') === 'rtl' ? 280 : -280;
                        setSlide(slide - 1);
                        WrapperRef.current.scrollBy(scrollBy, 0);
                      }
                    }}
                  >
                    <ChevronLeft className='w-6 h-6 text-primary-white dark:text-primary-gray-700' />
                  </div>
                  {slideNo ? (
                    <P marginBottom='none' className='px-2 shrink-0'>
                      {slide} / {slides.length}
                    </P>
                  ) : null}
                  <div
                    className={`rounded-full pl-1 w-9 h-9 md:w-12 md:h-12 border-0 flex items-center justify-center rtl:rotate-180 ${slide === slides.length ? 'bg-primary-gray-400 dark:bg-primary-gray-550 cursor-not-allowed' : 'cursor-pointer bg-primary-gray-700 dark:bg-primary-gray-100 hover:bg-primary-gray-600 dark:hover:bg-primary-gray-200'}`}
                    onClick={() => {
                      if (WrapperRef.current && slide !== slides.length) {
                        const parentWithDir = WrapperRef.current.closest('[dir]');
                        const scrollBy = parentWithDir?.getAttribute('dir') === 'rtl' ? -280 : 280;
                        setSlide(slide + 1);
                        WrapperRef.current.scrollBy(scrollBy, 0);
                      }
                    }}
                  >
                    <ChevronRight className='w-6 h-6 text-primary-white dark:text-primary-gray-700' />
                  </div>
                </div>
              </div>
              <div
                style={vizStyle}
                className={cn(vizContainerVariants({ vizWidth }), vizClassName)}
              >
                {d.viz}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
);
VizCarousel.displayName = 'VizCarousel';

export { VizCarousel };
