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
      className={cn(
        '@container w-full flex gap-0 bg-primary-gray-200 dark:bg-primary-gray-250 items-stretch',
        className,
      )}
      {...props}
    />
  ),
);

const FeatureShowcaseIntro = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col justify-center box-border mx-0 @2xl:mx-[8.3333%] p-6 w-full @2xl:w-1/2 @2xl:p-8',
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
    className={cn(
      'text-left rtl:text-right text-primary-gray-700 dark:text-primary-gray-100',
      className,
    )}
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
    className={cn(
      'text-left rtl:text-right text-primary-gray-700 dark:text-primary-gray-100',
      className,
    )}
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
    <div className={cn('flex flex-col gap-0 w-full @2xl:w-1/2', className)}>
      <div className='mx-auto w-full'>
        <div className='relative overflow-hidden' ref={emblaRef}>
          <div className='flex'>
            {items.map((d) => (
              <div
                className='flex-[0_0_100%] min-w-0 border-b-16'
                key={d.index}
                style={{ borderColor: d.stripColor || 'var(--blue-600)' }}
              >
                <div className='h-full flex flex-col'>
                  <div className='h-[40vh] w-full overflow-hidden'>
                    <img
                      alt='card header'
                      src={d.headerImage}
                      className='h-full w-full object-cover object-center'
                    />
                  </div>
                  <div
                    className={`grow box-border bg-white dark:bg-primary-gray-650 px-10 pb-24 ${showTabs ? 'pt-24' : 'pt-10'}`}
                  >
                    {d.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {showTabs && (
            <div className='absolute top-[40vh] px-10 flex gap-2 pt-4 justify-between box-border w-full'>
              <div className='flex gap-4 items-center border-b-2 border-primary-gray-300 mb-[8px]'>
                {sections.map((d) => (
                  <button
                    type='button'
                    key={d.section}
                    className={`uppercase font-sans bg-transparent border-b-2 ${items[selectedIndex].section === d.section ? 'border-accent-red' : 'border-primary-gray-300'} font-base font-bold -mb-[2px]`}
                    onClick={() =>
                      emblaApi?.scrollTo(items.findIndex((el) => el.section === d.section))
                    }
                  >
                    {d.section}
                  </button>
                ))}
              </div>
              <P
                marginBottom='none'
                size='base'
                className='uppercase font-sans bg-transparent font-bold -mb-[2px]'
              >
                {items[selectedIndex].index}/{items[selectedIndex].total}
              </P>
            </div>
          )}
          <div className='absolute bottom-6 right-4 flex gap-1'>
            <button
              type='button'
              aria-label='Go to next page'
              onClick={goToPrev}
              disabled={!canPrev}
              className='p-2 bg-primary-gray-700 dark:bg-primary-gray-100 rtl:scale-x-[-1] rounded-full disabled:bg-primary-gray-400'
            >
              <ChevronLeft className='h-6 w-6 stroke-primary-gray-100 dark:stroke-primary-gray-700' />
            </button>
            <button
              type='button'
              onClick={goToNext}
              aria-label='Go to next page'
              disabled={!canNext}
              className='p-2 bg-primary-gray-700 dark:bg-primary-gray-100 rtl:scale-x-[-1] rounded-full disabled:bg-primary-gray-400'
            >
              <ChevronRight className='h-6 w-6 stroke-primary-gray-100 dark:stroke-primary-gray-700' />
            </button>
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
