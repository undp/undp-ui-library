import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Checkbox>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Checkbox',
    },
    labelClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    checkBoxClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    checkIconClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  args: {
    label: 'Checkbox',
  },
  render: ({ ...args }) => (
    <Checkbox
      {...args}
      onCheckedChange={d => {
        console.log(d);
      }}
    />
  ),
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
