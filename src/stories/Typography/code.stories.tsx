import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Code } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Code>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Code text',
  component: Code,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => (
    <div
      dir={direction}
      className={`p-4 ${theme} ${language} ${
        theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
      }`}
    >
      <Code {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
        augue eu sagittis facilisis. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos.
      </Code>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Default: Story = {};
