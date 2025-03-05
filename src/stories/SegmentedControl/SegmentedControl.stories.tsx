import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof SegmentedControl>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Segmented Control',
  component: SegmentedControl,
  tags: ['autodocs'],
  argTypes: {
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
    defaultValue: 'option 1',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
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
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {};
