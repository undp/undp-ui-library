import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Spinner>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['red', 'blue', 'black', 'custom'],
      defaultValue: 'red',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'base', 'lg'],
      defaultValue: 'base',
    },
    show: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
  args: {
    size: 'base',
    show: true,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Spinner {...args} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
