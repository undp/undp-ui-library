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
      options: ['none', '2xs', 'xs', 'sm', 'base-responsive', 'base', 'lg', 'xl'],
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
        <H4 {...args}>Heading 4</H4>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof H4>;

export const Default: Story = {};
