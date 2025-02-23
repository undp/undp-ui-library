import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof SegmentedControl>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Segmented Control',
  component: SegmentedControl,
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
    defaultValue: {
      control: { type: 'text' },
      defaultValue: '',
    },
    buttonClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
    activeButtonClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  args: {
    label: 'Segmented control',
    defaultValue: 'option 1',
  },
  render: ({ ...args }) => (
    <SegmentedControl
      {...args}
      onValueChange={d => {
        console.log(d);
      }}
      options={[
        {
          label: 'Option 1',
          value: 'option 1',
        },
        {
          label: 'Option 2',
          value: 'option 2',
        },
        {
          label: 'Option 3',
          value: 'option 3',
        },
      ]}
    />
  ),
};

export default meta;

type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {};
