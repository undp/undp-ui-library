import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { H4 } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof H4>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Heading 4',
  component: H4,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  render: ({ ...args }) => <H4 {...args}>Heading 4</H4>,
};

export default meta;

type Story = StoryObj<typeof H4>;

export const Default: Story = {};
