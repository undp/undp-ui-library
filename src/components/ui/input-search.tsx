import * as React from 'react';

import { SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Label } from './label';
import { Button } from './button';

const Search = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & {
    label?: string;
    labelClassName?: string;
    inputClassName?: string;
    buttonClassName?: string;
    searchOnlyOnClick?: boolean;
    onSearch?: (d?: string) => void;
  }
>(
  (
    {
      className,
      label,
      labelClassName,
      inputClassName,
      buttonClassName,
      onSearch,
      searchOnlyOnClick,
      ...props
    },
    ref,
  ) => {
    const [query, setQuery] = React.useState<string | undefined>(undefined);
    return (
      <div className={cn('flex flex-col gap-1.5', className)}>
        {label ? <Label className={labelClassName}>{label}</Label> : null}
        <div className='flex gap-0'>
          <input
            {...props}
            ref={ref}
            type='text'
            className={cn(
              'w-full border-2 grow border-primary-black bg-transparent p-2.5 text-base transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-25',
              inputClassName,
            )}
            onChange={d => {
              setQuery(d.target.value);
              if (!searchOnlyOnClick) {
                onSearch?.(d.target.value);
              }
            }}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                onSearch?.(query);
              }
            }}
          />
          <Button variant='secondary-without-icon' className={buttonClassName}>
            <SearchIcon
              className='stroke-2'
              onClick={() => {
                onSearch?.(query);
              }}
            />
          </Button>
        </div>
      </div>
    );
  },
);
Search.displayName = 'Search';

export { Search };
