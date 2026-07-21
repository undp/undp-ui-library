import type { Meta, StoryObj } from '@storybook/react-vite';

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
        'surface-sm',
        'surface',
        'surface-xl',
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'warning',
        'success',
        'error',
        'outline',
      ],
      defaultValue: { summary: 'surface' },
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
      options: ['base', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
      defaultValue: { summary: 'full' },
    },
  },
  args: {
    variant: 'surface',
    size: 'base',
    rounded: 'full',
  },
  render: ({ ...args }, { globals: { theme, direction, language } }) => {
    return (
      <div
        dir={direction}
        className={`p-4 ${theme} ${language} ${
          theme === 'dark' ? 'bg-surface-2xl' : 'bg-primary-white'
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
