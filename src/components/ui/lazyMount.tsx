import { type ComponentProps, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';

type LazyMountProps = Omit<ComponentProps<'div'>, 'ref'> & {
  placeholder?: React.ReactNode;
  offset?: number | string;
};
function LazyMount({
  children,
  placeholder = <Skeleton />,
  offset = 300,
  className,
  ...props
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(false);
  const rootMargin = typeof offset === 'number' ? `${offset}px` : offset;

  useEffect(() => {
    const el = ref.current;
    if (!el || shouldMount) return;
    if (!('IntersectionObserver' in window)) {
      setShouldMount(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldMount, rootMargin]);

  return (
    <div {...props} ref={ref} className={cn('h-full w-full', className)}>
      {shouldMount ? children : placeholder}
    </div>
  );
}

export { LazyMount };
