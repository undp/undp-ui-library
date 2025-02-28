import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { H5 } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof H5>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Heading 5',
  component: H5,
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
        <H5 {...args}>Heading 5</H5>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof H5>;

export const Default: Story = {};
