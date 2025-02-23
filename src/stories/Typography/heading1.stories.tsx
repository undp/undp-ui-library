import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { H1 } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof H1>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Heading 1',
  component: H1,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  render: ({ ...args }) => <H1 {...args}>Heading 1</H1>,
};

export default meta;

type Story = StoryObj<typeof H1>;

export const Default: Story = {};
