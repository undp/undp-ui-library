import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Textarea } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Textarea>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Text area',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    className: { control: { type: 'text' } },
    variant: {
      control: { type: 'inline-radio' },
      options: ['light', 'normal'],
      defaultValue: { summary: 'normal' },
    },
    rounded: {
      control: { type: 'select' },
      options: ['base', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      defaultValue: 'base',
    },
  },
  args: { variant: 'normal', rounded: 'base' },
  render: ({ ...args }, { globals: { theme, direction, language } }) => (
    <div
      dir={direction}
      className={`p-4 ${theme} ${language} ${
        theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
      }`}
    >
      <Textarea
        {...args}
        onChange={(d) => {
          // biome-ignore lint/suspicious/noConsole: This is to test in storybook
          console.log(d.target.value);
        }}
      />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};
