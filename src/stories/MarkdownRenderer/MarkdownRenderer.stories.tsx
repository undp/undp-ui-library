import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { MarkdownRenderer } from '@/components/ui/md-renderer';

type PagePropsAndCustomArgs = React.ComponentProps<typeof MarkdownRenderer>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Markdown Renderer',
  component: MarkdownRenderer,
  tags: ['autodocs'],
  argTypes: {
    classNames: {
      table: {
        type: {
          summary: 'object',
          detail: `{
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
}`,
        },
      },
    },
    text: {
      control: { type: 'text' },
      type: 'string',
    },
    components: {
      description:
        'Custom renderers for Markdown elements. Uses `Components` from `react-markdown`.',
      table: {
        type: {
          detail: `Components is a mapping of Markdown elements (e.g., h1, p, a) to custom React components.

Example:
{
  h1: ({ children }) => <h1 className="text-4xl">{children}</h1>,
  a: ({ href, children }) => <a href={href} target="_blank">{children}</a>
}`,
        },
      },
    },
  },
  args: {
    classNames: {},
    text: `A demo of markdown which follows [GitHub Flavored Markdown](https://github.github.com/gfm/)

___

##### Headings

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

___

##### Paragraphs and lists

This is a paragraph with some **bold text** and *italic text*.

This is another paragraph with a [link](https://example.com).

This is a code block:

\`\`\`javascript
console.log('Hello, world!');
\`\`\`  

This is a blockquote:

> This is a blockquote with some text.

This is a list:
- Item 1
- Item 2
- Item 3

This is an ordered list: 
1. First item
2. Second item
3. Third item

This is a table

| Month    | Savings |
| -------- | ------- |
| January  | $250    |
| February | $80     |
| March    | $420    |

This is a horizontal rule:
___ 


   

`,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <MarkdownRenderer {...args} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof MarkdownRenderer>;

export const Default: Story = {};
