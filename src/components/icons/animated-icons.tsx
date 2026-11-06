import { cn } from '@/lib/utils';

function ExternalLink({ className, size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 48 48'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn('external-link-icon group/icon', className)}
    >
      <title>External link icon</title>
      <g transform='translate(0,16)'>
        <path d='M16 21V21L2 21V6' />
        <g transform='translate(-3,3)'>
          <g className='translate-x-0 translate-y-0 transition-transform duration-200 ease-in-out hover:translate-x-1.5 group-hover/btn:translate-x-1.5 group-hover/icon:translate-x-1.5 group-hover:translate-x-1.5 group-hover/btn:-translate-y-1.5 group-hover/icon:-translate-y-1.5 group-hover:-translate-y-1.5'>
            <path d='m21 3-9 9' />
            <path d='M15 3h6v6' />
          </g>
        </g>
      </g>
    </svg>
  );
}

function Download({ className, size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size * 2}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn('download-icon group/icon', className)}
    >
      <title>Download icon</title>
      <g className='translate-y-0 transition-transform duration-200 ease-in-out hover:-translate-y-2 group-hover/btn:-translate-y-2 group-hover/icon:-translate-y-2 group-hover:-translate-y-2'>
        <path d='M12 15V3' />
        <path d='m7 10 5 5 5-5' />
      </g>
      <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
    </svg>
  );
}

function Arrow1({ className }: { className?: string }) {
  return (
    <svg
      width='26'
      height='24'
      viewBox='0 0 26 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('arrow-1 group/icon', className)}
    >
      <title>Chevron right icon</title>
      <g className='translate-x-0 transition-transform duration-200 ease-in-out hover:translate-x-1.75 group-hover/btn:translate-x-1.75 group-hover/icon:translate-x-1.75 group-hover:translate-x-1.75'>
        <path d='M1 3 L11 11.5L1 21' stroke='currentColor' strokeWidth='2' />
      </g>
    </svg>
  );
}

function Arrow2({ className }: { className?: string }) {
  return (
    <svg
      width='93'
      height='24'
      viewBox='0 0 93 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('arrow-2 group/icon', className)}
    >
      <title>Chevron right icon</title>
      <g className='translate-x-0 transition-transform duration-200 ease-in-out group-hover/btn:translate-x-16.75 group-hover/icon:translate-x-16.75 group-hover:translate-x-16.75'>
        <path d='M1 3 L11 11.5L1 21' stroke='currentColor' strokeWidth='2' />
      </g>
      <g className='scale-x-0 transition-transform duration-200 ease-in-out group-hover/btn:scale-x-100 group-hover/icon:scale-x-100 group-hover:scale-x-100'>
        <path d='M1 11.5L78 11.5' stroke='currentColor' strokeWidth='2' />
      </g>
    </svg>
  );
}

export { Arrow1, Arrow2, Download, ExternalLink };
