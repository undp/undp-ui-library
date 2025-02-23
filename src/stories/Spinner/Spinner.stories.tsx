import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Spinner>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'base', 'lg'],
      defaultValue: 'base',
    },
    show: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
  args: {
    size: 'base',
    show: true,
  },
  render: ({ ...args }) => <Spinner {...args} />,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
