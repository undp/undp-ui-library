import React, { ReactNode, useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';

const VizCarouselContext = React.createContext<{
  vizWidth?: 'xs' | 'sm' | 'base' | 'lg' | 'full' | 'xl' | null;
  border?: boolean | null;
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  vizHeight: string;
}>({
  vizWidth: 'base',
  wrapperRef: { current: null },
  vizHeight: 'auto',
});

const cardVariants = cva('flex box-border justify-between', {
  variants: {
    vizWidth: {
      xs: 'w-3/4 flex-col pr-2 rtl:pl-2 gap-4 min-w-80 grow pb-4',
      sm: 'w-2/3 flex-col pr-2 rtl:pl-2 gap-4 min-w-80 grow pb-4',
      base: 'w-1/2 flex-col pr-2 rtl:pl-2 gap-4 min-w-80 grow pb-4',
      lg: 'w-1/3 flex-col pr-2 rtl:pl-2 gap-4 min-w-80 grow pb-4',
      xl: 'w-1/4 flex-col pr-2 rtl:pl-2 gap-4 min-w-80 grow pb-4',
      full: 'w-full shrink-0 items-start gap-8 mb-4',
    },
  },
  defaultVariants: { vizWidth: 'base' },
});

const vizContainerVariants = cva('flex box-border shrink-0', {
  variants: {
    vizWidth: {
      xs: 'w-1/4 pl-2 rtl:pr-2 min-w-80 grow pb-4',
      sm: 'w-1/3 pl-2 rtl:pr-2 min-w-80 grow pb-4',
      base: 'w-1/2 pl-2 rtl:pr-2 min-w-80 grow pb-4',
      lg: 'w-2/3 pl-2 rtl:pr-2 min-w-80 grow pb-4',
      xl: 'w-3/4 pl-2 rtl:pr-2 min-w-80 grow pb-4',
      full: 'w-full',
    },
  },
  defaultVariants: { vizWidth: 'base' },
});

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  vizHeight?: string;
  slides: {
    content: ReactNode;
    viz: ReactNode;
  }[];
}

const VizCarousel = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, vizWidth, slides, vizHeight = 'auto', ...props }) => {
    const WrapperRef = React.useRef<HTMLDivElement>(null);
    const [slide, setSlide] = useState(1);
    const contextValue = React.useMemo(
      () => ({
        vizWidth,
        vizHeight,
        wrapperRef: WrapperRef,
      }),
      [vizWidth, vizHeight, WrapperRef],
    );
    return (
      <VizCarouselContext.Provider value={contextValue}>
        <div
          ref={WrapperRef}
          className={cn(
            'mr-auto ml-auto mb-0 undp-scrollbar w-full pb-4 gap-6 flex snap-x snap-mandatory scroll-p-0 scroll-pl-0 overflow-x-auto',
            className,
          )}
          {...props}
        >
          <div className='w-full flex gap-6'>
            {slides.map((d, i) => (
              <div
                key={i}
                className={`flex box-border flex-wrap items-stretch w-full shrink-0 snap-start ${vizWidth === 'full' ? 'flex-col' : 'flex-row'}`}
              >
                <div className={cn(cardVariants({ vizWidth }))}>
                  <div>{d.content}</div>
                  <div className='flex gap-4'>
                    <div
                      className={`rounded-full p-1 rtl:rotate-180 ${slide === 1 ? 'bg-primary-gray-300 dark:bg-primary-gray-550 cursor-not-allowed' : 'cursor-pointer bg-primary-gray-700 dark:bg-primary-gray-100'}`}
                      onClick={() => {
                        if (WrapperRef.current && slide !== 1) {
                          setSlide(slide - 1);
                          WrapperRef.current.scrollBy(-280, 0);
                        }
                      }}
                    >
                      <ChevronLeft className='w-6 h-6 text-primary-white dark:text-primary-gray-700' />
                    </div>
                    <div
                      className={`rounded-full p-1 rtl:rotate-180 ${slide === slides.length ? 'bg-primary-gray-300 dark:bg-primary-gray-550 cursor-not-allowed' : 'cursor-pointer bg-primary-gray-700 dark:bg-primary-gray-100'}`}
                      onClick={() => {
                        if (WrapperRef.current && slide !== slides.length) {
                          setSlide(slide + 1);
                          WrapperRef.current.scrollBy(280, 0);
                        }
                      }}
                    >
                      <ChevronRight className='w-6 h-6 text-primary-white dark:text-primary-gray-700' />
                    </div>
                  </div>
                </div>
                <div
                  style={{ height: vizHeight }}
                  className={cn(vizContainerVariants({ vizWidth }))}
                >
                  {d.viz}
                </div>
              </div>
            ))}
          </div>
        </div>
      </VizCarouselContext.Provider>
    );
  },
);
VizCarousel.displayName = 'VizCarousel';

export { VizCarousel };
