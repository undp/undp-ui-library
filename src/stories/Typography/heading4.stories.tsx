import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { H4 } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof H4>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Heading 4',
  component: H4,
  tags: ['autodocs'],
  argTypes: {
    marginBottom: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'base', 'lg', 'xl'],
      defaultValue: 'primary',
    },
    fontType: {
      control: { type: 'select' },
      options: ['heading', 'body', 'ar', 'he'],
      defaultValue: 'body',
    },
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  args: {
    marginBottom: 'base',
    fontType: 'body',
  },
  render: ({ ...args }, { globals: { theme } }) => {
    return (
      <div
        className={`p-4 ${theme} ${
          theme === 'dark'
            ? 'bg-primary-gray-700 text-primary-white'
            : 'bg-primary-white'
        }`}
      >
        <H4 {...args}>Heading 4</H4>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof H4>;

export const Default: Story = {};
