import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Search } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Search>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {
    inputClassName: { control: { type: 'text' } },
    buttonClassName: { control: { type: 'text' } },
    inputSize: {
      control: { type: 'inline-radio' },
      options: ['sm', 'base'],
      defaultValue: { summary: 'base' },
    },
    inputVariant: {
      control: { type: 'inline-radio' },
      options: ['light', 'normal'],
      defaultValue: { summary: 'base' },
    },
    buttonVariant: {
      control: { type: 'inline-radio' },
      options: [
        'tertiary',
        'icon',
      ],
      defaultValue: { summary: 'icon' },
    },
    searchOnlyOnClick: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
    showSearchButton: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  args: {
    buttonVariant: 'icon',
    inputVariant: 'normal',
    inputSize: 'base',
    searchOnlyOnClick: false,
    showSearchButton: true,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Search
          {...args}
          onSearch={d => {
            // eslint-disable-next-line no-console
            console.log(d);
          }}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {};
