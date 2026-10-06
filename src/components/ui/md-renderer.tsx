import { Markdown, type MarkdownComponents } from '@tanstack/markdown/react';

import { cn } from '@/lib/utils';
import { Li, Ol, Ul } from './list';
import { Separator } from './separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table';
import { A, Blockquote, Code, H1, H2, H3, H4, H5, H6, P } from './typography';

function MarkdownRenderer({
  classNames,
  text,
  components,
  size = 'base',
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
  components?: MarkdownComponents;
  text: string;
  size?: 'base' | 'base-responsive';
}) {
  const defaultComponents: MarkdownComponents = {
    h1: (props) => <H1 className={classNames?.h1} marginBottom={size} {...props} />,
    h2: (props) => <H2 className={classNames?.h2} marginBottom={size} {...props} />,
    h3: (props) => <H3 className={classNames?.h3} marginBottom={size} {...props} />,
    h4: (props) => <H4 className={classNames?.h4} marginBottom={size} {...props} />,
    h5: (props) => <H5 className={classNames?.h5} marginBottom={size} {...props} />,
    h6: (props) => <H6 className={classNames?.h6} marginBottom={size} {...props} />,
    p: (props) => <P className={classNames?.p} size={size} {...props} />,

    a: (props) => <A className={classNames?.a} {...props} />,
    code: (props) => <Code className={classNames?.code} {...props} />,
    blockquote: (props) => <Blockquote className={classNames?.blockquote} {...props} />,

    ul: (props) => <Ul className={classNames?.ul} {...props} />,
    ol: (props) => <Ol className={classNames?.ol} {...props} />,
    li: (props) => <Li className={classNames?.li} {...props} />,

    hr: (_props) => <Separator className={classNames?.hr} />,

    pre: (props) => (
      <pre
        className={cn(
          'mb-3 overflow-x-auto bg-surface p-4',
          size === 'base' ? '' : 'md:mb-4',
          classNames?.pre,
        )}
        {...props}
      />
    ),

    table: (props) => <Table className={classNames?.table} {...props} />,
    thead: (props) => <TableHeader className={classNames?.thead} {...props} />,
    th: (props) => <TableHead className={classNames?.th} {...props} />,
    tbody: (props) => <TableBody className={classNames?.tbody} {...props} />,
    tr: (props) => <TableRow className={classNames?.tr} {...props} />,
    td: (props) => <TableCell className={classNames?.td} {...props} />,
  };

  return (
    <Markdown
      components={{
        ...defaultComponents,
        ...components,
      }}
    >
      {text}
    </Markdown>
  );
}

export { MarkdownRenderer };
