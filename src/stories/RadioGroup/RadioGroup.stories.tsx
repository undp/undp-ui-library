import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof RadioGroup>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
    variant: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['red', 'blue', 'black'],
      defaultValue: 'red',
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
        <RadioGroup
          {...args}
          onValueChange={d => {
            console.log(d);
          }}
        >
          <RadioGroupItem label='Radio 1' value='Radio_1' />
          <RadioGroupItem label='Radio 2' value='Radio_2' />
        </RadioGroup>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {};
