import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronLeft, ChevronRight, PauseIcon, PlayIcon } from 'lucide-react';
import {
  type CSSProperties,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { cn } from '@/lib/utils';
import { P } from './typography';

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
    const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [paused, setPaused] = useState(false);
    const [mouseOver, setMouseOver] = useState(false);
    const [slide, setSlide] = useState(1);
    const [progress, setProgress] = useState(0);
    const progressInterval = 50;
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visible.length > 0) {
            // biome-ignore lint/complexity/useIndexOf: It give other linting error
            const index = slideRefs.current.findIndex((ref) => ref === visible[0].target);
            if (index !== -1) setSlide(index + 1);
          }
        },
        {
          root: WrapperRef.current,
          threshold: 1,
        },
      );

      slideRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        slideRefs.current.forEach((ref) => {
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
              setSlide((prev) => prev + 1);
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
      // biome-ignore lint/a11y/noStaticElementInteractions: Div here for carousel element
      <div
        ref={ref}
        onMouseEnter={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        className='@container w-full'
      >
        {autoScroll ? (
          <div
            className={cn(
              'mb-4 h-4 w-full overflow-hidden rounded-full bg-surface-sm',
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
            'undp-scrollbar mr-auto mb-0 ml-auto flex w-full snap-x snap-mandatory scroll-p-0 scroll-pl-0 gap-6 overflow-x-auto pb-4',
            className,
          )}
          {...props}
        >
          {slides.map((d, i) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: order doesn't matter here
              key={`slide_no_${i}`}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              className={`box-border flex w-full shrink-0 snap-start flex-wrap ${vizWidth === 'full' ? 'flex-col items-start' : 'flex-row items-stretch'}`}
            >
              <div
                style={styles?.content}
                className={cn(cardVariants({ vizWidth }), classNames?.content)}
              >
                <div className='min-w-60 grow sm:grow-0'>{d.content}</div>
                <div className={`flex ${slideNo ? 'gap-2' : 'gap-3'} shrink-0 items-center`}>
                  <button
                    style={styles?.arrowButton}
                    type='button'
                    className={cn(
                      `flex @3xl:h-12 h-9 @3xl:w-12 w-9 items-center justify-center rounded-full border-0 bg-foreground pr-1 rtl:rotate-180`,
                      slide === 1
                        ? 'cursor-not-allowed opacity-disabled'
                        : 'cursor-pointer hover:bg-forground-soft',
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
                      className={cn('h-6 w-6 text-content-reverse', classNames?.arrows)}
                    />
                  </button>
                  {slideNo ? (
                    <P marginBottom='none' className='shrink-0 px-2!'>
                      {slide} / {slides.length}
                    </P>
                  ) : null}
                  <button
                    className={cn(
                      `flex @3xl:h-12 h-9 @3xl:w-12 w-9 items-center justify-center rounded-full border-0 bg-foreground pl-1 rtl:rotate-180`,
                      slide === slides.length
                        ? 'cursor-not-allowed opacity-disabled'
                        : 'cursor-pointer hover:bg-forground-soft',
                      classNames?.arrowButton,
                    )}
                    type='button'
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
                      className={cn('h-6 w-6 text-content-reverse', classNames?.arrows)}
                    />
                  </button>
                  {autoScroll ? (
                    <button
                      type='button'
                      style={styles?.playPauseButton}
                      className={cn(
                        'flex @3xl:h-12 h-9 @3xl:w-12 w-9 cursor-pointer items-center justify-center rounded-full border-2 border-stroke-2xl bg-transparent hover:bg-surface-hover',
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
                          className={cn('h-6 w-6 text-content-primary', classNames?.playPauseIcon)}
                        />
                      ) : (
                        <PauseIcon
                          strokeWidth={2}
                          style={styles?.playPauseIcon}
                          className={cn('h-6 w-6 text-content-primary', classNames?.playPauseIcon)}
                        />
                      )}
                    </button>
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
