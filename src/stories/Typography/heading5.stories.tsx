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
  args: { marginBottom: 'base-responsive' },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
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
