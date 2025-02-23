import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Separator>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['dark', 'light'],
      defaultValue: 'dark',
    },
    orientation: {
      control: { type: 'inline-radio' },
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
    },
  },
  args: {
    variant: 'dark',
    orientation: 'horizontal',
  },
  render: ({ ...args }) => <Separator {...args} />,
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {};
