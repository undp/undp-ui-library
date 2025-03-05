import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { H1 } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof H1>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Heading 1',
  component: H1,
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
    fontType: 'heading',
  },
  render: ({ ...args }, { globals: { theme, direction } }) => (
    <div
      dir={direction}
      className={`p-4 ${theme} ${
        theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
      }`}
    >
      <H1 {...args}>Heading 1</H1>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof H1>;

export const Default: Story = {};
