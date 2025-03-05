import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { P } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof P>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Typography/Paragraph',
  component: P,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl'],
      defaultValue: 'base',
    },
    leading: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'base', 'lg', 'xl'],
      defaultValue: 'primary',
    },
    marginBottom: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'base', 'lg', 'xl'],
      defaultValue: 'primary',
    },
    fontType: {
      control: { type: 'select' },
      options: ['heading', 'body', 'ar', 'he'],
      defaultValue: 'body',
    },
    className: {
      control: { type: 'text' },
      defaultValue: '',
    },
  },
  args: {
    size: 'base',
    leading: 'base',
    marginBottom: 'base',
    fontType: 'body',
  },
  render: ({ ...args }, { globals: { theme, direction } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <P {...args}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit
          augue eu sagittis facilisis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
        </P>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof P>;

export const Default: Story = {};
