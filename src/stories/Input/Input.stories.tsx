import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Input>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Input',
  component: Input,
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
    inputClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'base'],
      defaultValue: 'base',
    },
  },
  args: {
    label: 'Input by',
  },
  render: ({ ...args }) => (
    <Input
      {...args}
      onChange={d => {
        console.log(d.target.value);
      }}
    />
  ),
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};
