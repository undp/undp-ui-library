import type { Meta, StoryObj } from '@storybook/react-vite';
import type React from 'react';

import { Separator } from '@/index';

type PagePropsAndCustomArgs = React.ComponentProps<typeof Separator>;

const meta: Meta<PagePropsAndCustomArgs> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      type: 'string',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'background',
        'background-soft',
        'foreground',
        'foreground-soft',
        'surface',
        'surface-2xs',
        'surface-xs',
        'surface-sm',
        'surface-md',
        'surface-lg',
        'surface-xl',
        'surface-2xl',
        'surface-3xl',
        'surface-4xl',
      ],
      defaultValue: { summary: 'surface' },
    },
    orientation: {
      control: { type: 'inline-radio' },
      options: ['horizontal', 'vertical'],
      defaultValue: { summary: 'horizontal' },
    },
    thickness: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: { summary: 'xs' },
    },
  },
  args: {
    color: 'surface',
    orientation: 'horizontal',
    thickness: 'xs',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
        }`}
      >
        <Separator {...args} />
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {};
