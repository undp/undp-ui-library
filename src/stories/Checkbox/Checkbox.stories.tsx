import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Checkbox>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['red', 'blue', 'black', 'custom'],
      defaultValue: { summary: 'red' },
    },
    variant: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['light', 'normal'],
      defaultValue: { summary: 'normal' },
    },
    checkBoxClassName: { control: { type: 'text' } },
    checkIconClassName: { control: { type: 'text' } },
  },
  args: { 
    label: 'Checkbox',
    color: 'red',
    variant: 'normal',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Checkbox
          {...args}
          onCheckedChange={d => {
            // eslint-disable-next-line no-console
            console.log(d);
          }}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
