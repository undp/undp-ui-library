import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Blockquote } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Blockquote>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Blockquote {...args}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
          augue eu sagittis facilisis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
        </Blockquote>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {};
