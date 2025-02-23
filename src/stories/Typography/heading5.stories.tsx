import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { H5 } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof H5>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Heading 5',
  component: H5,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  render: ({ ...args }) => <H5 {...args}>Heading 5</H5>,
};

export default meta;

type Story = StoryObj<typeof H5>;

export const Default: Story = {};
