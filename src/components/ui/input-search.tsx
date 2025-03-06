import * as React from 'react';

import { SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Input } from './input';

const Search = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & {
    inputVariant?: 'light' | 'normal';
    inputClassName?: string;
    buttonClassName?: string;
    buttonVariant?:
      | 'primary'
      | 'primary-without-icon'
      | 'secondary'
      | 'secondary-without-icon'
      | 'tertiary'
      | 'link'
      | 'link-without-icon'
      | 'outline'
      | 'icon';
    showSearchButton?: boolean;
    searchOnlyOnClick?: boolean;
    buttonChildren?: React.ReactNode;
    size?: 'sm' | 'base';
    onSearch?: (d?: string) => void;
  }
>(
  (
    {
      className,
      inputClassName,
      buttonClassName,
      onSearch,
      size,
      searchOnlyOnClick,
      buttonVariant,
      buttonChildren,
      showSearchButton,
      inputVariant,
      placeholder,
      ...props
    },
    ref,
  ) => {
    const [query, setQuery] = React.useState<string | undefined>(undefined);
    return (
      <div className={cn('flex gap-0', className)}>
        <Input
          {...props}
          variant={inputVariant}
          placeholder={placeholder || 'Search...'}
          ref={ref}
          type='text'
          className={inputClassName}
          onChange={d => {
            setQuery(d.target.value);
            if (!searchOnlyOnClick) {
              onSearch?.(d.target.value);
            }
          }}
          size={size}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              onSearch?.(query);
            }
          }}
        />
        {showSearchButton === false ? null : (
          <Button
            variant={buttonVariant || 'secondary-without-icon'}
            className={buttonClassName}
            padding={size}
            onClick={() => {
              onSearch?.(query);
            }}
          >
            {buttonChildren || <SearchIcon className='stroke-2' />}
          </Button>
        )}
      </div>
    );
  },
);
Search.displayName = 'Search';

export { Search };
