import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SdgBorder } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof SdgBorder>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'UI/SDG Border',
  component: SdgBorder,
  tags: ['autodocs'],
  argTypes: {
    barClassName: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  args: {
    sdgList: undefined,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => (
    <div
      dir={direction}
      className={`p-4 ${theme} ${language} ${
        theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
      }`}
    >
      <SdgBorder {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof SdgBorder>;

export const Default: Story = {};
