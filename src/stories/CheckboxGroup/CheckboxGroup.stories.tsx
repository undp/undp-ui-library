import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxGroup, CheckboxGroupItem } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof CheckboxGroup>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Checkbox Group',
  component: CheckboxGroup,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      defaultValue: 'Checkbox group',
    },
    labelClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  args: {
    label: 'Checkbox group',
  },
  render: ({ ...args }) => (
    <CheckboxGroup
      {...args}
      onValueChange={d => {
        console.log(d);
      }}
    >
      <CheckboxGroupItem value='Value 1' label='label 1' />
      <CheckboxGroupItem value='Value 2' label='label 2' />
    </CheckboxGroup>
  ),
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {};
