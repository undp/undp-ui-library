import { SearchIcon } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Input } from './input';

const Search = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & {
    inputVariant?: 'light' | 'normal';
    inputClassName?: string;
    buttonClassName?: string;
    buttonVariant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'icon';
    rounded?: 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    showSearchButton?: boolean;
    searchOnlyOnClick?: boolean;
    buttonChildren?: React.ReactNode;
    inputSize?: 'sm' | 'base';
    onSearch?: (d?: string) => void;
  }
>(
  (
    {
      className,
      inputClassName,
      buttonClassName,
      onSearch,
      searchOnlyOnClick,
      buttonVariant,
      buttonChildren,
      showSearchButton,
      inputVariant,
      inputSize,
      rounded,
      placeholder,
      ...props
    },
    ref,
  ) => {
    const [query, setQuery] = React.useState<string | undefined>(undefined);
    const [isFocused, setIsFocused] = React.useState(false);
    return (
      <div className={cn('flex items-stretch gap-0', className)} ref={ref}>
        <div className='relative w-full'>
          <Input
            {...props}
            variant={inputVariant}
            type='text'
            className={inputClassName}
            onChange={(d) => {
              setQuery(d.target.value);
              if (!searchOnlyOnClick) {
                onSearch?.(d.target.value);
              }
            }}
            inputSize={inputSize}
            rounded={rounded}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                onSearch?.(query);
              }
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {!isFocused && (query === '' || !query) && (
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              {!buttonChildren ? (
                <SearchIcon className='mr-2 h-4 w-4 text-content-placeholder' />
              ) : null}
              <span className='text-content-placeholder'>{placeholder || 'Search...'}</span>
            </div>
          )}
        </div>
        {showSearchButton === false ? null : (
          <Button
            variant={buttonVariant || 'icon'}
            className={buttonClassName}
            padding={inputSize}
            arrow={false}
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
