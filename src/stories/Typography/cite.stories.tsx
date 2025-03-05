import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Cite } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Cite>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Cite',
  component: Cite,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  render: ({ ...args }, { globals: { theme, direction } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Cite {...args}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
          augue eu sagittis facilisis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
        </Cite>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Cite>;

export const Default: Story = {};
