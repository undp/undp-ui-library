import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { H6 } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof H6>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Heading 6',
  component: H6,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  render: ({ ...args }) => <H6 {...args}>Heading 6</H6>,
};

export default meta;

type Story = StoryObj<typeof H6>;

export const Default: Story = {};
