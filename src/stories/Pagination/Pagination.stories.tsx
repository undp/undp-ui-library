import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Pagination>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    defaultPage: {
      control: { type: 'number' },
      defaultValue: { summary: 1 },
    },
    total: { control: { type: 'number' } },
    pageSize: {
      control: { type: 'number' },
      defaultValue: { summary: 10 },
    },
    classNames: {
      control: { type: 'object' },
    },
  },
  args: {
    defaultPage: 1,
    total: 100,
    pageSize: 10,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Pagination
          {...args}
          onChange={d => {
            // eslint-disable-next-line no-console
            console.log(d);
          }}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};
