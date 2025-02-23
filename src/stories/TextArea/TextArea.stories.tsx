import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Textarea>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Text area',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: '',
    },
    labelClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    textAreaClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  args: {
    label: 'Text area label',
  },
  render: ({ ...args }) => (
    <Textarea
      {...args}
      onChange={d => {
        console.log(d.target.value);
      }}
    />
  ),
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
