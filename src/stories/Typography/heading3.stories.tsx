import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { H3 } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof H3>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Heading 3',
  component: H3,
  tags: ['autodocs'],
  argTypes: {
    marginBottom: {
      control: { type: 'select' },
      options: [
        'none',
        '2xs',
        'xs',
        'sm',
        'base-responsive',
        'base',
        'lg',
        'xl',
      ],
      defaultValue: { summary: 'base-responsive' },
    },
    className: { control: { type: 'text' } },
  },
  args: { marginBottom: 'base-responsive' },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <H3 {...args}>Heading 3</H3>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof H3>;

export const Default: Story = {};
