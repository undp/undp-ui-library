import React, { useEffect, useState } from 'react';

import {
  PaginationUnit,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './pagination';

import { cn } from '@/lib/utils';

interface PaginationProps {
  defaultPage?: number;
  total: number;
  pageSize: number;
  onChange: (page: number) => void;
  className?: string;
  classNames?: {
    control?: string;
    list?: string;
    navigation?: string;
    ellipsis?: string;
    active?: string;
  };
}

const getPageNumbers = (currentPageNo: number, totalPages: number) => {
  const pages: (number | 'ellipsis')[] = [];

  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Always show first page
  pages.push(1);

  if (currentPageNo <= 3) {
    pages.push(2, 3, 4, 'ellipsis');
  } else if (currentPageNo >= totalPages - 2) {
    pages.push('ellipsis', totalPages - 3, totalPages - 2, totalPages - 1);
  } else {
    pages.push('ellipsis', currentPageNo - 1, currentPageNo, currentPageNo + 1, 'ellipsis');
  }

  // Always show last page
  pages.push(totalPages);

  return pages;
};

function Pagination(props: PaginationProps) {
  const { defaultPage = 1, total, pageSize, onChange, className, classNames } = props;
  const totalPages = Math.ceil(total / pageSize);
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const [pageNumbers, setPageNumbers] = useState<(number | 'ellipsis')[]>(
    getPageNumbers(defaultPage, totalPages),
  );

  useEffect(() => {
    setPageNumbers(getPageNumbers(currentPage, totalPages));
  }, [currentPage, totalPages]);
  return (
    <PaginationUnit className={cn('select-none', className, classNames?.control)}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              if (currentPage > 1) {
                onChange(currentPage - 1);
                setCurrentPage(currentPage - 1);
              }
            }}
            className={cn(
              'cursor-pointer',
              classNames?.navigation,
              currentPage <= 1 && 'cursor-not-allowed pointer-events-none opacity-35',
            )}
          />
        </PaginationItem>

        {pageNumbers.map((page, index) => (
          <PaginationItem key={index}>
            {page === 'ellipsis' ? (
              <PaginationEllipsis className={classNames?.ellipsis} />
            ) : (
              <PaginationLink
                onClick={() => {
                  setCurrentPage(page);
                  onChange(page);
                }}
                className={cn(
                  'cursor-pointer w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-primary-gray-300',
                  classNames?.list,
                  page === currentPage && [
                    'bg-primary-blue-600 hover:bg-primary-blue-700 dark:bg-primary-blue-500 dark:hover:bg-primary-blue-400 hover:text-primary-white text-primary-white',
                    classNames?.active,
                  ],
                )}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={() => {
              if (currentPage < totalPages) {
                onChange(currentPage + 1);
                setCurrentPage(currentPage + 1);
              }
            }}
            className={cn(
              'cursor-pointer',
              classNames?.navigation,
              currentPage >= totalPages && 'cursor-not-allowed pointer-events-none opacity-35',
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationUnit>
  );
}

export { Pagination };
