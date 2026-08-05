import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { H2, P } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

const FeatureShowcase = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('@container flex w-full flex-wrap items-stretch gap-0 bg-surface', className)}
      {...props}
    />
  ),
);

const FeatureShowcaseIntro = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        '@5xl:mx-[8.3333%] mx-0 box-border flex @5xl:w-[33.3334%] w-full flex-col justify-center @5xl:p-8 p-6',
        className,
      )}
      {...props}
    />
  ),
);

FeatureShowcaseIntro.displayName = 'FeatureShowcaseIntro';

const FeatureShowcaseIntroTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <H2
    ref={ref}
    className={cn('text-left text-content-primary rtl:text-right', className)}
    {...props}
  />
));

FeatureShowcaseIntroTitle.displayName = 'FeatureShowcaseIntroTitle';

const FeatureShowcaseIntroBody = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <P
    ref={ref}
    className={cn('text-left text-content-primary rtl:text-right', className)}
    {...props}
  />
));

FeatureShowcaseIntroBody.displayName = 'FeatureShowcaseIntroBody';

function FeatureShowcaseCard(props: {
  showTabs?: boolean;
  className?: string;
  sections: {
    section: string;
    items: {
      headerImage: string;
      stripColor?: string;
      content: React.ReactNode;
    }[];
  }[];
}) {
  const { showTabs = true, sections, className } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();
  const items = sections.flatMap((group) =>
    group.items.map((item, index) => ({
      ...item,
      index: index + 1,
      section: group.section,
      total: group.items.length,
    })),
  );
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    update();

    emblaApi.on('select', update);
    emblaApi.on('reInit', update);

    return () => {
      emblaApi.off('select', update);
      emblaApi.off('reInit', update);
    };
  }, [emblaApi]);
  return (
    <div className={cn('flex @5xl:w-1/2 w-full flex-col gap-0', className)}>
      <div className='mx-auto w-full'>
        <div className='relative overflow-hidden' ref={emblaRef}>
          <div className='flex'>
            {items.map((d) => (
              <div
                className='min-w-0 flex-[0_0_100%] border-b-16'
                key={`${d.section}_${d.index}`}
                style={{ borderColor: d.stripColor || 'var(--blue-600)' }}
              >
                <div className='flex h-full flex-col'>
                  <div className='h-[40vh] w-full overflow-hidden'>
                    <img
                      alt='card header'
                      src={d.headerImage}
                      className='h-full w-full object-cover object-center'
                    />
                  </div>

                  <div
                    className={`box-border w-full grow bg-white @5xl:px-10 px-4 pb-24 ${showTabs ? 'pt-24' : 'pt-10'}`}
                  >
                    <div className='@5xl:w-3/4 w-full'>{d.content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {showTabs && (
            <div className='absolute top-[40vh] box-border flex w-full justify-between gap-2 @5xl:px-10 px-4 pt-10'>
              <div className='mb-2 flex items-center gap-4 border-stroke border-b-2'>
                {sections.map((d) => (
                  <button
                    type='button'
                    key={d.section}
                    className={`shrink-0 border-b-2 bg-transparent font-body uppercase ${items[selectedIndex].section === d.section ? 'border-primary' : 'border-stroke'} -mb-0.5 font-base font-bold`}
                    onClick={() =>
                      emblaApi?.scrollTo(items.findIndex((el) => el.section === d.section))
                    }
                  >
                    {d.section}
                  </button>
                ))}
              </div>
              <div className='@5xl:inline hidden'>
                <P
                  marginBottom='none'
                  size='base'
                  className='-mb-0.5 bg-transparent font-body font-bold uppercase'
                >
                  {items[selectedIndex].index}/{items[selectedIndex].total}
                </P>
              </div>
            </div>
          )}
          <div className='absolute @5xl:right-4 bottom-10 @5xl:left-auto left-4 flex @5xl:w-auto w-[calc(100%-32px)] items-center justify-between'>
            <div className='flex gap-1'>
              <button
                type='button'
                aria-label='Go to next page'
                onClick={goToPrev}
                disabled={!canPrev}
                className='rounded-full bg-foreground-soft p-2 text-content-reverse disabled:opacity-disabled rtl:scale-x-[-1]'
              >
                <ChevronLeft className='h-6 w-6' />
              </button>
              <button
                type='button'
                onClick={goToNext}
                aria-label='Go to next page'
                disabled={!canNext}
                className='rounded-full bg-foreground-soft p-2 text-content-reverse disabled:opacity-disabled rtl:scale-x-[-1]'
              >
                <ChevronRight className='h-6 w-6' />
              </button>
            </div>
            <div className='inline @5xl:hidden'>
              <P
                marginBottom='none'
                size='base'
                className='-mb-0.5 bg-transparent font-body font-bold uppercase'
              >
                {items[selectedIndex].index}/{items[selectedIndex].total}
              </P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export {
  FeatureShowcase,
  FeatureShowcaseCard,
  FeatureShowcaseIntro,
  FeatureShowcaseIntroBody,
  FeatureShowcaseIntroTitle,
};
