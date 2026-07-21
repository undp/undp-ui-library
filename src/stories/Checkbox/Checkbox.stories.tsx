import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

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
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'foreground', 'surface'],
      defaultValue: { summary: 'primary' },
    },
    variant: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['light', 'normal'],
      defaultValue: { summary: 'normal' },
    },
    rounded: {
      control: { type: 'select' },
      type: 'string',
      options: ['base', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      defaultValue: { summary: 'base' },
    },
    checkBoxClassName: { control: { type: 'text' } },
    checkIconClassName: { control: { type: 'text' } },
  },
  args: {
    label: 'Checkbox',
    color: 'primary',
    variant: 'normal',
    rounded: 'base',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Checkbox
          {...args}
          onCheckedChange={(d) => {
            // biome-ignore lint/suspicious/noConsole: This is to test in storybook
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
