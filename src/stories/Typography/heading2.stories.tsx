import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { H2 } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof H2>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Heading 2',
  component: H2,
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
  render: ({ ...args }, { globals: { theme, direction } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <H2 {...args}>Heading 2</H2>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof H2>;

export const Default: Story = {};
