import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Input>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
    inputSize: {
      control: { type: 'inline-radio' },
      options: ['sm', 'base'],
      defaultValue: 'base',
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['light', 'normal'],
      defaultValue: 'normal',
    },
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Input
          {...args}
          placeholder='Text here...'
          onChange={d => {
            // eslint-disable-next-line no-console
            console.log(d.target.value);
          }}
        />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};
