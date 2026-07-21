import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationUnit,
} from './pagination';

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

function Pagination(props: {
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
}) {
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
              currentPage <= 1 && 'pointer-events-none cursor-not-allowed opacity-35',
            )}
          />
        </PaginationItem>

        {pageNumbers.map((page) => (
          <PaginationItem key={page}>
            {page === 'ellipsis' ? (
              <PaginationEllipsis className={classNames?.ellipsis} />
            ) : (
              <PaginationLink
                onClick={() => {
                  setCurrentPage(page);
                  onChange(page);
                }}
                className={cn(
                  'flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-full hover:bg-surface-hover',
                  classNames?.list,
                  page === currentPage && [
                    'bg-secondary text-content-reverse hover:bg-secondary-hover',
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
              currentPage >= totalPages && 'pointer-events-none cursor-not-allowed opacity-35',
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationUnit>
  );
}

export { Pagination };
