import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

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
  },
  args: {
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
        <CheckboxGroup
          {...args}
          onValueChange={(d) => {
            // biome-ignore lint/suspicious/noConsole: This is to test in storybook
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
