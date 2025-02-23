import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { H3 } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof H3>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Heading 3',
  component: H3,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  render: ({ ...args }) => <H3 {...args}>Heading 3</H3>,
};

export default meta;

type Story = StoryObj<typeof H3>;

export const Default: Story = {};
