import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { A } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof A>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Hyperlink',
  component: A,
  tags: ['autodocs'],
  argTypes: { className: { control: { type: 'text' } } },
  render: ({ ...args }, { globals: { theme, direction, language } }) => (
    <div
      dir={direction}
      className={`p-4 ${theme} ${language} ${
        theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
      }`}
    >
      <A {...args}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
        augue eu sagittis facilisis. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos.
      </A>
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof A>;

export const Default: Story = {};
