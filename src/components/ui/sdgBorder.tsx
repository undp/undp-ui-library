import React from 'react';

import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  sdgList?: number[];
  barClassName?: string;
}

function SdgBorder({ sdgList, barClassName, ...props }: Props) {
  return (
    <div
      {...props}
      className={cn('flex gap-0 w-full flex-nowrap', props.className)}
    >
      {(
        sdgList || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
      ).map((d, i) => {
        return (
          <div
            key={i}
            style={{ backgroundColor: `var(--sdg-${d})` }}
            className={cn('h-4 grow', barClassName)}
          />
        );
      })}
    </div>
  );
}

export { SdgBorder };
