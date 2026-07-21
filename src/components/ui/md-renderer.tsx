import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { cn } from '@/lib/utils';

function MarkdownRenderer({
  classNames,
  text,
  components,
}: {
  classNames?: {
    h1?: string;
    h2?: string;
    h3?: string;
    h4?: string;
    h5?: string;
    h6?: string;
    cite?: string;
    code?: string;
    blockquote?: string;
    p?: string;
    a?: string;
    ul?: string;
    ol?: string;
    li?: string;
    hr?: string;
    pre?: string;
    table?: string;
    thead?: string;
    td?: string;
    tr?: string;
    tbody?: string;
    th?: string;
  };
  components?: Components;
  text?: string;
}) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        ...{
          h1: (props) => (
            <h1
              className={cn(
                'mt-0 mr-0 mb-3 ml-0 p-0 font-bold font-heading text-h1-xs uppercase tracking-[0.06rem] md:mb-4 md:text-h1-sm lg:text-h1',
                classNames?.h1,
              )}
              {...props}
            />
          ),
          h2: (props) => (
            <h2
              className={cn(
                'mt-0 mr-0 mb-3 ml-0 p-0 font-bold font-inherit text-h2-xs md:mb-4 md:text-h2-sm lg:text-h2',
                classNames?.h2,
              )}
              {...props}
            />
          ),
          h3: (props) => (
            <h3
              className={cn(
                'mt-0 mr-0 mb-3 ml-0 p-0 font-inherit font-semibold text-h3-xs md:mb-4 md:text-h3-sm lg:text-h3',
                classNames?.h3,
              )}
              {...props}
            />
          ),
          h4: (props) => (
            <h4
              className={cn(
                'mt-0 mr-0 mb-3 ml-0 p-0 font-inherit font-normal text-h4-xs md:mb-4 md:text-h4-sm lg:text-h4',
                classNames?.h4,
              )}
              {...props}
            />
          ),
          h5: (props) => (
            <h5
              className={cn(
                'mt-0 mr-0 mb-3 ml-0 p-0 font-inherit font-normal text-h5-xs md:mb-4 md:text-h5-sm lg:text-h5',
                classNames?.h5,
              )}
              {...props}
            />
          ),
          h6: (props) => (
            <h6
              className={cn(
                'mt-0 mr-0 mb-3 ml-0 p-0 font-bold font-inherit text-h6-xs uppercase tracking-[0.48px] md:mb-4 md:text-h6-sm lg:text-h6',
                classNames?.h6,
              )}
              {...props}
            />
          ),
          cite: (props) => (
            <cite
              className={cn(
                'mt-0 mr-0 mb-3 ml-0 block p-0 font-inherit font-normal text-h5-xs md:mb-4 md:text-h5-sm lg:text-h5',
                classNames?.cite,
              )}
              {...props}
            />
          ),
          code: (props) => (
            <code
              className={cn(
                'm-0 bg-surface px-1 pb-1 font-mono text-content-primary text-p-xs md:text-p-sm lg:text-p',
                classNames?.code,
              )}
              {...props}
            />
          ),
          blockquote: (props) => (
            <blockquote
              className={cn(
                'm-0 font-inherit font-semibold text-h4-xs md:text-h4-sm lg:text-h4',
                classNames?.blockquote,
              )}
              {...props}
            />
          ),
          p: (props) => (
            <p
              className={cn('mt-0 mr-0 mb-5 ml-0 text-p-xs md:text-p-sm lg:text-p', classNames?.p)}
              {...props}
            />
          ),
          a: (props) => (
            <a
              className={cn(
                'undp-link bg-double-primary font-inherit text-content-primary',
                'cursor-pointer no-underline focus-visible:shadow-[0_0_0_var(--ring)] focus-visible:outline-hidden',
                classNames?.a,
              )}
              {...props}
            />
          ),
          ul: (props) => <ul className={cn('pl-6 rtl:pr-6 rtl:pl-0', classNames?.ul)} {...props} />,
          ol: (props) => <ol className={cn('pl-6 rtl:pr-6 rtl:pl-0', classNames?.ol)} {...props} />,
          li: (props) => (
            <li
              className={cn(
                'mb-6 pl-3 text-p-xs md:text-p-sm lg:text-p rtl:pr-3 rtl:pl-0',
                classNames?.li,
              )}
              {...props}
            />
          ),
          hr: (props) => (
            <hr
              className={cn('mb-4 h-[1px] w-full border-0 bg-surface-hard', classNames?.hr)}
              {...props}
            />
          ),
          pre: (props) => (
            <pre className={cn('mb-3 bg-surface p-4 md:mb-4', classNames?.pre)} {...props} />
          ),
          table: (props) => (
            <table className={cn('mb-4 w-full caption-bottom', classNames?.table)} {...props} />
          ),
          thead: (props) => <thead className={classNames?.thead} {...props} />,
          th: (props) => (
            <th
              className={cn(
                'whitespace-nowrap bg-surface py-3 pr-10 pl-3 text-left align-middle font-semibold text-p-xs md:text-p-sm lg:text-p rtl:pr-3 rtl:pl-10 rtl:text-right [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
                classNames?.th,
              )}
              {...props}
            />
          ),
          tbody: (props) => <tbody className={classNames?.tbody} {...props} />,
          tr: (props) => <tr className={cn('border-stroke border-b', classNames?.tr)} {...props} />,
          td: (props) => (
            <td
              className={cn(
                'whitespace-nowrap py-3 pr-10 pl-3 align-middle text-p-xs md:text-p-sm lg:text-p rtl:pr-3 rtl:pl-10 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
                classNames?.td,
              )}
              {...props}
            />
          ),
        },
        ...(components || {}),
      }}
    >
      {text}
    </ReactMarkdown>
  );
}

export { MarkdownRenderer };
