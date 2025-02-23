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
  render: ({ ...args }) => (
    <Code {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
      augue eu sagittis facilisis. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos.
    </Code>
  ),
};

export default meta;

type Story = StoryObj<typeof Code>;

export const Default: Story = {};
