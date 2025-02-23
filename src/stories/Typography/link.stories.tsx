import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { A } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof A>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Hyperlink',
  component: A,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['light', 'dark'],
      defaultValue: 'light',
    },
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  args: {
    variant: 'light',
  },
  render: ({ ...args }) => (
    <A {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
      augue eu sagittis facilisis. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos.
    </A>
  ),
};

export default meta;

type Story = StoryObj<typeof A>;

export const Default: Story = {};
