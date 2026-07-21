import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Spinner } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Spinner>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'foreground'],
      defaultValue: { summary: 'primary' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'base', 'lg'],
      defaultValue: { summary: 'base' },
    },
    show: {
      control: { type: 'boolean' },
      defaultValue: { summary: true },
    },
  },
  args: {
    color: 'primary',
    size: 'base',
    show: true,
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Spinner {...args} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
