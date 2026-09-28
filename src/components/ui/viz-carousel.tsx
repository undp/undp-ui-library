import { cva, type VariantProps } from 'class-variance-authority';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, PauseIcon, PlayIcon } from 'lucide-react';
import {
  type CSSProperties,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
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
  direction?: 'ltr' | 'rtl';
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
  showScroll?: boolean;
}

const VizCarousel = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      vizWidth,
      slides,
      styles,
      showScroll = true,
      classNames,
      slideNo = true,
      autoScroll = false,
      direction = 'ltr',
      ...props
    },
    ref,
  ) => {
    const delay = typeof autoScroll === 'number' ? autoScroll : 4000;
    const [isPaused, setIsPaused] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const plugins = useMemo(
      () =>
        autoScroll
          ? [
              Autoplay({
                delay,
                playOnInit: true,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
                stopOnFocusIn: false,
              }),
            ]
          : [],
      [autoScroll, delay],
    );

    const [emblaRef, emblaApi] = useEmblaCarousel(
      {
        align: 'start',
        direction,
        watchDrag: (_api, evt) => !(evt.target as Element | null)?.closest('button'),
      },
      plugins,
    );
    const [selected, setSelected] = useState(0);
    const [canPrev, setCanPrev] = useState(false);
    const [canNext, setCanNext] = useState(false);

    const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setSelected(emblaApi.selectedScrollSnap());
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    }, [emblaApi]);
    const onScroll = useCallback(() => {
      if (!emblaApi) return;

      setScrollProgress(emblaApi.scrollProgress());
    }, [emblaApi]);

    useEffect(() => {
      if (!emblaApi) return;
      onSelect();
      emblaApi.on('select', onSelect).on('reInit', onSelect).on('scroll', onScroll);
      return () => {
        emblaApi.off('select', onSelect).off('reInit', onSelect).off('scroll', onScroll);
      };
    }, [emblaApi, onSelect, onScroll]);

    const autoPlay = () => emblaApi?.plugins().autoplay;

    const togglePlay = () => {
      const autoPlayTemp = autoPlay();
      if (!autoPlayTemp) return;
      if (isPaused) {
        autoPlayTemp.play();
        setIsPaused(false);
      } else {
        autoPlayTemp.stop();
        setIsPaused(true);
      }
    };
    const count = emblaApi?.scrollSnapList().length ?? slides.length;
    return (
      <div ref={ref} className='@container w-full'>
        {/** biome-ignore lint/a11y/noStaticElementInteractions: This is just to pause the scrolling on hover of the whole carousel*/}
        <div
          ref={emblaRef}
          className={cn('mr-auto mb-0 ml-auto w-full overflow-hidden', className)}
          {...props}
          onMouseEnter={(e) => {
            props.onMouseEnter?.(e);
            if (autoScroll) autoPlay()?.stop();
          }}
          onMouseLeave={(e) => {
            props.onMouseLeave?.(e);
            if (autoScroll && !isPaused) autoPlay()?.play();
          }}
        >
          <div className='flex gap-6'>
            {slides.map((d, i) => (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: order doesn't matter here
                key={`slide_no_${i}`}
                className={`box-border flex min-w-0 shrink-0 grow-0 basis-full flex-wrap ${vizWidth === 'full' ? 'flex-col items-start' : 'flex-row items-stretch'}`}
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
                      disabled={!canPrev}
                      aria-label='Previous slide'
                      className={cn(
                        'flex @3xl:h-12 h-9 @3xl:w-12 w-9 items-center justify-center rounded-full border-0 bg-foreground pr-1 rtl:rotate-180',
                        canPrev
                          ? 'cursor-pointer hover:bg-forground-soft'
                          : 'cursor-not-allowed opacity-disabled',
                        classNames?.arrowButton,
                      )}
                      onClick={() => emblaApi?.scrollPrev()}
                    >
                      <ChevronLeft
                        style={styles?.arrows}
                        className={cn('h-6 w-6 text-content-reverse', classNames?.arrows)}
                      />
                    </button>
                    {slideNo ? (
                      <P marginBottom='none' className='shrink-0 px-2!'>
                        {selected + 1} / {slides.length}
                      </P>
                    ) : null}
                    <button
                      style={styles?.arrowButton}
                      type='button'
                      disabled={!canNext}
                      aria-label='Next slide'
                      className={cn(
                        'flex @3xl:h-12 h-9 @3xl:w-12 w-9 items-center justify-center rounded-full border-0 bg-foreground pl-1 rtl:rotate-180',
                        canNext
                          ? 'cursor-pointer hover:bg-forground-soft'
                          : 'cursor-not-allowed opacity-disabled',
                        classNames?.arrowButton,
                      )}
                      onClick={() => emblaApi?.scrollNext()}
                    >
                      <ChevronRight
                        style={styles?.arrows}
                        className={cn('h-6 w-6 text-content-reverse', classNames?.arrows)}
                      />
                    </button>
                    {autoScroll ? (
                      <button
                        type='button'
                        aria-label={!isPaused ? 'Play' : 'Pause'}
                        style={styles?.playPauseButton}
                        className={cn(
                          'flex @3xl:h-12 h-9 @3xl:w-12 w-9 cursor-pointer items-center justify-center rounded-full border-2 border-stroke-2xl bg-transparent hover:bg-surface-hover',
                          classNames?.playPauseButton,
                        )}
                        onClick={togglePlay}
                      >
                        {isPaused ? (
                          <PlayIcon
                            style={styles?.playPauseIcon}
                            strokeWidth={2}
                            className={cn(
                              'h-6 w-6 text-content-primary',
                              classNames?.playPauseIcon,
                            )}
                          />
                        ) : (
                          <PauseIcon
                            strokeWidth={2}
                            style={styles?.playPauseIcon}
                            className={cn(
                              'h-6 w-6 text-content-primary',
                              classNames?.playPauseIcon,
                            )}
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
      </div>
    );
  },
);
VizCarousel.displayName = 'VizCarousel';

export { VizCarousel };
