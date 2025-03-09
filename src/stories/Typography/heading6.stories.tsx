import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { H6 } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof H6>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Heading 6',
  component: H6,
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
      defaultValue: 'primary',
    },
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  args: {
    marginBottom: 'base-responsive',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => (
    <div
      dir={direction}
      className={`p-4 ${theme} ${language} ${
        theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
      }`}
    >
      <H6 {...args}>Heading 6</H6>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof H6>;

export const Default: Story = {};
