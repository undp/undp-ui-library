import {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { ChevronLeft, ChevronRight, PauseIcon, PlayIcon } from 'lucide-react';

import { P } from './typography';

import { cn } from '@/lib/utils';

const cardVariants = cva('flex box-border justify-between', {
  variants: {
    vizWidth: {
      xs: 'w-3/4 flex-col pr-0 @2xl:pr-2 rtl:pr-0 @2xl:rtl:pl-2 rtl:pl-0 gap-4 min-w-60 grow pb-8 @2xl:pb-4',
      sm: 'w-2/3 flex-col pr-0 @2xl:pr-2 rtl:pr-0 @2xl:rtl:pl-2 rtl:pl-0 gap-4 min-w-60 grow pb-8 @2xl:pb-4',
      base: 'w-1/2 flex-col pr-0 @2xl:pr-2 rtl:pr-0 @2xl:rtl:pl-2 rtl:pl-0 gap-4 min-w-60 grow pb-8 @2xl:pb-4',
      lg: 'w-1/3 flex-col pr-0 @2xl:pr-2 rtl:pr-0 @2xl:rtl:pl-2 rtl:pl-0 gap-4 min-w-60 grow pb-8 @2xl:pb-4',
      xl: 'w-1/4 flex-col pr-0 @2xl:pr-2 rtl:pr-0 @2xl:rtl:pl-2 rtl:pl-0 gap-4 min-w-60 grow pb-8 @2xl:pb-4',
      full: 'w-full shrink-0 items-start gap-x-8 gap-y-4 mb-4 flex-wrap @2xl:flex-nowrap',
    },
  },
  defaultVariants: { vizWidth: 'base' },
});

const vizContainerVariants = cva('flex box-border grow shrink-0', {
  variants: {
    vizWidth: {
      xs: 'w-1/4 pl-0 @2xl:pl-2 rtl:pr-0 rtl:pl-0 @2xl:rtl:pr-2 min-w-60 pb-0 @2xl:pb-4',
      sm: 'w-1/3 pl-0 @2xl:pl-2 rtl:pr-0 rtl:pl-0 @2xl:rtl:pr-2 min-w-60 pb-0 @2xl:pb-4',
      base: 'w-1/2 pl-0 @2xl:pl-2 rtl:pr-0 rtl:pl-0 @2xl:rtl:pr-2 min-w-60 pb-0 @2xl:pb-4',
      lg: 'w-2/3 pl-0 @2xl:pl-2 rtl:pr-0 rtl:pl-0 @2xl:rtl:pr-2 min-w-60 pb-0 @2xl:pb-4',
      xl: 'w-3/4 pl-0 @2xl:pl-2 rtl:pr-0 rtl:pl-0 @2xl:rtl:pr-2 min-w-60 pb-0 @2xl:pb-4',
      full: 'w-full',
    },
  },
  defaultVariants: { vizWidth: 'base' },
});

interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  slides: {
    content: ReactNode;
    viz: ReactNode;
  }[];
  slideNo?: boolean;
  autoScroll?: boolean | number;
  classNames?: {
    content?: string;
    viz?: string;
    arrowButton?: string;
    arrows?: string;
    playPauseButton?: string;
    playPauseIcon?: string;
    progressBar?: string;
    progressBarBg?: string;
  };
  styles?: {
    content?: CSSProperties;
    viz?: CSSProperties;
    arrowButton?: CSSProperties;
    arrows?: CSSProperties;
    playPauseButton?: CSSProperties;
    playPauseIcon?: CSSProperties;
    progressBar?: CSSProperties;
    progressBarBg?: CSSProperties;
  };
}

const VizCarousel = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      vizWidth,
      slides,
      styles,
      classNames,
      slideNo = true,
      autoScroll = false,
      ...props
    },
    ref,
  ) => {
    const WrapperRef = useRef<HTMLDivElement>(null);
    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [paused, setPaused] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);
    const [slide, setSlide] = useState(1);
    const [progress, setProgress] = useState(0);
    const progressInterval = 50;
    useEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          const visible = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visible.length > 0) {
            const index = slideRefs.current.findIndex(ref => ref === visible[0].target);
            if (index !== -1) setSlide(index + 1);
          }
        },
        {
          root: WrapperRef.current,
          threshold: 1,
        },
      );

      slideRefs.current.forEach(ref => {
        if (ref) observer.observe(ref);
      });

      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        slideRefs.current.forEach(ref => {
          if (ref) observer.unobserve(ref);
        });
      };
    }, []);

    useEffect(() => {
      if (!autoScroll) return;
      const interval = typeof autoScroll === 'number' ? autoScroll : 5000;
      let currentProgress = progress;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (!paused && !mouseOver) {
        intervalRef.current = setInterval(() => {
          currentProgress += (progressInterval / interval) * 100;

          if (currentProgress >= 100) {
            currentProgress = 0;
            setProgress(0);
            if (!WrapperRef.current) return;
            const parentWithDir = WrapperRef.current.closest('[dir]');
            const isRTL = parentWithDir?.getAttribute('dir') === 'rtl';
            const scrollBy = isRTL ? -280 : 280;

            if (slide === slides.length) {
              WrapperRef.current.scrollTo({
                left: isRTL ? WrapperRef.current.scrollWidth : 0,
                behavior: 'smooth',
              });
              setSlide(1);
            } else {
              WrapperRef.current.scrollBy({
                left: scrollBy,
                behavior: 'smooth',
              });
              setSlide(prev => prev + 1);
            }
          } else {
            setProgress(currentProgress);
          }
        }, progressInterval);
      }
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [autoScroll, mouseOver, paused, slide, slides.length, progress]);

    return (
      <div
        ref={ref}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        className='@container w-full'
      >
        {autoScroll ? (
          <div
            className={cn(
              'w-full h-4 bg-primary-gray-300 dark:bg-primary-gray-600 rounded-full overflow-hidden mb-4',
              classNames?.progressBarBg,
            )}
            style={styles?.progressBarBg}
          >
            <div
              className={cn(
                'h-full bg-accent-yellow transition-all duration-100 ease-linear',
                classNames?.progressBar,
              )}
              style={{ ...styles?.progressBar, width: `${progress}%` }}
            />
          </div>
        ) : null}
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
              ref={el => {
                slideRefs.current[i] = el;
              }}
              className={`flex box-border flex-wrap w-full shrink-0 snap-start ${vizWidth === 'full' ? 'flex-col items-start' : 'flex-row items-stretch'}`}
            >
              <div
                style={styles?.content}
                className={cn(cardVariants({ vizWidth }), classNames?.content)}
              >
                <div className='min-w-60 grow sm:grow-0'>{d.content}</div>
                <div className={`flex ${slideNo ? 'gap-2' : 'gap-3'} items-center shrink-0`}>
                  <div
                    style={styles?.arrowButton}
                    className={cn(
                      `rounded-full pr-1 w-9 h-9 @3xl:w-12 @3xl:h-12 border-0 flex items-center justify-center rtl:rotate-180`,
                      slide === 1
                        ? 'bg-primary-gray-400 dark:bg-primary-gray-550 cursor-not-allowed'
                        : 'cursor-pointer bg-primary-gray-700 dark:bg-primary-gray-100 hover:bg-primary-gray-600 dark:hover:bg-primary-gray-200',
                      classNames?.arrowButton,
                    )}
                    onClick={() => {
                      if (WrapperRef.current && slide !== 1) {
                        const parentWithDir = WrapperRef.current.closest('[dir]');
                        const scrollBy = parentWithDir?.getAttribute('dir') === 'rtl' ? 280 : -280;
                        setSlide(slide - 1);
                        WrapperRef.current.scrollBy(scrollBy, 0);
                      }
                    }}
                  >
                    <ChevronLeft
                      style={styles?.arrows}
                      className={cn(
                        'w-6 h-6 text-primary-white dark:text-primary-gray-700',
                        classNames?.arrows,
                      )}
                    />
                  </div>
                  {slideNo ? (
                    <P marginBottom='none' className='px-2! shrink-0'>
                      {slide} / {slides.length}
                    </P>
                  ) : null}
                  <div
                    className={cn(
                      `rounded-full pl-1 w-9 h-9 @3xl:w-12 @3xl:h-12 border-0 flex items-center justify-center rtl:rotate-180`,
                      slide === slides.length
                        ? 'bg-primary-gray-400 dark:bg-primary-gray-550 cursor-not-allowed'
                        : 'cursor-pointer bg-primary-gray-700 dark:bg-primary-gray-100 hover:bg-primary-gray-600 dark:hover:bg-primary-gray-200',
                      classNames?.arrowButton,
                    )}
                    style={styles?.arrowButton}
                    onClick={() => {
                      if (WrapperRef.current && slide !== slides.length) {
                        const parentWithDir = WrapperRef.current.closest('[dir]');
                        const scrollBy = parentWithDir?.getAttribute('dir') === 'rtl' ? -280 : 280;
                        setSlide(slide + 1);
                        WrapperRef.current.scrollBy(scrollBy, 0);
                      }
                    }}
                  >
                    <ChevronRight
                      style={styles?.arrows}
                      className={cn(
                        'w-6 h-6 text-primary-white dark:text-primary-gray-700',
                        classNames?.arrows,
                      )}
                    />
                  </div>
                  {autoScroll ? (
                    <div
                      style={styles?.playPauseButton}
                      className={cn(
                        'rounded-full w-9 h-9 @3xl:w-12 @3xl:h-12 border-2 border-primary-gray-600 dark:border-primary-white flex items-center justify-center cursor-pointer bg-transparent hover:bg-primary-gray-100 dark:hover:bg-primary-gray-600',
                        classNames?.playPauseButton,
                      )}
                      onClick={() => {
                        setPaused(!paused);
                      }}
                    >
                      {paused ? (
                        <PlayIcon
                          style={styles?.playPauseIcon}
                          strokeWidth={2}
                          className={cn(
                            'w-6 h-6 text-primary-gray-700 dark:text-primary-white',
                            classNames?.playPauseIcon,
                          )}
                        />
                      ) : (
                        <PauseIcon
                          strokeWidth={2}
                          style={styles?.playPauseIcon}
                          className={cn(
                            'w-6 h-6 text-primary-gray-700 dark:text-primary-white',
                            classNames?.playPauseIcon,
                          )}
                        />
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
              <div
                style={styles?.viz}
                className={cn(vizContainerVariants({ vizWidth }), classNames?.viz)}
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
