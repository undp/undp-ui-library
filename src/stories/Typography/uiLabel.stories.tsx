import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Label>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/UI Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
    language: {
      control: { type: 'inline-radio' },
      options: ['en', 'ar', 'he'],
      defaultValue: '',
    },
  },
  render: ({ ...args }, { globals: { theme, direction } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Label {...args}>UI Label</Label>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};
