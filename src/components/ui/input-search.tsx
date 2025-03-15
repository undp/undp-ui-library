import * as React from 'react';

import { SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Input } from './input';

const Search = React.forwardRef<
  Omit<React.HTMLAttributes<HTMLInputElement>, 'size'>,
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
  ({
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
  }) => {
    const [query, setQuery] = React.useState<string | undefined>(undefined);
    const [isFocused, setIsFocused] = React.useState(false);
    return (
      <div className={cn('flex gap-0', className)}>
        <div className='relative w-full'>
          <Input
            {...props}
            variant={inputVariant}
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
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {!isFocused && (query === '' || !query) && (
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-4 w-4 text-primary-gray-500 dark:text-primary-gray-400 mr-2' />
              <span className='text-primary-gray-500 dark:text-primary-gray-400'>
                {placeholder || 'Search...'}
              </span>
            </div>
          )}
        </div>
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
