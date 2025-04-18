import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { CheckboxGroup, CheckboxGroupItem } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof CheckboxGroup>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Checkbox Group',
  component: CheckboxGroup,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['red', 'blue', 'black', 'custom'],
      defaultValue: 'red',
    },
    variant: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['light', 'normal'],
      defaultValue: 'red',
    },
  },
  args: {},
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <CheckboxGroup
          {...args}
          onValueChange={d => {
            // eslint-disable-next-line no-console
            console.log(d);
          }}
        >
          <CheckboxGroupItem value='Value 1' label='label 1' />
          <CheckboxGroupItem value='Value 2' label='label 2' />
        </CheckboxGroup>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {};
