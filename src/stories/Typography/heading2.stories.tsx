import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { H2 } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof H2>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Heading 2',
  component: H2,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  render: ({ ...args }) => <H2 {...args}>Heading 2</H2>,
};

export default meta;

type Story = StoryObj<typeof H2>;

export const Default: Story = {};
