import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Switch>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Switch label',
    },
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
    labelClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    switchClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  args: {
    label: 'Switch label',
  },
  render: ({ ...args }) => (
    <Switch
      {...args}
      onChange={d => {
        console.log(d);
      }}
    />
  ),
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};
