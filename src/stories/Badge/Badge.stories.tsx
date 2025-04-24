import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@/index';
import '../../index.css';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'light-gray',
        'gray',
        'dark-gray',
        'blue',
        'yellow',
        'green',
        'red',
        'azure',
        'outline',
        'custom',
      ],
      defaultValue: { summary: 'light-gray' },
    },
    size: {
      control: { type: 'select' },
      type: 'string',
      options: ['base', 'xs', 'sm', 'lg', 'xl'],
      defaultValue: { summary: 'base' },
    },
    rounded: {
      control: { type: 'inline-radio' },
      type: 'string',
      options: ['none', 'xs', 'sm', 'full'],
      defaultValue: { summary: 'full' },
    },
  },
  args: {
    variant: 'light-gray',
    size: 'base',
    rounded: 'full',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-primary-gray-700' : 'bg-primary-white'
        }`}
      >
        <Badge {...args}>Badge</Badge>
      </div>
    );
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
