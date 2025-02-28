import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Switch>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['red', 'blue', 'black'],
      defaultValue: 'red',
    },
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  args: {},
  render: ({ ...args }, { globals: { theme } }) => {
    return (
      <div
        className={`p-4 ${theme} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Switch
          {...args}
          onChange={d => {
            console.log(d);
          }}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};
