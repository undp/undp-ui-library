import type React from 'react';

import { cn } from '@/lib/utils';

function SdgBorder({
  sdgList,
  barClassName,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { sdgList?: number[]; barClassName?: string }) {
  return (
    <div {...props} className={cn('flex gap-0 w-full flex-nowrap', props.className)}>
      {(sdgList || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]).map((d) => {
        return (
          <div
            key={d}
            style={{ backgroundColor: `var(--sdg-${d})` }}
            className={cn('h-4 grow', barClassName)}
          />
        );
      })}
    </div>
  );
}

export { SdgBorder };
