import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { SegmentedControl } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof SegmentedControl>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Segmented Control',
  component: SegmentedControl,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: { control: { type: 'text' } },
    classNames: { control: { type: 'object' } },
    value: { control: { type: 'text' } },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'base'],
      defaultValue: { summary: 'base' },
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['normal', 'light'],
      defaultValue: { summary: 'normal' },
    },
    color: {
      control: { type: 'inline-radio' },
      options: ['red', 'blue', 'black', 'custom'],
      defaultValue: { summary: 'red' },
    },
  },
  args: {
    defaultValue: 'option 1',
    size: 'base',
    variant: 'normal',
    color: 'red',
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
            // eslint-disable-next-line no-console
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
