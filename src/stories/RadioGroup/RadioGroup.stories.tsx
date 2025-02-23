import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof RadioGroup>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Radio Group',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Radio group',
    },
    labelClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    radioClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  args: {
    label: 'Radio group',
  },
  render: ({ ...args }) => (
    <RadioGroup
      {...args}
      onValueChange={d => {
        console.log(d);
      }}
    >
      <RadioGroupItem label='Radio 1' value='Radio_1' />
      <RadioGroupItem label='Radio 2' value='Radio_2' />
    </RadioGroup>
  ),
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {};
