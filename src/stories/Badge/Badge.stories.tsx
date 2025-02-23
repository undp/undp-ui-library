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
        'blue',
        'yellow',
        'green',
        'red',
        'azure',
        'outline',
      ],
      defaultValue: 'light-gray',
    },
    size: {
      control: { type: 'select' },
      type: 'string',
      options: ['base', 'xs', 'sm', 'lg', 'xl'],
      defaultValue: 'base',
    },
  },
  args: {
    variant: 'light-gray',
    size: 'base',
  },
  render: ({ ...args }) => <Badge {...args}>Badge</Badge>,
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
