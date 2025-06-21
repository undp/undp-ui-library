import ReactMarkdown, { Components } from 'react-markdown';

import { cn } from '@/lib/utils';

interface Props {
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
  };
  components?: Components;
  text?: string;
}

function MarkdownRenderer({ classNames, text, components }: Props) {
  return (
    <ReactMarkdown
      components={{
        ...{
          h1: props => (
            <h1
              className={cn(
                'mt-0 ml-0 mr-0 p-0 font-bold uppercase mb-3 md:mb-4 text-[2.938rem] md:text-[5.125rem] lg:text-[6.25rem] tracking-[0.06rem] leading-[1.08]',
                classNames?.h1,
              )}
              {...props}
            />
          ),
          h2: props => (
            <h2
              className={cn(
                'mt-0 ml-0 mr-0 p-0 mb-3 md:mb-4 text-[2.5rem] md:text-[2.813rem] lg:text-[3.438rem] font-bold leading-[1.1]',
                classNames?.h2,
              )}
              {...props}
            />
          ),
          h3: props => (
            <h3
              className={cn(
                'mt-0 ml-0 mr-0 p-0 mb-3 md:mb-4 text-[1.875rem] md:text-[2.188rem] font-semibold leading-[1.15]',
                classNames?.h3,
              )}
              {...props}
            />
          ),
          h4: props => (
            <h4
              className={cn(
                'mt-0 ml-0 mr-0 p-0 mb-3 md:mb-4 text-[1.563rem] md:text-[2.188rem] font-normal leading-[1.15]',
                classNames?.h4,
              )}
              {...props}
            />
          ),
          h5: props => (
            <h5
              className={cn(
                'mt-0 ml-0 mr-0 p-0 mb-3 md:mb-4 text-[1.25rem] md:text-[1.563rem] font-normal leading-[1.15]',
                classNames?.h5,
              )}
              {...props}
            />
          ),
          h6: props => (
            <h6
              className={cn(
                'mt-0 ml-0 mr-0 p-0 mb-3 md:mb-4 text-base font-bold leading-[1.15] uppercase tracking-[0.48px]',
                classNames?.h6,
              )}
              {...props}
            />
          ),
          cite: props => (
            <cite
              className={cn(
                'mt-0 ml-0 mr-0 p-0 mb-3 md:mb-4 text-xl md:text-2xl leading-[1.1] block font-normal',
                classNames?.cite,
              )}
              {...props}
            />
          ),
          code: props => (
            <code
              className={cn(
                'mt-0 ml-0 mr-0 p-0 mb-3 md:mb-4 font-mono mt-0 text-base bg-primary-gray-200 dark:bg-primary-gray-600 px-2 pb-2 text-primary-black dark:text-primary-white',
                classNames?.code,
              )}
              {...props}
            />
          ),
          blockquote: props => (
            <blockquote
              className={cn(
                'mt-0 ml-0 mr-0 p-0 mb-3 md:mb-4 text-[1.625rem] md:text-[2.188rem] font-semibold leading-[1.1] md:leading-[1.25]',
                classNames?.blockquote,
              )}
              {...props}
            />
          ),
          p: props => (
            <p
              className={cn(
                'mt-0 ml-0 mr-0 text-base md:text-xl leading-[1.4] mb-5',
                classNames?.p,
              )}
              {...props}
            />
          ),
          a: props => (
            <a
              className={cn(
                'undp-link light text-primary-black dark:text-primary-white dark:text-primary-white bg-double-red dark:bg-double-white',
                'cursor-pointer no-underline focus-visible:outline-hidden focus-visible:shadow-[0_0_0_#0468b1]',
                classNames?.a,
              )}
              {...props}
            />
          ),
          ul: props => <ul className={cn('pl-6 rtl:pr-6 rtl:pl-0', classNames?.ul)} {...props} />,
          ol: props => <ol className={cn('pl-6 rtl:pr-6 rtl:pl-0', classNames?.ol)} {...props} />,
          li: props => (
            <li
              className={cn('mb-6 pl-3 text-base md:text-xl rtl:pr-3 rtl:pl-0', classNames?.li)}
              {...props}
            />
          ),
          hr: props => (
            <hr
              className={cn(
                'border-0 h-[1px] w-full bg-primary-gray-600 dark:bg-primary-gray-200 mb-4',
                classNames?.hr,
              )}
              {...props}
            />
          ),
          pre: props => (
            <pre
              className={cn(
                'p-4 mb-3 md:mb-4 bg-primary-gray-200 dark:bg-primary-gray-600',
                classNames?.pre,
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
